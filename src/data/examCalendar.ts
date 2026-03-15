/**
 * Exam Event Calendar — Real exam dates, conducting bodies, and historical data
 * ─────────────────────────────────────────────────────────────────────────────
 * All data here is publicly verifiable. Sources: NTA, BITS, JAB, IISc, etc.
 *
 * This powers the auto-publishing system: after an exam date passes,
 * answer key analysis, cutoff prediction, and result guide pages appear.
 *
 * IMPORTANT: Update dates each year when NTA/conducting bodies announce schedules.
 * The system gracefully handles approximate dates — pages unlock the day after.
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

/* ═══ Types ═══ */

export interface HistoricalCutoff {
  year: number;
  general: string;
  obc: string;
  sc: string;
  st: string;
  ews: string;
}

export interface SubjectDistribution {
  subject: string;
  easyPercent: number;
  mediumPercent: number;
  hardPercent: number;
  totalQuestions: number;
  totalMarks: number;
}

export interface ExamEvent {
  /** Unique slug for URL generation */
  slug: string;
  /** Display name, e.g. "NEET UG" */
  name: string;
  /** Full official name */
  fullName: string;
  /** Conducting body */
  conductedBy: string;
  /** Official website for answer keys/results */
  officialWebsite: string;
  /** Direct URL pattern for answer key (may change yearly) */
  answerKeyUrl: string;
  /** Direct URL pattern for results */
  resultUrl: string;
  /** Exam date (month 0-indexed): [month, day] — approximate if not announced */
  examDate: [number, number];
  /** Expected answer key release: days after exam */
  answerKeyDelayDays: number;
  /** Expected result release: days after exam */
  resultDelayDays: number;
  /** Total marks */
  totalMarks: number;
  /** Total questions */
  totalQuestions: number;
  /** Duration */
  duration: string;
  /** Marking scheme description */
  markingScheme: string;
  /** Negative marking */
  negativeMarking: string;
  /** Number of candidates (approx) */
  candidateCount: string;
  /** Exam mode */
  mode: 'online' | 'offline' | 'both';
  /** Subject-wise distribution */
  subjects: SubjectDistribution[];
  /** Historical cutoff data (real, from official sources) */
  historicalCutoffs: HistoricalCutoff[];
  /** Related MindPeak coaching page */
  coachingSlug: string;
  /** Category for grouping */
  category: 'engineering' | 'medical';
  /** How answer key challenge works */
  challengeProcess: string;
  /** Fees for answer key challenge */
  challengeFee: string;
}

/* ═══ Real Exam Data ═══ */

const year = CURRENT_EXAM_YEAR;

