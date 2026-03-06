"use client";

/**
 * QuestionSlugRouter — prefix-based lazy router for question pages.
 * Handles: questions, location pages, subject-city pages.
 */
import { lazy, Suspense, type ComponentType } from 'react';
import { usePathname } from 'next/navigation';
import { parseNEETPYQHubSlug } from '@/data/neet-pyq/hierarchy';

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
const SubjectCityPage = lr(() => import('./SubjectCityPage'));

// Regex patterns
const JEE_PRACTICE_RE = /^jee-(physics|chemistry|mathematics)-/;
const NEET_PRACTICE_RE = /^neet-(biology|physics|chemistry)-/;
const SUBJECT_CITY_RE = /^(jee|neet)-(physics|chemistry|mathematics|biology)-coaching-in-/;

const LazyFallback = () => (
  <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function QuestionSlugRouter() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '') || '';

  // Subject-city pages: jee-physics-coaching-in-delhi
  if (SUBJECT_CITY_RE.test(slug)) {
    return <Suspense fallback={<LazyFallback />}><SubjectCityPage /></Suspense>;
  }

  // NEET PYQ hub slugs
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
    return <Suspense fallback={<LazyFallback />}><NEETPYQQuestion /></Suspense>;
  }

  // JEE PYQ
  if (slug.startsWith('jee-pyq-')) return <Suspense fallback={<LazyFallback />}><JEEPYQQuestion /></Suspense>;
  // JEE Practice
  if (JEE_PRACTICE_RE.test(slug)) return <Suspense fallback={<LazyFallback />}><JEEPracticeQuestion /></Suspense>;
  // NEET Practice
  if (NEET_PRACTICE_RE.test(slug)) return <Suspense fallback={<LazyFallback />}><NEETPracticeQuestion /></Suspense>;

  // Location pages (fallback)
  return <Suspense fallback={<LazyFallback />}><LocationPage /></Suspense>;
}
