/**
 * Lab 2 -- The Stroop Effect: A 3-Part Attention Lab (Web / PsychoJS port)
 * =========================================================================
 *
 * Browser port of stroop_lab.py, built on the real PsychoJS runtime
 * (../lib/psychojs-2026.1.3.js + .css) rather than a bespoke canvas loop,
 * so it gets PsychoJS's own Window/TextStim/ShapeStim rendering, Keyboard
 * timing, participant-info dialog, and CSV data saving for free.
 *
 * Design constants, trial-generation logic, and per-trial timing below are
 * a direct port of the three tasks implemented in stroop_lab.py:
 *   1. Classic Color Stroop      -- name the ink color of a color word
 *   2. Numerical (Size-Congruity) Stroop -- judge NUMERICAL VALUE of two
 *      differently-sized digits (ignore physical size)
 *   3. Spatial Stroop            -- a brief-flash arrow task: identify the
 *      DIRECTION an arrow points, ignoring its (parafoveal) screen position
 *
 * PsychoJS architecture note: PsychoJS drives rendering via its own
 * requestAnimationFrame-based Scheduler -- a scheduled task function runs
 * every animation frame and returns Scheduler.Event.FLIP_REPEAT to keep
 * running, or .NEXT to hand off to the next queued task. Each block below
 * is implemented as ONE such task with an internal phase state machine
 * (fixation -> target -> feedback -> ITI), which plays the same role as
 * the explicit while-loops in the Python version.
 */

import { core, visual, util } from "../lib/psychojs-2026.1.3.js";

// ---------------------------------------------------------------------------
// GLOBAL TIMING / DESIGN CONSTANTS (ported from stroop_lab.py)
// ---------------------------------------------------------------------------
const FIXATION_DUR = 0.5; // seconds -- central "+" before each trial
const MAX_RESPONSE_DUR = 2.5; // seconds -- max time allowed for a response
const FEEDBACK_DUR = 0.3; // seconds -- "Correct" / "Incorrect" flash
const ITI_DUR = 0.5; // seconds -- blank inter-trial interval

// ---- Task 1: Classic Color Stroop ----
const COLOR_RGB = {
  RED: [1, -1, -1],
  GREEN: [-1, 1, -1],
  BLUE: [-1, -1, 1],
};
const COLOR_KEY = { RED: "r", GREEN: "g", BLUE: "b" };
// 9 trials/condition (9 congruent + 9 incongruent + 9 neutral = 27 total).
const TASK1_TRIALS_PER_CONDITION = 9;

// ---- Task 2: Numerical (Size-Congruity) Stroop ----
// The task-relevant judgment is NUMERICAL VALUE; physical (printed) size is
// the task-irrelevant, interfering dimension. Numerical gap is minimized
// (adjacent digits only) to keep the relevant judgment slow/effortful, and
// physical size contrast is maximized (~2.5x) so size is a strong, salient
// distractor -- both manipulations maximize conflict.
const DIGIT_SMALL_HEIGHT = 0.05; // 'height' units
const DIGIT_LARGE_HEIGHT = 0.125; // 2.5x DIGIT_SMALL_HEIGHT
const DIGIT_X_OFFSET = 0.25; // horizontal distance of each digit from center
const NUMERICAL_DISTANCE_MAX = 1; // adjacent digits only (e.g. 3 vs 4)
// 14 trials/condition (14 congruent + 14 incongruent = 28 total).
const TASK2_TRIALS_PER_CONDITION = 14;

