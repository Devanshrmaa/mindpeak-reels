import type { LucideIcon } from 'lucide-react';

import { jeePhysicsChapters } from './chapters/jeePhysics';
import { jeeChemistryChapters } from './chapters/jeeChemistry';
import { jeeMathsChapters } from './chapters/jeeMaths';
import { neetBiologyChapters } from './chapters/neetBiology';
import { neetPhysicsChapters } from './chapters/neetPhysics';
import { neetChemistryChapters } from './chapters/neetChemistry';

/* ═══════════════════════════════════════════════════════════════
   CHAPTER DATA — for programmatic chapter-wise SEO pages
   Every chapter generates a dedicated page with:
   - H1 targeting "[Subject] [Chapter] for JEE/NEET"
   - 10+ topics, key formulas, common mistakes
   - Previous year question stats
   - FAQ schema

   ~149 granular chapters across 6 subject files:
   • JEE Physics (22)  • JEE Chemistry (30)  • JEE Maths (23)
   • NEET Biology (34)  • NEET Physics (15)  • NEET Chemistry (25)
   ═══════════════════════════════════════════════════════════════ */

export interface ChapterData {
  slug: string;
  exam: 'JEE' | 'NEET';
  subject: string;
  chapter: string;
  icon: LucideIcon;
  weightage: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  pyqCount: number;
  description: string;
  topics: string[];
  keyFormulas: string[];
  commonMistakes: string[];
  faqs: { q: string; a: string }[];
}

export const chapters: ChapterData[] = [
  ...jeePhysicsChapters,
  ...jeeChemistryChapters,
  ...jeeMathsChapters,
  ...neetBiologyChapters,
  ...neetPhysicsChapters,
  ...neetChemistryChapters,
];

/** Get all chapter slugs for route generation */
export const CHAPTER_SLUGS = chapters.map(c => c.slug);

/** Get chapter data by slug */
export function getChapterBySlug(slug: string): ChapterData | undefined {
  return chapters.find(c => c.slug === slug);
}

/* ─── Topic-level utilities ─── */

/** Convert a topic name to a URL-friendly slug */
export function topicToSlug(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export interface TopicInfo {
  topicSlug: string;
  topicName: string;
  topicIndex: number;
  chapter: ChapterData;
}

/** Build a flat list of all topics with their slugs */
export const allTopics: TopicInfo[] = chapters.flatMap(chapter =>
  chapter.topics.map((topicName, topicIndex) => ({
    topicSlug: topicToSlug(topicName),
    topicName,
    topicIndex,
    chapter,
  }))
);

/** All topic route paths as "chapterSlug/topicSlug" */
export const TOPIC_PATHS = allTopics.map(t => `${t.chapter.slug}/${t.topicSlug}`);

/** Look up a topic by chapter slug + topic slug */
export function getTopicInfo(chapterSlug: string, topicSlug: string): TopicInfo | undefined {
  return allTopics.find(t => t.chapter.slug === chapterSlug && t.topicSlug === topicSlug);
}
