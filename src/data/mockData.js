export const initialChildren = [
  {
    id: 'c1',
    name: 'Aarav Sharma',
    age: '3 Years 6 Months',
    avatar: '👦',
    gender: 'Boy',
    dob: 'May 12, 2023',
    currentStage: 'Preschool Explorer',
    overallProgress: 78,
    lastScreeningDate: 'Oct 24, 2026',
    screeningStatus: 'On Track - Mild Speech Focus',
    iepGoals: [
      { id: 'g1', title: 'Express 4-word sentences clearly', progress: 80 },
      { id: 'g2', title: 'Hold safety scissors with steady grip', progress: 65 },
      { id: 'g3', title: 'Participate in group circle time for 10 min', progress: 90 },
    ],
  },
  {
    id: 'c2',
    name: 'Diya Sharma',
    age: '1 Year 8 Months',
    avatar: '👧',
    gender: 'Girl',
    dob: 'March 04, 2025',
    currentStage: 'Toddler Stepper',
    overallProgress: 88,
    lastScreeningDate: 'Nov 02, 2026',
    screeningStatus: 'Exceptional Milestone Progress',
    iepGoals: [
      { id: 'g4', title: 'Walk backward independently', progress: 95 },
      { id: 'g5', title: 'Imitate simple word sounds', progress: 85 },
    ],
  }
];

export const classroomStudents = [
  { id: 's1', name: 'Aarav Sharma', age: '3y 6m', avatar: '👦', status: 'Focus Needed (Speech)', score: 78, attendance: '96%' },
  { id: 's2', name: 'Meera Patel', age: '3y 8m', avatar: '👧', status: 'On Track', score: 92, attendance: '98%' },
  { id: 's3', name: 'Kabir Verma', age: '3y 5m', avatar: '👦', status: 'Needs Motor Support', score: 68, attendance: '91%' },
  { id: 's4', name: 'Anvi Joshi', age: '3y 7m', avatar: '👧', status: 'On Track', score: 89, attendance: '95%' },
  { id: 's5', name: 'Rohan Gupta', age: '3y 4m', avatar: '👦', status: 'Sensory Observation', score: 74, attendance: '88%' },
  { id: 's6', name: 'Zara Khan', age: '3y 9m', avatar: '👧', status: 'On Track', score: 95, attendance: '99%' },
];

