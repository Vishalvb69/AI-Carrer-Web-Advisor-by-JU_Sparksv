# Medium Priority Tasks - Complete After Deployment

## Task 6: Setup Monitoring & Alerts

### 1. Google Search Console (FREE) - **DO THIS FIRST **

**Setup Steps:**
```
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter your Netlify URL
4. Verify ownership (choose DNS or HTML tag method)
5. Submit sitemap: https://your-site.netlify.app/sitemap.xml
```

**What to monitor:**
- Pages indexed (should be 45+ within 2 weeks)
- Search queries bringing users
- Click-through rates
- Mobile usability issues
- Core Web Vitals

**Set up alerts for:**
- Indexing errors
- Security issues
- Manual actions

---

### 2. UptimeRobot (FREE) - 5 min setup

**Why:** Get notified if your site goes down

**Setup:**
```
1. Go to: https://uptimerobot.com
2. Sign up (free plan = 50 monitors)
3. Add New Monitor:
   - Type: HTTP(S)
   - URL: https://your-site.netlify.app
   - Interval: 5 minutes
4. Add your email for alerts
```

**Expected:** 99.9% uptime with Netlify

---

### 3. Netlify Analytics (Built-in)

**Enable in Netlify Dashboard:**
```
1. Your Site → Analytics
2. Enable Analytics ($9/month or check free tier)
3. Monitor:
   - Bandwidth usage
   - Top pages
   - Traffic sources
   - 404 errors
```

**Free Alternative:** Google Analytics 4

---

### 4. GitHub Security Alerts (FREE)

**Enable:**
```
1. Your GitHub repo → Settings
2. Security & Analysis
3. Enable:
   ✅ Dependabot alerts
   ✅ Dependabot security updates
   ✅ Secret scanning
```

**Result:** Auto-PR when vulnerabilities found

---

### 5. Error Tracking - Sentry (FREE tier)

**Setup (Optional but recommended):**
```
1. Go to: https://sentry.io
2. Create project (React)
3. Install: npm install @sentry/react
4. Add to src/main.jsx:

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
  tracesSampleRate: 0.1,
});
```

**Catch errors users encounter!**

---

## Task 7: Optimize Meta Tags Per Page

### Current Status:
- ✅ Basic meta tags in `index.html`
- ❌ Same description for all pages
- ❌ No unique OG images

### Goal:
Each career page should have unique:
- `<title>`
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">`

### Implementation:

#### Step 1: Update StructuredData component to handle meta tags

```jsx
// Add to src/components/StructuredData.jsx
import { Helmet } from 'react-helmet-async'

// Add this function:
export const PageMeta = ({ title, description, ogImage, keywords }) => {
  const siteUrl = 'https://your-site-url.netlify.app';
  const fullTitle = title ? `${title} | Career Guidance Platform` : 'Career Guidance for Indian Students';
  
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || `${siteUrl}/og-default.jpg`} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}/og-default.jpg`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};
```

#### Step 2: Add to career pages

```jsx
import { PageMeta } from '../../components/StructuredData';

