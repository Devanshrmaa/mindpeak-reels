/**
 * Server-side metadata resolver for the catch-all route.
 *
 * Determines page type from the slug and returns {title, description}
 * so that Next.js generateMetadata can set proper SSR <head> tags.
 *
 * This file is imported ONLY in server components — never "use client".
 */

import { CHAPTER_SLUGS, TOPIC_PATHS } from '@/data/chapterData';
import { SUBJECT_SLUGS } from '@/views/SubjectPage';
import { FORMULA_SLUGS } from '@/views/FormulaSheet';
import { parsePracticeSlug, getQuestion, subjectBanks } from '@/data/practice';
import { parsePYQSlug, getPYQuestion, pyqSubjectBanks } from '@/data/pyq';
import { parseNEETPracticeSlug, getNEETPracticeQuestion, neetSubjectBanks } from '@/data/neet-practice';
import { parseNEETPYQSlug, getNEETPYQuestion, neetPyqSubjectBanks } from '@/data/neet-pyq';
import { getSEOPage } from '@/data/seoPageData';
import { chapters, getTopicInfo } from '@/data/chapterData';
import type { Metadata } from 'next';

const BASE = 'https://mindpeakinstitute.com';

/* ── helpers ── */
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const diffLabel = (d: string) => d === 'easy' ? 'Easy' : d === 'medium' ? 'Medium' : 'Hard';

function resolveKind(slug: string): 'subject' | 'chapter' | 'topic' | 'formula' | 'question' | 'seo-landing' {
  if (slug.includes('/')) {
    return TOPIC_PATHS.includes(slug) ? 'topic' : 'question';
  }
  if (SUBJECT_SLUGS.includes(slug)) return 'subject';
  if (FORMULA_SLUGS.includes(slug)) return 'formula';
  if (CHAPTER_SLUGS.includes(slug)) return 'chapter';

  // Check if it's a known SEO landing page
  const seo = getSEOPage(slug);
  if (seo) return 'seo-landing';

  return 'question';
}

/* ── Main export ── */
export function resolveSlugMetadata(slugSegments: string[]): Metadata {
  const slug = slugSegments.join('/');
  const kind = resolveKind(slug);
  const canonical = `${BASE}/${slug}`;

  switch (kind) {
    /* ─── Subject Pages (e.g. jee-physics-preparation) ─── */
    case 'subject': {
      const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return {
        title: prettyName,
        description: `Complete guide to ${prettyName} — chapter-wise syllabus, study tips, common mistakes, and free practice questions by MindPeak Institute.`,
        alternates: { canonical },
      };
    }

    /* ─── Chapter Pages (e.g. jee-physics-kinematics) ─── */
    case 'chapter': {
      const ch = chapters.find(c => c.slug === slug);
      const title = ch
        ? `${ch.chapter} — ${ch.exam} ${ch.subject}`
        : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const desc = ch?.description
        ?? `Study ${title} with topic-wise notes, formulas, PYQs, and practice MCQs. Free resources by MindPeak Institute.`;
      return { title, description: desc.slice(0, 160), alternates: { canonical } };
    }

    /* ─── Topic Pages (e.g. neet-biology-cell-unit-of-life/cell-wall) ─── */
    case 'topic': {
      const [chapterSlug, topicSlug] = slug.split('/');
      const info = getTopicInfo(chapterSlug, topicSlug);
      if (info) {
        return {
          title: `${info.topicName} — ${info.chapter.chapter} | ${info.chapter.exam} ${info.chapter.subject}`,
          description: `Learn ${info.topicName} (${info.chapter.chapter}) for ${info.chapter.exam} ${info.chapter.subject}. Key concepts, formulas, common mistakes, and practice questions. Free study material by MindPeak.`.slice(0, 160),
          alternates: { canonical },
        };
      }
      return {
        title: topicSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        description: `Study this topic with detailed notes, formulas, and practice questions. Free ${slug.includes('neet') ? 'NEET' : 'JEE'} prep by MindPeak Institute.`,
        alternates: { canonical },
      };
    }

    /* ─── Formula Sheets ─── */
    case 'formula': {
      const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return {
        title: prettyName,
        description: `${prettyName} — all important formulas, quick revision sheet, and tips for JEE/NEET by MindPeak Institute.`.slice(0, 160),
        alternates: { canonical },
      };
    }

    /* ─── SEO Landing Pages (e.g. jee-advanced-coaching) ─── */
    case 'seo-landing': {
      const page = getSEOPage(slug)!;
      return {
        title: page.title,
        description: page.description.slice(0, 160),
        alternates: { canonical },
      };
    }

    /* ─── Question Pages (practice, PYQ, NEET variants) ─── */
    case 'question':
    default: {
      return resolveQuestionMetadata(slug, canonical);
    }
  }
}

