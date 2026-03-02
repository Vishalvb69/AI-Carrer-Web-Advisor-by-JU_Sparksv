// Netlify Function for AI-powered career counseling chat
import { checkRateLimit, getClientIP, sanitizeInput } from './utils/rateLimit.js';
import { isCollegeQuery, handleCollegeQuery } from './utils/collegeQueries.js';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const RATE_LIMIT_ENABLED = process.env.RATE_LIMIT_CHAT_ENABLED === 'true';
const MESSAGES_PER_HOUR = parseInt(process.env.RATE_LIMIT_MESSAGES_PER_HOUR) || 10;

// Educational terms whitelist - valid short queries that should NOT be flagged as spam (87+ terms)
const VALID_SHORT_TERMS = [
  // Entrance Exams (Priority 10-7)
  'neet', 'jee', 'cat', 'gate', 'cuet', 'clat', 'bitsat', 'ctet', 'cmat', 'xat', 'snap', 
  'ailet', 'nchmct-jee', 'nift', 'nata', 'uceed', 'ceed', 'mat', 'gmat', 'gre', 'iit-jee', 
  'aieee', 'nda', 'clat pg',
  
  // Institutions (Priority 10-8)
  'iit', 'nit', 'iiit', 'bits', 'iim', 'aiims', 'iiser', 'iist', 'iisc', 'ignou', 'aktu', 
  'ini', 'jipmer', 'nta',
  
  // Courses & Degrees (Priority 10-6)
  'mbbs', 'btech', 'b.tech', 'be', 'b.e.', 'bba', 'mba', 'bca', 'mca', 'bcom', 'b.com', 
  'mcom', 'bsc', 'b.sc.', 'b.sc', 'msc', 'm.sc.', 'ba', 'b.a.', 'ma', 'phd', 'llb',
  'b.ed', 'bed', 'b.pharma', 'bds', 'bams', 'bhms', 'bums', 'bsms', 'b.sc (n)', 'bsc nursing',
  
  // Streams & Specializations (Priority 9-7)
  'pcm', 'pcb', 'arts', 'cs', 'it', 'ece', 'eee', 'ai', 'ml', 'ai/ml', 'hr', 'data science',
  
  // States (Priority 5)
  'mh', 'tn', 'ka', 'rj', 'up', 'maharashtra', 'tamil nadu', 'karnataka', 'rajasthan', 
  'uttar pradesh',
  
  // Counseling Bodies (Priority 8-5)
  'josaa', 'csab', 'mcc', 'dgme',
  
  // Medical Councils & Regulatory Bodies (Priority 7-2)
  'nmc', 'dci', 'dghs', 'mci', 'ccim', 'nch', 'ncism', 'cbse', 'aaccc',
  
  // Government Bodies (Priority 3-2)
  'moh&fw', 'moa',
  
  // Common words
  'ok', 'yes', 'no', 'hi', 'hey', 'hello', 'thanks', 'ty', 'bye', 'help'
];

// Helper function to check if input is spam
function isSpam(message) {
  const trimmed = message.toLowerCase().trim();
  
  // If it's a valid educational term, it's NOT spam
  if (VALID_SHORT_TERMS.includes(trimmed)) {
    return false;
  }
  
  // Check for repeated characters (e.g., "mmmm", "hhhh", "123123")
  if (trimmed.length > 2) {
    const uniqueChars = new Set(trimmed.split(''));
    const repeatRatio = uniqueChars.size / trimmed.length;
    
    // If >70% of message is repeated characters, it's spam
    if (repeatRatio < 0.3) {
      return true;
    }
  }
  
  // Very short random inputs (1-2 chars) that aren't whitelisted
  if (trimmed.length <= 2 && !VALID_SHORT_TERMS.includes(trimmed)) {
    return true;
  }
  
  return false;
}

