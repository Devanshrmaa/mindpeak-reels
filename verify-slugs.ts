import { buildAllPracticeSlugs } from './src/data/practice/index.ts';
import { buildAllPYQSlugs } from './src/data/pyq/index.ts';
import { buildAllNEETPracticeSlugs } from './src/data/neet-practice/index.ts';
import { buildAllNEETPYQSlugs } from './src/data/neet-pyq/index.ts';

const jeePracticeSlugs = new Set(buildAllPracticeSlugs().map(s => s.slug));
const jeePyqSlugs = new Set(buildAllPYQSlugs().map(s => s.slug));
const neetPracticeSlugs = new Set(buildAllNEETPracticeSlugs().map(s => s.slug));
const neetPyqSlugs = new Set(buildAllNEETPYQSlugs().map(s => s.slug));

const footerJeePractice = [
  'jee-physics-units-dimensions-si-units-easy-q1',
  'jee-physics-units-dimensions-si-units-medium-q1',
  'jee-physics-units-dimensions-si-units-hard-q1',
  'jee-chemistry-mole-concept-mole-avogadro-easy-q1',
  'jee-chemistry-mole-concept-mole-avogadro-medium-q1',
  'jee-chemistry-mole-concept-mole-avogadro-hard-q1',
  'jee-mathematics-sets-relations-functions-sets-venn-easy-q1',
  'jee-mathematics-sets-relations-functions-sets-venn-medium-q1',
  'jee-mathematics-sets-relations-functions-sets-venn-hard-q1',
];

const footerJeePyq = [
  'jee-pyq-physics-kinematics-q1',
  'jee-pyq-physics-electrostatics-q1',
  'jee-pyq-chemistry-mole-concept-q1',
  'jee-pyq-chemistry-electrochemistry-q1',
  'jee-pyq-mathematics-integral-calculus-q1',
  'jee-pyq-mathematics-probability-statistics-q1',
];

const footerNeetPractice = [
  'neet-biology-cell-biology-cell-structure-easy-q1',
  'neet-biology-genetics-mendelian-genetics-easy-q1',
  'neet-biology-human-physiology-digestive-system-easy-q1',
  'neet-physics-mechanics-kinematics-easy-q1',
  'neet-physics-optics-modern-physics-ray-optics-easy-q1',
  'neet-chemistry-physical-chemistry-atomic-structure-bonding-easy-q1',
  'neet-chemistry-organic-chemistry-goc-hydrocarbons-easy-q1',
];

const footerNeetPyq = [
  'neet-pyq-biology-cell-biology-biomolecules-q1',
  'neet-pyq-biology-human-reproduction-q1',
  'neet-pyq-biology-genetics-molecular-biology-q1',
  'neet-pyq-physics-kinematics-q1',
  'neet-pyq-physics-optics-q1',
  'neet-pyq-chemistry-equilibrium-q1',
  'neet-pyq-chemistry-goc-hydrocarbons-q1',
];

function findClosest(slug: string, allSlugs: Set<string>): string {
  const parts = slug.split('-');
  let bestMatch = '';
  let bestScore = 0;
  for (const candidate of allSlugs) {
    const cParts = candidate.split('-');
    let score = 0;
    for (const p of parts) {
      if (cParts.includes(p)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = candidate;
    }
  }
  return bestMatch;
}

console.log('=== JEE PRACTICE ===');
for (const slug of footerJeePractice) {
  const exists = jeePracticeSlugs.has(slug);
  console.log((exists ? 'OK' : 'MISSING') + ' ' + slug);
  if (!exists) console.log('   Closest: ' + findClosest(slug, jeePracticeSlugs));
}

console.log('\n=== JEE PYQ ===');
for (const slug of footerJeePyq) {
  const exists = jeePyqSlugs.has(slug);
  console.log((exists ? 'OK' : 'MISSING') + ' ' + slug);
  if (!exists) console.log('   Closest: ' + findClosest(slug, jeePyqSlugs));
}

console.log('\n=== NEET PRACTICE ===');
for (const slug of footerNeetPractice) {
  const exists = neetPracticeSlugs.has(slug);
  console.log((exists ? 'OK' : 'MISSING') + ' ' + slug);
  if (!exists) console.log('   Closest: ' + findClosest(slug, neetPracticeSlugs));
}

console.log('\n=== NEET PYQ ===');
for (const slug of footerNeetPyq) {
  const exists = neetPyqSlugs.has(slug);
  console.log((exists ? 'OK' : 'MISSING') + ' ' + slug);
  if (!exists) console.log('   Closest: ' + findClosest(slug, neetPyqSlugs));
}

console.log('\n=== SAMPLE JEE PYQ PHYSICS SLUGS ===');
[...jeePyqSlugs].filter(s => s.startsWith('jee-pyq-physics')).slice(0, 10).forEach(s => console.log('  ' + s));

console.log('\n=== SAMPLE NEET PRACTICE BIOLOGY SLUGS ===');
[...neetPracticeSlugs].filter(s => s.startsWith('neet-biology')).slice(0, 10).forEach(s => console.log('  ' + s));

console.log('\n=== SAMPLE NEET PRACTICE PHYSICS SLUGS ===');
[...neetPracticeSlugs].filter(s => s.startsWith('neet-physics')).slice(0, 10).forEach(s => console.log('  ' + s));
