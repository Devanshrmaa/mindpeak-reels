/**
 * Exam Calendar Utility
 * Auto-updates exam dates, countdowns, and preparation phases.
 * Page content changes based on exam proximity — Google sees dynamic relevance.
 */

export interface ExamInfo {
  label: string;
  shortLabel: string;
  date: Date;
}

// Update these dates each year (or automate based on NTA announcements)
const examDates: Record<string, ExamInfo> = {
  jeeMain2026Session1: {
    label: 'JEE Main 2026 — Session 1',
    shortLabel: 'JEE Main S1',
    date: new Date('2026-01-20'),
  },
  jeeMain2026Session2: {
    label: 'JEE Main 2026 — Session 2',
    shortLabel: 'JEE Main S2',
    date: new Date('2026-04-15'),
  },
  jeeAdvanced2026: {
    label: 'JEE Advanced 2026',
    shortLabel: 'JEE Adv.',
    date: new Date('2026-05-24'),
  },
  neet2026: {
    label: 'NEET UG 2026',
    shortLabel: 'NEET 2026',
    date: new Date('2026-05-03'),
  },
  jeeMain2027Session1: {
    label: 'JEE Main 2027 — Session 1',
    shortLabel: 'JEE Main S1',
    date: new Date('2027-01-20'),
  },
  neet2027: {
    label: 'NEET UG 2027',
    shortLabel: 'NEET 2027',
    date: new Date('2027-05-04'),
  },
};

export type ExamKey = keyof typeof examDates;

/**
 * Returns the number of days until a specific exam.
 * Negative means the exam has passed.
 */
export function getDaysUntilExam(exam: ExamKey): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const examDate = examDates[exam].date;
  const diff = examDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Describes the current preparation phase based on days remaining.
 */
export function getPreparationPhase(exam: ExamKey): string {
  const daysLeft = getDaysUntilExam(exam);
  if (daysLeft <= 0) return 'Exam completed — results awaited';
  if (daysLeft <= 7) return 'Exam Week — Stay calm & confident';
  if (daysLeft <= 30) return 'Final Revision — Formulas & key topics';
  if (daysLeft <= 90) return 'Revision Phase — Mock tests & weak areas';
  if (daysLeft <= 180) return 'Intensive Phase — Complete syllabus';
  return 'Foundation Phase — Build strong concepts';
}

/**
 * Returns an urgency level for colour-coding.
 */
export function getUrgencyLevel(
  exam: ExamKey,
): 'low' | 'medium' | 'high' | 'critical' {
  const daysLeft = getDaysUntilExam(exam);
  if (daysLeft <= 0) return 'low'; // past
  if (daysLeft <= 30) return 'critical';
  if (daysLeft <= 90) return 'high';
  if (daysLeft <= 180) return 'medium';
  return 'low';
}

/**
 * Returns the next upcoming exam for a given category (JEE / NEET).
 * Automatically selects the nearest future exam.
 */
export function getNextUpcomingExam(
  category: 'JEE' | 'NEET',
): { key: ExamKey; info: ExamInfo; daysLeft: number } | null {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const candidates = Object.entries(examDates)
    .filter(([key]) =>
      category === 'JEE'
        ? key.toLowerCase().startsWith('jee')
        : key.toLowerCase().startsWith('neet'),
    )
    .filter(([, info]) => info.date.getTime() >= now.getTime())
    .sort(([, a], [, b]) => a.date.getTime() - b.date.getTime());

  if (candidates.length === 0) return null;

  const [key, info] = candidates[0];
  return {
    key: key as ExamKey,
    info,
    daysLeft: getDaysUntilExam(key as ExamKey),
  };
}

/**
 * Returns exam info for a given key.
 */
export function getExamInfo(exam: ExamKey): ExamInfo {
  return examDates[exam];
}
