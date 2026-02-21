import { buildAllPracticeSlugs } from './src/data/practice/index.ts';
import { buildAllPYQSlugs } from './src/data/pyq/index.ts';
import { buildAllNEETPYQSlugs } from './src/data/neet-pyq/index.ts';
import { buildAllNEETPracticeSlugs } from './src/data/neet-practice/index.ts';
import { CHAPTER_SLUGS, TOPIC_PATHS } from './src/data/chapterData.ts';

const practice = buildAllPracticeSlugs();
const pyq = buildAllPYQSlugs();
const neetPyq = buildAllNEETPYQSlugs();
const neetPractice = buildAllNEETPracticeSlugs();

console.log('PRACTICE_SLUGS:', practice.length);
console.log('PYQ_SLUGS:', pyq.length);
console.log('NEET_PYQ_SLUGS:', neetPyq.length);
console.log('NEET_PRACTICE_SLUGS:', neetPractice.length);
console.log('CHAPTER_SLUGS:', CHAPTER_SLUGS.length);
console.log('TOPIC_PATHS:', TOPIC_PATHS.length);