const ComputerScienceDetails = () => {
  return (
    <div>
      <PageMeta 
        title="Computer Science Engineering Career Guide"
        description="Complete guide to CSE: JEE exam, top colleges (IITs, NITs), salary (₹8-25 LPA), skills required, and career opportunities in India. Get admission tips and course details."
        keywords="computer science engineering, CSE in India, JEE main, IIT computer science, software engineer salary, BTech CSE"
        ogImage="https://your-site-url.netlify.app/og-career-cse.jpg"
      />
      {/* Rest of page */}
    </div>
  );
};
```

#### Step 3: Create OG Images (Optional but recommended)

**Tool:** https://www.canva.com  
**Size:** 1200 x 630px  
**Design:**
```
┌─────────────────────────────────┐
│  [Career Icon/Image]            │
│                                 │
│  Computer Science Engineering   │
│  ₹8-25 LPA  |  4 Years  |  JEE  │
│                                 │
│  Career Guidance Platform       │
└─────────────────────────────────┘
```

Save as: `public/og-career-cse.jpg`

---

### Priority Order for Meta Tags:

**High Traffic Pages (Do first):**
1. Homepage
2. Computer Science
3. MBBS/Doctor
4. Chartered Accountant (CA)
5. Data Scientist
6. Content Creator

**Description Templates:**

**For Engineering:**
```
"Complete guide to [Career Name]: JEE preparation, top colleges (IITs, NITs, IIIT), average salary (₹X-Y LPA), skills required, job opportunities, and admission process in India."
```

**For Medical:**
```
"[Career Name] complete guide: NEET exam pattern, top medical colleges (AIIMS, JIPMER), MBBS fees, salary range (₹X-Y LPA), career path, and admission requirements in India."
```

**For Commerce:**
```
"[Career Name] career guide: entrance exams, best colleges, average salary (₹X-Y LPA), job roles, skills needed, and how to become a [profession] in India."
```

**Keyword Research per Page:**

Use these free tools:
- Google Trends: Track seasonal interest
- Answer The Public: Find question keywords
- Google Search: Check "People also ask"

---

## Testing Medium Priority Changes

### Test Meta Tags:
```
1. Deploy changes
2. Share URL on WhatsApp/Facebook
3. Should show custom title, description, image
4. Use this tool: https://metatags.io
```

### Test Monitoring:
```
1. UptimeRobot: Wait for first ping
2. Google Search Console: Takes 24-48 hours
3. Sentry: Trigger test error to verify
```

---

## Expected Timeline

**Week 1 After Deployment:**
- [ ] Setup Google Search Console - 30 min
- [ ] Setup UptimeRobot - 10 min
- [ ] Enable GitHub security alerts - 5 min
- [ ] Submit sitemap to Google - 2 min

**Week 2:**
- [ ] Add meta tags to top 10 pages - 2 hours
- [ ] Create 3-5 OG images - 1 hour
- [ ] Setup Sentry (optional) - 30 min

**Week 3:**
- [ ] Monitor Google Search Console data
- [ ] Adjust meta descriptions based on CTR
- [ ] Add meta tags toremainingpages - 3 hours

**Week 4:**
- [ ] Review all monitoring dashboards
- [ ] Document any issues found
- [ ] Plan content expansion

---

## Success Metrics

### After 1 Month:
- ✅ 40+ pages indexed in Google
- ✅ 50-100 impressions in search
- ✅ No security alerts
- ✅ 99.9% uptime

### After 3 Months:
- ✅ 500+ impressions/month
- ✅ 20-50 clicks/month
- ✅ 0 downtime incidents
- ✅ All pages have unique meta tags

### After 6 Months:
- ✅ 5,000+ impressions/month
- ✅ 200-500 clicks/month
- ✅ Ranking for 10+ keywords
- ✅ Featured in AI search results

---

## Quick Commands Reference

```bash
# Build and test locally
npm run build
npm run dev

# Check dependencies
npm audit
npm outdated

# Deploy to Netlify (auto via Git)
git add .
git commit -m "Update meta tags for career pages"
git push
```

---

**Documentation Date:** February 24, 2026  
**Priority:** Medium (do after initial deployment)  
**Estimated Time:** 4-6 hours total spread over 4 weeks  

---

## Need Help?

- Google Search Console issues: https://support.google.com/webmasters
- Meta tags not showing: Use https://metatags.io to debug
- Monitoring setup: Check respective platform docs
- SEO questions: Review main SEO_SECURITY_SUMMARY.md

**Pro Tip:** Don't obsess over rankings in the first month. Focus on:
1. Getting pages indexed ✅
2. Fixing technical issues ✅
3. Creating quality content ✅
4. Building for users, not just search engines ✅

Rankings will follow! 📈
