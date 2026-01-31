// Rate limiting utility for Netlify Functions
// Uses Netlify Blobs when configured; otherwise allows all requests (e.g. local dev)
import { getStore } from '@netlify/blobs';

export async function checkRateLimit(identifier, limit = 10, windowMs = 3600000) {
  const key = `rl_${identifier}`;

  try {
    const store = getStore('rate-limits');
    const data = await store.get(key, { type: 'json' });
    const now = Date.now();
    
    if (!data) {
      await store.setJSON(key, { 
        count: 1, 
        resetAt: now + windowMs,
        firstRequest: now
      });
      return { 
        allowed: true, 
        remaining: limit - 1,
        resetIn: windowMs
      };
    }
    
    if (now > data.resetAt) {
      await store.setJSON(key, { 
        count: 1, 
        resetAt: now + windowMs,
        firstRequest: now
      });
      return { 
        allowed: true, 
        remaining: limit - 1,
        resetIn: windowMs
      };
    }
    
    if (data.count >= limit) {
      return { 
        allowed: false, 
        remaining: 0,
        resetIn: data.resetAt - now
      };
    }
    
    await store.setJSON(key, { 
      ...data, 
      count: data.count + 1 
    });
    
    return {
      allowed: true,
      remaining: limit - data.count,
      resetIn: data.resetAt - now
    };
  } catch (error) {
    // Blobs not configured (e.g. local dev without netlify dev), or store error: allow request
    console.warn('Rate limit unavailable (Blobs not configured or error):', error.message);
    return {
      allowed: true,
      remaining: limit - 1,
      resetIn: windowMs
    };
  }
}

export function getClientIP(headers) {
  return headers['x-forwarded-for'] || 
         headers['cf-connecting-ip'] || 
         headers['x-real-ip'] || 
         'unknown';
}

export function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return '';
  }
  
  // Remove HTML tags and limit length
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>?/gm, '')
    .trim()
    .substring(0, 1000);
}