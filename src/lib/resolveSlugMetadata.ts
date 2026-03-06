/**
 * Server-side metadata resolver for the catch-all route.
 * CTR-optimized: year tags, power words, action verbs, category OG images.
 */

import { CHAPTER_SLUGS, TOPIC_PATHS } from '@/data/chapterData';
import { SUBJECT_SLUGS } from '@/views/SubjectPage';
import { FORMULA_SLUGS } from '@/views/FormulaSheet';
import { parseSubjectCitySlug, buildSubjectCityPage } from '@/data/subjectCityData';
import { parsePracticeSlug, getQuestion, subjectBanks } from '@/data/practice';
import { parsePYQSlug, getPYQuestion, pyqSubjectBanks } from '@/data/pyq';
import { parseNEETPracticeSlug, getNEETPracticeQuestion, neetSubjectBanks } from '@/data/neet-practice';
import { parseNEETPYQSlug, getNEETPYQuestion, neetPyqSubjectBanks } from '@/data/neet-pyq';
import { parseNEETPYQHubSlug, getUnitBySlug } from '@/data/neet-pyq/hierarchy';
import { getSEOPage } from '@/data/seoPageData';
import { chapters, getTopicInfo } from '@/data/chapterData';
import { resolveOgImageMeta } from '@/lib/ogImage';
import type { Metadata } from 'next';

const BASE = 'https://mindpeakinstitute.com';
const YEAR = new Date().getFullYear();

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
    return _resolve(slugSegments);
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
      };
    }
  }

  // 5. Subject-city pages
  const subjectCityConfig = parseSubjectCitySlug(slug);
  if (subjectCityConfig) {
    const page = buildSubjectCityPage(subjectCityConfig);
    const exam = slug.includes('neet') ? 'NEET' : 'JEE';
    return {
      title: `Best ${exam} Coaching in ${page.title.split('in ').pop()} ${YEAR} — 1-on-1 Online | Free Demo`,
      description: `Top-rated ${exam} coaching in ${page.title.split('in ').pop()} — online 1-on-1 with expert mentors. Book free demo class today.`.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical },
    };
  }

  // 6. Location / unknown fallback
  const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const isLocation = slug.includes('coaching-in-') || slug.includes('-in-');
  if (isLocation) {
    const city = slug.split('-in-').pop()?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) ?? '';
    const exam = examFromSlug(slug);
    return {
      title: `Best ${exam} Coaching in ${city} ${YEAR} — 1-on-1 Online | Free Demo`,
      description: `Top-rated ${exam} coaching in ${city} — personal mentors, adaptive study plans. Book free demo today.`.slice(0, 160),
      alternates: { canonical },
      openGraph: { ...og, url: canonical },
    };
  }

  return {
    title: `${prettyName} ${YEAR} | MindPeak Institute`,
    description: `${prettyName} — Personalized JEE & NEET coaching. Expert mentors, adaptive curriculum, free demo class.`.slice(0, 160),
    alternates: { canonical },
    openGraph: { ...og, url: canonical },
  };
}
