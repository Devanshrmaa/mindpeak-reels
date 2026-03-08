import type { SubjectBank, ChapterData, PracticeQuestion } from './types';
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

/* ─── Combine all physics chapters ─── */
const allPhysicsChapters: ChapterData[] = [
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
];

export const physicsBank: SubjectBank = {
  subject: 'Physics',
  slug: 'physics',
  icon: '⚡',
  chapters: allPhysicsChapters,
};

/* ─── Combine all chemistry chapters ─── */
const allChemistryChapters: ChapterData[] = [
  ...physicalChemChapters,   // Mole Concept, Atomic Structure, etc.
  ...organicChemChapters,    // GOC, Hydrocarbons, etc.
  ...inorganicChemChapters,  // Periodic Table, Chemical Bonding, etc.
  ...thermoElectrochemChapters, // Chemical Thermodynamics, Electrochemistry
  ...organicExpansionChapters,  // Aldehydes/Ketones, Amines, Polymers
];

export const chemistryBank: SubjectBank = {
  subject: 'Chemistry',
  slug: 'chemistry',
  icon: '🧪',
  chapters: allChemistryChapters,
};

/* ─── Combine all maths chapters ─── */
const allMathsChapters: ChapterData[] = [
  ...algebraChapters,      // Sets, Complex Numbers, Quadratics, P&C, Binomial, Matrices, Sequences
  ...calculusChapters,     // Limits, Differentiation, Integration, Differential Equations
  ...coordTrigChapters,    // Straight Lines, Circles, Conics, Trigonometry, Vectors & 3D, Probability
  ...algebraExpansionChapters,  // Determinants, Statistics
  ...calculusExpansionChapters, // Application of Derivatives, Area Under Curves
  ...coordChapters,            // Coordinate Geometry
  ...trigVectorsChapters,      // Trigonometry, Vectors & 3D
];

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
