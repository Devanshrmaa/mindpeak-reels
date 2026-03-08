/**
 * Subject-City Data — Template generators for ~3,600+ subject-city pages
 * Route: /{exam}-{subject}-coaching-in-{city}
 * Example: /jee-physics-coaching-in-jaipur
 */

import { allCities, type CityData } from './cityData';
import { chapters, type ChapterData } from './chapterData';
import { getStateEducation } from './stateEducationData';

/* ═══ Types ═══ */

export interface SubjectCityConfig {
  exam: 'jee' | 'neet';
  subject: string;        // physics, chemistry, mathematics, biology
  subjectLabel: string;    // Physics, Chemistry, Mathematics, Biology
  city: CityData;
}

export interface WeightageRow {
  chapter: string;
  weightage: string;
  difficulty: string;
  avgQuestions: string;
  slug?: string;
}

export interface ChapterPlan {
  chapter: string;
  weeks: string;
  priority: 'High' | 'Medium' | 'Low';
  tip: string;
  slug?: string;
}

export interface SubjectCityPage {
  slug: string;
  exam: 'jee' | 'neet';
  subject: string;
  subjectLabel: string;
  city: CityData;
  title: string;
  description: string;
  heroHeadline: string;
  heroSubtext: string;
  introText: string;
  weightageTable: WeightageRow[];
  chapterPlan: ChapterPlan[];
  whyThisSubject: string;
  studyStrategy: string;
  commonMistakes: string[];
  faqs: { q: string; a: string }[];
  backlinks: { label: string; href: string }[];
}

/* ═══ Subject definitions ═══ */

const JEE_SUBJECTS = [
  { subject: 'physics', subjectLabel: 'Physics' },
  { subject: 'chemistry', subjectLabel: 'Chemistry' },
  { subject: 'mathematics', subjectLabel: 'Mathematics' },
];

const NEET_SUBJECTS = [
  { subject: 'physics', subjectLabel: 'Physics' },
  { subject: 'chemistry', subjectLabel: 'Chemistry' },
  { subject: 'biology', subjectLabel: 'Biology' },
];

/* ═══ Subject-specific exam data ═══ */

