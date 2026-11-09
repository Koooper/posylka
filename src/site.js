// Each entry has a matching HTML file in src/pages. Order also sets the reading path.
export const pages = [
  {
    path: '/', label: 'Home', title: 'Posylka: follow a parcel through Ukraine at war',
    description: 'An educational introduction to Nova Post for American college students. Follow fictional parcels, meet the people behind them, and explore wartime logistics.',
  },
  {
    path: '/track/', label: 'Track a parcel', title: 'Track a parcel · Posylka', module: 'track',
    description: 'Choose one of five fictional parcels and follow its journey through Nova Post’s wartime network, from the customer’s and staff’s points of view.',
  },
  {
    path: '/people/', label: 'The people', title: 'The people behind the parcels · Posylka', module: 'people',
    description: 'Spend a day with the teams who keep Nova Post running, from contact centre operators to cybersecurity and compensation specialists.',
  },
  {
    path: '/questions/', label: 'Big questions', title: 'Four big questions · Posylka', module: 'questions',
    description: 'Explore four research questions about Nova Post, with dated evidence, reporting, and references linked to the claims they support.',
  },
  {
    path: '/network/', label: 'The network', title: 'Inside the network · Posylka', module: 'network',
    description: 'Explore Nova Post’s international expansion, digital infrastructure, cybersecurity, wartime innovations, and the numbers behind them.',
  },
  {
    path: '/language/', label: 'Language', title: 'Ukrainian language corner · Posylka', module: 'language',
    description: 'Learn Ukrainian through short lessons: vocabulary, branch conversations, grammar patterns, reading practice, and a searchable reference.',
  },
  {
    path:'/language/words/', parent:'/language/', label:'Words & updates', title:'Words and tracking updates · Posylka', module:'language',
    description:'Learn twelve useful parcel words, review examples, and practice reading four tracking updates.',
  },
  {
    path:'/language/conversation/', parent:'/language/', label:'At the branch', title:'At the branch · Posylka', module:'language',
    description:'Practice sending, collecting, and asking for clarification through three short Ukrainian conversations.',
  },
  {
    path:'/language/grammar/', parent:'/language/', label:'Patterns & cases', title:'Patterns and cases · Posylka', module:'language',
    description:'Connect meaning to Ukrainian case endings, use a seven-case reference, and practice the forms of Nova Post.',
  },
  {
    path:'/language/reading/', parent:'/language/', label:'Read & understand', title:'Read and understand · Posylka', module:'language',
    description:'Read three short Ukrainian texts with English help, answer comprehension questions, and revisit the parcel stories.',
  },
  {
    path:'/language/reference/', parent:'/language/', label:'Language reference', title:'Language reference · Posylka', module:'language',
    description:'Search Ukrainian vocabulary with English meanings, check stress marks, and explore names in two alphabets.',
  },
  {
    path: '/sources/', label: 'Sources', title: 'Sources and further reading · Posylka',
    description: 'Browse the reporting and company statements behind Posylka, grouped by topic, with international features as a starting point.',
  },
];
