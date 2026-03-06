/**
 * NEET PYQ Hierarchy — unit/class mappings for all 74 chapters
 *
 * Maps each chapter to a unit (for unit-level aggregation pages)
 * and a class level (11 or 12) for class-level aggregation pages.
 */

/* ─── Types ─── */
export interface UnitMapping {
  unitSlug: string;
  unitName: string;
  classLevel: 11 | 12;
  /** PYQ chapter slugs that belong to this unit (from the PYQ data, not chapterData) */
  chapterSlugs: string[];
}

export interface SubjectHierarchy {
  subjectSlug: string;
  subjectName: string;
  icon: string;
  units: UnitMapping[];
}

/* ═══════════════════════════════════════════════════
   BIOLOGY HIERARCHY — 9 units, 34 chapters
   ═══════════════════════════════════════════════════ */

const biologyUnits: UnitMapping[] = [
  /* ── Class 11 ── */
  {
    unitSlug: 'diversity-of-living-organisms',
    unitName: 'Diversity of Living Organisms',
    classLevel: 11,
    chapterSlugs: ['living-world-classification', 'animal-kingdom', 'plant-morphology-anatomy', 'structural-organisation-animals'],
  },
  {
    unitSlug: 'cell-structure-function',
    unitName: 'Cell Structure & Function',
    classLevel: 11,
    chapterSlugs: ['cell-unit-of-life', 'biomolecules', 'cell-division'],
  },
  {
    unitSlug: 'plant-physiology',
    unitName: 'Plant Physiology',
    classLevel: 11,
    chapterSlugs: ['transport-in-plants', 'mineral-nutrition', 'photosynthesis', 'plant-respiration', 'plant-growth-development'],
  },
  {
    unitSlug: 'human-physiology',
    unitName: 'Human Physiology',
    classLevel: 11,
    chapterSlugs: ['digestion-absorption', 'breathing-gas-exchange', 'body-fluids-circulation', 'excretory-system', 'locomotion-movement', 'neural-control', 'chemical-coordination'],
  },
  /* ── Class 12 ── */
  {
    unitSlug: 'reproduction',
    unitName: 'Reproduction',
    classLevel: 12,
    chapterSlugs: ['reproduction-organisms', 'sexual-reproduction-plants', 'human-reproduction', 'reproductive-health'],
  },
  {
    unitSlug: 'genetics-evolution',
    unitName: 'Genetics & Evolution',
    classLevel: 12,
    chapterSlugs: ['inheritance-variation', 'molecular-inheritance', 'evolution'],
  },
  {
    unitSlug: 'biology-human-welfare',
    unitName: 'Biology in Human Welfare',
    classLevel: 12,
    chapterSlugs: ['human-health-diseases', 'food-production-microbes'],
  },
  {
    unitSlug: 'biotechnology',
    unitName: 'Biotechnology',
    classLevel: 12,
    chapterSlugs: ['biotechnology-principles', 'biotechnology-applications'],
  },
  {
    unitSlug: 'ecology-environment',
    unitName: 'Ecology & Environment',
    classLevel: 12,
    chapterSlugs: ['organisms-populations', 'ecosystem', 'biodiversity-conservation', 'environmental-issues'],
  },
];

/* ═══════════════════════════════════════════════════
   PHYSICS HIERARCHY — 6 units, 15 chapters
   ═══════════════════════════════════════════════════ */

const physicsUnits: UnitMapping[] = [
  {
    unitSlug: 'mechanics',
    unitName: 'Mechanics',
    classLevel: 11,
    chapterSlugs: ['kinematics', 'laws-of-motion', 'work-energy-power', 'gravitation', 'properties-of-matter'],
  },
  {
    unitSlug: 'heat-thermodynamics',
    unitName: 'Heat & Thermodynamics',
    classLevel: 11,
    chapterSlugs: ['thermal-properties', 'thermodynamics'],
  },
  {
    unitSlug: 'waves-oscillations',
    unitName: 'Waves & Oscillations',
    classLevel: 11,
    chapterSlugs: ['waves-sound'],
  },
  {
    unitSlug: 'electromagnetism',
    unitName: 'Electromagnetism',
    classLevel: 12,
    chapterSlugs: ['electrostatics', 'current-electricity', 'magnetism'],
  },
  {
    unitSlug: 'optics',
    unitName: 'Optics',
    classLevel: 12,
    chapterSlugs: ['ray-optics', 'wave-optics'],
  },
  {
    unitSlug: 'modern-physics',
    unitName: 'Modern Physics',
    classLevel: 12,
    chapterSlugs: ['dual-nature-atoms', 'nuclei-semiconductors'],
  },
];

/* ═══════════════════════════════════════════════════
   CHEMISTRY HIERARCHY — 7 units, 25 chapters
   ═══════════════════════════════════════════════════ */

