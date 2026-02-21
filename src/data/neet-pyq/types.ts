export interface NEETPYQuestion {
  /** Question text */
  q: string;
  /** Four options */
  o: [string, string, string, string];
  /** Correct answer index (0-3) */
  a: 0 | 1 | 2 | 3;
  /** Solution / explanation */
  s: string;
  /** Year of the NEET exam (2015-2025) */
  year: number;
  /** Phase info e.g. "NEET 2023", "NEET 2022 Phase 2" */
  shift: string;
}

export interface NEETPYQChapter {
  name: string;
  slug: string;
  questions: NEETPYQuestion[];
}

export interface NEETPYQSubjectBank {
  subject: string;
  slug: string;
  icon: string;
  chapters: NEETPYQChapter[];
}
