import type { NEETSubjectBank, NEETChapterData, NEETPracticeQuestion } from './types';
import { slugifyQuestion, deduplicateSlugs } from '../../lib/slugify';
import { botanyChapters } from './biology-botany';
import { botanyExpansionChapters } from './biology-botany-2';
import { zoologyChapters } from './biology-zoology';
import { zoologyExpansionChapters } from './biology-zoology-2';
import { physicsChapters } from './physics';
import { physicsExpansionChapters } from './physics-2';
import { neetChemistryChapters } from './chemistry';
import { neetChemistryExpansionChapters } from './chemistry-2';

/* ─── Combine Biology = Botany + Zoology ─── */
const allBiologyChapters: NEETChapterData[] = [
  ...botanyChapters,
  ...botanyExpansionChapters,
  ...zoologyChapters,
  ...zoologyExpansionChapters,
];

export const biologyBank: NEETSubjectBank = {
  subject: 'Biology',
  slug: 'biology',
  icon: '🧬',
  chapters: allBiologyChapters,
};

export const neetPhysicsBank: NEETSubjectBank = {
  subject: 'Physics',
  slug: 'physics',
  icon: '⚡',
  chapters: [...physicsChapters, ...physicsExpansionChapters],
};

export const neetChemistryBank: NEETSubjectBank = {
  subject: 'Chemistry',
  slug: 'chemistry',
  icon: '🧪',
  chapters: [...neetChemistryChapters, ...neetChemistryExpansionChapters],
};

/* ─── All NEET practice subject banks ─── */
export const neetSubjectBanks: NEETSubjectBank[] = [
  biologyBank,
  neetPhysicsBank,
  neetChemistryBank,
];

/* ═══════════════════════════════════════════════════
   Utility helpers (mirrors JEE practice/index.ts)
   ═══════════════════════════════════════════════════ */

export type Difficulty = 'easy' | 'medium' | 'hard';

/** Get a flat list of all questions for a subject + difficulty */
export function getNEETQuestionsByDifficulty(
  subjectSlug: string,
  difficulty: Difficulty,
): NEETPracticeQuestion[] {
  const bank = neetSubjectBanks.find((b) => b.slug === subjectSlug);
  if (!bank) return [];
  return bank.chapters.flatMap((ch) =>
    ch.topics.flatMap((t) => t[difficulty]),
  );
}

/** Find a chapter by slug */
export function getNEETChapter(
  subjectSlug: string,
  chapterSlug: string,
): NEETChapterData | undefined {
  const bank = neetSubjectBanks.find((b) => b.slug === subjectSlug);
  return bank?.chapters.find((c) => c.slug === chapterSlug);
}

/** Build a map of all valid NEET practice slugs → route params */
export interface NEETPracticeRouteParams {
  subject: string;
  chapter: string;
  topic: string;
  difficulty: Difficulty;
  questionIndex: number; // 1-based
}

export function buildAllNEETPracticeSlugs(): { slug: string; params: NEETPracticeRouteParams }[] {
  const result: { slug: string; params: NEETPracticeRouteParams }[] = [];

  for (const bank of neetSubjectBanks) {
    for (const chapter of bank.chapters) {
      for (const topic of chapter.topics) {
        for (const diff of ['easy', 'medium', 'hard'] as Difficulty[]) {
          const questions = topic[diff];
          // Build base slugs from question text, then deduplicate
          const baseSlugs = questions.map(q => slugifyQuestion(q.q));
          const uniqueSlugs = deduplicateSlugs(baseSlugs);
          questions.forEach((_, idx) => {
            const slug = `neet-${bank.slug}-${chapter.slug}-${topic.slug}-${diff}-${uniqueSlugs[idx]}`;
            result.push({
              slug,
              params: {
                subject: bank.slug,
                chapter: chapter.slug,
                topic: topic.slug,
                difficulty: diff,
                questionIndex: idx + 1,
              },
            });
          });
        }
      }
    }
  }

  return result;
}

/* ─── Pre-built slug → params lookup map (built once) ─── */
const _allSlugs = buildAllNEETPracticeSlugs();
const _slugMap = new Map<string, NEETPracticeRouteParams>(
  _allSlugs.map((s) => [s.slug, s.params]),
);

/* ─── Reverse lookup: params → slug ─── */
const _neetParamToSlug = new Map<string, string>(
  _allSlugs.map((s) => [
    `${s.params.subject}|${s.params.chapter}|${s.params.topic}|${s.params.difficulty}|${s.params.questionIndex}`,
    s.slug,
  ]),
);

/** Get the SEO-friendly slug for given NEET practice question params */
export function getNEETPracticeSlugByParams(
  subject: string, chapter: string, topic: string, difficulty: Difficulty, questionIndex: number,
): string | null {
  return _neetParamToSlug.get(`${subject}|${chapter}|${topic}|${difficulty}|${questionIndex}`) ?? null;
}

/** Parse a NEET practice slug into route params via direct lookup */
export function parseNEETPracticeSlug(slug: string): NEETPracticeRouteParams | null {
  return _slugMap.get(slug) ?? null;
}

/** Get a question from params */
export function getNEETPracticeQuestion(params: NEETPracticeRouteParams): NEETPracticeQuestion | null {
  const bank = neetSubjectBanks.find((b) => b.slug === params.subject);
  if (!bank) return null;
  const chapter = bank.chapters.find((c) => c.slug === params.chapter);
  if (!chapter) return null;
  const topic = chapter.topics.find((t) => t.slug === params.topic);
  if (!topic) return null;
  const questions = topic[params.difficulty];
  return questions[params.questionIndex - 1] ?? null;
}

/** Get total question count for a subject */
export function getTotalNEETPracticeQuestions(subjectSlug: string): number {
  const bank = neetSubjectBanks.find((b) => b.slug === subjectSlug);
  if (!bank) return 0;
  return bank.chapters.reduce(
    (sum, ch) =>
      sum +
      ch.topics.reduce(
        (tSum, t) => tSum + t.easy.length + t.medium.length + t.hard.length,
        0,
      ),
    0,
  );
}

/** Get total question count for a chapter */
export function getNEETChapterQuestionCount(chapter: NEETChapterData): number {
  return chapter.topics.reduce(
    (sum, t) => sum + t.easy.length + t.medium.length + t.hard.length,
    0,
  );
}

/** Get grand total of all NEET practice questions across all subjects */
export function getGrandTotalNEETPractice(): number {
  return neetSubjectBanks.reduce(
    (total, bank) => total + getTotalNEETPracticeQuestions(bank.slug),
    0,
  );
}
