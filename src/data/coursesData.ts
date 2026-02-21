import { Users, Clock, BookOpen, Monitor, GraduationCap, Target, Zap, FlaskConical, Brain, Download } from 'lucide-react';
import jeeLogo from '@/assets/jee-logo.jpeg';
import neetLogo from '@/assets/neet-logo.jpeg';
import foundationLogo from '@/assets/foundation-logo.png';
import { ONE_YEAR_TARGET, TWO_YEAR_TARGET } from '@/lib/examYears';

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
  syllabus?: {
    subject: string;
    modules: string[];
  }[];
  weeklySchedule?: {
    day: string;
    activity: string;
  }[];
  results?: {
    label: string;
    value: string;
  }[];
  faqs?: {
    q: string;
    a: string;
  }[];
  whyChoose?: string[];
}

export const courses: Course[] = [
  {
    slug: `jee-main-target-${TWO_YEAR_TARGET}`,
    name: `JEE Main Target ${TWO_YEAR_TARGET}`,
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
    brochure: { title: `JEE Main Target ${TWO_YEAR_TARGET} Brochure`, file: '/brochures/class-11-jee.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'This program is ideal for students currently in Class 10 or early Class 11 who want to start their JEE preparation with a strong, structured approach. Whether you\'re aiming for IIT Bombay or any top NIT, this 2-year journey gives you the time and depth needed to master every concept. It is also suitable for students who have taken coaching elsewhere but feel they need more personalized attention to bridge their conceptual gaps.',
      },
      {
        title: 'How It Works',
        content: 'You\'ll be paired with a dedicated mentor who understands your strengths and weaknesses. Daily 1-on-1 sessions (6 days/week) are kept short and focused to maximize retention. Your mentor creates a personalized study plan that evolves based on your progress, ensuring no topic is left behind. Each session is recorded so you can revisit explanations as many times as needed. Homework is assigned after every class and reviewed the next day to ensure consistent practice.',
      },
      {
        title: 'Curriculum & Approach — Phase-Wise Breakdown',
        content: 'Phase 1 (Months 1-8): Building strong fundamentals in Physics, Chemistry, and Mathematics. Concepts are taught from first principles using real-world analogies and visual demonstrations. Phase 2 (Months 9-16): Introduces advanced problem-solving, multi-concept integration, and JEE Advanced-level questions. Students begin solving previous year papers chapter-wise. Phase 3 (Months 17-20): Full syllabus revision with rapid problem-solving drills, error-analysis sessions, and timed practice. Phase 4 (Months 21-24): Intensive mock test phase — 2 full-length tests per week with detailed analysis, rank prediction, and strategy refinement. Every phase adapts to your pace — no rigid deadlines that leave gaps.',
      },
      {
        title: 'Assessment & Tracking',
        content: 'Weekly topic-wise tests, monthly full-length mock tests, and quarterly comprehensive assessments ensure you\'re always on track. Detailed performance analytics help identify weak areas before they become problems. Parents receive regular progress reports and can schedule meetings with mentors. After every mock test, your mentor conducts a 30-minute analysis session covering: questions you got wrong, time spent per section, accuracy trends, and specific topics to revisit.',
      },
      {
        title: 'What Makes This Different from Batch Coaching?',
        content: 'In batch coaching (Allen, Resonance, FIITJEE), you share a teacher with 100-500 students. Doubts pile up, weak topics get skipped, and the pace is fixed regardless of your needs. At MindPeak, every minute of every session is about YOU. Your mentor knows exactly where you stand on every topic and adjusts the teaching accordingly. This results in 3× faster concept clarity and 10× more doubt resolution compared to batch coaching. Our students consistently report that one MindPeak session is worth 3-4 batch lectures.',
      },
      {
        title: 'Study Material & Resources',
        content: 'While MindPeak focuses on teaching methodology rather than printed material, your mentor curates the best resources for you from: HC Verma, Irodov, MS Chauhan, Cengage, RD Sharma, and NCERT. You\'ll receive: topic-wise concept notes after each session, formula sheets and shortcut compilations, a curated problem set of 50-100 questions per topic (graded by difficulty), and access to 20+ years of JEE Main and Advanced previous year papers with detailed solutions.',
      },
      {
        title: 'Doubt Resolution — Instant & Unlimited',
        content: 'Unlike coaching institutes where doubt sessions are scheduled once a week, MindPeak offers unlimited doubt resolution. During your 1-on-1 session, every doubt is resolved on the spot. Between sessions, you can share doubts via WhatsApp/chat and get responses within 2-4 hours. For complex problems, your mentor records a video explanation. No doubt is too small or too "silly" — we encourage asking everything.',
      },
      {
        title: 'Parent & Guardian Involvement',
        content: 'We believe parents are partners in a student\'s success. You\'ll receive: weekly progress SMS/WhatsApp updates with attendance and topic coverage, monthly detailed progress reports (PDF) with performance analytics, quarterly parent-mentor video calls to discuss strategy, and a dedicated parent coordinator who is your single point of contact for any concerns. Parents can also view recorded sessions to understand what\'s being taught.',
      },
    ],
    syllabus: [
      {
        subject: 'Physics',
        modules: [
          'Units, Dimensions & Measurement', 'Kinematics (1D, 2D, Projectile, Relative Motion)',
          'Newton\'s Laws of Motion & Friction', 'Work, Energy & Power',
          'Centre of Mass & Collisions', 'Rotational Motion & Moment of Inertia',
          'Gravitation', 'Properties of Solids & Fluids',
          'Simple Harmonic Motion', 'Waves & Sound',
          'Thermodynamics & Kinetic Theory', 'Heat Transfer',
          'Electrostatics (Coulomb, Gauss, Capacitors)', 'Current Electricity (Kirchhoff, RC Circuits)',
          'Magnetism & Moving Charges', 'Electromagnetic Induction & AC',
          'Ray Optics (Mirrors, Lenses, Prisms)', 'Wave Optics (YDSE, Diffraction, Polarization)',
          'Dual Nature of Matter & Radiation', 'Atoms, Nuclei & Semiconductors',
        ],
      },
      {
        subject: 'Chemistry',
        modules: [
          'Atomic Structure & Quantum Mechanics', 'Chemical Bonding (VSEPR, MOT, VBT)',
          'Periodic Properties & Classification', 'Mole Concept & Stoichiometry',
          'Thermodynamics & Thermochemistry', 'Chemical Equilibrium',
          'Ionic Equilibrium (pH, Buffers, Solubility)', 'Electrochemistry',
          'Chemical Kinetics', 'Solid State & Surface Chemistry',
          'Solutions & Colligative Properties', 'General Organic Chemistry (GOC)',
          'Hydrocarbons & Halides', 'Alcohols, Phenols & Ethers',
          'Aldehydes, Ketones & Carboxylic Acids', 'Amines & Polymers',
          'Biomolecules & Chemistry in Everyday Life', 's-Block & p-Block Elements',
          'd-Block & f-Block Elements', 'Coordination Compounds & Metallurgy',
        ],
      },
      {
        subject: 'Mathematics',
        modules: [
          'Sets, Relations & Functions', 'Complex Numbers & Quadratic Equations',
          'Sequences & Series (AP, GP, HP)', 'Permutations & Combinations',
          'Binomial Theorem', 'Matrices & Determinants',
          'Limits, Continuity & Differentiability', 'Methods of Differentiation & Applications',
          'Indefinite & Definite Integration', 'Area Under Curves & Differential Equations',
          'Trigonometric Functions & Equations', 'Inverse Trigonometry',
          'Straight Lines & Pair of Lines', 'Circles & System of Circles',
          'Conic Sections (Parabola, Ellipse, Hyperbola)', 'Vector Algebra & 3D Geometry',
          'Probability & Statistics', 'Mathematical Reasoning & Induction',
        ],
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Physics — Theory + Problem Solving (1-on-1)' },
      { day: 'Tuesday', activity: 'Chemistry — Theory + Problem Solving (1-on-1)' },
      { day: 'Wednesday', activity: 'Mathematics — Theory + Problem Solving (1-on-1)' },
      { day: 'Thursday', activity: 'Physics — Advanced Problems + Doubt Clearing (1-on-1)' },
      { day: 'Friday', activity: 'Chemistry — Advanced Problems + Doubt Clearing (1-on-1)' },
      { day: 'Saturday', activity: 'Mathematics — Advanced Problems + Weekly Test' },
      { day: 'Sunday', activity: 'Self-study + Revision (mentor-assigned practice set)' },
    ],
    results: [
      { label: 'Best JEE Advanced AIR', value: 'AIR 42' },
      { label: 'Students Below AIR 5,000', value: '95%' },
      { label: 'Average Percentile (JEE Main)', value: '98.2+' },
      { label: 'Mock Score Improvement', value: '10× in 6 months' },
      { label: 'Doubt Resolution Time', value: '<4 hours' },
      { label: 'Session Satisfaction Rating', value: '4.9/5' },
    ],
    faqs: [
      { q: 'Can I join this course mid-year?', a: 'Absolutely! Since all our classes are 1-on-1, there\'s no fixed batch start date. Your mentor will assess your current level and create a customized plan that accounts for the remaining time. Many of our top performers joined mid-session.' },
      { q: 'How many hours of study per day does this require?', a: 'Your 1-on-1 session is 1-1.5 hours daily (6 days/week). After the session, we recommend 3-4 hours of self-study for Class 11 students and 5-6 hours for Class 12 students. Your mentor will provide a detailed daily schedule tailored to your stamina and goals.' },
      { q: 'What if I don\'t like my mentor?', a: 'We offer a 100% mentor-match guarantee. If you feel the teaching style doesn\'t suit you, we\'ll assign a different mentor within 48 hours — no questions asked. Your comfort and learning are our top priority.' },
      { q: 'Is this enough or do I need additional coaching?', a: 'MindPeak\'s 1-on-1 program is designed to be your complete preparation solution. You do NOT need any additional coaching. Our personalized approach covers everything — concepts, problem-solving, doubt resolution, mock tests, and exam strategy. Adding more coaching actually hurts by creating schedule conflicts and information overload.' },
      { q: 'How is the fee structured? Can I pay in installments?', a: 'The ₹2,30,000 + GST fee covers the full 2-year program. We offer flexible payment plans: 50% upfront + 50% after 6 months, or quarterly installments. Sibling discounts and merit-based scholarships are also available. Contact admissions for details.' },
      { q: 'What happens if I miss a session?', a: 'All sessions are recorded, so you can watch the missed class anytime. Additionally, your mentor will cover the missed content in the next session or schedule a make-up class. We allow up to 2 leaves per month without any impact on your schedule.' },
    ],
    whyChoose: [
      'Dedicated 1-on-1 mentor — not shared with 100+ students like batch coaching',
      'Adaptive curriculum that evolves with YOUR progress, not a fixed syllabus pace',
      'Every session recorded — unlimited rewatching for revision',
      '95% success rate with AIR 42 as our best JEE Advanced result',
      '60% lower total cost compared to Kota coaching (no hostel, food, travel expenses)',
      'Study from home with family support — no relocation stress',
      'Unlimited doubt resolution within 2-4 hours via WhatsApp',
      'Weekly parent progress reports — full transparency',
    ],
  },
  {
    slug: `neet-target-${TWO_YEAR_TARGET}`,
    name: `NEET Target ${TWO_YEAR_TARGET}`,
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
    brochure: { title: `NEET Target ${TWO_YEAR_TARGET} Brochure`, file: '/brochures/neet-2year.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'Designed for students in Class 10 or early Class 11 who are serious about cracking NEET UG with a top rank. If you dream of getting into AIIMS Delhi, JIPMER, MAMC, or any top government medical college, this 2-year program gives you the comprehensive preparation you need. This is also ideal for students who find batch coaching insufficient for Biology-heavy preparation.',
      },
      {
        title: 'How It Works',
        content: 'Your dedicated NEET mentor guides you through daily 1-on-1 sessions (6 days/week), focusing on NCERT mastery first, then building upon it with application-based questions from reference books. The approach ensures deep conceptual clarity — not just rote memorization. Each session is recorded for revision. Your mentor adapts the plan weekly based on your test performance and where you need extra focus.',
      },
      {
        title: 'NCERT-First Approach — The Gold Standard',
        content: 'Every NEET topper will tell you — NCERT is the bible. Our program includes line-by-line NCERT analysis, concept mapping, and extraction of potential questions from every chapter. We highlight the exact lines from NCERT that have been converted to questions in past NEET papers (we\'ve mapped 15 years of correlation). After NCERT mastery, we supplement with Trueman\'s Biology, Pradeep\'s Chemistry, and DC Pandey for Physics.',
      },
      {
        title: 'Biology Special Focus — 360 Marks at Stake',
        content: 'Biology carries the highest weightage in NEET (360/720 marks). Our program includes: dedicated diagram practice sessions for Botany and Zoology, assertion-reason training (the trickiest question type), extensive MCQ practice covering every NCERT Biology chapter, previous-year trend analysis for high-frequency topics like Genetics, Human Reproduction, Ecology, and Biomolecules. We also cover Biotechnology and Plant Physiology in depth — topics where most students lose marks.',
      },
      {
        title: 'Physics for NEET — Formula Mastery',
        content: 'NEET Physics is fundamentally different from JEE Physics. It\'s more formula-application oriented and tests direct numerical substitution. Our approach focuses on: mastering 200+ key formulas with shortcut memory techniques, solving NEET-pattern numerical problems (not JEE-level complexity), dimensional analysis tricks for quick verification, and chapter-wise weightage-based prioritization. We focus heavily on Mechanics, Optics, and Modern Physics — they together carry 60%+ weightage.',
      },
      {
        title: 'Chemistry — The Scoring Subject',
        content: 'Chemistry in NEET is often the highest-scoring subject because it rewards memory and pattern recognition. Our program covers: Inorganic Chemistry with mnemonics and shortcut tables, Physical Chemistry with formula derivations and numerical practice, Organic Chemistry with reaction mechanism flowcharts (GOC → Hydrocarbons → Functional Groups), and a special "Last 15 Years Reactions" compilation that covers 90%+ of reaction-based questions asked.',
      },
      {
        title: 'Mock Test Strategy & CBT Practice',
        content: 'NEET is now conducted in CBT (Computer Based Test) format. Students who practice only on paper lose 15-20 marks just due to unfamiliarity with the interface. Our program includes: monthly full-length CBT mock tests mimicking the exact NEET interface, section-wise mini-tests (50 questions in 40 minutes), error analysis after every test with your mentor, and a "200-question marathon" session every month to build exam stamina.',
      },
      {
        title: 'Parent & Guardian Involvement',
        content: 'Medical aspirants often face immense pressure. We keep parents in the loop with: weekly WhatsApp updates on attendance and topic coverage, monthly progress reports with rank predictions, quarterly parent-mentor video calls, and immediate alerts if attendance drops or performance dips. A supported student is a successful student.',
      },
    ],
    syllabus: [
      {
        subject: 'Biology (Botany)',
        modules: [
          'The Living World & Biological Classification', 'Plant Kingdom & Morphology of Flowering Plants',
          'Anatomy of Flowering Plants', 'Cell: The Unit of Life & Cell Division',
          'Transport in Plants', 'Mineral Nutrition & Photosynthesis',
          'Respiration in Plants & Plant Growth', 'Sexual Reproduction in Flowering Plants',
          'Principles of Inheritance & Variation', 'Molecular Basis of Inheritance',
          'Organisms and Populations', 'Ecosystem & Biodiversity',
          'Biotechnology: Principles & Applications', 'Strategies for Enhancement in Food Production',
        ],
      },
      {
        subject: 'Biology (Zoology)',
        modules: [
          'Animal Kingdom & Structural Organisation', 'Biomolecules & Enzymes',
          'Digestion & Absorption', 'Breathing & Exchange of Gases',
          'Body Fluids & Circulation', 'Excretory Products & Their Elimination',
          'Locomotion & Movement', 'Neural Control & Coordination',
          'Chemical Coordination & Integration', 'Human Reproduction & Reproductive Health',
          'Evolution', 'Human Health & Disease',
          'Microbes in Human Welfare', 'Biotechnology & Its Applications',
        ],
      },
      {
        subject: 'Physics',
        modules: [
          'Units & Measurements', 'Kinematics', 'Laws of Motion',
          'Work, Energy & Power', 'Rotational Motion & Gravitation',
          'Properties of Solids & Fluids', 'Thermodynamics & Kinetic Theory',
          'Oscillations & Waves', 'Electrostatics & Current Electricity',
          'Magnetic Effects of Current & Magnetism', 'EMI & Alternating Current',
          'Optics (Ray + Wave)', 'Dual Nature of Matter & Atoms/Nuclei',
          'Semiconductors & Communication Systems',
        ],
      },
      {
        subject: 'Chemistry',
        modules: [
          'Atomic Structure & Chemical Bonding', 'States of Matter & Thermodynamics',
          'Equilibrium (Chemical + Ionic)', 'Redox & Electrochemistry',
          'Chemical Kinetics & Surface Chemistry', 'Periodic Table & s/p/d/f-Block',
          'Coordination Compounds', 'General Organic Chemistry (GOC)',
          'Hydrocarbons & Halides', 'Alcohols, Phenols & Ethers',
          'Aldehydes, Ketones & Acids', 'Amines, Polymers & Biomolecules',
          'Solutions & Solid State', 'Environmental Chemistry',
        ],
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Biology (Botany) — NCERT Analysis + MCQs (1-on-1)' },
      { day: 'Tuesday', activity: 'Physics — Theory + Numericals (1-on-1)' },
      { day: 'Wednesday', activity: 'Chemistry — Theory + Reaction Practice (1-on-1)' },
      { day: 'Thursday', activity: 'Biology (Zoology) — NCERT Analysis + Diagrams (1-on-1)' },
      { day: 'Friday', activity: 'Physics + Chemistry — Problem Solving (1-on-1)' },
      { day: 'Saturday', activity: 'Weekly Test (50 MCQs) + Analysis with Mentor' },
      { day: 'Sunday', activity: 'Self-study + NCERT Re-reading (mentor-assigned)' },
    ],
    results: [
      { label: 'Best NEET Score', value: '695/720' },
      { label: 'Students in Top 5,000 AIR', value: '92%' },
      { label: 'Average NEET Score', value: '620+' },
      { label: 'Biology Average Score', value: '340/360' },
      { label: 'Doubt Resolution Time', value: '<4 hours' },
      { label: 'NCERT Coverage', value: '100%' },
    ],
    faqs: [
      { q: 'Is NCERT enough for NEET or do I need extra books?', a: 'NCERT is the foundation — 85-90% of NEET questions come directly from NCERT. Our program ensures 100% NCERT mastery first, then supplements with reference books (Trueman\'s, Pradeep\'s, DC Pandey) for the remaining 10-15% that tests application-level understanding.' },
      { q: 'How much Biology practice is included?', a: 'Extensive. You\'ll solve 15,000+ Biology MCQs across 28 chapters, including assertion-reason, diagram-based, and statement-based questions. Our Biology bank covers every line of NCERT and is updated with the latest NEET trends.' },
      { q: 'Can I join if I\'m targeting AIIMS specifically?', a: 'Yes! Since AIIMS, JIPMER, and all medical colleges now admit through NEET UG, this program covers everything you need. For top-tier colleges (AIIMS Delhi, MAMC, JIPMER), we add extra focus on high-difficulty Biology and Physics questions.' },
      { q: 'Do you provide study material?', a: 'Your mentor curates the best resources from standard books and provides: session-wise concept notes, NCERT highlight annotations, topic-wise MCQ problem sets (50-100 per topic), and previous year NEET papers (15 years) with detailed solutions.' },
      { q: 'What if I\'m weak in Physics?', a: 'Many NEET aspirants find Physics challenging. Our 1-on-1 approach is perfect for this — your mentor can allocate extra time to Physics without sacrificing Biology or Chemistry. We focus on formula mastery and direct application (NEET Physics is NOT as conceptually intense as JEE Physics).' },
    ],
    whyChoose: [
      'Dedicated 1-on-1 NEET mentor — not 200+ students in a lecture hall',
      'NCERT-first approach with line-by-line analysis of every chapter',
      'Biology gets 50%+ of total teaching time (matching NEET weightage)',
      '92% of our students score in the top 5,000 AIR',
      'CBT mock tests that replicate the exact NEET exam interface',
      'Study from home — no Kota relocation, no hostel expenses',
      'Unlimited doubt resolution within 4 hours via WhatsApp',
      'Weekly parent progress reports with rank predictions',
    ],
  },
  {
    slug: `jee-target-${ONE_YEAR_TARGET}`,
    name: `JEE Target ${ONE_YEAR_TARGET}`,
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
    brochure: { title: `JEE Target ${ONE_YEAR_TARGET} Brochure`, file: '/brochures/jee-main-adv.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'This program is for Class 12 students or droppers who have one year left before their JEE exam. Whether you\'ve been preparing on your own, switching from another coaching, or are a dropper looking for a fresh start with personal guidance, this intensive program gets you exam-ready in 12 months. Many of our top results have come from 1-year program students.',
      },
      {
        title: 'Accelerated Learning Approach',
        content: 'The course follows a compressed but effective timeline: Months 1-4 — Rapid syllabus completion for all remaining topics with concept clarity (your mentor skips what you already know). Months 5-8 — Advanced problem-solving, JEE Advanced-level questions, and integration of multi-concept problems. Months 9-10 — Intensive revision with spaced repetition and chapter-wise mock tests. Months 11-12 — Full-length test phase with 3 mock tests per week, exam strategy refinement, and performance optimization. Daily 1-on-1 sessions ensure no time is wasted on topics you already know.',
      },
      {
        title: 'Previous Year Paper Analysis — 15 Years',
        content: 'We analyze 15+ years of JEE Main and Advanced papers to identify: recurring question patterns and hot topics (questions that repeat in modified form every 2-3 years), difficulty distribution across chapters, time-optimal solving strategies for each question type, and chapters where easy marks are available with minimal effort. Your mentor trains you to recognize these patterns and apply the right techniques under exam pressure. This alone can improve your score by 30-40 marks.',
      },
      {
        title: 'Exam Strategy & Time Management',
        content: 'Knowing the content is only half the battle. We train you in: strategic question selection (attempt order: easy → familiar → moderate → hard), time allocation per section (Physics 55 min, Chemistry 45 min, Maths 60 min for JEE Main), smart elimination techniques for MCQs (eliminate 2 options → 50% guess accuracy), negative marking strategy (when to attempt vs when to skip), and stress management techniques for D-day. These meta-skills can improve your score by 20-30 marks even without learning new content.',
      },
      {
        title: 'Dropper-Specific Support',
        content: 'If you\'re a dropper, we understand the unique challenges you face — the pressure to perform, the frustration of repeating content, and the mental toll. Our approach for droppers: skip topics you\'re already strong in (diagnostic test on Day 1), focus exclusively on gap-filling and score-maximizing chapters, mental health check-ins with your mentor, and a structured daily routine to maintain motivation. 40% of our top JEE results come from dropper students.',
      },
      {
        title: 'Doubt Resolution & Beyond-Session Support',
        content: 'Your 1-on-1 session is 1-1.5 hours of focused teaching daily. Beyond that: unlimited doubt resolution via WhatsApp (response within 2-4 hours), video explanations for complex doubts, mentor-assigned daily problem sets with solutions, and access to a curated question bank of 5,000+ JEE-level problems organized by chapter and difficulty.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Physics — Intensive Theory + PYQs (1-on-1)' },
      { day: 'Tuesday', activity: 'Chemistry — Theory + Reaction Practice (1-on-1)' },
      { day: 'Wednesday', activity: 'Mathematics — Theory + Problem Solving (1-on-1)' },
      { day: 'Thursday', activity: 'Physics — Advanced Problems + Doubt Session (1-on-1)' },
      { day: 'Friday', activity: 'Chemistry + Maths — Mixed Practice (1-on-1)' },
      { day: 'Saturday', activity: 'Full Mock Test + Detailed Analysis with Mentor' },
      { day: 'Sunday', activity: 'Self-study + Revision + Error Notebook Update' },
    ],
    results: [
      { label: 'Best JEE Advanced AIR (1-yr student)', value: 'AIR 312' },
      { label: 'Students Below AIR 10,000', value: '88%' },
      { label: 'Average JEE Main Percentile', value: '97.5+' },
      { label: 'Score Improvement (avg)', value: '+120 marks' },
      { label: 'Dropper Success Rate', value: '93%' },
      { label: 'Session Rating', value: '4.9/5' },
    ],
    faqs: [
      { q: 'Can I complete the full syllabus in 1 year?', a: 'Yes — with daily 1-on-1 sessions, we cover the complete syllabus in 4-5 months. The remaining time is dedicated to revision, advanced problem-solving, and mock tests. The key advantage of 1-on-1 is that we skip topics you already know and spend extra time where you actually need it.' },
      { q: 'Is this suitable for droppers?', a: 'Absolutely. 40% of our students in this program are droppers, and they have a 93% success rate. Your mentor will conduct a diagnostic test on Day 1, identify your gaps, and create a targeted plan that doesn\'t waste time re-teaching things you already know.' },
      { q: 'How is the 1-year program different from the 2-year?', a: 'The core methodology is identical — personalized 1-on-1 mentoring. The difference is pace: the 1-year program moves faster with longer daily sessions and more intensive mock test cycles. If you have the discipline for 6-8 hours of total daily study, the 1-year program delivers excellent results.' },
      { q: 'Will I get enough practice for JEE Advanced?', a: 'Yes. From Month 5 onwards, every session includes JEE Advanced-level problems. We solve 1,000+ Advanced-level problems across Physics, Chemistry, and Maths during the program, plus 15+ full-length Advanced mock tests.' },
    ],
    whyChoose: [
      'Proven results — AIR 312 from a 1-year program student',
      'Skip what you know, focus on what you don\'t — zero wasted time',
      'Dropper-friendly with 93% success rate for repeat students',
      'Daily 1-on-1 sessions — 6× more personal attention than batch coaching',
      '15 years of PYQ analysis integrated into every teaching session',
      'Exam strategy coaching that alone adds 20-30 marks',
    ],
  },
  {
    slug: `neet-target-${ONE_YEAR_TARGET}`,
    name: `NEET Target ${ONE_YEAR_TARGET}`,
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
    brochure: { title: `NEET Target ${ONE_YEAR_TARGET} Brochure`, file: '/brochures/neet-2year.pdf' },
    detailedSections: [
      {
        title: 'Who Is This Course For?',
        content: 'Perfect for Class 12 students or NEET repeaters who need focused, intensive preparation in their final year. If you want a dedicated mentor to guide you through every chapter and every doubt, this is your program. Also ideal for students switching from batch coaching who want personalized attention for their remaining preparation.',
      },
      {
        title: 'High-Yield Topic Strategy',
        content: 'Not all topics carry equal weight in NEET. We prioritize high-yield chapters that consistently appear in the exam: Biology — Genetics, Human Reproduction, Ecology, Cell Biology, and Plant Physiology together cover 55-60% of Biology questions. Physics — Mechanics and Optics cover 50%+ of Physics weightage. Chemistry — Organic Chemistry reactions and Periodic Properties are the highest-frequency topics. Your mentor allocates study time proportional to each topic\'s exam weightage, ensuring you invest time where it matters most.',
      },
      {
        title: 'MCQ Mastery — 15,000+ Questions',
        content: 'NEET is all about MCQs. Our program includes extensive practice with 15,000+ questions covering every possible question type — factual recall, application-based, assertion-reason, diagram-based, and match-the-following. Error analysis after each test helps eliminate recurring mistakes. We maintain an "error notebook" with your mentor where every wrong answer is categorized and revisited until the concept is permanent.',
      },
      {
        title: 'Mock Test Strategy & CBT Training',
        content: 'Regular full-length mock tests replicate the exact NEET CBT interface and timing (3 hours 20 minutes for 200 questions). Detailed analysis after each test identifies: your scoring pattern across subjects, time spent per question (ideal: 1.5-2 min), accuracy trends by topic, and questions you got right but spent too much time on (speed optimization opportunities). We conduct 25+ full-length mock tests during the program.',
      },
      {
        title: 'NEET Repeater Special Track',
        content: 'If you\'re a NEET repeater, we\'ve designed a special approach: Day 1 diagnostic test identifies exactly which chapters need work, we skip topics where you scored 90%+ in your last attempt, focus 80% of time on gap-filling (the chapters where you lost marks), mental resilience coaching because repeater pressure is real, and a structured daily routine (8 AM - 8 PM) to prevent burnout. 50% of our NEET program students are repeaters, and they have a 91% success rate.',
      },
      {
        title: 'Last 60 Days — Final Push Protocol',
        content: 'The last 2 months follow our "Final Push Protocol": Week 1-4 — Rapid full-syllabus revision using our condensed notes (one chapter per day), Week 5-6 — Previous year paper solving (15 years, timed), Week 7-8 — Daily mock tests with 24-hour analysis turnaround, plus subject-wise weak-topic reinforcement sessions. This protocol has helped students improve by 80-100 marks in the final 60 days.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Biology — NCERT Revision + High-Yield MCQs (1-on-1)' },
      { day: 'Tuesday', activity: 'Physics — Numericals + Formula Revision (1-on-1)' },
      { day: 'Wednesday', activity: 'Chemistry — Organic Reactions + Inorganic Practice (1-on-1)' },
      { day: 'Thursday', activity: 'Biology — Zoology Focus + Diagram Practice (1-on-1)' },
      { day: 'Friday', activity: 'Mixed Subject Review + Doubt Marathon (1-on-1)' },
      { day: 'Saturday', activity: 'Full-length CBT Mock Test + Detailed Analysis' },
      { day: 'Sunday', activity: 'NCERT Re-reading + Error Notebook Review' },
    ],
    results: [
      { label: 'Best NEET Score (1-yr student)', value: '680/720' },
      { label: 'Students Above 600', value: '89%' },
      { label: 'Average Score Improvement', value: '+140 marks' },
      { label: 'Repeater Success Rate', value: '91%' },
      { label: 'Biology Average', value: '330/360' },
      { label: 'Mock Test Accuracy (final month)', value: '88%' },
    ],
    faqs: [
      { q: 'Can I cover the entire NEET syllabus in 1 year?', a: 'Yes. With daily 1-on-1 sessions (6 days/week), we complete syllabus coverage in 4-5 months. The remaining 7-8 months are for revision, practice, and mock tests. The personalized approach means we don\'t waste time on topics you already know.' },
      { q: 'How many mock tests are included?', a: '25+ full-length CBT mock tests plus 50+ topic-wise tests. Each mock test is followed by a detailed analysis session with your mentor covering wrong answers, time management, and strategy refinement.' },
      { q: 'Is this suitable for NEET repeaters?', a: 'Yes — 50% of our 1-year NEET students are repeaters with a 91% success rate. We conduct a diagnostic test on Day 1 and create a gap-focused plan that skips your strong chapters and doubles down on weak areas.' },
      { q: 'How is this different from Aakash or Allen NEET programs?', a: 'The fundamental difference is personal attention. In Aakash/Allen, you share a teacher with 200+ students. At MindPeak, every session is 1-on-1 — your mentor knows your exact strengths, weaknesses, and learning pace. This results in 3× faster improvement with zero doubt accumulation.' },
    ],
    whyChoose: [
      '89% of students score 600+ in NEET — well above the cutoff for top colleges',
      'NCERT-first approach covers 90% of NEET questions comprehensively',
      'Repeater-friendly with a targeted gap-filling methodology',
      '25+ full-length CBT mock tests replicating exact NEET interface',
      'Last-60-days Final Push Protocol adds 80-100 marks on average',
      'Daily 1-on-1 attention — no doubt goes unresolved',
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
        content: 'Ideal for students who are strong in most subjects but need intensive help in one or two specific subjects. Whether it\'s Physics concepts, Organic Chemistry, or Calculus — this crash course gets you up to speed fast. Also perfect for students who completed their syllabus but scored poorly in one subject during mock tests and need a quick revision + practice boost before the real exam.',
      },
      {
        title: 'Small Batch Advantage',
        content: 'With only 2-5 students per batch, you get semi-personalized attention at an affordable price. The small group dynamic also enables peer learning and healthy competition. Your teacher knows each student by name, tracks individual progress, and adjusts the pace based on the group\'s understanding. It\'s the perfect middle ground between expensive 1-on-1 and impersonal 200-student batches.',
      },
      {
        title: 'Subjects Available',
        content: 'We offer crash courses for: Physics (Mechanics, Electrodynamics, Optics, Modern Physics), Chemistry (Physical, Organic, Inorganic), Mathematics (Calculus, Algebra, Coordinate Geometry, Trigonometry), Biology (Botany, Zoology, Human Physiology). Each subject crash course covers the complete syllabus in condensed format — nothing is skipped, just delivered faster and more efficiently.',
      },
      {
        title: 'How a 4-Week Crash Course Works',
        content: 'Week 1 — Foundation & Core Concepts: Cover the most fundamental chapters that form the base for everything else. Week 2 — High-Yield Topics: Focus on chapters with the highest exam weightage and question frequency. Week 3 — Problem Solving & Application: Shift from theory to practice with 200+ problems per day. Week 4 — Mock Tests & Revision: Daily subject-specific tests, error analysis, formula revision, and last-day strategy session.',
      },
      {
        title: 'Materials & Resources',
        content: 'Every crash course student receives: condensed concept notes (30-40 pages per subject covering the entire syllabus), formula/reaction sheets for quick revision, 1000+ practice questions organized by difficulty, 5 subject-specific mock tests, and a personal error notebook maintained with your batch teacher. All materials are digital and accessible forever — even after the crash course ends.',
      },
      {
        title: 'Results & Track Record',
        content: 'Students who join our crash courses improve their subject score by an average of 30-40% within 4 weeks. Last session: 78% of Physics crash course students went from "below 50%" to "above 80%" in their subject mock tests. The key is not just re-teaching — it\'s identifying exactly what went wrong in your understanding and fixing it systematically.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Core Theory — New Chapters (2-hour intensive session)' },
      { day: 'Tuesday', activity: 'Problem Solving — Previous Day Topics (2-hour session)' },
      { day: 'Wednesday', activity: 'Advanced Problems + PYQ Practice (2-hour session)' },
      { day: 'Thursday', activity: 'New Chapters — High-Yield Topics (2-hour session)' },
      { day: 'Friday', activity: 'Revision + Doubt Clearing Marathon (2-hour session)' },
      { day: 'Saturday', activity: 'Full Subject Mock Test + Detailed Error Analysis' },
      { day: 'Sunday', activity: 'Self-Study Day — Formula Sheet Revision' },
    ],
    results: [
      { label: 'Average Score Improvement', value: '+35%' },
      { label: 'Students Above 80% Post-Crash', value: '78%' },
      { label: 'Practice Questions Per Course', value: '1000+' },
      { label: 'Batch Size', value: '2-5 only' },
      { label: 'Session Duration', value: '2 hours' },
      { label: 'Course Completion Rate', value: '96%' },
    ],
    faqs: [
      { q: 'Can I take a crash course in more than one subject?', a: 'Yes. You can enroll for multiple subjects simultaneously or sequentially. Many students take 2-3 subjects together. The fee is ₹18,000 per subject with a 10% discount for 2+ subjects.' },
      { q: 'What if I miss a class?', a: 'All sessions are recorded and available within 2 hours. With batches of only 2-5 students, we can also reschedule if the entire batch requests it. Your teacher also provides written notes for any missed session.' },
      { q: 'Is this enough for exam preparation or just revision?', a: 'It depends on your starting level. If you have some foundation, 4 weeks is sufficient for comprehensive coverage. If you are starting from near-zero in a subject, the 2-month (8-week) option provides thorough coverage including extensive practice.' },
      { q: 'How is the batch formed?', a: 'Batches are formed based on exam target (JEE/NEET), subject, and approximate level. We ensure all students in a batch are at a similar level so no one feels too fast or too slow.' },
    ],
    whyChoose: [
      'Affordable at ₹18,000/subject — fraction of the cost of 1-on-1',
      'Small batch of 2-5 students means near-personal attention',
      'Daily 2-hour intensive sessions cover more ground faster',
      'Condensed notes and formula sheets you\'ll use even after the course',
      'Proven 35% average score improvement in just 4 weeks',
      'Complete subject coverage — not just selected topics',
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
        content: 'For students with 1-2 months left before their exam who need maximum impact in minimum time. Your dedicated mentor crafts a day-by-day plan targeting your specific weak areas for maximum score improvement. Also ideal for students who attempted JEE/NEET once and want hyper-focused preparation for their second attempt without repeating what they already know.',
      },
      {
        title: 'Day-1 Diagnostic & Custom Plan',
        content: 'Your 1-on-1 crash course starts with a comprehensive 3-hour diagnostic test covering the full syllabus. Your mentor analyzes: which chapters you score 90%+ (skip these), which chapters you score 50-89% (quick revision needed), and which chapters you score below 50% (intensive reteaching required). Within 24 hours, you receive a detailed day-by-day plan that allocates time proportional to each chapter\'s weakness level AND exam weightage.',
      },
      {
        title: 'Daily Schedule — Intensive But Sustainable',
        content: 'Each day follows a structured pattern: Morning session (2 hours) — New concept teaching + immediate practice, Afternoon (self-study) — Assigned problems from concept sheets, Evening session (1.5 hours) — Problem review + doubt clearing + next day prep. Total mentor contact: 3.5 hours/day, 6 days/week. This is 21 hours of pure 1-on-1 teaching per week — more contact than most students get in a month at batch coaching.',
      },
      {
        title: 'High-Yield First Strategy',
        content: 'With limited time, prioritization is everything. Your mentor identifies the 20% of topics that contribute to 80% of the marks. For JEE Main: Mechanics, Calculus, Organic Chemistry reactions, and Electrochemistry alone cover ~45% of the paper. For NEET: Genetics, Ecology, Optics, and Physical Chemistry cover ~40%. We ensure these topics are mastered first before moving to lower-yield chapters.',
      },
      {
        title: 'Real-Time Doubt Resolution',
        content: 'Unlike batch coaching where doubts pile up, every doubt is resolved in real-time during your session. Additionally, you get WhatsApp access to your mentor for doubts that arise during self-study. Average response time: under 15 minutes during working hours. No doubt is too small — we want zero confusion going into exam day.',
      },
      {
        title: 'Daily Progress Tracking',
        content: 'Your mentor maintains a daily progress dashboard tracking: topics covered vs. plan, daily mini-test scores (10 questions at end of each session), weak concepts flagged for revisitation, and confidence level per topic. Parents receive a weekly progress report every Saturday showing exactly where their child stands and what\'s been accomplished. Full transparency, zero surprises.',
      },
      {
        title: 'Exam Day Preparation',
        content: 'The last 3 days before your exam follow our "Exam Ready Protocol": Day -3: Full-length mock test under exam conditions, Day -2: Error analysis + rapid revision of flagged topics only, Day -1: Light formula review + mental preparation, exam-day strategy discussion (which section to attempt first, time allocation, when to skip). We\'ve seen students gain 15-20 marks purely from better exam strategy.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Weak Topic Intensive — Reteaching + 50 Problems (3.5 hrs)' },
      { day: 'Tuesday', activity: 'High-Yield Chapter — Concept Mastery + PYQs (3.5 hrs)' },
      { day: 'Wednesday', activity: 'Mixed Practice — Cross-Topic Problems (3.5 hrs)' },
      { day: 'Thursday', activity: 'New Weak Topic — Intensive Reteaching (3.5 hrs)' },
      { day: 'Friday', activity: 'Speed Solving — Timed Practice + Strategy (3.5 hrs)' },
      { day: 'Saturday', activity: 'Full Mock Test + Detailed Analysis Session (4 hrs)' },
      { day: 'Sunday', activity: 'Rest Day — Light Revision + Error Notebook Review' },
    ],
    results: [
      { label: 'Average Score Jump (4 weeks)', value: '+50 marks' },
      { label: 'Students Achieving Target Score', value: '85%' },
      { label: 'Mentor Contact Hours/Week', value: '21 hours' },
      { label: 'Doubt Resolution Time', value: '<15 min' },
      { label: 'Days to Visible Improvement', value: '7 days' },
      { label: 'Student Satisfaction', value: '4.9/5' },
    ],
    faqs: [
      { q: 'Is 1-2 months really enough to improve significantly?', a: 'Yes — with 21 hours of weekly 1-on-1 contact, you cover more ground in 4 weeks than most students cover in 3 months of batch coaching. Our data shows an average improvement of 50+ marks in JEE Main and 80+ marks in NEET within 4 weeks.' },
      { q: 'Can I choose which subjects/topics to focus on?', a: 'Absolutely. After the Day-1 diagnostic, your mentor recommends a plan, but you have full input. If you want to focus exclusively on Organic Chemistry and Mechanics, we will. Your goals drive the plan.' },
      { q: 'What if I need more than 2 months?', a: 'If your exam is further away, we recommend our full 1-year or 2-year programs which are more cost-effective for longer durations. The crash program is optimized for the final 1-2 month sprint.' },
      { q: 'How soon can I start?', a: 'Within 24-48 hours. We match you with a suitable mentor based on your exam (JEE/NEET), subject needs, and schedule. The Day-1 diagnostic happens in your first session and you\'re on track from Day 2.' },
      { q: 'Why is this more expensive than the batch crash course?', a: '₹30,000 gets you a dedicated mentor for 21 hours/week of pure 1-on-1 attention. That\'s ₹357/hour of personalized expert teaching — still far less than offline tutors who charge ₹1000-2000/hour. The results justify the investment.' },
    ],
    whyChoose: [
      '21 hours/week of pure 1-on-1 mentor time — the most intensive program available',
      'Day-1 diagnostic ensures zero time wasted on topics you already know',
      'WhatsApp doubt access with <15 minute response time',
      'Daily progress tracking with weekly parent reports',
      'High-yield-first strategy maximizes marks in minimum time',
      'Exam-day strategy coaching adds 15-20 marks from technique alone',
      '85% of students achieve their target score within the program duration',
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
        content: 'The earlier students start building their analytical thinking skills, the stronger their foundation becomes. Class 6 is the perfect time to develop curiosity-driven learning habits that will serve them throughout their academic journey. Research shows that students who start structured preparation in Class 6-7 perform 40% better in JEE/NEET compared to those who start in Class 11. This isn\'t about pressure — it\'s about building a love for problem-solving early.',
      },
      {
        title: 'What We Teach — Beyond School Textbooks',
        content: 'Our curriculum starts with the CBSE/State board syllabus as the base but extends far beyond: Mathematics — Number theory, algebraic thinking, geometry proofs (not just formulas), and data interpretation. Science — Hands-on conceptual understanding of Physics (forces, motion, light) and Chemistry (elements, mixtures, reactions). We introduce "why" questions alongside "what" — for example, not just "plants make food through photosynthesis" but "WHY do leaves appear green? What happens to the light?"',
      },
      {
        title: 'Olympiad & Competitive Exam Exposure',
        content: 'We introduce students to Olympiad-level problems in a fun, non-intimidating way: IMO (International Math Olympiad) practice, NSO (National Science Olympiad) preparation, SOF & ASSET exam question patterns. These competitions build confidence and teach students that exams can be exciting challenges, not stressful events. Many of our students win school-level and state-level medals.',
      },
      {
        title: 'Fun, Engaging Teaching for Young Learners',
        content: 'Teaching a 12-year-old is very different from teaching a 17-year-old. Our mentors use: visual explanations with animations and diagrams, real-world examples (why does a cricket ball swing? How does a refrigerator work?), interactive problem-solving games and puzzles, and the "discovery method" where students figure out concepts themselves with guided hints. Sessions are 45-60 minutes — short enough to maintain focus, long enough to cover ground.',
      },
      {
        title: 'Parent Involvement & Progress Tracking',
        content: 'Parents receive: weekly progress reports (topics covered, quiz scores, areas of strength), monthly video call with the mentor to discuss their child\'s development, access to recorded sessions to see exactly how their child is learning, and semester-end assessment reports comparing performance with expected benchmarks. We believe parent-mentor-student is a three-way partnership for success.',
      },
      {
        title: 'The 6-Year Advantage',
        content: 'Students who start in Class 6 and continue through Class 12 with MindPeak have a massive advantage: by the time they reach Class 11, the "new" JEE/NEET topics are actually familiar concepts revisited at a deeper level. There\'s no shock, no overwhelm, no "I can\'t understand Physics." Everything builds naturally. This is why our long-term foundation students consistently outperform those who start preparation in Class 11.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Mathematics — Number Systems & Algebra (45-60 min)' },
      { day: 'Tuesday', activity: 'Science — Physics Concepts + Fun Experiments (45-60 min)' },
      { day: 'Wednesday', activity: 'Mathematics — Geometry & Logical Reasoning (45-60 min)' },
      { day: 'Thursday', activity: 'Science — Chemistry & Biology Basics (45-60 min)' },
      { day: 'Friday', activity: 'Olympiad Practice — IMO/NSO Problem Solving (45-60 min)' },
      { day: 'Saturday', activity: 'Weekly Quiz + Fun Science Activity' },
      { day: 'Sunday', activity: 'Rest Day — Optional Reading & Exploration' },
    ],
    faqs: [
      { q: 'Is Class 6 too early to start competitive exam preparation?', a: 'We don\'t teach JEE/NEET questions to 12-year-olds. What we do is build the thinking skills, problem-solving abilities, and curiosity that form the foundation for future competitive success. It\'s like learning chess — you start young to build intuition, not to compete immediately.' },
      { q: 'Will this add too much pressure on my child?', a: 'Our sessions are only 45-60 minutes, 6 days a week — designed to be stimulating, not stressful. We use games, puzzles, and real-world examples. Most students look forward to their MindPeak sessions because they find them more engaging than school.' },
      { q: 'How is this different from Kumon or Vedic Maths classes?', a: 'Kumon focuses on arithmetic speed. We focus on conceptual understanding and problem-solving thinking. Our curriculum is specifically designed as a pathway to JEE/NEET, not just general math improvement.' },
      { q: 'Can my child also prepare for school exams with this?', a: 'Absolutely. Our curriculum covers the school syllabus as the base layer. Students who study with us consistently score 90%+ in school exams because our teaching goes deeper than what\'s required for school tests.' },
    ],
    whyChoose: [
      '40% better JEE/NEET performance for students who start in Class 6',
      'Olympiad preparation (IMO, NSO) integrated at no extra cost',
      'Short 45-60 minute sessions designed for young attention spans',
      'Fun, curiosity-driven teaching — not rote memorization',
      'Weekly parent progress reports with full transparency',
      'Builds a 6-year advantage over students who start in Class 11',
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
        content: 'Class 7 is where students start encountering more complex scientific concepts — equations in math, chemical reactions in science, and abstract thinking in general. This course ensures they not only understand these concepts but can apply them to solve challenging problems. If your child struggled with certain topics in Class 6, we address those gaps before building upward.',
      },
      {
        title: 'Mathematics — From Arithmetic to Algebra',
        content: 'Class 7 is the year algebra truly begins. We focus on: algebraic expressions and identities (the building blocks of 11th-12th math), ratio-proportion and percentage applications (essential for Chemistry later), geometry — congruence, similarity, and construction (foundation for Coordinate Geometry), and data handling & probability (increasingly important in modern exams). Each concept is taught with JEE/NEET relevance explained — students understand WHY they\'re learning this.',
      },
      {
        title: 'Science — Introducing Scientific Thinking',
        content: 'Class 7 science introduces key Physics and Chemistry concepts: motion, speed & time (precursor to Kinematics), heat and temperature (precursor to Thermodynamics), acids, bases and salts (precursor to Chemical Equilibrium), and the human body systems (precursor to NEET Biology). We teach students to think like scientists — form hypotheses, design experiments, analyze results. This mindset is THE differentiator in competitive exams.',
      },
      {
        title: 'Study Habit Formation',
        content: 'Class 7 is the ideal time to build study habits that will carry students through the intense 11th-12th years. We work on: consistent daily study routine (same time every day), organized note-taking (concept maps, not just copying), active recall practice (testing yourself, not just re-reading), and time management — balancing school, coaching, and free time. Students who build these habits by Class 8 have a significant advantage later.',
      },
      {
        title: 'School Exam Excellence',
        content: 'While preparing for future competitive exams, we ensure school performance is stellar. Our students consistently score 90-95% in school exams because our teaching goes deeper than school requirements. Topics like integers, fractions, and decimals are taught with application-based problem-solving that makes school-level questions feel easy.',
      },
      {
        title: 'Monthly Assessments & Progress',
        content: 'Every month, students take a comprehensive assessment covering everything learned so far. Parents receive detailed reports showing: subject-wise scores and trends, comparison with expected benchmarks, strengths to celebrate, and specific areas needing attention. These assessments use competitive exam-style questions (MCQs, assertion-reason) to build familiarity early.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Mathematics — Algebra & Equations (45-60 min)' },
      { day: 'Tuesday', activity: 'Science — Physics Concepts (Motion, Heat) (45-60 min)' },
      { day: 'Wednesday', activity: 'Mathematics — Geometry & Mensuration (45-60 min)' },
      { day: 'Thursday', activity: 'Science — Chemistry & Biology (45-60 min)' },
      { day: 'Friday', activity: 'Problem Solving — Olympiad & Application (45-60 min)' },
      { day: 'Saturday', activity: 'Weekly Assessment + Doubt Clearing' },
      { day: 'Sunday', activity: 'Rest Day — Light Revision' },
    ],
    faqs: [
      { q: 'My child is average in school — will they cope with this program?', a: 'Absolutely. Our 1-on-1 approach means the pace is set entirely by your child. We start from their current level and build up. Many "average" school students become toppers because they just needed better teaching methodology and personal attention.' },
      { q: 'How much time commitment is needed?', a: 'Just 45-60 minutes per day for the mentor session, plus 30-45 minutes of self-practice (homework). Total: about 1.5 hours/day. This is designed to complement school, not replace it.' },
      { q: 'Can my child join mid-year?', a: 'Yes. Since all sessions are 1-on-1, we can start from wherever your child is in the school syllabus. There\'s no batch to catch up with — the plan is built around your child.' },
    ],
    whyChoose: [
      'Algebra fundamentals taught with JEE/NEET long-term relevance',
      'Scientific thinking and hypothesis-driven learning approach',
      'Study habit formation that pays dividends for 5+ years',
      'Monthly assessments with detailed parent progress reports',
      'Olympiad preparation integrated into regular curriculum',
      'School exam scores consistently 90-95% for our students',
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
        content: 'Class 8 is where the complexity of science increases significantly. Students begin tackling problems that require combining concepts from multiple chapters — a critical skill for JEE and NEET. Topics like linear equations, quadrilaterals, chemical reactions, and friction form the direct foundation for 11th-12th level Physics, Chemistry, and Mathematics.',
      },
      {
        title: 'Mathematics — Pre-Competitive Rigor',
        content: 'Class 8 math introduces concepts that directly appear in JEE: Linear equations in one variable (precursor to Systems of Equations), Squares, cubes, and roots (precursor to Indices & Surds), Algebraic identities (used throughout JEE Advanced), Mensuration — area and volume (precursor to Integration applications), and Graphs & data interpretation. We solve problems that are 2 levels above school textbook difficulty — this builds the muscle for competitive exams.',
      },
      {
        title: 'Science — Separate Physics, Chemistry, Biology Thinking',
        content: 'In Class 8, we begin teaching Physics, Chemistry, and Biology as distinct disciplines: Physics — Force, pressure, friction, sound, light (qualitative understanding before formulas), Chemistry — Synthetic fibres, metals & non-metals, chemical effects of current (real-world applications), Biology — Cell structure, reproduction in animals, reaching the age of adolescence. Students start seeing how each subject has its own logic and methodology.',
      },
      {
        title: 'NTSE & Olympiad Preparation',
        content: 'Class 8 is the prime year for NTSE (National Talent Search Exam) preparation. We integrate NTSE and Olympiad prep into the curriculum: MAT (Mental Ability Test) — logical reasoning, series completion, coding-decoding, SAT (Scholastic Aptitude Test) — Science and Maths at competitive level, and Science/Math Olympiad question patterns. NTSE scholarship can fund future education, and the exam exposure builds invaluable competitive temperament.',
      },
      {
        title: 'Multi-Concept Problem Solving',
        content: 'Unlike school exams that test one concept at a time, competitive exams combine 2-3 concepts in a single question. In Class 8, we start training this: "A cube of side 6cm is made of a metal with density 2.7 g/cm³. Find its mass." — this combines Mensuration + Physical science. Students learn to identify which concepts a problem requires and how to chain them together — the single most important competitive exam skill.',
      },
      {
        title: 'Personalized Pacing',
        content: 'Every student is different. Some grasp Math quickly but struggle with Science. Some are conceptually strong but slow in problem-solving. Our 1-on-1 model allows complete customization: if your child needs 2 sessions on algebra but only 1 on geometry, we adjust. No rigid schedule — just intelligent, adaptive teaching that meets your child where they are.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Mathematics — Algebra & Equations (1 hour)' },
      { day: 'Tuesday', activity: 'Physics — Force, Motion, Sound (1 hour)' },
      { day: 'Wednesday', activity: 'Mathematics — Geometry & Mensuration (1 hour)' },
      { day: 'Thursday', activity: 'Chemistry & Biology — Concepts + Applications (1 hour)' },
      { day: 'Friday', activity: 'NTSE/Olympiad — MAT + SAT Practice (1 hour)' },
      { day: 'Saturday', activity: 'Weekly Test + Multi-Concept Problem Solving' },
      { day: 'Sunday', activity: 'Rest Day — Self-Study & Exploration' },
    ],
    faqs: [
      { q: 'Should I wait until Class 9 to start competitive preparation?', a: 'Class 8 is actually the best starting point — concepts are manageable, and there\'s time to build habits. Students who start in Class 9 often feel rushed because the syllabus suddenly becomes dense. Class 8 gives a comfortable runway.' },
      { q: 'Is NTSE preparation included or separate?', a: 'Fully included at no extra cost. NTSE topics overlap significantly with competitive exam preparation, so we cover both simultaneously. Our students have a strong NTSE track record.' },
      { q: 'How does this help with 10th board exams?', a: 'Class 8 concepts form the foundation for Class 9-10 syllabus. Students who master these concepts deeply score 95%+ in board exams without separate board preparation — it happens naturally.' },
    ],
    whyChoose: [
      'NTSE & Olympiad preparation integrated at no additional cost',
      'Multi-concept problem-solving builds competitive exam thinking',
      'Personalized pacing — no rigid batch schedule',
      'Direct preparation for Class 9-10 board excellence',
      'Science taught as separate Physics, Chemistry, Biology disciplines',
      'Problems solved at 2× school difficulty level',
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
        title: 'Where Competitive Preparation Truly Begins',
        content: 'Class 9 introduces topics that directly appear in JEE and NEET with minimal modification: Newton\'s Laws of Motion, Chemical Bonding, Cell Biology, Polynomials, and Coordinate Geometry. Our integrated approach covers board syllabus and competitive topics simultaneously, saving time and building deep understanding. This is the year where "school science" starts becoming "real science."',
      },
      {
        title: 'Board + Competitive Dual Focus',
        content: 'Students don\'t need to choose between board exams and competitive preparation. Our curriculum is designed so that mastering one naturally strengthens the other. For example: when we teach Newton\'s Laws in depth (for JEE/NEET), the Class 9 board questions on "Force and Laws of Motion" become trivially easy. Same teaching, dual benefit. Our students average 93% in school exams while simultaneously preparing for competitive exams.',
      },
      {
        title: 'Physics — The Foundation of JEE/NEET Physics',
        content: 'Class 9 Physics topics are the most direct precursors to competitive exam Physics: Motion (Class 9) → Kinematics (Class 11) → JEE/NEET, Force & Laws of Motion → Newton\'s Laws → JEE/NEET Mechanics, Gravitation → Gravitational Force → JEE Advanced, Work & Energy → Work-Energy Theorem → JEE/NEET, Sound → Waves → JEE/NEET. We teach these with the depth and rigor that makes Class 11 feel like a natural continuation, not a scary new level.',
      },
      {
        title: 'Chemistry — Moving Beyond Memorization',
        content: 'Class 9 introduces the atomic structure, chemical reactions, and the mole concept — topics that students typically memorize but don\'t understand. We ensure conceptual understanding: Why do atoms combine? What determines reactivity? How do you predict products of a reaction? Students who truly understand these concepts in Class 9 find Organic and Inorganic Chemistry in Class 11-12 significantly easier.',
      },
      {
        title: 'Mathematics — Advanced Problem-Solving',
        content: 'Class 9 Math introduces several JEE-critical topics: Polynomials & factorization (foundation for JEE algebra), Coordinate Geometry basics (foundation for straight lines, conic sections), Probability (a high-scoring JEE topic), Trigonometry introduction (used extensively in Physics), and Number systems including irrational numbers. We push beyond textbook problems to HINTS-level and RD Sharma-level questions, building the problem-solving stamina needed for competitive exams.',
      },
      {
        title: 'Exam-Taking Skills & Time Management',
        content: 'Class 9 is when we formally introduce exam strategy: MCQ technique — elimination, educated guessing, time allocation, Paper analysis — identifying easy/medium/hard questions and sequencing, Mental math — quick calculations that save 5-10 minutes per paper, and Error prevention — common mistakes and how to avoid them. These meta-skills become invaluable during the actual JEE/NEET exam.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Physics — Mechanics Foundations (1 hour session)' },
      { day: 'Tuesday', activity: 'Mathematics — Algebra & Coordinate Geometry (1 hour)' },
      { day: 'Wednesday', activity: 'Chemistry — Atomic Structure & Reactions (1 hour)' },
      { day: 'Thursday', activity: 'Mathematics — Trigonometry & Geometry (1 hour)' },
      { day: 'Friday', activity: 'Biology / Mixed Revision + Doubt Session (1 hour)' },
      { day: 'Saturday', activity: 'Competitive-Style Weekly Test + Analysis' },
      { day: 'Sunday', activity: 'Self-Study — RD Sharma / HC Verma Intro' },
    ],
    faqs: [
      { q: 'Is Class 9 the right time to start if my child hasn\'t done any preparation before?', a: 'Class 9 is an excellent starting point — perhaps the most popular one. The syllabus starts introducing competitive exam topics, and there are still 3+ years before JEE/NEET. Most of our successful students started in Class 9.' },
      { q: 'Will my child need separate tuition for school exams?', a: 'No. Our curriculum covers the school syllabus at a deeper level. Students who study with us consistently score 90-95% in school exams without any additional tuition.' },
      { q: 'How much daily time is needed?', a: '1 hour of mentor session + 45-60 minutes of self-practice daily. Total commitment: about 2 hours/day. As students progress to Class 10-11, this gradually increases.' },
      { q: 'Do you cover NTSE for Class 9 students?', a: 'Yes — NTSE concepts overlap significantly with our curriculum. We add specific MAT (Mental Ability) practice sessions as the NTSE exam approaches.' },
    ],
    whyChoose: [
      'Class 9 topics directly become JEE/NEET exam topics — learn them right the first time',
      'Dual board + competitive focus saves time and eliminates separate tuition',
      '93% average school score for our Class 9 students',
      'MCQ techniques and exam strategy taught from Day 1',
      'RD Sharma and HC Verma level problems introduced gradually',
      '3-year runway to JEE/NEET — the perfect starting point',
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
        content: 'Class 10 is your last chance to build a bulletproof foundation before the intense 11th-12th years. We ensure board exam excellence (targeting 95%+) while introducing advanced concepts that give students a head start. Students who enter Class 11 with a strong Class 10 foundation report 50% less stress and significantly better performance in their first year of competitive preparation.',
      },
      {
        title: 'Board Exam Mastery — 95%+ Target',
        content: 'Class 10 board results matter for college applications, scholarships, and confidence. Our preparation covers: complete NCERT mastery with every example and exercise solved, previous year board papers (10 years) solved with pattern analysis, CBSE/State board marking scheme understanding — know exactly how to write answers for full marks, sample papers and viva preparation for the practical exams. We target 95%+ for all our students because when competitive topics are taught deeply, board questions become easy.',
      },
      {
        title: 'Physics — Pre-JEE/NEET Introduction',
        content: 'Class 10 Physics topics form the direct base for JEE/NEET: Electricity & Circuits → Current Electricity (JEE), Magnetic Effects of Current → Electromagnetism (JEE), Light — Reflection & Refraction → Ray Optics (JEE/NEET), Human Eye → Optics Applications (NEET). We teach these topics at a level slightly above board requirements, introducing basic numericals and conceptual questions that bridge to Class 11. When your child encounters HC Verma in Class 11, they\'ll recognize the concepts.',
      },
      {
        title: 'Chemistry — Building Blocks for 11th',
        content: 'Class 10 Chemistry directly feeds into Class 11-12: Chemical Reactions & Equations → Chemical Kinetics & Equilibrium, Acids, Bases & Salts → Ionic Equilibrium, Carbon Compounds → Organic Chemistry (the biggest scoring opportunity in JEE/NEET), and Periodic Classification → Periodic Properties. We especially focus on Carbon Compounds because Organic Chemistry in Class 11-12 is worth 25-30% of the JEE Chemistry paper — early familiarity gives enormous confidence later.',
      },
      {
        title: 'Mathematics — Competitive-Level Foundation',
        content: 'Class 10 Math is the gateway to JEE Mathematics: Quadratic Equations → JEE Algebra (every paper has 3-4 questions), Trigonometry → JEE Trigonometry + Physics applications, Coordinate Geometry → Straight Lines, Circles, Conics (JEE), Statistics & Probability → JEE compulsory topic, AP & GP → Sequences & Series (JEE). We solve RD Sharma, RS Aggarwal, and introductory competition-level problems to build fluency beyond textbook level.',
      },
      {
        title: 'The 10th-to-11th Transition Program',
        content: 'The jump from Class 10 to Class 11 is the biggest academic leap students face. In the last 2 months of our program (post-boards), we run a special "Transition Module": Basic calculus introduction (limits, derivatives — conceptual), Vectors and 3D basics in Physics, Mole concept deep-dive for Chemistry, and Study methodology training for the increased 11th workload. Students who complete this module report that their Class 11 first month is "comfortable instead of overwhelming." This single module is often cited as the most valuable part of our foundation program.',
      },
    ],
    weeklySchedule: [
      { day: 'Monday', activity: 'Mathematics — Quadratics, Trig & Coordinate Geometry (1 hr)' },
      { day: 'Tuesday', activity: 'Physics — Electricity, Light & Magnetism (1 hr)' },
      { day: 'Wednesday', activity: 'Mathematics — Statistics, Probability & AP/GP (1 hr)' },
      { day: 'Thursday', activity: 'Chemistry — Reactions, Carbon Compounds, Periodic Table (1 hr)' },
      { day: 'Friday', activity: 'Biology + Mixed Subject Revision (1 hr)' },
      { day: 'Saturday', activity: 'Board-Pattern Test + Error Analysis' },
      { day: 'Sunday', activity: 'Self-Study — Previous Year Board Papers' },
    ],
    faqs: [
      { q: 'Will this help with 10th board exams?', a: 'Board exam excellence is the primary goal. We cover the complete NCERT syllabus, solve 10 years of previous papers, and teach marking-scheme-aware answer writing. Our students average 95%+ in board exams.' },
      { q: 'When does the JEE/NEET-specific content start?', a: 'Throughout the year, board topics are taught with competitive depth. The intensive pre-11th transition module starts after board exams (March-April) and covers basic calculus, vectors, mole concept, and study methodology for the competitive preparation ahead.' },
      { q: 'Is this course also useful for NEET aspirants?', a: 'Yes. Class 10 Biology (Life Processes, Heredity, Our Environment) directly connects to NEET Biology. Physics and Chemistry are common to both JEE and NEET. The foundation built here serves both paths equally well.' },
      { q: 'My child is in a State Board — is this relevant?', a: 'Absolutely. Our curriculum covers concepts, not textbooks. Whether CBSE, ICSE, or State Board, the underlying science and math are the same. We adapt to your child\'s school syllabus while adding competitive-level depth.' },
    ],
    whyChoose: [
      'Board exam mastery with 95%+ target for every student',
      'Pre-JEE/NEET introduction makes Class 11 feel familiar, not foreign',
      'Post-board transition module — calculus, vectors, mole concept intro',
      'RD Sharma and competitive-level problems for deeper fluency',
      '50% less stress reported by students entering Class 11 with our foundation',
      'Equally valuable for JEE, NEET, and State Board students',
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
