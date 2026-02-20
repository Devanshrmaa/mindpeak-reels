export interface PYQuestion {
  /** Question text */
  q: string;
  /** Four options */
  o: [string, string, string, string];
  /** Correct answer index (0-3) */
  a: 0 | 1 | 2 | 3;
  /** Solution / explanation */
  s: string;
  /** Year of the exam (2015-2025) */
  year: number;
  /** Shift info e.g. "Jan 24 Shift 1", "April 10 Shift 2", "Paper 1" */
  shift: string;
  /** 'main' or 'advanced' */
  exam: 'main' | 'advanced';
}

export interface PYQChapter {
  name: string;
  slug: string;
  questions: PYQuestion[];
}

export interface PYQSubjectBank {
  subject: string;
  slug: string;
  icon: string;
  chapters: PYQChapter[];
}
