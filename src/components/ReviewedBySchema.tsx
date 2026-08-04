"use client";

/**
 * ReviewedBySchema — Injects "last reviewed by" JSON-LD into the page head.
 *
 * Generates a schema.org Article or WebPage snippet with:
 * - `reviewedBy` → Person with verifiable credentials
 * - `dateModified` → review date (signals freshness)
 * - `author` → same or different Person
 *
 * Usage:
 *   <ReviewedBySchema
 *     pageUrl="/jee-physics-mechanics"
 *     headline="JEE Physics Mechanics Guide"
 *     exam="JEE"
 *     subject="Physics"
 *   />
 */

import { getAuthorForSubject, type Author } from '@/data/authorData';
import { CONTENT_ANCHOR } from '@/lib/sitemapUrls';

interface ReviewedBySchemaProps {
  /** Canonical page URL path (e.g. "/jee-physics-mechanics") */
  pageUrl: string;
  /** Page headline / h1 */
  headline: string;
  /** Exam context for author resolution */
  exam: 'JEE' | 'NEET';
  /** Subject context for author resolution */
  subject: string;
  /** Override the default reviewer if needed */
  reviewer?: Author;
  /** Override the review date (defaults to today) */
  reviewDate?: string;
  /** Schema @type — defaults to "Article" */
  schemaType?: 'Article' | 'WebPage' | 'BlogPosting';
}

function buildPersonSchema(author: Author) {
  return {
    '@type': 'Person' as const,
    name: author.name,
    jobTitle: author.credential,
    ...(author.institution
      ? { alumniOf: { '@type': 'EducationalOrganization' as const, name: author.institution } }
      : {}),
    worksFor: {
      '@type': 'Organization' as const,
      name: 'MindPeak Institute',
      url: 'https://mindpeakinstitute.com',
    },
    description: author.bio,
    knowsAbout: author.subjects,
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
  };
}

const BASE = 'https://mindpeakinstitute.com';

export default function ReviewedBySchema({
  pageUrl,
  headline,
  exam,
  subject,
  reviewer,
  reviewDate,
  schemaType = 'Article',
}: ReviewedBySchemaProps) {
  const author = reviewer ?? getAuthorForSubject(exam, subject);
  const date = reviewDate ?? CONTENT_ANCHOR;

  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline,
    author: buildPersonSchema(author),
    reviewedBy: buildPersonSchema(author),
    publisher: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/images/logo.jpeg`,
      },
    },
    dateModified: date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE}${pageUrl}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Standalone helper — returns the raw JSON-LD object for pages
 * that already manage their own <script> injection via SEOHead.
 */
export function buildReviewedByJsonLd({
  pageUrl,
  headline,
  exam,
  subject,
  reviewer,
  reviewDate,
  schemaType = 'Article',
}: Omit<ReviewedBySchemaProps, 'reviewer'> & { reviewer?: Author }) {
  const author = reviewer ?? getAuthorForSubject(exam, subject);
  const date = reviewDate ?? CONTENT_ANCHOR;

  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline,
    author: buildPersonSchema(author),
    reviewedBy: buildPersonSchema(author),
    publisher: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.jpeg` },
    },
    dateModified: date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}${pageUrl}` },
  };
}
