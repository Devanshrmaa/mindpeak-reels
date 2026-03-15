/**
 * Answer Key Data Entry File
 * ══════════════════════════════════════════════════════════════
 *
 * HOW TO USE (for MindPeak team):
 * ───────────────────────────────
 * 1. After an exam, your faculty solves the paper (from memory-based questions)
 * 2. Fill in the answers below in the correct exam's entry
 * 3. Git push → Vercel auto-deploys → answer key page is live in ~60 seconds
 *
 * Each entry is just: question number, subject, correct option, topic, difficulty
 * The system auto-generates the full blog page with analysis, stats, graphs.
 *
 * EXAMPLE — How to add NEET UG 2026 answer key:
 * ───────────────────────────────────────────────
 * Find the `neet-ug` entry below and fill the `answers` array:
 *
 *   { q: 1, subject: 'Physics', option: 'B', topic: 'Mechanics', difficulty: 'Easy' },
 *   { q: 2, subject: 'Physics', option: 'C', topic: 'Thermodynamics', difficulty: 'Medium' },
 *   ...
 *
 * That's it. The system handles everything else.
 *
 * FOR MULTI-SET EXAMS (like NEET with sets P1-P6):
 * ─────────────────────────────────────────────────
 * Enter answers for the BASE set (any one set). Then fill setMappings
 * to map question numbers across sets. The page auto-generates all sets.
 *
 * ══════════════════════════════════════════════════════════════
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

/* ═══ Types ═══ */

export interface AnswerEntry {
  /** Question number (1-based) */
  q: number;
  /** Subject: Physics, Chemistry, Mathematics, Biology, English, Logical Reasoning */
  subject: string;
  /** Correct option: 1/2/3/4 for MCQ, or a number for numerical-type */
  option: 1 | 2 | 3 | 4 | number;
  /** Chapter/topic name (helps generate analysis) */
  topic: string;
  /** Difficulty as assessed by faculty */
  difficulty: 'Easy' | 'Medium' | 'Hard';
  /** Optional one-line explanation or approach hint */
  hint?: string;
}

export interface ExamAnswerKeyData {
  /** Must match a slug in examCalendar.ts, e.g. 'neet-ug', 'jee-main-session-1' */
  examSlug: string;
  /** When your team published this (ISO date string) */
  publishedAt: string;
  /** Credit line, e.g. "MindPeak Faculty Team" */
  solvedBy: string;
  /** Set to true when answers are ready to go live */
  isLive: boolean;
  /** The actual answers — fill this after exam */
  answers: AnswerEntry[];
  /**
   * For multi-set exams (NEET has sets P1-P6, Q1-Q6 etc.):
   * Maps set name → array of question numbers showing how that set
   * reorders the base set. If base Q1 = Set P2 Q45, put 45 at index 0.
   * OPTIONAL — skip if exam has only one set.
   */
  setMappings?: Record<string, number[]>;
  /** Any notes to show on the page (e.g. "Set P1 used as base") */
  notes?: string;
}

/* ══════════════════════════════════════════════════════════════
   ANSWER KEY ENTRIES — Fill these after each exam
   ══════════════════════════════════════════════════════════════ */

const year = CURRENT_EXAM_YEAR;

