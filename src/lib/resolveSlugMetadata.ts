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
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import { getExamInfoPage } from '@/data/examInfoData';
import { getDifferencePair } from '@/data/differenceBetweenData';
import { getCounsellingPage } from '@/data/counsellingData';
import type { Metadata } from 'next';

const BASE = 'https://mindpeakinstitute.com';
const YEAR = CURRENT_EXAM_YEAR;

/**
 * Hand-curated T1 city pages that are safe to index.
 * Each entry has a unique title and description referencing city-specific
 * institutions, localities, and coaching landscape.
 * All 472 auto-generated expansion cities remain noindexed.
 */
const INDEXABLE_CITY_META: Record<string, { title: string; description: string }> = {
  /* ── South India — Karnataka ── */
  'jee-coaching-in-bangalore': {
    title: `Best JEE Coaching in Bangalore ${YEAR} — 1-on-1 with IISc & IIT Alumni | MindPeak`,
    description: `1-on-1 JEE coaching in Bangalore. IISc & IIT alumni mentors, KCET+JEE integrated prep. Students from Koramangala, Whitefield, HSR Layout. Book free demo class.`,
  },
  'neet-coaching-in-bangalore': {
    title: `Best NEET Coaching in Bangalore ${YEAR} — 1-on-1 for KCET & NEET | MindPeak`,
    description: `1-on-1 NEET coaching in Bangalore. KCET+NEET integrated, IISc alumni mentors. Students from Indiranagar, Jayanagar, JP Nagar. Target Ramaiah & BMCRI. Free demo.`,
  },
  'jee-coaching-in-mangalore': {
    title: `Best JEE Coaching in Mangalore ${YEAR} — Gateway to NITK Surathkal | MindPeak`,
    description: `1-on-1 JEE coaching in Mangalore. KCET+JEE integrated, Kannada support, no Bangalore travel. Students from Kadri, Surathkal, Bejai. Target NITK. Free demo.`,
  },
  'neet-coaching-in-mangalore': {
    title: `Best NEET Coaching in Mangalore ${YEAR} — Kasturba Medical College Gateway | MindPeak`,
    description: `1-on-1 NEET coaching in Mangalore. KCET+NEET integrated, Kannada support. Students from Kadri, Kankanady. Target Kasturba & Father Muller Medical. Free demo.`,
  },

  /* ── South India — Tamil Nadu ── */
  'jee-coaching-in-chennai': {
    title: `Best JEE Coaching in Chennai ${YEAR} — IIT Madras is in Your City | MindPeak`,
    description: `1-on-1 JEE coaching in Chennai. TN Board-to-JEE transition specialists, IIT Madras alumni mentors. Students from T. Nagar, Adyar, Velachery. Free demo.`,
  },
  'neet-coaching-in-chennai': {
    title: `Best NEET Coaching in Chennai ${YEAR} — Madras Medical College Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Chennai. TN Board-to-NEET specialists. Students from Tambaram, Anna Nagar, OMR. Target MMC & Stanley Medical. Free demo.`,
  },
  'jee-coaching-in-coimbatore': {
    title: `Best JEE Coaching in Coimbatore ${YEAR} — Chennai-Level Coaching, No Relocation | MindPeak`,
    description: `1-on-1 JEE coaching in Coimbatore. Chennai-quality, TN Board-to-JEE. Tamil mentors. Students from Peelamedu, RS Puram, Saravanampatti. Free demo.`,
  },
  'neet-coaching-in-coimbatore': {
    title: `Best NEET Coaching in Coimbatore ${YEAR} — Top Mentors for TN NEET Students | MindPeak`,
    description: `1-on-1 NEET coaching in Coimbatore. Amrita alumni mentors, TN Board+NEET integrated, Tamil support. Students from Gandhipuram, Vadavalli, Ukkadam. Free demo.`,
  },

  /* ── South India — Telangana / Andhra Pradesh ── */
  'jee-coaching-in-hyderabad': {
    title: `Best JEE Coaching in Hyderabad ${YEAR} — 1-on-1 vs Sri Chaitanya Batches | MindPeak`,
    description: `1-on-1 JEE coaching in Hyderabad — not a 150-student batch. TS EAMCET+JEE integrated, Telugu support. Students from Gachibowli, Kukatpally. Free demo.`,
  },
  'neet-coaching-in-hyderabad': {
    title: `Best NEET Coaching in Hyderabad ${YEAR} — 1-on-1 vs Corporate Colleges | MindPeak`,
    description: `1-on-1 NEET coaching in Hyderabad. TS EAMCET+NEET dual prep, Telugu reports. Ameerpet, Madhapur, Kompally students. Target Osmania Medical. Free demo.`,
  },
  'jee-coaching-in-vijayawada': {
    title: `Best JEE Coaching in Vijayawada ${YEAR} — 1-on-1 vs AP Corporate Colleges | MindPeak`,
    description: `1-on-1 JEE coaching in Vijayawada. AP EAMCET+JEE integrated, Telugu support. Students from Governorpet, Benz Circle. No corporate batches. Free demo.`,
  },
  'neet-coaching-in-vijayawada': {
    title: `Best NEET Coaching in Vijayawada ${YEAR} — 1-on-1 for AP NEET Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Vijayawada. AP EAMCET+NEET prep, Telugu reports. Students from Gandhinagar, Labbipet, Kanuru. Target Siddhartha Medical. Free demo.`,
  },
  'jee-coaching-in-visakhapatnam': {
    title: `Best JEE Coaching in Visakhapatnam ${YEAR} — No Hyderabad Relocation Needed | MindPeak`,
    description: `1-on-1 JEE coaching in Visakhapatnam. AP EAMCET+JEE, Telugu support. MVP Colony, Dwaraka Nagar, Madhurawada students. No Hyderabad relocation. Free demo.`,
  },
  'neet-coaching-in-visakhapatnam': {
    title: `Best NEET Coaching in Visakhapatnam ${YEAR} — 1-on-1 for Vizag NEET Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Visakhapatnam. AP EAMCET+NEET, Telugu support. Rushikonda, Seethammadhara, Gajuwaka students. Target Andhra Medical. Free demo.`,
  },

  /* ── South India — Kerala ── */
  'jee-coaching-in-kochi': {
    title: `Best JEE Coaching in Kochi ${YEAR} — 1-on-1 for Kerala's JEE Aspirants | MindPeak`,
    description: `1-on-1 JEE coaching in Kochi. KEAM+JEE integrated, Malayalam support. Kerala foundations leveraged for JEE. Ernakulam, Edappally students. Free demo.`,
  },
  'neet-coaching-in-kochi': {
    title: `Best NEET Coaching in Kochi ${YEAR} — Kerala's NEET Strategy Gap Solved | MindPeak`,
    description: `1-on-1 NEET coaching in Kochi. Kerala board MCQ gap bridged by 1-on-1 mentors. KEAM+NEET integrated, Malayalam support. Ernakulam, Aluva students. Free demo.`,
  },

  /* ── Pan-India T1 anchors ── */
  'jee-coaching-in-delhi': {
    title: `Best JEE Coaching in Delhi ${YEAR} — 1-on-1 Online, No Kota Relocation | MindPeak`,
    description: `1-on-1 JEE coaching in Delhi. IIT alumni mentors, CBSE-integrated. Study from Dwarka, Rohini, Noida — no Kota relocation. Book free demo.`,
  },
  'neet-coaching-in-delhi': {
    title: `Best NEET Coaching in Delhi ${YEAR} — AIIMS Delhi Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Delhi. AIIMS alumni mentors, CBSE integrated. AIIMS Delhi is in your city. Students from South Delhi, Dwarka, Rohini. Free demo.`,
  },
  'jee-coaching-in-mumbai': {
    title: `Best JEE Coaching in Mumbai ${YEAR} — No 3-Hour Local Train Commutes | MindPeak`,
    description: `1-on-1 JEE coaching in Mumbai. No 3-hour local train commutes — study from Andheri, Thane, Navi Mumbai. MHT-CET+JEE integrated, IIT alumni mentors. Free demo.`,
  },
  'neet-coaching-in-mumbai': {
    title: `Best NEET Coaching in Mumbai ${YEAR} — 1-on-1 for Maharashtra NEET Aspirants | MindPeak`,
    description: `1-on-1 NEET coaching in Mumbai. MHT-CET+NEET integrated, MH board expertise. Students from Thane, Andheri, Navi Mumbai. No local train commutes. Free demo.`,
  },
};

