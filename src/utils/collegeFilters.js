/**
 * College Filtering and Search Utility Functions
 * Helper functions for filtering, searching, and querying college data
 */

import { colleges } from '../data/colleges'

/**
 * Get colleges by state
 * @param {string} state - State name (e.g., "Maharashtra", "Tamil Nadu")
 * @param {string} type - Optional type filter (e.g., "IIT", "NIT", "Government", "Private")
 * @returns {Array} Filtered colleges array
 */
export const getCollegesByState = (state, type = null) => {
  let filtered = colleges.filter(college => 
    college.state.toLowerCase() === state.toLowerCase()
  )
  
  if (type) {
    filtered = filtered.filter(college => {
      const typeLower = type.toLowerCase()
      
      // Check if type matches ownership
      if (college.ownership.toLowerCase().includes(typeLower)) {
        return true
      }
      
      // Check if type matches categories
      if (college.category.some(cat => cat.toLowerCase().includes(typeLower))) {
        return true
      }
      
      // Check if type matches college type
      if (college.type.toLowerCase().includes(typeLower)) {
        return true
      }
      
      return false
    })
  }
  
  return filtered
}

/**
 * Get top colleges by category
 * @param {string} category - Category name (e.g., "IIT", "NIT", "Government", "Private")
 * @param {number} limit - Maximum number of results (default: 10)
 * @returns {Array} Top colleges in the category
 */
export const getTopCollegesByCategory = (category, limit = 10) => {
  const categoryLower = category.toLowerCase()
  
  const filtered = colleges.filter(college => 
    college.category.some(cat => cat.toLowerCase().includes(categoryLower))
  )
  
  // Already sorted by rank, just return top N
  return filtered.slice(0, limit)
}

/**
 * Search colleges by query (name, city, or state)
 * @param {string} query - Search query string
 * @returns {Array} Matching colleges
 */
export const searchColleges = (query) => {
  if (!query || query.trim() === '') {
    return colleges
  }
  
  const queryLower = query.toLowerCase().trim()
  
  return colleges.filter(college => {
    return (
      college.name.toLowerCase().includes(queryLower) ||
      college.shortName.toLowerCase().includes(queryLower) ||
      college.city.toLowerCase().includes(queryLower) ||
      college.state.toLowerCase().includes(queryLower)
    )
  })
}

/**
 * Get colleges by ownership type
 * @param {string} ownership - Ownership type ("Government", "Private", "Government-Aided")
 * @returns {Array} Filtered colleges
 */
export const getCollegesByOwnership = (ownership) => {
  return colleges.filter(college => 
    college.ownership.toLowerCase().includes(ownership.toLowerCase())
  )
}

/**
 * Get colleges with score above threshold
 * @param {number} minScore - Minimum NIRF score
 * @returns {Array} Colleges with score >= minScore
 */
export const getCollegesByMinScore = (minScore) => {
  return colleges.filter(college => college.score >= minScore)
}

/**
 * Get top N colleges overall
 * @param {number} limit - Number of top colleges to return
 * @returns {Array} Top N colleges by rank
 */
export const getTopColleges = (limit = 10) => {
  return colleges.slice(0, limit)
}

/**
 * Get IIT colleges only
 * @returns {Array} All IIT colleges
 */
export const getIITs = () => {
  return colleges.filter(college => 
    college.category.includes('IIT')
  )
}

/**
 * Get NIT colleges only
 * @returns {Array} All NIT colleges
 */
export const getNITs = () => {
  return colleges.filter(college => 
    college.category.includes('NIT')
  )
}

/**
 * Get IIIT colleges only
 * @returns {Array} All IIIT colleges
 */
export const getIIITs = () => {
  return colleges.filter(college => 
    college.category.includes('IIIT')
  )
}

/**
 * Get government colleges
 * @returns {Array} All government colleges
 */
export const getGovernmentColleges = () => {
  return colleges.filter(college => 
    college.ownership.toLowerCase().includes('government')
  )
}

/**
 * Get private colleges
 * @returns {Array} All private colleges
 */
export const getPrivateColleges = () => {
  return colleges.filter(college => 
    college.ownership.toLowerCase().includes('private')
  )
}

/**
 * Get college by exact name match
 * @param {string} name - College name to search
 * @returns {Object|null} College object or null if not found
 */
