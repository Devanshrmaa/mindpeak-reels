import type { NEETPYQSubjectBank, NEETPYQChapter, NEETPYQuestion } from './types';
import { botanyPyq } from './biology-botany-pyq';
import { zoologyPyq } from './biology-zoology-pyq';
import { neetPhysicsPyq } from './physics-pyq';
import { neetChemistryPyq } from './chemistry-pyq';

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
  ...zoologyPyq,
]);

export const neetBiologyPYQBank: NEETPYQSubjectBank = {
  subject: 'Biology',
  slug: 'biology',
  icon: '🧬',
  chapters: allBiologyPYQ,
};

const allPhysicsPYQ: NEETPYQChapter[] = mergeChapters([...neetPhysicsPyq]);

export const neetPhysicsPYQBank: NEETPYQSubjectBank = {
  subject: 'Physics',
  slug: 'physics',
  icon: '⚡',
  chapters: allPhysicsPYQ,
};

const allChemistryPYQ: NEETPYQChapter[] = mergeChapters([...neetChemistryPyq]);

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
      chapter.questions.forEach((_, idx) => {
        const slug = `neet-pyq-${bank.slug}-${chapter.slug}-q${idx + 1}`;
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
