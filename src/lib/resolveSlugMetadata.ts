/**
 * Server-side metadata resolver for the catch-all route.
 * CTR-optimized: year tags, power words, action verbs, category OG images.
 */

import { CHAPTER_SLUGS, TOPIC_PATHS } from '@/data/chapterData';
import { FORMULA_SLUGS } from '@/data/formulaSheetData';
import { parseSubjectCitySlug, buildSubjectCityPage } from '@/data/subjectCityData';

/**
 * Server-safe slug lists — inlined to avoid importing from "use client" modules
 * (SubjectPage.tsx, ImportantQuestionsHub.tsx) which crash Turbopack SSR builds.
 */
const SUBJECT_SLUGS: string[] = [
  'jee-physics-preparation', 'jee-chemistry-preparation', 'jee-mathematics-preparation',
  'neet-physics-preparation', 'neet-chemistry-preparation', 'neet-biology-preparation',
  // Rendered by SubjectPage (see SUBJECTS map in src/views/SubjectPage.tsx);
  // they were dropped from this list at some point, which 404'd two real,
  // sitemap-listed, internally-linked pages.
  'jee-mock-test-strategy', 'neet-mock-test-strategy',
];
const IMPORTANT_Q_SLUGS: string[] = [
  'jee-physics-important-questions', 'jee-chemistry-important-questions',
  'jee-mathematics-important-questions', 'neet-physics-important-questions',
  'neet-chemistry-important-questions', 'neet-biology-important-questions',
];
import { parsePracticeSlug, getQuestion, subjectBanks } from '@/data/practice';
import { parsePYQSlug, getPYQuestion, pyqSubjectBanks } from '@/data/pyq';
import { parseNEETPracticeSlug, getNEETPracticeQuestion, neetSubjectBanks } from '@/data/neet-practice';
import { parseNEETPYQSlug, getNEETPYQuestion, neetPyqSubjectBanks } from '@/data/neet-pyq';
import { parseNEETPYQHubSlug, getUnitBySlug } from '@/data/neet-pyq/hierarchy';
import { getSEOPage } from '@/data/seoPageData';
import { chapters, getTopicInfo } from '@/data/chapterData';
import { resolveOgImageMeta } from '@/lib/ogImage';
import { parseStudyGuideSlug, buildStudyGuide } from '@/lib/topicStudyGuides';
import { isRemovedDoorwaySlug } from '@/lib/removedSlugs';
import { isServedCityCoachingSlug } from '@/data/cityConsolidation';
import { INDEXABLE_CITY_META } from '@/lib/indexableCities';
import { parseStateHubSlug } from '@/data/stateHubData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { getExamInfoPage } from '@/data/examInfoData';
import { getDifferencePair } from '@/data/differenceBetweenData';
import { getCounsellingPage } from '@/data/counsellingData';
import type { Metadata } from 'next';

const BASE = 'https://mindpeakinstitute.com';
const YEAR = CURRENT_EXAM_YEAR;

/**
 * Hand-curated T1 city pages that are safe to index live in
 * `@/lib/indexableCities` — shared with `proxy.ts` so the indexable set
 * stays identical between the rendered `<meta robots>` tag and the HTTP
 * `X-Robots-Tag` header. All 472 auto-generated expansion cities and every
 * subject-city combo remain noindexed.
 */

/**
 * Pattern-level check: does this slug match ANY known page type?
 * Used by the server component to return 404 for truly unknown URLs.
 * Prevents soft-404 / scaled-content-abuse signals to Google.
 */
