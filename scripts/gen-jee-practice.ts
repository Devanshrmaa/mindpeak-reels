/**
 * Generate JEE Practice Questions Sitemap
 *
 * This script mirrors the slug-building logic in src/data/practice/index.ts
 * so the sitemap stays in sync with the actual question bank data.
 *
 * Run:  npx tsx scripts/gen-jee-practice.ts
 */
import { writeFileSync, mkdirSync } from 'fs';

mkdirSync('public/sitemaps', { recursive: true });

/* ── replicate the chapter/topic/question structure ── */
interface TopicMeta { slug: string; easy: number; medium: number; hard: number }
interface ChapterMeta { slug: string; topics: TopicMeta[] }
interface SubjectMeta { slug: string; chapters: ChapterMeta[] }

const subjects: SubjectMeta[] = [
  {
    slug: 'physics',
    chapters: [
      { slug: 'units-dimensions', topics: [{ slug: 'si-units', easy: 5, medium: 5, hard: 5 }, { slug: 'dimensional-analysis', easy: 5, medium: 5, hard: 5 }, { slug: 'errors-measurements', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'kinematics', topics: [{ slug: '1d-motion', easy: 5, medium: 5, hard: 5 }, { slug: 'projectile-motion', easy: 5, medium: 5, hard: 5 }, { slug: 'relative-motion', easy: 5, medium: 5, hard: 5 }, { slug: 'circular-motion', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'newtons-laws', topics: [{ slug: 'free-body-diagrams', easy: 5, medium: 5, hard: 5 }, { slug: 'friction', easy: 5, medium: 5, hard: 5 }, { slug: 'constraint-relations', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'work-energy-power', topics: [{ slug: 'work-kinetic-energy', easy: 5, medium: 5, hard: 5 }, { slug: 'potential-energy-conservation', easy: 5, medium: 5, hard: 5 }, { slug: 'power', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'centre-of-mass', topics: [{ slug: 'centre-of-mass-system', easy: 5, medium: 5, hard: 5 }, { slug: 'collisions', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'rotational-motion', topics: [{ slug: 'moment-of-inertia', easy: 5, medium: 5, hard: 5 }, { slug: 'rotational-dynamics', easy: 5, medium: 5, hard: 5 }, { slug: 'angular-momentum', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'gravitation', topics: [{ slug: 'gravitational-force-field', easy: 5, medium: 5, hard: 5 }, { slug: 'orbital-mechanics', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'properties-of-matter', topics: [{ slug: 'elasticity', easy: 5, medium: 5, hard: 5 }, { slug: 'fluid-statics-dynamics', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'thermodynamics', topics: [{ slug: 'laws-of-thermodynamics', easy: 5, medium: 5, hard: 5 }, { slug: 'kinetic-theory', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'heat-transfer', topics: [{ slug: 'conduction-convection', easy: 5, medium: 5, hard: 5 }, { slug: 'radiation', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'shm-waves', topics: [{ slug: 'simple-harmonic-motion', easy: 5, medium: 5, hard: 5 }, { slug: 'wave-motion-sound', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'electrostatics', topics: [{ slug: 'coulombs-law-electric-field', easy: 5, medium: 5, hard: 5 }, { slug: 'gauss-law-capacitors', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'current-electricity', topics: [{ slug: 'ohms-law-circuits', easy: 5, medium: 5, hard: 5 }, { slug: 'kirchhoffs-laws', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'magnetic-effects', topics: [{ slug: 'biot-savart-ampere', easy: 5, medium: 5, hard: 5 }, { slug: 'force-on-charges-conductors', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'emi-ac', topics: [{ slug: 'faradays-law-emi', easy: 5, medium: 5, hard: 5 }, { slug: 'alternating-current', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'optics', topics: [{ slug: 'reflection-mirrors', easy: 5, medium: 5, hard: 5 }, { slug: 'refraction-lenses', easy: 5, medium: 5, hard: 5 }, { slug: 'wave-optics', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'modern-physics', topics: [{ slug: 'photoelectric-dual-nature', easy: 5, medium: 5, hard: 5 }, { slug: 'atoms-nuclei', easy: 5, medium: 5, hard: 5 }, { slug: 'semiconductor-devices', easy: 5, medium: 5, hard: 5 }] },
    ],
  },
  {
    slug: 'chemistry',
    chapters: [
      { slug: 'mole-concept', topics: [{ slug: 'mole-stoichiometry', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'atomic-structure', topics: [{ slug: 'quantum-numbers-orbitals', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'states-of-matter', topics: [{ slug: 'gas-laws-kinetic-theory', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'thermodynamics-chem', topics: [{ slug: 'enthalpy-entropy', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'chemical-equilibrium', topics: [{ slug: 'equilibrium-constants', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'ionic-equilibrium', topics: [{ slug: 'ph-buffers', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'redox-electrochemistry', topics: [{ slug: 'oxidation-reduction-cells', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'chemical-kinetics', topics: [{ slug: 'rate-laws-mechanisms', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'solutions', topics: [{ slug: 'colligative-properties', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'goc', topics: [{ slug: 'isomerism-effects', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'hydrocarbons', topics: [{ slug: 'alkanes-alkenes-alkynes', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'organic-functional-groups', topics: [{ slug: 'alcohols-ethers-carbonyls', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'nitrogen-compounds', topics: [{ slug: 'amines-diazonium', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'biomolecules-polymers', topics: [{ slug: 'carbohydrates-amino-acids', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'periodic-table', topics: [{ slug: 'trends-classification', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'chemical-bonding', topics: [{ slug: 'vsepr-mot-hybridization', easy: 5, medium: 5, hard: 5 }] },
      { slug: 's-p-block', topics: [{ slug: 'group-properties-reactions', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'd-f-block', topics: [{ slug: 'transition-metals-complexes', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'coordination-compounds', topics: [{ slug: 'nomenclature-isomerism', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'metallurgy-qualitative', topics: [{ slug: 'extraction-salt-analysis', easy: 5, medium: 5, hard: 5 }] },
    ],
  },
  {
    slug: 'mathematics',
    chapters: [
      { slug: 'sets-relations-functions', topics: [{ slug: 'sets-functions-basics', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'complex-numbers', topics: [{ slug: 'complex-algebra-argand', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'quadratic-equations', topics: [{ slug: 'roots-discriminant', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'permutations-combinations', topics: [{ slug: 'counting-principles', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'binomial-theorem', topics: [{ slug: 'expansion-general-term', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'matrices-determinants', topics: [{ slug: 'operations-properties', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'sequences-series', topics: [{ slug: 'ap-gp-hp-sums', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'limits-continuity', topics: [{ slug: 'limits-indeterminate', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'differentiation', topics: [{ slug: 'derivatives-rules', easy: 5, medium: 5, hard: 5 }, { slug: 'applications-derivatives', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'integration', topics: [{ slug: 'indefinite-integrals', easy: 5, medium: 5, hard: 5 }, { slug: 'definite-integrals-area', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'differential-equations', topics: [{ slug: 'ode-solutions', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'straight-lines', topics: [{ slug: 'equations-properties-lines', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'circles', topics: [{ slug: 'circle-equations-properties', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'conic-sections', topics: [{ slug: 'parabola', easy: 5, medium: 5, hard: 5 }, { slug: 'ellipse-hyperbola', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'trigonometry', topics: [{ slug: 'trig-functions-identities', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'vectors-3d-geometry', topics: [{ slug: 'vectors', easy: 5, medium: 5, hard: 5 }, { slug: '3d-coordinate-geometry', easy: 5, medium: 5, hard: 5 }] },
      { slug: 'probability-statistics', topics: [{ slug: 'probability', easy: 5, medium: 5, hard: 5 }] },
    ],
  },
];

const today = new Date().toISOString().slice(0, 10);
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
let count = 0;

for (const subj of subjects) {
  for (const ch of subj.chapters) {
    for (const topic of ch.topics) {
      for (const diff of ['easy', 'medium', 'hard'] as const) {
        const total = topic[diff];
        for (let i = 1; i <= total; i++) {
          const slug = `jee-${subj.slug}-${ch.slug}-${topic.slug}-${diff}-q${i}`;
          xml += `  <url><loc>https://mindpeakinstitute.com/${slug}</loc><lastmod>${today}</lastmod><priority>0.60</priority></url>\n`;
          count++;
        }
      }
    }
  }
}

xml += `</urlset>`;
writeFileSync('public/sitemaps/jee-practice.xml', xml);
console.log(`✅ ${count} JEE practice questions sitemap created at public/sitemaps/jee-practice.xml`);