export const activitiesData = [
  {
    id: 'act-1',
    title: 'Rainbow Rice Sensory Bin',
    category: 'Sensory & Motor',
    domain: 'Fine Motor',
    duration: '15-20 min',
    ageGroup: '2-5 Years',
    difficulty: 'Easy',
    materials: ['Colored dry rice', 'Small spoons', 'Bowls', 'Hidden plastic toys'],
    description: 'Engage tactile senses while developing the pincer grasp through scooping, sorting, and finding hidden treasures.',
    instructions: [
      'Fill a shallow tub with dyed grains of rice or pulses.',
      'Hide 5-6 small identifiable toys or buttons inside.',
      'Ask the child to search using fingers only and sort into cups.',
      'Encourage naming colors and textures while exploring.'
    ],
    benefits: ['Enhances tactile sensory processing', 'Strengthens finger grip for pencil control', 'Encourages focus and patience'],
    completed: true,
  },
  {
    id: 'act-2',
    title: 'Sound Safari - Listening Walk',
    category: 'Speech & Language',
    domain: 'Communication',
    duration: '15 min',
    ageGroup: '3-6 Years',
    difficulty: 'Easy',
    materials: ['Observation notebook', 'Magnifying glass (optional)'],
    description: 'A quiet mindful walk indoors or in the balcony to identify, mimic, and describe ambient sounds.',
    instructions: [
      'Take a stroll around the room or balcony in quiet mode.',
      'Listen for 3 distinct sounds (bird chirp, fan hum, vehicle horn).',
      'Ask child to describe: Is it loud or soft? High or low?',
      'Create funny syllables imitating each sound together.'
    ],
    benefits: ['Auditory discrimination', 'Vocabulary expansion', 'Attention span development'],
    completed: false,
  },
  {
    id: 'act-3',
    title: 'Emotion Mirror Match',
    category: 'Social-Emotional',
    domain: 'Personal-Social',
    duration: '10 min',
    ageGroup: '2-6 Years',
    difficulty: 'Medium',
    materials: ['Hand mirror', 'Emotion emoji flashcards'],
    description: 'Help children recognize facial cues and express happy, surprised, calm, and upset feelings safely.',
    instructions: [
      'Hold a mirror together and make a huge happy smile.',
      'Switch to a gentle surprised face (wide eyes, rounded mouth).',
      'Discuss: What makes Aarav feel joyful? What helps when angry?',
      'Practice deep belly breathing (smell the flower, blow the candle).'
    ],
    benefits: ['Emotional self-regulation', 'Empathy building', 'Facial muscle control'],
    completed: false,
  },
  {
    id: 'act-4',
    title: 'Pencil Pinch Clothespin Challenge',
    category: 'Fine Motor',
    domain: 'Fine Motor',
    duration: '12 min',
    ageGroup: '3-5 Years',
    difficulty: 'Easy',
    materials: ['Wooden clothespins', 'Paper plates with color dots'],
    description: 'Squeeze clothespins with thumb and pointer finger to match corresponding colored wedges on a paper plate.',
    instructions: [
      'Draw color patches around a circular paper plate.',
      'Color-code 6 clothespins to match.',
      'Have the child press the clip to pinch onto matching color spots.',
      'Count aloud as each clip attaches successfully.'
    ],
    benefits: ['Finger muscle tone', 'Bilateral coordination', 'Color matching precision'],
    completed: true,
  },
  {
    id: 'act-5',
    title: 'Obstacle Island Hop',
    category: 'Gross Motor',
    domain: 'Gross Motor',
    duration: '20 min',
    ageGroup: '3-6 Years',
    difficulty: 'Medium',
    materials: ['Cushions', 'Floor tape / mats', 'Stuffed animals'],
    description: 'Dynamic indoor balance path that tests spatial awareness, hopping, and coordination.',
    instructions: [
      'Place cushions on the floor as "islands" surrounded by a safe "ocean".',
      'Demonstrate stepping or hopping from cushion to cushion without touching the floor.',
      'Incorporate a carry-and-place mission with stuffed animals.',
      'Praise balance recovery and effort.'
    ],
    benefits: ['Vestibular system stimulation', 'Core strength', 'Spatial coordination'],
    completed: false,
  },
  {
    id: 'act-6',
    title: 'Pattern Block Story Builder',
    category: 'Cognitive',
    domain: 'Problem Solving',
    duration: '15 min',
    ageGroup: '3-6 Years',
    difficulty: 'Medium',
    materials: ['Colored wooden or paper blocks', 'Pattern cards'],
    description: 'Create sequences (Red-Blue-Red-Blue) and shape designs that spark logical reasoning.',
    instructions: [
      'Lay out a sequence of 3 blocks (e.g. circle, square, circle).',
      'Ask the child: What comes next?',
      'Build a simple house or car together using geometric shapes.',
      'Discuss how many triangles make a rectangle.'
    ],
    benefits: ['Mathematical pre-readiness', 'Pattern recognition', 'Logical sequencing'],
    completed: false,
  }
];

export const screeningQuestions = [
  {
    id: 'q1',
    domain: 'Communication',
    icon: 'MessageSquare',
    question: 'Does your child use 3 or 4 word sentences that strangers can understand at least 75% of the time?',
    clarification: 'Example: "I want water please" or "Papa went to market".',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q2',
    domain: 'Communication',
    icon: 'HelpCircle',
    question: 'Does your child ask "What", "Where", or "Why" questions when curious?',
    clarification: 'Child seeks explanations and points to unfamiliar objects.',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q3',
    domain: 'Gross Motor',
    icon: 'Activity',
    question: 'Can the child jump forward with both feet leaving the ground together without falling?',
    clarification: 'A standard 2-foot hop landing stably.',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q4',
    domain: 'Gross Motor',
    icon: 'Navigation',
    question: 'Can your child walk up and down stairs alternating feet (one foot per step) while holding the rail?',
    clarification: 'Not placing both feet on every single step.',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q5',
    domain: 'Fine Motor',
    icon: 'Feather',
    question: 'Can your child copy a straight vertical line or a circle when you draw one first?',
    clarification: 'Hold crayon or marker with thumb and fingers (not a closed fist).',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q6',
    domain: 'Fine Motor',
    icon: 'Scissors',
    question: 'Can your child thread at least 3 large beads or pasta pieces onto a thick string or shoelace?',
    clarification: 'Demonstrates hand-eye precision and bilateral hand use.',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q7',
    domain: 'Problem Solving',
    icon: 'Cpu',
    question: 'Can your child sort objects by either color or shape (e.g. putting all red blocks together)?',
    clarification: 'Understands basic categorical difference without constant reminders.',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q8',
    domain: 'Personal-Social',
    icon: 'Users',
    question: 'Does your child take turns during simple games and show interest in playing alongside other children?',
    clarification: 'Cooperative play or parallel play with sharing intent.',
    milestoneAge: '36-42 months'
  },
  {
    id: 'q9',
    domain: 'Personal-Social',
    icon: 'Smile',
    question: 'Can your child wash and dry their own hands with minimal assistance?',
    clarification: 'Turns on tap, rubs soap, rinses, and wipes with a towel.',
    milestoneAge: '36-42 months'
  }
];

