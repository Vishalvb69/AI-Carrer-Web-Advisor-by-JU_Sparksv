// Comprehensive exam data for Indian entrance exams
export const examsByStream = {
  engineering: [
    {
      id: 'jee-main',
      name: 'JEE Main',
      fullName: 'Joint Entrance Examination Main',
      description: 'National level entrance exam for admission to NITs, IIITs, and other centrally funded technical institutions',
      conductedBy: 'National Testing Agency (NTA)',
      frequency: 'Twice a year (February & April)',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '3 hours',
      totalQuestions: 90,
      maxMarks: 300,
      examMode: 'Computer Based Test (CBT)',
      eligibility: {
        age: 'No age limit',
        qualification: '12th with PCM with minimum 75% (65% for SC/ST)',
        attempts: 'No limit on attempts'
      },
      importantDates: {
        applicationStart: 'January',
        applicationEnd: 'March',
        examDates: 'February & April',
        resultDeclaration: 'Within 15 days of exam'
      },
      fees: {
        general: '₹650',
        scSt: '₹325',
        abroad: '$85'
      },
      seats: '1,50,000+ engineering seats',
      acceptingColleges: [
        'NITs (31)', 'IIITs (25)', 'CFTIs (100+)', 'State Engineering Colleges'
      ],
      counselingProcess: [
        'JoSAA Counseling for NITs/IIITs',
        'State-level counseling for state colleges',
        'Private college counseling'
      ],
      preparationTips: [
        'Strong foundation in NCERT concepts',
        'Regular practice of numerical problems',
        'Time management during exam',
        'Focus on Physics and Chemistry conceptual clarity'
      ]
    },
    {
      id: 'jee-advanced',
      name: 'JEE Advanced',
      fullName: 'Joint Entrance Examination Advanced',
      description: 'Second stage exam for admission to 23 IITs after qualifying JEE Main',
      conductedBy: 'IIT (Rotating basis)',
      frequency: 'Once a year (May)',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '6 hours (2 papers of 3 hours each)',
      totalQuestions: 'Variable (typically 54)',
      maxMarks: 372,
      examMode: 'Computer Based Test (CBT)',
      eligibility: {
        age: 'Maximum 25 years (30 for SC/ST)',
        qualification: 'Top 2.5 lakh JEE Main qualifiers',
        attempts: 'Maximum 2 attempts in consecutive years'
      },
      importantDates: {
        applicationStart: 'May',
        applicationEnd: 'May',
        examDates: 'May (Sunday)',
        resultDeclaration: 'June'
      },
      fees: {
        general: '₹2,800',
        scSt: '₹1,400',
        female: '₹1,400'
      },
      seats: '17,000+ seats across 23 IITs',
      acceptingColleges: [
        'IIT Delhi', 'IIT Bombay', 'IIT Madras', 'IIT Kanpur', 'IIT Kharagpur', '18 other IITs'
      ],
      counselingProcess: [
        'JoSAA Counseling',
        'Choice filling and locking',
        'Seat allocation in 6 rounds',
        'Document verification'
      ],
      preparationTips: [
        'Deep conceptual understanding required',
        'Practice previous year questions extensively',
        'Focus on problem-solving approach',
        'Strong analytical and logical thinking'
      ]
    }
  ],
  
  medical: [
    {
      id: 'neet-ug',
      name: 'NEET UG',
      fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
      description: 'National level entrance exam for admission to MBBS, BDS, AYUSH courses',
      conductedBy: 'National Testing Agency (NTA)',
      frequency: 'Once a year (May)',
      subjects: ['Physics', 'Chemistry', 'Biology (Botany & Zoology)'],
      duration: '3 hours 20 minutes',
      totalQuestions: 200,
      maxMarks: 720,
      examMode: 'Pen and Paper Mode (Offline)',
      eligibility: {
        age: 'Minimum 17 years, maximum 25 years (30 for SC/ST)',
        qualification: '12th with PCB with minimum 50% (40% for SC/ST/OBC)',
        attempts: 'No limit on attempts'
      },
      importantDates: {
        applicationStart: 'March',
        applicationEnd: 'April',
        examDates: 'First Sunday of May',
        resultDeclaration: 'Within 10 days of exam'
      },
      fees: {
        general: '₹1,700',
        scStObcPwd: '₹1,000'
      },
      seats: '90,000+ MBBS seats, 27,000+ BDS seats',
      acceptingColleges: [
        'AIIMS', 'Government Medical Colleges', 'Private Medical Colleges', 'Dental Colleges'
      ],
      counselingProcess: [
        'All India Quota (15% seats)',
        'State Quota (85% seats)',
        'Private/Deemed University counseling',
        'NRI/Management quota'
      ],
      preparationTips: [
        'NCERT is the bible for NEET preparation',
        'Biology carries maximum weightage (50%)',
        'Focus on accuracy over speed',
        'Regular revision and mock tests'
      ]
    }
  ],
  
  commerce: [
    {
      id: 'ca-foundation',
      name: 'CA Foundation',
      fullName: 'Chartered Accountancy Foundation',
      description: 'Entry level exam for CA course conducted by ICAI',
      conductedBy: 'Institute of Chartered Accountants of India (ICAI)',
      frequency: 'Twice a year (May & November)',
      subjects: [
        'Principles and Practice of Accounting',
        'Business Laws & Business Correspondence',
        'Business Mathematics and Logical Reasoning',
        'Business Economics and General English'
      ],
      duration: '12 hours (4 papers of 3 hours each)',
      totalQuestions: 'MCQ + Descriptive',
      maxMarks: 400,
      examMode: 'Computer Based Test (CBT)',
      eligibility: {
        age: 'No age limit',
        qualification: '12th pass from recognized board',
        attempts: 'No limit on attempts'
      },
      importantDates: {
        applicationStart: 'February/August',
        applicationEnd: 'March/September',
        examDates: 'May/November',
        resultDeclaration: 'Within 30 days'
      },
      fees: {
        registration: '₹9,500',
        examFees: '₹1,500 per paper'
      },
      passingCriteria: 'Minimum 40% in each paper and 50% aggregate',
      nextLevel: 'CA Intermediate',
      preparationTips: [
        'Strong foundation in accounting principles',
        'Regular practice of practical problems',
        'Focus on business laws and ethics',
        'Time management for MCQs'
      ]
    }
  ],
  
  general: [
    {
      id: 'cat',
      name: 'CAT',
      fullName: 'Common Admission Test',
      description: 'National level entrance exam for admission to IIMs and other top B-schools',
      conductedBy: 'IIMs (Rotating basis)',
      frequency: 'Once a year (November)',
      subjects: [
        'Verbal Ability & Reading Comprehension',
        'Data Interpretation & Logical Reasoning',
        'Quantitative Ability'
      ],
      duration: '2 hours (40 minutes per section)',
      totalQuestions: '66 (22 per section)',
      maxMarks: '198 (66 per section)',
      examMode: 'Computer Based Test (CBT)',
      eligibility: {
        age: 'No age limit',
        qualification: 'Graduate in any discipline with 50% (45% for SC/ST)',
        attempts: 'No limit on attempts'
      },
      importantDates: {
        applicationStart: 'August',
        applicationEnd: 'September',
        examDates: 'Last Sunday of November',
        resultDeclaration: 'January'
      },
      fees: {
        general: '₹2,300',
        scStPwd: '₹1,150'
      },
      seats: '5,000+ seats in IIMs',
      acceptingColleges: [
        '20 IIMs', 'FMS Delhi', 'XLRI', 'MDI Gurgaon', 'SPJIMR', '100+ other B-schools'
      ],
      counselingProcess: [
        'CAP Process (Common Admission Process)',
        'PI (Personal Interview)',
        'WAT (Written Ability Test)',
        'Final merit list preparation'
      ],
      preparationTips: [
        'Focus on time management',
        'Practice sectional tests regularly',
        'Strong foundation in quantitative aptitude',
        'Read extensively for verbal ability'
      ]
    }
  ]
};

