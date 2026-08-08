/*
  NOBODY CREATIVE — PROJECT DATA
  --------------------------------
  This is the only file you should need to touch for routine project updates.

  To add a project:
  1. Duplicate one object below.
  2. Give it a unique caseNumber.
  3. Choose one or more categories: game, app, tool, experiment.
  4. Pick a visual key that already exists in script.js/CSS, or add a new visual renderer later.
  5. Add a url when the project is ready to click through.

  featured: true makes the card span two columns on desktop.
*/

window.NOBODY_PROJECTS = [
  {
    caseNumber: '001',
    caseType: 'GAME',
    title: 'Plot Twisted',
    displayTitle: 'PLOT<br>TWISTED',
    categories: ['game'],
    meta: 'Movie guessing game',
    status: 'Launching next',
    statusClass: 'status-orange',
    description: 'Terrible movie descriptions. Suspicious VHS tapes. One job: figure out what the hell the movie is.',
    tags: 'WEB GAME / MOBILE-FRIENDLY',
    visual: 'plot',
    featured: true,
    url: 'https://plot-twisted.netlify.app'
  },
  {
    caseNumber: '002',
    caseType: 'APP',
    title: 'MOVED',
    displayTitle: 'MOVED',
    categories: ['app'],
    meta: 'Fitness tracker',
    status: 'Beta prep',
    statusClass: '',
    description: 'A fitness tracker built around showing up, doing the work, and making progress visible without turning your life into a spreadsheet.',
    tags: 'PRODUCT / FITNESS',
    visual: 'moved',
    featured: false,
    url: ''
  },
  {
    caseNumber: '003',
    caseType: 'APP',
    title: 'Steady',
    displayTitle: 'STEADY',
    categories: ['app'],
    meta: 'Life organizer',
    status: 'Optimization',
    statusClass: '',
    description: 'Daily structure without the productivity guilt trip. Tasks, routines, planning, and the boring stuff made pleasantly usable.',
    tags: 'PRODUCTIVITY / LIFE',
    visual: 'steady',
    featured: false,
    url: 'https://steady-app.netlify.app'
  },
  {
    caseNumber: '004',
    caseType: 'TOOL',
    title: 'PostIQ',
    displayTitle: 'POSTIQ',
    categories: ['tool'],
    meta: 'Buffer companion',
    status: 'Live',
    statusClass: 'status-live',
    description: 'A social publishing sidekick for writing, splitting, repurposing, planning, and getting posts out of your head and into the world.',
    tags: 'OPEN BUILD',
    visual: 'postiq',
    featured: false,
    url: 'https://postiq.netlify.app/'
  },
  {
    caseNumber: '005',
    caseType: 'TOOL',
    title: 'Stamp',
    displayTitle: 'STAMP',
    categories: ['tool'],
    meta: 'Approval workflow',
    status: 'Beta',
    statusClass: '',
    description: 'A lightweight client approval companion for social drafts, comments, magic links, and fewer “just circling back” emails.',
    tags: 'SOCIAL / WORKFLOW',
    visual: 'stamp',
    featured: false,
    url: ''
  },
  {
    caseNumber: '006',
    caseType: 'GAME',
    title: 'Whiteout',
    displayTitle: 'WHITEOUT',
    categories: ['game'],
    meta: 'Snowboard trick-run',
    status: 'In build',
    statusClass: '',
    description: 'A fast, one-more-run snowboard game with rails, tricks, ridiculous combos, and absolutely no respect for your lunch break.',
    tags: 'ARCADE / MOBILE',
    visual: 'whiteout',
    featured: false,
    url: ''
  },
  {
    caseNumber: '007',
    caseType: 'EXPERIMENT',
    title: 'Breathlings',
    displayTitle: 'BREATHLINGS',
    categories: ['experiment'],
    meta: 'Calm-down missions',
    status: 'New idea',
    statusClass: 'status-new',
    description: 'Thirty-second animated breathing adventures for little kids. Dragons, whales, astronauts, and a tiny bit less chaos before bedtime.',
    tags: 'KIDS / WELLNESS',
    visual: 'breath',
    featured: false,
    url: ''
  },
  {
    caseNumber: '008',
    caseType: 'HUB',
    title: 'Nobody Arcade',
    displayTitle: 'NOBODY<br>ARCADE',
    categories: ['game', 'experiment'],
    meta: 'Game hub',
    status: 'After Plot Twisted',
    statusClass: '',
    description: 'The eventual home for every tiny browser game that gets built instead of sleeping at a reasonable hour.',
    tags: 'HUB / GAME LAB',
    visual: 'arcade',
    featured: false,
    url: ''
  }
];
