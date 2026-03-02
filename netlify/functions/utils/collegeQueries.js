/**
 * College Query Handler for Chatbot
 * Detects and responds to college-related questions
 */

import { 
  topColleges, 
  stateWiseStats,
  categoryStats,
  getTopCollegesByState,
  getTopIITs,
  getTopNITs,
  searchTopColleges,
  formatCollegeForChat,
  getStateStats
} from './collegeData.js';

/**
 * Detect if message is asking about colleges
 */
export function isCollegeQuery(message) {
  const collegeKeywords = [
    'college', 'colleges', 'university', 'universities', 'institute', 'institutes',
    'iit', 'nit', 'iiit', 'engineering college', 'best college',
    'top college', 'admission', 'nirf', 'ranking'
  ];
  
  const messageLower = message.toLowerCase();
  return collegeKeywords.some(keyword => messageLower.includes(keyword));
}

/**
 * Detect state-specific college query
 */
function detectStateQuery(message) {
  const states = Object.keys(stateWiseStats);
  const messageLower = message.toLowerCase();
  
  for (const state of states) {
    if (messageLower.includes(state.toLowerCase())) {
      return state;
    }
  }
  
  // Check for common abbreviations
  const stateAbbr = {
    'mh': 'Maharashtra',
    'tn': 'Tamil Nadu',
    'ka': 'Karnataka',
    'up': 'Uttar Pradesh',
    'tg': 'Telangana',
    'wb': 'West Bengal',
    'gj': 'Gujarat',
    'rj': 'Rajasthan',
    'mp': 'Madhya Pradesh'
  };
  
  for (const [abbr, fullName] of Object.entries(stateAbbr)) {
    if (messageLower.includes(` ${abbr} `) || messageLower.includes(` ${abbr},`)) {
      return fullName;
    }
  }
  
  return null;
}

/**
 * Detect IIT-specific query
 */
function isIITQuery(message) {
  const messageLower = message.toLowerCase();
  return messageLower.includes('iit') || messageLower.includes('indian institute of technology');
}

/**
 * Detect NIT-specific query
 */
function isNITQuery(message) {
  const messageLower = message.toLowerCase();
  return messageLower.includes('nit') || messageLower.includes('national institute of technology');
}

/**
 * Generate college query response
 */
export function handleCollegeQuery(message) {
  const messageLower = message.toLowerCase();
  
  // State-specific query
  const state = detectStateQuery(message);
  if (state) {
    const stateColleges = getTopCollegesByState(state, 3);
    const stats = getStateStats(state);
    
    if (stateColleges.length > 0) {
      let response = `Top Engineering Colleges in ${state}:\n\n`;
      
      stateColleges.forEach((college, index) => {
        response += `${index + 1}. ${formatCollegeForChat(college)}\n\n`;
      });
      
      if (stats) {
        response += `We have ${stats.count} engineering colleges from ${state} in our database of 100 top colleges.\n\n`;
      }
      
      response += `🔍 View all colleges with complete filters: /resources#colleges\n`;
      response += `📚 Explore engineering careers: /engineering`;
      
      return response;
    }
  }
  
  // IIT-specific query
  if (isIITQuery(message)) {
    const iits = getTopIITs();
    let response = `Top IITs in India (NIRF 2025):\n\n`;
    
    iits.slice(0, 5).forEach((college, index) => {
      response += `${index + 1}. ${formatCollegeForChat(college)}\n\n`;
    });
    
    response += `Total IITs in database: ${categoryStats.iits}\n\n`;
    response += `💡 To prepare for JEE Advanced:\n`;
    response += `- Check our resources page: /resources\n`;
    response += `- Explore Computer Science: /career/computer-science\n`;
    response += `- View all engineering colleges: /engineering#colleges`;
    
    return response;
  }
  
  // NIT-specific query
  if (isNITQuery(message)) {
    const nits = getTopNITs();
    let response = `Top NITs in India (NIRF 2025):\n\n`;
    
    nits.slice(0, 5).forEach((college, index) => {
      response += `${index + 1}. ${formatCollegeForChat(college)}\n\n`;
    });
    
    response += `Total NITs in database: ${categoryStats.nits}\n\n`;
    response += `💡 To prepare for JEE Main:\n`;
    response += `- Visit resources page: /resources\n`;
    response += `- View all 100 engineering colleges: /engineering#colleges`;
    
    return response;
  }
  
  // Best/top colleges query
  if (messageLower.includes('best') || messageLower.includes('top')) {
    let response = `Top 5 Engineering Colleges in India (NIRF 2025):\n\n`;
    
    topColleges.slice(0, 5).forEach((college, index) => {
      response += `${index + 1}. ${formatCollegeForChat(college)}\n\n`;
    });
    
    response += `📊 Our database includes:\n`;
    response += `- ${categoryStats.totalColleges} top engineering colleges\n`;
    response += `- ${categoryStats.iits} IITs\n`;
    response += `- ${categoryStats.nits} NITs\n`;
    response += `- ${categoryStats.iiiTs} IIITs\n\n`;
    response += `🔍 Explore all colleges with search & filters:\n`;
    response += `- Resources page: /resources#colleges\n`;
    response += `- Engineering page: /engineering#colleges`;
    
    return response;
  }
  
  // Search by name
  const searchTerms = messageLower.match(/\b[a-z]{3,}\b/g);
  if (searchTerms && searchTerms.length > 0) {
    const searchResults = searchTopColleges(searchTerms[searchTerms.length - 1]);
    
    if (searchResults.length > 0) {
      let response = `Found these colleges matching your query:\n\n`;
      
      searchResults.slice(0, 3).forEach((college, index) => {
        response += `${index + 1}. ${formatCollegeForChat(college)}\n\n`;
      });
      
      response += `🔍 For complete college information: /resources#colleges`;
      return response;
    }
  }
  
  // Generic college response
  return `🎓 Engineering Colleges Database\n\n` +
         `We have comprehensive information on 100 top engineering colleges including:\n` +
         `- ${categoryStats.iits} IITs\n` +
         `- ${categoryStats.nits} NITs\n` +
         `- ${categoryStats.iiiTs} IIITs\n` +
         `- Government and Private institutions\n\n` +
         `📍 Search by state, category, or name:\n` +
         `- Full database with filters: /resources#colleges\n` +
         `- Engineering stream page: /engineering#colleges\n\n` +
         `💡 You can ask me:\n` +
         `- "Best engineering colleges in Maharashtra"\n` +
         `- "Top IITs for computer science"\n` +
         `- "NITs in South India"\n` +
         `- "Government colleges in Delhi"`;
}

/**
 * Enhance AI response with college information if relevant
 */
export function enhanceWithCollegeInfo(message, aiResponse) {
  // If AI response is short and query is about colleges, add college info
  if (isCollegeQuery(message) && aiResponse.length < 500) {
    const collegeInfo = handleCollegeQuery(message);
    return aiResponse + '\n\n' + collegeInfo;
  }
  
  return aiResponse;
}