// ---- Task 3: Spatial Stroop (Simon-type arrow/location conflict) ----
// Arrows are drawn as vector polygons (visual.ShapeStim), not Unicode
// glyphs, since text-rendered arrow glyphs can clip inside their own
// bounding box on some fonts -- vector shapes have no such font dependency.
const ARROW_LENGTH = 0.16; // 'height' units -- tip-to-tail length
const ARROW_SHAFT_HALF_WIDTH = 0.02;
const ARROW_HEAD_HALF_WIDTH = 0.05;
const ARROW_HEAD_LENGTH = 0.07;
// The arrow is on screen for only 175ms (below ~150-200ms saccade latency)
// before it disappears, leaving just the fixation cross, while the
// response window stays open for the full MAX_RESPONSE_DUR -- this forces
// the arrow to be processed at its original (parafoveal) location.
const ARROW_DISPLAY_DUR = 0.175; // seconds
const SPATIAL_OFFSET = 0.3; // 'height' units -- distance of arrow from center
// 14 trials/condition (14 congruent + 14 incongruent = 28 total).
const TASK3_TRIALS_PER_CONDITION = 14;

function arrowVertices(direction) {
  const L = ARROW_LENGTH;
  const sw = ARROW_SHAFT_HALF_WIDTH;
  const hw = ARROW_HEAD_HALF_WIDTH;
  const hl = ARROW_HEAD_LENGTH;
  switch (direction) {
    case "RIGHT":
      return [
        [-L / 2, -sw], [L / 2 - hl, -sw], [L / 2 - hl, -hw],
        [L / 2, 0],
        [L / 2 - hl, hw], [L / 2 - hl, sw], [-L / 2, sw],
      ];
    case "LEFT":
      return [
        [L / 2, -sw], [hl - L / 2, -sw], [hl - L / 2, -hw],
        [-L / 2, 0],
        [hl - L / 2, hw], [hl - L / 2, sw], [L / 2, sw],
      ];
    case "UP":
      return [
        [-sw, -L / 2], [sw, -L / 2], [sw, L / 2 - hl],
        [hw, L / 2 - hl],
        [0, L / 2],
        [-hw, L / 2 - hl],
        [-sw, L / 2 - hl],
      ];
    case "DOWN":
      return [
        [-sw, L / 2], [sw, L / 2], [sw, hl - L / 2],
        [hw, hl - L / 2],
        [0, -L / 2],
        [-hw, hl - L / 2],
        [-sw, hl - L / 2],
      ];
    default:
      throw new Error(`Unknown arrow direction: ${direction}`);
  }
}

const ARROW_VERTICES = {
  UP: arrowVertices("UP"),
  DOWN: arrowVertices("DOWN"),
  LEFT: arrowVertices("LEFT"),
  RIGHT: arrowVertices("RIGHT"),
};

// Each arrow is confined to its own axis (UP/DOWN vertical, LEFT/RIGHT
// horizontal); incongruent trials flip to the opposite end of the SAME
// axis rather than crossing axes.
const SPATIAL_POSITIONS = {
  UP: [0, SPATIAL_OFFSET],
  DOWN: [0, -SPATIAL_OFFSET],
  LEFT: [-SPATIAL_OFFSET, 0],
  RIGHT: [SPATIAL_OFFSET, 0],
};
const SPATIAL_OPPOSITE = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };

// ---------------------------------------------------------------------------
// SMALL RNG HELPERS
// ---------------------------------------------------------------------------
function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------------------------------------------------------------------------
// TRIAL-LIST BUILDERS (ported 1:1 from stroop_lab.py)
// ---------------------------------------------------------------------------
function buildTask1Trials() {
  const colors = Object.keys(COLOR_RGB);
  const mismatchPairs = [];
  for (const ink of colors) {
    for (const word of colors) {
      if (word !== ink) mismatchPairs.push([ink, word]);
    }
  }

  const trials = [];
  for (let i = 0; i < TASK1_TRIALS_PER_CONDITION; i++) {
    const c = choice(colors);
    trials.push({ condition: "congruent", word: c, ink: c });
  }
  for (let i = 0; i < TASK1_TRIALS_PER_CONDITION; i++) {
    const [ink, word] = choice(mismatchPairs);
    trials.push({ condition: "incongruent", word, ink });
  }
  for (let i = 0; i < TASK1_TRIALS_PER_CONDITION; i++) {
    const ink = choice(colors);
    trials.push({ condition: "neutral", word: "XXXX", ink });
  }
  return shuffle(trials);
}

