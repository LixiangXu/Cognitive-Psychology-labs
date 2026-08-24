/******************* 
 * Dondersrtt *
 *******************/

import { core, data, sound, util, visual, hardware } from '../lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'DondersRTT';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(instruction_ARoutineBegin());
flowScheduler.add(instruction_ARoutineEachFrame());
flowScheduler.add(instruction_ARoutineEnd());
const loop_ALoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_ALoopBegin(loop_ALoopScheduler));
flowScheduler.add(loop_ALoopScheduler);
flowScheduler.add(loop_ALoopEnd);


flowScheduler.add(instruction_BRoutineBegin());
flowScheduler.add(instruction_BRoutineEachFrame());
flowScheduler.add(instruction_BRoutineEnd());
const loop_BLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_BLoopBegin(loop_BLoopScheduler));
flowScheduler.add(loop_BLoopScheduler);
flowScheduler.add(loop_BLoopEnd);


flowScheduler.add(instruction_CRoutineBegin());
flowScheduler.add(instruction_CRoutineEachFrame());
flowScheduler.add(instruction_CRoutineEnd());
const loop_CLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loop_CLoopBegin(loop_CLoopScheduler));
flowScheduler.add(loop_CLoopScheduler);
flowScheduler.add(loop_CLoopEnd);


flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'conditions_B.xlsx', 'path': 'conditions_B.xlsx'},
    {'name': 'conditions_C.xlsx', 'path': 'conditions_C.xlsx'},
  ],
  resp: {
    downloadData: true  // <-- ADD THIS LINE
  }
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instr_text;
var key_instr;
var instruction_AClock;
var text_instr_A;
var key_instr_A;
var trial_AClock;
var fixation_A;
var target_A;
var key_resp_A;
var instruction_BClock;
var text_instr_B;
var key_instr_B;
var trial_BClock;
var fixation_B;
var target_B;
var key_resp_B;
var instruction_CClock;
var text_instr_C;
var key_instr_C;
var trial_CClock;
var fixation_C;
var target_C;
var key_resp_C;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Welcome to the Reaction Time Study!\n\nIn this experiment, you will complete three short tasks measuring mental speed (Donders, 1868):\n\n1. Simple Reaction Time (A-Task)\n\n2. Choice Reaction Time (B-Task)\n\n3. Go / No-Go Reaction Time (C-Task)\n\nPlace your hands comfortably over the keyboard.\nTry to respond as fast and accurately as possible!\n\nPress the SPACEBAR when you are ready to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_A"
  instruction_AClock = new util.Clock();
  text_instr_A = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_A',
    text: 'TASK 1: SIMPLE REACTION TIME (A-TASK)\n\nIn this block, you need to respond as fast as possible to the appearance of a target.\n\nPress SPACEBAR to start Task 1.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instr_A = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_A"
  trial_AClock = new util.Clock();
  fixation_A = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_A',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  target_A = new visual.Polygon({
    win: psychoJS.window, name: 'target_A', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('red'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  key_resp_A = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_B"
  instruction_BClock = new util.Clock();
  text_instr_B = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_B',
    text: "TASK 2: CHOICE REACTION TIME (B-TASK)\n\nIn this block, you must IDENTIFY the color and CHOOSE the correct key.\n\nInstructions:\n1. Fixate on the '+' cross in the center of the screen.\n2. If  ← appears, press the LEFT ARROW key.\n3. If → appears, press the RIGHT ARROW key.\n\nPlace your left index finger on the LEFT ARROW key \nand right index finger on the RIGHT ARROW key.\n\nPress RIGHT ARROW key when you are ready to begin Task 2.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instr_B = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_B"
  trial_BClock = new util.Clock();
  fixation_B = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_B',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  target_B = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_B',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_B = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction_C"
  instruction_CClock = new util.Clock();
  text_instr_C = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr_C',
    text: "TASK 3: GO / NO-GO REACTION TIME (C-TASK)\n\nInstructions:\n1. Fixate on the '+' cross in the center of the screen.\n2. If you see a blue circle, press SPACEBAR as fast as possible.\n3. If you see a green circle, DO NOTHING. Wait for it to disappear.\n\nPress SPACEBAR when you are ready to begin Task 3.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instr_C = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_C"
  trial_CClock = new util.Clock();
  fixation_C = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_C',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  target_C = new visual.Polygon({
    win: psychoJS.window, name: 'target_C', 
    edges: 100, size:[0.2, 0.2],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  key_resp_C = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instructionsMaxDurationReached;
var _key_instr_allKeys;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_instr.keys = undefined;
    key_instr.rt = undefined;
    _key_instr_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr_text);
    instructionsComponents.push(key_instr);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instr* updates
    if (t >= 0 && key_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr.tStart = t;  // (not accounting for frame time here)
      key_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr.clearEvents(); });
    }
    
    // if key_instr is active this frame...
    if (key_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_instr_allKeys = _key_instr_allKeys.concat(theseKeys);
      if (_key_instr_allKeys.length > 0) {
        key_instr.keys = _key_instr_allKeys[_key_instr_allKeys.length - 1].name;  // just the last key pressed
        key_instr.rt = _key_instr_allKeys[_key_instr_allKeys.length - 1].rt;
        key_instr.duration = _key_instr_allKeys[_key_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr.corr, level);
    }
    psychoJS.experiment.addData('key_instr.keys', key_instr.keys);
    if (typeof key_instr.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr.rt', key_instr.rt);
        psychoJS.experiment.addData('key_instr.duration', key_instr.duration);
        routineTimer.reset();
        }
    
    key_instr.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_AMaxDurationReached;
var _key_instr_A_allKeys;
var instruction_AMaxDuration;
var instruction_AComponents;
function instruction_ARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_A' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_AClock.reset();
    routineTimer.reset();
    instruction_AMaxDurationReached = false;
    // update component parameters for each repeat
    key_instr_A.keys = undefined;
    key_instr_A.rt = undefined;
    _key_instr_A_allKeys = [];
    psychoJS.experiment.addData('instruction_A.started', globalClock.getTime());
    instruction_AMaxDuration = null
    // keep track of which components have finished
    instruction_AComponents = [];
    instruction_AComponents.push(text_instr_A);
    instruction_AComponents.push(key_instr_A);
    
    for (const thisComponent of instruction_AComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_ARoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_A' ---
    // get current time
    t = instruction_AClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr_A* updates
    if (t >= 0 && text_instr_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_A.tStart = t;  // (not accounting for frame time here)
      text_instr_A.frameNStart = frameN;  // exact frame index
      
      text_instr_A.setAutoDraw(true);
    }
    
    
    // if text_instr_A is active this frame...
    if (text_instr_A.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instr_A* updates
    if (t >= 0 && key_instr_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr_A.tStart = t;  // (not accounting for frame time here)
      key_instr_A.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr_A.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr_A.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr_A.clearEvents(); });
    }
    
    // if key_instr_A is active this frame...
    if (key_instr_A.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr_A.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_instr_A_allKeys = _key_instr_A_allKeys.concat(theseKeys);
      if (_key_instr_A_allKeys.length > 0) {
        key_instr_A.keys = _key_instr_A_allKeys[_key_instr_A_allKeys.length - 1].name;  // just the last key pressed
        key_instr_A.rt = _key_instr_A_allKeys[_key_instr_A_allKeys.length - 1].rt;
        key_instr_A.duration = _key_instr_A_allKeys[_key_instr_A_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_AComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_ARoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_A' ---
    for (const thisComponent of instruction_AComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_A.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr_A.corr, level);
    }
    psychoJS.experiment.addData('key_instr_A.keys', key_instr_A.keys);
    if (typeof key_instr_A.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr_A.rt', key_instr_A.rt);
        psychoJS.experiment.addData('key_instr_A.duration', key_instr_A.duration);
        routineTimer.reset();
        }
    
    key_instr_A.stop();
    // the Routine "instruction_A" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loop_A;
function loop_ALoopBegin(loop_ALoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_A = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_A'
    });
    psychoJS.experiment.addLoop(loop_A); // add the loop to the experiment
    currentLoop = loop_A;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_A of loop_A) {
      snapshot = loop_A.getSnapshot();
      loop_ALoopScheduler.add(importConditions(snapshot));
      loop_ALoopScheduler.add(trial_ARoutineBegin(snapshot));
      loop_ALoopScheduler.add(trial_ARoutineEachFrame());
      loop_ALoopScheduler.add(trial_ARoutineEnd(snapshot));
      loop_ALoopScheduler.add(loop_ALoopEndIteration(loop_ALoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_ALoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_A);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_ALoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_B;
function loop_BLoopBegin(loop_BLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_B = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_B.xlsx',
      seed: undefined, name: 'loop_B'
    });
    psychoJS.experiment.addLoop(loop_B); // add the loop to the experiment
    currentLoop = loop_B;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_B of loop_B) {
      snapshot = loop_B.getSnapshot();
      loop_BLoopScheduler.add(importConditions(snapshot));
      loop_BLoopScheduler.add(trial_BRoutineBegin(snapshot));
      loop_BLoopScheduler.add(trial_BRoutineEachFrame());
      loop_BLoopScheduler.add(trial_BRoutineEnd(snapshot));
      loop_BLoopScheduler.add(loop_BLoopEndIteration(loop_BLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_BLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_B);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_BLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loop_C;
function loop_CLoopBegin(loop_CLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_C = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions_C.xlsx',
      seed: undefined, name: 'loop_C'
    });
    psychoJS.experiment.addLoop(loop_C); // add the loop to the experiment
    currentLoop = loop_C;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_C of loop_C) {
      snapshot = loop_C.getSnapshot();
      loop_CLoopScheduler.add(importConditions(snapshot));
      loop_CLoopScheduler.add(trial_CRoutineBegin(snapshot));
      loop_CLoopScheduler.add(trial_CRoutineEachFrame());
      loop_CLoopScheduler.add(trial_CRoutineEnd(snapshot));
      loop_CLoopScheduler.add(loop_CLoopEndIteration(loop_CLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_CLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_C);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_CLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_AMaxDurationReached;
var _key_resp_A_allKeys;
var fix_duration_A;
var trial_AMaxDuration;
var trial_AComponents;
function trial_ARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_A' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_AClock.reset();
    routineTimer.reset();
    trial_AMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_A.keys = undefined;
    key_resp_A.rt = undefined;
    _key_resp_A_allKeys = [];
    // Run 'Begin Routine' code from code_jitter_A
    fix_duration_A = Math.random() + 0.5;
    psychoJS.experiment.addData("fixation_duration_A", fix_duration_A);
    
    psychoJS.experiment.addData('trial_A.started', globalClock.getTime());
    trial_AMaxDuration = null
    // keep track of which components have finished
    trial_AComponents = [];
    trial_AComponents.push(fixation_A);
    trial_AComponents.push(target_A);
    trial_AComponents.push(key_resp_A);
    
    for (const thisComponent of trial_AComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_ARoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_A' ---
    // get current time
    t = trial_AClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_A* updates
    if (t >= 0 && fixation_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_A.tStart = t;  // (not accounting for frame time here)
      fixation_A.frameNStart = frameN;  // exact frame index
      
      fixation_A.setAutoDraw(true);
    }
    
    
    // if fixation_A is active this frame...
    if (fixation_A.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + fix_duration_A - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_A.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_A.tStop = t;  // not accounting for scr refresh
      fixation_A.frameNStop = frameN;  // exact frame index
      // update status
      fixation_A.status = PsychoJS.Status.FINISHED;
      fixation_A.setAutoDraw(false);
    }
    
    
    // *target_A* updates
    if (t >= fix_duration_A && target_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_A.tStart = t;  // (not accounting for frame time here)
      target_A.frameNStart = frameN;  // exact frame index
      
      target_A.setAutoDraw(true);
    }
    
    
    // if target_A is active this frame...
    if (target_A.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_A* updates
    if (t >= fix_duration_A && key_resp_A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_A.tStart = t;  // (not accounting for frame time here)
      key_resp_A.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_A.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_A.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_A.clearEvents(); });
    }
    
    // if key_resp_A is active this frame...
    if (key_resp_A.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_A.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_A_allKeys = _key_resp_A_allKeys.concat(theseKeys);
      if (_key_resp_A_allKeys.length > 0) {
        key_resp_A.keys = _key_resp_A_allKeys[_key_resp_A_allKeys.length - 1].name;  // just the last key pressed
        key_resp_A.rt = _key_resp_A_allKeys[_key_resp_A_allKeys.length - 1].rt;
        key_resp_A.duration = _key_resp_A_allKeys[_key_resp_A_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_AComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_ARoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_A' ---
    for (const thisComponent of trial_AComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_A.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_A.corr, level);
    }
    psychoJS.experiment.addData('key_resp_A.keys', key_resp_A.keys);
    if (typeof key_resp_A.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_A.rt', key_resp_A.rt);
        psychoJS.experiment.addData('key_resp_A.duration', key_resp_A.duration);
        routineTimer.reset();
        }
    
    key_resp_A.stop();
    // the Routine "trial_A" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_BMaxDurationReached;
var _key_instr_B_allKeys;
var instruction_BMaxDuration;
var instruction_BComponents;
function instruction_BRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_B' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_BClock.reset();
    routineTimer.reset();
    instruction_BMaxDurationReached = false;
    // update component parameters for each repeat
    key_instr_B.keys = undefined;
    key_instr_B.rt = undefined;
    _key_instr_B_allKeys = [];
    psychoJS.experiment.addData('instruction_B.started', globalClock.getTime());
    instruction_BMaxDuration = null
    // keep track of which components have finished
    instruction_BComponents = [];
    instruction_BComponents.push(text_instr_B);
    instruction_BComponents.push(key_instr_B);
    
    for (const thisComponent of instruction_BComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_BRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_B' ---
    // get current time
    t = instruction_BClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr_B* updates
    if (t >= 0 && text_instr_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_B.tStart = t;  // (not accounting for frame time here)
      text_instr_B.frameNStart = frameN;  // exact frame index
      
      text_instr_B.setAutoDraw(true);
    }
    
    
    // if text_instr_B is active this frame...
    if (text_instr_B.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instr_B* updates
    if (t >= 0 && key_instr_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr_B.tStart = t;  // (not accounting for frame time here)
      key_instr_B.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr_B.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr_B.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr_B.clearEvents(); });
    }
    
    // if key_instr_B is active this frame...
    if (key_instr_B.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr_B.getKeys({
        keyList: typeof 'right' === 'string' ? ['right'] : 'right', 
        waitRelease: false
      });
      _key_instr_B_allKeys = _key_instr_B_allKeys.concat(theseKeys);
      if (_key_instr_B_allKeys.length > 0) {
        key_instr_B.keys = _key_instr_B_allKeys[_key_instr_B_allKeys.length - 1].name;  // just the last key pressed
        key_instr_B.rt = _key_instr_B_allKeys[_key_instr_B_allKeys.length - 1].rt;
        key_instr_B.duration = _key_instr_B_allKeys[_key_instr_B_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_BComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_BRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_B' ---
    for (const thisComponent of instruction_BComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_B.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr_B.corr, level);
    }
    psychoJS.experiment.addData('key_instr_B.keys', key_instr_B.keys);
    if (typeof key_instr_B.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr_B.rt', key_instr_B.rt);
        psychoJS.experiment.addData('key_instr_B.duration', key_instr_B.duration);
        routineTimer.reset();
        }
    
    key_instr_B.stop();
    // the Routine "instruction_B" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_BMaxDurationReached;
var _key_resp_B_allKeys;
var fix_duration_B;
var trial_BMaxDuration;
var trial_BComponents;
function trial_BRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_B' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_BClock.reset();
    routineTimer.reset();
    trial_BMaxDurationReached = false;
    // update component parameters for each repeat
    target_B.setText(stim_text);
    key_resp_B.keys = undefined;
    key_resp_B.rt = undefined;
    _key_resp_B_allKeys = [];
    // Run 'Begin Routine' code from code_jitter_B
    fix_duration_B = Math.random() + 0.5;
    psychoJS.experiment.addData("fixation_duration_B", fix_duration_B);
    
    psychoJS.experiment.addData('trial_B.started', globalClock.getTime());
    trial_BMaxDuration = null
    // keep track of which components have finished
    trial_BComponents = [];
    trial_BComponents.push(fixation_B);
    trial_BComponents.push(target_B);
    trial_BComponents.push(key_resp_B);
    
    for (const thisComponent of trial_BComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_BRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_B' ---
    // get current time
    t = trial_BClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_B* updates
    if (t >= 0 && fixation_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_B.tStart = t;  // (not accounting for frame time here)
      fixation_B.frameNStart = frameN;  // exact frame index
      
      fixation_B.setAutoDraw(true);
    }
    
    
    // if fixation_B is active this frame...
    if (fixation_B.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + fix_duration_B - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_B.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_B.tStop = t;  // not accounting for scr refresh
      fixation_B.frameNStop = frameN;  // exact frame index
      // update status
      fixation_B.status = PsychoJS.Status.FINISHED;
      fixation_B.setAutoDraw(false);
    }
    
    
    // *target_B* updates
    if (t >= fix_duration_B && target_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_B.tStart = t;  // (not accounting for frame time here)
      target_B.frameNStart = frameN;  // exact frame index
      
      target_B.setAutoDraw(true);
    }
    
    
    // if target_B is active this frame...
    if (target_B.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_B* updates
    if (t >= fix_duration_B && key_resp_B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_B.tStart = t;  // (not accounting for frame time here)
      key_resp_B.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_B.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_B.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_B.clearEvents(); });
    }
    
    // if key_resp_B is active this frame...
    if (key_resp_B.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_B.getKeys({
        keyList: typeof ['left','right'] === 'string' ? [['left','right']] : ['left','right'], 
        waitRelease: false
      });
      _key_resp_B_allKeys = _key_resp_B_allKeys.concat(theseKeys);
      if (_key_resp_B_allKeys.length > 0) {
        key_resp_B.keys = _key_resp_B_allKeys[_key_resp_B_allKeys.length - 1].name;  // just the last key pressed
        key_resp_B.rt = _key_resp_B_allKeys[_key_resp_B_allKeys.length - 1].rt;
        key_resp_B.duration = _key_resp_B_allKeys[_key_resp_B_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_B.keys == correct_key) {
            key_resp_B.corr = 1;
        } else {
            key_resp_B.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_BComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_BRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_B' ---
    for (const thisComponent of trial_BComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_B.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_B.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         key_resp_B.corr = 1;  // correct non-response
      } else {
         key_resp_B.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_B.corr, level);
    }
    psychoJS.experiment.addData('key_resp_B.keys', key_resp_B.keys);
    psychoJS.experiment.addData('key_resp_B.corr', key_resp_B.corr);
    if (typeof key_resp_B.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_B.rt', key_resp_B.rt);
        psychoJS.experiment.addData('key_resp_B.duration', key_resp_B.duration);
        routineTimer.reset();
        }
    
    key_resp_B.stop();
    // the Routine "trial_B" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction_CMaxDurationReached;
var _key_instr_C_allKeys;
var instruction_CMaxDuration;
var instruction_CComponents;
function instruction_CRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_C' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_CClock.reset();
    routineTimer.reset();
    instruction_CMaxDurationReached = false;
    // update component parameters for each repeat
    key_instr_C.keys = undefined;
    key_instr_C.rt = undefined;
    _key_instr_C_allKeys = [];
    psychoJS.experiment.addData('instruction_C.started', globalClock.getTime());
    instruction_CMaxDuration = null
    // keep track of which components have finished
    instruction_CComponents = [];
    instruction_CComponents.push(text_instr_C);
    instruction_CComponents.push(key_instr_C);
    
    for (const thisComponent of instruction_CComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_CRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_C' ---
    // get current time
    t = instruction_CClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr_C* updates
    if (t >= 0 && text_instr_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr_C.tStart = t;  // (not accounting for frame time here)
      text_instr_C.frameNStart = frameN;  // exact frame index
      
      text_instr_C.setAutoDraw(true);
    }
    
    
    // if text_instr_C is active this frame...
    if (text_instr_C.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instr_C* updates
    if (t >= 0 && key_instr_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr_C.tStart = t;  // (not accounting for frame time here)
      key_instr_C.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr_C.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr_C.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr_C.clearEvents(); });
    }
    
    // if key_instr_C is active this frame...
    if (key_instr_C.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr_C.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_instr_C_allKeys = _key_instr_C_allKeys.concat(theseKeys);
      if (_key_instr_C_allKeys.length > 0) {
        key_instr_C.keys = _key_instr_C_allKeys[_key_instr_C_allKeys.length - 1].name;  // just the last key pressed
        key_instr_C.rt = _key_instr_C_allKeys[_key_instr_C_allKeys.length - 1].rt;
        key_instr_C.duration = _key_instr_C_allKeys[_key_instr_C_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_CComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_CRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_C' ---
    for (const thisComponent of instruction_CComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_C.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr_C.corr, level);
    }
    psychoJS.experiment.addData('key_instr_C.keys', key_instr_C.keys);
    if (typeof key_instr_C.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr_C.rt', key_instr_C.rt);
        psychoJS.experiment.addData('key_instr_C.duration', key_instr_C.duration);
        routineTimer.reset();
        }
    
    key_instr_C.stop();
    // the Routine "instruction_C" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_CMaxDurationReached;
var _key_resp_C_allKeys;
var fix_duration_C;
var trial_CMaxDuration;
var trial_CComponents;
function trial_CRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_C' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_CClock.reset();
    routineTimer.reset();
    trial_CMaxDurationReached = false;
    // update component parameters for each repeat
    target_C.setFillColor(new util.Color(stim_color));
    key_resp_C.keys = undefined;
    key_resp_C.rt = undefined;
    _key_resp_C_allKeys = [];
    // Run 'Begin Routine' code from code_jitter_C
    fix_duration_C = Math.random() + 0.5;
    psychoJS.experiment.addData("fixation_duration_C", fix_duration_C);
    
    psychoJS.experiment.addData('trial_C.started', globalClock.getTime());
    trial_CMaxDuration = null
    // keep track of which components have finished
    trial_CComponents = [];
    trial_CComponents.push(fixation_C);
    trial_CComponents.push(target_C);
    trial_CComponents.push(key_resp_C);
    
    for (const thisComponent of trial_CComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_CRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_C' ---
    // get current time
    t = trial_CClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_C* updates
    if (t >= 0 && fixation_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_C.tStart = t;  // (not accounting for frame time here)
      fixation_C.frameNStart = frameN;  // exact frame index
      
      fixation_C.setAutoDraw(true);
    }
    
    
    // if fixation_C is active this frame...
    if (fixation_C.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + fix_duration_C - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_C.tStop = t;  // not accounting for scr refresh
      fixation_C.frameNStop = frameN;  // exact frame index
      // update status
      fixation_C.status = PsychoJS.Status.FINISHED;
      fixation_C.setAutoDraw(false);
    }
    
    
    // *target_C* updates
    if (t >= fix_duration_C && target_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_C.tStart = t;  // (not accounting for frame time here)
      target_C.frameNStart = frameN;  // exact frame index
      
      target_C.setAutoDraw(true);
    }
    
    
    // if target_C is active this frame...
    if (target_C.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = fix_duration_C + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      target_C.tStop = t;  // not accounting for scr refresh
      target_C.frameNStop = frameN;  // exact frame index
      // update status
      target_C.status = PsychoJS.Status.FINISHED;
      target_C.setAutoDraw(false);
    }
    
    
    // *key_resp_C* updates
    if (t >= fix_duration_C && key_resp_C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_C.tStart = t;  // (not accounting for frame time here)
      key_resp_C.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_C.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_C.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_C.clearEvents(); });
    }
    frameRemains = fix_duration_C + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_C.tStop = t;  // not accounting for scr refresh
      key_resp_C.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_C.status = PsychoJS.Status.FINISHED;
      frameRemains = fix_duration_C + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_C.tStop = t;  // not accounting for scr refresh
        key_resp_C.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_C.status = PsychoJS.Status.FINISHED;
        key_resp_C.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_C is active this frame...
      if (key_resp_C.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_C.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_C_allKeys = _key_resp_C_allKeys.concat(theseKeys);
        if (_key_resp_C_allKeys.length > 0) {
          key_resp_C.keys = _key_resp_C_allKeys[_key_resp_C_allKeys.length - 1].name;  // just the last key pressed
          key_resp_C.rt = _key_resp_C_allKeys[_key_resp_C_allKeys.length - 1].rt;
          key_resp_C.duration = _key_resp_C_allKeys[_key_resp_C_allKeys.length - 1].duration;
          // was this correct?
          if (key_resp_C.keys == correct_key) {
              key_resp_C.corr = 1;
          } else {
              key_resp_C.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of trial_CComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function trial_CRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trial_C' ---
      for (const thisComponent of trial_CComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('trial_C.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp_C.keys === undefined) {
        if (['None','none',undefined].includes(correct_key)) {
           key_resp_C.corr = 1;  // correct non-response
        } else {
           key_resp_C.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_C.corr, level);
      }
      psychoJS.experiment.addData('key_resp_C.keys', key_resp_C.keys);
      psychoJS.experiment.addData('key_resp_C.corr', key_resp_C.corr);
      if (typeof key_resp_C.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_C.rt', key_resp_C.rt);
          psychoJS.experiment.addData('key_resp_C.duration', key_resp_C.duration);
          routineTimer.reset();
          }
      
      key_resp_C.stop();
      // the Routine "trial_C" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