const SUBJECT_WEIGHTAGE: Record<string, Record<string, WeightageRow[]>> = {
  jee: {
    physics: [
      { chapter: 'Mechanics', weightage: '25-30%', difficulty: 'Hard', avgQuestions: '7-8' },
      { chapter: 'Electrodynamics', weightage: '20-25%', difficulty: 'Hard', avgQuestions: '6-7' },
      { chapter: 'Optics & Modern Physics', weightage: '15-18%', difficulty: 'Medium', avgQuestions: '4-5' },
      { chapter: 'Thermodynamics & Waves', weightage: '12-15%', difficulty: 'Medium', avgQuestions: '3-4' },
      { chapter: 'Magnetism & EMI', weightage: '10-12%', difficulty: 'Medium', avgQuestions: '3' },
      { chapter: 'Semiconductor & Communication', weightage: '5-8%', difficulty: 'Easy', avgQuestions: '2' },
    ],
    chemistry: [
      { chapter: 'Physical Chemistry', weightage: '30-35%', difficulty: 'Medium', avgQuestions: '8-10' },
      { chapter: 'Organic Chemistry', weightage: '30-35%', difficulty: 'Hard', avgQuestions: '8-10' },
      { chapter: 'Inorganic Chemistry', weightage: '25-30%', difficulty: 'Easy-Medium', avgQuestions: '7-8' },
      { chapter: 'Coordination Chemistry', weightage: '5-8%', difficulty: 'Medium', avgQuestions: '2-3' },
      { chapter: 'Environmental Chemistry', weightage: '2-3%', difficulty: 'Easy', avgQuestions: '1' },
    ],
    mathematics: [
      { chapter: 'Calculus', weightage: '25-30%', difficulty: 'Hard', avgQuestions: '7-8' },
      { chapter: 'Algebra', weightage: '20-25%', difficulty: 'Medium-Hard', avgQuestions: '6-7' },
      { chapter: 'Coordinate Geometry', weightage: '15-20%', difficulty: 'Medium', avgQuestions: '4-5' },
      { chapter: 'Trigonometry', weightage: '8-10%', difficulty: 'Medium', avgQuestions: '2-3' },
      { chapter: 'Vectors & 3D', weightage: '8-10%', difficulty: 'Medium', avgQuestions: '2-3' },
      { chapter: 'Probability & Statistics', weightage: '8-10%', difficulty: 'Easy-Medium', avgQuestions: '2-3' },
    ],
  },
  neet: {
    physics: [
      { chapter: 'Mechanics', weightage: '25-28%', difficulty: 'Medium-Hard', avgQuestions: '12-14' },
      { chapter: 'Electrodynamics', weightage: '18-22%', difficulty: 'Medium', avgQuestions: '9-11' },
      { chapter: 'Optics & Modern Physics', weightage: '15-18%', difficulty: 'Medium', avgQuestions: '7-9' },
      { chapter: 'Heat & Thermodynamics', weightage: '10-12%', difficulty: 'Medium', avgQuestions: '5-6' },
      { chapter: 'Waves & Oscillations', weightage: '8-10%', difficulty: 'Easy-Medium', avgQuestions: '4-5' },
      { chapter: 'Magnetism', weightage: '8-10%', difficulty: 'Easy', avgQuestions: '4-5' },
    ],
    chemistry: [
      { chapter: 'Physical Chemistry', weightage: '25-30%', difficulty: 'Medium', avgQuestions: '8-10' },
      { chapter: 'Organic Chemistry', weightage: '30-35%', difficulty: 'Medium-Hard', avgQuestions: '10-12' },
      { chapter: 'Inorganic Chemistry', weightage: '30-35%', difficulty: 'Easy-Medium', avgQuestions: '10-12' },
      { chapter: 'Biomolecules & Polymers', weightage: '5-8%', difficulty: 'Easy', avgQuestions: '2-3' },
    ],
    biology: [
      { chapter: 'Human Physiology', weightage: '18-20%', difficulty: 'Medium', avgQuestions: '16-18' },
      { chapter: 'Genetics & Evolution', weightage: '15-18%', difficulty: 'Hard', avgQuestions: '14-16' },
      { chapter: 'Plant Physiology', weightage: '10-12%', difficulty: 'Medium', avgQuestions: '9-11' },
      { chapter: 'Ecology & Environment', weightage: '10-12%', difficulty: 'Easy', avgQuestions: '9-11' },
      { chapter: 'Cell Biology & Biomolecules', weightage: '8-10%', difficulty: 'Medium', avgQuestions: '7-9' },
      { chapter: 'Diversity in Living World', weightage: '8-10%', difficulty: 'Easy-Medium', avgQuestions: '7-9' },
      { chapter: 'Reproduction', weightage: '8-10%', difficulty: 'Medium', avgQuestions: '7-9' },
      { chapter: 'Biotechnology', weightage: '5-8%', difficulty: 'Medium', avgQuestions: '4-7' },
    ],
  },
};

function getSubjectChapters(exam: string, subject: string): ChapterData[] {
  const examUpper = exam.toUpperCase();
  const subjectLower = subject.toLowerCase();
  return chapters.filter(
    c => c.exam === examUpper && c.subject.toLowerCase().includes(subjectLower)
  ).slice(0, 8);
}

function buildChapterPlan(exam: string, subject: string, _city: CityData): ChapterPlan[] {
  const subjectChapters = getSubjectChapters(exam, subject);
  const priorities: ('High' | 'Medium' | 'Low')[] = ['High', 'High', 'High', 'Medium', 'Medium', 'Medium', 'Low', 'Low'];
  const tips = [
    'Start with NCERT concepts, then solve PYQs',
    'Focus on numerical problem-solving speed',
    'Master derivations and conceptual applications',
    'Practice diagram-based questions daily',
    'Create formula sheets for quick revision',
    'Solve at least 30 MCQs daily from this chapter',
    'Use MindPeak\'s adaptive tests to identify gaps',
    'Review common mistakes from mock test analysis',
  ];
  return subjectChapters.map((ch, i) => ({
    chapter: ch.chapter,
    weeks: `${Math.ceil((i + 1) * 1.5)}-${Math.ceil((i + 1) * 1.5) + 1}`,
    priority: priorities[i] || 'Low',
    tip: tips[i] || 'Practice consistently with timed tests',
    slug: ch.slug,
  }));
}