function buildTask2Trials() {
  const digitPairs = [];
  for (let a = 1; a <= 9; a++) {
    for (let b = a + 1; b <= 9; b++) {
      if (b - a <= NUMERICAL_DISTANCE_MAX) digitPairs.push([a, b]);
    }
  }

  const trials = [];
  for (const condition of ["congruent", "incongruent"]) {
    for (let i = 0; i < TASK2_TRIALS_PER_CONDITION; i++) {
      const [d1, d2] = choice(digitPairs);
      const [left, right] = Math.random() < 0.5 ? [d1, d2] : [d2, d1];
      trials.push({ condition, left, right });
    }
  }
  return shuffle(trials);
}

function buildTask3Trials() {
  const directions = Object.keys(SPATIAL_POSITIONS);
  const trials = [];
  for (let i = 0; i < TASK3_TRIALS_PER_CONDITION; i++) {
    const d = choice(directions);
    trials.push({ condition: "congruent", word: d, position: d });
  }
  for (let i = 0; i < TASK3_TRIALS_PER_CONDITION; i++) {
    const d = choice(directions);
    trials.push({ condition: "incongruent", word: d, position: SPATIAL_OPPOSITE[d] });
  }
  return shuffle(trials);
}

// ---------------------------------------------------------------------------
// INSTRUCTIONS TEXT (ported from stroop_lab.py)
// ---------------------------------------------------------------------------
const TASK1_INSTRUCTIONS = [
  "TASK 1: COLOR STROOP",
  "",
  "A word will appear in the center of the screen, printed in colored ink.",
  "Your job is to identify the INK COLOR, and ignore what the word says.",
  "",
  "Press 'R' for RED ink",
  "Press 'G' for GREEN ink",
  "Press 'B' for BLUE ink",
  "",
  "Respond as quickly and accurately as you can.",
  "",
  "Press SPACE to begin.",
].join("\n");

const TASK2_INSTRUCTIONS = [
  "TASK 2: NUMERICAL STROOP",
  "",
  "Two digits will appear side by side, printed in different physical sizes.",
  "Your job is to identify which digit has the LARGER NUMERICAL VALUE,",
  "regardless of its physical (printed) size on screen.",
  "",
  "Press the LEFT ARROW if the left digit's VALUE is larger.",
  "Press the RIGHT ARROW if the right digit's VALUE is larger.",
  "",
  "Respond as quickly and accurately as you can.",
  "",
  "Press SPACE to begin.",
].join("\n");

const TASK3_INSTRUCTIONS = [
  "TASK 3: SPATIAL STROOP",
  "",
  "KEEP YOUR EYES LOCKED ON THE CENTRAL '+' AT ALL TIMES.",
  "Do not look directly at the arrow -- use your peripheral vision",
  "to see it while your eyes stay on the '+'.",
  "",
  "An arrow will flash BRIEFLY near the center, pointing",
  "UP, DOWN, LEFT, or RIGHT, then disappear.",
  "Your job is to identify the DIRECTION the arrow POINTS,",
  "and ignore where it appears on screen.",
  "",
  "Press the ARROW KEY that matches the direction the arrow points.",
  "",
  "Respond as quickly and accurately as you can.",
  "",
  "Press SPACE to begin.",
].join("\n");

const FINAL_SCREEN_TEXT = [
  "You're all done!",
  "Thank you for participating.",
  "",
  "Press SPACE to download your data and finish.",
].join("\n");

// ---------------------------------------------------------------------------
// PSYCHOJS SETUP
// ---------------------------------------------------------------------------
const expInfo = { participant: "", session: "001" };

