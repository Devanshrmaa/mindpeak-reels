import type { SubjectBank, ChapterData, TopicData, PracticeQuestion } from './types';
import { slugifyQuestion, deduplicateSlugs } from '../../lib/slugify';
import { mechanicsChapters1 } from './physics-mechanics-1';
import { mechanicsChapters2 } from './physics-mechanics-2';
import { mechanicsChapters3 } from './physics-mechanics-3';
import { mechanicsChapters4 } from './physics-mechanics-4';
import { thermoWavesChapters } from './physics-thermo-waves';
import { electroChapters } from './physics-electro';
import { magnetismChapters } from './physics-magnetism';
import { opticsModernChapters } from './physics-optics-modern';
import { physicalChemChapters } from './chemistry-physical';
import { organicChemChapters } from './chemistry-organic';
import { inorganicChemChapters } from './chemistry-inorganic';
import { algebraChapters } from './maths-algebra';
import { calculusChapters } from './maths-calculus';
import { coordTrigChapters } from './maths-coord-trig';
import { fluidElasticityChapters } from './physics-mechanics-5';
import { satelliteKeplerChapters } from './physics-mechanics-6';
import { thermoElectrochemChapters } from './chemistry-physical-2';
import { organicExpansionChapters } from './chemistry-organic-2';
import { algebraExpansionChapters } from './maths-algebra-2';
import { calculusExpansionChapters } from './maths-calculus-2';
import { physGravPropChapters } from './physics-grav-prop';
import { coordinateChapters } from './maths-coordinate';
import { trigVectorsChapters } from './maths-trig-vectors';

/**
 * Merge chapter entries that share a slug, and topics that share a slug within
 * them.
 *
 * WHY THIS EXISTS: several expansion files re-declare a chapter that an earlier
 * file already defined — physics-grav-prop re-declares Gravitation and
 * Properties of Matter, chemistry-physical-2 re-declares Chemical
 * Thermodynamics and Electrochemistry, maths-coordinate / maths-trig-vectors
 * re-declare Straight Lines, Circles and Trigonometry. Each duplicate carries a
 * DIFFERENT set of questions, so the bank ended up with two entries per slug.
 *
 * Every lookup here resolves a chapter with `.find()`, which returns the first
 * match, so the second entry's questions were unreachable: 225 questions across
 * 8 chapters, and 180 leaf slugs that `buildAllPracticeSlugs()` still emitted
 * but `getQuestion()` resolved to null — live pages returning 200 with no
 * question on them (verified on production 2026-08-17). Those soft-404s are
 * exactly the thin-content pattern the March 2026 penalty punished. The
 * duplicates also emitted the same hub URL twice into /sitemap-chapters.xml.
 *
 * Merging (rather than de-duplicating) is what keeps the questions: dropping
 * the later entry would silently delete 225 real questions with worked
 * solutions. Question slugs derive from question text, not position, so
 * appending a merged topic's questions leaves existing indexed leaf URLs
 * unchanged.
 */
function mergeChaptersBySlug(chapters: ChapterData[]): ChapterData[] {
  const order: string[] = [];
  const bySlug = new Map<string, ChapterData>();

  const cloneTopic = (t: TopicData): TopicData => ({
    ...t,
    easy: [...t.easy],
    medium: [...t.medium],
    hard: [...t.hard],
  });

  for (const chapter of chapters) {
    const existing = bySlug.get(chapter.slug);
    if (!existing) {
      order.push(chapter.slug);
      bySlug.set(chapter.slug, { ...chapter, topics: chapter.topics.map(cloneTopic) });
      continue;
    }
    for (const topic of chapter.topics) {
      const merged = existing.topics.find((t) => t.slug === topic.slug);
      if (merged) {
        merged.easy.push(...topic.easy);
        merged.medium.push(...topic.medium);
        merged.hard.push(...topic.hard);
      } else {
        existing.topics.push(cloneTopic(topic));
      }
    }
  }

  return order.map((slug) => bySlug.get(slug)!);
}