const chemistryUnits: UnitMapping[] = [
  {
    unitSlug: 'basic-concepts-atomic-structure',
    unitName: 'Basic Concepts & Atomic Structure',
    classLevel: 11,
    chapterSlugs: ['some-basic-concepts', 'atomic-structure', 'chemical-bonding'],
  },
  {
    unitSlug: 'thermodynamics-equilibrium',
    unitName: 'Thermodynamics & Equilibrium',
    classLevel: 11,
    chapterSlugs: ['thermodynamics', 'equilibrium'],
  },
  {
    unitSlug: 'electrochemistry-kinetics',
    unitName: 'Electrochemistry & Kinetics',
    classLevel: 12,
    chapterSlugs: ['redox-electrochemistry', 'kinetics'],
  },
  {
    unitSlug: 'solutions-surface',
    unitName: 'Solutions & Surface Chemistry',
    classLevel: 12,
    chapterSlugs: ['solutions', 'surface-chemistry'],
  },
  {
    unitSlug: 'inorganic-chemistry',
    unitName: 'Inorganic Chemistry',
    classLevel: 11,
    chapterSlugs: ['periodic-classification', 's-block', 'p-block', 'd-f-block', 'coordination-compounds'],
  },
  {
    unitSlug: 'organic-reactions',
    unitName: 'Organic Reactions',
    classLevel: 12,
    chapterSlugs: ['organic-basics', 'haloalkanes', 'alcohols-phenols-ethers', 'carbonyl-compounds', 'amines'],
  },
  {
    unitSlug: 'biomolecules-polymers',
    unitName: 'Biomolecules & Polymers',
    classLevel: 12,
    chapterSlugs: ['biomolecules-polymers'],
  },
];

/* ═══════════════════════════════════════════════════
   All subject hierarchies
   ═══════════════════════════════════════════════════ */

export const neetPyqHierarchy: SubjectHierarchy[] = [
  { subjectSlug: 'biology', subjectName: 'Biology', icon: '🧬', units: biologyUnits },
  { subjectSlug: 'physics', subjectName: 'Physics', icon: '⚡', units: physicsUnits },
  { subjectSlug: 'chemistry', subjectName: 'Chemistry', icon: '🧪', units: chemistryUnits },
];

/* ═══════════════════════════════════════════════════
   Utility functions
   ═══════════════════════════════════════════════════ */

/** Get unit info for a given chapter slug within a subject */
export function getUnitForChapter(subjectSlug: string, chapterSlug: string): UnitMapping | undefined {
  const subj = neetPyqHierarchy.find(s => s.subjectSlug === subjectSlug);
  return subj?.units.find(u => u.chapterSlugs.includes(chapterSlug));
}

/** Get class level for a given chapter slug within a subject */
export function getClassForChapter(subjectSlug: string, chapterSlug: string): 11 | 12 | undefined {
  return getUnitForChapter(subjectSlug, chapterSlug)?.classLevel;
}

/** Get all units for a given subject and class level */
export function getUnitsForClass(subjectSlug: string, classLevel: 11 | 12): UnitMapping[] {
  const subj = neetPyqHierarchy.find(s => s.subjectSlug === subjectSlug);
  return subj?.units.filter(u => u.classLevel === classLevel) ?? [];
}

/** Get all chapter slugs for a subject + class */
export function getChaptersForClass(subjectSlug: string, classLevel: 11 | 12): string[] {
  return getUnitsForClass(subjectSlug, classLevel).flatMap(u => u.chapterSlugs);
}

/* ── Hub slug builders ── */

export interface HubSlugInfo {
  type: 'chapter' | 'unit' | 'class';
  slug: string;
  subjectSlug: string;
  /** For chapter hubs */
  chapterSlug?: string;
  /** For unit hubs */
  unitSlug?: string;
  /** For class hubs */
  classLevel?: 11 | 12;
}

/** Build all NEET PYQ hub slugs for routing & sitemaps */
export function buildAllNEETPYQHubSlugs(): HubSlugInfo[] {
  const result: HubSlugInfo[] = [];

  for (const subj of neetPyqHierarchy) {
    // Class hubs: neet-pyq-biology-class-11, neet-pyq-physics-class-12
    for (const cl of [11, 12] as const) {
      result.push({
        type: 'class',
        slug: `neet-pyq-${subj.subjectSlug}-class-${cl}`,
        subjectSlug: subj.subjectSlug,
        classLevel: cl,
      });
    }

    for (const unit of subj.units) {
      // Unit hubs: neet-pyq-biology-unit-human-physiology
      result.push({
        type: 'unit',
        slug: `neet-pyq-${subj.subjectSlug}-unit-${unit.unitSlug}`,
        subjectSlug: subj.subjectSlug,
        unitSlug: unit.unitSlug,
      });

      // Chapter hubs: neet-pyq-biology-digestion-absorption
      for (const ch of unit.chapterSlugs) {
        result.push({
          type: 'chapter',
          slug: `neet-pyq-${subj.subjectSlug}-${ch}`,
          subjectSlug: subj.subjectSlug,
          chapterSlug: ch,
        });
      }
    }
  }

  return result;
}

/** Pre-built lookup map */
const _hubSlugMap = new Map<string, HubSlugInfo>();
const _allHubSlugs = buildAllNEETPYQHubSlugs();
for (const info of _allHubSlugs) {
  _hubSlugMap.set(info.slug, info);
}

/** All hub slugs as a flat array */
export const NEET_PYQ_HUB_SLUGS = _allHubSlugs.map(s => s.slug);

/** Parse a hub slug into its info */
export function parseNEETPYQHubSlug(slug: string): HubSlugInfo | null {
  return _hubSlugMap.get(slug) ?? null;
}

/** Get unit info by slug */
export function getUnitBySlug(subjectSlug: string, unitSlug: string): UnitMapping | undefined {
  const subj = neetPyqHierarchy.find(s => s.subjectSlug === subjectSlug);
  return subj?.units.find(u => u.unitSlug === unitSlug);
}