const psychoJS = new core.PsychoJS({
  debug: false,
  collectIP: false,
});

// The window MUST be open before psychoJS.start() is called: PsychoJS's own
// Scheduler calls psychoJS.window.render() on every animation frame from
// the moment the scheduler starts (which happens as soon as start() runs,
// well before the participant dialog even closes) -- if the window were
// only opened later, inside a scheduled flow task, that first render()
// call would throw "Cannot read properties of undefined (reading
// 'render')" because psychoJS.window would still be undefined.
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color("gray"),
  units: "height",
  waitBlanking: true,
});
const win = psychoJS.window;

// Keyboard is created in experimentInit() once the participant dialog
// closes; declared here so later closures can reference it.
let keyboard = null;

/** Close the experiment: PsychoJS.quit() auto-saves/downloads the CSV
 * (environment=LOCAL + saveFormat=CSV means offerDataForDownload() is
 * called automatically) and shows a goodbye dialog. */
async function quitPsychoJS(message, isCompleted) {
  await psychoJS.quit({ message, isCompleted });
  return util.Scheduler.Event.QUIT;
}

function experimentInit() {
  keyboard = new core.Keyboard({ psychoJS, waitForStart: false });
  return util.Scheduler.Event.NEXT;
}

/**
 * A single-screen "press SPACE to continue" task, matching
 * show_instructions()/show_rt_summary() in the Python version.
 * `textOrFn` may be a literal string, or a zero-arg function returning the
 * text to display (used for the results summary, whose text depends on
 * trial data only available once the block has finished).
 */
function makeTextScreenTask(textOrFn) {
  let started = false;
  let stim = null;

  return function textScreenTask() {
    if (!started) {
      const text = typeof textOrFn === "function" ? textOrFn() : textOrFn;
      stim = new visual.TextStim({
        win,
        name: "textScreen",
        text,
        color: "white",
        height: 0.045,
        units: "height",
        wrapWidth: 1.4,
      });
      stim.setAutoDraw(true);
      keyboard.clearEvents();
      started = true;
      return util.Scheduler.Event.FLIP_REPEAT;
    }

    const keys = keyboard.getKeys({ keyList: ["space", "escape"], waitRelease: false, clear: true });
    if (keys.some((k) => k.name === "escape")) {
      stim.setAutoDraw(false);
      return quitPsychoJS("Experiment terminated early.", false);
    }
    if (keys.some((k) => k.name === "space")) {
      stim.setAutoDraw(false);
      return util.Scheduler.Event.NEXT;
    }
    return util.Scheduler.Event.FLIP_REPEAT;
  };
}

/**
 * Build the two scheduler tasks for one block: `trialsTask` runs every
 * trial in `config.buildTrials()` through fixation -> target -> feedback
 * -> ITI, logging each trial via psychoJS.experiment; `summaryTask` shows
 * mean RT (correct trials only) per condition once the block is done.
 * Mirrors run_task1/2/3() + show_rt_summary() in stroop_lab.py.
 */
