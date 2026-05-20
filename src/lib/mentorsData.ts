/**
 * Actual faculty roster for MindPeak Institute — used in Person schema markup.
 * These are the real mentors who teach students; kept separate from the
 * `authorData.ts` content-author profiles.
 */

export interface Mentor {
  slug: string;
  name: string;
  jobTitle: string;
  subjects: string[];
  exams: ('JEE' | 'NEET' | 'Foundation')[];
  credential: string;
  institution: string;
  bio: string;
  linkedIn?: string;
  image?: string;
}

export const mentors: Mentor[] = [
  {
    slug: 'devansh',
    name: 'Devansh',
    jobTitle: 'Founder & Physics Mentor',
    subjects: ['Physics'],
    exams: ['JEE', 'NEET'],
    credential: 'Founder, MindPeak Institute',
    institution: 'MindPeak Institute',
    bio: 'Devansh founded MindPeak Institute to deliver personalised 1-on-1 JEE and NEET coaching to students across India. He leads the Physics mentorship programme and has built the institute\'s adaptive curriculum framework.',
  },
  {
    slug: 'sahil-singh',
    name: 'Sahil Singh',
    jobTitle: 'Chemistry Mentor',
    subjects: ['Chemistry', 'Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'],
    exams: ['JEE', 'NEET'],
    credential: 'Chemistry Mentor, MindPeak Institute',
    institution: 'MindPeak Institute',
    bio: 'Sahil Singh specialises in Physical, Organic, and Inorganic Chemistry for JEE and NEET. He is known for making reaction mechanisms intuitive and building student confidence in Inorganic Chemistry.',
  },
  {
    slug: 'krishnendu-brahmacharya',
    name: 'Krishnendu Brahmacharya',
    jobTitle: 'Mathematics Mentor',
    subjects: ['Mathematics', 'Calculus', 'Algebra', 'Coordinate Geometry'],
    exams: ['JEE'],
    credential: 'Mathematics Mentor, MindPeak Institute',
    institution: 'MindPeak Institute',
    bio: 'Krishnendu Brahmacharya leads JEE Mathematics mentorship at MindPeak. He focuses on building pattern-recognition skills and problem-solving speed critical for JEE Main and Advanced Mathematics.',
  },
  {
    slug: 'aparna-chandra',
    name: 'Aparna Chandra',
    jobTitle: 'Biology Mentor',
    subjects: ['Biology', 'Botany', 'Zoology'],
    exams: ['NEET'],
    credential: 'Biology Mentor, MindPeak Institute',
    institution: 'MindPeak Institute',
    bio: 'Aparna Chandra mentors NEET Biology students at MindPeak with an NCERT-first approach. She emphasises diagram mastery and high-yield NCERT line identification for consistent high scores.',
  },
  {
    slug: 'nishkersh-mishra',
    name: 'Nishkersh Mishra',
    jobTitle: 'Physics & Mathematics Mentor',
    subjects: ['Physics', 'Mathematics'],
    exams: ['JEE', 'NEET'],
    credential: 'Physics & Mathematics Mentor, MindPeak Institute',
    institution: 'MindPeak Institute',
    bio: 'Nishkersh Mishra teaches Physics and Mathematics at MindPeak, with expertise in electrodynamics, mechanics, and higher algebra for both JEE and NEET aspirants.',
  },
  {
    slug: 'muskan-singla',
    name: 'Muskan Singla',
    jobTitle: 'Chemistry & Biology Mentor',
    subjects: ['Chemistry', 'Biology'],
    exams: ['NEET', 'JEE'],
    credential: 'Chemistry & Biology Mentor, MindPeak Institute',
    institution: 'MindPeak Institute',
    bio: 'Muskan Singla covers Chemistry and Biology at MindPeak, helping NEET students develop mastery in both subjects through focused 1-on-1 sessions and daily MCQ practice.',
  },
];

const BASE = 'https://mindpeakinstitute.com';

/** Build a schema.org Person object for a mentor */
export function buildPersonSchema(mentor: Mentor) {
  return {
    '@type': 'Person' as const,
    '@id': `${BASE}/mentors#${mentor.slug}`,
    name: mentor.name,
    jobTitle: mentor.jobTitle,
    worksFor: {
      '@type': 'EducationalOrganization' as const,
      '@id': `${BASE}/#organization`,
      name: 'MindPeak Institute',
      url: BASE,
    },
    knowsAbout: mentor.subjects,
    description: mentor.bio,
    ...(mentor.linkedIn ? { sameAs: [mentor.linkedIn] } : {}),
    ...(mentor.image ? { image: `${BASE}${mentor.image}` } : {}),
  };
}

/** Build an ItemList of Person schemas for the /mentors page */
export function buildMentorsJsonLd(): object[] {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MindPeak Institute Faculty & Mentors',
    description: 'Meet the expert mentors who deliver personalised 1-on-1 JEE and NEET coaching at MindPeak Institute.',
    url: `${BASE}/mentors`,
    numberOfItems: mentors.length,
    itemListElement: mentors.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: buildPersonSchema(m),
    })),
  };

  const personSchemas = mentors.map((m) => ({
    '@context': 'https://schema.org',
    ...buildPersonSchema(m),
  }));

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Our Mentors', item: `${BASE}/mentors` },
    ],
  };

  return [itemList, ...personSchemas, breadcrumb];
}
