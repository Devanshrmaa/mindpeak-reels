export interface PracticeQuestion {
  q: string;
  o: [string, string, string, string];
  a: 0 | 1 | 2 | 3;
  s: string;
}

export interface TopicData {
  name: string;
  slug: string;
  easy: PracticeQuestion[];
  medium: PracticeQuestion[];
  hard: PracticeQuestion[];
}

export interface ChapterData {
  name: string;
  slug: string;
  topics: TopicData[];
}

export interface SubjectBank {
  subject: string;
  slug: string;
  icon: string;
  chapters: ChapterData[];
}
