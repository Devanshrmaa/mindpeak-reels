/**
 * Author / Expert profiles for E-E-A-T signals.
 *
 * These are real MindPeak faculty used as content writers/reviewers, mapped
 * by subject. Credentials are intentionally neutral ("Faculty, MindPeak
 * Institute") rather than fabricated degrees/results — only fill in
 * `institution`, `experienceYears`, `qualifications`, `notableResults`,
 * `linkedIn`, etc. with VERIFIED information. Do not invent specifics:
 * fabricated credentials hurt E-E-A-T and misrepresent real people.
 */

export interface Author {
  /** Unique slug used in URLs and schema @id */
  slug: string;
  name: string;
  /** One-line credential / role shown next to byline */
  credential: string;
  /** Primary exam expertise */
  exams: ('JEE' | 'NEET')[];
  /** Primary subjects the author covers */
  subjects: string[];
  /** 2-3 sentence bio written in first person showing real teaching approach */
  bio: string;
  /* ── Optional, fill in only with VERIFIED details ── */
  /** Alma mater / qualifying institution (alumniOf in schema) */
  institution?: string;
  /** Years of teaching experience */
  experienceYears?: number;
  /** Number of students mentored (approximate) */
  studentsMentored?: number;
  /** Notable, verifiable student results */
  notableResults?: string[];
  /** Extended bio for the full author page / about section */
  extendedBio?: string;
  /** Profile image path (relative to /public) */
  image?: string;
  /** Social / verification links */
  linkedIn?: string;
  /** Subject-specific qualification details */
  qualifications?: string[];
}

/* ── Expert Authors (real MindPeak faculty, mapped by subject) ── */

export const authors: Author[] = [
  /* ── Physics ── */
  {
    slug: 'devansh-sharma',
    name: 'Devansh Sharma',
    credential: 'JEE & NEET Physics Faculty, MindPeak Institute',
    exams: ['JEE', 'NEET'],
    subjects: ['Physics'],
    bio: 'I teach JEE and NEET Physics at MindPeak with a concept-first approach — students build physical intuition before reaching for formulas. Most of my 1-on-1 work is about turning "I understand the theory" into "I can solve a problem I have never seen before."',
  },
  {
    slug: 'nishkresh-mishra',
    name: 'Nishkresh Mishra',
    credential: 'JEE & NEET Physics Faculty, MindPeak Institute',
    exams: ['JEE', 'NEET'],
    subjects: ['Physics'],
    bio: 'I focus on the parts of Physics students find hardest — Mechanics, Electrodynamics and Modern Physics — and on diagnosing exactly where a student\'s reasoning breaks down. My sessions are built around solving problems together, not lecturing.',
  },

  /* ── Mathematics ── */
  {
    slug: 'krishnendu-brahmachari',
    name: 'Krishnendu Brahmachari',
    credential: 'JEE Mathematics Faculty, MindPeak Institute',
    exams: ['JEE'],
    subjects: ['Mathematics'],
    bio: 'I teach JEE Mathematics as pattern recognition rather than rote procedure — a Calculus problem is often a Trigonometry problem in disguise. I work 1-on-1 to map how each student thinks through an unfamiliar problem and where they get stuck.',
  },
  {
    slug: 'sri-bala',
    name: 'Sri Bala',
    credential: 'JEE Mathematics Faculty, MindPeak Institute',
    exams: ['JEE'],
    subjects: ['Mathematics'],
    bio: 'My focus is building speed and accuracy in JEE Mathematics — Algebra, Calculus and Coordinate Geometry — through deliberate, timed practice on exactly the question types a student finds shaky.',
  },
  {
    slug: 'vinod',
    name: 'Vinod',
    credential: 'JEE Mathematics Faculty, MindPeak Institute',
    exams: ['JEE'],
    subjects: ['Mathematics'],
    bio: 'I help JEE aspirants stop fearing Mathematics by breaking every topic down to first principles and then drilling application until the method becomes automatic in the exam.',
  },

  /* ── Chemistry ── */
  {
    slug: 'sahil-singh',
    name: 'Sahil Singh',
    credential: 'JEE & NEET Chemistry Faculty, MindPeak Institute',
    exams: ['JEE', 'NEET'],
    subjects: ['Chemistry'],
    bio: 'I teach Chemistry as a logical subject, not a list to memorise. In Organic Chemistry I work through reaction mechanisms via electron-flow logic so students can predict products for reactions they have never seen.',
  },
  {
    slug: 'aparna-chandra',
    name: 'Aparna Chandra',
    credential: 'JEE & NEET Chemistry Faculty, MindPeak Institute',
    exams: ['JEE', 'NEET'],
    subjects: ['Chemistry'],
    bio: 'My strength is Physical and Inorganic Chemistry — deriving every property from electronic configuration and the periodic table rather than memorising it. I tailor each student\'s revision around the chapters that move their score the most.',
  },

  /* ── Biology (NEET) ── */
  {
    slug: 'muskan',
    name: 'Muskan',
    credential: 'NEET Biology Faculty, MindPeak Institute',
    exams: ['NEET'],
    subjects: ['Biology'],
    bio: 'I teach NEET Biology with an NCERT-first, exam-pattern-driven approach — connecting each concept to how it is actually tested so retention comes from understanding rather than cramming.',
  },
  {
    slug: 'muskan-singla',
    name: 'Muskan Singla',
    credential: 'NEET Biology Faculty, MindPeak Institute',
    exams: ['NEET'],
    subjects: ['Biology'],
    bio: 'My focus in NEET Biology is Botany and the high-yield NCERT lines that NTA repeats — I help students build diagram-level recall and avoid the silly mistakes that cost rank.',
  },
];

/* ── Lookup helpers ── */

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug);
}

/** Deterministic index from a seed string (stable per slug). */
function seedIndex(seed: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % length;
}

/**
 * Get the author for a given exam + subject.
 * When multiple faculty cover the same subject, pass a stable `seed`
 * (e.g. the content slug) to deterministically rotate between them so a
 * given page always shows the same author but the byline varies across the
 * site. Without a seed, returns the first matching author.
 */
export function getAuthorForSubject(exam: 'JEE' | 'NEET', subject: string, seed?: string): Author {
  const normalised = subject.toLowerCase();
  const matches = authors.filter(a =>
    a.exams.includes(exam) &&
    a.subjects.some(s => s.toLowerCase() === normalised)
  );
  if (matches.length === 0) {
    // Subject not covered for this exam — fall back to any author for the subject, else first author.
    const anySubject = authors.find(a => a.subjects.some(s => s.toLowerCase() === normalised));
    return anySubject ?? authors[0];
  }
  if (seed && matches.length > 1) {
    return matches[seedIndex(seed, matches.length)];
  }
  return matches[0];
}

/** Get all authors as a simple list for schema markup */
export function getAllAuthors(): Author[] {
  return authors;
}

/**
 * Build a schema.org Person object for an author, for use as `author` /
 * `reviewedBy` in Article-type JSON-LD. Omits fields that aren't verified
 * (alumniOf, sameAs) so we never emit empty/fabricated credentials.
 */
export function buildAuthorPersonLd(author: Author) {
  return {
    '@type': 'Person' as const,
    name: author.name,
    jobTitle: author.credential,
    worksFor: {
      '@type': 'Organization' as const,
      name: 'MindPeak Institute',
      url: 'https://mindpeakinstitute.com',
    },
    description: author.bio,
    knowsAbout: author.subjects,
    ...(author.institution
      ? { alumniOf: { '@type': 'EducationalOrganization' as const, name: author.institution } }
      : {}),
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
  };
}
