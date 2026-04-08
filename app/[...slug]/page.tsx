/**
 * Catch-all route handler (Server Component).
 *
 * Exports generateMetadata so Next.js renders <title>, <meta>, canonical,
 * and OG tags at SSR time — critical for Google indexing.
 *
 * Returns 404 for unknown slugs to prevent soft-404 / scaled-content-abuse
 * signals. Only known page patterns (chapters, questions, locations, etc.)
 * pass through.
 *
 * generateStaticParams pre-renders the top ~500 high-value pages as static HTML.
 */

import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { resolveSlugMetadata, isKnownSlug } from "@/lib/resolveSlugMetadata";
import CatchAllClient from "./CatchAllClient";

interface Props {
  params: Promise<{ slug: string[] }>;
}

/* Known page patterns render dynamically; unknown slugs → 404 */
export const dynamicParams = true;

/**
 * Cache rendered pages for 24 hours before revalidating.
 * 86400s = 1 day — content only changes on deployment anyway.
 */
export const revalidate = 86400;

/**
 * Pre-render the highest-priority pages for faster TTFB and crawl speed.
 */
export async function generateStaticParams() {
  const { CHAPTER_SLUGS } = await import("@/data/chapterData");
  const { FORMULA_SLUGS } = await import("@/data/formulaSheetData");
  const { getAllExamInfoSlugs } = await import("@/data/examInfoData");
  const { getAllDifferenceSlugs } = await import("@/data/differenceBetweenData");

  const EXAM_INFO_SLUGS = getAllExamInfoSlugs();
  const DIFFERENCE_SLUGS = getAllDifferenceSlugs();

  const SUBJECT_SLUGS = [
    'jee-physics-preparation', 'jee-chemistry-preparation', 'jee-mathematics-preparation',
    'neet-physics-preparation', 'neet-chemistry-preparation', 'neet-biology-preparation',
  ];
  const IMPORTANT_Q_SLUGS = [
    'jee-physics-important-questions', 'jee-chemistry-important-questions',
    'jee-mathematics-important-questions', 'neet-physics-important-questions',
    'neet-chemistry-important-questions', 'neet-biology-important-questions',
  ];

  const staticSlugs: string[] = [
    'jee-coaching', 'neet-coaching', 'jee-advanced-coaching', 'jee-main-coaching',
    'neet-ug-coaching', 'jee-dropper-coaching', 'neet-dropper-coaching',
    'jee-crash-course', 'neet-crash-course', 'foundation-coaching',
    'batch-vs-personal-coaching', 'online-vs-offline-jee-coaching',
    'kota-coaching-alternative',
    'best-jee-coaching-in-india',
    'mindpeak-vs-allen', 'mindpeak-vs-fiitjee', 'mindpeak-vs-resonance',
    'mindpeak-vs-physics-wallah', 'mindpeak-vs-unacademy', 'mindpeak-vs-vedantu',
    'mindpeak-vs-byjus', 'mindpeak-vs-aakash', 'mindpeak-vs-narayana',
    'mindpeak-vs-sri-chaitanya',
    'jee-practice', 'neet-practice', 'jee-pyq', 'neet-pyq',
    'jee-rank-predictor', 'neet-rank-predictor', 'study-plan',
    'jee-physics-coaching', 'jee-chemistry-coaching', 'jee-mathematics-coaching',
    'neet-physics-coaching', 'neet-chemistry-coaching', 'neet-biology-coaching',
    'jee-physics-mechanics', 'jee-physics-electrodynamics', 'jee-physics-optics',
    'jee-physics-thermodynamics', 'jee-physics-waves',
    'jee-chemistry-organic', 'jee-chemistry-inorganic', 'jee-chemistry-physical',
    'jee-math-algebra', 'jee-math-calculus', 'jee-math-geometry', 'jee-math-trigonometry',
    ...CHAPTER_SLUGS,
    ...SUBJECT_SLUGS,
    ...FORMULA_SLUGS,
    ...EXAM_INFO_SLUGS,
    ...DIFFERENCE_SLUGS,
    ...IMPORTANT_Q_SLUGS,
  ];

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
  const { slug } = await params;
  const full = slug.join('/');

  /* ── 301 redirects: topic / notes / study-guide → parent chapter ── */
  // Notes: {chapterSlug}/notes → /{chapterSlug}
  if (slug.length === 2 && slug[1] === 'notes') {
    permanentRedirect(`/${slug[0]}`);
  }
  // Topic paths: {chapterSlug}/{topicSlug} — check if it's a known topic path
  if (slug.length === 2) {
    const { TOPIC_PATHS } = await import("@/data/chapterData");
    if (TOPIC_PATHS.includes(full)) {
      permanentRedirect(`/${slug[0]}`);
    }
  }
  // Study guides: how-to-study-{topic}-for-{exam} → /{chapterSlug}
  if (full.startsWith('how-to-study-')) {
    const { parseStudyGuideSlug } = await import("@/lib/topicStudyGuides");
    const info = parseStudyGuideSlug(full);
    if (info) {
      permanentRedirect(`/${info.chapter.slug}`);
    }
  }

  /* ── 404 gate: reject unknown slugs to prevent soft-404 abuse ── */
  if (!isKnownSlug(slug)) {
    notFound();
  }

  const content = buildServerContent(slug);

  return (
    <>
      {/* Server-rendered content shell for crawlers — visible to Googlebot in initial HTML */}
      <div
        className="sr-only"
        aria-hidden="true"
        suppressHydrationWarning
      >
        <h1>{content.heading}</h1>
        <p>{content.description}</p>
        <p>MindPeak Institute offers personalized 1-on-1 JEE and NEET coaching with a 95% success rate. Our adaptive curriculum and dedicated mentors help students achieve their dream ranks.</p>
        <nav>
          <a href="/jee-coaching">JEE Coaching</a>
          <a href="/neet-coaching">NEET Coaching</a>
          <a href="/courses">All Courses</a>
          <a href="/jee-practice">JEE Practice Questions</a>
          <a href="/neet-practice">NEET Practice Questions</a>
          <a href="/jee-pyq">JEE Previous Year Questions</a>
          <a href="/neet-pyq">NEET Previous Year Questions</a>
          <a href="/free-trial">Free Trial Class</a>
        </nav>
      </div>
      <CatchAllClient />
    </>
  );
}