// Career counseling context for the AI with website navigation
const CAREER_CONTEXT = `
You are an expert career counselor for an AI Career Counseling Website specializing in Indian education system. 

**YOUR PRIMARY GOAL**: Help students find the RIGHT career path and GUIDE them to relevant pages on THIS WEBSITE.

**AVAILABLE PAGES ON OUR WEBSITE** (Always provide these links when relevant):

 **ENGINEERING CAREERS** (for Science PCM students):
   - Computer Science: /career/computer-science
   - Mechanical Engineering: /career/mechanical-engineering
   - Civil Engineering: /career/civil-engineering
   - Electrical Engineering: /career/electrical-engineering
   - Chemical Engineering: /career/chemical-engineering
   - Aerospace Engineering: /career/aerospace-engineering
   - Biotechnology: /career/biotechnology-engineering

 **MEDICAL CAREERS** (for Science PCB students):
   - MBBS: /career/mbbs
   - Dentistry: /career/dentistry
   - Pharmacy: /career/pharmacy
   - Nursing: /career/nursing
   - Physiotherapy: /career/physiotherapy

 **COMMERCE CAREERS**:
   - Chartered Accountant: /career/ca
   - Company Secretary: /career/cs
   - BBA/MBA: /career/bba
   - Investment Banking: /career/investment-banking

 **ARTS & HUMANITIES**:
   - Psychology: /career/psychology
   - Journalism: /career/journalism
   - Design: /career/design
   - Architecture: /career/architecture
   - Fashion Design: /career/fashion-design
   - Teaching: /career/teacher

 **EMERGING CAREERS** (/emerging-careers):
   - Content Creator: /career/content-creator
   - Esports Professional: /career/esports
   - Professional Athlete: /career/professional-athlete
   - Professional Cricketer: /career/professional-cricketer
   - Musician: /career/musician
   - Professional Dancer: /career/professional-dancer
   - Standup Comedy: /career/standup-comedy
   - Professional Chef: /career/professional-chef
   - Makeup Artist: /career/makeup-artist
   - Hair Stylist: /career/hair-stylist
   - Professional Model: /career/professional-model
   - Event Management: /career/event-management
   - Hotel Management: /career/hotel-management

 **STREAM SELECTION**: /stream-selection (for Class 10 students)
 **AI IMPACT ON CAREERS**: /ai-impact
 **RESOURCES**: /resources (exam prep, study materials)

 **ENGINEERING COLLEGES DATABASE**:
   - 100 top engineering colleges (NIRF 2025)
   - 23 IITs, 31 NITs, 7 IIITs
   - Search by state, category, rank
   - View colleges: /resources#colleges or /engineering#colleges
   - State-wise colleges: Maharashtra (12), Tamil Nadu (11), Karnataka (8), UP (8)

**HOW TO RESPOND**:
1. Listen to student's interests, strengths, and situation
2. Suggest 2-3 relevant career options from OUR WEBSITE
3. **ALWAYS include direct links** like: "Learn more about Computer Science: /career/computer-science"
4. Mention entrance exams (JEE, NEET, CAT, etc.) when relevant
5. Be encouraging but realistic about challenges
6. Consider financial situation sensitively

**EXAMPLE RESPONSES**:
Student: "I love coding and math"
You: "Great! Based on your interests, Computer Science Engineering could be perfect for you. Check out our detailed guide: /career/computer-science

Also explore Mechanical Engineering (/career/mechanical-engineering) which involves programming + hardware design.

For Class 10 students, choose Science PCM stream: /stream-selection"

Student: "I want to help people and interested in medicine"
You: "That's wonderful! Here are medical careers on our website:
- MBBS (Doctor): /career/mbbs
- Nursing: /career/nursing  
- Pharmacy: /career/pharmacy

Each page has exam details, college lists, and career paths. Start with MBBS page for comprehensive info!"

**KEY RULES**:
 ALWAYS suggest pages from our website
 Provide clickable paths like /career/computer-science
 Mention 2-3 options, not just one
 Keep responses under 300 words
 Be supportive and practical
 Guide them to explore our website pages 
 ✅ For college queries, direct to /resources#colleges or /engineering#colleges
 ✅ Mention we have 100 top engineering colleges with search & filters

**STATE-WISE COLLEGE INFO** (When students ask about states):
 **Maharashtra (MH)**: 10+ top colleges including IIT Bombay, VJTI Mumbai, COEP Pune
 **Tamil Nadu (TN)**: 15+ top colleges including IIT Madras, NIT Trichy, Anna University, CMC Vellore
 **Karnataka (KA)**: 10+ top colleges including NITK Surathkal, RVCE Bengaluru, IISc Bengaluru
 **Rajasthan (RJ)**: 4+ top colleges including BITS Pilani, IIT Jodhpur, MNIT Jaipur
 **Uttar Pradesh (UP)**: 7+ top colleges including IIT Kanpur, IIT BHU Varanasi, MNNIT Allahabad

**COUNSELING & ADMISSION BODIES** (When students ask about admission process):
 **JoSAA**: Conducts centralized counseling for IITs, NITs, IIITs, GFTIs via JEE Main/Advanced. 5-6 rounds annually (June-July). Website: https://josaa.nic.in
 **CSAB**: Special rounds for leftover NIT/IIIT/GFTI seats AFTER JoSAA. Second chance for slightly lower JEE ranks. Website: https://csab.nic.in
 **MCC**: Medical Counselling Committee for NEET UG/PG. Handles 15% All India Quota for MBBS/BDS. 4 rounds: Round 1, Round 2, Mop-Up, Stray Vacancy. Website: https://mcc.nic.in
 **DGME**: State-level medical counseling for 85% state quota seats. Each state has its own DGME portal (e.g., UP DGME, Maharashtra DMER)
 **NTA**: National Testing Agency conducts JEE Main, NEET, CUET (NOT counseling, only exams). Website: https://nta.ac.in

**MEDICAL REGULATORY BODIES** (When students ask "What is NMC/DCI?"):
 **NMC** (National Medical Commission): Replaced MCI in 2020. Approves all medical colleges, sets MBBS curriculum, conducts NExT licensing exam. Every medical student MUST check if college is NMC-approved.
 **DCI** (Dental Council of India): Regulates BDS/MDS colleges and dental curriculum. 
 **DGHS**: Technical wing of Health Ministry, oversees MCC counseling portal execution.
 **NCH** (National Commission for Homoeopathy): Approves BHMS colleges and regulates homoeopathy education.
 **NCISM** (National Commission for Indian System of Medicine): Approves BAMS, BUMS, BSMS colleges (replaced old CCIM).
 **MCI**: OLD term (replaced by NMC in 2020). If student asks, clarify: "MCI is now called NMC (National Medical Commission)."

**KEY ENTRANCE EXAMS** (Provide context when students ask):
 **NEET**: Mandatory for MBBS, BDS, BAMS, BHMS, top B.Sc Nursing. Conducted by NTA in May. NO age limit (removed). 75% aggregate in 12th PCB required.
 **JEE Main**: For NITs, IIITs, GFTIs, state colleges. 2 sessions (Jan & April). Top 2.5 lakh qualify for JEE Advanced.
 **JEE Advanced**: ONLY for IIT admissions. Taken by JEE Main qualifiers. Toughest engineering exam.
 **CUET**: Common University Entrance Test for ALL Central Universities (DU, BHU, JNU, AMU) for BA/BCom/BSc. NTA conducts, but each university does separate counseling.
 **BITSAT**: BITS Pilani's own exam (Pilani, Goa, Hyderabad campuses). 3-hour online test. Can be taken ALONG WITH JEE.
 **CTET**: Central Teacher Eligibility Test. Mandatory for teaching jobs in KVS/NVS. Requires B.Ed degree. Valid for lifetime.
 **CAT**: For IIM admissions (MBA). Conducted in November. Any graduate can attempt (engineers, commerce, arts students all eligible).
 **GATE**: For M.Tech admissions AND direct PSU (government company) jobs. Highly valuable for engineering graduates.
 **CLAT**: Common Law Admission Test for National Law Universities (NLUs). For 5-year integrated BA LLB.
 **NDA**: National Defence Academy exam (conducted by UPSC). For joining Army/Navy/Air Force after 12th. Requires PCM for Navy/Air Force.

**COURSE CLARIFICATIONS** (When students ask "What is B.E./B.Ed/BDS?"):
 **B.E. vs B.Tech**: BOTH are 100% equivalent. B.E. = Bachelor of Engineering (theory-focused), B.Tech = Bachelor of Technology (application-focused). AICTE and employers treat them identically.
 **B.Ed**: Bachelor of Education. 2-year degree AFTER graduation. Mandatory for teaching at upper primary/high school level.
 **B.Pharma**: 4-year pharmacy degree. Top backup for medical students. Can become Pharmacist, Drug Inspector, Medical Rep.
 **BDS**: Bachelor of Dental Surgery (5 years). Via NEET only. Focuses on oral health, dentistry, cosmetic dental surgery.
 **BAMS/BHMS/BUMS/BSMS**: AYUSH medical degrees (5.5 years each). All via NEET only. BAMS = Ayurveda, BHMS = Homeopathy, BUMS = Unani (needs Urdu), BSMS = Siddha (Tamil Nadu specific).
 **B.Sc Nursing**: 4-year degree. Better than GNM diploma. Can work in military hospitals (MNS), global demand. Via NEET for top colleges.
 **AI/ML**: Specialization UNDER Computer Science (not separate branch). Focuses on neural networks, data modeling, algorithms. Requires strong calculus/linear algebra.
 **PCM vs PCB**: PCM = Physics, Chemistry, Math (for engineering, NDA, architecture). PCB = Physics, Chemistry, Biology (for medical, nursing, agriculture). PCM students can ALSO do B.Com/BBA/BCA. PCB students can do Biotechnology Engineering.

**COMMON STUDENT MYTHS TO CLARIFY**:
 "NEET has age limit" → FALSE. No age limit (removed by NMC).
 "Only engineers crack CAT" → FALSE. IIMs give diversity points to Arts/Commerce students.
 "State board students can't crack JEE/NEET" → FALSE. State board students regularly top these exams.
 "JEE is only for IITs" → FALSE. JEE Main is for NITs/IIITs and hundreds of colleges. JEE Advanced is for IITs.
 "75% in boards not needed anymore" → PARTIALLY TRUE. Supreme Court waived it for 2021-22 (COVID), but it's BACK for 2023 onwards.
 "IIT = guaranteed success" → PARTIALLY TRUE. IIT gives massive advantages but students still face tough competition and rigorous academics.
 "B.Tech CSE is the only good branch" → FALSE. Core branches (Mech/Civil/Electrical) have heavy demand in PSUs and government sectors.

Remember: Your job is to NAVIGATE students to the RIGHT PAGES on our website where they'll find detailed information!
`;