/* ── Question metadata sub-resolver ── */
function resolveQuestionMetadata(slug: string, canonical: string): Metadata {
  // 1. JEE PYQ
  if (slug.startsWith('jee-pyq-')) {
    const params = parsePYQSlug(slug);
    if (params) {
      const q = getPYQuestion(params);
      const bank = pyqSubjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const subj = bank?.subject ?? cap(params.subject);
      const chName = ch?.name ?? params.chapter;
      return {
        title: `JEE ${subj} PYQ — ${chName} Q${params.questionIndex}${q ? ` (${q.year})` : ''}`,
        description: `Solve JEE ${q?.exam === 'advanced' ? 'Advanced' : 'Main'} ${q?.year ?? ''} ${subj} question on ${chName}. Attempt the MCQ, check the answer & read the solution. Free JEE PYQ practice by MindPeak.`.slice(0, 160),
        alternates: { canonical },
      };
    }
  }

  // 2. NEET PYQ
  if (slug.startsWith('neet-pyq-')) {
    const params = parseNEETPYQSlug(slug);
    if (params) {
      const q = getNEETPYQuestion(params);
      const bank = neetPyqSubjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const subj = bank?.subject ?? cap(params.subject);
      const chName = ch?.name ?? params.chapter;
      return {
        title: `NEET ${subj} PYQ — ${chName} Q${params.questionIndex}${q ? ` (${q.year})` : ''}`,
        description: `Solve ${q?.shift ?? 'NEET'} ${subj} question on ${chName}. Attempt the MCQ, check the answer & read the detailed NCERT-based solution. Free NEET PYQ practice by MindPeak.`.slice(0, 160),
        alternates: { canonical },
      };
    }
  }

  // 3. JEE Practice (regex: jee-{physics|chemistry|mathematics}-...)
  if (/^jee-(physics|chemistry|mathematics)-/.test(slug)) {
    const params = parsePracticeSlug(slug);
    if (params) {
      const bank = subjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const topic = ch?.topics.find(t => t.slug === params.topic);
      const subj = bank?.subject ?? cap(params.subject);
      const chName = ch?.name ?? params.chapter;
      const topicName = topic?.name ?? params.topic;
      const diff = diffLabel(params.difficulty);
      return {
        title: `JEE ${subj} — ${topicName} (${diff}) Q${params.questionIndex}`,
        description: `Practice JEE ${subj} ${diff} level question on ${topicName} (${chName}). Attempt the MCQ, check the answer & read the step-by-step solution. Free JEE prep by MindPeak.`.slice(0, 160),
        alternates: { canonical },
      };
    }
  }

  // 4. NEET Practice (regex: neet-{biology|physics|chemistry}-...)
  if (/^neet-(biology|physics|chemistry)-/.test(slug)) {
    const params = parseNEETPracticeSlug(slug);
    if (params) {
      const bank = neetSubjectBanks.find(b => b.slug === params.subject);
      const ch = bank?.chapters.find(c => c.slug === params.chapter);
      const topic = ch?.topics.find(t => t.slug === params.topic);
      const subj = bank?.subject ?? cap(params.subject);
      const chName = ch?.name ?? params.chapter;
      const topicName = topic?.name ?? params.topic;
      const diff = diffLabel(params.difficulty);
      return {
        title: `NEET ${subj} — ${topicName} (${diff}) Q${params.questionIndex}`,
        description: `Practice NEET ${subj} ${diff} level question on ${topicName} (${chName}). Attempt the MCQ, check the answer & read the step-by-step solution. Free NEET prep by MindPeak.`.slice(0, 160),
        alternates: { canonical },
      };
    }
  }

  // 5. Fallback — location pages or unknown
  const prettyName = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: prettyName,
    description: `${prettyName} — Personalized JEE & NEET coaching by MindPeak Institute. Expert mentors, adaptive curriculum, free demo class.`.slice(0, 160),
    alternates: { canonical },
  };
}