export const examTimeline = {
  'Class 10': [
    { month: 'January', exams: ['NTSE Stage 1'], activities: ['Board exam preparation'] },
    { month: 'February', exams: [], activities: ['CBSE Board Exams begin'] },
    { month: 'March', exams: ['CBSE Board Exams'], activities: ['Result preparation'] },
    { month: 'April', exams: [], activities: ['Stream selection research'] },
    { month: 'May', exams: ['NTSE Stage 2'], activities: ['Summer courses'] },
    { month: 'June', exams: [], activities: ['Class 11 preparation'] }
  ],
  'Class 12': [
    { month: 'October', exams: ['JEE Main application'], activities: ['Board exam prep starts'] },
    { month: 'November', exams: ['CAT'], activities: ['NEET application opens'] },
    { month: 'December', exams: [], activities: ['JEE Main preparation'] },
    { month: 'January', exams: ['JEE Main session 1'], activities: ['Board practicals'] },
    { month: 'February', exams: ['CBSE Board Exams'], activities: ['NEET preparation'] },
    { month: 'March', exams: ['Board Exams continue'], activities: ['JEE Main session 2 prep'] },
    { month: 'April', exams: ['JEE Main session 2'], activities: ['NEET final preparation'] },
    { month: 'May', exams: ['NEET UG', 'JEE Advanced'], activities: ['Counseling preparation'] },
    { month: 'June', exams: [], activities: ['Counseling and admissions'] }
  ]
};

export const reservationPolicy = {
  categories: {
    'General': { percentage: 50, description: 'General/Unreserved category' },
    'EWS': { percentage: 10, description: 'Economically Weaker Sections' },
    'OBC': { percentage: 27, description: 'Other Backward Classes' },
    'SC': { percentage: 15, description: 'Scheduled Castes' },
    'ST': { percentage: 7.5, description: 'Scheduled Tribes' },
    'PwD': { percentage: 5, description: 'Persons with Disabilities (horizontal)' }
  },
  eligibility: {
    'EWS': {
      criteria: 'Annual family income less than ₹8 lakh',
      documents: ['Income certificate', 'Property documents', 'Family certificate']
    },
    'OBC': {
      criteria: 'Must be in Central OBC list and non-creamy layer',
      documents: ['OBC certificate', 'Non-creamy layer certificate']
    },
    'SC/ST': {
      criteria: 'Must be in Central SC/ST list',
      documents: ['Caste certificate from competent authority']
    }
  }
};

export default examsByStream;