import type { PYQSubjectBank, PYQChapter, PYQuestion } from './types';
import { slugifyQuestion, deduplicateSlugs } from '../../lib/slugify';
import { physicsPyq1 } from './physics-pyq-1';
import { physicsPyq2 } from './physics-pyq-2';
import { physicsPyq3 } from './physics-pyq-3';
import { physicsPyq4 } from './physics-pyq-4';
import { chemistryPyq1 } from './chemistry-pyq-1';
import { chemistryPyq2 } from './chemistry-pyq-2';
import { chemistryPyq3 } from './chemistry-pyq-3';
import { chemistryPyq4 } from './chemistry-pyq-4';
import { mathsPyq1 } from './maths-pyq-1';
import { mathsPyq2 } from './maths-pyq-2';
import { mathsPyq3 } from './maths-pyq-3';

/* ─── Helper: merge chapters with duplicate slugs ─── */
function mergeChapters(chapters: PYQChapter[]): PYQChapter[] {
  const map = new Map<string, PYQChapter>();
  for (const ch of chapters) {
    const existing = map.get(ch.slug);
    if (existing) {
      // Merge questions into the first occurrence
      existing.questions = [...existing.questions, ...ch.questions];
    } else {
      map.set(ch.slug, { ...ch, questions: [...ch.questions] });
    }
  }
  return [...map.values()];
}

/* ─── Combine all Physics PYQ chapters ─── */
const allPhysicsPYQ: PYQChapter[] = mergeChapters([
  ...physicsPyq1,
  ...physicsPyq2,
  ...physicsPyq3,
  ...physicsPyq4,
]);

export const physicsPYQBank: PYQSubjectBank = {
  subject: 'Physics',
  slug: 'physics',
  icon: '⚡',
  chapters: allPhysicsPYQ,
};

/* ─── Combine all Chemistry PYQ chapters ─── */
const allChemistryPYQ: PYQChapter[] = mergeChapters([
  ...chemistryPyq1,
  ...chemistryPyq2,
  ...chemistryPyq3,
  ...chemistryPyq4,
]);

export const chemistryPYQBank: PYQSubjectBank = {
  subject: 'Chemistry',
  slug: 'chemistry',
  icon: '🧪',
  chapters: allChemistryPYQ,
};

/* ─── Combine all Maths PYQ chapters ─── */
const allMathsPYQ: PYQChapter[] = mergeChapters([
  ...mathsPyq1,
  ...mathsPyq2,
  ...mathsPyq3,
]);

export const mathsPYQBank: PYQSubjectBank = {
  subject: 'Mathematics',
  slug: 'mathematics',
  icon: '📐',
  chapters: allMathsPYQ,
};

/* ─── All PYQ subject banks ─── */
export const pyqSubjectBanks: PYQSubjectBank[] = [
  physicsPYQBank,
  chemistryPYQBank,
  mathsPYQBank,
];

/* ─── Utility types ─── */
export interface PYQRouteParams {
  subject: string;
  chapter: string;
  questionIndex: number; // 1-based
}

/* ─── Build all PYQ slugs ─── */
export function buildAllPYQSlugs(): { slug: string; params: PYQRouteParams }[] {
  const result: { slug: string; params: PYQRouteParams }[] = [];

  for (const bank of pyqSubjectBanks) {
    for (const chapter of bank.chapters) {
      // Build base slugs from question text, then deduplicate
      const baseSlugs = chapter.questions.map(q => slugifyQuestion(q.q));
      const uniqueSlugs = deduplicateSlugs(baseSlugs);
      chapter.questions.forEach((_, idx) => {
        const slug = `jee-pyq-${bank.slug}-${chapter.slug}-${uniqueSlugs[idx]}`;
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
const _allPYQSlugs = buildAllPYQSlugs();
const _pyqSlugMap = new Map<string, PYQRouteParams>(
  _allPYQSlugs.map((s) => [s.slug, s.params]),
);

/** Parse a PYQ slug into route params via direct map lookup */
export function parsePYQSlug(slug: string): PYQRouteParams | null {
  return _pyqSlugMap.get(slug) ?? null;
}

/** Get a PYQ question from params */
export function getPYQuestion(params: PYQRouteParams): PYQuestion | null {
  const bank = pyqSubjectBanks.find((b) => b.slug === params.subject);
  if (!bank) return null;
  const chapter = bank.chapters.find((c) => c.slug === params.chapter);
  if (!chapter) return null;
  return chapter.questions[params.questionIndex - 1] ?? null;
}

/** Get a PYQ chapter by subject + chapter slug */
export function getPYQChapter(
  subjectSlug: string,
  chapterSlug: string,
): PYQChapter | undefined {
  const bank = pyqSubjectBanks.find((b) => b.slug === subjectSlug);
  return bank?.chapters.find((c) => c.slug === chapterSlug);
}

/** Get total PYQ question count for a subject */
export function getTotalPYQQuestions(subjectSlug: string): number {
  const bank = pyqSubjectBanks.find((b) => b.slug === subjectSlug);
  if (!bank) return 0;
  return bank.chapters.reduce((sum, ch) => sum + ch.questions.length, 0);
}

/** Get total question count in a PYQ chapter */
export function getPYQChapterCount(chapter: PYQChapter): number {
  return chapter.questions.length;
}

/** Get all unique years across all subjects */
export function getAllPYQYears(): number[] {
  const years = new Set<number>();
  for (const bank of pyqSubjectBanks) {
    for (const ch of bank.chapters) {
      for (const q of ch.questions) {
        years.add(q.year);
      }
    }
  }
  return [...years].sort((a, b) => b - a);
}
