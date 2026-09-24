/****************************** 
 * Spatialspan_And_Nback *
 ******************************/

import { core, data, sound, util, visual, hardware } from '../lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SpatialSpan_and_NBack';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'skip_forward': false,
    'skip_backward': false,
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
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const corsi_trial_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(corsi_trial_loopLoopBegin(corsi_trial_loopLoopScheduler));
flowScheduler.add(corsi_trial_loopLoopScheduler);
flowScheduler.add(corsi_trial_loopLoopEnd);
flowScheduler.add(Instructions_BackwardRoutineBegin());
flowScheduler.add(Instructions_BackwardRoutineEachFrame());
flowScheduler.add(Instructions_BackwardRoutineEnd());
const corsi_trial_loop_backLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(corsi_trial_loop_backLoopBegin(corsi_trial_loop_backLoopScheduler));
flowScheduler.add(corsi_trial_loop_backLoopScheduler);
flowScheduler.add(corsi_trial_loop_backLoopEnd);
const nback_blocks_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(nback_blocks_loopLoopBegin(nback_blocks_loopLoopScheduler));
flowScheduler.add(nback_blocks_loopLoopScheduler);
flowScheduler.add(nback_blocks_loopLoopEnd);





flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'corsi_conditions.csv', 'path': 'corsi_conditions.csv'},
    {'name': 'nback_block_conditions.csv', 'path': 'nback_block_conditions.csv'},
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


