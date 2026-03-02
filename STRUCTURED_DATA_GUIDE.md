# How to Add Structured Data to Career Pages

## Quick Guide for Developers

### Step 1: Import the component
```jsx
import StructuredData from '../../components/StructuredData'
```

### Step 2: Add inside your component's return statement
```jsx
const YourCareerPage = () => {
  return (
    <div>
      {/* Add these three schemas to EVERY career page */}
      
      {/* 1. Breadcrumb - helps Google understand navigation */}
      <StructuredData 
        type="breadcrumb" 
        data={{
          breadcrumbs: [
            { name: 'Home', url: 'https://your-site-url.netlify.app/' },
            { name: 'Stream Name', url: 'https://your-site-url.netlify.app/stream-name' },
            { name: 'Career Name', url: 'https://your-site-url.netlify.app/career/career-name' }
          ]
        }} 
      />
      
      {/* 2. Career Schema - tells Google about the course/career */}
      <StructuredData 
        type="career" 
        data={{
          title: 'Career Title - Degree Name',
          description: 'What students will learn and do in this career',
          category: 'Engineering|Medical|Commerce|Arts', // Pick one
          educationLevel: 'Undergraduate|Postgraduate|Diploma',
          duration: 'PT4Y', // 4 years (PT = Period Time, Y = Years)
          skills: ['Skill 1', 'Skill 2', 'Skill 3'] // List key skills
        }} 
      />
      
      {/* 3. Article Schema - SEO for the page content */}
      <StructuredData 
        type="article" 
        data={{
          title: 'Career Name Career Guide',
          description: 'Brief summary of what this page covers',
          datePublished: '2026-02-24',
          dateModified: '2026-02-24' // Update when page is modified
        }} 
      />

      {/* Rest of your page content */}
      <h1>Your Career Page</h1>
    </div>
  )
}
```

### Step 3: Update the URLs
Replace `your-site-url.netlify.app` with your actual Netlify URL throughout!

## Examples for Different Career Types

### For Engineering Careers
```jsx
category: 'Engineering',
educationLevel: 'Undergraduate',
duration: 'PT4Y', // 4 years
skills: ['Programming', 'Mathematics', 'Problem Solving']
```

### For Medical Careers
```jsx
category: 'Medical',
educationLevel: 'Undergraduate',
duration: 'PT5Y6M', // 5.5 years (including internship)
skills: ['Anatomy', 'Clinical Skills', 'Patient Care']
```

### For Commerce Careers
```jsx
category: 'Commerce',
educationLevel: 'Professional', // for CA, CS
duration: 'PT3Y', // 3 years typically
skills: ['Accounting', 'Finance', 'Business Law']
```

### For Arts/Creative Careers
```jsx
category: 'Arts',
educationLevel: 'Undergraduate',
duration: 'PT3Y', // 3 years
skills: ['Creative Thinking', 'Communication', 'Research']
```

## Priority Order (Add to these first)

High-traffic careers to prioritize:
1. ✅ Computer Science (DONE)
2. Doctor (MBBS)
3. Data Scientist/ML
4. Chartered Accountant (CA)
5. Content Creator
6. Mechanical Engineering
7. BBA
8. Psychology
9. Fashion Design
10. Professional Athlet

These pages will get the most traffic from search engines!

## Testing Your Structured Data

After adding to a page, test it:

1. Build the site: `npm run build`
2. Check for errors in console
3. After deployment, use Google's Rich Results Test:
   - Go to: https://search.google.com/test/rich-results
   - Enter your page URL
   - Look for "Valid" status

## Need Help?

If you get errors:
- Check that all quotes are matched
- Verify the breadcrumb URLs are correct
- Make sure skills array has square brackets []
- Ensure dates are in YYYY-MM-DD format
