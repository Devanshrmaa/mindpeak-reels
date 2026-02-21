export interface NEETPracticeQuestion {
  q: string;
  o: [string, string, string, string];
  a: 0 | 1 | 2 | 3;
  s: string;
}

export interface NEETTopicData {
  name: string;
  slug: string;
  easy: NEETPracticeQuestion[];
  medium: NEETPracticeQuestion[];
  hard: NEETPracticeQuestion[];
}

export interface NEETChapterData {
  name: string;
  slug: string;
  topics: NEETTopicData[];
}

export interface NEETSubjectBank {
  subject: string;
  slug: string;
  icon: string;
  chapters: NEETChapterData[];
}