var InstructionsClock;
var GRID_POSITIONS;
var COLOR_BASE;
var COLOR_ACTIVE;
var BLOCK_SIZE;
var current_sequence;
var text;
var Corsi_Trial_SetupClock;
var Corsi_PresentClock;
var block_0;
var block_1;
var block_2;
var block_3;
var block_4;
var block_5;
var block_6;
var block_7;
var block_8;
var target_highlight;
var Corsi_FixationClock;
var fixation_text;
var Corsi_ResponseClock;
var resp_block_0;
var resp_block_1;
var resp_block_2;
var resp_block_3;
var resp_block_4;
var resp_block_5;
var resp_block_6;
var resp_block_7;
var resp_block_8;
var mouse_corsi;
var is_correct;
var corsi_response_time;
var Corsi_FeedbackClock;
var feedback_text;
var Instructions_BackwardClock;
var instr_backward_text;
var Back_Corsi_ResponseClock;
var back_block_0;
var back_block_1;
var back_block_2;
var back_block_3;
var back_block_4;
var back_block_5;
var back_block_6;
var back_block_7;
var back_block_8;
var mouse_corsi_back;
var Instructions_NBackClock;
var instr_nback_text;
var NBack_Block_SetupClock;
var NBack_PresentClock;
var nback_block_0;
var nback_block_1;
var nback_block_2;
var nback_block_3;
var nback_block_4;
var nback_block_5;
var nback_block_6;
var nback_block_7;
var nback_block_8;
var nback_positions;
var nback_blocks;
var n;
var reps;
var trial_idx;
var current_pos;
var is_match;
var responded;
var nback_rt;
var nback_resp_clock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_generate_grid
  GRID_POSITIONS = [[(- 0.3), 0.3], [0.0, 0.3], [0.3, 0.3], [(- 0.3), 0.0], [0.0, 0.0], [0.3, 0.0], [(- 0.3), (- 0.3)], [0.0, (- 0.3)], [0.3, (- 0.3)]];
  COLOR_BASE = "gray";
  COLOR_ACTIVE = "yellow";
  BLOCK_SIZE = [0.2, 0.2];

  current_sequence = [];
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Corsi Block-Tapping Task\n\nYou will see the blocks light up in a sequence again.\n\nClick the blocks in the same order.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0
  });

  
  // Initialize components for Routine "Corsi_Trial_Setup"
  Corsi_Trial_SetupClock = new util.Clock();
  // Initialize components for Routine "Corsi_Present"
  Corsi_PresentClock = new util.Clock();
  block_0 = new visual.Rect ({
    win: psychoJS.window, name: 'block_0', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  block_1 = new visual.Rect ({
    win: psychoJS.window, name: 'block_1', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  block_2 = new visual.Rect ({
    win: psychoJS.window, name: 'block_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0.3, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  block_3 = new visual.Rect ({
    win: psychoJS.window, name: 'block_3', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  block_4 = new visual.Rect ({
    win: psychoJS.window, name: 'block_4', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  block_5 = new visual.Rect ({
    win: psychoJS.window, name: 'block_5', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0.3, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  block_6 = new visual.Rect ({
    win: psychoJS.window, name: 'block_6', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  block_7 = new visual.Rect ({
    win: psychoJS.window, name: 'block_7',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, (- 0.3)],
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -8, 
    interpolate: true, 
  });
  
  block_8 = new visual.Rect ({
    win: psychoJS.window, name: 'block_8', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0.3, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -9, 
    interpolate: true, 
  });
  
  target_highlight = new visual.Rect ({
    win: psychoJS.window, name: 'target_highlight', 
    width: [0.195, 0.195][0], height: [0.195, 0.195][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('yellow'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "Corsi_Fixation"
  Corsi_FixationClock = new util.Clock();
  fixation_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Corsi_Response"
  Corsi_ResponseClock = new util.Clock();
  resp_block_0 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_0', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  resp_block_1 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_1', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  resp_block_2 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0.3, 0.3], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  resp_block_3 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_3', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  resp_block_4 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_4', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  resp_block_5 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_5', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0.3, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  resp_block_6 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_6', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  resp_block_7 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_7', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, 
    pos: [0, (- 0.3)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  resp_block_8 = new visual.Rect ({
    win: psychoJS.window, name: 'resp_block_8',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, (- 0.3)],
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('gray'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -8, 
    interpolate: true, 
  });
  
  mouse_corsi = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_corsi.mouseClock = new util.Clock();
  // Initialize components for Routine "Corsi_Feedback"
  Corsi_FeedbackClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0
  });

  // Initialize components for Routine "Instructions_Backward"
  Instructions_BackwardClock = new util.Clock();
  instr_backward_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_backward_text',
    text: 'Backward Corsi Block-Tapping Task\n\nYou will see the blocks light up in a sequence again.\n\nThis time, click the blocks in REVERSE order:\nstart with the LAST block that lit up and end with the FIRST.\n\nPress SPACE to begin.',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0
  });

  // Initialize components for Routine "Back_Corsi_Response"
  Back_Corsi_ResponseClock = new util.Clock();
  back_block_0 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_0',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [(- 0.3), 0.3],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: 0,
    interpolate: true,
  });

  back_block_1 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_1',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, 0.3],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -1,
    interpolate: true,
  });

  back_block_2 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_2',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, 0.3],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -2,
    interpolate: true,
  });

  back_block_3 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_3',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [(- 0.3), 0],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -3,
    interpolate: true,
  });

  back_block_4 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_4',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, 0],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -4,
    interpolate: true,
  });

  back_block_5 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_5',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, 0],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -5,
    interpolate: true,
  });

  back_block_6 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_6',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [(- 0.3), (- 0.3)],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -6,
    interpolate: true,
  });

  back_block_7 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_7',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, (- 0.3)],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -7,
    interpolate: true,
  });

  back_block_8 = new visual.Rect ({
    win: psychoJS.window, name: 'back_block_8',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, (- 0.3)],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -8,
    interpolate: true,
  });

  mouse_corsi_back = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_corsi_back.mouseClock = new util.Clock();
  // Initialize components for Routine "Instructions_NBack"
  Instructions_NBackClock = new util.Clock();
  instr_nback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_nback_text',
    text: '',
    font: 'Arial',
    units: undefined,
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0
  });

  // Initialize components for Routine "NBack_Block_Setup"
  NBack_Block_SetupClock = new util.Clock();

  // Initialize components for Routine "NBack_Present"
  NBack_PresentClock = new util.Clock();
  nback_block_0 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_0',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [(- 0.3), 0.3],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: 0,
    interpolate: true,
  });

  nback_block_1 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_1',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, 0.3],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -1,
    interpolate: true,
  });

  nback_block_2 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_2',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, 0.3],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -2,
    interpolate: true,
  });

  nback_block_3 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_3',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [(- 0.3), 0],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -3,
    interpolate: true,
  });

  nback_block_4 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_4',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, 0],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -4,
    interpolate: true,
  });

  nback_block_5 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_5',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, 0],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -5,
    interpolate: true,
  });

  nback_block_6 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_6',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [(- 0.3), (- 0.3)],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -6,
    interpolate: true,
  });

  nback_block_7 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_7',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0, (- 0.3)],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -7,
    interpolate: true,
  });

  nback_block_8 = new visual.Rect ({
    win: psychoJS.window, name: 'nback_block_8',
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0,
    pos: [0.3, (- 0.3)],
    draggable: false,
    anchor: 'center',
    lineWidth: 1.0,
    lineColor: new util.Color('white'),
    fillColor: new util.Color('gray'),
    colorSpace: 'rgb',
    opacity: undefined,
    depth: -8,
    interpolate: true,
  });

  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionsMaxDurationReached;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = !(expInfo['skip_forward']); // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text);

    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *text* updates
    if (t >= 0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index

      text.setAutoDraw(true);
    }

    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    // Run 'Each Frame' code from code_generate_grid
    if (psychoJS.eventManager.getKeys({keyList: ['space']}).length > 0) {
        continueRoutine = false;
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
    for (const thisComponent of InstructionsComponents)
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


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corsi_trial_loop;
function corsi_trial_loopLoopBegin(corsi_trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    corsi_trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: (expInfo['skip_forward'] ? 0 : 5), method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'corsi_conditions.csv',
      seed: undefined, name: 'corsi_trial_loop'
    });
    psychoJS.experiment.addLoop(corsi_trial_loop); // add the loop to the experiment
    currentLoop = corsi_trial_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCorsi_trial_loop of corsi_trial_loop) {
      snapshot = corsi_trial_loop.getSnapshot();
      corsi_trial_loopLoopScheduler.add(importConditions(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_Trial_SetupRoutineBegin(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_Trial_SetupRoutineEachFrame());
      corsi_trial_loopLoopScheduler.add(Corsi_Trial_SetupRoutineEnd(snapshot));
      const corsi_flash_loopLoopScheduler = new Scheduler(psychoJS);
      corsi_trial_loopLoopScheduler.add(corsi_flash_loopLoopBegin(corsi_flash_loopLoopScheduler, snapshot));
      corsi_trial_loopLoopScheduler.add(corsi_flash_loopLoopScheduler);
      corsi_trial_loopLoopScheduler.add(corsi_flash_loopLoopEnd);
      corsi_trial_loopLoopScheduler.add(Corsi_FixationRoutineBegin(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_FixationRoutineEachFrame());
      corsi_trial_loopLoopScheduler.add(Corsi_FixationRoutineEnd(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_ResponseRoutineBegin(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_ResponseRoutineEachFrame());
      corsi_trial_loopLoopScheduler.add(Corsi_ResponseRoutineEnd(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_FeedbackRoutineBegin(snapshot));
      corsi_trial_loopLoopScheduler.add(Corsi_FeedbackRoutineEachFrame());
      corsi_trial_loopLoopScheduler.add(Corsi_FeedbackRoutineEnd(snapshot));
      corsi_trial_loopLoopScheduler.add(corsi_trial_loopLoopEndIteration(corsi_trial_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var corsi_flash_loop;
function corsi_flash_loopLoopBegin(corsi_flash_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    corsi_flash_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: sequence_length, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'corsi_flash_loop'
    });
    psychoJS.experiment.addLoop(corsi_flash_loop); // add the loop to the experiment
    currentLoop = corsi_flash_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCorsi_flash_loop of corsi_flash_loop) {
      snapshot = corsi_flash_loop.getSnapshot();
      corsi_flash_loopLoopScheduler.add(importConditions(snapshot));
      corsi_flash_loopLoopScheduler.add(Corsi_PresentRoutineBegin(snapshot));
      corsi_flash_loopLoopScheduler.add(Corsi_PresentRoutineEachFrame());
      corsi_flash_loopLoopScheduler.add(Corsi_PresentRoutineEnd(snapshot));
      corsi_flash_loopLoopScheduler.add(corsi_flash_loopLoopEndIteration(corsi_flash_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function corsi_flash_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(corsi_flash_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function corsi_flash_loopLoopEndIteration(scheduler, snapshot) {
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


async function corsi_trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(corsi_trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function corsi_trial_loopLoopEndIteration(scheduler, snapshot) {
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


var Corsi_Trial_SetupMaxDurationReached;
var Corsi_Trial_SetupMaxDuration;
var Corsi_Trial_SetupComponents;
function Corsi_Trial_SetupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Corsi_Trial_Setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Corsi_Trial_SetupClock.reset();
    routineTimer.reset();
    Corsi_Trial_SetupMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Corsi_Trial_Setup_code
    // 1. Generate sequence ONCE at the start of the sequence (first flash iteration)
    current_sequence = [0,1,2,3,4,5,6,7,8].sort(() => 0.5 - Math.random()).slice(0, sequence_length);
    
    
    psychoJS.experiment.addData('Corsi_Trial_Setup.started', globalClock.getTime());
    Corsi_Trial_SetupMaxDuration = null
    // keep track of which components have finished
    Corsi_Trial_SetupComponents = [];
    
    for (const thisComponent of Corsi_Trial_SetupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Corsi_Trial_SetupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Corsi_Trial_Setup' ---
    // get current time
    t = Corsi_Trial_SetupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    for (const thisComponent of Corsi_Trial_SetupComponents)
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


function Corsi_Trial_SetupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Corsi_Trial_Setup' ---
    for (const thisComponent of Corsi_Trial_SetupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Corsi_Trial_Setup.stopped', globalClock.getTime());
    // the Routine "Corsi_Trial_Setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Corsi_PresentMaxDurationReached;
var target_idx;
var Corsi_PresentMaxDuration;
var Corsi_PresentComponents;
function Corsi_PresentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Corsi_Present' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Corsi_PresentClock.reset(routineTimer.getTime());
    routineTimer.add(0.750000);
    Corsi_PresentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Corsi_code_present
    target_idx = current_sequence[currentLoop.thisN];
    
    target_highlight.setPos(GRID_POSITIONS[target_idx]);
    psychoJS.experiment.addData('Corsi_Present.started', globalClock.getTime());
    Corsi_PresentMaxDuration = 0.75
    // keep track of which components have finished
    Corsi_PresentComponents = [];
    Corsi_PresentComponents.push(block_0);
    Corsi_PresentComponents.push(block_1);
    Corsi_PresentComponents.push(block_2);
    Corsi_PresentComponents.push(block_3);
    Corsi_PresentComponents.push(block_4);
    Corsi_PresentComponents.push(block_5);
    Corsi_PresentComponents.push(block_6);
    Corsi_PresentComponents.push(block_7);
    Corsi_PresentComponents.push(block_8);
    Corsi_PresentComponents.push(target_highlight);
    
    for (const thisComponent of Corsi_PresentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Corsi_PresentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Corsi_Present' ---
    // get current time
    t = Corsi_PresentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > Corsi_PresentMaxDuration) {
        Corsi_PresentMaxDurationReached = true
        continueRoutine = false
    }
    
    // *block_0* updates
    if (t >= 0 && block_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_0.tStart = t;  // (not accounting for frame time here)
      block_0.frameNStart = frameN;  // exact frame index
      
      block_0.setAutoDraw(true);
    }
    
    
    // if block_0 is active this frame...
    if (block_0.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_0.tStop = t;  // not accounting for scr refresh
      block_0.frameNStop = frameN;  // exact frame index
      // update status
      block_0.status = PsychoJS.Status.FINISHED;
      block_0.setAutoDraw(false);
    }
    
    
    // *block_1* updates
    if (t >= 0 && block_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_1.tStart = t;  // (not accounting for frame time here)
      block_1.frameNStart = frameN;  // exact frame index
      
      block_1.setAutoDraw(true);
    }
    
    
    // if block_1 is active this frame...
    if (block_1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_1.tStop = t;  // not accounting for scr refresh
      block_1.frameNStop = frameN;  // exact frame index
      // update status
      block_1.status = PsychoJS.Status.FINISHED;
      block_1.setAutoDraw(false);
    }
    
    
    // *block_2* updates
    if (t >= 0 && block_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_2.tStart = t;  // (not accounting for frame time here)
      block_2.frameNStart = frameN;  // exact frame index
      
      block_2.setAutoDraw(true);
    }
    
    
    // if block_2 is active this frame...
    if (block_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_2.tStop = t;  // not accounting for scr refresh
      block_2.frameNStop = frameN;  // exact frame index
      // update status
      block_2.status = PsychoJS.Status.FINISHED;
      block_2.setAutoDraw(false);
    }
    
    
    // *block_3* updates
    if (t >= 0 && block_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_3.tStart = t;  // (not accounting for frame time here)
      block_3.frameNStart = frameN;  // exact frame index
      
      block_3.setAutoDraw(true);
    }
    
    
    // if block_3 is active this frame...
    if (block_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_3.tStop = t;  // not accounting for scr refresh
      block_3.frameNStop = frameN;  // exact frame index
      // update status
      block_3.status = PsychoJS.Status.FINISHED;
      block_3.setAutoDraw(false);
    }
    
    
    // *block_4* updates
    if (t >= 0 && block_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_4.tStart = t;  // (not accounting for frame time here)
      block_4.frameNStart = frameN;  // exact frame index
      
      block_4.setAutoDraw(true);
    }
    
    
    // if block_4 is active this frame...
    if (block_4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_4.tStop = t;  // not accounting for scr refresh
      block_4.frameNStop = frameN;  // exact frame index
      // update status
      block_4.status = PsychoJS.Status.FINISHED;
      block_4.setAutoDraw(false);
    }
    
    
    // *block_5* updates
    if (t >= 0 && block_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_5.tStart = t;  // (not accounting for frame time here)
      block_5.frameNStart = frameN;  // exact frame index
      
      block_5.setAutoDraw(true);
    }
    
    
    // if block_5 is active this frame...
    if (block_5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_5.tStop = t;  // not accounting for scr refresh
      block_5.frameNStop = frameN;  // exact frame index
      // update status
      block_5.status = PsychoJS.Status.FINISHED;
      block_5.setAutoDraw(false);
    }
    
    
    // *block_6* updates
    if (t >= 0 && block_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_6.tStart = t;  // (not accounting for frame time here)
      block_6.frameNStart = frameN;  // exact frame index
      
      block_6.setAutoDraw(true);
    }
    
    
    // if block_6 is active this frame...
    if (block_6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_6.tStop = t;  // not accounting for scr refresh
      block_6.frameNStop = frameN;  // exact frame index
      // update status
      block_6.status = PsychoJS.Status.FINISHED;
      block_6.setAutoDraw(false);
    }
    
    
    // *block_7* updates
    if (t >= 0 && block_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_7.tStart = t;  // (not accounting for frame time here)
      block_7.frameNStart = frameN;  // exact frame index
      
      block_7.setAutoDraw(true);
    }
    
    
    // if block_7 is active this frame...
    if (block_7.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_7.tStop = t;  // not accounting for scr refresh
      block_7.frameNStop = frameN;  // exact frame index
      // update status
      block_7.status = PsychoJS.Status.FINISHED;
      block_7.setAutoDraw(false);
    }
    
    
    // *block_8* updates
    if (t >= 0 && block_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_8.tStart = t;  // (not accounting for frame time here)
      block_8.frameNStart = frameN;  // exact frame index
      
      block_8.setAutoDraw(true);
    }
    
    
    // if block_8 is active this frame...
    if (block_8.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (block_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      block_8.tStop = t;  // not accounting for scr refresh
      block_8.frameNStop = frameN;  // exact frame index
      // update status
      block_8.status = PsychoJS.Status.FINISHED;
      block_8.setAutoDraw(false);
    }
    
    
    // *target_highlight* updates
    if (t >= 0 && target_highlight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_highlight.tStart = t;  // (not accounting for frame time here)
      target_highlight.frameNStart = frameN;  // exact frame index
      
      target_highlight.setAutoDraw(true);
    }
    
    
    // if target_highlight is active this frame...
    if (target_highlight.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_highlight.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      target_highlight.tStop = t;  // not accounting for scr refresh
      target_highlight.frameNStop = frameN;  // exact frame index
      // update status
      target_highlight.status = PsychoJS.Status.FINISHED;
      target_highlight.setAutoDraw(false);
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
    for (const thisComponent of Corsi_PresentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Corsi_PresentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Corsi_Present' ---
    for (const thisComponent of Corsi_PresentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Corsi_Present.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (Corsi_PresentMaxDurationReached) {
        Corsi_PresentClock.add(Corsi_PresentMaxDuration);
    } else {
        Corsi_PresentClock.add(0.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Corsi_FixationMaxDurationReached;
var Corsi_FixationMaxDuration;
var Corsi_FixationComponents;
function Corsi_FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Corsi_Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Corsi_FixationClock.reset(routineTimer.getTime());
    routineTimer.add(0.300000);
    Corsi_FixationMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Corsi_Fixation.started', globalClock.getTime());
    Corsi_FixationMaxDuration = null
    // keep track of which components have finished
    Corsi_FixationComponents = [];
    Corsi_FixationComponents.push(fixation_text);
    
    for (const thisComponent of Corsi_FixationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Corsi_FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Corsi_Fixation' ---
    // get current time
    t = Corsi_FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_text* updates
    if (t >= 0 && fixation_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_text.tStart = t;  // (not accounting for frame time here)
      fixation_text.frameNStart = frameN;  // exact frame index
      
      fixation_text.setAutoDraw(true);
    }
    
    
    // if fixation_text is active this frame...
    if (fixation_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation_text.tStop = t;  // not accounting for scr refresh
      fixation_text.frameNStop = frameN;  // exact frame index
      // update status
      fixation_text.status = PsychoJS.Status.FINISHED;
      fixation_text.setAutoDraw(false);
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
    for (const thisComponent of Corsi_FixationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Corsi_FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Corsi_Fixation' ---
    for (const thisComponent of Corsi_FixationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Corsi_Fixation.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (Corsi_FixationMaxDurationReached) {
        Corsi_FixationClock.add(Corsi_FixationMaxDuration);
    } else {
        Corsi_FixationClock.add(0.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Corsi_FeedbackMaxDurationReached;
var Corsi_FeedbackMaxDuration;
var Corsi_FeedbackComponents;
function Corsi_FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'Corsi_Feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Corsi_FeedbackClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    Corsi_FeedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_corsi_feedback
    if (is_correct) {
        feedback_text.setText('Correct!');
        feedback_text.setColor(new util.Color('green'));
    } else {
        feedback_text.setText('Incorrect');
        feedback_text.setColor(new util.Color('red'));
    }
    psychoJS.experiment.addData('Corsi_Feedback.started', globalClock.getTime());
    Corsi_FeedbackMaxDuration = null
    // keep track of which components have finished
    Corsi_FeedbackComponents = [];
    Corsi_FeedbackComponents.push(feedback_text);

    for (const thisComponent of Corsi_FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Corsi_FeedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Corsi_Feedback' ---
    // get current time
    t = Corsi_FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *feedback_text* updates
    if (t >= 0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index

      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      feedback_text.tStop = t;  // not accounting for scr refresh
      feedback_text.frameNStop = frameN;  // exact frame index
      // update status
      feedback_text.status = PsychoJS.Status.FINISHED;
      feedback_text.setAutoDraw(false);
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
    for (const thisComponent of Corsi_FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Corsi_FeedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Corsi_Feedback' ---
    for (const thisComponent of Corsi_FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Corsi_Feedback.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (Corsi_FeedbackMaxDurationReached) {
        Corsi_FeedbackClock.add(Corsi_FeedbackMaxDuration);
    } else {
        Corsi_FeedbackClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Corsi_ResponseMaxDurationReached;
var gotValidClick;
var blocks;
var user_clicks;
var mouse_was_down;
var Corsi_ResponseMaxDuration;
var Corsi_ResponseComponents;
function Corsi_ResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Corsi_Response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Corsi_ResponseClock.reset();
    routineTimer.reset();
    Corsi_ResponseMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_corsi
    // current position of the mouse:
    mouse_corsi.x = [];
    mouse_corsi.y = [];
    mouse_corsi.leftButton = [];
    mouse_corsi.midButton = [];
    mouse_corsi.rightButton = [];
    mouse_corsi.time = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from Corsi_code_response
    user_clicks = [];
    mouse_was_down = false;

    blocks = [resp_block_0, resp_block_1, resp_block_2, resp_block_3, resp_block_4, resp_block_5, resp_block_6, resp_block_7, resp_block_8];

    // Reset all blocks to gray with white borders
    for (let block of blocks) {
        block.setFillColor(new util.Color('gray'));
        block.setLineColor(new util.Color('white'));
    }

    psychoJS.experiment.addData('Corsi_Response.started', globalClock.getTime());
    Corsi_ResponseMaxDuration = null
    // keep track of which components have finished
    Corsi_ResponseComponents = [];
    Corsi_ResponseComponents.push(resp_block_0);
    Corsi_ResponseComponents.push(resp_block_1);
    Corsi_ResponseComponents.push(resp_block_2);
    Corsi_ResponseComponents.push(resp_block_3);
    Corsi_ResponseComponents.push(resp_block_4);
    Corsi_ResponseComponents.push(resp_block_5);
    Corsi_ResponseComponents.push(resp_block_6);
    Corsi_ResponseComponents.push(resp_block_7);
    Corsi_ResponseComponents.push(resp_block_8);
    Corsi_ResponseComponents.push(mouse_corsi);
    
    for (const thisComponent of Corsi_ResponseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function Corsi_ResponseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Corsi_Response' ---
    // get current time
    t = Corsi_ResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *resp_block_0* updates
    if (t >= 0 && resp_block_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_0.tStart = t;  // (not accounting for frame time here)
      resp_block_0.frameNStart = frameN;  // exact frame index
      
      resp_block_0.setAutoDraw(true);
    }
    
    
    // if resp_block_0 is active this frame...
    if (resp_block_0.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_1* updates
    if (t >= 0 && resp_block_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_1.tStart = t;  // (not accounting for frame time here)
      resp_block_1.frameNStart = frameN;  // exact frame index
      
      resp_block_1.setAutoDraw(true);
    }
    
    
    // if resp_block_1 is active this frame...
    if (resp_block_1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_2* updates
    if (t >= 0 && resp_block_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_2.tStart = t;  // (not accounting for frame time here)
      resp_block_2.frameNStart = frameN;  // exact frame index
      
      resp_block_2.setAutoDraw(true);
    }
    
    
    // if resp_block_2 is active this frame...
    if (resp_block_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_3* updates
    if (t >= 0 && resp_block_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_3.tStart = t;  // (not accounting for frame time here)
      resp_block_3.frameNStart = frameN;  // exact frame index
      
      resp_block_3.setAutoDraw(true);
    }
    
    
    // if resp_block_3 is active this frame...
    if (resp_block_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_4* updates
    if (t >= 0 && resp_block_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_4.tStart = t;  // (not accounting for frame time here)
      resp_block_4.frameNStart = frameN;  // exact frame index
      
      resp_block_4.setAutoDraw(true);
    }
    
    
    // if resp_block_4 is active this frame...
    if (resp_block_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_5* updates
    if (t >= 0 && resp_block_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_5.tStart = t;  // (not accounting for frame time here)
      resp_block_5.frameNStart = frameN;  // exact frame index
      
      resp_block_5.setAutoDraw(true);
    }
    
    
    // if resp_block_5 is active this frame...
    if (resp_block_5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_6* updates
    if (t >= 0 && resp_block_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_6.tStart = t;  // (not accounting for frame time here)
      resp_block_6.frameNStart = frameN;  // exact frame index
      
      resp_block_6.setAutoDraw(true);
    }
    
    
    // if resp_block_6 is active this frame...
    if (resp_block_6.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_7* updates
    if (t >= 0 && resp_block_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_7.tStart = t;  // (not accounting for frame time here)
      resp_block_7.frameNStart = frameN;  // exact frame index
      
      resp_block_7.setAutoDraw(true);
    }
    
    
    // if resp_block_7 is active this frame...
    if (resp_block_7.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *resp_block_8* updates
    if (t >= 0 && resp_block_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_block_8.tStart = t;  // (not accounting for frame time here)
      resp_block_8.frameNStart = frameN;  // exact frame index
      
      resp_block_8.setAutoDraw(true);
    }
    
    
    // if resp_block_8 is active this frame...
    if (resp_block_8.status === PsychoJS.Status.STARTED) {
    }
    
    // *mouse_corsi* updates
    if (t >= 0 && mouse_corsi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_corsi.tStart = t;  // (not accounting for frame time here)
      mouse_corsi.frameNStart = frameN;  // exact frame index
      
      mouse_corsi.status = PsychoJS.Status.STARTED;
      mouse_corsi.mouseClock.reset();
      prevButtonState = mouse_corsi.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse_corsi is active this frame...
    if (mouse_corsi.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_corsi.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_corsi.getPos();
          mouse_corsi.x.push(_mouseXYs[0]);
          mouse_corsi.y.push(_mouseXYs[1]);
          mouse_corsi.leftButton.push(_mouseButtons[0]);
          mouse_corsi.midButton.push(_mouseButtons[1]);
          mouse_corsi.rightButton.push(_mouseButtons[2]);
          mouse_corsi.time.push(mouse_corsi.mouseClock.getTime());
        }
      }
    }
    // Run 'Each Frame' code from Corsi_code_response
    let mouse_buttons = mouse_corsi.getPressed();

    // 1. Check for a NEW left-click
    if (mouse_buttons[0] === 1 && !mouse_was_down) {
        for (let i = 0; i < blocks.length; i++) {

            // PsychoJS uses .contains() instead of isPressedIn()
            if (blocks[i].contains(mouse_corsi)) {

                // Record if it hasn't been clicked yet
                if (!user_clicks.includes(i)) {
                    user_clicks.push(i);

                    // Highlight and lock border
                    blocks[i].setFillColor(new util.Color('yellow'));
                    blocks[i].setLineColor(new util.Color('white'));
                }
            }
        }
        // Lock click state
        mouse_was_down = true;
    }
    // 2. Unlock when they release
    else if (mouse_buttons[0] === 0) {
        mouse_was_down = false;
    }

    // 3. End routine when sequence length is reached
    if (user_clicks.length >= sequence_length) {
        // Save to Pavlovia data file
        psychoJS.experiment.addData('user_sequence', user_clicks);
        continueRoutine = false;
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
    for (const thisComponent of Corsi_ResponseComponents)
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


function Corsi_ResponseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Corsi_Response' ---
    for (const thisComponent of Corsi_ResponseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Corsi_Response.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_corsi.x', mouse_corsi.x);
    psychoJS.experiment.addData('mouse_corsi.y', mouse_corsi.y);
    psychoJS.experiment.addData('mouse_corsi.leftButton', mouse_corsi.leftButton);
    psychoJS.experiment.addData('mouse_corsi.midButton', mouse_corsi.midButton);
    psychoJS.experiment.addData('mouse_corsi.rightButton', mouse_corsi.rightButton);
    psychoJS.experiment.addData('mouse_corsi.time', mouse_corsi.time);
    
    // Run 'End Routine' code from Corsi_code_response
    is_correct = (user_clicks.length === current_sequence.length) &&
        user_clicks.every((val, index) => val === current_sequence[index]);
    corsi_response_time = mouse_corsi.time.length > 0 ? mouse_corsi.time[mouse_corsi.time.length - 1] : null;
    psychoJS.experiment.addData('current_sequence', current_sequence);
    psychoJS.experiment.addData('corsi_response_time', corsi_response_time);
    psychoJS.experiment.addData('corsi_forward_correct', is_correct ? 1 : 0);
    
    // the Routine "Corsi_Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instructions_BackwardMaxDurationReached;
var Instructions_BackwardMaxDuration;
var Instructions_BackwardComponents;
function Instructions_BackwardRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'Instructions_Backward' ---
    t = 0;
    frameN = -1;
    continueRoutine = !(expInfo['skip_backward']); // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instructions_BackwardClock.reset();
    routineTimer.reset();
    Instructions_BackwardMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions_Backward.started', globalClock.getTime());
    Instructions_BackwardMaxDuration = null
    // keep track of which components have finished
    Instructions_BackwardComponents = [];
    Instructions_BackwardComponents.push(instr_backward_text);

    for (const thisComponent of Instructions_BackwardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_BackwardRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_Backward' ---
    // get current time
    t = Instructions_BackwardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instr_backward_text* updates
    if (t >= 0 && instr_backward_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_backward_text.tStart = t;  // (not accounting for frame time here)
      instr_backward_text.frameNStart = frameN;  // exact frame index

      instr_backward_text.setAutoDraw(true);
    }

    // if instr_backward_text is active this frame...
    if (instr_backward_text.status === PsychoJS.Status.STARTED) {
    }
    // Run 'Each Frame' code from code_instr_backward
    if (psychoJS.eventManager.getKeys({keyList: ['space']}).length > 0) {
        continueRoutine = false;
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
    for (const thisComponent of Instructions_BackwardComponents)
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


function Instructions_BackwardRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_Backward' ---
    for (const thisComponent of Instructions_BackwardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions_Backward.stopped', globalClock.getTime());
    // the Routine "Instructions_Backward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var corsi_trial_loop_back;
function corsi_trial_loop_backLoopBegin(corsi_trial_loop_backLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    corsi_trial_loop_back = new TrialHandler({
      psychoJS: psychoJS,
      nReps: (expInfo['skip_backward'] ? 0 : 5), method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'corsi_conditions.csv',
      seed: undefined, name: 'corsi_trial_loop_back'
    });
    psychoJS.experiment.addLoop(corsi_trial_loop_back); // add the loop to the experiment
    currentLoop = corsi_trial_loop_back;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisCorsi_trial_loop_back of corsi_trial_loop_back) {
      snapshot = corsi_trial_loop_back.getSnapshot();
      corsi_trial_loop_backLoopScheduler.add(importConditions(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Corsi_Trial_SetupRoutineBegin(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Corsi_Trial_SetupRoutineEachFrame());
      corsi_trial_loop_backLoopScheduler.add(Corsi_Trial_SetupRoutineEnd(snapshot));
      const corsi_flash_loopLoopScheduler = new Scheduler(psychoJS);
      corsi_trial_loop_backLoopScheduler.add(corsi_flash_loopLoopBegin(corsi_flash_loopLoopScheduler, snapshot));
      corsi_trial_loop_backLoopScheduler.add(corsi_flash_loopLoopScheduler);
      corsi_trial_loop_backLoopScheduler.add(corsi_flash_loopLoopEnd);
      corsi_trial_loop_backLoopScheduler.add(Corsi_FixationRoutineBegin(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Corsi_FixationRoutineEachFrame());
      corsi_trial_loop_backLoopScheduler.add(Corsi_FixationRoutineEnd(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Back_Corsi_ResponseRoutineBegin(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Back_Corsi_ResponseRoutineEachFrame());
      corsi_trial_loop_backLoopScheduler.add(Back_Corsi_ResponseRoutineEnd(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Corsi_FeedbackRoutineBegin(snapshot));
      corsi_trial_loop_backLoopScheduler.add(Corsi_FeedbackRoutineEachFrame());
      corsi_trial_loop_backLoopScheduler.add(Corsi_FeedbackRoutineEnd(snapshot));
      corsi_trial_loop_backLoopScheduler.add(corsi_trial_loop_backLoopEndIteration(corsi_trial_loop_backLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


async function corsi_trial_loop_backLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(corsi_trial_loop_back);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function corsi_trial_loop_backLoopEndIteration(scheduler, snapshot) {
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


var Back_Corsi_ResponseMaxDurationReached;
var Back_Corsi_ResponseMaxDuration;
var Back_Corsi_ResponseComponents;
function Back_Corsi_ResponseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'Back_Corsi_Response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Back_Corsi_ResponseClock.reset();
    routineTimer.reset();
    Back_Corsi_ResponseMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_corsi_back
    // current position of the mouse:
    mouse_corsi_back.x = [];
    mouse_corsi_back.y = [];
    mouse_corsi_back.leftButton = [];
    mouse_corsi_back.midButton = [];
    mouse_corsi_back.rightButton = [];
    mouse_corsi_back.time = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from Corsi_code_response_back
    blocks = [back_block_0, back_block_1, back_block_2, back_block_3, back_block_4, back_block_5, back_block_6, back_block_7, back_block_8];
    user_clicks = [];
    mouse_was_down = false;

    // Reset all blocks to gray with white borders
    for (let block of blocks) {
        block.setFillColor(new util.Color('gray'));
        block.setLineColor(new util.Color('white'));
    }

    psychoJS.experiment.addData('Back_Corsi_Response.started', globalClock.getTime());
    Back_Corsi_ResponseMaxDuration = null
    // keep track of which components have finished
    Back_Corsi_ResponseComponents = [];
    Back_Corsi_ResponseComponents.push(back_block_0);
    Back_Corsi_ResponseComponents.push(back_block_1);
    Back_Corsi_ResponseComponents.push(back_block_2);
    Back_Corsi_ResponseComponents.push(back_block_3);
    Back_Corsi_ResponseComponents.push(back_block_4);
    Back_Corsi_ResponseComponents.push(back_block_5);
    Back_Corsi_ResponseComponents.push(back_block_6);
    Back_Corsi_ResponseComponents.push(back_block_7);
    Back_Corsi_ResponseComponents.push(back_block_8);
    Back_Corsi_ResponseComponents.push(mouse_corsi_back);

    for (const thisComponent of Back_Corsi_ResponseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Back_Corsi_ResponseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Back_Corsi_Response' ---
    // get current time
    t = Back_Corsi_ResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *back_block_0* updates
    if (t >= 0 && back_block_0.status === PsychoJS.Status.NOT_STARTED) {
      back_block_0.tStart = t;
      back_block_0.frameNStart = frameN;
      back_block_0.setAutoDraw(true);
    }
    if (back_block_0.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_1* updates
    if (t >= 0 && back_block_1.status === PsychoJS.Status.NOT_STARTED) {
      back_block_1.tStart = t;
      back_block_1.frameNStart = frameN;
      back_block_1.setAutoDraw(true);
    }
    if (back_block_1.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_2* updates
    if (t >= 0 && back_block_2.status === PsychoJS.Status.NOT_STARTED) {
      back_block_2.tStart = t;
      back_block_2.frameNStart = frameN;
      back_block_2.setAutoDraw(true);
    }
    if (back_block_2.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_3* updates
    if (t >= 0 && back_block_3.status === PsychoJS.Status.NOT_STARTED) {
      back_block_3.tStart = t;
      back_block_3.frameNStart = frameN;
      back_block_3.setAutoDraw(true);
    }
    if (back_block_3.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_4* updates
    if (t >= 0 && back_block_4.status === PsychoJS.Status.NOT_STARTED) {
      back_block_4.tStart = t;
      back_block_4.frameNStart = frameN;
      back_block_4.setAutoDraw(true);
    }
    if (back_block_4.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_5* updates
    if (t >= 0 && back_block_5.status === PsychoJS.Status.NOT_STARTED) {
      back_block_5.tStart = t;
      back_block_5.frameNStart = frameN;
      back_block_5.setAutoDraw(true);
    }
    if (back_block_5.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_6* updates
    if (t >= 0 && back_block_6.status === PsychoJS.Status.NOT_STARTED) {
      back_block_6.tStart = t;
      back_block_6.frameNStart = frameN;
      back_block_6.setAutoDraw(true);
    }
    if (back_block_6.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_7* updates
    if (t >= 0 && back_block_7.status === PsychoJS.Status.NOT_STARTED) {
      back_block_7.tStart = t;
      back_block_7.frameNStart = frameN;
      back_block_7.setAutoDraw(true);
    }
    if (back_block_7.status === PsychoJS.Status.STARTED) {
    }

    // *back_block_8* updates
    if (t >= 0 && back_block_8.status === PsychoJS.Status.NOT_STARTED) {
      back_block_8.tStart = t;
      back_block_8.frameNStart = frameN;
      back_block_8.setAutoDraw(true);
    }
    if (back_block_8.status === PsychoJS.Status.STARTED) {
    }

    // *mouse_corsi_back* updates
    if (t >= 0 && mouse_corsi_back.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_corsi_back.tStart = t;  // (not accounting for frame time here)
      mouse_corsi_back.frameNStart = frameN;  // exact frame index

      mouse_corsi_back.status = PsychoJS.Status.STARTED;
      mouse_corsi_back.mouseClock.reset();
      prevButtonState = mouse_corsi_back.getPressed();  // if button is down already this ISN'T a new click
    }

    // if mouse_corsi_back is active this frame...
    if (mouse_corsi_back.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse_corsi_back.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_corsi_back.getPos();
          mouse_corsi_back.x.push(_mouseXYs[0]);
          mouse_corsi_back.y.push(_mouseXYs[1]);
          mouse_corsi_back.leftButton.push(_mouseButtons[0]);
          mouse_corsi_back.midButton.push(_mouseButtons[1]);
          mouse_corsi_back.rightButton.push(_mouseButtons[2]);
          mouse_corsi_back.time.push(mouse_corsi_back.mouseClock.getTime());
        }
      }
    }
    // Run 'Each Frame' code from Corsi_code_response_back
    let mouse_buttons = mouse_corsi_back.getPressed();

    // 1. Check for a NEW left-click
    if (mouse_buttons[0] === 1 && !mouse_was_down) {
        for (let i = 0; i < blocks.length; i++) {

            // PsychoJS uses .contains() instead of isPressedIn()
            if (blocks[i].contains(mouse_corsi_back)) {

                // Record if it hasn't been clicked yet
                if (!user_clicks.includes(i)) {
                    user_clicks.push(i);

                    // Highlight and lock border
                    blocks[i].setFillColor(new util.Color('yellow'));
                    blocks[i].setLineColor(new util.Color('white'));
                }
            }
        }
        // Lock click state
        mouse_was_down = true;
    }
    // 2. Unlock when they release
    else if (mouse_buttons[0] === 0) {
        mouse_was_down = false;
    }

    // 3. End routine when sequence length is reached
    if (user_clicks.length >= sequence_length) {
        // Save to Pavlovia data file
        psychoJS.experiment.addData('user_sequence', user_clicks);
        continueRoutine = false;
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
    for (const thisComponent of Back_Corsi_ResponseComponents)
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


function Back_Corsi_ResponseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Back_Corsi_Response' ---
    for (const thisComponent of Back_Corsi_ResponseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Back_Corsi_Response.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_corsi_back.x', mouse_corsi_back.x);
    psychoJS.experiment.addData('mouse_corsi_back.y', mouse_corsi_back.y);
    psychoJS.experiment.addData('mouse_corsi_back.leftButton', mouse_corsi_back.leftButton);
    psychoJS.experiment.addData('mouse_corsi_back.midButton', mouse_corsi_back.midButton);
    psychoJS.experiment.addData('mouse_corsi_back.rightButton', mouse_corsi_back.rightButton);
    psychoJS.experiment.addData('mouse_corsi_back.time', mouse_corsi_back.time);

    // Run 'End Routine' code from Corsi_code_response_back
    let target_sequence = current_sequence.slice().reverse();
    is_correct = (user_clicks.length === target_sequence.length) &&
        user_clicks.every((val, index) => val === target_sequence[index]);
    corsi_response_time = mouse_corsi_back.time.length > 0 ? mouse_corsi_back.time[mouse_corsi_back.time.length - 1] : null;
    psychoJS.experiment.addData('current_sequence', current_sequence);
    psychoJS.experiment.addData('corsi_response_time', corsi_response_time);
    psychoJS.experiment.addData('corsi_backward_correct', is_correct ? 1 : 0);

    // the Routine "Back_Corsi_Response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instructions_NBackMaxDurationReached;
var Instructions_NBackMaxDuration;
var Instructions_NBackComponents;
function Instructions_NBackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'Instructions_NBack' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Instructions_NBackClock.reset();
    routineTimer.reset();
    Instructions_NBackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_instr_nback
    n = nback_level;
    reps = nback_reps;
    instr_nback_text.setText(
        `${n}-Back Task\n\n` +
        `Watch the grid. On each trial, one square will light up.\n\n` +
        `Press SPACE if the highlighted square is in the SAME position as it was ${n} trial(s) ago.\n` +
        `Otherwise, do not press anything.\n\n` +
        `This block has ${reps} trials.\n\n` +
        `Press SPACE to begin.`
    );
    psychoJS.experiment.addData('Instructions_NBack.started', globalClock.getTime());
    Instructions_NBackMaxDuration = null
    // keep track of which components have finished
    Instructions_NBackComponents = [];
    Instructions_NBackComponents.push(instr_nback_text);

    for (const thisComponent of Instructions_NBackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_NBackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_NBack' ---
    // get current time
    t = Instructions_NBackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame

    // *instr_nback_text* updates
    if (t >= 0 && instr_nback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_nback_text.tStart = t;  // (not accounting for frame time here)
      instr_nback_text.frameNStart = frameN;  // exact frame index

      instr_nback_text.setAutoDraw(true);
    }

    // if instr_nback_text is active this frame...
    if (instr_nback_text.status === PsychoJS.Status.STARTED) {
    }
    // Run 'Each Frame' code from code_instr_nback
    if (psychoJS.eventManager.getKeys({keyList: ['space']}).length > 0) {
        continueRoutine = false;
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
    for (const thisComponent of Instructions_NBackComponents)
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


function Instructions_NBackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_NBack' ---
    for (const thisComponent of Instructions_NBackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions_NBack.stopped', globalClock.getTime());
    // the Routine "Instructions_NBack" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var NBack_Block_SetupComponents;
function NBack_Block_SetupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'NBack_Block_Setup' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    NBack_Block_SetupClock.reset();
    routineTimer.reset();
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_nback_block_setup
    // Generate the full sequence of grid positions (0-8) for this n-back block,
    // targeting ~30% match trials. The first n trials can never be matches
    // because there is no history yet to compare against.
    n = nback_level;
    reps = nback_reps;
    let match_prob = 0.3;
    let positions = [];
    for (let i = 0; i < reps; i++) {
        if (i < n) {
            positions.push(Math.floor(Math.random() * 9));
        } else if (Math.random() < match_prob) {
            positions.push(positions[i - n]);
        } else {
            let target = positions[i - n];
            let choices = [];
            for (let p = 0; p < 9; p++) {
                if (p !== target) { choices.push(p); }
            }
            positions.push(choices[Math.floor(Math.random() * choices.length)]);
        }
    }
    nback_positions = positions;

    psychoJS.experiment.addData('NBack_Block_Setup.started', globalClock.getTime());
    // keep track of which components have finished
    NBack_Block_SetupComponents = [];

    for (const thisComponent of NBack_Block_SetupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NBack_Block_SetupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NBack_Block_Setup' ---
    // get current time
    t = NBack_Block_SetupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    for (const thisComponent of NBack_Block_SetupComponents)
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


function NBack_Block_SetupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NBack_Block_Setup' ---
    for (const thisComponent of NBack_Block_SetupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NBack_Block_Setup.stopped', globalClock.getTime());
    // the Routine "NBack_Block_Setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();

    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var nback_blocks_loop;
function nback_blocks_loopLoopBegin(nback_blocks_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    nback_blocks_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'nback_block_conditions.csv',
      seed: undefined, name: 'nback_blocks_loop'
    });
    psychoJS.experiment.addLoop(nback_blocks_loop); // add the loop to the experiment
    currentLoop = nback_blocks_loop;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisNback_blocks_loop of nback_blocks_loop) {
      snapshot = nback_blocks_loop.getSnapshot();
      nback_blocks_loopLoopScheduler.add(importConditions(snapshot));
      nback_blocks_loopLoopScheduler.add(Instructions_NBackRoutineBegin(snapshot));
      nback_blocks_loopLoopScheduler.add(Instructions_NBackRoutineEachFrame());
      nback_blocks_loopLoopScheduler.add(Instructions_NBackRoutineEnd(snapshot));
      nback_blocks_loopLoopScheduler.add(NBack_Block_SetupRoutineBegin(snapshot));
      nback_blocks_loopLoopScheduler.add(NBack_Block_SetupRoutineEachFrame());
      nback_blocks_loopLoopScheduler.add(NBack_Block_SetupRoutineEnd(snapshot));
      const nback_trial_loopLoopScheduler = new Scheduler(psychoJS);
      nback_blocks_loopLoopScheduler.add(nback_trial_loopLoopBegin(nback_trial_loopLoopScheduler, snapshot));
      nback_blocks_loopLoopScheduler.add(nback_trial_loopLoopScheduler);
      nback_blocks_loopLoopScheduler.add(nback_trial_loopLoopEnd);
      nback_blocks_loopLoopScheduler.add(nback_blocks_loopLoopEndIteration(nback_blocks_loopLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


async function nback_blocks_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(nback_blocks_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function nback_blocks_loopLoopEndIteration(scheduler, snapshot) {
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


var nback_trial_loop;
function nback_trial_loopLoopBegin(nback_trial_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop

    // set up handler to look after randomisation of conditions etc
    nback_trial_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nback_reps, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: [undefined],
      seed: undefined, name: 'nback_trial_loop'
    });
    psychoJS.experiment.addLoop(nback_trial_loop); // add the loop to the experiment
    currentLoop = nback_trial_loop;  // we're now the current loop

    // Schedule all the trials in the trialList:
    for (const thisNback_trial_loop of nback_trial_loop) {
      snapshot = nback_trial_loop.getSnapshot();
      nback_trial_loopLoopScheduler.add(importConditions(snapshot));
      nback_trial_loopLoopScheduler.add(NBack_PresentRoutineBegin(snapshot));
      nback_trial_loopLoopScheduler.add(NBack_PresentRoutineEachFrame());
      nback_trial_loopLoopScheduler.add(NBack_PresentRoutineEnd(snapshot));
      nback_trial_loopLoopScheduler.add(Corsi_FixationRoutineBegin(snapshot));
      nback_trial_loopLoopScheduler.add(Corsi_FixationRoutineEachFrame());
      nback_trial_loopLoopScheduler.add(Corsi_FixationRoutineEnd(snapshot));
      nback_trial_loopLoopScheduler.add(nback_trial_loopLoopEndIteration(nback_trial_loopLoopScheduler, snapshot));
    }

    return Scheduler.Event.NEXT;
  }
}


async function nback_trial_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(nback_trial_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function nback_trial_loopLoopEndIteration(scheduler, snapshot) {
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


var NBack_PresentMaxDurationReached;
var NBack_PresentMaxDuration;
var NBack_PresentComponents;
function NBack_PresentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date

    //--- Prepare to start Routine 'NBack_Present' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    NBack_PresentClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    NBack_PresentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_nback_trial
    nback_blocks = [nback_block_0, nback_block_1, nback_block_2, nback_block_3, nback_block_4, nback_block_5, nback_block_6, nback_block_7, nback_block_8];

    n = nback_level;
    trial_idx = nback_trial_loop.thisN;
    current_pos = nback_positions[trial_idx];
    if (trial_idx >= n && current_pos === nback_positions[trial_idx - n]) {
        is_match = 1;
    } else {
        is_match = 0;
    }

    for (let i = 0; i < nback_blocks.length; i++) {
        nback_blocks[i].setFillColor(i === current_pos ? new util.Color('yellow') : new util.Color('gray'));
    }

    responded = false;
    nback_rt = null;
    nback_resp_clock = new util.Clock();
    psychoJS.experiment.addData('NBack_Present.started', globalClock.getTime());
    NBack_PresentMaxDuration = 2.0
    // keep track of which components have finished
    NBack_PresentComponents = [];
    NBack_PresentComponents.push(nback_block_0);
    NBack_PresentComponents.push(nback_block_1);
    NBack_PresentComponents.push(nback_block_2);
    NBack_PresentComponents.push(nback_block_3);
    NBack_PresentComponents.push(nback_block_4);
    NBack_PresentComponents.push(nback_block_5);
    NBack_PresentComponents.push(nback_block_6);
    NBack_PresentComponents.push(nback_block_7);
    NBack_PresentComponents.push(nback_block_8);

    for (const thisComponent of NBack_PresentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function NBack_PresentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'NBack_Present' ---
    // get current time
    t = NBack_PresentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > NBack_PresentMaxDuration) {
        NBack_PresentMaxDurationReached = true
        continueRoutine = false
    }

    // *nback_block_0* updates
    if (t >= 0 && nback_block_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_0.tStart = t;  // (not accounting for frame time here)
      nback_block_0.frameNStart = frameN;  // exact frame index

      nback_block_0.setAutoDraw(true);
    }

    // if nback_block_0 is active this frame...
    if (nback_block_0.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_0.tStop = t;  // not accounting for scr refresh
      nback_block_0.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_0.status = PsychoJS.Status.FINISHED;
      nback_block_0.setAutoDraw(false);
    }

    // *nback_block_1* updates
    if (t >= 0 && nback_block_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_1.tStart = t;  // (not accounting for frame time here)
      nback_block_1.frameNStart = frameN;  // exact frame index

      nback_block_1.setAutoDraw(true);
    }

    // if nback_block_1 is active this frame...
    if (nback_block_1.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_1.tStop = t;  // not accounting for scr refresh
      nback_block_1.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_1.status = PsychoJS.Status.FINISHED;
      nback_block_1.setAutoDraw(false);
    }

    // *nback_block_2* updates
    if (t >= 0 && nback_block_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_2.tStart = t;  // (not accounting for frame time here)
      nback_block_2.frameNStart = frameN;  // exact frame index

      nback_block_2.setAutoDraw(true);
    }

    // if nback_block_2 is active this frame...
    if (nback_block_2.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_2.tStop = t;  // not accounting for scr refresh
      nback_block_2.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_2.status = PsychoJS.Status.FINISHED;
      nback_block_2.setAutoDraw(false);
    }

    // *nback_block_3* updates
    if (t >= 0 && nback_block_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_3.tStart = t;  // (not accounting for frame time here)
      nback_block_3.frameNStart = frameN;  // exact frame index

      nback_block_3.setAutoDraw(true);
    }

    // if nback_block_3 is active this frame...
    if (nback_block_3.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_3.tStop = t;  // not accounting for scr refresh
      nback_block_3.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_3.status = PsychoJS.Status.FINISHED;
      nback_block_3.setAutoDraw(false);
    }

    // *nback_block_4* updates
    if (t >= 0 && nback_block_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_4.tStart = t;  // (not accounting for frame time here)
      nback_block_4.frameNStart = frameN;  // exact frame index

      nback_block_4.setAutoDraw(true);
    }

    // if nback_block_4 is active this frame...
    if (nback_block_4.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_4.tStop = t;  // not accounting for scr refresh
      nback_block_4.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_4.status = PsychoJS.Status.FINISHED;
      nback_block_4.setAutoDraw(false);
    }

    // *nback_block_5* updates
    if (t >= 0 && nback_block_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_5.tStart = t;  // (not accounting for frame time here)
      nback_block_5.frameNStart = frameN;  // exact frame index

      nback_block_5.setAutoDraw(true);
    }

    // if nback_block_5 is active this frame...
    if (nback_block_5.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_5.tStop = t;  // not accounting for scr refresh
      nback_block_5.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_5.status = PsychoJS.Status.FINISHED;
      nback_block_5.setAutoDraw(false);
    }

    // *nback_block_6* updates
    if (t >= 0 && nback_block_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_6.tStart = t;  // (not accounting for frame time here)
      nback_block_6.frameNStart = frameN;  // exact frame index

      nback_block_6.setAutoDraw(true);
    }

    // if nback_block_6 is active this frame...
    if (nback_block_6.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_6.tStop = t;  // not accounting for scr refresh
      nback_block_6.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_6.status = PsychoJS.Status.FINISHED;
      nback_block_6.setAutoDraw(false);
    }

    // *nback_block_7* updates
    if (t >= 0 && nback_block_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_7.tStart = t;  // (not accounting for frame time here)
      nback_block_7.frameNStart = frameN;  // exact frame index

      nback_block_7.setAutoDraw(true);
    }

    // if nback_block_7 is active this frame...
    if (nback_block_7.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_7.tStop = t;  // not accounting for scr refresh
      nback_block_7.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_7.status = PsychoJS.Status.FINISHED;
      nback_block_7.setAutoDraw(false);
    }

    // *nback_block_8* updates
    if (t >= 0 && nback_block_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nback_block_8.tStart = t;  // (not accounting for frame time here)
      nback_block_8.frameNStart = frameN;  // exact frame index

      nback_block_8.setAutoDraw(true);
    }

    // if nback_block_8 is active this frame...
    if (nback_block_8.status === PsychoJS.Status.STARTED) {
    }

    frameRemains = 0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (nback_block_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      nback_block_8.tStop = t;  // not accounting for scr refresh
      nback_block_8.frameNStop = frameN;  // exact frame index
      // update status
      nback_block_8.status = PsychoJS.Status.FINISHED;
      nback_block_8.setAutoDraw(false);
    }

    // Run 'Each Frame' code from code_nback_trial
    if (t > 0.5) {
        nback_blocks[current_pos].setFillColor(new util.Color('gray'));
    }

    if (!responded && psychoJS.eventManager.getKeys({keyList: ['space']}).length > 0) {
        responded = true;
        nback_rt = nback_resp_clock.getTime();
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
    for (const thisComponent of NBack_PresentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }

    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function NBack_PresentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'NBack_Present' ---
    for (const thisComponent of NBack_PresentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('NBack_Present.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (NBack_PresentMaxDurationReached) {
        NBack_PresentClock.add(NBack_PresentMaxDuration);
    } else {
        NBack_PresentClock.add(2.000000);
    }
    // Run 'End Routine' code from code_nback_trial
    let sig = '';
    if (is_match === 1 && responded) sig = 'hit';
    else if (is_match === 1 && !responded) sig = 'miss';
    else if (is_match === 0 && responded) sig = 'false_alarm';
    else sig = 'correct_rejection';

    psychoJS.experiment.addData('nback_level', n);
    psychoJS.experiment.addData('nback_trial_index', trial_idx);
    psychoJS.experiment.addData('nback_position', current_pos);
    psychoJS.experiment.addData('nback_is_match', is_match);
    psychoJS.experiment.addData('nback_responded', responded);
    psychoJS.experiment.addData('nback_rt', responded ? nback_rt : '');
    psychoJS.experiment.addData('nback_signal', sig);

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