function buildCommonMistakes(subject: string): string[] {
  const mistakes: Record<string, string[]> = {
    physics: [
      'Not drawing free body diagrams before solving mechanics problems',
      'Confusing sign conventions in optics and electrostatics',
      'Skipping dimensional analysis — it can validate 30% of answers',
      'Memorizing formulas without understanding derivations',
      'Ignoring units in final answers — costs marks in JEE',
      'Rushing through comprehension-based questions',
    ],
    chemistry: [
      'Not balancing equations before solving stoichiometry problems',
      'Confusing electrophilic and nucleophilic reactions in organic chemistry',
      'Memorizing inorganic chemistry without understanding periodic trends',
      'Ignoring NCERT for inorganic — 80% questions are NCERT-direct',
      'Not practising named reactions enough for organic chemistry',
      'Skipping environmental chemistry — easy 4-8 marks',
    ],
    mathematics: [
      'Not checking domain restrictions in functions and trigonometry',
      'Calculation errors in integration — always verify by differentiation',
      'Ignoring geometric interpretations of calculus problems',
      'Not practising enough coordinate geometry — highly scoring',
      'Rushing through probability — read questions twice',
      'Forgetting to check boundary conditions in optimization',
    ],
    biology: [
      'Not reading NCERT line-by-line — 85% NEET Biology is NCERT-direct',
      'Ignoring diagram labeling practice — costs 8-12 marks',
      'Confusing similar biological terms and processes',
      'Not memorizing classification tables systematically',
      'Skipping ecology — easiest 6-8 marks in NEET',
      'Not practising assertion-reason questions enough',
    ],
  };
  return mistakes[subject] || mistakes.physics;
}

function buildFAQs(config: SubjectCityConfig): { q: string; a: string }[] {
  const { exam, subjectLabel, city } = config;
  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
  return [
    {
      q: `Is online ${examLabel} ${subjectLabel} coaching effective for ${city.city} students?`,
      a: `Yes. MindPeak's 1-on-1 ${subjectLabel} coaching delivers personalised attention that batch centres in ${city.city} cannot match. Our ${subjectLabel} mentors adapt teaching pace to each student's comprehension, resulting in 100-150+ marks improvement within 3 months.`,
    },
    {
      q: `What is the ${examLabel} ${subjectLabel} syllabus weightage?`,
      a: `${subjectLabel} carries approximately 33% weightage in ${examLabel}. Key chapters include ${SUBJECT_WEIGHTAGE[exam]?.[config.subject]?.slice(0, 3).map(w => w.chapter).join(', ') || 'core topics'}. MindPeak's ${city.city} mentors prioritise high-weightage chapters first.`,
    },
    {
      q: `How many hours should I study ${subjectLabel} daily for ${examLabel}?`,
      a: `We recommend 2-3 hours of focused ${subjectLabel} study daily for ${examLabel} preparation. This includes 1-1.5 hours of concept learning with your MindPeak mentor and 1-1.5 hours of self-practice with targeted problems. ${city.city} students following this schedule see consistent improvement.`,
    },
    {
      q: `Can I join ${subjectLabel} coaching mid-year from ${city.city}?`,
      a: `Absolutely. MindPeak's 1-on-1 format has no batch constraints. ${city.city} students can join anytime — we assess your current ${subjectLabel} level and create a customised catch-up plan.`,
    },
    {
      q: `What books should I use for ${examLabel} ${subjectLabel} along with MindPeak coaching?`,
      a: `Your MindPeak mentor will recommend subject-specific books based on your level. Generally: NCERT (foundation), then HC Verma/Irodov for Physics, MS Chauhan/Himanshu Pandey for Chemistry, or Trueman's for Biology. ${city.city} students get curated study material from mentors.`,
    },
    {
      q: `Does MindPeak provide ${subjectLabel} formula sheets and study material?`,
      a: `Yes. Every ${city.city} student receives comprehensive ${subjectLabel} formula sheets, chapter-wise notes, PYQ compilations, and curated problem sets — all included in the coaching fee. Digital and printable formats available.`,
    },
  ];
}

