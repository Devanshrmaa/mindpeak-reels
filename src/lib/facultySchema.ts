/**
 * Person schema for MindPeak Institute's actual faculty team.
 * Used on /mentors and injected into the global EducationalOrganization.
 */

const BASE = 'https://mindpeakinstitute.com';
const ORG = { '@type': 'EducationalOrganization', name: 'MindPeak Institute', url: BASE };

export interface FacultyMember {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
  sameAs?: string[];
}

const faculty: FacultyMember[] = [
  {
    id: 'devansh',
    name: 'Devansh',
    jobTitle: 'Founder & Physics Mentor',
    description:
      'Founder of MindPeak Institute and dedicated Physics mentor for JEE and NEET aspirants. Leads the personalized 1-on-1 coaching philosophy that underpins every program at MindPeak.',
    knowsAbout: [
      'Physics', 'JEE Physics', 'NEET Physics',
      'Mechanics', 'Electrodynamics', 'Optics', 'Thermodynamics', 'Modern Physics',
      'JEE Main', 'JEE Advanced', 'NEET UG',
    ],
  },
  {
    id: 'sahil-singh',
    name: 'Sahil Singh',
    jobTitle: 'Chemistry Mentor',
    description:
      'Chemistry mentor at MindPeak Institute specialising in Physical, Organic, and Inorganic Chemistry for JEE and NEET preparation.',
    knowsAbout: [
      'Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry',
      'JEE Chemistry', 'NEET Chemistry', 'Chemical Bonding', 'Electrochemistry',
    ],
  },
  {
    id: 'krishnendu-brahmacharya',
    name: 'Krishnendu Brahmacharya',
    jobTitle: 'Mathematics Mentor',
    description:
      'Mathematics mentor at MindPeak Institute, guiding JEE aspirants through Calculus, Algebra, Coordinate Geometry, and advanced problem-solving techniques.',
    knowsAbout: [
      'Mathematics', 'JEE Mathematics', 'Calculus', 'Algebra',
      'Coordinate Geometry', 'Probability', 'Trigonometry', 'Vectors',
    ],
  },
  {
    id: 'aparna-chandra',
    name: 'Aparna Chandra',
    jobTitle: 'Subject Mentor',
    description: 'Dedicated subject mentor at MindPeak Institute, helping JEE and NEET aspirants with personalised 1-on-1 coaching.',
    knowsAbout: ['JEE Preparation', 'NEET Preparation', 'Personalized Coaching'],
  },
  {
    id: 'nishkersh-mishra',
    name: 'Nishkersh Mishra',
    jobTitle: 'Subject Mentor',
    description: 'Subject mentor at MindPeak Institute, delivering personalised 1-on-1 online coaching for JEE and NEET aspirants.',
    knowsAbout: ['JEE Preparation', 'NEET Preparation', 'Personalized Coaching'],
  },
  {
    id: 'muskan-singla',
    name: 'Muskan Singla',
    jobTitle: 'Subject Mentor',
    description: 'Subject mentor at MindPeak Institute, providing dedicated 1-on-1 coaching tailored to each student\'s target exam and learning style.',
    knowsAbout: ['JEE Preparation', 'NEET Preparation', 'Personalized Coaching'],
  },
];

export function buildFacultyPersonSchemas() {
  return faculty.map((f) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE}/mentors#${f.id}`,
    name: f.name,
    jobTitle: f.jobTitle,
    description: f.description,
    worksFor: ORG,
    knowsAbout: f.knowsAbout,
    ...(f.sameAs ? { sameAs: f.sameAs } : {}),
    url: `${BASE}/mentors`,
  }));
}

export function buildFacultyGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': buildFacultyPersonSchemas().map(({ '@context': _ctx, ...rest }) => rest),
  };
}

export { faculty };
