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
import { lazy, Suspense, type ComponentType } from 'react';
import { usePathname } from 'next/navigation';
import { parseNEETPYQHubSlug } from '@/data/neet-pyq/hierarchy';

/** Retry wrapper matching App.tsx lazyRetry (handles chunk load failures) */
function lr<T extends { default: ComponentType<any> }>(fn: () => Promise<T>) {
  return lazy(() => fn().catch(() => fn()));
}

const JEEPracticeQuestion = lr(() => import('./JEEPracticeQuestion'));
const JEEPYQQuestion = lr(() => import('./JEEPYQQuestion'));
const NEETPracticeQuestion = lr(() => import('./NEETPracticeQuestion'));
const NEETPYQQuestion = lr(() => import('./NEETPYQQuestion'));
const NEETPYQChapterHub = lr(() => import('./NEETPYQChapterHub'));
const NEETPYQUnitHub = lr(() => import('./NEETPYQUnitHub'));
const NEETPYQClassHub = lr(() => import('./NEETPYQClassHub'));
const LocationPage = lr(() => import('./LocationPage'));

// Regex patterns for question slug matching
const JEE_PRACTICE_RE = /^jee-(physics|chemistry|mathematics)-/;
const NEET_PRACTICE_RE = /^neet-(biology|physics|chemistry)-/;

const LazyFallback = () => (
  <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function QuestionSlugRouter() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '') || '';

  // Check NEET PYQ hub slugs first (chapter/unit/class hubs)
  if (slug.startsWith('neet-pyq-')) {
    const hubInfo = parseNEETPYQHubSlug(slug);
    if (hubInfo) {
      switch (hubInfo.type) {
        case 'chapter':
          return <Suspense fallback={<LazyFallback />}><NEETPYQChapterHub /></Suspense>;
        case 'unit':
          return <Suspense fallback={<LazyFallback />}><NEETPYQUnitHub /></Suspense>;
        case 'class':
          return <Suspense fallback={<LazyFallback />}><NEETPYQClassHub /></Suspense>;
      }
    }
    // Not a hub slug — must be a question slug
    return <Suspense fallback={<LazyFallback />}><NEETPYQQuestion /></Suspense>;
  }

  // Check most-specific prefixes first (PYQ before general practice)
  if (slug.startsWith('jee-pyq-')) return <Suspense fallback={<LazyFallback />}><JEEPYQQuestion /></Suspense>;
  if (JEE_PRACTICE_RE.test(slug)) return <Suspense fallback={<LazyFallback />}><JEEPracticeQuestion /></Suspense>;
  if (NEET_PRACTICE_RE.test(slug)) return <Suspense fallback={<LazyFallback />}><NEETPracticeQuestion /></Suspense>;

  // Not a question slug — render LocationPage
  return <Suspense fallback={<LazyFallback />}><LocationPage /></Suspense>;
}
