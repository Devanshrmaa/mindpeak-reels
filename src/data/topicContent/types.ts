export interface TopicContentData {
  /** One-sentence definition of the concept */
  definition: string;
  /** 2-4 sentence explanation of the concept */
  explanation: string;
  /** One surprising or memorable fact */
  keyFact: string;
  /** A real solved numerical problem */
  workedExample: {
    problem: string;
    solution: string;
    answer: string;
  };
  /** Real-world application in 1-2 sentences */
  realWorldApp: string;
  /** NCERT reference: "Class X, Chapter Y, Page Z" */
  ncertRef?: string;
}

/** Nested map: chapterSlug → topicName → content */
export type TopicContentMap = Record<string, Record<string, TopicContentData>>;