function createBlock(config) {
  const trials = config.buildTrials();
  const records = []; // {condition, rt, correct} -- for the summary screen

  let trialIndex = 0;
  let phase = "begin";
  const phaseClock = new util.Clock();
  let currentTrial = null;
  let stims = null; // { persistent: [...], target: [...] }
  let feedbackStim = null;
  let responseKey = null;
  let responseRT = null;

  function beginTrial() {
    currentTrial = trials[trialIndex];
    stims = null;
    feedbackStim = null;
    responseKey = null;
    responseRT = null;
    phase = "fixation";
    phaseClock.reset();
  }

  function logAndAdvance() {
    const correctResponse = config.getCorrectResponse(currentTrial);
    const isCorrect = responseKey !== null && responseKey === correctResponse;

    psychoJS.experiment.addData("participant", expInfo.participant);
    psychoJS.experiment.addData("task_name", config.taskName);
    psychoJS.experiment.addData("trial_num", trialIndex + 1);
    psychoJS.experiment.addData("condition", currentTrial.condition);
    psychoJS.experiment.addData("stimulus", config.getStimulusDesc(currentTrial));
    psychoJS.experiment.addData("correct_response", correctResponse);
    psychoJS.experiment.addData("user_response", responseKey === null ? "" : responseKey);
    psychoJS.experiment.addData("is_correct", isCorrect);
    psychoJS.experiment.addData("rt_ms", responseRT === null ? "" : Math.round(responseRT * 10) / 10);
    psychoJS.experiment.nextEntry();

    records.push({ condition: currentTrial.condition, rt: responseRT, correct: isCorrect });

    trialIndex += 1;
  }

  const trialsTask = function trialsTask() {
    // Master escape check: polled every frame regardless of trial phase
    // (fixation/target/feedback/ITI) so the experimenter/participant can
    // always bail out cleanly, mirroring check_escape() in stroop_lab.py.
    // A separate keyList from the response-key polls below, so it never
    // interferes with them.
    if (keyboard.getKeys({ keyList: ["escape"], waitRelease: false, clear: true }).length > 0) {
      return quitPsychoJS("Experiment terminated early.", false);
    }

    switch (phase) {
      case "begin": {
        if (trialIndex >= trials.length) {
          return util.Scheduler.Event.NEXT;
        }
        beginTrial();
        return util.Scheduler.Event.FLIP_REPEAT;
      }

      case "fixation": {
        if (!stims) {
          // Reuse the "fixation" concept as a plain TextStim shown alone.
          stims = { persistent: [], target: [] };
          const fixationStim = new visual.TextStim({
            win, name: "fixation", text: "+", color: "white", height: 0.08, units: "height",
          });
          fixationStim.setAutoDraw(true);
          stims._fixationStim = fixationStim;
        }
        if (phaseClock.getTime() >= FIXATION_DUR) {
          stims._fixationStim.setAutoDraw(false);
          const built = config.buildStimuli(currentTrial);
          stims = built;
          stims.persistent.forEach((s) => s.setAutoDraw(true));
          stims.target.forEach((s) => s.setAutoDraw(true));
          keyboard.clearEvents();
          keyboard.clock.reset();
          phaseClock.reset();
          phase = config.brief ? "targetVisible" : "target";
        }
        return util.Scheduler.Event.FLIP_REPEAT;
      }

      case "targetVisible":
      case "target": {
        const keys = keyboard.getKeys({ keyList: config.validKeys(currentTrial), waitRelease: false, clear: true });
        if (keys.length > 0 && responseKey === null) {
          responseKey = keys[0].name;
          responseRT = keys[0].rt * 1000;
        }

        if (phase === "targetVisible" && phaseClock.getTime() >= config.brief.targetDur) {
          stims.target.forEach((s) => s.setAutoDraw(false));
          phase = "targetHidden";
          return util.Scheduler.Event.FLIP_REPEAT;
        }

        if (responseKey !== null || phaseClock.getTime() >= MAX_RESPONSE_DUR) {
          stims.target.forEach((s) => s.setAutoDraw(false));
          stims.persistent.forEach((s) => s.setAutoDraw(false));
          phase = "feedback";
          phaseClock.reset();
        }
        return util.Scheduler.Event.FLIP_REPEAT;
      }

      case "targetHidden": {
        const keys = keyboard.getKeys({ keyList: config.validKeys(currentTrial), waitRelease: false, clear: true });
        if (keys.length > 0 && responseKey === null) {
          responseKey = keys[0].name;
          responseRT = keys[0].rt * 1000;
        }
        if (responseKey !== null || phaseClock.getTime() >= MAX_RESPONSE_DUR) {
          stims.persistent.forEach((s) => s.setAutoDraw(false));
          phase = "feedback";
          phaseClock.reset();
        }
        return util.Scheduler.Event.FLIP_REPEAT;
      }

      case "feedback": {
        if (!feedbackStim) {
          const correctResponse = config.getCorrectResponse(currentTrial);
          const isCorrect = responseKey === correctResponse;
          feedbackStim = new visual.TextStim({
            win, name: "feedback",
            text: isCorrect ? "Correct" : "Incorrect",
            color: isCorrect ? "green" : "red",
            height: 0.08, units: "height",
          });
          feedbackStim.setAutoDraw(true);
        }
        if (phaseClock.getTime() >= FEEDBACK_DUR) {
          feedbackStim.setAutoDraw(false);
          phase = "iti";
          phaseClock.reset();
        }
        return util.Scheduler.Event.FLIP_REPEAT;
      }

      case "iti": {
        if (phaseClock.getTime() >= ITI_DUR) {
          logAndAdvance();
          phase = trialIndex >= trials.length ? "blockDone" : "begin";
        }
        return util.Scheduler.Event.FLIP_REPEAT;
      }

      case "blockDone":
        return util.Scheduler.Event.NEXT;

      default:
        return util.Scheduler.Event.NEXT;
    }
  };

  function summaryText() {
    const conditions = Array.from(new Set(records.map((r) => r.condition))).sort();
    const lines = [config.resultsTitle, "(mean RT, correct trials only)", ""];
    for (const cond of conditions) {
      const rts = records.filter((r) => r.condition === cond && r.correct && r.rt !== null).map((r) => r.rt);
      const label = cond.charAt(0).toUpperCase() + cond.slice(1);
      if (rts.length > 0) {
        const mean = rts.reduce((a, b) => a + b, 0) / rts.length;
        lines.push(`${label}: ${mean.toFixed(1)} ms  (n=${rts.length})`);
      } else {
        lines.push(`${label}: N/A (no correct trials)`);
      }
    }
    lines.push("");
    lines.push("Press SPACE to continue.");
    return lines.join("\n");
  }

  const summaryTask = makeTextScreenTask(summaryText);

  return { trialsTask, summaryTask };
}

