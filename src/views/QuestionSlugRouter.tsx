"use client";

/**
 * QuestionSlugRouter — prefix-based lazy router for question pages.
 * Handles: questions, location pages, subject-city pages, study guides.
 */
import { lazy, Suspense, type ComponentType } from 'react';
import { usePathname } from 'next/navigation';
import { parseNEETPYQHubSlug } from '@/data/neet-pyq/hierarchy';
import { getChapter as getJEEPracticeChapter } from '@/data/practice';
import { getPYQChapter } from '@/data/pyq';

function lr<T extends { default: ComponentType<any> }>(fn: () => Promise<T>) {
  return lazy(() => fn().catch(() => fn()));
}

const JEEPracticeQuestion = lr(() => import('./JEEPracticeQuestion'));
const JEEPracticeChapterHub = lr(() => import('./JEEPracticeChapterHub'));
const JEEPYQQuestion = lr(() => import('./JEEPYQQuestion'));
const JEEPYQChapterHub = lr(() => import('./JEEPYQChapterHub'));
const NEETPracticeQuestion = lr(() => import('./NEETPracticeQuestion'));
const NEETPYQQuestion = lr(() => import('./NEETPYQQuestion'));
const NEETPYQChapterHub = lr(() => import('./NEETPYQChapterHub'));
const NEETPYQUnitHub = lr(() => import('./NEETPYQUnitHub'));
const NEETPYQClassHub = lr(() => import('./NEETPYQClassHub'));
const LocationPage = lr(() => import('./LocationPage'));
const SubjectCityPage = lr(() => import('./SubjectCityPage'));
const TopicStudyGuide = lr(() => import('./TopicStudyGuide'));

// Hub slug detectors
const JEE_PRACTICE_HUB_RE = /^jee-practice-(physics|chemistry|mathematics)-(.+)$/;
const JEE_PYQ_HUB_RE = /^jee-pyq-(physics|chemistry|mathematics)-(.+)$/;

function isJEEPracticeHub(slug: string): boolean {
  const m = slug.match(JEE_PRACTICE_HUB_RE);
  if (!m) return false;
  return !!getJEEPracticeChapter(m[1], m[2]);
}

function isJEEPYQHub(slug: string): boolean {
  const m = slug.match(JEE_PYQ_HUB_RE);
  if (!m) return false;
  return !!getPYQChapter(m[1], m[2]);
}

// Regex patterns
const JEE_PRACTICE_RE = /^jee-(physics|chemistry|mathematics)-/;
const NEET_PRACTICE_RE = /^neet-(biology|physics|chemistry)-/;
const SUBJECT_CITY_RE = /^(jee|neet)-(physics|chemistry|mathematics|biology)-coaching-in-/;
const STUDY_GUIDE_RE = /^how-to-study-.+-for-(jee|neet)$/;

const LazyFallback = () => (
  <div className="min-h-screen bg-[hsl(225,43%,7%)] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function QuestionSlugRouter() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '') || '';

  // Study guide pages: how-to-study-{topic}-for-{exam}
  if (STUDY_GUIDE_RE.test(slug)) {
    return <Suspense fallback={<LazyFallback />}><TopicStudyGuide /></Suspense>;
  }

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

  // JEE PYQ — check chapter hub first, then question
  if (slug.startsWith('jee-pyq-')) {
    if (isJEEPYQHub(slug)) return <Suspense fallback={<LazyFallback />}><JEEPYQChapterHub /></Suspense>;
    return <Suspense fallback={<LazyFallback />}><JEEPYQQuestion /></Suspense>;
  }
  // JEE Practice — check chapter hub first, then question
  if (slug.startsWith('jee-practice-') || JEE_PRACTICE_RE.test(slug)) {
    if (isJEEPracticeHub(slug)) return <Suspense fallback={<LazyFallback />}><JEEPracticeChapterHub /></Suspense>;
    return <Suspense fallback={<LazyFallback />}><JEEPracticeQuestion /></Suspense>;
  }
  // JEE Practice (legacy pattern without "practice" prefix)
  if (JEE_PRACTICE_RE.test(slug)) return <Suspense fallback={<LazyFallback />}><JEEPracticeQuestion /></Suspense>;
  // NEET Practice
  if (NEET_PRACTICE_RE.test(slug)) return <Suspense fallback={<LazyFallback />}><NEETPracticeQuestion /></Suspense>;

  // Location pages (fallback)
  return <Suspense fallback={<LazyFallback />}><LocationPage /></Suspense>;
}