function buildBacklinks(config: SubjectCityConfig): { label: string; href: string }[] {
  const { exam, subject, subjectLabel, city } = config;
  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
  const links: { label: string; href: string }[] = [
    { label: `${examLabel} Coaching in ${city.city}`, href: `/${exam}-coaching-in-${city.slug}` },
    { label: `${examLabel} ${subjectLabel} Coaching`, href: `/${exam}-${subject}-coaching` },
    { label: `${examLabel} Practice Questions`, href: `/${exam}-practice` },
    { label: `${examLabel} Previous Year Questions`, href: `/${exam}-pyq` },
  ];
  // Add formula sheet link
  const formulaSubj = subject === 'mathematics' ? 'maths' : subject;
  links.push({ label: `${examLabel} ${subjectLabel} Formulas`, href: `/${exam}-${formulaSubj}-formulas` });
  // Add chapter links (top 5)
  const subjectChapters = getSubjectChapters(exam, subject).slice(0, 5);
  for (const ch of subjectChapters) {
    links.push({ label: ch.chapter, href: `/${ch.slug}` });
  }
  return links;
}

/* ═══ Main builder ═══ */

export function buildSubjectCityPage(config: SubjectCityConfig): SubjectCityPage {
  const { exam, subject, subjectLabel, city } = config;
  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
  const examFull = exam === 'jee' ? 'JEE Main & Advanced' : 'NEET UG';
  const cityAny = city as any;
  const stateExamStr = cityAny.stateExam ? ` Our mentors also cover ${cityAny.stateExam} ${subjectLabel} alongside ${examLabel}.` : '';
  const langStr = cityAny.language ? ` ${cityAny.language}-medium concept explanations available.` : '';
  const slug = `${exam}-${subject}-coaching-in-${city.slug}`;

  // State-specific unique data
  const stateData = getStateEducation(city.state);
  const collegeTargets = exam === 'jee'
    ? stateData?.topEnggColleges?.slice(0, 3).map(c => `${c.name} (${c.cutoff})`).join(', ') || 'IITs, NITs'
    : stateData?.topMedColleges?.slice(0, 3).map(c => `${c.name} (${c.cutoff})`).join(', ') || 'top medical colleges';
  const boardChallenge = stateData?.boardTransitionChallenges?.split('.').slice(0, 2).join('.') || '';
  const competitionFact = stateData?.competitionContext?.split('.').slice(0, 2).join('.') || '';
  const careerInfo = stateData?.careerEcosystem?.split('.').slice(0, 2).join('.') || '';
  const stateExamDetail = stateData?.stateExamDetails ? ` ${stateData.stateExamDetails.name} offers ${stateData.stateExamDetails.seats} with ${stateData.stateExamDetails.overlapWithNational}.` : '';

  return {
    slug,
    exam,
    subject,
    subjectLabel,
    city,
    title: `Best ${examLabel} ${subjectLabel} Coaching in ${city.city} — 1-on-1 | MindPeak`,
    description: `Top ${examLabel} ${subjectLabel} coaching in ${city.city} with expert 1-on-1 mentors. Chapter-wise preparation, weightage analysis & personalised study plans. Target colleges: ${collegeTargets}.`,
    heroHeadline: `Master ${examLabel} ${subjectLabel} from ${city.city} — Expert 1-on-1 Mentors`,
    heroSubtext: `Personalised ${examFull} ${subjectLabel} coaching for ${city.city} students targeting ${collegeTargets}. Daily practice sessions and dedicated mentor support.`,
    introText: `MindPeak Institute offers ${city.city} students specialised 1-on-1 ${subjectLabel} coaching for ${examFull}. ${subjectLabel} carries significant weightage and requires both conceptual clarity and problem-solving speed. ${boardChallenge ? boardChallenge + '.' : ''} ${competitionFact ? competitionFact + '.' : ''} Our expert ${subjectLabel} mentors understand ${city.state}'s academic ecosystem and create personalised chapter-wise preparation roadmaps.${stateExamStr}${stateExamDetail}${langStr} Unlike batch coaching centres where ${subjectLabel} is taught in 60-100 student classrooms, MindPeak's dedicated mentors focus exclusively on your learning gaps, building from foundational concepts to advanced problem-solving at your pace. ${careerInfo ? 'Career targets for ' + city.city + ' students: ' + careerInfo + '.' : ''}`,
    weightageTable: SUBJECT_WEIGHTAGE[exam]?.[subject] || [],
    chapterPlan: buildChapterPlan(exam, subject, city),
    whyThisSubject: `${subjectLabel} in ${examLabel} demands a unique combination of conceptual understanding, mathematical application, and problem-solving intuition. ${city.city} students preparing for ${examLabel} ${subjectLabel} need structured chapter-wise preparation that traditional batch coaching rarely provides. At MindPeak, your dedicated ${subjectLabel} mentor creates a personalised preparation calendar — allocating more time to high-weightage chapters like ${SUBJECT_WEIGHTAGE[exam]?.[subject]?.slice(0, 2).map(w => w.chapter).join(' and ') || 'core topics'}, while ensuring comprehensive coverage. Daily 1-on-1 sessions allow real-time doubt resolution, concept reinforcement through worked examples, and progressive difficulty building that matches your comprehension pace. ${city.city} families choosing MindPeak for ${subjectLabel} coaching consistently report that their children develop genuine subject mastery — not just exam-cracking techniques.`,
    studyStrategy: `**Phase 1 (Months 1-3): Foundation Building** — NCERT-first approach. Complete all ${subjectLabel} NCERT chapters with solved examples. Daily 20-question practice at basic level. Weekly concept tests.\n\n**Phase 2 (Months 4-7): Advanced Problem Solving** — Move to reference books and PYQ practice. Your MindPeak mentor assigns chapter-wise problem sets calibrated to your improving level. Timed practice begins.\n\n**Phase 3 (Months 8-10): Mock Tests & Analysis** — Full-length mock tests every week. Detailed post-test analysis with mentor. Error pattern identification and targeted revision.\n\n**Phase 4 (Months 11-12): Revision & Exam Strategy** — Formula sheet revision, high-yield chapter focus, exam-day strategy rehearsal. Light practice only in final 2 weeks.`,
    commonMistakes: buildCommonMistakes(subject),
    faqs: buildFAQs(config),
    backlinks: buildBacklinks(config),
  };
}

