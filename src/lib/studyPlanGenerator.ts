/**
 * Dynamic Study Plan Generator
 * ─────────────────────────────
 * Generates a personalised month-by-month study plan based on the
 * number of months remaining until the target exam (JEE / NEET).
 *
 * Fee is prorated from the relevant course tier:
 *   12+ months  →  2-year programme rate (prorated)
 *   3-11 months →  1-year programme rate (prorated)
 *   1-2 months  →  Crash course flat rate
 */

import { CURRENT_EXAM_YEAR } from './examYears';

/* ─── Fee constants (in ₹, excl. GST) ─── */
const FEES = {
  twoYear: 230000,
  oneYear: 130000,
  crashPerSubject: 18000,
  premiumCrashPerSubject: 30000,
} as const;

/* ─── Subject lists ─── */
const JEE_SUBJECTS = ['Physics', 'Chemistry', 'Mathematics'] as const;
const NEET_SUBJECTS = ['Physics', 'Chemistry', 'Biology'] as const;

/* ─── Curriculum topic pools ─── */
const JEE_CURRICULUM: Record<string, string[]> = {
  Physics: [
    'Units & Kinematics',
    'Laws of Motion & Friction',
    'Work, Energy & Power',
    'Rotational Motion',
    'Gravitation',
    'Fluid Mechanics',
    'Thermal Physics & Kinetic Theory',
    'Thermodynamics',
    'Oscillations & Waves',
    'Electrostatics',
    'Current Electricity',
    'Magnetism & EMI',
    'Optics (Ray + Wave)',
    'Modern Physics & Nuclear',
    'Semiconductors',
  ],
  Chemistry: [
    'Atomic Structure & Periodicity',
    'Chemical Bonding',
    'States of Matter & Solutions',
    'Thermodynamics & Equilibrium',
    'Redox & Electrochemistry',
    'Chemical Kinetics',
    'Surface Chemistry',
    's-block & p-block Elements',
    'd-block & f-block Elements',
    'Coordination Compounds',
    'Organic — GOC & Isomerism',
    'Organic — Hydrocarbons',
    'Organic — Haloalkanes, Alcohols, Ethers',
    'Organic — Carbonyl, Amines, Biomolecules',
    'Polymers & Chemistry in Everyday Life',
  ],
  Mathematics: [
    'Sets, Relations & Functions',
    'Trigonometry',
    'Complex Numbers & Quadratics',
    'Sequences & Series',
    'Permutations & Combinations',
    'Binomial Theorem',
    'Matrices & Determinants',
    'Limits, Continuity & Differentiability',
    'Differentiation & Applications',
    'Integration & Applications',
    'Differential Equations',
    'Coordinate Geometry (Straight Lines, Circles)',
    'Conics (Parabola, Ellipse, Hyperbola)',
    'Vectors & 3D Geometry',
    'Probability & Statistics',
  ],
};

const NEET_CURRICULUM: Record<string, string[]> = {
  Physics: [
    'Units, Dimensions & Motion',
    'Laws of Motion & Friction',
    'Work, Energy & Power',
    'Rotational Motion & Gravitation',
    'Mechanical Properties & Fluids',
    'Thermal Physics',
    'Thermodynamics',
    'Oscillations & Waves',
    'Electrostatics & Capacitors',
    'Current Electricity',
    'Magnetic Effects & EMI',
    'AC & EM Waves',
    'Ray Optics & Wave Optics',
    'Dual Nature & Atoms',
    'Nuclear Physics & Semiconductors',
  ],
  Chemistry: [
    'Atomic Structure & Periodic Table',
    'Chemical Bonding',
    'States of Matter & Solutions',
    'Chemical Thermodynamics & Equilibrium',
    'Redox & Electrochemistry',
    'Chemical Kinetics',
    'Surface Chemistry & Colloids',
    's-block & p-block Elements',
    'd-block & Coordination Compounds',
    'Organic — GOC & Hydrocarbons',
    'Organic — Haloalkanes, Alcohols, Ethers',
    'Organic — Aldehydes, Amines, Biomolecules',
    'Polymers & Environmental Chemistry',
  ],
  Biology: [
    'Cell Biology & Biomolecules',
    'Cell Division & Cell Cycle',
    'Morphology & Anatomy of Plants',
    'Plant Physiology (Transport, Nutrition, Growth)',
    'Photosynthesis & Respiration',
    'Animal Tissues & Structural Organisation',
    'Human Physiology — Digestion & Breathing',
    'Human Physiology — Circulation & Excretion',
    'Neural Control & Locomotion',
    'Reproduction in Organisms & Plants',
    'Human Reproduction & Reproductive Health',
    'Genetics — Mendel, Molecular Basis',
    'Evolution & Human Health',
    'Ecology — Organisms, Ecosystems, Biodiversity',
    'Biotechnology & Its Applications',
  ],
};