// ---------------------------------------------------------------------------
// TASK CONFIGS
// ---------------------------------------------------------------------------
const task1Config = {
  taskName: "color_stroop",
  resultsTitle: "TASK 1 RESULTS: COLOR STROOP",
  buildTrials: buildTask1Trials,
  buildStimuli(trial) {
    return {
      persistent: [],
      target: [
        new visual.TextStim({
          win, name: "task1Word", text: trial.word,
          color: new util.Color(COLOR_RGB[trial.ink]),
          height: 0.15, units: "height",
        }),
      ],
    };
  },
  validKeys: () => ["r", "g", "b"],
  getCorrectResponse: (trial) => COLOR_KEY[trial.ink],
  getStimulusDesc: (trial) => `${trial.word}(ink=${trial.ink})`,
  brief: null,
};

const task2Config = {
  taskName: "numerical_stroop",
  resultsTitle: "TASK 2 RESULTS: NUMERICAL STROOP",
  buildTrials: buildTask2Trials,
  buildStimuli(trial) {
    // Congruency is resolved here, at draw-time, based on which digit is
    // numerically larger -- mirrors run_task2() in stroop_lab.py. Results
    // are stashed on the trial object so getCorrectResponse/getStimulusDesc
    // (called later, in the feedback/logging phases) can reuse them.
    const numericallyLargerSide = trial.left > trial.right ? "left" : "right";
    const physicallyLargerSide = trial.condition === "congruent"
      ? numericallyLargerSide
      : (numericallyLargerSide === "left" ? "right" : "left");
    const leftHeight = physicallyLargerSide === "left" ? DIGIT_LARGE_HEIGHT : DIGIT_SMALL_HEIGHT;
    const rightHeight = physicallyLargerSide === "right" ? DIGIT_LARGE_HEIGHT : DIGIT_SMALL_HEIGHT;
    trial._numericallyLargerSide = numericallyLargerSide;
    trial._leftHeight = leftHeight;
    trial._rightHeight = rightHeight;

    return {
      persistent: [],
      target: [
        new visual.TextStim({
          win, name: "task2Left", text: String(trial.left), color: "white",
          height: leftHeight, units: "height", pos: [-DIGIT_X_OFFSET, 0],
        }),
        new visual.TextStim({
          win, name: "task2Right", text: String(trial.right), color: "white",
          height: rightHeight, units: "height", pos: [DIGIT_X_OFFSET, 0],
        }),
      ],
    };
  },
  validKeys: () => ["left", "right"],
  getCorrectResponse: (trial) => trial._numericallyLargerSide,
  getStimulusDesc: (trial) =>
    `L:${trial.left}(${trial._leftHeight.toFixed(2)}) R:${trial.right}(${trial._rightHeight.toFixed(2)})`,
  brief: null,
};

