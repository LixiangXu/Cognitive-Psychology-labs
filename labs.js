/* ==========================================================================
   labs.js — the list of labs shown on the site.  THIS IS THE FILE TO EDIT.

   The landing page (index.html) and every details page (lab.html?id=...)
   are built from this list. You never need to touch the HTML or CSS to add
   or change a lab.

   TO ADD A LAB
     1. Copy one { ... } block below, paste it where it belongs in the list
        (the list order is the "course order" on the page), and edit the text.
     2. Put a cover image in the covers/ folder (a screenshot of a meaningful
        screen, about 880 x 550) and point "cover" at it.
     3. Save, commit, push. That's all.

   FIELDS   (only id, title and folder are required; leave the rest out or
             empty and the page simply skips that part)

     id          Short unique name used in the details-page address,
                 e.g. "lab5" gives lab.html?id=lab5. Don't change it once
                 a link has been shared.
     number      Lab number shown on the badge (0, 1, 2 ...). Leave out for
                 in-class demos.
     title       Name shown on the card.
     type        "lab" (default) or "demo" (in-class demo / game).
     folder      Folder that holds the experiment. The card links to
                 <folder>/index.html. Must match the folder name exactly.
     cover       Path to the cover image, e.g. "covers/lab5.jpg".
     tags        ["Tag one", "Tag two"]. Just type a new tag here and it
                 shows up in the filter bar automatically. Spelling and
                 capitals must match for two labs to share a tag.
     duration    e.g. "15 min".
     summary     One or two neutral sentences for the card. Students read
                 this BEFORE taking part, so don't give away the hypothesis.
     about       Longer explanation shown inside the collapsed
                 "About this experiment" panel on the details page.
                 One string, or a list of strings for several paragraphs.
     references  [{ cite: "APA citation", doi: "10.xxxx/xxxx" }, ...]
                 doi is optional; use url: "https://..." instead if there is
                 no DOI. Wrap a journal or book title in *asterisks* to show
                 it in italics.
     chapter     Textbook chapter, e.g. "Goldstein, Ch. 8".
     analysis    Link to the data-analysis page. Leave "" to show
                 "Data analysis: coming soon". Either one address:
                     analysis: "https://example.com/lab5.html"
                 or several:
                     analysis: [
                       { label: "Section A", url: "https://..." },
                       { label: "Section B", url: "https://..." }
                     ]
     debug       true if the lab supports the fast ?debug=1 test run.
                 Only shown in the instructor view (index.html?instructor=1).
     conditions  ["conditions.csv"] — conditions files inside the lab
                 folder. Only shown in the instructor view.

   PUNCTUATION REMINDERS
     - Every block ends with a comma:  { ... },
     - Every line inside a block ends with a comma.
     - Text goes in "double quotes". To use a double quote inside the text,
       write \"  (or just use 'single quotes' inside).
   If something is mistyped, the page shows a message saying what to fix.
   ========================================================================== */

window.SITE = {
  title: "Cognitive Psychology Labs",
  subtitle: "PSY 221 A/B · Interactive experiments and in-class demonstrations",
  footer: "Wake Forest University · Department of Psychology"
};