/* ─── Types ─── */

export type ExamType = 'JEE' | 'NEET';

export interface MonthBlock {
  month: number; // 1-indexed month number
  label: string; // e.g. "Month 1 — Foundation"
  phase: string;
  subjects: { name: string; topics: string[] }[];
  weeklyHours: number;
  mockTests: number; // mock tests this month
  tips: string[];
}

export interface StudyPlan {
  examType: ExamType;
  examYear: number;
  totalMonths: number;
  tier: 'crash' | 'intensive' | 'standard' | 'extended';
  tierLabel: string;
  fee: string;
  feeNumeric: number;
  months: MonthBlock[];
  courseSlug: string;
  courseName: string;
  summary: string;
}

/* ─── Helpers ─── */

/**
 * Prorate fee with a short-duration premium.
 * Fewer months → higher per-month rate because the mentor delivers
 * the same syllabus in compressed time (more intensive sessions).
 *
 * Premium schedule:
 *   ≤ 4 months  → 40% markup
 *   ≤ 6 months  → 25% markup
 *   ≤ 8 months  → 15% markup
 *   ≤ 10 months → 5% markup
 *   > 10 months → no markup (standard rate)
 */
function prorateFee(base: number, fullMonths: number, actual: number): number {
  const perMonth = base / fullMonths;
  let premium = 1;
  if (actual <= 4) premium = 1.4;
  else if (actual <= 6) premium = 1.25;
  else if (actual <= 8) premium = 1.15;
  else if (actual <= 10) premium = 1.05;
  return Math.round((perMonth * actual * premium) / 1000) * 1000; // round to nearest 1000
}

function formatFee(n: number): string {
  return '₹' + n.toLocaleString('en-IN') + ' + GST';
}

function distributeTopics(
  topics: string[],
  totalMonths: number,
  reserveRevisionMonths: number,
): string[][] {
  const teachMonths = Math.max(1, totalMonths - reserveRevisionMonths);
  const perMonth = Math.ceil(topics.length / teachMonths);
  const result: string[][] = [];

  for (let i = 0; i < teachMonths; i++) {
    result.push(topics.slice(i * perMonth, (i + 1) * perMonth));
  }
  // Revision months — distribute all topics evenly for revision
  for (let i = 0; i < reserveRevisionMonths; i++) {
    const start = Math.floor((i * topics.length) / reserveRevisionMonths);
    const end = Math.floor(((i + 1) * topics.length) / reserveRevisionMonths);
    result.push(topics.slice(start, end).map((t) => `Revise: ${t}`));
  }
  return result;
}

function getPhaseLabel(monthIdx: number, total: number): string {
  const ratio = monthIdx / total;
  if (total <= 2) return 'Crash';
  if (ratio < 0.4) return 'Foundation';
  if (ratio < 0.7) return 'Intensive';
  if (ratio < 0.9) return 'Revision';
  return 'Mock Test & Fine-tuning';
}

function monthTips(phase: string): string[] {
  switch (phase) {
    case 'Crash':
      return [
        'Focus only on high-weightage chapters',
        'Solve last 3 years\' papers daily',
        'Formula revision every morning',
      ];
    case 'Foundation':
      return [
        'Build concepts from NCERT first',
        'Maintain a formula notebook',
        'Solve 20-30 problems daily per subject',
      ];
    case 'Intensive':
      return [
        'Attempt topic-wise mock tests',
        'Analyse weak areas & revisit',
        'Increase problem-solving speed',
      ];
    case 'Revision':
      return [
        'Full syllabus revision — one subject/day',
        'Attempt 2-3 full-length mocks per week',
        'Focus on accuracy over speed',
      ];
    case 'Mock Test & Fine-tuning':
      return [
        'Daily full-length mock tests',
        'Post-test error analysis (30 min)',
        'Keep a calm routine — sleep 7+ hours',
      ];
    default:
      return ['Stay consistent and follow the schedule'];
  }
}

/* ─── Main generator ─── */