export const answerKeyEntries: ExamAnswerKeyData[] = [

  // ────────────────────────────────────────────────────
  // JEE Main Session 1
  // Exam: ~January 22
  // Fill after your faculty solves the memory-based paper
  // ────────────────────────────────────────────────────
  {
    examSlug: 'jee-main-session-1',
    publishedAt: '', // e.g. '2026-01-22'
    solvedBy: 'MindPeak Faculty Team',
    isLive: false, // ← Set to true when answers are ready
    answers: [
      // PASTE ANSWERS HERE after exam. Example format:
      // { q: 1, subject: 'Physics', option: 2, topic: 'Mechanics', difficulty: 'Medium' },
      // { q: 2, subject: 'Physics', option: 3, topic: 'Electrostatics', difficulty: 'Easy' },
      // ...up to 90 questions
    ],
    notes: '',
  },

  // ────────────────────────────────────────────────────
  // JEE Main Session 2
  // Exam: ~April 6
  // ────────────────────────────────────────────────────
  {
    examSlug: 'jee-main-session-2',
    publishedAt: '',
    solvedBy: 'MindPeak Faculty Team',
    isLive: false,
    answers: [],
    notes: '',
  },

  // ────────────────────────────────────────────────────
  // JEE Advanced
  // Exam: ~May 25
  // Paper 1 (Q1-54) + Paper 2 (Q55-108) — enter sequentially
  // ────────────────────────────────────────────────────
  {
    examSlug: 'jee-advanced',
    publishedAt: '',
    solvedBy: 'MindPeak Faculty Team',
    isLive: false,
    answers: [],
    notes: '',
  },

  // ────────────────────────────────────────────────────
  // NEET UG
  // Exam: ~May 4
  // 200 questions: Physics (1-50), Chemistry (51-100),
  // Biology Botany (101-150), Biology Zoology (151-200)
  // Section A: 35 Qs (mandatory), Section B: 15 Qs (attempt 10)
  // ────────────────────────────────────────────────────
  {
    examSlug: 'neet-ug',
    publishedAt: '',
    solvedBy: 'MindPeak Faculty Team',
    isLive: false,
    answers: [
      // Fill 200 entries after exam. Example:
      // { q: 1,   subject: 'Physics',  option: 3, topic: 'Mechanics',       difficulty: 'Easy' },
      // { q: 51,  subject: 'Chemistry', option: 1, topic: 'Organic Chemistry', difficulty: 'Medium' },
      // { q: 101, subject: 'Biology',  option: 2, topic: 'Genetics',        difficulty: 'Easy' },
      // { q: 151, subject: 'Biology',  option: 4, topic: 'Human Physiology', difficulty: 'Hard' },
    ],
    setMappings: {
      // If NEET has multiple sets, map question orders here.
      // Example: 'Set P2': [45, 23, 1, 67, ...] means P2's Q1 = base Q45, etc.
    },
    notes: '',
  },

  // ────────────────────────────────────────────────────
  // BITSAT
  // Exam: ~May 20 (window-based, no single answer key)
  // BITSAT shows score immediately — no traditional answer key
  // ────────────────────────────────────────────────────
  {
    examSlug: 'bitsat',
    publishedAt: '',
    solvedBy: 'MindPeak Faculty Team',
    isLive: false,
    answers: [],
    notes: 'BITSAT is window-based with different question sets per candidate. This section can hold sample/memory-based questions.',
  },

  // ────────────────────────────────────────────────────
  // IISER Aptitude Test
  // Exam: ~June 15
  // ────────────────────────────────────────────────────
  {
    examSlug: 'iiser-aptitude-test',
    publishedAt: '',
    solvedBy: 'MindPeak Faculty Team',
    isLive: false,
    answers: [],
    notes: '',
  },
];

/* ═══ Helper functions ═══ */

/** Get answer key data for a specific exam. Returns null if no data or not live. */
export function getAnswerKeyData(examSlug: string): ExamAnswerKeyData | null {
  const entry = answerKeyEntries.find(e => e.examSlug === examSlug);
  if (!entry || !entry.isLive || entry.answers.length === 0) return null;
  return entry;
}

/** Check if an answer key has been published for an exam */
export function hasAnswerKey(examSlug: string): boolean {
  return getAnswerKeyData(examSlug) !== null;
}

/** Get subject-wise breakdown stats from answer entries */
export function getSubjectStats(answers: AnswerEntry[]): {
  subject: string;
  total: number;
  easy: number;
  medium: number;
  hard: number;
  topics: string[];
}[] {
  const map = new Map<string, { total: number; easy: number; medium: number; hard: number; topics: Set<string> }>();

  for (const a of answers) {
    const existing = map.get(a.subject) ?? { total: 0, easy: 0, medium: 0, hard: 0, topics: new Set<string>() };
    existing.total++;
    if (a.difficulty === 'Easy') existing.easy++;
    else if (a.difficulty === 'Medium') existing.medium++;
    else existing.hard++;
    existing.topics.add(a.topic);
    map.set(a.subject, existing);
  }

  return Array.from(map.entries()).map(([subject, stats]) => ({
    subject,
    total: stats.total,
    easy: stats.easy,
    medium: stats.medium,
    hard: stats.hard,
    topics: Array.from(stats.topics),
  }));
}

/** Get topic-wise breakdown for a subject */
export function getTopicBreakdown(answers: AnswerEntry[], subject: string): {
  topic: string;
  count: number;
  easy: number;
  medium: number;
  hard: number;
}[] {
  const filtered = answers.filter(a => a.subject === subject);
  const map = new Map<string, { count: number; easy: number; medium: number; hard: number }>();

  for (const a of filtered) {
    const existing = map.get(a.topic) ?? { count: 0, easy: 0, medium: 0, hard: 0 };
    existing.count++;
    if (a.difficulty === 'Easy') existing.easy++;
    else if (a.difficulty === 'Medium') existing.medium++;
    else existing.hard++;
    map.set(a.topic, existing);
  }

  return Array.from(map.entries())
    .map(([topic, stats]) => ({ topic, ...stats }))
    .sort((a, b) => b.count - a.count);
}