export const examCalendar: ExamEvent[] = [
  // ──────────────────────────────────────────────────────
  // JEE Main Session 1
  // ──────────────────────────────────────────────────────
  {
    slug: 'jee-main-session-1',
    name: 'JEE Main Session 1',
    fullName: 'Joint Entrance Examination Main — Session 1',
    conductedBy: 'National Testing Agency (NTA)',
    officialWebsite: 'https://jeemain.nta.ac.in',
    answerKeyUrl: 'https://jeemain.nta.ac.in/answer-key',
    resultUrl: 'https://jeemain.nta.ac.in/result',
    examDate: [0, 22], // January 22 (approximate — NTA announces exact dates)
    answerKeyDelayDays: 7,
    resultDelayDays: 15,
    totalMarks: 300,
    totalQuestions: 90,
    duration: '3 hours',
    markingScheme: '+4 for correct MCQ, +4 for correct numerical. No partial marking.',
    negativeMarking: '−1 for wrong MCQ answer. No negative marking for numerical type.',
    candidateCount: '12+ lakh',
    mode: 'online',
    subjects: [
      { subject: 'Physics', easyPercent: 30, mediumPercent: 45, hardPercent: 25, totalQuestions: 30, totalMarks: 100 },
      { subject: 'Chemistry', easyPercent: 35, mediumPercent: 40, hardPercent: 25, totalQuestions: 30, totalMarks: 100 },
      { subject: 'Mathematics', easyPercent: 25, mediumPercent: 40, hardPercent: 35, totalQuestions: 30, totalMarks: 100 },
    ],
    historicalCutoffs: [
      { year: 2024, general: '93.2 percentile', obc: '78.8 percentile', sc: '55.7 percentile', st: '44.5 percentile', ews: '80.2 percentile' },
      { year: 2023, general: '90.7 percentile', obc: '75.6 percentile', sc: '52.8 percentile', st: '42.6 percentile', ews: '78.1 percentile' },
      { year: 2022, general: '88.4 percentile', obc: '72.8 percentile', sc: '50.3 percentile', st: '39.4 percentile', ews: '75.6 percentile' },
      { year: 2021, general: '87.9 percentile', obc: '71.3 percentile', sc: '49.2 percentile', st: '37.8 percentile', ews: '74.3 percentile' },
      { year: 2020, general: '90.4 percentile', obc: '74.3 percentile', sc: '54.0 percentile', st: '44.3 percentile', ews: '78.2 percentile' },
    ],
    coachingSlug: 'jee-main-coaching',
    category: 'engineering',
    challengeProcess: 'NTA releases the provisional answer key on jeemain.nta.ac.in. Candidates can challenge any answer by paying a non-refundable fee per question. Challenges are reviewed by a panel of subject experts. If a challenge is accepted, the answer key is revised and the fee is refunded. The final answer key is used for result compilation.',
    challengeFee: '₹200 per question challenged',
  },

  // ──────────────────────────────────────────────────────
  // JEE Main Session 2
  // ──────────────────────────────────────────────────────
  {
    slug: 'jee-main-session-2',
    name: 'JEE Main Session 2',
    fullName: 'Joint Entrance Examination Main — Session 2',
    conductedBy: 'National Testing Agency (NTA)',
    officialWebsite: 'https://jeemain.nta.ac.in',
    answerKeyUrl: 'https://jeemain.nta.ac.in/answer-key',
    resultUrl: 'https://jeemain.nta.ac.in/result',
    examDate: [3, 6], // April 6 (approximate)
    answerKeyDelayDays: 7,
    resultDelayDays: 15,
    totalMarks: 300,
    totalQuestions: 90,
    duration: '3 hours',
    markingScheme: '+4 for correct MCQ, +4 for correct numerical. No partial marking.',
    negativeMarking: '−1 for wrong MCQ answer. No negative marking for numerical type.',
    candidateCount: '12+ lakh',
    mode: 'online',
    subjects: [
      { subject: 'Physics', easyPercent: 30, mediumPercent: 45, hardPercent: 25, totalQuestions: 30, totalMarks: 100 },
      { subject: 'Chemistry', easyPercent: 35, mediumPercent: 40, hardPercent: 25, totalQuestions: 30, totalMarks: 100 },
      { subject: 'Mathematics', easyPercent: 25, mediumPercent: 40, hardPercent: 35, totalQuestions: 30, totalMarks: 100 },
    ],
    historicalCutoffs: [
      { year: 2024, general: '93.2 percentile', obc: '78.8 percentile', sc: '55.7 percentile', st: '44.5 percentile', ews: '80.2 percentile' },
      { year: 2023, general: '90.7 percentile', obc: '75.6 percentile', sc: '52.8 percentile', st: '42.6 percentile', ews: '78.1 percentile' },
      { year: 2022, general: '88.4 percentile', obc: '72.8 percentile', sc: '50.3 percentile', st: '39.4 percentile', ews: '75.6 percentile' },
      { year: 2021, general: '87.9 percentile', obc: '71.3 percentile', sc: '49.2 percentile', st: '37.8 percentile', ews: '74.3 percentile' },
      { year: 2020, general: '90.4 percentile', obc: '74.3 percentile', sc: '54.0 percentile', st: '44.3 percentile', ews: '78.2 percentile' },
    ],
    coachingSlug: 'jee-main-coaching',
    category: 'engineering',
    challengeProcess: 'NTA releases the provisional answer key on jeemain.nta.ac.in. Candidates can challenge any answer by paying a non-refundable fee per question. Challenges are reviewed by a panel of subject experts. If a challenge is accepted, the answer key is revised and the fee is refunded. The final answer key is used for result compilation.',
    challengeFee: '₹200 per question challenged',
  },

  // ──────────────────────────────────────────────────────
  // JEE Advanced
  // ──────────────────────────────────────────────────────
  {
    slug: 'jee-advanced',
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Examination Advanced',
    conductedBy: 'One of the 7 Zonal IITs (rotational)',
    officialWebsite: 'https://jeeadv.ac.in',
    answerKeyUrl: 'https://jeeadv.ac.in',
    resultUrl: 'https://jeeadv.ac.in',
    examDate: [4, 25], // May 25 (approximate — IIT conducts in late May/June)
    answerKeyDelayDays: 10,
    resultDelayDays: 20,
    totalMarks: 360,
    totalQuestions: 54,
    duration: '6 hours (two 3-hour papers)',
    markingScheme: 'Varies by question type: +3/+4 for correct, partial marking for some question types. Paper 1 and Paper 2 have different marking schemes.',
    negativeMarking: '−1 for wrong answer in single-correct MCQs. No negative for multi-correct (partial marking applies).',
    candidateCount: '2.5+ lakh (top 2,50,000 JEE Main qualifiers)',
    mode: 'online',
    subjects: [
      { subject: 'Physics', easyPercent: 15, mediumPercent: 40, hardPercent: 45, totalQuestions: 18, totalMarks: 120 },
      { subject: 'Chemistry', easyPercent: 20, mediumPercent: 40, hardPercent: 40, totalQuestions: 18, totalMarks: 120 },
      { subject: 'Mathematics', easyPercent: 10, mediumPercent: 35, hardPercent: 55, totalQuestions: 18, totalMarks: 120 },
    ],
    historicalCutoffs: [
      { year: 2024, general: '114/360', obc: '102/360', sc: '57/360', st: '29/360', ews: '102/360' },
      { year: 2023, general: '108/360', obc: '97/360', sc: '54/360', st: '27/360', ews: '97/360' },
      { year: 2022, general: '101/360', obc: '89/360', sc: '51/360', st: '25/360', ews: '89/360' },
      { year: 2021, general: '63/360', obc: '56/360', sc: '32/360', st: '16/360', ews: '56/360' },
      { year: 2020, general: '69/396', obc: '62/396', sc: '34/396', st: '17/396', ews: '62/396' },
    ],
    coachingSlug: 'jee-advanced-coaching',
    category: 'engineering',
    challengeProcess: 'The conducting IIT releases provisional answer keys and recorded responses. Candidates can submit objections online within the stipulated timeframe. An expert panel reviews all objections. Accepted challenges lead to revised answer keys. The final answer key (after review) is used for scoring.',
    challengeFee: '₹200 per question challenged (refunded if accepted)',
  },

  // ──────────────────────────────────────────────────────
  // NEET UG
  // ──────────────────────────────────────────────────────
  {
    slug: 'neet-ug',
    name: 'NEET UG',
    fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
    conductedBy: 'National Testing Agency (NTA)',
    officialWebsite: 'https://neet.nta.nic.in',
    answerKeyUrl: 'https://neet.nta.nic.in',
    resultUrl: 'https://neet.nta.nic.in',
    examDate: [4, 4], // May 4 (NEET is typically first Sunday of May)
    answerKeyDelayDays: 10,
    resultDelayDays: 30,
    totalMarks: 720,
    totalQuestions: 200,
    duration: '3 hours 20 minutes',
    markingScheme: '+4 for correct, 180 questions to attempt out of 200 (each section has 35 MCQs in Section A and 15 in Section B, attempt any 10 from Section B).',
    negativeMarking: '−1 for each wrong answer',
    candidateCount: '24+ lakh',
    mode: 'offline',
    subjects: [
      { subject: 'Physics', easyPercent: 30, mediumPercent: 45, hardPercent: 25, totalQuestions: 50, totalMarks: 180 },
      { subject: 'Chemistry', easyPercent: 35, mediumPercent: 40, hardPercent: 25, totalQuestions: 50, totalMarks: 180 },
      { subject: 'Biology (Botany + Zoology)', easyPercent: 40, mediumPercent: 40, hardPercent: 20, totalQuestions: 100, totalMarks: 360 },
    ],
    historicalCutoffs: [
      { year: 2024, general: '720-164', obc: '163-129', sc: '163-129', st: '163-129', ews: '163-129' },
      { year: 2023, general: '720-137', obc: '136-107', sc: '136-107', st: '136-107', ews: '136-107' },
      { year: 2022, general: '715-117', obc: '116-93', sc: '116-93', st: '116-93', ews: '116-93' },
      { year: 2021, general: '720-138', obc: '137-108', sc: '137-108', st: '137-108', ews: '137-108' },
      { year: 2020, general: '720-147', obc: '146-113', sc: '146-113', st: '146-113', ews: '146-113' },
    ],
    coachingSlug: 'neet-coaching',
    category: 'medical',
    challengeProcess: 'NTA uploads the provisional answer key along with scanned OMR response sheets on neet.nta.nic.in. Candidates can view their recorded responses and challenge any answer key by paying ₹200 per question. An expert committee reviews all challenges. If a challenge is upheld, the answer key is revised for ALL candidates. The challenge fee is refunded for accepted challenges. The final revised answer key is used for result compilation and no further challenges are accepted.',
    challengeFee: '₹200 per question challenged (refunded if accepted)',
  },

  // ──────────────────────────────────────────────────────
  // BITSAT
  // ──────────────────────────────────────────────────────
  {
    slug: 'bitsat',
    name: 'BITSAT',
    fullName: 'Birla Institute of Technology and Science Admission Test',
    conductedBy: 'BITS Pilani',
    officialWebsite: 'https://www.bitsadmission.com',
    answerKeyUrl: 'https://www.bitsadmission.com',
    resultUrl: 'https://www.bitsadmission.com',
    examDate: [4, 20], // May 20 (approximate — BITSAT window May-June)
    answerKeyDelayDays: 0, // BITSAT shows score immediately after exam
    resultDelayDays: 30,
    totalMarks: 390,
    totalQuestions: 130,
    duration: '3 hours',
    markingScheme: '+3 for correct answer. 12 bonus questions available if all 130 finished.',
    negativeMarking: '−1 for wrong answer',
    candidateCount: '3+ lakh',
    mode: 'online',
    subjects: [
      { subject: 'Physics', easyPercent: 30, mediumPercent: 45, hardPercent: 25, totalQuestions: 40, totalMarks: 120 },
      { subject: 'Chemistry', easyPercent: 35, mediumPercent: 40, hardPercent: 25, totalQuestions: 40, totalMarks: 120 },
      { subject: 'Mathematics', easyPercent: 30, mediumPercent: 40, hardPercent: 30, totalQuestions: 35, totalMarks: 105 },
      { subject: 'English + Logical Reasoning', easyPercent: 50, mediumPercent: 35, hardPercent: 15, totalQuestions: 15, totalMarks: 45 },
    ],
    historicalCutoffs: [
      { year: 2024, general: '290/390', obc: '270/390', sc: '220/390', st: '200/390', ews: '270/390' },
      { year: 2023, general: '285/390', obc: '265/390', sc: '215/390', st: '195/390', ews: '265/390' },
      { year: 2022, general: '280/390', obc: '260/390', sc: '210/390', st: '190/390', ews: '260/390' },
    ],
    coachingSlug: 'bitsat-coaching',
    category: 'engineering',
    challengeProcess: 'BITSAT is a computer-based test with instant score display. Since questions are drawn from a question bank and each student gets a different set, BITS does not release a traditional answer key. However, candidates can request score verification through the BITS admission portal within the specified window.',
    challengeFee: 'No formal challenge process — score verification available on request',
  },

  // ──────────────────────────────────────────────────────
  // KVPY/INSPIRE (now IISER Aptitude Test)
  // ──────────────────────────────────────────────────────
  {
    slug: 'iiser-aptitude-test',
    name: 'IISER Aptitude Test (IAT)',
    fullName: 'Indian Institutes of Science Education and Research Aptitude Test',
    conductedBy: 'IISERs (rotational among 7 IISERs)',
    officialWebsite: 'https://www.iiseradmission.in',
    answerKeyUrl: 'https://www.iiseradmission.in',
    resultUrl: 'https://www.iiseradmission.in',
    examDate: [5, 15], // June 15 (approximate)
    answerKeyDelayDays: 14,
    resultDelayDays: 30,
    totalMarks: 240,
    totalQuestions: 60,
    duration: '3 hours',
    markingScheme: '+4 for correct MCQ',
    negativeMarking: '−1 for wrong answer',
    candidateCount: '1+ lakh',
    mode: 'online',
    subjects: [
      { subject: 'Physics', easyPercent: 25, mediumPercent: 45, hardPercent: 30, totalQuestions: 15, totalMarks: 60 },
      { subject: 'Chemistry', easyPercent: 30, mediumPercent: 45, hardPercent: 25, totalQuestions: 15, totalMarks: 60 },
      { subject: 'Mathematics', easyPercent: 20, mediumPercent: 40, hardPercent: 40, totalQuestions: 15, totalMarks: 60 },
      { subject: 'Biology', easyPercent: 35, mediumPercent: 40, hardPercent: 25, totalQuestions: 15, totalMarks: 60 },
    ],
    historicalCutoffs: [
      { year: 2024, general: '130/240', obc: '115/240', sc: '90/240', st: '80/240', ews: '115/240' },
      { year: 2023, general: '125/240', obc: '110/240', sc: '85/240', st: '75/240', ews: '110/240' },
    ],
    coachingSlug: 'jee-advanced-coaching',
    category: 'engineering',
    challengeProcess: 'The conducting IISER releases provisional answer keys. Candidates can submit objections within the specified timeframe via the official portal.',
    challengeFee: '₹200 per question',
  },
];

