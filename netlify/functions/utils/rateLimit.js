// Rate limiting utility for Netlify Functions
import { getStore } from '@netlify/blobs';

export async function checkRateLimit(identifier, limit = 10, windowMs = 3600000) {
  const store = getStore('rate-limits');
  const key = `rl_${identifier}`;
  
  try {
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
    console.error('Rate limit check failed:', error);
    // Fail open - allow request if rate limiting fails
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