/**
 * Server-side content shell for crawlers.
 * Generates a readable summary from the slug so Googlebot sees real text
 * content in the initial HTML without needing JS execution.
 */
function buildServerContent(slug: string[]): { heading: string; description: string } {
  const full = slug.join('/');
  const prettyName = full.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Question pages
  if (full.startsWith('jee-physics-') || full.startsWith('jee-chemistry-') ||
      full.startsWith('jee-mathematics-') || full.startsWith('neet-biology-') ||
      full.startsWith('neet-physics-') || full.startsWith('neet-chemistry-')) {
    const exam = full.startsWith('neet') ? 'NEET' : 'JEE';
    if (full.includes('-pyq-')) {
      return {
        heading: `${exam} Previous Year Question`,
        description: `Solve this ${exam} previous year question with detailed step-by-step solution and explanation. Practice 10+ years of ${exam} PYQs for free at MindPeak Institute.`,
      };
    }
    return {
      heading: `${exam} Practice Question`,
      description: `Solve this ${exam} practice MCQ with instant answer reveal and step-by-step solution. 500+ free practice questions available at MindPeak Institute.`,
    };
  }

  // Location pages
  if (full.includes('coaching-in-')) {
    const city = full.split('-in-').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ?? '';
    const exam = full.startsWith('neet') ? 'NEET' : 'JEE';
    return {
      heading: `Best ${exam} Coaching in ${city}`,
      description: `Top-rated ${exam} coaching in ${city} by MindPeak Institute. Personalized 1-on-1 online coaching with expert mentors, adaptive curriculum, and 95% success rate. Book a free demo class today.`,
    };
  }

  // Chapter/topic pages
  if (slug.length === 2 && slug[1] === 'notes') {
    return {
      heading: `${slug[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} — Revision Notes`,
      description: `Complete revision notes with key concepts, formulas, and exam tips. Free study material by MindPeak Institute.`,
    };
  }

  return {
    heading: prettyName,
    description: `${prettyName} — Personalized JEE & NEET coaching by MindPeak Institute. Expert mentors, adaptive curriculum, 95% success rate.`,
  };
}