export const developmentalDomains = [
  { name: 'Communication', score: 74, status: 'Mild Attention', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  { name: 'Gross Motor', score: 86, status: 'On Track', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  { name: 'Fine Motor', score: 70, status: 'Developing', color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  { name: 'Problem Solving', score: 92, status: 'Advanced', color: 'from-purple-500 to-violet-500', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  { name: 'Personal-Social', score: 80, status: 'On Track', color: 'from-rose-500 to-pink-500', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
];

export const resourcesData = [
  {
    id: 'res-1',
    category: 'Government & Rights',
    title: 'RBSK Early Intervention Guide (Rashtriya Bal Swasthya Karyakram)',
    readTime: '6 min read',
    type: 'Guide',
    badge: 'Govt Scheme',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    description: 'Comprehensive overview of free developmental screenings, District Early Intervention Centres (DEIC), and healthcare support across India.',
    linkText: 'Read Guidelines',
    tags: ['DEIC', 'Govt Schemes', 'Free Screening', 'Healthcare']
  },
  {
    id: 'res-2',
    category: 'Parenting Guide',
    title: 'Promoting Speech Milestones at Home: A Step-by-Step Playbook',
    readTime: '8 min read',
    type: 'Toolkit',
    badge: 'Popular',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    description: 'Simple linguistic techniques: Expansion, Self-Talk, Parallel Talk, and Pausing to encourage toddler vocabulary naturally.',
    linkText: 'Explore Exercises',
    tags: ['Speech Therapy', 'Home Play', 'Vocabulary', 'Ages 2-5']
  },
  {
    id: 'res-3',
    category: 'Educator Toolkit',
    title: 'Inclusive Classroom Checklist for Preschool Teachers',
    readTime: '5 min read',
    type: 'Checklist',
    badge: 'For Teachers',
    badgeColor: 'bg-purple-100 text-purple-800',
    description: 'Sensory-friendly corner setup, visual timetables, transition cues, and differentiated circle time activities for diverse learners.',
    linkText: 'Download Checklist',
    tags: ['Inclusion', 'Preschool', 'Classroom Management', 'IEP']
  },
  {
    id: 'res-4',
    category: 'Sensory Support',
    title: 'Understanding Sensory Processing: Sensitivities vs Sensation Seeking',
    readTime: '10 min read',
    type: 'Medical Reference',
    badge: 'Pediatric Advice',
    badgeColor: 'bg-amber-100 text-amber-800',
    description: 'How auditory, tactile, and vestibular differences manifest in young children and how to co-regulate with empathy.',
    linkText: 'View Guide',
    tags: ['Sensory Integration', 'Calming Strategies', 'Occupational Therapy']
  },
  {
    id: 'res-5',
    category: 'Directory',
    title: 'National & State Early Childhood Helpline Directory',
    readTime: 'Directory',
    type: 'Emergency & Directory',
    badge: 'Support',
    badgeColor: 'bg-rose-100 text-rose-800',
    description: 'Verified helpline numbers, child guidance clinics, and registered rehabilitation professionals (RCI accredited).',
    linkText: 'Browse Directory',
    tags: ['Helplines', 'RCI Professionals', 'Tele-Consultation']
  }
];