export function generateStudyPlan(
  examType: ExamType,
  monthsRemaining: number,
): StudyPlan {
  const totalMonths = Math.max(1, Math.min(monthsRemaining, 24));
  const subjects = examType === 'JEE' ? JEE_SUBJECTS : NEET_SUBJECTS;
  const curriculum = examType === 'JEE' ? JEE_CURRICULUM : NEET_CURRICULUM;

  /* ── Determine tier ── */
  let tier: StudyPlan['tier'];
  let tierLabel: string;
  let feeNumeric: number;
  let courseSlug: string;
  let courseName: string;

  if (totalMonths <= 2) {
    tier = 'crash';
    tierLabel = '1-on-1 Crash Course';
    feeNumeric = FEES.premiumCrashPerSubject * subjects.length;
    courseSlug = '1-on-1-crash-program';
    courseName = `${examType} 1-on-1 Crash Programme`;
  } else if (totalMonths <= 6) {
    tier = 'intensive';
    tierLabel = 'Intensive Accelerated Programme';
    feeNumeric = prorateFee(FEES.oneYear, 12, totalMonths);
    courseSlug =
      examType === 'JEE'
        ? `jee-main-target-${CURRENT_EXAM_YEAR}`
        : `neet-target-${CURRENT_EXAM_YEAR}`;
    courseName = `${examType} Intensive ${totalMonths}-Month Programme`;
  } else if (totalMonths <= 12) {
    tier = 'standard';
    tierLabel = '1-Year Programme';
    feeNumeric = prorateFee(FEES.oneYear, 12, totalMonths);
    courseSlug =
      examType === 'JEE'
        ? `jee-main-target-${CURRENT_EXAM_YEAR}`
        : `neet-target-${CURRENT_EXAM_YEAR}`;
    courseName = `${examType} ${totalMonths}-Month Target Programme`;
  } else {
    tier = 'extended';
    tierLabel = '2-Year Foundation Programme';
    feeNumeric = prorateFee(FEES.twoYear, 24, totalMonths);
    courseSlug =
      examType === 'JEE'
        ? `jee-main-target-${CURRENT_EXAM_YEAR + 1}`
        : `neet-target-${CURRENT_EXAM_YEAR + 1}`;
    courseName = `${examType} ${totalMonths}-Month Foundation Programme`;
  }

  /* ── Build month-by-month curriculum ── */
  const revisionMonths = tier === 'crash' ? 0 : Math.max(1, Math.floor(totalMonths * 0.2));

  const subjectSchedules: Record<string, string[][]> = {};
  for (const subj of subjects) {
    const topics = curriculum[subj] || [];
    subjectSchedules[subj] = distributeTopics(topics, totalMonths, revisionMonths);
  }

  const months: MonthBlock[] = [];
  for (let m = 0; m < totalMonths; m++) {
    const phase = getPhaseLabel(m, totalMonths);
    const monthSubjects = subjects.map((subj) => ({
      name: subj,
      topics: subjectSchedules[subj][m] || [],
    }));

    const mockTests =
      tier === 'crash'
        ? 3
        : m >= totalMonths - revisionMonths
          ? Math.min(4, 2 + Math.floor((m - (totalMonths - revisionMonths)) / 1))
          : m < totalMonths * 0.4
            ? 1
            : 2;

    months.push({
      month: m + 1,
      label: `Month ${m + 1} — ${phase}`,
      phase,
      subjects: monthSubjects,
      weeklyHours: tier === 'crash' ? 40 : tier === 'intensive' ? 30 : 20,
      mockTests,
      tips: monthTips(phase),
    });
  }

  /* ── Summary ── */
  const summary =
    tier === 'crash'
      ? `With only ${totalMonths} month${totalMonths > 1 ? 's' : ''} until ${examType} ${CURRENT_EXAM_YEAR}, this crash course focuses exclusively on high-weightage chapters, rapid formula revision, and daily mock tests. Your dedicated 1-on-1 mentor will prioritise the 40-50 most important topics to maximise your score in the shortest time.`
      : tier === 'intensive'
        ? `This ${totalMonths}-month intensive plan covers the complete ${examType} syllabus at an accelerated pace. With 30+ hours/week of focused 1-on-1 sessions, weekly mocks, and targeted revision, you'll be exam-ready for ${examType} ${CURRENT_EXAM_YEAR}. Fee is prorated from the standard 1-year programme.`
        : tier === 'standard'
          ? `Your personalised ${totalMonths}-month programme provides comprehensive syllabus coverage, phased learning, and progressive mock-test intensity to ensure you peak at the right time for ${examType} ${CURRENT_EXAM_YEAR}.`
          : `This ${totalMonths}-month extended programme gives you the luxury of time to build unshakeable fundamentals before progressively advancing to competition-level problem-solving for ${examType} ${CURRENT_EXAM_YEAR + 1}.`;

  return {
    examType,
    examYear: tier === 'extended' ? CURRENT_EXAM_YEAR + 1 : CURRENT_EXAM_YEAR,
    totalMonths,
    tier,
    tierLabel,
    fee: formatFee(feeNumeric),
    feeNumeric,
    months,
    courseSlug,
    courseName,
    summary,
  };
}

/**
 * Computes months remaining until a target exam.
 */
export function getMonthsUntilExam(examType: ExamType): number {
  const now = new Date();
  // JEE Main Session 1 is around Jan 20; NEET is around May 4
  const examMonth = examType === 'JEE' ? 0 : 4; // Jan or May
  const examDay = examType === 'JEE' ? 20 : 4;
  const examDate = new Date(CURRENT_EXAM_YEAR, examMonth, examDay);

  const diff = examDate.getTime() - now.getTime();
  return Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24 * 30.44)));
}