export const getCollegeByName = (name) => {
  return colleges.find(college => 
    college.name.toLowerCase() === name.toLowerCase() ||
    college.shortName.toLowerCase() === name.toLowerCase()
  ) || null
}

/**
 * Get college by rank
 * @param {number} rank - NIRF rank
 * @returns {Object|null} College object or null if not found
 */
export const getCollegeByRank = (rank) => {
  return colleges.find(college => college.rank === rank) || null
}

/**
 * Get all unique states with colleges
 * @returns {Array} Array of state names
 */
export const getAllStates = () => {
  const statesSet = new Set(colleges.map(college => college.state))
  return Array.from(statesSet).sort()
}

/**
 * Get all unique cities with colleges
 * @returns {Array} Array of city names
 */
export const getAllCities = () => {
  const citiesSet = new Set(colleges.map(college => college.city))
  return Array.from(citiesSet).sort()
}

/**
 * Get college count by state
 * @returns {Object} Object with state names as keys and counts as values
 */
export const getCollegeCountByState = () => {
  const counts = {}
  colleges.forEach(college => {
    counts[college.state] = (counts[college.state] || 0) + 1
  })
  return counts
}

/**
 * Advanced search with multiple filters
 * @param {Object} filters - Filter object with optional properties
 * @param {string} filters.state - State name
 * @param {string} filters.category - Category (IIT, NIT, etc.)
 * @param {string} filters.ownership - Ownership type
 * @param {number} filters.minScore - Minimum score
 * @param {string} filters.query - Search query
 * @returns {Array} Filtered colleges
 */
export const advancedSearch = (filters = {}) => {
  let results = colleges
  
  // Filter by state
  if (filters.state) {
    results = results.filter(college => 
      college.state.toLowerCase() === filters.state.toLowerCase()
    )
  }
  
  // Filter by category
  if (filters.category) {
    const categoryLower = filters.category.toLowerCase()
    results = results.filter(college => 
      college.category.some(cat => cat.toLowerCase().includes(categoryLower))
    )
  }
  
  // Filter by ownership
  if (filters.ownership) {
    results = results.filter(college => 
      college.ownership.toLowerCase().includes(filters.ownership.toLowerCase())
    )
  }
  
  // Filter by minimum score
  if (filters.minScore) {
    results = results.filter(college => college.score >= filters.minScore)
  }
  
  // Filter by search query
  if (filters.query) {
    const queryLower = filters.query.toLowerCase().trim()
    results = results.filter(college => 
      college.name.toLowerCase().includes(queryLower) ||
      college.shortName.toLowerCase().includes(queryLower) ||
      college.city.toLowerCase().includes(queryLower)
    )
  }
  
  return results
}

/**
 * Get formatted college information for chatbot responses
 * @param {Object} college - College object
 * @returns {string} Formatted college information
 */
export const formatCollegeInfo = (college) => {
  return `${college.name} (${college.shortName})\n` +
         `📍 Location: ${college.city}, ${college.state}\n` +
         `🏆 NIRF Rank: ${college.rank}\n` +
         `🏛️ Ownership: ${college.ownership}\n` +
         `📊 NIRF Score: ${college.score}\n` +
         `🔗 Website: ${college.website}`
}

/**
 * Get top colleges by state with formatting
 * @param {string} state - State name
 * @param {number} limit - Maximum results (default: 5)
 * @returns {string} Formatted list of colleges
 */
export const getTopCollegesByStateFormatted = (state, limit = 5) => {
  const stateColleges = getCollegesByState(state)
  
  if (stateColleges.length === 0) {
    return `No engineering colleges found in ${state} in our current database.`
  }
  
  const topColleges = stateColleges.slice(0, limit)
  let response = `Top ${topColleges.length} Engineering Colleges in ${state}:\n\n`
  
  topColleges.forEach((college, index) => {
    response += `${index + 1}. ${college.shortName} (Rank ${college.rank})\n`
    response += `   📍 ${college.city} | ${college.ownership}\n`
    response += `   🔗 ${college.website}\n\n`
  })
  
  if (stateColleges.length > limit) {
    response += `... and ${stateColleges.length - limit} more colleges in ${state}`
  }
  
  return response
}
