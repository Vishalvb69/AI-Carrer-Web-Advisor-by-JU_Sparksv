// Courses and learning resources for various careers
export const careerCourses = {
  'ethical-hacker': {
    title: 'Ethical Hacker / Penetration Tester',
    courses: [
      {
        name: 'Certified Ethical Hacker (CEH)',
        provider: 'EC-Council',
        duration: '40-100 hours',
        cost: '₹50,000 - ₹1,50,000',
        level: 'Intermediate',
        link: 'https://www.eccouncil.org'
      },
      {
        name: 'Offensive Security Certified Professional (OSCP)',
        provider: 'Offensive Security',
        duration: '100+ hours (challenging)',
        cost: '₹1,50,000',
        level: 'Advanced',
        link: 'https://www.offensive-security.com'
      },
      {
        name: 'CompTIA Security+',
        provider: 'CompTIA',
        duration: '50-100 hours',
        cost: '₹30,000 - ₹80,000',
        level: 'Intermediate',
        link: 'https://www.comptia.org'
      },
      {
        name: 'Complete Ethical Hacking Course',
        provider: 'Udemy',
        duration: '15-20 hours',
        cost: '₹500 - ₹3,000',
        level: 'Beginner',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Cybersecurity Specialization',
        provider: 'Coursera',
        duration: '4-6 months',
        cost: '₹40,000 - ₹60,000',
        level: 'Beginner to Intermediate',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Penetration Testing with Kali Linux',
        provider: 'Udemy',
        duration: '10 hours',
        cost: '₹500 - ₹2,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      }
    ],
    skills: ['Network Security', 'Linux', 'Python/Bash Scripting', 'Web Security', 'Penetration Tools (Metasploit, Burp Suite)'],
    totalDuration: '6-12 months',
    totalCost: '₹2,50,000 - ₹5,00,000'
  },

  'data-scientist': {
    title: 'Data Scientist',
    courses: [
      {
        name: 'Andrew Ng\'s Machine Learning Course',
        provider: 'Coursera',
        duration: '4-6 weeks',
        cost: 'Free / ₹40,000 (certificate)',
        level: 'Beginner',
        link: 'https://www.coursera.org/learn/machine-learning'
      },
      {
        name: 'Data Science Specialization',
        provider: 'Coursera',
        duration: '5-7 months',
        cost: '₹40,000 - ₹60,000',
        level: 'Beginner to Intermediate',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Python for Data Analysis',
        provider: 'DataCamp',
        duration: '3-4 weeks',
        cost: '₹15,000 - ₹30,000',
        level: 'Beginner',
        link: 'https://www.datacamp.com'
      },
      {
        name: 'Deep Learning Specialization',
        provider: 'Coursera',
        duration: '3-4 months',
        cost: '₹40,000 - ₹60,000',
        level: 'Advanced',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Kaggle Competitions',
        provider: 'Kaggle',
        duration: 'Ongoing',
        cost: 'Free',
        level: 'All levels',
        link: 'https://www.kaggle.com'
      },
      {
        name: 'Statistics for Data Analysis',
        provider: 'Udemy',
        duration: '8-10 hours',
        cost: '₹500 - ₹2,000',
        level: 'Beginner',
        link: 'https://www.udemy.com'
      }
    ],
    skills: ['Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Statistics', 'Business Acumen'],
    totalDuration: '6-12 months',
    totalCost: '₹2,00,000 - ₹4,00,000'
  },

  'cloud-engineer': {
    title: 'Cloud Engineer (AWS / Azure / GCP)',
    courses: [
      {
        name: 'AWS Solutions Architect Associate',
        provider: 'AWS',
        duration: '40-60 hours',
        cost: '₹6,000 - ₹15,000',
        level: 'Intermediate',
        link: 'https://aws.amazon.com/certification'
      },
      {
        name: 'Microsoft Azure Fundamentals (AZ-900)',
        provider: 'Microsoft',
        duration: '20-30 hours',
        cost: '₹6,000 - ₹12,000',
        level: 'Beginner',
        link: 'https://learn.microsoft.com'
      },
      {
        name: 'Google Cloud Associate Cloud Engineer',
        provider: 'Google Cloud',
        duration: '40-60 hours',
        cost: '₹10,000 - ₹20,000',
        level: 'Intermediate',
        link: 'https://cloud.google.com/certification'
      },
      {
        name: 'Cloud Computing Foundations',
        provider: 'Linux Academy / A Cloud Guru',
        duration: '50-70 hours',
        cost: '₹10,000 - ₹25,000/month',
        level: 'Beginner',
        link: 'https://acloudguru.com'
      },
      {
        name: 'Kubernetes & Docker Mastery',
        provider: 'Udemy',
        duration: '15-20 hours',
        cost: '₹500 - ₹2,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      },
      {
        name: 'DevOps Engineering Course',
        provider: 'Coursera',
        duration: '4-6 months',
        cost: '₹40,000 - ₹60,000',
        level: 'Intermediate',
        link: 'https://www.coursera.org'
      }
    ],
    skills: ['AWS/Azure/GCP', 'Linux', 'DevOps', 'Docker', 'Kubernetes', 'Networking', 'Security'],
    totalDuration: '6-10 months',
    totalCost: '₹1,50,000 - ₹3,50,000'
  },

  'ui-ux-designer': {
    title: 'UI/UX Designer',
    courses: [
      {
        name: 'Google UX Design Professional Certificate',
        provider: 'Coursera',
        duration: '6-8 months',
        cost: '₹40,000 - ₹60,000',
        level: 'Beginner',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Figma Masterclass',
        provider: 'Udemy',
        duration: '10-15 hours',
        cost: '₹500 - ₹2,000',
        level: 'Beginner',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Adobe XD for UI/UX Design',
        provider: 'Adobe',
        duration: '20-30 hours',
        cost: '₹15,000 - ₹30,000',
        level: 'Beginner',
        link: 'https://adobe.com'
      },
      {
        name: 'UI/UX Bootcamp',
        provider: 'CareerFoundry / General Assembly',
        duration: '8-12 weeks',
        cost: '₹1,50,000 - ₹3,00,000',
        level: 'Comprehensive',
        link: 'https://www.careerfoundry.com'
      },
      {
        name: 'Interaction Design Fundamentals',
        provider: 'Interaction Design Foundation',
        duration: '4-6 weeks',
        cost: 'Free / ₹20,000 (certificate)',
        level: 'Beginner',
        link: 'https://www.interaction-design.org'
      },
      {
        name: 'User Research & Testing',
        provider: 'Nielsen Norman Group',
        duration: '3-4 weeks',
        cost: '₹50,000+',
        level: 'Intermediate',
        link: 'https://www.nngroup.com'
      }
    ],
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing', 'Visual Design', 'CSS/HTML basics'],
    totalDuration: '6-12 months',
    totalCost: '₹1,50,000 - ₹4,00,000'
  },

  'chartered-accountant': {
    title: 'Chartered Accountant (CA)',
    courses: [
      {
        name: 'CA Foundation',
        provider: 'Institute of Chartered Accountants of India (ICAI)',
        duration: '4 months',
        cost: '₹18,000',
        level: 'Foundation',
        link: 'https://www.icai.org'
      },
      {
        name: 'CA Intermediate',
        provider: 'ICAI',
        duration: '8 months',
        cost: '₹20,000',
        level: 'Intermediate',
        link: 'https://www.icai.org'
      },
      {
        name: 'CA Final',
        provider: 'ICAI',
        duration: '8 months',
        cost: '₹20,000',
        level: 'Advanced',
        link: 'https://www.icai.org'
      },
      {
        name: 'Accounting Standards Course',
        provider: 'ICAI',
        duration: 'Self-paced',
        cost: '₹5,000',
        level: 'Intermediate',
        link: 'https://www.icai.org'
      },
      {
        name: 'Advanced Audit & Assurance',
        provider: 'ICAI',
        duration: 'Self-paced',
        cost: '₹8,000',
        level: 'Advanced',
        link: 'https://www.icai.org'
      },
      {
        name: 'GST & Indirect Tax Masterclass',
        provider: 'Online Platforms',
        duration: '4-6 weeks',
        cost: '₹10,000 - ₹25,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      }
    ],
    skills: ['Accounting', 'Taxation', 'GST', 'Auditing', 'Financial Analysis', 'Corporate Law', 'Business Ethics'],
    totalDuration: '4.5 years (with articleship)',
    totalCost: '₹1,50,000 - ₹3,00,000'
  },

  'stock-market-analyst': {
    title: 'Stock Market Analyst / Trader',
    courses: [
      {
        name: 'Equity Research & Analysis',
        provider: 'NSE Academy',
        duration: '4-6 weeks',
        cost: '₹20,000 - ₹40,000',
        level: 'Beginner',
        link: 'https://www.nseacademy.com'
      },
      {
        name: 'Technical Analysis Masterclass',
        provider: 'Udemy / Trading Platforms',
        duration: '10-15 hours',
        cost: '₹500 - ₹3,000',
        level: 'Beginner',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Fundamental Analysis & Valuation',
        provider: 'Investopedia / Coursera',
        duration: '4-6 weeks',
        cost: '₹10,000 - ₹30,000',
        level: 'Intermediate',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Python for Financial Analysis',
        provider: 'DataCamp / Coursera',
        duration: '3-4 weeks',
        cost: '₹15,000 - ₹30,000',
        level: 'Intermediate',
        link: 'https://www.datacamp.com'
      },
      {
        name: 'Options & Derivatives Trading',
        provider: 'NSE Academy / Online Courses',
        duration: '4-8 weeks',
        cost: '₹15,000 - ₹40,000',
        level: 'Advanced',
        link: 'https://www.nseacademy.com'
      },
      {
        name: 'Risk Management in Trading',
        provider: 'CFA Institute / Online Platforms',
        duration: '4-6 weeks',
        cost: '₹20,000 - ₹50,000',
        level: 'Advanced',
        link: 'https://www.cfainstitute.org'
      }
    ],
    skills: ['Technical Analysis', 'Fundamental Analysis', 'Financial Modeling', 'Python/Excel', 'Risk Management', 'Market Psychology'],
    totalDuration: '6-12 months',
    totalCost: '₹1,00,000 - ₹2,50,000'
  },

  'company-secretary': {
    title: 'Company Secretary (CS)',
    courses: [
      {
        name: 'CS Foundation',
        provider: 'Institute of Company Secretaries of India (ICSI)',
        duration: '4 months',
        cost: '₹12,000',
        level: 'Foundation',
        link: 'https://www.icsi.edu'
      },
      {
        name: 'CS Executive',
        provider: 'ICSI',
        duration: '8 months',
        cost: '₹15,000',
        level: 'Intermediate',
        link: 'https://www.icsi.edu'
      },
      {
        name: 'CS Professional',
        provider: 'ICSI',
        duration: '8 months',
        cost: '₹18,000',
        level: 'Advanced',
        link: 'https://www.icsi.edu'
      },
      {
        name: 'Corporate Governance & Compliance',
        provider: 'ICSI',
        duration: 'Self-paced',
        cost: '₹8,000',
        level: 'Intermediate',
        link: 'https://www.icsi.edu'
      },
      {
        name: 'SEBI Regulations & Corporate Law',
        provider: 'ICSI / Online Platforms',
        duration: '4-6 weeks',
        cost: '₹10,000 - ₹20,000',
        level: 'Intermediate',
        link: 'https://www.icsi.edu'
      },
      {
        name: 'Secretarial Audit & Compliance',
        provider: 'ICSI',
        duration: 'Self-paced',
        cost: '₹6,000',
        level: 'Advanced',
        link: 'https://www.icsi.edu'
      }
    ],
    skills: ['Corporate Law', 'Compliance', 'Governance', 'SEBI Regulations', 'MCA Rules', 'Board Management'],
    totalDuration: '4.5 years (with training)',
    totalCost: '₹1,00,000 - ₹2,00,000'
  },

  'investment-banker': {
    title: 'Investment Banker',
    courses: [
      {
        name: 'Financial Modeling & Valuation',
        provider: 'WSP / FMVA / Online Courses',
        duration: '6-8 weeks',
        cost: '₹30,000 - ₹80,000',
        level: 'Intermediate',
        link: 'https://www.wallstreetprep.com'
      },
      {
        name: 'Investment Banking 101',
        provider: 'Coursera / Udemy',
        duration: '4-6 weeks',
        cost: '₹10,000 - ₹25,000',
        level: 'Beginner',
        link: 'https://www.coursera.org'
      },
      {
        name: 'M&A Transactions & Process',
        provider: 'Online Financial Institutes',
        duration: '6-8 weeks',
        cost: '₹25,000 - ₹60,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Corporate Finance Essentials',
        provider: 'MIT / Coursera',
        duration: '4-6 weeks',
        cost: '₹40,000 - ₹60,000',
        level: 'Intermediate',
        link: 'https://www.coursera.org'
      },
      {
        name: 'CFA Level 1',
        provider: 'CFA Institute',
        duration: '4-6 months',
        cost: '₹1,00,000+',
        level: 'Advanced',
        link: 'https://www.cfainstitute.org'
      },
      {
        name: 'Excel for Financial Professionals',
        provider: 'Wall Street Prep / Online',
        duration: '2-3 weeks',
        cost: '₹15,000 - ₹30,000',
        level: 'Beginner',
        link: 'https://www.wallstreetprep.com'
      }
    ],
    skills: ['Financial Modeling', 'Valuation', 'M&A', 'Corporate Finance', 'Excel', 'Financial Analysis', 'Pitching'],
    totalDuration: '6-18 months',
    totalCost: '₹2,50,000 - ₹5,00,000'
  },

  'script-writer': {
    title: 'Script Writer',
    courses: [
      {
        name: 'Screenwriting Fundamentals',
        provider: 'Udemy / MasterClass',
        duration: '4-8 weeks',
        cost: '₹500 - ₹50,000',
        level: 'Beginner',
        link: 'https://www.udemy.com'
      },
      {
        name: 'OTT & Web Series Writing',
        provider: 'Online Platforms / Industry Experts',
        duration: '6-8 weeks',
        cost: '₹20,000 - ₹50,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Story Development & Plotting',
        provider: 'Writers Guild / Online Courses',
        duration: '4-6 weeks',
        cost: '₹15,000 - ₹40,000',
        level: 'Beginner',
        link: 'https://www.writersguide.org'
      },
      {
        name: 'Dialogue Writing Workshop',
        provider: 'Industry Professionals / Workshops',
        duration: '2-3 weeks',
        cost: '₹10,000 - ₹30,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      },
      {
        name: 'TV Series Writing Course',
        provider: 'Writers Guild / UCLA Extension',
        duration: '8-12 weeks',
        cost: '₹40,000 - ₹1,00,000',
        level: 'Advanced',
        link: 'https://www.writersguide.org'
      },
      {
        name: 'Pitching & Selling Scripts',
        provider: 'Industry Workshops',
        duration: '2-4 weeks',
        cost: '₹10,000 - ₹25,000',
        level: 'Advanced',
        link: 'https://www.udemy.com'
      }
    ],
    skills: ['Screenwriting', 'Story Structure', 'Character Development', 'Dialogue', 'Screenplay Format', 'Creative Writing'],
    totalDuration: '6-12 months',
    totalCost: '₹1,00,000 - ₹2,50,000'
  },

  'graphic-designer': {
    title: 'Graphic Designer',
    courses: [
      {
        name: 'Adobe Creative Cloud Master',
        provider: 'Adobe / Udemy',
        duration: '20-30 hours',
        cost: '₹500 - ₹3,000',
        level: 'Beginner',
        link: 'https://www.adobe.com'
      },
      {
        name: 'Graphic Design Fundamentals',
        provider: 'Coursera / Skillshare',
        duration: '4-6 weeks',
        cost: '₹40,000 - ₹60,000',
        level: 'Beginner',
        link: 'https://www.coursera.org'
      },
      {
        name: 'UI/UX Design for Graphic Designers',
        provider: 'Udemy / Online Platforms',
        duration: '10-15 hours',
        cost: '₹500 - ₹2,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Branding & Logo Design',
        provider: 'Design Academy / Online',
        duration: '4-6 weeks',
        cost: '₹15,000 - ₹40,000',
        level: 'Intermediate',
        link: 'https://www.skillshare.com'
      },
      {
        name: 'Illustration & Digital Art',
        provider: 'Udemy / Skillshare',
        duration: '8-12 weeks',
        cost: '₹500 - ₹5,000',
        level: 'Intermediate',
        link: 'https://www.skillshare.com'
      },
      {
        name: 'Graphic Design Bootcamp',
        provider: 'General Assembly / CareerFoundry',
        duration: '8-12 weeks',
        cost: '₹1,00,000 - ₹2,50,000',
        level: 'Comprehensive',
        link: 'https://generalassemb.ly'
      }
    ],
    skills: ['Adobe Suite (PS, AI, InDesign)', 'Typography', 'Color Theory', 'Branding', 'Layout Design', 'Digital Art'],
    totalDuration: '6-12 months',
    totalCost: '₹1,00,000 - ₹2,50,000'
  },

  'psychologist': {
    title: 'Psychologist',
    courses: [
      {
        name: 'Bachelor of Psychology (B.Sc Psychology)',
        provider: 'Indian Universities',
        duration: '3 years',
        cost: '₹50,000 - ₹5,00,000',
        level: 'Foundation',
        link: 'https://www.du.ac.in'
      },
      {
        name: 'Master of Psychology (M.Sc Psychology)',
        provider: 'Indian Universities',
        duration: '2 years',
        cost: '₹1,00,000 - ₹5,00,000',
        level: 'Advanced',
        link: 'https://www.iitd.ac.in'
      },
      {
        name: 'Clinical Psychology Specialization',
        provider: 'Universities / Institute of Psychology',
        duration: '2-3 years',
        cost: '₹2,00,000 - ₹8,00,000',
        level: 'Advanced',
        link: 'https://www.nimhans.ac.in'
      },
      {
        name: 'Counseling Psychology Certificate',
        provider: 'Online Platforms / Institutions',
        duration: '3-6 months',
        cost: '₹20,000 - ₹50,000',
        level: 'Intermediate',
        link: 'https://www.udemy.com'
      },
      {
        name: 'Cognitive Behavioral Therapy (CBT) Training',
        provider: 'Certified Institutes / Online',
        duration: '3-6 months',
        cost: '₹30,000 - ₹80,000',
        level: 'Advanced',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Psychology of Human Behavior',
        provider: 'Coursera / EdX',
        duration: '4-6 weeks',
        cost: '₹40,000 - ₹60,000',
        level: 'Beginner',
        link: 'https://www.coursera.org'
      }
    ],
    skills: ['Clinical Diagnosis', 'Counseling', 'Research Methodology', 'Psychology Theory', 'Assessment Tools', 'Ethics'],
    totalDuration: '5-7 years (B.Sc + M.Sc)',
    totalCost: '₹3,00,000 - ₹15,00,000'
  },

  'professor-lecturer': {
    title: 'Professor / Lecturer',
    courses: [
      {
        name: 'Bachelor Degree (B.Sc/B.A/B.Com)',
        provider: 'Indian Universities',
        duration: '3 years',
        cost: '₹50,000 - ₹5,00,000',
        level: 'Foundation',
        link: 'https://www.du.ac.in'
      },
      {
        name: 'Master Degree (M.Sc/M.A/M.Com)',
        provider: 'Indian Universities',
        duration: '2 years',
        cost: '₹1,00,000 - ₹5,00,000',
        level: 'Intermediate',
        link: 'https://www.iitd.ac.in'
      },
      {
        name: 'PhD / Doctoral Research',
        provider: 'Indian Universities / Research Institutes',
        duration: '3-5 years',
        cost: '₹1,00,000 - ₹3,00,000',
        level: 'Advanced',
        link: 'https://www.nta.ac.in'
      },
      {
        name: 'UGC-NET / JRF Exam Preparation',
        provider: 'Online Coaching / Self-study',
        duration: '6-12 months',
        cost: '₹20,000 - ₹50,000',
        level: 'Advanced',
        link: 'https://www.nta.ac.in'
      },
      {
        name: 'Teaching Methodology & Pedagogy',
        provider: 'Online Courses / Universities',
        duration: '4-8 weeks',
        cost: '₹15,000 - ₹40,000',
        level: 'Intermediate',
        link: 'https://www.coursera.org'
      },
      {
        name: 'Research Methods & Academic Writing',
        provider: 'Universities / Online Platforms',
        duration: '4-6 weeks',
        cost: '₹20,000 - ₹50,000',
        level: 'Intermediate',
        link: 'https://www.coursera.org'
      }
    ],
    skills: ['Subject Matter Expertise', 'Research', 'Teaching', 'Paper Publication', 'Mentoring', 'Academic Administration'],
    totalDuration: '10-12 years',
    totalCost: '₹3,00,000 - ₹15,00,000'
  }
};

export default careerCourses;
