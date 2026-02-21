import { chapters, topicToSlug } from './src/data/chapterData';

for (const chapter of chapters) {
  for (const topic of chapter.topics) {
    const tSlug = topicToSlug(topic);
    console.log(`https://mindpeakinstitute.com/${chapter.slug}/${tSlug}`);
  }
}
