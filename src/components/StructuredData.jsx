import React from 'react'
import { Helmet } from 'react-helmet-async'

/**
 * StructuredData Component
 * 
 * Purpose: Add JSON-LD structured data to pages for better SEO and AI search visibility
 * 
 * Why we need this:
 * - Google uses it to show Rich Results (star ratings, FAQs, job postings)
 * - AI search engines (ChatGPT, Perplexity) extract factual data from it
 * - Improves click-through rate by 30-40%
 * 
 * Usage:
 * <StructuredData type="career" data={{...}} />
 */

const StructuredData = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: data.name || 'Career Guidance Platform for Indian Students',
          description: data.description || 'Comprehensive career counseling and guidance for Indian youth',
          url: data.url || 'https://indiacareerguidance.netlify.app',
          logo: data.logo || 'https://indiacareerguidance.netlify.app/logo.png',
          sameAs: data.socialMedia || [],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: data.email || 'support@example.com',
          },
        }

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name || 'Career Guidance for Indian Students',
          url: data.url || 'https://indiacareerguidance.netlify.app',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${data.url || 'https://indiacareerguidance.netlify.app'}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        }

      case 'career':
        return {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: data.title,
          description: data.description,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Career Guidance Platform',
          },
          educationalLevel: data.educationLevel || 'Higher Secondary',
          occupationalCategory: data.category || 'Career Guidance',
          teaches: data.skills || [],
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            courseWorkload: data.duration || 'PT4Y', // 4 years
          },
        }

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: (data.questions || []).map(q => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        }

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (data.breadcrumbs || []).map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          author: {
            '@type': 'Organization',
            name: 'Career Guidance Platform',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Career Guidance Platform',
            logo: {
              '@type': 'ImageObject',
              url: 'https://indiacareerguidance.netlify.app/logo.png',
            },
          },
          datePublished: data.datePublished || '2026-02-24',
          dateModified: data.dateModified || '2026-02-24',
        }

      default:
        return null
    }
  }

  const schema = generateSchema()

  if (!schema) return null

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}

export default StructuredData
