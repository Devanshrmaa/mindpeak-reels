/**
 * Generate JEE Previous Year Questions (PYQ) Sitemap
 *
 * Mirrors the slug-building logic in src/data/pyq/index.ts so the
 * sitemap stays in sync with the actual PYQ question bank data.
 *
 * Run:  npx tsx scripts/gen-jee-pyq.ts
 */
import { writeFileSync, mkdirSync } from 'fs';

mkdirSync('public/sitemaps', { recursive: true });

/* ── replicate PYQ chapter/question counts ── */
interface PYQChapterMeta { slug: string; count: number }
interface PYQSubjectMeta { slug: string; chapters: PYQChapterMeta[] }

const subjects: PYQSubjectMeta[] = [
  {
    slug: 'physics',
    chapters: [
      { slug: 'units-dimensions', count: 15 },
      { slug: 'kinematics', count: 15 },
      { slug: 'newtons-laws', count: 15 },
      { slug: 'work-energy-power', count: 15 },
      { slug: 'rotational-motion', count: 15 },
      { slug: 'gravitation', count: 15 },
      { slug: 'thermodynamics', count: 15 },
      { slug: 'electrostatics', count: 15 },
      { slug: 'current-electricity', count: 15 },
      { slug: 'magnetism', count: 15 },
      { slug: 'emi-ac', count: 15 },
      { slug: 'optics', count: 15 },
      { slug: 'modern-physics', count: 15 },
      { slug: 'shm-waves', count: 15 },
    ],
  },
  {
    slug: 'chemistry',
    chapters: [
      { slug: 'mole-concept', count: 15 },
      { slug: 'atomic-structure', count: 15 },
      { slug: 'chemical-thermodynamics', count: 15 },
      { slug: 'chemical-equilibrium', count: 15 },
      { slug: 'electrochemistry', count: 15 },
      { slug: 'chemical-kinetics', count: 15 },
      { slug: 'solutions', count: 15 },
      { slug: 'goc', count: 15 },
      { slug: 'hydrocarbons', count: 15 },
      { slug: 'alcohols-phenols-ethers', count: 15 },
      { slug: 'aldehydes-ketones-acids', count: 15 },
      { slug: 'amines', count: 15 },
      { slug: 'periodic-table-bonding', count: 15 },
      { slug: 's-p-block', count: 15 },
      { slug: 'd-f-block', count: 15 },
      { slug: 'coordination-compounds', count: 15 },
    ],
  },
  {
    slug: 'mathematics',
    chapters: [
      { slug: 'sets-relations-functions', count: 15 },
      { slug: 'complex-numbers', count: 15 },
      { slug: 'quadratic-equations', count: 15 },
      { slug: 'permutations-combinations', count: 15 },
      { slug: 'binomial-theorem', count: 15 },
      { slug: 'matrices-determinants', count: 15 },
      { slug: 'sequences-series', count: 15 },
      { slug: 'limits-continuity', count: 15 },
      { slug: 'differentiation', count: 15 },
      { slug: 'integral-calculus', count: 15 },
      { slug: 'conic-sections', count: 15 },
      { slug: 'trigonometry', count: 15 },
      { slug: 'vectors-3d-geometry', count: 15 },
      { slug: 'probability-statistics', count: 15 },
      { slug: 'differential-equations', count: 15 },
    ],
  },
];

const today = new Date().toISOString().slice(0, 10);
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

/* Hub page */
xml += `  <url><loc>https://mindpeakinstitute.com/jee-pyq</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.85</priority></url>\n`;

let count = 1; // 1 for hub

for (const subj of subjects) {
  for (const ch of subj.chapters) {
    for (let i = 1; i <= ch.count; i++) {
      const slug = `jee-pyq-${subj.slug}-${ch.slug}-q${i}`;
      xml += `  <url><loc>https://mindpeakinstitute.com/${slug}</loc><lastmod>${today}</lastmod><priority>0.62</priority></url>\n`;
      count++;
    }
  }
}

xml += `</urlset>`;
writeFileSync('public/sitemaps/jee-pyq.xml', xml);
console.log(`✅ ${count} JEE PYQ URLs written to public/sitemaps/jee-pyq.xml`);
