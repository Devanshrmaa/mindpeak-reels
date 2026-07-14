/**
 * Server-safe Article/BlogPosting JSON-LD builder with author + reviewer
 * entities (E-E-A-T). Extracted from components/ReviewedBySchema.tsx so
 * server components can call it — that file is "use client", and client
 * modules can't have their functions invoked during server rendering.
 */

import { getAuthorForSubject, type Author } from '@/data/authorData';

const BASE = 'https://mindpeakinstitute.com';

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
      url: BASE,
    },
    description: author.bio,
    knowsAbout: author.subjects,
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
  };
}

export interface ReviewedByJsonLdOptions {
  /** Canonical page URL path (e.g. "/blog/jee-2025-paper-analysis") */
  pageUrl: string;
  /** Page headline / h1 */
  headline: string;
  /** Exam context for author resolution */
  exam: 'JEE' | 'NEET';
  /** Subject context for author resolution */
  subject: string;
  /** Override the default reviewer if needed */
  reviewer?: Author;
  /** Review date — pass a stable date (e.g. publishDate), never "today" */
  reviewDate?: string;
  /** Schema @type — defaults to "Article" */
  schemaType?: 'Article' | 'WebPage' | 'BlogPosting';
}

export function buildReviewedByJsonLd({
  pageUrl,
  headline,
  exam,
  subject,
  reviewer,
  reviewDate,
  schemaType = 'Article',
}: ReviewedByJsonLdOptions) {
  const author = reviewer ?? getAuthorForSubject(exam, subject, pageUrl);
  const date = reviewDate ?? new Date().toISOString().split('T')[0];

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