/* ─── Combine all physics chapters ─── */
const allPhysicsChapters: ChapterData[] = mergeChaptersBySlug([
  ...mechanicsChapters1,   // Units & Dimensions, Kinematics
  ...mechanicsChapters2,   // Newton's Laws, Work Energy Power
  ...mechanicsChapters3,   // Centre of Mass, Rotational Motion
  ...mechanicsChapters4,   // Gravitation, Properties of Matter
  ...thermoWavesChapters,  // Thermodynamics, Heat Transfer, SHM & Waves
  ...electroChapters,      // Electrostatics, Current Electricity
  ...magnetismChapters,    // Magnetism, EMI & AC
  ...opticsModernChapters, // Optics, Modern Physics
  ...fluidElasticityChapters,  // Fluid Mechanics, Elasticity
  ...satelliteKeplerChapters,  // Satellite Motion, Kepler's Laws
  ...physGravPropChapters,      // Gravitation, Properties of Fluids
]);

export const physicsBank: SubjectBank = {
  subject: 'Physics',
  slug: 'physics',
  icon: '⚡',
  chapters: allPhysicsChapters,
};

/* ─── Combine all chemistry chapters ─── */
const allChemistryChapters: ChapterData[] = mergeChaptersBySlug([
  ...physicalChemChapters,   // Mole Concept, Atomic Structure, etc.
  ...organicChemChapters,    // GOC, Hydrocarbons, etc.
  ...inorganicChemChapters,  // Periodic Table, Chemical Bonding, etc.
  ...thermoElectrochemChapters, // Chemical Thermodynamics, Electrochemistry
  ...organicExpansionChapters,  // Aldehydes/Ketones, Amines, Polymers
]);

export const chemistryBank: SubjectBank = {
  subject: 'Chemistry',
  slug: 'chemistry',
  icon: '🧪',
  chapters: allChemistryChapters,
};

/* ─── Combine all maths chapters ─── */
const allMathsChapters: ChapterData[] = mergeChaptersBySlug([
  ...algebraChapters,      // Sets, Complex Numbers, Quadratics, P&C, Binomial, Matrices, Sequences
  ...calculusChapters,     // Limits, Differentiation, Integration, Differential Equations
  ...coordTrigChapters,    // Straight Lines, Circles, Conics, Trigonometry, Vectors & 3D, Probability
  ...algebraExpansionChapters,  // Determinants, Statistics
  ...calculusExpansionChapters, // Application of Derivatives, Area Under Curves
  ...coordinateChapters,        // Coordinate Geometry
  ...trigVectorsChapters,      // Trigonometry, Vectors & 3D
]);

export const mathsBank: SubjectBank = {
  subject: 'Mathematics',
  slug: 'mathematics',
  icon: '📐',
  chapters: allMathsChapters,
};

/* ─── All subject banks ─── */
export const subjectBanks: SubjectBank[] = [physicsBank, chemistryBank, mathsBank];

/* ─── Utility helpers ─── */
export type Difficulty = 'easy' | 'medium' | 'hard';

/** Get a flat list of all questions for a subject + difficulty */
export function getQuestionsBySubjectDifficulty(
  subjectSlug: string,
  difficulty: Difficulty,
): PracticeQuestion[] {
  const bank = subjectBanks.find((b) => b.slug === subjectSlug);
  if (!bank) return [];
  return bank.chapters.flatMap((ch) =>
    ch.topics.flatMap((t) => t[difficulty]),
  );
}

/** Find a chapter by slug */
export function getChapter(
  subjectSlug: string,
  chapterSlug: string,
): ChapterData | undefined {
  const bank = subjectBanks.find((b) => b.slug === subjectSlug);
  return bank?.chapters.find((c) => c.slug === chapterSlug);
}

