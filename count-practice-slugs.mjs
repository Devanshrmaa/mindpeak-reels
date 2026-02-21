// Temporary script to count practice slugs
import { readFileSync } from 'fs';
import { join } from 'path';

const dir = 'src/data/practice';
const files = [
  'physics-mechanics-1.ts',
  'physics-mechanics-2.ts',
  'physics-mechanics-3.ts',
  'physics-mechanics-4.ts',
  'physics-thermo-waves.ts',
  'physics-electro.ts',
  'physics-magnetism.ts',
  'physics-optics-modern.ts',
  'chemistry-physical.ts',
  'chemistry-organic.ts',
  'chemistry-inorganic.ts',
  'maths-algebra.ts',
  'maths-calculus.ts',
  'maths-coord-trig.ts',
];

let totalQuestions = 0;

for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const matches = content.match(/\{ q:/g);
  const count = matches ? matches.length : 0;
  totalQuestions += count;
  console.log(`${file}: ${count} questions`);
}

console.log(`\nTotal questions (= total slugs): ${totalQuestions}`);