/**
 * Pattern-level check: does this slug match ANY known page type?
 * Used by the server component to return 404 for truly unknown URLs.
 * Prevents soft-404 / scaled-content-abuse signals to Google.
 */
export function isKnownSlug(slugSegments: string[]): boolean {
  if (slugSegments.length === 0) return false;
  const slug = slugSegments.join('/');

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
  // coaching-in-* slugs: validate that the city portion maps to a known city
  // to prevent arbitrary /jee-coaching-in-[garbage] slugs returning 200+noindex
  // instead of 404. allCities is imported lazily to keep this server-safe.
  if (slug.includes('coaching-in-')) {
    const citySlug = slug.split('-in-').pop() ?? '';
    if (citySlug) {
      const { allCities } = require('@/data/cityData') as { allCities: { slug: string }[] };
      if (allCities.some((c) => c.slug === citySlug)) return true;
    }
    return false;
  }
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
        robots: { index: false, follow: true },
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
        robots: { index: false, follow: true },
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
        robots: { index: false, follow: true },
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
        robots: { index: false, follow: true },
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
      alternates: {
        canonical: `${BASE}/best-jee-coaching-in-india`,
      },
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
    // All other city pages — keep noindexed to avoid scaled-content penalty
    const city = slug.split('-in-').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ?? '';
    const exam = examFromSlug(slug);
    return {
      title: `Best ${exam} Coaching in ${city} ${YEAR} — 1-on-1 Online | Free Demo`,
      description: `Top-rated ${exam} coaching in ${city} — personal mentors, adaptive study plans. Book free demo today.`.slice(0, 160),
      alternates: {
        canonical: `${BASE}/best-jee-coaching-in-india`,
      },
      openGraph: { ...og, url: canonical },
      robots: { index: false, follow: true },
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
