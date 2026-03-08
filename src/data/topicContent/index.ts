export type { TopicContentData, TopicContentMap } from './types';
import type { TopicContentData } from './types';
import { jeePhysicsContent } from './jeePhysics';

/** All topic content merged into a single map */
const allContent: Record<string, Record<string, TopicContentData>> = {
  ...jeePhysicsContent,
  // Future: ...jeeChemistryContent, ...jeeMathsContent, ...neetContent
};

/**
 * Look up real educational content for a topic.
 * Returns undefined if no enriched content exists yet.
 */
export function getTopicContent(chapterSlug: string, topicName: string): TopicContentData | undefined {
  return allContent[chapterSlug]?.[topicName];
}

/** Check whether a chapter has any enriched content */
export function hasTopicContent(chapterSlug: string): boolean {
  return chapterSlug in allContent;
}