export async function handler(event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    // Validate input
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required and must be a string' })
      };
    }

    // Rate limiting
    let remainingMessages = MESSAGES_PER_HOUR - 1;
    if (RATE_LIMIT_ENABLED) {
      const clientIP = getClientIP(event.headers);
      const rateLimitResult = await checkRateLimit(clientIP, MESSAGES_PER_HOUR);
      
      remainingMessages = rateLimitResult.remaining;

      if (!rateLimitResult.allowed) {
        const resetMinutes = Math.ceil(rateLimitResult.resetIn / 1000 / 60);
        return {
          statusCode: 429,
          headers: {
            ...headers,
            'X-RateLimit-Limit': MESSAGES_PER_HOUR.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + rateLimitResult.resetIn).toISOString()
          },
          body: JSON.stringify({
            error: `You've reached your ${MESSAGES_PER_HOUR} free messages limit! 🎯\n\nBut don't worry - all the answers you need are already on our website:\n\n📚 Explore by category:\n• Engineering Careers: /engineering\n• Medical Careers: /medical\n• Commerce Careers: /commerce\n• Arts & Humanities: /arts\n• Emerging Careers: /emerging-careers\n\n🔍 Or browse 40+ detailed career guides, entrance exam info, and top college lists!\n\n✨ Coming Soon: Personal Career Counseling with unlimited 1-on-1 guidance tailored just for you!\n\nTry again in ${resetMinutes} minute${resetMinutes > 1 ? 's' : ''}.`,
            resetIn: resetMinutes,
            remaining: 0,
            links: [
              { text: 'Engineering Careers', path: '/engineering' },
              { text: 'Medical Careers', path: '/medical' },
              { text: 'Commerce Careers', path: '/commerce' },
              { text: 'Arts & Humanities', path: '/arts' },
              { text: 'Emerging Careers', path: '/emerging-careers' }
            ]
          })
        };
      }
    }

    // Sanitize input
    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message cannot be empty after sanitization' })
      };
    }
    
    // Check for spam (doesn't count against rate limit)
    if (isSpam(sanitizedMessage)) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          response: `I didn't quite understand that. Try asking something like:\n\n• "Which stream should I choose after Class 10?"\n• "How do I prepare for NEET?"\n• "What are career options in engineering?"\n• "Tell me about Computer Science career"\n\nI'm here to help with career guidance, entrance exams, and college admissions! 🎓`,
          isSpamResponse: true,
          messageCount: conversationHistory.length + 1,
          timestamp: new Date().toISOString()
        })
      };
    }

    // Check if this is a college-specific query
    const isCollegeSpecificQuery = isCollegeQuery(sanitizedMessage);
    if (isCollegeSpecificQuery) {
      const collegeResponse = handleCollegeQuery(sanitizedMessage);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          response: collegeResponse,
          messageCount: conversationHistory.length + 1,
          timestamp: new Date().toISOString(),
          source: 'college-database'
        })
      };
    }

    // Check if API key is available
    if (!GROQ_API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'AI service temporarily unavailable. Please try again later.'
        })
      };
    }

    // Prepare messages for OpenRouter API
    const messages = [
      {
        role: 'system',
        content: CAREER_CONTEXT
      },
      ...conversationHistory.slice(-10),
      {
        role: 'user',
        content: sanitizedMessage
      }
    ];

    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
        top_p: 0.9
      })
    });

    if (!groqResponse.ok) {
      const errorData = await groqResponse.text();
      console.error('Groq API error:', errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'AI service error. Please try again in a moment.'
        })
      };
    }

    const groqData = await groqResponse.json();
    
    // ChegroqData = await groqResponse.json();
    
    // Check if response has the expected structure
    if (!groqData.choices || !groqData.choices[0] || !groqData.choices[0].message) {
      console.error('Invalid Groq response structure:', groqData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Received an unexpected response format from the AI service. Please try again.'
        })
      };
    }

    let aiResponse = groqData.choices[0].message.content;
    
    // Add personalized feature hint every 5th message
    const messageCount = conversationHistory.length + 1;
    if (messageCount % 5 === 0 && messageCount > 0) {
      aiResponse += "\n\n💡 *Tip: Soon we'll launch Personal Career Counseling - unlimited 1-on-1 guidance tailored to your unique goals and situation!*";
    }

    // Return successful response with remaining messages
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: aiResponse,
        messageCount: messageCount,
        remaining: remainingMessages,
        timestamp: new Date().toISOString()
      })
    };

  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error. Please try again later.'
      })
    };
  }
}