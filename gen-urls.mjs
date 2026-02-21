import { readFileSync } from 'fs';

function topicToSlug(topic) {
  return topic
    .toLowerCase()
    .replace(/['\u2019]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const files = [
  'src/data/chapters/jeePhysics.ts',
  'src/data/chapters/jeeChemistry.ts',
  'src/data/chapters/jeeMaths.ts',
  'src/data/chapters/neetBiology.ts',
  'src/data/chapters/neetPhysics.ts',
  'src/data/chapters/neetChemistry.ts',
];

const urls = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const slugRegex = /slug:\s*'([^']+)'/g;
  const topicsRegex = /topics:\s*\[([^\]]+)\]/g;

  const slugs = [];
  const topicsArrays = [];

  let m;
  while ((m = slugRegex.exec(content)) !== null) {
    slugs.push(m[1]);
  }
  while ((m = topicsRegex.exec(content)) !== null) {
    const raw = m[1];
    const topics = [];
    const topicRegex = /'([^']+)'/g;
    let tm;
    while ((tm = topicRegex.exec(raw)) !== null) {
      topics.push(tm[1]);
    }
    topicsArrays.push(topics);
  }

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const topics = topicsArrays[i] || [];
    for (const topic of topics) {
      const topicSlug = topicToSlug(topic);
      urls.push(`https://mindpeakinstitute.com/${slug}/${topicSlug}`);
    }
  }
}

console.log(urls.join('\n'));
