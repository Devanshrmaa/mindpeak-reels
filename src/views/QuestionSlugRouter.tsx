"use client";

/**
 * QuestionSlugRouter — prefix-based lazy router for question pages.
 *
 * Instead of registering thousands of individual routes (which forces all
 * question data to be imported eagerly), this component matches URL prefixes
 * and lazy-loads the appropriate question page component on demand.
 *
 * If the slug doesn't match any question pattern, it falls back to LocationPage.
 */
import { lazy, type ComponentType } from 'react';
import { usePathname } from 'next/navigation';

/** Retry wrapper matching App.tsx lazyRetry (handles chunk load failures) */
function lr<T extends { default: ComponentType<any> }>(fn: () => Promise<T>) {
  return lazy(() => fn().catch(() => fn()));
}

const JEEPracticeQuestion = lr(() => import('./JEEPracticeQuestion'));
const JEEPYQQuestion = lr(() => import('./JEEPYQQuestion'));
const NEETPracticeQuestion = lr(() => import('./NEETPracticeQuestion'));
const NEETPYQQuestion = lr(() => import('./NEETPYQQuestion'));
const LocationPage = lr(() => import('./LocationPage'));

// Regex patterns for question slug matching
const JEE_PRACTICE_RE = /^jee-(physics|chemistry|mathematics)-/;
const NEET_PRACTICE_RE = /^neet-(biology|physics|chemistry)-/;

export default function QuestionSlugRouter() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '') || '';

  // Check most-specific prefixes first (PYQ before general practice)
  if (slug.startsWith('jee-pyq-')) return <JEEPYQQuestion />;
  if (slug.startsWith('neet-pyq-')) return <NEETPYQQuestion />;
  if (JEE_PRACTICE_RE.test(slug)) return <JEEPracticeQuestion />;
  if (NEET_PRACTICE_RE.test(slug)) return <NEETPracticeQuestion />;

  // Not a question slug — render LocationPage
  return <LocationPage />;
}