const task3Config = {
  taskName: "spatial_stroop",
  resultsTitle: "TASK 3 RESULTS: SPATIAL STROOP",
  buildTrials: buildTask3Trials,
  buildStimuli(trial) {
    return {
      // The fixation cross stays on screen WITH the arrow (persists through
      // the brief flash and the hidden phase) so participants have
      // something to hold their gaze on while the arrow is processed
      // parafoveally, per the instructions.
      persistent: [
        new visual.TextStim({
          win, name: "task3Fixation", text: "+", color: "white", height: 0.08, units: "height",
        }),
      ],
      target: [
        new visual.ShapeStim({
          win, name: "task3Arrow",
          vertices: ARROW_VERTICES[trial.word],
          units: "height",
          pos: SPATIAL_POSITIONS[trial.position],
          fillColor: "white", lineColor: "white", closeShape: true,
        }),
      ],
    };
  },
  validKeys: () => ["up", "down", "left", "right"],
  getCorrectResponse: (trial) => trial.word.toLowerCase(), // respond to MEANING, not position
  getStimulusDesc: (trial) => `arrow(points=${trial.word}) @position=${trial.position}`,
  brief: { targetDur: ARROW_DISPLAY_DUR },
};

// ---------------------------------------------------------------------------
// SCHEDULER WIRING
// ---------------------------------------------------------------------------
const task1 = createBlock(task1Config);
const task2 = createBlock(task2Config);
const task3 = createBlock(task3Config);

psychoJS.schedule(
  psychoJS.gui.DlgFromDict({
    dictionary: expInfo,
    title: "Stroop Attention Lab",
  }),
);

const flowScheduler = new util.Scheduler(psychoJS);
const dialogCancelScheduler = new util.Scheduler(psychoJS);
psychoJS.scheduleCondition(
  () => psychoJS.gui.dialogComponent.button === "OK",
  flowScheduler,
  dialogCancelScheduler,
);

flowScheduler.add(experimentInit);

flowScheduler.add(makeTextScreenTask(TASK1_INSTRUCTIONS));
flowScheduler.add(task1.trialsTask);
flowScheduler.add(task1.summaryTask);

flowScheduler.add(makeTextScreenTask(TASK2_INSTRUCTIONS));
flowScheduler.add(task2.trialsTask);
flowScheduler.add(task2.summaryTask);

flowScheduler.add(makeTextScreenTask(TASK3_INSTRUCTIONS));
flowScheduler.add(task3.trialsTask);
flowScheduler.add(task3.summaryTask);

flowScheduler.add(makeTextScreenTask(FINAL_SCREEN_TEXT));
flowScheduler.add(() => quitPsychoJS("Your data file is downloading now. Thank you!", true));

dialogCancelScheduler.add(() => quitPsychoJS(undefined, false));

psychoJS.start({
  expName: "stroop_lab",
  expInfo,
});