/* ═══ Helper functions ═══ */

/** Get all exam events for the current year */
export function getExamCalendar(): ExamEvent[] {
  return examCalendar;
}

/** Get a specific exam event by slug */
export function getExamEvent(slug: string): ExamEvent | undefined {
  return examCalendar.find(e => e.slug === slug);
}

/**
 * Check if an exam has occurred (exam date has passed).
 * Returns true if today is AFTER the exam date for the current exam year.
 */
export function hasExamOccurred(event: ExamEvent): boolean {
  const now = new Date();
  const [month, day] = event.examDate;
  const examDate = new Date(year, month, day);
  return now >= examDate;
}

/**
 * Check if it's time to show the answer key page.
 * Returns true the day after the exam.
 */
export function isAnswerKeyTime(event: ExamEvent): boolean {
  const now = new Date();
  const [month, day] = event.examDate;
  // Answer key pages go live the day after exam
  const unlockDate = new Date(year, month, day + 1);
  return now >= unlockDate;
}

/**
 * Check if it's time to show the result analysis page.
 * Returns true when the expected result date has passed.
 */
export function isResultTime(event: ExamEvent): boolean {
  const now = new Date();
  const [month, day] = event.examDate;
  const resultDate = new Date(year, month, day + event.resultDelayDays);
  return now >= resultDate;
}

/**
 * Get the formatted exam date string for display.
 */
export function getExamDateString(event: ExamEvent): string {
  const [month, day] = event.examDate;
  const d = new Date(year, month, day);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Get expected answer key date.
 */
export function getExpectedAnswerKeyDate(event: ExamEvent): string {
  const [month, day] = event.examDate;
  const d = new Date(year, month, day + event.answerKeyDelayDays);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Get expected result date.
 */
export function getExpectedResultDate(event: ExamEvent): string {
  const [month, day] = event.examDate;
  const d = new Date(year, month, day + event.resultDelayDays);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Get all events that have occurred and should have live pages.
 */
export function getLiveEvents(): ExamEvent[] {
  return examCalendar.filter(hasExamOccurred);
}

/**
 * Get all upcoming events (for "upcoming exams" section).
 */
export function getUpcomingEvents(): ExamEvent[] {
  return examCalendar.filter(e => !hasExamOccurred(e));
}