export function isKnownSlug(slugSegments: string[]): boolean {
  if (slugSegments.length === 0) return false;
  const slug = slugSegments.join('/');

  // Doorway URLs serving 410 Gone via proxy.ts — reject here too so any
  // request that bypasses the proxy (preview, SSG fallback) returns 404.
  if (isRemovedDoorwaySlug(slug)) return false;

  // Two-segment: notes or topic pages
  if (slugSegments.length === 2) {
    if (slugSegments[1] === 'notes') return true;
    return TOPIC_PATHS.includes(slug);
  }
  // 3+ segments are not valid
  if (slugSegments.length > 2) return false;

  // Single segment — static data lookups (fast)
  if (SUBJECT_SLUGS.includes(slug)) return true;
  if (FORMULA_SLUGS.includes(slug)) return true;
  if (CHAPTER_SLUGS.includes(slug)) return true;
  if (IMPORTANT_Q_SLUGS.includes(slug)) return true;
  if (getSEOPage(slug)) return true;
  if (getExamInfoPage(slug)) return true;
  if (getDifferencePair(slug)) return true;
  if (getCounsellingPage(slug)) return true;

  // Dynamic patterns — known URL prefixes
  if (slug.startsWith('jee-pyq-')) return true;
  if (slug.startsWith('neet-pyq-')) return true;
  if (slug.startsWith('jee-practice-')) return true;
  if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) return true;
  if (/^neet-(biology|physics|chemistry)-/.test(slug)) return true;
  // City coaching pages — only REAL cities/hubs are served. A blanket
  // `includes('coaching-in-')` previously accepted ANY slug, serving a live
  // HTTP 200 doorway page for fake cities (e.g. /jee-coaching-in-fakecity-xyz)
  // — the exact soft-404 / scaled-content abuse pattern the March 2026 Spam
  // Update penalised. Validate against the real city/hub set instead.
  if (slug.includes('coaching-in-')) return isServedCityCoachingSlug(slug);
  if (/^how-to-study-.+-for-(jee|neet)$/.test(slug)) return true;

  return false;
}

/* ── hreflang helper — adds en-IN + x-default to every page ── */
function withHreflang(meta: Metadata, canonical: string): Metadata {
  return {
    ...meta,
    alternates: {
      ...meta.alternates,
      canonical,
      languages: {
        'en-IN': canonical,
        'x-default': canonical,
      },
    },
  };
}

/* ── helpers ── */
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const diffLabel = (d: string) => d === 'easy' ? 'Easy' : d === 'medium' ? 'Medium' : 'Hard';
const examFromSlug = (s: string) => s.includes('neet') ? 'NEET' : 'JEE';

function resolveKind(slug: string): 'subject' | 'chapter' | 'topic' | 'formula' | 'question' | 'seo-landing' {
  if (slug.includes('/')) {
    return TOPIC_PATHS.includes(slug) ? 'topic' : 'question';
  }
  if (SUBJECT_SLUGS.includes(slug)) return 'subject';
  if (FORMULA_SLUGS.includes(slug)) return 'formula';
  if (CHAPTER_SLUGS.includes(slug)) return 'chapter';
  const seo = getSEOPage(slug);
  if (seo) return 'seo-landing';
  return 'question';
}

/* ── Main export ── */
export function resolveSlugMetadata(slugSegments: string[]): Metadata {
  try {
    const meta = _resolve(slugSegments);
    const canonical = `${BASE}/${slugSegments.join('/')}`;
    return withHreflang(meta, canonical);
  } catch (err) {
    console.error('[resolveSlugMetadata] Error for slug:', slugSegments.join('/'), err);
    const fallbackSlug = slugSegments.join('/');
    const prettyName = fallbackSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return {
      title: `${prettyName} | MindPeak Institute`,
      description: `${prettyName} — Personalized JEE & NEET coaching. Expert mentors, free demo class.`,
      alternates: { canonical: `${BASE}/${fallbackSlug}` },
    };
  }
}