window.LABS = [

  {
    id: "donders",
    number: 0,
    title: "Donders' Reaction Time Task",
    type: "lab",
    folder: "LabDemo_DonderRTT",
    cover: "covers/donders.jpg",
    tags: ["Reaction time"],
    summary: "Three short reaction-time tasks: respond as fast as you can to a coloured target.",
    about: [
      "You complete a simple reaction-time task (A), a choice reaction-time task (B) and a go/no-go task (C).",
      "Donders' subtractive method estimates how long a mental stage takes by subtracting the reaction time of a task that lacks the stage from one that includes it: C − A estimates stimulus discrimination, and B − C estimates response selection."
    ],
    references: [
      { cite: "Donders, F. C. (1969). On the speed of mental processes. *Acta Psychologica, 30*, 412–431. (Original work published 1868)",
        doi: "10.1016/0001-6918(69)90065-1" }
    ],
    chapter: "Goldstein, Ch. 1",
    analysis: "",
    conditions: ["conditions_B.xlsx", "conditions_C.xlsx"]
  },

  {
    id: "lab1",
    number: 1,
    title: "Feature Search Task",
    type: "lab",
    folder: "Lab1_FeatureSearch",
    cover: "covers/lab1.jpg",
    tags: ["Attention", "Perception"],
    summary: "Look for a red circle among coloured shapes and report whether it is there.",
    about: [
      "The displays differ in how the target is defined (by a single feature, or by a conjunction of colour and shape) and in how many items they contain.",
      "Feature-integration theory predicts that a single-feature target 'pops out', so search time barely changes with the number of items, while a conjunction target needs focused attention, so search time grows with every item added."
    ],
    references: [
      { cite: "Treisman, A. M., & Gelade, G. (1980). A feature-integration theory of attention. *Cognitive Psychology, 12*(1), 97–136.",
        doi: "10.1016/0010-0285(80)90005-5" }
    ],
    chapter: "Goldstein, Ch. 4",
    analysis: "",
    conditions: ["conditions.csv"]
  },

  {
    id: "lab2",
    number: 2,
    title: "Stroop Effect",
    type: "lab",
    folder: "Lab2_StroopEffect",
    cover: "covers/lab2.jpg",
    tags: ["Attention", "Reaction time"],
    summary: "Name the ink colour of each word as quickly and accurately as you can.",
    about: [
      "On congruent trials the word and its ink colour match (RED in red); on incongruent trials they conflict (RED in green).",
      "Reading is so practised that it runs automatically and interferes with naming the ink colour, so incongruent trials are slower and more error-prone. The size of that slowdown is the Stroop effect."
    ],
    references: [
      { cite: "Stroop, J. R. (1935). Studies of interference in serial verbal reactions. *Journal of Experimental Psychology, 18*(6), 643–662.",
        doi: "10.1037/h0054651" }
    ],
    chapter: "Goldstein, Ch. 4",
    analysis: ""
  },

  {
    id: "lab3",
    number: 3,
    title: "Spatial Span and N-Back",
    type: "lab",
    folder: "Lab3_SpatialSpan_and_NBack",
    cover: "covers/lab3.jpg",
    tags: ["Working memory"],
    summary: "Watch blocks light up and reproduce the sequence, then keep track of positions in a running stream.",
    about: [
      "The Corsi block-tapping task measures visuospatial span: the longest sequence of locations you can reproduce, in the same order (forward) and in reverse order (backward).",
      "The spatial n-back task asks whether the current location matches the one shown n steps earlier, which requires continuously updating what is held in working memory. Comparing the tasks separates simple storage from storage plus manipulation."
    ],
    references: [
      { cite: "Corsi, P. M. (1972). *Human memory and the medial temporal region of the brain* [Doctoral dissertation, McGill University]." },
      { cite: "Kirchner, W. K. (1958). Age differences in short-term retention of rapidly changing information. *Journal of Experimental Psychology, 55*(4), 352–358.",
        doi: "10.1037/h0043688" }
    ],
    chapter: "Goldstein, Ch. 5",
    analysis: "",
    conditions: ["corsi_conditions.csv", "nback_block_conditions.csv", "spatial_nback_conds.csv"]
  },

  {
    id: "lab4",
    number: 4,
    title: "Generation Effect",
    type: "lab",
    folder: "Lab4_GenerationRecall",
    cover: "covers/lab4.jpg",
    tags: ["Long-term memory", "Encoding"],
    summary: "Study word pairs, solve some math problems, then take a memory test.",
    about: [
      "Some pairs are simply read (FAST – SLOW) and others must be completed from a fragment (FAST – S___). After a two-minute math distractor, you recall the target word from a cue.",
      "The generation effect is better memory for words you produced yourself than for words you only read. The test also uses either the original cue or a new cue with a similar meaning, which shows how much recall depends on the match between study and test (encoding specificity)."
    ],
    references: [
      { cite: "Slamecka, N. J., & Graf, P. (1978). The generation effect: Delineation of a phenomenon. *Journal of Experimental Psychology: Human Learning and Memory, 4*(6), 592–604.",
        doi: "10.1037/0278-7393.4.6.592" },
      { cite: "Tulving, E., & Thomson, D. M. (1973). Encoding specificity and retrieval processes in episodic memory. *Psychological Review, 80*(5), 352–373.",
        doi: "10.1037/h0020071" }
    ],
    chapter: "Goldstein, Ch. 7",
    analysis: "",
    debug: true,
    conditions: ["conditions.csv"]
  },

  {
    id: "lab5",
    number: 5,
    title: "DRM False Memory",
    type: "lab",
    folder: "Lab5_DRMFalseMemory",
    cover: "covers/lab5.jpg",
    tags: ["Long-term memory", "False memory"],
    summary: "Study lists of words, play a short game, then take a recognition test.",
    about: [
      "Each study list is built around a related word that is never shown (for example bed, rest, awake ... for the missing word sleep). After a 2.5-minute Tetris break, you judge test words as old or new and rate your confidence.",
      "In the Deese–Roediger–McDermott paradigm, people 'recognise' the missing critical word about as often as words they really studied, and often with high confidence. It shows that memory is constructed from meaning rather than replayed like a recording."
    ],
    references: [
      { cite: "Roediger, H. L., & McDermott, K. B. (1995). Creating false memories: Remembering words not presented in lists. *Journal of Experimental Psychology: Learning, Memory, and Cognition, 21*(4), 803–814.",
        doi: "10.1037/0278-7393.21.4.803" },
      { cite: "Deese, J. (1959). On the prediction of occurrence of particular verbal intrusions in immediate recall. *Journal of Experimental Psychology, 58*(1), 17–22.",
        doi: "10.1037/h0046671" }
    ],
    chapter: "Goldstein, Ch. 8",
    analysis: "",
    debug: true,
    conditions: ["study_list.csv", "test_conditions.csv"]
  },

  {
    id: "lab6",
    number: 6,
    title: "Dot Pattern Category",
    type: "lab",
    folder: "Lab6_DotPatternCategory",
    cover: "covers/lab6.jpg",
    tags: ["Categorization", "Perception"],
    duration: "10 min",
    summary: "Learn to sort dot patterns ('star clusters') into two categories, then classify new ones.",
    about: [
      "Every training pattern is a distortion of one of two prototype patterns, but the prototypes themselves are never shown during training. The test mixes old patterns, the unseen prototypes, new distortions and random patterns.",
      "Posner and Keele found that people classify the never-seen prototype about as well as the patterns they trained on, and better than new distortions, as if they had abstracted an average of each category."
    ],
    references: [
      { cite: "Posner, M. I., & Keele, S. W. (1968). On the genesis of abstract ideas. *Journal of Experimental Psychology, 77*(3, Pt. 1), 353–363.",
        doi: "10.1037/h0025953" }
    ],
    chapter: "Goldstein, Ch. 9",
    analysis: "",
    debug: true,
    conditions: ["training_conditions.csv", "test_conditions.csv"]
  },

  {
    id: "lab7",
    number: 7,
    title: "Visual Imagery",
    type: "lab",
    folder: "Lab7_VisualImagery",
    cover: "covers/lab7.jpg",
    tags: ["Visual imagery", "Language"],
    duration: "20 min",
    summary: "Read short sentences about physical scenes, picture each one, and adjust an on-screen picture to match your mental image.",
    about: [
      "The sentences describe a thrown object, something dropping into water, or a light casting a shadow, and vary details such as how hard the throw was. Separate parts measure your reading speed, how fast you can operate the controls, and how vivid each image felt.",
      "If understanding language involves building a mental image of the scene, the details in each sentence should show up in the picture you produce. The reading and motor baselines let the time spent on the imagery itself be estimated."
    ],
    references: [
      { cite: "Stanfield, R. A., & Zwaan, R. A. (2001). The effect of implied orientation derived from verbal context on picture recognition. *Psychological Science, 12*(2), 153–156.",
        doi: "10.1111/1467-9280.00326" },
      { cite: "Kosslyn, S. M., Ball, T. M., & Reiser, B. J. (1978). Visual images preserve metric spatial information: Evidence from studies of image scanning. *Journal of Experimental Psychology: Human Perception and Performance, 4*(1), 47–60.",
        doi: "10.1037/0096-1523.4.1.47" }
    ],
    chapter: "Goldstein, Ch. 10",
    analysis: "",
    debug: true,
    conditions: ["block_conditions.csv", "reading_conditions.csv", "imagery_conditions.csv", "motor_conditions.csv"]
  },

  {
    id: "lab8",
    number: 8,
    title: "Remote Associates Test",
    type: "lab",
    folder: "Lab8_RemoteAssociatesTest",
    cover: "covers/lab8.jpg",
    tags: ["Problem solving", "Insight"],
    summary: "Find the one word that goes with all three words on the screen. 18 puzzles, 30 seconds each.",
    about: [
      "Each puzzle is a compound remote associate problem: CREAM, SKATE, WATER are all linked by ICE. After each solved puzzle you report whether the answer came by insight (a sudden 'Aha!'), by step-by-step analysis, or by a guess.",
      "The puzzles vary in difficulty, so the data show how solution rate, solution time and the feeling of insight change from easy to hard problems."
    ],
    references: [
      { cite: "Mednick, S. A. (1962). The associative basis of the creative process. *Psychological Review, 69*(3), 220–232.",
        doi: "10.1037/h0048850" },
      { cite: "Bowden, E. M., & Jung-Beeman, M. (2003). Normative data for 144 compound remote associate problems. *Behavior Research Methods, Instruments, & Computers, 35*(4), 634–639.",
        doi: "10.3758/BF03195543" }
    ],
    chapter: "Goldstein, Ch. 12",
    analysis: "",
    debug: true,
    conditions: ["conditions.csv"]
  },

  /* ---------- In-class demos and games (no lab number) ---------- */

  {
    id: "defuse-the-bomb",
    title: "Defuse the Bomb",
    type: "demo",
    folder: "Defuse_the_Bomb",
    cover: "covers/defuse-the-bomb.jpg",
    tags: ["Language"],
    summary: "A two-person game: one player sees the bomb, the other sees only the manual. You have to talk to defuse it.",
    about: [
      "Neither player can solve the puzzle alone, so everything depends on describing unfamiliar things (odd symbols, wire orders) clearly enough for a partner who cannot see them.",
      "Watch how pairs quickly invent shared names for the symbols and shorten them over time. This is the building of common ground that makes conversation efficient."
    ],
    references: [
      { cite: "Clark, H. H., & Wilkes-Gibbs, D. (1986). Referring as a collaborative process. *Cognition, 22*(1), 1–39.",
        doi: "10.1016/0010-0277(86)90010-7" }
    ],
    chapter: "Goldstein, Ch. 11",
    analysis: ""
  },

  {
    id: "push-the-box",
    title: "Push the Box",
    type: "demo",
    folder: "Push_the_Box",
    cover: "covers/push-the-box.jpg",
    tags: ["Problem solving"],
    summary: "Push the gold box onto the green flag in three levels. You can push boxes but never pull them.",
    about: [
      "The game shows the current distance to the goal and the fewest moves possible, so you can see means-end analysis at work: find the difference between where you are and where you want to be, then pick a move that shrinks it.",
      "The later levels cannot be solved by always moving closer to the goal. You have to set subgoals and sometimes move away first."
    ],
    references: [
      { cite: "Newell, A., & Simon, H. A. (1972). *Human problem solving*. Prentice-Hall." }
    ],
    chapter: "Goldstein, Ch. 12",
    analysis: ""
  }

];
