/**
 * Catch-all route handler (Server Component).
 *
 * Exports generateMetadata so Next.js renders <title>, <meta>, canonical,
 * and OG tags at SSR time — critical for Google indexing.
 *
 * generateStaticParams pre-renders the top ~500 high-value pages as static HTML.
 */

import type { Metadata } from "next";
import { resolveSlugMetadata } from "@/lib/resolveSlugMetadata";
import CatchAllClient from "./CatchAllClient";

interface Props {
  params: Promise<{ slug: string[] }>;
}

/* Allow remaining 49,500+ pages to render dynamically */
export const dynamicParams = true;

/**
 * Pre-render the highest-priority pages for faster TTFB and crawl speed.
 * Chapters, subjects, coaching, exam info, comparisons — ~500 pages.
 */
export async function generateStaticParams() {
  const { CHAPTER_SLUGS } = await import("@/data/chapterData");
  const { SUBJECT_SLUGS } = await import("@/views/SubjectPage");
  const { FORMULA_SLUGS } = await import("@/views/FormulaSheet");
  const { getAllExamInfoSlugs } = await import("@/data/examInfoData");
  const { getAllDifferenceSlugs } = await import("@/data/differenceBetweenData");
  const { IMPORTANT_Q_SLUGS } = await import("@/views/ImportantQuestionsHub");

  const EXAM_INFO_SLUGS = getAllExamInfoSlugs();
  const DIFFERENCE_SLUGS = getAllDifferenceSlugs();
  const { IMPORTANT_Q_SLUGS } = await import("@/views/ImportantQuestionsHub");

  const staticSlugs: string[] = [
    // Core coaching pages
    'jee-coaching', 'neet-coaching', 'jee-advanced-coaching', 'jee-main-coaching',
    'neet-ug-coaching', 'jee-dropper-coaching', 'neet-dropper-coaching',
    'jee-crash-course', 'neet-crash-course', 'foundation-coaching',
    'batch-vs-personal-coaching', 'online-vs-offline-jee-coaching',
    'kota-coaching-alternative',
    // Comparisons
    'mindpeak-vs-allen', 'mindpeak-vs-fiitjee', 'mindpeak-vs-resonance',
    'mindpeak-vs-physics-wallah', 'mindpeak-vs-unacademy', 'mindpeak-vs-vedantu',
    'mindpeak-vs-byjus', 'mindpeak-vs-aakash', 'mindpeak-vs-narayana',
    'mindpeak-vs-sri-chaitanya',
    // Practice & PYQ hubs
    'jee-practice', 'neet-practice', 'jee-pyq', 'neet-pyq',
    // Tools
    'jee-rank-predictor', 'neet-rank-predictor', 'study-plan',
    // Subject coaching pages
    'jee-physics-coaching', 'jee-chemistry-coaching', 'jee-mathematics-coaching',
    'neet-physics-coaching', 'neet-chemistry-coaching', 'neet-biology-coaching',
    // Subject topic pages
    'jee-physics-mechanics', 'jee-physics-electrodynamics', 'jee-physics-optics',
    'jee-physics-thermodynamics', 'jee-physics-waves',
    'jee-chemistry-organic', 'jee-chemistry-inorganic', 'jee-chemistry-physical',
    'jee-math-algebra', 'jee-math-calculus', 'jee-math-geometry', 'jee-math-trigonometry',
    // All chapter slugs
    ...CHAPTER_SLUGS,
    // All subject preparation pages
    ...SUBJECT_SLUGS,
    // Formula sheets
    ...FORMULA_SLUGS,
    // Exam info pages
    ...EXAM_INFO_SLUGS,
    // Difference-between pages
    ...DIFFERENCE_SLUGS,
    // Important questions hubs
    ...IMPORTANT_Q_SLUGS,
  ];

  // Deduplicate
  const unique = [...new Set(staticSlugs)];

  return unique.map((s) => ({ slug: s.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    return resolveSlugMetadata(slug);
  } catch (err) {
    console.error("[generateMetadata] failed for catch-all route:", err);
    return {
      title: "MindPeak Institute",
      description: "Personalized JEE & NEET coaching by MindPeak Institute.",
    };
  }
}

export default async function CatchAllPage({ params }: Props) {
  await params;
  return <CatchAllClient />;
}
