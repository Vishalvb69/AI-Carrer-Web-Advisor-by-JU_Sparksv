# 🔒 SUPABASE SECURITY CHECKLIST

## Critical: Complete ALL items before going live with user accounts!

---

## ✅ 1. ROW LEVEL SECURITY (RLS) - MANDATORY!

**Why:** Without RLS, users can read/modify other users' data!

### Enable RLS on ALL tables:

```sql
-- Run this for EVERY table you create
ALTER TABLE your_table_name ENABLE ROW LEVEL SECURITY;
```

### Example Policies:

```sql
-- Users can only read their own data
CREATE POLICY "Users can read own data"
ON user_profiles
FOR SELECT
USING (auth.uid() = user_id);

-- Users can only update their own data
CREATE POLICY "Users can update own data"
ON user_profiles
FOR UPDATE
USING (auth.uid() = user_id);

-- Users can only insert their own data
CREATE POLICY "Users can insert own data"
ON user_profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own data
CREATE POLICY "Users can delete own data"
ON user_profiles
FOR DELETE
USING (auth.uid() = user_id);
```

**Test RLS:**
1. Create test account A
2. Create test account B
3. Try to access account B's data while logged in as A
4. Should get ZERO results!

---

## ✅ 2. API KEY SECURITY

### NEVER commit these to GitHub:

```bash
# .env.local (add to .gitignore!)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-key-here # NEVER expose this to frontend!
```

### In Netlify Dashboard:

1. Go to Site Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (for backend only!)

### Check .gitignore has:

```
.env
.env.local
.env.*.local
```

---

## ✅ 3. EMAIL VERIFICATION

### Enable in Supabase Dashboard:

1. Authentication → Settings
2. Enable "Email Confirmations"
3. Set "Confirm email" to REQUIRED

### Configure email templates:

```html
<!-- Supabase → Authentication → Email Templates → Confirm Signup -->
<h2>Welcome to Career Guidance Platform!</h2>
<p>Click below to verify your email:</p>
<a href="{{ .ConfirmationURL }}">Verify Email</a>
```

---

## ✅ 4. PASSWORD POLICIES

### In Supabase Dashboard → Authentication → Settings:

- ✅ Minimum password length: 8 characters
- ✅ Require uppercase: ON
- ✅ Require lowercase:ON
- ✅ Require numbers: ON
- ✅ Require special characters: OPTIONAL (recommended)

### Or enforce in code:

Use the `validatePassword()` function from `utils/security.js`!

---

## ✅ 5. RATE LIMITING

### For Signup:
```javascript
import { checkRateLimit } from './utils/rateLimit.js';
import { RATE_LIMITS } from './utils/security.js';

const rateCheck = await checkRateLimit(
  ip, 
  RATE_LIMITS.SIGNUP.limit,
  RATE_LIMITS.SIGNUP.windowMs
);
```

### For Login:
```javascript
const rateCheck = await checkRateLimit(
  `login_${email}`, // Use email to prevent account lockout
  RATE_LIMITS.LOGIN.limit,
  RATE_LIMITS.LOGIN.windowMs
);
```

---

## ✅ 6. CORS CONFIGURATION

### In netlify.toml:

```toml
[[headers]]
  for = "/api/*"
  [headers.values]
    # Update "*" to your actual domain after deployment!
    Access-Control-Allow-Origin = "https://your-site-url.netlify.app"
    Access-Control-Allow-Headers = "Content-Type, Authorization"
    Access-Control-Allow-Methods = "GET, POST, OPTIONS, PUT, DELETE"
```

**⚠️ Change `*` to your actual domain in production!**

---

##✅ 7. DATABASE SCHEMA SECURITY

### User Profiles Table Example:

```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  class_level TEXT, -- '10', '11', '12', 'graduate'
  stream TEXT, -- 'PCM', 'PCB', 'Commerce', 'Arts'
  career_interests TEXT[], -- array of career interests
  test_scores JSONB DEFAULT '{}'::jsonb,
  chat_history JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  CONSTRAINT unique_user_id UNIQUE(user_id)
);

-- Enable RLS!
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Add RLS policies (see section 1)
```

---

## ✅ 8. PROTECT SENSITIVE DATA

### What to NEVER store in database:

- ❌ Raw passwords (Supabase handles this)
- ❌ Credit card numbers
- ❌ Social security numbers
- ❌ API keys from other services

### What to encrypt before storing:

- 🔒 Parent phone numbers (if collected)
- 🔒 School name (if competitive data)
- 🔒 Exact test scores (if sensitive)

### Use Supabase Vault for secrets:

```sql
-- Store encrypted secrets
SELECT vault.create_secret('my-secret-value', 'my-secret-name');

-- Retrieve in function
SELECT vault.get_secret('my-secret-name');
```

---