function _resolve(slugSegments: string[]): Metadata {
  const slug = slugSegments.join('/');
  const kind = resolveKind(slug);
  const canonical = `${BASE}/${slug}`;
  const og = resolveOgImageMeta(slug);

  // State regional hubs — indexable, unique per-state metadata (recovery action #4).
  const stateHub = parseStateHubSlug(slug);
  if (stateHub) {
    const { exam, hub } = stateHub;
    const isJEE = exam === 'JEE';
    const boardShort = hub.board.split(' &')[0];
    const colleges = (isJEE ? hub.engColleges : hub.medColleges).slice(0, 2).join(' & ');
    // Dual-exam states get the state exam in the title (real CTR query: "MHT-CET coaching", "KCET and JEE")
    const title = isJEE && hub.stateExamName
      ? `Best JEE Coaching in ${hub.state} ${YEAR} — ${hub.stateExamName} + JEE 1-on-1 | MindPeak`
      : `Best ${exam} Coaching in ${hub.state} ${YEAR} — 1-on-1 Online | MindPeak`;
    const clampWord = (s: string) => (s.length <= 160 ? s : s.slice(0, 160).replace(/\s+\S*$/, ''));
    const description = clampWord(
      isJEE
        ? hub.stateExamName
          ? `1-on-1 online JEE coaching for ${hub.state} students. ${hub.stateExamName} + JEE Main in one plan, ${boardShort} to JEE bridge, targeting ${colleges}. Free demo.`
          : `1-on-1 online JEE coaching for ${hub.state} students. ${boardShort} to JEE Main & Advanced bridge, targeting ${colleges}. Book a free demo class.`
        : `1-on-1 online NEET coaching for ${hub.state} students. ${boardShort} biology to NCERT precision, targeting ${colleges}. State-quota strategy included. Free demo.`,
    );
    const topCities = hub.cities.slice(0, 3);
    const keywords = [
      `${exam} coaching in ${hub.state}`,
      `best ${exam} coaching ${hub.state}`,
      `online ${exam} coaching ${hub.state}`,
      `1-on-1 ${exam} coaching ${hub.state}`,
      `${exam} preparation ${hub.state}`,
      ...(isJEE && hub.stateExamName
        ? [`${hub.stateExamName} coaching`, `${hub.stateExamName} and JEE preparation`]
        : []),
      `${boardShort} to ${exam} preparation`,
      ...topCities.map((c) => `${exam} coaching ${c}`),
      'MindPeak Institute',
    ];
    return {
      title,
      description,
      keywords,
      alternates: { canonical, languages: { 'en-IN': canonical, 'x-default': canonical } },
      openGraph: { ...og, url: canonical, title, description, locale: 'en_IN', type: 'website' },
      twitter: { card: 'summary_large_image', title, description },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
      },
      other: { 'geo.region': 'IN', 'geo.placename': hub.state },
    };
  }

  /*
   * Indexable reference-content families. These pages are listed in
   * sitemap.xml, but previously had no branch here and fell through to the
   * noindex fallback — GSC URL Inspection (2026-06-10) showed all 50+ of
   * them "Excluded by 'noindex' tag" while being advertised as priority
   * 0.6–0.75 sitemap URLs. Omitting `robots` = indexable default.
   */
  const examInfo = getExamInfoPage(slug);
  if (examInfo) {
    return {
      title: examInfo.title,
      description: examInfo.description.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical, title: examInfo.title },
    };
  }

  const diffPair = getDifferencePair(slug);
  if (diffPair) {
    const examLabel = diffPair.exam === 'Both' ? 'JEE & NEET' : diffPair.exam;
    const title = `Difference Between ${diffPair.term1} and ${diffPair.term2} — ${diffPair.subject} (${examLabel}) | MindPeak`;
    return {
      title,
      description: diffPair.intro.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical, title },
    };
  }

  const counselling = getCounsellingPage(slug);
  if (counselling) {
    return {
      title: counselling.title,
      description: counselling.description.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical, title: counselling.title },
    };
  }

  if (IMPORTANT_Q_SLUGS.includes(slug)) {
    const exam = examFromSlug(slug);
    const subj = slug.replace(/^(jee|neet)-/, '').replace(/-important-questions$/, '').replace(/\b\w/g, c => c.toUpperCase());
    const title = `${exam} ${subj} Important Questions ${YEAR} — Chapter-wise with Solutions | MindPeak`;
    return {
      title,
      description: `Most important ${exam} ${subj} questions for ${YEAR}, selected chapter-wise from PYQ trends. Free practice with step-by-step solutions.`.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical, title },
    };
  }

  if (slug === 'jee-mock-test-strategy' || slug === 'neet-mock-test-strategy') {
    const exam = examFromSlug(slug);
    const title = `${exam} Mock Test Strategy — How to Analyze & Improve Scores | MindPeak`;
    return {
      title,
      description: `Master ${exam} mock test strategy. Learn how to analyze mistakes, manage time, and improve scores. Expert tips from MindPeak mentors.`.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical, title },
    };
  }

  switch (kind) {
    /* ─── Subject Pages ─── */
    case 'subject': {
      const exam = examFromSlug(slug);
      const subj = slug.replace(/^(jee|neet)-/, '').replace(/-preparation$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return {
        title: `${exam} ${subj} ${YEAR} — Complete Syllabus, PYQs & Free Practice | MindPeak`,
        description: `Master ${exam} ${subj} ${YEAR}. Chapter-wise syllabus, 500+ PYQs, free MCQs, formula sheets & study tips. Start practising now.`,
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
      };
    }

    /* ─── Chapter Pages ─── */
    case 'chapter': {
      const ch = chapters.find(c => c.slug === slug);
      const title = ch
        ? `${ch.chapter} for ${ch.exam} ${YEAR} — Notes, Formulas & ${ch.pyqCount}+ PYQs [Free]`
        : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const desc = ch
        ? `Master ${ch.chapter} (${ch.exam} ${ch.subject}). Topic-wise notes, ${ch.keyFormulas.length}+ formulas, PYQs from last 10 years & 100+ free MCQs. Start now.`
        : `Study this chapter with notes, formulas, PYQs & practice MCQs. Free resources by MindPeak.`;
      return { title, description: desc.slice(0, 160), alternates: { canonical }, openGraph: { ...og, url: canonical } };
    }

    /* ─── Topic Pages ─── */
    case 'topic': {
      const [chapterSlug, topicSlug] = slug.split('/');
      const info = getTopicInfo(chapterSlug, topicSlug);
      if (info) {
        return {
          title: `${info.topicName} (${info.chapter.exam} ${YEAR}) — Key Formulas, Mistakes & MCQs`,
          description: `Learn ${info.topicName} for ${info.chapter.exam} ${info.chapter.subject} ${YEAR}. Key concepts, must-know formulas, common mistakes & free practice MCQs.`.slice(0, 160),
          alternates: { canonical },
          openGraph: { ...og, url: canonical },
        };
      }
      const exam = examFromSlug(slug);
      return {
        title: `${topicSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} — ${exam} ${YEAR} Topic Guide`,
        description: `Study this topic with detailed notes, formulas & practice questions. Free ${exam} prep by MindPeak.`,
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
      };
    }

    /* ─── Formula Sheets ─── */
    case 'formula': {
      const exam = examFromSlug(slug);
      const subj = slug.replace(/^(jee|neet)-/, '').replace(/-formula-sheet$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return {
        title: `${exam} ${subj} Formula Sheet ${YEAR} — All Formulas PDF [Free Download]`,
        description: `Download ${exam} ${subj} formula sheet ${YEAR}. All important formulas in one PDF — quick revision for exam day. 100% free.`.slice(0, 160),
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
      };
    }

    /* ─── SEO Landing Pages ─── */
    case 'seo-landing': {
      const page = getSEOPage(slug);
      if (!page) {
        const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        return { title: `${prettyName} ${YEAR} | MindPeak`, description: `${prettyName} by MindPeak Institute ${YEAR}.`, alternates: { canonical } };
      }
      // Append year if not already present
      const title = page.title.includes(String(YEAR)) ? page.title : `${page.title} ${YEAR}`;
      return {
        title,
        description: page.description.slice(0, 160),
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
      };
    }

    /* ─── Question Pages ─── */
    case 'question':
    default:
      return resolveQuestionMetadata(slug, canonical, og);
  }
}

/* ── Question metadata sub-resolver ── */
function resolveQuestionMetadata(slug: string, canonical: string, og: ReturnType<typeof resolveOgImageMeta>): Metadata {
  // 1. JEE PYQ
  if (slug.startsWith('jee-pyq-')) {
    const params = parsePYQSlug(slug);
    if (params) {
      const q = getPYQuestion(params);
      const bank = pyqSubjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const subj = bank?.subject ?? cap(params.subject);
      const chName = ch?.name ?? params.chapter;
      const examType = q?.exam === 'advanced' ? 'Advanced' : 'Main';
      return {
        title: `JEE ${examType} ${q?.year ?? ''} ${subj} PYQ: ${chName} Q${params.questionIndex} — Solution & Explanation`,
        description: `Solve JEE ${examType} ${q?.year ?? ''} ${subj} PYQ on ${chName}. Instant answer + step-by-step solution. Practice 10+ years of JEE PYQs free.`.slice(0, 160),
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
        // No `<meta robots>`: these question pages are ISR-cached and served
        // bot-agnostically, so robots is decided per-UA by proxy.ts via the
        // `X-Robots-Tag` header (Bing → index, Google/others → noindex).
        // See src/lib/bingIndexing.ts (isBingExclusiveThinPage must match the
        // same branches used here).
      };
    }
  }

  // 2. NEET PYQ (hub slugs first, then question slugs)
  if (slug.startsWith('neet-pyq-')) {
    const hubInfo = parseNEETPYQHubSlug(slug);
    if (hubInfo) {
      const bank = neetPyqSubjectBanks.find(b => b.slug === hubInfo.subjectSlug);
      const subj = bank?.subject ?? cap(hubInfo.subjectSlug);
      if (hubInfo.type === 'class') {
        return {
          title: `NEET ${subj} Class ${hubInfo.classLevel} PYQ ${YEAR} — Chapter-wise Previous Year Questions [Free]`,
          description: `All NEET ${subj} Class ${hubInfo.classLevel} PYQs (last 10 years). Unit-wise & chapter-wise with solutions. Solve free.`.slice(0, 160),
          alternates: { canonical },
          openGraph: { ...og, url: canonical },
        };
      }
      if (hubInfo.type === 'unit') {
        const unit = getUnitBySlug(hubInfo.subjectSlug, hubInfo.unitSlug!);
        const unitName = unit?.unitName ?? hubInfo.unitSlug;
        return {
          title: `NEET ${subj} PYQ: ${unitName} ${YEAR} — All Chapters [Free Solutions]`,
          description: `Solve NEET ${subj} PYQs from ${unitName}. Chapter-wise questions with NCERT-based solutions. 100% free.`.slice(0, 160),
          alternates: { canonical },
          openGraph: { ...og, url: canonical },
        };
      }
      if (hubInfo.type === 'chapter') {
        const ch = bank?.chapters.find(c => c.slug === hubInfo.chapterSlug);
        const chName = ch?.name ?? hubInfo.chapterSlug ?? '';
        return {
          title: `NEET ${subj} PYQ: ${chName} ${YEAR} — ${ch?.questions.length ?? '20'}+ Questions [Free]`,
          description: `Solve ${ch?.questions.length ?? '20'}+ NEET ${subj} PYQs on ${chName}. Year-wise questions with detailed NCERT solutions. Start now.`.slice(0, 160),
          alternates: { canonical },
          openGraph: { ...og, url: canonical },
        };
      }
    }

    const params = parseNEETPYQSlug(slug);
    if (params) {
      const q = getNEETPYQuestion(params);
      const bank = neetPyqSubjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const subj = bank?.subject ?? cap(params.subject);
      const chName = ch?.name ?? params.chapter;
      return {
        title: `NEET ${q?.year ?? ''} ${subj} PYQ: ${chName} Q${params.questionIndex} — Solution & Explanation`,
        description: `Solve NEET ${q?.year ?? ''} ${subj} question on ${chName}. Instant answer + NCERT-based solution. Practice 10+ years of NEET PYQs free.`.slice(0, 160),
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
        // No `<meta robots>`: these question pages are ISR-cached and served
        // bot-agnostically, so robots is decided per-UA by proxy.ts via the
        // `X-Robots-Tag` header (Bing → index, Google/others → noindex).
        // See src/lib/bingIndexing.ts (isBingExclusiveThinPage must match the
        // same branches used here).
      };
    }
  }

  // 3. JEE Practice
  if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) {
    const params = parsePracticeSlug(slug);
    if (params) {
      const bank = subjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const topic = ch?.topics.find(t => t.slug === params.topic);
      const subj = bank?.subject ?? cap(params.subject);
      const topicName = topic?.name ?? params.topic;
      const diff = diffLabel(params.difficulty);
      return {
        title: `JEE ${subj} MCQ: ${topicName} [${diff}] — Solve & Check Answer`,
        description: `Solve this ${diff} JEE ${subj} MCQ on ${topicName}. Instant answer reveal + step-by-step solution. 500+ free practice questions.`.slice(0, 160),
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
        // No `<meta robots>`: these question pages are ISR-cached and served
        // bot-agnostically, so robots is decided per-UA by proxy.ts via the
        // `X-Robots-Tag` header (Bing → index, Google/others → noindex).
        // See src/lib/bingIndexing.ts (isBingExclusiveThinPage must match the
        // same branches used here).
      };
    }
  }

  // 4. NEET Practice
  if (/^neet-(biology|physics|chemistry)-/.test(slug)) {
    const params = parseNEETPracticeSlug(slug);
    if (params) {
      const bank = neetSubjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const topic = ch?.topics.find(t => t.slug === params.topic);
      const subj = bank?.subject ?? cap(params.subject);
      const topicName = topic?.name ?? params.topic;
      const diff = diffLabel(params.difficulty);
      return {
        title: `NEET ${subj} MCQ: ${topicName} [${diff}] — Solve & Check Answer`,
        description: `Solve this ${diff} NEET ${subj} MCQ on ${topicName}. Instant answer + step-by-step solution. 500+ free practice questions.`.slice(0, 160),
        alternates: { canonical },
        openGraph: { ...og, url: canonical },
        // No `<meta robots>`: these question pages are ISR-cached and served
        // bot-agnostically, so robots is decided per-UA by proxy.ts via the
        // `X-Robots-Tag` header (Bing → index, Google/others → noindex).
        // See src/lib/bingIndexing.ts (isBingExclusiveThinPage must match the
        // same branches used here).
      };
    }
  }

  // 5. Subject-city pages — noindex (doorway-page risk)
  const subjectCityConfig = parseSubjectCitySlug(slug);
  if (subjectCityConfig) {
    const page = buildSubjectCityPage(subjectCityConfig);
    const exam = slug.includes('neet') ? 'NEET' : 'JEE';
    return {
      title: `Best ${exam} Coaching in ${page.title.split('in ').pop()} ${YEAR} — 1-on-1 Online | Free Demo`,
      description: `Top-rated ${exam} coaching in ${page.title.split('in ').pop()} — online 1-on-1 with expert mentors. Book free demo class today.`.slice(0, 160),
      // Self-canonical: withHreflang() overrides alternates.canonical with
      // the page's own URL anyway (verified live), and noindex + cross-page
      // canonical is a conflicting signal pair Google ignores. Declare what
      // actually ships.
      alternates: { canonical },
      openGraph: { ...og, url: canonical },
      robots: { index: false, follow: true },
    };
  }

  // 5b. Study guide pages — noindex (308 redirects to parent chapter; belt-and-suspenders)
  const studyGuideInfo = parseStudyGuideSlug(slug);
  if (studyGuideInfo) {
    const guide = buildStudyGuide(studyGuideInfo);
    return {
      title: `How to Study ${guide.topicName} for ${guide.exam} ${YEAR} — Complete Guide`,
      description: `Learn how to study ${guide.topicName} for ${guide.exam} ${guide.subject}. Step-by-step plan, resources, PYQs & common mistakes.`.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical },
      robots: { index: false, follow: true },
    };
  }

  // 6. Location pages
  const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const isLocation = slug.includes('coaching-in-');
  if (isLocation) {
    const cityMeta = INDEXABLE_CITY_META[slug];
    if (cityMeta) {
      // T1 curated city — index with unique metadata, self-canonical, hreflang
      const selfCanonical = `${BASE}/${slug}`;
      const exam = slug.startsWith('neet') ? 'NEET' : 'JEE';
      const cityNameRaw = slug.split('-in-').pop() ?? '';
      const cityName = cityNameRaw.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return {
        title: cityMeta.title,
        description: cityMeta.description,
        keywords: [
          `${exam} coaching in ${cityName}`,
          `best ${exam} coaching ${cityName}`,
          `online ${exam} coaching ${cityName}`,
          `${exam} classes ${cityName}`,
          `1-on-1 ${exam} tutor ${cityName}`,
          `${exam} preparation ${cityName}`,
          'MindPeak Institute',
        ],
        alternates: {
          canonical: selfCanonical,
          languages: {
            'en-IN': selfCanonical,
            'x-default': selfCanonical,
          },
        },
        openGraph: {
          ...og,
          url: selfCanonical,
          title: cityMeta.title,
          description: cityMeta.description,
          locale: 'en_IN',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: cityMeta.title,
          description: cityMeta.description,
        },
        robots: {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
          },
        },
        other: {
          'geo.region': 'IN',
          'geo.placename': cityName,
        },
      };
    }
    // All other city pages — kept out of Google to avoid scaled-content
    // penalty, but exposed to Bing (which rewards index breadth). No
    // `<meta robots>` here: robots is decided per-UA by proxy.ts via the
    // `X-Robots-Tag` header (Bing → index, Google/others → noindex).
    // See src/lib/bingIndexing.ts (isBingExclusiveThinPage).
    const city = slug.split('-in-').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ?? '';
    const exam = examFromSlug(slug);
    return {
      title: `Best ${exam} Coaching in ${city} ${YEAR} — 1-on-1 Online | Free Demo`,
      description: `Top-rated ${exam} coaching in ${city} — personal mentors, adaptive study plans. Book free demo today.`.slice(0, 160),
      // Self-canonical: withHreflang() overrides alternates.canonical with the
      // page's own URL anyway (verified live).
      alternates: { canonical },
      openGraph: { ...og, url: canonical },
    };
  }

  // Fallback — noindex to prevent any unknown slug from being indexed
  return {
    title: `${prettyName} ${YEAR} | MindPeak Institute`,
    description: `${prettyName} — Personalized JEE & NEET coaching. Expert mentors, adaptive curriculum, free demo class.`.slice(0, 160),
    alternates: { canonical },
    openGraph: { ...og, url: canonical },
    robots: { index: false, follow: true },
  };
}
