import type { NEETPYQSubjectBank, NEETPYQChapter, NEETPYQuestion } from './types';
import { slugifyQuestion, deduplicateSlugs } from '../../lib/slugify';
import { botanyPyq } from './biology-botany-pyq';
import { botanyPyq2 } from './biology-botany-pyq-2';
import { zoologyPyq } from './biology-zoology-pyq';
import { zoologyPyq2 } from './biology-zoology-pyq-2';
import { neetPhysicsPyq } from './physics-pyq';
import { neetPhysicsPyq2 } from './physics-pyq-2';
import { neetChemistryPyq } from './chemistry-pyq';
import { neetChemistryPyq2 } from './chemistry-pyq-2';

/* ─── Helper: merge chapters with duplicate slugs ─── */
function mergeChapters(chapters: NEETPYQChapter[]): NEETPYQChapter[] {
  const map = new Map<string, NEETPYQChapter>();
  for (const ch of chapters) {
    const existing = map.get(ch.slug);
    if (existing) {
      existing.questions = [...existing.questions, ...ch.questions];
    } else {
      map.set(ch.slug, { ...ch, questions: [...ch.questions] });
    }
  }
  return [...map.values()];
}

/* ═══════════════════════════════════════════════════
   Subject Banks
   Biology = Botany + Zoology combined
   ═══════════════════════════════════════════════════ */

const allBiologyPYQ: NEETPYQChapter[] = mergeChapters([
  ...botanyPyq,
  ...botanyPyq2,
  ...zoologyPyq,
  ...zoologyPyq2,
]);

export const neetBiologyPYQBank: NEETPYQSubjectBank = {
  subject: 'Biology',
  slug: 'biology',
  icon: '🧬',
  chapters: allBiologyPYQ,
};

const allPhysicsPYQ: NEETPYQChapter[] = mergeChapters([...neetPhysicsPyq, ...neetPhysicsPyq2]);

export const neetPhysicsPYQBank: NEETPYQSubjectBank = {
  subject: 'Physics',
  slug: 'physics',
  icon: '⚡',
  chapters: allPhysicsPYQ,
};

const allChemistryPYQ: NEETPYQChapter[] = mergeChapters([...neetChemistryPyq, ...neetChemistryPyq2]);

export const neetChemistryPYQBank: NEETPYQSubjectBank = {
  subject: 'Chemistry',
  slug: 'chemistry',
  icon: '🧪',
  chapters: allChemistryPYQ,
};

/* ─── All NEET PYQ subject banks ─── */
export const neetPyqSubjectBanks: NEETPYQSubjectBank[] = [
  neetBiologyPYQBank,
  neetPhysicsPYQBank,
  neetChemistryPYQBank,
];

/* ═══════════════════════════════════════════════════
   Utility types & helpers
   ═══════════════════════════════════════════════════ */

export interface NEETPYQRouteParams {
  subject: string;
  chapter: string;
  questionIndex: number; // 1-based
}

/** Build all NEET PYQ slugs for static routing */
export function buildAllNEETPYQSlugs(): { slug: string; params: NEETPYQRouteParams }[] {
  const result: { slug: string; params: NEETPYQRouteParams }[] = [];

  for (const bank of neetPyqSubjectBanks) {
    for (const chapter of bank.chapters) {
      // Build base slugs from question text, then deduplicate
      const baseSlugs = chapter.questions.map(q => slugifyQuestion(q.q));
      const uniqueSlugs = deduplicateSlugs(baseSlugs);
      chapter.questions.forEach((_, idx) => {
        const slug = `neet-pyq-${bank.slug}-${chapter.slug}-${uniqueSlugs[idx]}`;
        result.push({
          slug,
          params: {
            subject: bank.slug,
            chapter: chapter.slug,
            questionIndex: idx + 1,
          },
        });
      });
    }
  }

  return result;
}

/* ─── Pre-built slug → params lookup map ─── */
const _allNEETPYQSlugs = buildAllNEETPYQSlugs();
const _neetPyqSlugMap = new Map<string, NEETPYQRouteParams>(
  _allNEETPYQSlugs.map((s) => [s.slug, s.params]),
);

/* ─── Reverse lookup: params → slug ─── */
const _neetPyqParamToSlug = new Map<string, string>(
  _allNEETPYQSlugs.map((s) => [
    `${s.params.subject}|${s.params.chapter}|${s.params.questionIndex}`,
    s.slug,
  ]),
);

/** Get the SEO-friendly slug for given NEET PYQ params */
export function getNEETPYQSlugByParams(
  subject: string, chapter: string, questionIndex: number,
): string | null {
  return _neetPyqParamToSlug.get(`${subject}|${chapter}|${questionIndex}`) ?? null;
}

/** Parse a NEET PYQ slug into route params via direct map lookup */
export function parseNEETPYQSlug(slug: string): NEETPYQRouteParams | null {
  return _neetPyqSlugMap.get(slug) ?? null;
}

/** Get a NEET PYQ question from params */
export function getNEETPYQuestion(params: NEETPYQRouteParams): NEETPYQuestion | null {
  const bank = neetPyqSubjectBanks.find((b) => b.slug === params.subject);
  if (!bank) return null;
  const chapter = bank.chapters.find((c) => c.slug === params.chapter);
  if (!chapter) return null;
  return chapter.questions[params.questionIndex - 1] ?? null;
}

/** Get a NEET PYQ chapter by subject + chapter slug */
export function getNEETPYQChapter(
  subjectSlug: string,
  chapterSlug: string,
): NEETPYQChapter | undefined {
  const bank = neetPyqSubjectBanks.find((b) => b.slug === subjectSlug);
  return bank?.chapters.find((c) => c.slug === chapterSlug);
}

/** Get total NEET PYQ question count for a subject */
export function getTotalNEETPYQQuestions(subjectSlug: string): number {
  const bank = neetPyqSubjectBanks.find((b) => b.slug === subjectSlug);
  if (!bank) return 0;
  return bank.chapters.reduce((sum, ch) => sum + ch.questions.length, 0);
}

/** Get total question count in a NEET PYQ chapter */
export function getNEETPYQChapterCount(chapter: NEETPYQChapter): number {
  return chapter.questions.length;
}

/** Get all unique years across all NEET PYQ subjects */
export function getAllNEETPYQYears(): number[] {
  const years = new Set<number>();
  for (const bank of neetPyqSubjectBanks) {
    for (const ch of bank.chapters) {
      for (const q of ch.questions) {
        years.add(q.year);
      }
    }
  }
  return [...years].sort((a, b) => b - a);
}

/** Get grand total of all NEET PYQ questions */
export function getGrandTotalNEETPYQ(): number {
  return neetPyqSubjectBanks.reduce(
    (total, bank) =>
      total + bank.chapters.reduce((sum, ch) => sum + ch.questions.length, 0),
    0,
  );
}
