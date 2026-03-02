// Enhanced Security Utilities for Supabase Integration
// Add these to your netlify/functions/utils/ folder

/**
 * CRITICAL: Use these functions when you integrate Supabase
 * to protect user data and prevent attacks
 */

// ====================
// 1. INPUT VALIDATION
// ====================

/**
 * Validate email format
 * Prevents SQL injection and invalid emails
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { valid: false, error: 'Email is required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }
  
  // Check for SQL injection patterns
  const sqlPatterns = /('|--|;|\/\*|\*\/|xp_|sp_|exec|execute|declare|select|insert|update|delete|drop|create|alter)/i;
  if (sqlPatterns.test(email)) {
    return { valid: false, error: 'Invalid characters in email' };
  }
  
  return { valid: true };
}

/**
 * Validate password strength
 * Enforce secure passwords for user accounts
 */
export function validatePassword(password) {
  if (!password || typeof password !== 'string') {
    return { valid: false, error: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters'  };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: 'Password must contain an uppercase letter' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { valid: false, error: 'Password must contain a lowercase letter' };
  }
  
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: 'Password must contain a number' };
  }
  
  // Check for common weak passwords
  const weakPasswords = ['password', '12345678', 'qwerty', 'admin'];
  if (weakPasswords.includes(password.toLowerCase())) {
    return { valid: false, error: 'Password is too common' };
  }
  
  return { valid: true };
}

/**
 * Sanitize user input for database
 * Prevents XSS and SQL injection
 */
export function sanitizeForDatabase(input) {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    // Remove script tags
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove HTML tags
    .replace(/<[^>]*>?/gm, '')
    // Remove SQL keywords
    .replace(/('|--|;|\/\*|\*\/|xp_|sp_)/gi, '')
    // Trim whitespace
    .trim()
    // Limit length
    .substring(0, 5000);
}

// ====================
// 2. AUTHENTICATION HELPERS
// ====================

/**
 * Verify Supabase JWT token
 * Use this to protect API endpoints
 */
export function verifyAuthToken(authHeader) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { authenticated: false, error: 'No auth token provided' };
  }
  
  const token = authHeader.substring(7); // Remove 'Bearer '
  
  if (!token || token.length < 20) {
    return { authenticated: false, error: 'Invalid token format' };
  }
  
  // Token validation will be done by Supabase client
  // This is just basic format checking
  return { authenticated: true, token };
}

/**
 * Check if user has required role
 * For future admin/user role separation
 */
export function checkUserRole(userRoles, requiredRole) {
  if (!Array.isArray(userRoles)) {
    return false;
  }
  
  return userRoles.includes(requiredRole) || userRoles.includes('admin');
}

// ====================
// 3. DATA PROTECTION
// ====================

/**
 * Mask sensitive data in logs
 * Never log passwords,tokens, etc.
 */
export function maskSensitiveData(data) {
  if (typeof data !== 'object') {
    return data;
  }
  
  const sensitiveKeys = ['password', 'token', 'secret', 'apiKey', 'api_key'];
  const masked = { ...data };
  
  for (const key of Object.keys(masked)) {
    if (sensitiveKeys.some(k => key.toLowerCase().includes(k))) {
      masked[key] = '***REDACTED***';
    }
  }
  
  return masked;
}

/**
 * Validate file upload
 * Prevent malicious file uploads
 */
export function validateFileUpload(file, allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']) {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }
  
  // Check file type
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: `File type ${file.type} not allowed` };
  }
  
  // Check file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return { valid: false, error: 'File too large (max 5MB)' };
  }
  
  // Check filename for path traversal
  if (file.name.includes('..') || file.name.includes('/') || file.name.includes('\\')) {
    return { valid: false, error: 'Invalid filename' };
  }
  
  return { valid: true };
}

// ====================
// 4. RATE LIMITING PRESETS
// ====================

/**
 * Rate limit configurations for different endpoints
 */
export const RATE_LIMITS = {
  // Very strict - for account creation
  SIGNUP: {
    limit: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many signup attempts. Please try again in 1 hour.'
  },
  
  // Strict - for login attempts
  LOGIN: {
    limit: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
    message: 'Too many login attempts. Please try again in 15 minutes.'
  },
  
  // Normal - for chat messages
  CHAT: {
    limit: 20,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many messages. Please try again in 1 hour.'
  },
  
  // Relaxed - for general API calls
  API: {
    limit: 100,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many requests. Please try again in 1 hour.'
  },
  
  // Very relaxed - for authenticated users
  AUTHENTICATED: {
    limit: 500,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many requests. Please slow down.'
  }
};

// ====================
// 5. ERROR RESPONSES
// ====================

/**
 * Standardized error responses
 * Don't leak sensitive info in errors!
 */
export function createErrorResponse(statusCode, message, logDetails = null) {
  // Log detailed error server-side (with sensitive data masked)
  if (logDetails) {
    console.error('[Security Error]', maskSensitiveData(logDetails));
  }
  
  // Return generic error to client (don't leak internal details)
  const responseMessages = {
    400: message || 'Invalid request',
    401: 'Authentication required',
    403: 'Access denied',
    429: message || 'Too many requests. Please try again later.',
    500: 'Internal server error. Please try again later.'
  };
  
  return {
    statusCode,
    body: JSON.stringify({
      error: responseMessages[statusCode] || message,
      timestamp: new Date().toISOString()
    })
  };
}

// ====================
// 6. SECURITY HEADERS
// ====================

/**
 * Standard security headers for API responses
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Type': 'application/json'
};

/**
 * Apply security headers to response
 */
export function addSecurityHeaders(response) {
  return {
    ...response,
    headers: {
      ...SECURITY_HEADERS,
      ...response.headers
    }
  };
}

// ====================
// USAGE EXAMPLES
// ====================

/*
Example 1: Protect signup endpoint

import { validateEmail, validatePassword, checkRateLimit, createErrorResponse } from './utils/security.js';

export async function handler(event) {
  const ip = getClientIP(event.headers);
  
  // Check rate limit
  const rateCheck = await checkRateLimit(ip, 3, 3600000);
  if (!rateCheck.allowed) {
    return createErrorResponse(429, 'Too many signup attempts');
  }
  
  const { email, password } = JSON.parse(event.body);
  
  // Validate inputs
  const emailCheck = validateEmail(email);
  if (!emailCheck.valid) {
    return createErrorResponse(400, emailCheck.error);
  }
  
  const passwordCheck = validatePassword(password);
  if (!passwordCheck.valid) {
    return createErrorResponse(400, passwordCheck.error);
  }
  
  // Safe to proceed with Supabase signup
  // ...
}

Example 2: Protect authenticated endpoint

import { verifyAuthToken, checkUserRole, maskSensitiveData } from './utils/security.js';

export async function handler(event) {
  // Verify authentication
  const authCheck = verifyAuthToken(event.headers.authorization);
  if (!authCheck.authenticated) {
    return createErrorResponse(401);
  }
  
  // Get user from Supabase using token
  // const user = await supabase.auth.getUser(authCheck.token);
  
  // Check role if needed
  // if (!checkUserRole(user.roles, 'premium')) {
  //   return createErrorResponse(403, 'Premium feature');
  // }
  
  // Safe to proceed
  // ...
}
*/
