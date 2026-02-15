import { Users, Clock, BookOpen, Monitor, GraduationCap, Target, Zap, FlaskConical, Brain, Download } from 'lucide-react';
import jeeLogo from '@/assets/jee-logo.jpeg';
import neetLogo from '@/assets/neet-logo.jpeg';
import foundationLogo from '@/assets/foundation-logo.png';

export interface Course {
  slug: string;
  name: string;
  targetExam: string;
  duration: string;
  mode: string;
  fee: string;
  icon: typeof Users;
  color?: string;
  description: string;
  highlights: string[];
  logo?: string;
  brochure?: { title: string; file: string };
  category: 'jee' | 'neet' | 'foundation' | 'crash';
  detailedSections: {
    title: string;
    content: string;
  }[];
}

export const courses: Course[] = [
  {
    slug: 'jee-main-target-2028',
    name: 'JEE Main Target 2028',
    targetExam: 'JEE Main + Advanced',
    duration: '2 Years',
    mode: '1-on-1',
    fee: '₹2,30,000 + GST',
    icon: Target,
    logo: jeeLogo,
    category: 'jee',
    description:
      'A comprehensive 2-year program designed for students starting early in their JEE preparation journey. This course covers the complete JEE Main and Advanced syllabus with a deep-concept approach. Each student receives a personalized study roadmap, daily 1-on-1 classes (6 days a week) with short focused sessions, weekly mock tests, and regular performance analytics. The curriculum is structured to build a rock-solid foundation in Physics, Chemistry, and Mathematics while progressively advancing to competition-level problem solving.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Complete PCM syllabus coverage for JEE Main + Advanced',
      'Weekly mock tests with detailed performance analytics',
      'Personalized study roadmap & doubt resolution',
      'Regular parent-mentor progress meetings',
    ],
    brochure: { title: 'JEE Main Target 2028 Brochure', file: '/brochures/class-11-jee.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'This program is ideal for students currently in Class 10 or early Class 11 who want to start their JEE preparation with a strong, structured approach. Whether you\'re aiming for IIT Bombay or any top NIT, this 2-year journey gives you the time and depth needed to master every concept.',
      },
      {
        title: 'How It Works',
        content: 'You\'ll be paired with a dedicated mentor who understands your strengths and weaknesses. Daily 1-on-1 sessions (6 days/week) are kept short and focused to maximize retention. Your mentor creates a personalized study plan that evolves based on your progress, ensuring no topic is left behind.',
      },
      {
        title: 'Curriculum & Approach',
        content: 'The curriculum follows a phased approach: Phase 1 (Months 1-8) focuses on building strong fundamentals in Physics, Chemistry, and Mathematics. Phase 2 (Months 9-16) introduces advanced problem-solving and JEE Advanced-level questions. Phase 3 (Months 17-24) is dedicated to intensive revision, mock tests, and exam strategy.',
      },
      {
        title: 'Assessment & Tracking',
        content: 'Weekly topic-wise tests, monthly full-length mock tests, and quarterly comprehensive assessments ensure you\'re always on track. Detailed performance analytics help identify weak areas before they become problems. Parents receive regular progress reports and can schedule meetings with mentors.',
      },
    ],
  },
  {
    slug: 'neet-target-2028',
    name: 'NEET Target 2028',
    targetExam: 'NEET UG',
    duration: '2 Years',
    mode: '1-on-1',
    fee: '₹2,30,000 + GST',
    icon: FlaskConical,
    logo: neetLogo,
    category: 'neet',
    description:
      'A thorough 2-year NEET UG preparation program with dedicated 1-on-1 mentoring. Covers the entire NEET syllabus across Physics, Chemistry, and Biology with special emphasis on NCERT mastery and application-based questions. Daily short focused 1-on-1 sessions (6 days/week) ensure consistent progress.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'NCERT line-by-line analysis & concept mapping',
      'Complete PCB syllabus with application-based focus',
      'Regular full-length mock tests mimicking NEET pattern',
      'Biology diagram practice & assertion-reason training',
    ],
    brochure: { title: 'NEET Target 2028 Brochure', file: '/brochures/neet-2year.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'Designed for students in Class 10 or early Class 11 who are serious about cracking NEET UG with a top rank. If you dream of getting into AIIMS, JIPMER, or any top government medical college, this 2-year program gives you the comprehensive preparation you need.',
      },
      {
        title: 'How It Works',
        content: 'Your dedicated NEET mentor guides you through daily 1-on-1 sessions (6 days/week), focusing on NCERT mastery first, then building upon it with application-based questions from reference books. The approach ensures deep conceptual clarity — not just rote memorization.',
      },
      {
        title: 'NCERT-First Approach',
        content: 'Every NEET topper will tell you — NCERT is the bible. Our program includes line-by-line NCERT analysis, concept mapping, and extraction of potential questions from every chapter. We ensure you can answer any NCERT-based question with confidence.',
      },
      {
        title: 'Biology Special Focus',
        content: 'Biology carries the highest weightage in NEET. Our program includes dedicated diagram practice sessions, assertion-reason training, and extensive MCQ practice covering all NCERT Biology topics. We also cover topics from trusted reference books for comprehensive preparation.',
      },
    ],
  },
  {
    slug: 'jee-target-2027',
    name: 'JEE Target 2027',
    targetExam: 'JEE Main + Advanced',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,30,000 + GST',
    icon: Zap,
    logo: jeeLogo,
    category: 'jee',
    description:
      'An intensive 1-year JEE preparation program for students in their final year before the exam. This accelerated course focuses on completing the syllabus efficiently while dedicating significant time to revision, problem-solving, and exam strategy.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Accelerated syllabus completion with revision cycles',
      'Previous year paper analysis & pattern recognition',
      'Advanced problem-solving & shortcut techniques',
      'Exam strategy & time management coaching',
    ],
    brochure: { title: 'JEE Target 2027 Brochure', file: '/brochures/jee-main-adv.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'This program is for Class 12 students or droppers who have one year left before their JEE exam. Whether you\'ve been preparing on your own or switching from another coaching, this intensive program gets you exam-ready in 12 months.',
      },
      {
        title: 'Accelerated Learning Approach',
        content: 'The course follows a compressed timeline: first 6 months for rapid syllabus completion with concept clarity, last 6 months for intensive revision, mock tests, and exam strategy. Daily 1-on-1 sessions ensure no time is wasted on topics you already know.',
      },
      {
        title: 'Previous Year Analysis',
        content: 'We analyze 15+ years of JEE papers to identify patterns, frequently asked topics, and question types. Your mentor trains you to recognize these patterns and apply the right techniques under exam pressure.',
      },
      {
        title: 'Exam Strategy & Time Management',
        content: 'Knowing the content is only half the battle. We train you in strategic question selection, time allocation per section, educated guessing techniques, and stress management — skills that can improve your score by 20-30 marks.',
      },
    ],
  },
  {
    slug: 'neet-target-2027',
    name: 'NEET Target 2027',
    targetExam: 'NEET UG',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,30,000 + GST',
    icon: FlaskConical,
    logo: neetLogo,
    category: 'neet',
    description:
      'A focused 1-year NEET UG program designed for students looking to maximize their score in the upcoming exam. The course emphasizes high-yield topics, NCERT-based conceptual clarity, and extensive practice.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'High-yield topic prioritization for maximum score impact',
      'NCERT mastery with extra reference material',
      'Extensive MCQ practice & error analysis',
      'Full-length mock tests with NEET-identical interface',
    ],
    brochure: { title: 'NEET Target 2027 Brochure', file: '/brochures/neet-2year.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'Perfect for Class 12 students or NEET repeaters who need focused, intensive preparation in their final year. If you want a dedicated mentor to guide you through every chapter and every doubt, this is your program.',
      },
      {
        title: 'High-Yield Topic Strategy',
        content: 'Not all topics carry equal weight in NEET. We prioritize high-yield chapters that consistently appear in the exam, ensuring you invest your time where it matters most. This strategic approach maximizes your score improvement.',
      },
      {
        title: 'MCQ Mastery',
        content: 'NEET is all about MCQs. Our program includes extensive practice with 10,000+ questions covering every possible question type — factual, application-based, assertion-reason, and diagram-based. Error analysis after each test helps eliminate recurring mistakes.',
      },
      {
        title: 'Mock Test Strategy',
        content: 'Regular full-length mock tests replicate the exact NEET exam interface and timing. Detailed analysis after each test identifies your scoring pattern, time spent per question, and accuracy trends — giving you a clear picture of your readiness.',
      },
    ],
  },
  {
    slug: 'subject-crash-course',
    name: 'Subject Crash Course',
    targetExam: 'PCM / PCB',
    duration: '1–2 Months',
    mode: 'Batch of 2–5 students',
    fee: '₹18,000 per subject',
    icon: Zap,
    color: 'from-orange-500/20 to-orange-500/5',
    category: 'crash',
    description:
      'A rapid subject-specific crash course designed to cover or revise an entire subject in 1–2 months. Ideal for students who need focused help in a particular subject.',
    highlights: [
      'Live online daily class, 6 days/week (longer intensive sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Small batch of 2–5 students for focused learning',
      'Condensed notes & formula/concept sheets provided',
      'Subject-specific mock tests & rapid revision cycles',
      'Ideal for quick revision before exams',
    ],
    brochure: { title: 'Subject Crash Course Brochure', file: '/brochures/class-12-jee.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'Ideal for students who are strong in most subjects but need intensive help in one or two specific subjects. Whether it\'s Physics concepts, Organic Chemistry, or Calculus — this crash course gets you up to speed fast.',
      },
      {
        title: 'Small Batch Advantage',
        content: 'With only 2-5 students per batch, you get semi-personalized attention at an affordable price. The small group dynamic also enables peer learning and healthy competition.',
      },
      {
        title: 'What\'s Covered',
        content: 'Complete subject coverage in condensed format. You receive formula sheets, concept maps, and summary notes for quick revision. Daily longer sessions (compared to regular courses) ensure maximum coverage in minimum time.',
      },
    ],
  },
  {
    slug: '1-on-1-crash-program',
    name: '1-on-1 Crash Program',
    targetExam: 'JEE / NEET',
    duration: '1–2 Months',
    mode: '1-on-1',
    fee: '₹30,000 + GST per subject',
    icon: Zap,
    color: 'from-red-500/20 to-red-500/5',
    category: 'crash',
    description:
      'The most intensive short-term program at MindPeak — a fully personalized 1-on-1 crash course lasting 1–2 months. Perfect for last-minute exam preparation.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (longer intensive sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Custom day-by-day plan targeting weak areas',
      'High-yield topic focus for maximum score impact',
      'Rapid problem-solving drills & timed practice',
      'Exam temperament & last-minute strategy coaching',
    ],
    brochure: { title: '1-on-1 Crash Program Brochure', file: '/brochures/class-12-jee.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'For students with 1-2 months left before their exam who need maximum impact in minimum time. Your dedicated mentor crafts a day-by-day plan targeting your specific weak areas for maximum score improvement.',
      },
      {
        title: 'Personalized Day-by-Day Plan',
        content: 'After an initial diagnostic assessment, your mentor creates a custom plan that focuses exclusively on topics where you can gain the most marks. Every session is targeted, every minute counts.',
      },
      {
        title: 'Exam Temperament Building',
        content: 'Last-minute preparation isn\'t just about content — it\'s about confidence. We include timed practice sessions, stress management techniques, and exam-day strategy coaching to ensure you perform at your best when it matters most.',
      },
    ],
  },
  {
    slug: '6th-foundation',
    name: '6th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,00,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    category: 'foundation',
    description:
      'Start the journey early! The 6th Foundation course builds a strong conceptual base in Science and Mathematics aligned with future IIT-JEE and NEET preparation.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Strong Science & Math foundation for future competitive exams',
      'Olympiad-level thinking & logical reasoning',
      'Fun, engaging teaching methods for young learners',
      'Regular assessments & progress reports for parents',
    ],
    brochure: { title: '6th Foundation Brochure', file: '/brochures/foundation-class-8.pdf' },
    detailedSections: [
      {
        title: 'Why Start in Class 6?',
        content: 'The earlier students start building their analytical thinking skills, the stronger their foundation becomes. Class 6 is the perfect time to develop curiosity-driven learning habits that will serve them throughout their academic journey.',
      },
      {
        title: 'Beyond School Textbooks',
        content: 'While covering the school curriculum, we introduce Olympiad-level thinking, logical reasoning puzzles, and application-based problems that make learning exciting and challenging.',
      },
      {
        title: 'Parent Involvement',
        content: 'Parents receive monthly progress reports and can schedule meetings with mentors to track their child\'s development. We believe parent-mentor collaboration is key to a student\'s success.',
      },
    ],
  },
  {
    slug: '7th-foundation',
    name: '7th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,00,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    category: 'foundation',
    description:
      'Building on the 6th Foundation, this course deepens conceptual understanding in Physics, Chemistry, Biology, and Mathematics with age-appropriate challenges.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Deepened PCM/PCB concepts beyond school level',
      'Introduction to competitive exam question patterns',
      'Habit-building for consistent study routines',
      'Monthly progress assessments with mentor feedback',
    ],
    brochure: { title: '7th Foundation Brochure', file: '/brochures/foundation-class-8.pdf' },
    detailedSections: [
      {
        title: 'Building on Strong Foundations',
        content: 'Class 7 is where students start encountering more complex scientific concepts. This course ensures they not only understand these concepts but can apply them to solve challenging problems.',
      },
      {
        title: 'Study Habit Formation',
        content: 'We focus on building consistent study routines and self-discipline — habits that become invaluable during the intense 11th-12th preparation years.',
      },
    ],
  },
  {
    slug: '8th-foundation',
    name: '8th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,00,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    category: 'foundation',
    description:
      'The 8th Foundation program bridges the gap between school-level science and the rigorous demands of competitive exams with multi-concept application problems.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Multi-concept application problems introduced',
      'Bridge between school science & competitive-level rigor',
      'NTSE & Olympiad preparation integrated',
      'Personalized pacing based on student capability',
    ],
    brochure: { title: '8th Foundation Brochure', file: '/brochures/foundation-class-8.pdf' },
    detailedSections: [
      {
        title: 'The Critical Bridge Year',
        content: 'Class 8 is where the complexity of science increases significantly. Students begin tackling problems that require combining concepts from multiple chapters — a critical skill for JEE and NEET.',
      },
      {
        title: 'NTSE & Olympiad Integration',
        content: 'We integrate NTSE and Science/Math Olympiad preparation into the curriculum, giving students early exposure to competitive exam patterns while strengthening their school performance.',
      },
    ],
  },
  {
    slug: '9th-foundation',
    name: '9th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,10,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    category: 'foundation',
    description:
      'Class 9 is where competitive exam preparation truly begins. This foundation course aligns CBSE/State board curriculum with JEE and NEET-level concepts.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Integrated board + competitive syllabus coverage',
      'Previous year foundation-level question practice',
      'Exam-taking skills & time management basics',
      'Strong preparation for 10th boards & beyond',
    ],
    brochure: { title: '9th Foundation Brochure', file: '/brochures/foundation-class-9.pdf' },
    detailedSections: [
      {
        title: 'Where Competition Begins',
        content: 'Class 9 introduces topics that directly appear in JEE and NEET. Our integrated approach covers board syllabus and competitive topics simultaneously, saving time and building deep understanding.',
      },
      {
        title: 'Board + Competitive Dual Focus',
        content: 'Students don\'t need to choose between board exams and competitive preparation. Our curriculum is designed so that mastering one naturally strengthens the other.',
      },
    ],
  },
  {
    slug: '10th-foundation',
    name: '10th Foundation',
    targetExam: 'IIT/NEET',
    duration: '1 Year',
    mode: '1-on-1',
    fee: '₹1,10,000 + GST',
    icon: GraduationCap,
    logo: foundationLogo,
    category: 'foundation',
    description:
      'The 10th Foundation course is the final stepping stone before students enter the intense 11th-12th competitive preparation phase. Board excellence + competitive readiness.',
    highlights: [
      'Live online 1-on-1 daily class, 6 days/week (short focused sessions)',
      'All sessions recorded — rewatch anytime for revision',
      'Board exam mastery + competitive concept depth',
      'Smooth transition preparation for 11th-level content',
      'Pre-JEE/NEET topic introduction for head start',
      'Complete 10th syllabus with advanced applications',
    ],
    brochure: { title: '10th Foundation Brochure', file: '/brochures/foundation-class-10.pdf' },
    detailedSections: [
      {
        title: 'The Launchpad Year',
        content: 'Class 10 is your last chance to build a bulletproof foundation before the intense 11th-12th years. We ensure board exam excellence while introducing advanced concepts that give students a head start.',
      },
      {
        title: 'Transition Preparation',
        content: 'The jump from 10th to 11th is the biggest academic leap students face. We prepare them by introducing key 11th-level concepts in advance, ensuring a smooth transition into competitive preparation.',
      },
    ],
  },
];

export interface TestSeries {
  name: string;
  exam: string;
  duration: string;
  fee: string;
}

export const testSeriesData: TestSeries[] = [
  { name: 'NEET Test Series', exam: 'NEET UG', duration: '4 Months', fee: '₹3,000' },
  { name: 'JEE Test Series', exam: 'JEE Main', duration: '4 Months', fee: '₹3,000' },
  { name: 'NEET Test Series', exam: 'NEET UG', duration: '1 Year', fee: '₹6,000' },
  { name: 'JEE Test Series', exam: 'JEE Main', duration: '1 Year', fee: '₹6,000' },
  { name: 'NEET Integrated Test Series', exam: 'NEET UG', duration: '2 Years', fee: '₹11,000' },
  { name: 'JEE Integrated Test Series', exam: 'JEE Main + Advanced', duration: '2 Years', fee: '₹11,000' },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(c => c.slug === slug);
};