## ✅ 9. SESSION MANAGEMENT

### Configure session duration:

```javascript
const { data, error } = await supabase.auth.getSession();

// Refresh session if expiring soon
if (data.session && needsRefresh(data.session)) {
  const { data: refreshed } = await supabase.auth.refreshSession();
}
```

### Auto logout on inactivity:

```javascript
let inactivityTimer;

function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  
  // Logout after 30 minutes of inactivity
  inactivityTimer = setTimeout(async () => {
    await supabase.auth.signOut();
    window.location.href = '/login?reason=inactivity';
  }, 30 * 60 * 1000);
}

// Reset timer on user activity
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);
```

---

## ✅ 10. MONITORING & ALERTS

### Setup in Supabase Dashboard:

1. **SQL Queries** → Monitor slow queries
2. **API Usage** → Watch for unusual spikes
3. **Authentication** → Track failed login attempts

### Log security events:

```javascript
async function logSecurityEvent(event) {
  await supabase.from('security_logs').insert({
    event_type: event.type, // 'failed_login', 'suspicious_activity'
    user_id: event.userId,
    ip_address: event.ip,
    details: event.details,
    timestamp: new Date().toISOString()
  });
}
```

---

## ✅ 11. BACKUP STRATEGY

### Enable Point-in-Time Recovery (PITR):

1. Supabase Dashboard → Database → Backups
2. Enable PITR (paid plans only)
3. Set retention period to 7+ days

### Manual backups:

```bash
# Export database
supabase db dump > backup-$(date +%Y%m%d).sql

# Schedule weekly backups
# (add to GitHub Actions or cron job)
```

---

## ✅ 12. GDPR / PRIVACY COMPLIANCE

### For Indian users (and EU if applicable):

**Privacy Policy must include:**
- What data you collect (email, name, career preferences)
- Why you collect it (personalized career guidance)
- How long you keep it
- How users can delete their data

**Implement data deletion:**

```javascript
// Allow users to delete their account
async function deleteUserAccount(userId) {
  // Delete user profile
  await supabase.from('user_profiles').delete().eq('user_id', userId);
  
  // Delete chat history
  await supabase.from('chat_history').delete().eq('user_id', userId);
  
  // Delete auth user (does NOT cascade automatically!)
  await supabase.auth.admin.deleteUser(userId);
}
```

---

## ✅ 13. TESTING CHECKLIST

Before launch, test:

- [ ] User can sign up with email
- [ ] Email verification works
- [ ] User CANNOT see other users' data
- [ ] User CAN update own profile
- [ ] Rate limiting blocks excessive requests
- [ ] Password reset works
- [ ] Session expires after timeout
- [ ] Logout works properly
- [ ] SQL injection attempts are blocked
- [ ] XSS attempts are blocked
- [ ] Invalid tokens are rejected

---

## ✅ 14. INCIDENT RESPONSE PLANSEE MAIN SECURITY PLAN for detailed procedures)

If user reports unauthorized access:

1. **Immediate:**
   - Reset user password
   - Revoke all sessions
   - Check security_logs for IP addresses

2. **Within 24 hours:**
   - Audit RLS policies
   - Check for data leaks
   - Notify affected users if needed

3. **Within 1 week:**
   - Review and patch vulnerability
   - Update security documentation

---

## 🚨 CRITICAL REMINDERS

### Before deploying with Supabase:

1. ✅ ALL tables have RLS enabled
2. ✅ API keys are in environment variables (NOT in code)
3. ✅ CORS is restricted to your domain
4. ✅ Email verification is REQUIRED
5. ✅ Rate limiting is enabled
6. ✅ Test with two separate accounts

### Red flags (investigate immediately):

- 🚩 Sudden spike in signups
- 🚩 Same IP creating multiple accounts
- 🚩 Failed login attempts from unknown IPs
- 🚩 Unusual database query patterns
- 🚩 API requests from unknown domains

---

## 📚 Additional Resources

- [Supabase Security Best Practices](https://supabase.com/docs/guides/auth/row-level-security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Netlify Security Docs](https://docs.netlify.com/security/)

---

**Last Updated:** February 24, 2026
**Review Frequency:** Monthly or after any security incident

---

## Quick Start Checklist

When you start Supabase integration:

Week 1:
- [ ] Create Supabase project
- [ ] Enable RLS on all tables
- [ ] Add environment variables to Netlify
- [ ] Test basic signup/login

Week 2:
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Configure email verification
- [ ] Create privacy policy

Week 3:
- [ ] Security audit with test accounts
- [ ] Setup monitoring alerts
- [ ] Document backup procedures
- [ ] Load testing

Week 4:
- [ ] Final security review
- [ ] Prepare incident response plan
- [ ] Soft launch with limited users
- [ ] Monitor for issues

**Only then → Full public launch! 🚀**
