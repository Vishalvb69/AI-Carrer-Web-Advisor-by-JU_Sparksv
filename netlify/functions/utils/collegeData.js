/**
 * College Data for Chatbot Queries
 * Simplified college information for backend chatbot responses
 */

// Top 20 engineering colleges for quick reference
export const topColleges = [
  { rank: 1, name: "IIT Madras", shortName: "IIT Madras", city: "Chennai", state: "Tamil Nadu", category: ["IIT", "Top 10"], website: "https://www.iitm.ac.in/" },
  { rank: 2, name: "IIT Delhi", shortName: "IIT Delhi", city: "New Delhi", state: "Delhi", category: ["IIT", "Top 10"], website: "https://home.iitd.ac.in/" },
  { rank: 3, name: "IIT Bombay", shortName: "IIT Bombay", city: "Mumbai", state: "Maharashtra", category: ["IIT", "Top 10"], website: "https://www.iitb.ac.in/" },
  { rank: 4, name: "IIT Kanpur", shortName: "IIT Kanpur", city: "Kanpur", state: "Uttar Pradesh", category: ["IIT", "Top 10"], website: "https://www.iitk.ac.in/" },
  { rank: 5, name: "IIT Kharagpur", shortName: "IIT Kharagpur", city: "Kharagpur", state: "West Bengal", category: ["IIT", "Top 10"], website: "https://www.iitkgp.ac.in/" },
  { rank: 6, name: "IIT Roorkee", shortName: "IIT Roorkee", city: "Roorkee", state: "Uttarakhand", category: ["IIT", "Top 10"], website: "https://www.iitr.ac.in/" },
  { rank: 7, name: "IIT Guwahati", shortName: "IIT Guwahati", city: "Guwahati", state: "Assam", category: ["IIT", "Top 10"], website: "https://www.iitg.ac.in/" },
  { rank: 8, name: "IIT Hyderabad", shortName: "IIT Hyderabad", city: "Hyderabad", state: "Telangana", category: ["IIT", "Top 10"], website: "https://www.iith.ac.in/" },
  { rank: 9, name: "NIT Trichy", shortName: "NIT Trichy", city: "Tiruchirappalli", state: "Tamil Nadu", category: ["NIT", "Top 10"], website: "https://www.nitt.edu/" },
  { rank: 10, name: "IIT Indore", shortName: "IIT Indore", city: "Indore", state: "Madhya Pradesh", category: ["IIT", "Top 10"], website: "https://www.iiti.ac.in/" },
  { rank: 11, name: "IIIT Hyderabad", shortName: "IIIT Hyderabad", city: "Hyderabad", state: "Telangana", category: ["IIIT", "Top 20"], website: "https://www.iiit.ac.in/" },
  { rank: 12, name: "NIT Karnataka", shortName: "NITK Surathkal", city: "Surathkal", state: "Karnataka", category: ["NIT", "Top 20"], website: "https://www.nitk.ac.in/" },
  { rank: 13, name: "NIT Rourkela", shortName: "NIT Rourkela", city: "Rourkela", state: "Odisha", category: ["NIT", "Top 20"], website: "https://www.nitrkl.ac.in/" },
  { rank: 14, name: "IIT BHU Varanasi", shortName: "IIT BHU", city: "Varanasi", state: "Uttar Pradesh", category: ["IIT", "Top 20"], website: "https://www.iitbhu.ac.in/" },
  { rank: 15, name: "Jadavpur University", shortName: "Jadavpur University", city: "Kolkata", state: "West Bengal", category: ["Government", "Top 20"], website: "http://www.jaduniv.edu.in/" },
  { rank: 16, name: "Anna University", shortName: "Anna University", city: "Chennai", state: "Tamil Nadu", category: ["Government", "Top 20"], website: "https://www.annauniv.edu/" },
  { rank: 17, name: "IIT Gandhinagar", shortName: "IIT Gandhinagar", city: "Gandhinagar", state: "Gujarat", category: ["IIT", "Top 20"], website: "https://www.iitgn.ac.in/" },
  { rank: 18, name: "NIT Warangal", shortName: "NIT Warangal", city: "Warangal", state: "Telangana", category: ["NIT", "Top 20"], website: "https://www.nitw.ac.in/" },
  { rank: 19, name: "Delhi Technological University", shortName: "DTU", city: "New Delhi", state: "Delhi", category: ["Government", "Top 20"], website: "http://www.dtu.ac.in/" },
  { rank: 20, name: "Vellore Institute of Technology", shortName: "VIT Vellore", city: "Vellore", state: "Tamil Nadu", category: ["Private", "Top 20"], website: "https://vit.ac.in/" }
];

// State-wise college counts
export const stateWiseStats = {
  "Maharashtra": { count: 12, topCollege: "IIT Bombay" },
  "Tamil Nadu": { count: 11, topCollege: "IIT Madras" },
  "Karnataka": { count: 8, topCollege: "NITK Surathkal" },
  "Uttar Pradesh": { count: 8, topCollege: "IIT Kanpur" },
  "Telangana": { count: 7, topCollege: "IIT Hyderabad" },
  "Delhi": { count: 5, topCollege: "IIT Delhi" },
  "West Bengal": { count: 5, topCollege: "IIT Kharagpur" },
  "Gujarat": { count: 4, topCollege: "IIT Gandhinagar" },
  "Rajasthan": { count: 3, topCollege: "MNIT Jaipur" },
  "Madhya Pradesh": { count: 3, topCollege: "IIT Indore" },
  "Odisha": { count: 2, topCollege: "NIT Rourkela" },
  "Assam": { count: 2, topCollege: "IIT Guwahati" },
  "Uttarakhand": { count: 2, topCollege: "IIT Roorkee" }
};

// Category statistics
export const categoryStats = {
  totalColleges: 100,
  iits: 23,
  nits: 31,
  iiiTs: 7,
  government: 85,
  private: 15
};

/**
 * Get top colleges by state
 */
export function getTopCollegesByState(state, limit = 3) {
  const stateColleges = topColleges.filter(c => 
    c.state.toLowerCase() === state.toLowerCase()
  );
  return stateColleges.slice(0, limit);
}

/**
 * Get all IITs from top 20
 */
export function getTopIITs() {
  return topColleges.filter(c => c.category.includes("IIT"));
}

/**
 * Get all NITs from top 20
 */
export function getTopNITs() {
  return topColleges.filter(c => c.category.includes("NIT"));
}

/**
 * Search colleges by name or city
 */
export function searchTopColleges(query) {
  const queryLower = query.toLowerCase();
  return topColleges.filter(c => 
    c.name.toLowerCase().includes(queryLower) ||
    c.shortName.toLowerCase().includes(queryLower) ||
    c.city.toLowerCase().includes(queryLower) ||
    c.state.toLowerCase().includes(queryLower)
  );
}

/**
 * Format college info for chat response
 */
export function formatCollegeForChat(college) {
  return `${college.shortName} (Rank #${college.rank})\n` +
         `📍 ${college.city}, ${college.state}\n` +
         `🔗 ${college.website}`;
}

/**
 * Get state statistics
 */
export function getStateStats(state) {
  return stateWiseStats[state] || null;
}
