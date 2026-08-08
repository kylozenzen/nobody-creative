/*
  NOBODY CREATIVE — PROJECT DATA
  --------------------------------
  This is the only file you should need to touch for routine project updates.

  To add a project:
  1. Duplicate one object below.
  2. Give it a unique caseNumber.
  3. Choose one or more categories: game, app, tool, experiment.
  4. Pick a visual key that already exists in script.js/CSS, or add a new visual renderer later.
  5. Add a url when the project is live, plus repoUrl when the source is public.
  6. Add productTags for what the thing is and stack for how it was built.
  7. actionLabel controls the primary CTA for live projects.

  featured: true makes the card span two columns on desktop.
  hidden: true keeps the project data/code available without rendering a card.
*/

window.NOBODY_PROJECTS = [
  {
    caseNumber: '001',
    caseType: 'GAME',
    title: 'Plot Twisted',
    displayTitle: 'PLOT<br>TWISTED',
    categories: ['game'],
    meta: 'Movie guessing game',
    status: 'Live',
    statusClass: 'status-live',
    description: 'Terrible movie descriptions. Suspicious VHS tapes. One job: figure out what the hell the movie is.',
    productTags: ['TRIVIA', 'WEB GAME', 'MOBILE-FRIENDLY'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    visual: 'plot',
    featured: true,
    actionLabel: 'PLAY',
    url: 'https://plot-twisted.netlify.app',
    repoUrl: 'https://github.com/kylozenzen/plot-twisted-2026'
  },
  {
    caseNumber: '002',
    caseType: 'APP',
    title: 'MOVED',
    displayTitle: 'MOVED',
    categories: ['app'],
    meta: 'Fitness tracker',
    status: 'Live',
    statusClass: 'status-live',
    description: 'A fitness tracker built around showing up, doing the work, and making progress visible without turning your life into a spreadsheet.',
    productTags: ['FITNESS', 'LOCAL-FIRST', 'NO ACCOUNT'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    visual: 'moved',
    featured: false,
    actionLabel: 'OPEN APP',
    url: 'https://moved-app.netlify.app',
    repoUrl: 'https://github.com/kylozenzen/power-rangers-move'
  },
  {
    caseNumber: '003',
    caseType: 'APP',
    title: 'Steady',
    displayTitle: 'STEADY',
    categories: ['app'],
    meta: 'Life organizer',
    status: 'Live',
    statusClass: 'status-live',
    description: 'Food journal without the chaos. Fast food substitutes because real life happens. Track important macros with ease - like protien, calories, and water intake.',
    productTags: ['LIFE ORGANIZER', 'PRODUCTIVITY', 'PWA'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    visual: 'steady',
    featured: false,
    actionLabel: 'OPEN APP',
    url: 'https://steady-app.netlify.app',
    repoUrl: 'https://github.com/kylozenzen/steady-as-she-goes'
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
    productTags: ['SOCIAL MEDIA', 'BUFFER COMPANION', 'CREATOR TOOL'],
    stack: ['JavaScript', 'Buffer API', 'Netlify Functions', 'Upstash'],
    visual: 'postiq',
    featured: false,
    actionLabel: 'OPEN POSTIQ',
    url: 'https://postiq.netlify.app/',
    repoUrl: 'https://github.com/kylozenzen/post-iq'
  },
  {
    caseNumber: '005',
    caseType: 'HUB',
    title: 'Nobody Arcade',
    displayTitle: 'NOBODY<br>ARCADE',
    categories: ['game', 'experiment'],
    meta: 'Game hub',
    status: 'Coming soon',
    statusClass: 'status-orange',
    description: 'The home for every tiny browser game that gets built instead of sleeping at a reasonable hour.',
    productTags: ['ARCADE', 'GAME HUB', 'MOBILE + DESKTOP'],
    stack: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    visual: 'arcade',
    featured: false,
    url: '',
    repoUrl: 'https://github.com/kylozenzen/nobodycreative-arcade'
  },

  // Hidden from the current five-project lineup. Keep these around for future rotation.
  {
    caseNumber: '006',
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
    hidden: true,
    url: ''
  },
  {
    caseNumber: '007',
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
    hidden: true,
    url: ''
  },
  {
    caseNumber: '008',
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
    hidden: true,
    url: ''
  }
];