/** Build a map of all valid practice slugs → route params */
export interface PracticeRouteParams {
  subject: string;
  chapter: string;
  topic: string;
  difficulty: Difficulty;
  questionIndex: number; // 1-based
}

export function buildAllPracticeSlugs(): { slug: string; params: PracticeRouteParams }[] {
  const result: { slug: string; params: PracticeRouteParams }[] = [];

  for (const bank of subjectBanks) {
    for (const chapter of bank.chapters) {
      for (const topic of chapter.topics) {
        for (const diff of ['easy', 'medium', 'hard'] as Difficulty[]) {
          const questions = topic[diff];
          // Build base slugs from question text, then deduplicate
          const baseSlugs = questions.map(q => slugifyQuestion(q.q));
          const uniqueSlugs = deduplicateSlugs(baseSlugs);
          questions.forEach((_, idx) => {
            const slug = `jee-${bank.slug}-${chapter.slug}-${topic.slug}-${diff}-${uniqueSlugs[idx]}`;
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
const _allSlugs = buildAllPracticeSlugs();
const _slugMap = new Map<string, PracticeRouteParams>(
  _allSlugs.map((s) => [s.slug, s.params]),
);

/* ─── Reverse lookup: params → slug ─── */
const _paramToSlug = new Map<string, string>(
  _allSlugs.map((s) => [
    `${s.params.subject}|${s.params.chapter}|${s.params.topic}|${s.params.difficulty}|${s.params.questionIndex}`,
    s.slug,
  ]),
);

/** Get the SEO-friendly slug for given practice question params */
export function getPracticeSlugByParams(
  subject: string, chapter: string, topic: string, difficulty: Difficulty, questionIndex: number,
): string | null {
  return _paramToSlug.get(`${subject}|${chapter}|${topic}|${difficulty}|${questionIndex}`) ?? null;
}

/** Parse a practice slug into route params via direct lookup */
export function parsePracticeSlug(slug: string): PracticeRouteParams | null {
  return _slugMap.get(slug) ?? null;
}

/** Get a question from params */
export function getQuestion(params: PracticeRouteParams): PracticeQuestion | null {
  const bank = subjectBanks.find((b) => b.slug === params.subject);
  if (!bank) return null;
  const chapter = bank.chapters.find((c) => c.slug === params.chapter);
  if (!chapter) return null;
  const topic = chapter.topics.find((t) => t.slug === params.topic);
  if (!topic) return null;
  const questions = topic[params.difficulty];
  return questions[params.questionIndex - 1] ?? null;
}

/** Get total question count for a subject */
export function getTotalQuestions(subjectSlug: string): number {
  const bank = subjectBanks.find((b) => b.slug === subjectSlug);
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

/** Get total count per chapter */
export function getChapterQuestionCount(chapter: ChapterData): number {
  return chapter.topics.reduce(
    (sum, t) => sum + t.easy.length + t.medium.length + t.hard.length,
    0,
  );
}

/**
 * Chapter-hub slugs (`jee-practice-<subject>-<chapter>`).
 *
 * These hub pages already exist and render — QuestionSlugRouter routes them to
 * <JEEPracticeChapterHub>, which lists every topic and every question in the
 * chapter with its solution. They were, however, advertised in no sitemap at
 * all: not the curated Google one, not bing-pages.xml. So the substantive
 * aggregation pages were invisible while the ~35-word leaf questions were the
 * only thing search engines were pointed at. This builder feeds them into
 * /sitemap-chapters.xml. See docs/geo-llm-strategy.md §6.1.
 */
export function buildAllPracticeHubSlugs(): string[] {
  const slugs: string[] = [];
  for (const bank of subjectBanks) {
    for (const chapter of bank.chapters) {
      if (getChapterQuestionCount(chapter) > 0) {
        slugs.push(`jee-practice-${bank.slug}-${chapter.slug}`);
      }
    }
  }
  return slugs;
}
