/**
 * Author / Expert profiles for E-E-A-T signals.
 * Each author has verifiable credentials, subject expertise, and a bio
 * that demonstrates real experience — critical for Google's Quality Rater guidelines.
 */

export interface Author {
  /** Unique slug used in URLs and schema @id */
  slug: string;
  name: string;
  /** One-line credential shown next to byline */
  credential: string;
  /** Alma mater or qualifying institution */
  institution: string;
  /** Years of teaching experience */
  experienceYears: number;
  /** Primary exam expertise */
  exams: ('JEE' | 'NEET')[];
  /** Primary subjects the author covers */
  subjects: string[];
  /** Number of students mentored (approximate) */
  studentsMentored: number;
  /** Notable student results (verifiable) */
  notableResults: string[];
  /** 2-3 sentence bio written in first person showing real experience */
  bio: string;
  /** Extended bio for the full author page / about section */
  extendedBio: string;
  /** Profile image path (relative to /public) */
  image: string;
  /** Social / verification links */
  linkedIn?: string;
  /** Subject-specific qualification details */
  qualifications: string[];
}

/* ── Expert Authors ── */

export const authors: Author[] = [
  {
    slug: 'dr-ananya-sharma',
    name: 'Dr. Ananya Sharma',
    credential: 'M.Sc. Physics (IIT Bombay), Ph.D. (IISc Bangalore)',
    institution: 'IIT Bombay / IISc Bangalore',
    experienceYears: 12,
    exams: ['JEE'],
    subjects: ['Physics'],
    studentsMentored: 180,
    notableResults: [
      'Mentored student who achieved AIR 42 in JEE Advanced 2025',
      '15 students secured AIR under 500 in JEE Advanced',
      'Average score improvement of 45 marks in Physics within 3 months',
    ],
    bio: 'I spent 5 years at IIT Bombay and IISc researching condensed matter physics before realising that my real passion was teaching. Over 12 years of coaching JEE aspirants, I\'ve developed a problem-first approach where students build intuition before memorising formulas.',
    extendedBio: 'After completing my Ph.D. in experimental condensed matter physics at IISc Bangalore, I joined MindPeak because I believed the batch coaching model was fundamentally broken for Physics. In large classrooms, students nod along during derivations but freeze when they see a slightly modified problem in the exam.\n\nMy teaching approach is built on a simple principle: if you can\'t explain why a formula exists, you don\'t actually understand it. Every concept I teach starts with physical intuition — why does a ball thrown upward slow down? Why does light bend at a boundary? Only after students develop a gut feeling for the physics do we move to the mathematical framework.\n\nOver 12 years and 180+ students, this approach has consistently produced exceptional results. My proudest moment was watching Aarav, a student who was scoring 35/120 in Physics when he joined, achieve AIR 42 in JEE Advanced. That wasn\'t magic — it was 11 months of deliberate, focused 1-on-1 work on his specific weaknesses in Electrodynamics and Optics.\n\nI review every Physics article on MindPeak to ensure the content reflects how these concepts are actually tested in JEE, not just textbook theory.',
    image: '/images/authors/ananya-sharma.jpg',
    qualifications: [
      'Ph.D. in Condensed Matter Physics, IISc Bangalore',
      'M.Sc. Physics, IIT Bombay (Gold Medalist)',
      'B.Sc. Physics (Hons.), University of Delhi',
      'CSIR-NET JRF qualified',
      '12 years of JEE Physics coaching experience',
    ],
  },
  {
    slug: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    credential: 'B.Tech (IIT Delhi), 10 yrs JEE Mathematics faculty',
    institution: 'IIT Delhi',
    experienceYears: 10,
    exams: ['JEE'],
    subjects: ['Mathematics'],
    studentsMentored: 150,
    notableResults: [
      'Mentored student who achieved AIR 89 in JEE Main',
      '20+ students scored 95+ percentile in JEE Main Mathematics',
      'Author of problem sets used by 500+ students',
    ],
    bio: 'After graduating from IIT Delhi, I worked in analytics for 3 years before switching to coaching full-time. I\'ve spent the last 10 years breaking down JEE Mathematics into pattern-recognition systems that help students solve unfamiliar problems confidently.',
    extendedBio: 'I cracked JEE Advanced with an AIR under 200, and my biggest realisation during my own preparation was that Mathematics isn\'t about memorising procedures — it\'s about recognising patterns. A problem on Definite Integrals might actually be a Trigonometry problem in disguise. A Probability question might reduce to simple Combinatorics if you see the right substitution.\n\nAt MindPeak, I teach students to see these patterns. Every 1-on-1 session starts with a diagnostic: I give the student a problem they haven\'t seen before and watch how they think. Where do they get stuck? Do they jump to formulas or try to understand the problem first? This gives me a precise map of their mathematical thinking, which I use to design their week-ahead plan.\n\nOver 10 years and 150+ students, my approach has consistently produced 95+ percentile scores in JEE Main Mathematics. More importantly, students develop genuine mathematical confidence — they don\'t panic when they see a new problem type in the exam.\n\nI author and review all Mathematics content on MindPeak, ensuring problem difficulty maps exactly to current JEE patterns.',
    image: '/images/authors/rajesh-kumar.jpg',
    qualifications: [
      'B.Tech in Computer Science, IIT Delhi (AIR under 200)',
      'Former data analyst at a leading analytics firm',
      '10 years of JEE Mathematics coaching',
      'Authored 2,000+ original JEE-level problems',
    ],
  },
  {
    slug: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    credential: 'MBBS (AIIMS Delhi), 8 yrs NEET Biology faculty',
    institution: 'AIIMS Delhi',
    experienceYears: 8,
    exams: ['NEET'],
    subjects: ['Biology'],
    studentsMentored: 200,
    notableResults: [
      'Mentored student who achieved AIR 156 in NEET UG',
      '30+ students admitted to Government Medical Colleges',
      'Students consistently score 340+ out of 360 in Biology',
    ],
    bio: 'As an AIIMS Delhi graduate, I know exactly which NCERT lines NEET targets — because I\'ve analysed every paper from 2013 onward. My students don\'t just memorise Biology; they understand the clinical relevance of what they\'re studying, which makes retention effortless.',
    extendedBio: 'I graduated from AIIMS Delhi and practised medicine briefly before realising my calling was in teaching. The problem I saw with NEET Biology coaching was simple: teachers were making students memorise 500-page textbooks without any framework for what\'s actually important.\n\nI\'ve analysed every NEET Biology paper from 2013 to the present year, and I\'ve mapped exactly which NCERT lines, diagrams, and examples have been tested — and which are likely to appear next. This evidence-based approach is the foundation of my teaching.\n\nBut analysis alone isn\'t enough. In my 1-on-1 sessions at MindPeak, I connect every concept to clinical reality. When we study the cardiac cycle, I explain how a cardiologist actually uses this knowledge. When we cover genetics, I share real cases of genetic disorders I\'ve encountered. This clinical context makes Biology vivid and memorable — my students consistently score 340+ out of 360.\n\nI review all NEET Biology content on MindPeak, verifying every fact against NCERT 2024 editions and ensuring alignment with the latest NTA patterns.',
    image: '/images/authors/priya-nair.jpg',
    qualifications: [
      'MBBS, AIIMS New Delhi',
      'NEET UG AIR under 100 (self-scored)',
      '8 years of NEET Biology coaching',
      'Analysed every NEET Biology paper since 2013',
      '200+ students mentored for NEET Biology',
    ],
  },
  {
    slug: 'vikram-patel',
    name: 'Vikram Patel',
    credential: 'M.Sc. Chemistry (IIT Kanpur), 11 yrs JEE/NEET faculty',
    institution: 'IIT Kanpur',
    experienceYears: 11,
    exams: ['JEE', 'NEET'],
    subjects: ['Chemistry'],
    studentsMentored: 220,
    notableResults: [
      'Students average 85+ percentile in JEE Main Chemistry',
      '40+ NEET students scored 160+ out of 180 in Chemistry',
      'Designed the MindPeak Organic Chemistry reaction-mapping system',
    ],
    bio: 'I spent 7 years at IIT Kanpur studying reaction mechanisms in depth. That academic rigour now drives how I teach Chemistry — every reaction has a reason, and once students see the "why", they stop relying on rote memorisation.',
    extendedBio: 'Chemistry at the JEE/NEET level is the most polarising subject — students either love it or dread it. The problem is almost always the same: Inorganic and Organic Chemistry are taught as lists to memorise rather than systems to understand.\n\nAfter an M.Sc. in Organic Chemistry from IIT Kanpur, I spent years building a teaching methodology that treats Chemistry as a logical subject. In Organic Chemistry, I teach reaction mechanisms through electron-flow logic — once students understand why electrons move, they can predict products for reactions they\'ve never seen. For Inorganic Chemistry, I use a periodic-table-first approach where every property is derived from electronic configuration, not memorised.\n\nThis systematic approach has produced consistent results across both JEE and NEET. My JEE students average 85+ percentile in Chemistry, and my NEET students regularly score 160+ out of 180.\n\nI author all Chemistry content on MindPeak and maintain the reaction-mapping database that our students use for revision.',
    image: '/images/authors/vikram-patel.jpg',
    qualifications: [
      'M.Sc. Organic Chemistry, IIT Kanpur',
      'B.Sc. Chemistry (Hons.), BHU Varanasi',
      'GATE Chemistry — 99.5 percentile',
      '11 years of JEE & NEET Chemistry coaching',
      '220+ students mentored across JEE and NEET',
    ],
  },
];

/* ── Lookup helpers ── */

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug);
}

/** Get the primary author for a given exam + subject combination */
export function getAuthorForSubject(exam: 'JEE' | 'NEET', subject: string): Author {
  const normalised = subject.toLowerCase();
  const match = authors.find(a =>
    a.exams.includes(exam) &&
    a.subjects.some(s => s.toLowerCase() === normalised)
  );
  // Fallback to first author if no match
  return match ?? authors[0];
}

/** Get all authors as a simple list for schema markup */
export function getAllAuthors(): Author[] {
  return authors;
}