/* ═══ Route helpers ═══ */

/** Parse a subject-city slug. Returns null if not matching. */
export function parseSubjectCitySlug(slug: string): SubjectCityConfig | null {
  const match = slug.match(/^(jee|neet)-(physics|chemistry|mathematics|biology)-coaching-in-(.+)$/);
  if (!match) return null;
  const [, exam, subject, citySlug] = match;
  const city = allCities.find(c => c.slug === citySlug);
  if (!city) return null;
  const subjectDefs = exam === 'jee' ? JEE_SUBJECTS : NEET_SUBJECTS;
  const subjectDef = subjectDefs.find(s => s.subject === subject);
  if (!subjectDef) return null;
  return { exam: exam as 'jee' | 'neet', subject, subjectLabel: subjectDef.subjectLabel, city };
}

/** Get all subject-city slugs (for sitemap generation) */
export function getAllSubjectCitySlugs(): string[] {
  const slugs: string[] = [];
  for (const city of allCities) {
    for (const exam of city.exams) {
      const subjects = exam === 'jee' ? JEE_SUBJECTS : NEET_SUBJECTS;
      for (const subj of subjects) {
        slugs.push(`${exam}-${subj.subject}-coaching-in-${city.slug}`);
      }
    }
  }
  return slugs;
}

/** Get count of subject-city pages */
export function getSubjectCityCount(): number {
  let count = 0;
  for (const city of allCities) {
    for (const exam of city.exams) {
      count += exam === 'jee' ? 3 : 3;
    }
  }
  return count;
}
