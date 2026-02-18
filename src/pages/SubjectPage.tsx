import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import type { FAQItem } from '@/components/PageFAQ';
import { FeaturedSnippet } from '@/components/FeaturedSnippet';
import { FreshnessBadge } from '@/components/FreshnessBadge';
import { PeopleAlsoAsk, buildPAASchema } from '@/components/PeopleAlsoAsk';
import type { PAAQuestion } from '@/components/PeopleAlsoAsk';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  CheckCircle, ArrowRight, BookOpen, Phone, Star, Zap, Brain, Target,
  Atom, FlaskConical, Calculator, Microscope, Heart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

/* ═══════════════════════════════════════════════════════════
   Subject-cluster page data — one object per subject slug
   ═══════════════════════════════════════════════════════════ */

interface SubjectData {
  exam: 'JEE' | 'NEET';
  subject: string;
  slug: string;
  icon: LucideIcon;
  /** Meta */
  title: string;
  description: string;
  /** Hero */
  heroHeading: string;
  heroHighlight: string;
  heroParagraph: string;
  /** Featured snippet */
  snippetQ: string;
  snippetA: string;
  snippetBullets: string[];
  /** Syllabus chapters */
  chapters: { name: string; topics: string[] }[];
  /** Common mistakes */
  mistakes: { title: string; desc: string }[];
  /** Study tips */
  tips: string[];
  /** PAA */
  paa: PAAQuestion[];
  /** FAQ */
  faqs: FAQItem[];
  /** Internal links */
  links: { label: string; to: string }[];
}

const SUBJECTS: Record<string, SubjectData> = {
  'jee-physics-preparation': {
    exam: 'JEE',
    subject: 'Physics',
    slug: 'jee-physics-preparation',
    icon: Atom,
    title: 'JEE Physics Preparation — Chapter-Wise Strategy & 1-on-1 Coaching | MindPeak',
    description: 'Master JEE Physics with personalized 1-on-1 coaching. Chapter-wise strategy for Mechanics, Electrodynamics, Optics & Modern Physics. IIT alumni mentors. Start free trial!',
    heroHeading: 'JEE Physics Preparation —',
    heroHighlight: 'Chapter-Wise Mastery with 1-on-1 Coaching',
    heroParagraph: 'Physics is the most conceptually demanding subject in JEE and often the highest-scoring for students who master it. At MindPeak, your dedicated Physics mentor — an IIT alumnus — builds your understanding from first principles. Every concept is linked to problem-solving patterns, and your study plan adapts weekly based on diagnostic data. No generic lectures. No wasted time on chapters you already know.',
    snippetQ: 'How to prepare for JEE Physics effectively?',
    snippetA: 'Effective JEE Physics preparation requires mastering concepts from first principles, solving 200+ problems per chapter, and practicing multi-concept questions. Focus on Mechanics and Electrodynamics first (60% weightage), then Optics and Modern Physics. Personalized coaching with IIT alumni mentors accelerates progress by targeting individual weak areas.',
    snippetBullets: [
      'Start with Mechanics — it forms the foundation for all other topics',
      'Practice HC Verma + previous 20 years JEE papers',
      'Focus on Electrodynamics — consistent 25-30% weightage',
      'Master dimensional analysis for quick verification',
      'Solve multi-concept problems daily for JEE Advanced',
      'Weekly mock tests to identify weak chapters',
    ],
    chapters: [
      { name: 'Mechanics', topics: ['Kinematics (1D & 2D)', 'Newton\'s Laws & Friction', 'Work-Energy Theorem & Conservation', 'Rotational Dynamics & Moment of Inertia', 'Gravitation', 'Simple Harmonic Motion'] },
      { name: 'Electrodynamics', topics: ['Electrostatics (Gauss Law, Capacitors)', 'Current Electricity (Kirchhoff\'s Laws)', 'Magnetism & Moving Charges', 'Electromagnetic Induction (Faraday, Lenz)', 'Alternating Current'] },
      { name: 'Optics & Modern Physics', topics: ['Ray Optics (Mirrors, Lenses, Prisms)', 'Wave Optics (Interference, Diffraction)', 'Dual Nature of Matter', 'Atoms & Nuclei', 'Semiconductor Devices'] },
      { name: 'Thermodynamics & Waves', topics: ['Kinetic Theory of Gases', 'Laws of Thermodynamics', 'Heat Transfer (Conduction, Convection, Radiation)', 'Mechanical Waves & Sound', 'Standing Waves & Beats'] },
    ],
    mistakes: [
      { title: 'Memorizing formulae without concepts', desc: 'JEE Physics tests conceptual understanding, not formula recall. Rote memorization fails for multi-concept questions in JEE Advanced.' },
      { title: 'Skipping Rotational Dynamics', desc: 'Students find rotation difficult and skip it. But it carries 8-10% weightage and appears in both Main and Advanced every year.' },
      { title: 'Ignoring dimensional analysis', desc: 'Dimensional analysis can eliminate 2-3 wrong options instantly. Most batch coaching doesn\'t teach this powerful technique systematically.' },
      { title: 'Not practicing previous year papers', desc: 'JEE Physics repeats conceptual patterns. Solving 20 years of PYQs reveals the examiners\' favourite question types and difficulty patterns.' },
    ],
    tips: [
      'Solve HC Verma completely — it builds JEE-level intuition',
      'Make formula sheets organized by chapter for quick revision',
      'Practice 10-15 problems daily from different chapters',
      'Focus on understanding free body diagrams thoroughly',
      'Use energy methods as primary approach before using forces',
      'Attempt JEE Advanced PYQs after completing each chapter',
    ],
    paa: [
      { question: 'Which chapters are most important for JEE Physics?', answer: 'Mechanics (30% weightage) and Electrodynamics (25-30%) are the most important. Within Mechanics, focus on Rotational Dynamics, Energy Conservation, and SHM. In Electrodynamics, prioritize Electrostatics and Electromagnetic Induction. Optics and Modern Physics together carry about 20% and are relatively scoring.' },
      { question: 'How to score 60+ in JEE Physics?', answer: 'Scoring 60+ requires strong conceptual clarity in Mechanics + Electrodynamics, solving 200+ JEE-level problems per chapter, and practicing 20 years of PYQs. MindPeak\'s personalized approach identifies your exact weak areas and builds topic-wise mastery with daily problem-solving sessions.' },
      { question: 'Is HC Verma enough for JEE Physics?', answer: 'HC Verma is an excellent foundation but not sufficient alone for JEE Advanced. After HC Verma, solve Irodov for advanced problems, DC Pandey for practice volume, and 20 years of JEE PYQs. MindPeak mentors guide you through the right books at the right time.' },
      { question: 'How to improve Physics for JEE in 3 months?', answer: 'Focus intensively on high-weightage chapters (Mechanics + Electrodynamics). Solve 15+ problems daily. Take weekly topic-wise tests. Get personalized doubt resolution. MindPeak\'s crash course provides daily 1-on-1 sessions targeting your specific weak areas for rapid improvement.' },
    ],
    faqs: [
      { question: 'How does MindPeak teach JEE Physics differently?', answer: 'MindPeak pairs you with a dedicated IIT alumni Physics mentor who teaches from first principles. Your study plan adapts weekly based on diagnostic performance data. Concepts are taught through problem-solving, not lectures — every session involves solving JEE-level problems with real-time guidance.' },
      { question: 'Do you cover both JEE Main and Advanced Physics?', answer: 'Yes. Our Physics curriculum covers the complete JEE Main syllabus plus the additional topics required for JEE Advanced (e.g., advanced Rotational Dynamics, complex Electrostatics). Your mentor adjusts the depth and difficulty based on whether you\'re targeting Main, Advanced, or both.' },
      { question: 'How many months to prepare for JEE Physics?', answer: 'A complete JEE Physics preparation typically takes 8-12 months for a focused student. With MindPeak\'s personalized approach, students with some foundation can achieve significant improvement in 4-6 months. Our 1-year and 2-year programs ensure comprehensive coverage.' },
      { question: 'Can I take only Physics coaching at MindPeak?', answer: 'Yes! MindPeak offers subject-specific coaching. If you\'re strong in Chemistry and Math but need Physics help, we can provide a Physics-focused plan with a dedicated Physics mentor. Pricing is adjusted based on the number of subjects.' },
    ],
    links: [
      { label: 'JEE Chemistry Preparation', to: '/jee-chemistry-preparation' },
      { label: 'JEE Mathematics Preparation', to: '/jee-mathematics-preparation' },
      { label: 'Complete JEE Coaching', to: '/jee-coaching' },
      { label: 'JEE Mock Test Strategy', to: '/jee-mock-test-strategy' },
      { label: 'Free Trial Class', to: '/free-trial' },
      { label: 'MindPeak vs Allen', to: '/mindpeak-vs-allen' },
    ],
  },

  'jee-chemistry-preparation': {
    exam: 'JEE',
    subject: 'Chemistry',
    slug: 'jee-chemistry-preparation',
    icon: FlaskConical,
    title: 'JEE Chemistry Preparation — Organic, Inorganic & Physical | 1-on-1 Coaching | MindPeak',
    description: 'Ace JEE Chemistry with personalized 1-on-1 coaching. Master Organic reactions, Inorganic qualitative analysis, and Physical Chemistry numericals. Start free trial!',
    heroHeading: 'JEE Chemistry Preparation —',
    heroHighlight: 'Master Organic, Inorganic & Physical Chemistry',
    heroParagraph: 'Chemistry is the most scoring subject in JEE — students who master it gain a massive advantage. Yet most struggle because batch coaching teaches all three branches (Organic, Inorganic, Physical) at the same generic pace. At MindPeak, your dedicated Chemistry mentor identifies which branch needs the most attention and adapts your curriculum accordingly. Organic reaction mechanisms, Inorganic qualitative analysis, Physical Chemistry numericals — every weak area gets targeted practice.',
    snippetQ: 'How to prepare for JEE Chemistry effectively?',
    snippetA: 'JEE Chemistry preparation requires a balanced approach across Organic, Inorganic, and Physical Chemistry. Physical Chemistry (numerical-based) rewards practice, Organic Chemistry requires understanding reaction mechanisms, and Inorganic Chemistry needs structured memorization. Personalized coaching identifies which branch needs extra focus for your preparation.',
    snippetBullets: [
      'Physical Chemistry: Master equations and practice 30+ numericals per chapter',
      'Organic Chemistry: Focus on reaction mechanisms, not rote memorization',
      'Inorganic Chemistry: Use structured tables and mnemonics for remembering',
      'NCERT is essential — especially for Inorganic Chemistry in JEE Main',
      'Practice previous year questions to understand the exam pattern',
      'Solve problems from MS Chouhan (Organic) and N Avasthi (Physical)',
    ],
    chapters: [
      { name: 'Physical Chemistry', topics: ['Mole Concept & Stoichiometry', 'Thermodynamics & Thermochemistry', 'Chemical Equilibrium', 'Ionic Equilibrium (pH, Buffers)', 'Electrochemistry', 'Chemical Kinetics', 'Solutions & Colligative Properties'] },
      { name: 'Organic Chemistry', topics: ['General Organic Chemistry (GOC)', 'Hydrocarbons (Alkanes, Alkenes, Alkynes)', 'Alcohols, Ethers, Aldehydes & Ketones', 'Carboxylic Acids & Derivatives', 'Amines & Diazonium Salts', 'Named Reactions & Reaction Mechanisms', 'Biomolecules & Polymers'] },
      { name: 'Inorganic Chemistry', topics: ['Chemical Bonding (VSEPR, MOT)', 'Coordination Compounds', 'd-Block & f-Block Elements', 'p-Block Elements (Group 13-18)', 's-Block Elements', 'Qualitative Analysis (Salt Analysis)', 'Metallurgy & Environmental Chemistry'] },
    ],
    mistakes: [
      { title: 'Treating Organic Chemistry as memorization', desc: 'JEE Organic tests mechanism understanding. Memorizing reactions without understanding electron flow leads to failure in multi-step synthesis problems.' },
      { title: 'Neglecting Physical Chemistry numericals', desc: 'Physical Chemistry is the most scoring branch (purely numerical). Skipping practice problems means losing easy marks that require straightforward calculation.' },
      { title: 'Ignoring Inorganic until the last month', desc: 'Students delay Inorganic Chemistry revision. It requires consistent, spaced repetition — cramming at the end leads to mixing up properties and reactions.' },
      { title: 'Not linking NCERT with JEE questions', desc: 'JEE Main Chemistry increasingly draws from NCERT examples and in-text questions. Ignoring NCERT is a critical mistake for Chemistry preparation.' },
    ],
    tips: [
      'Start with Physical Chemistry — it\'s the most scoring per hour invested',
      'For Organic, draw mechanisms for every reaction you learn',
      'Create comparison tables for Inorganic (e.g., Group 15 vs Group 16 properties)',
      'Solve MS Chouhan for Organic and N Avasthi for Physical Chemistry',
      'Revise Inorganic Chemistry weekly using flashcards',
      'Practice JEE PYQs topic-wise after completing each chapter',
    ],
    paa: [
      { question: 'Which is the easiest subject in JEE — Chemistry?', answer: 'Chemistry is often considered the most scoring subject in JEE because it rewards good preparation with predictable question patterns. Physical Chemistry is calculation-based, Organic follows reaction mechanisms, and Inorganic is memory-based. Students who prepare systematically can score 50-60+ out of 100 in Chemistry.' },
      { question: 'How to master Organic Chemistry for JEE?', answer: 'Organic Chemistry mastery requires understanding reaction mechanisms (nucleophilic, electrophilic, radical) rather than memorizing reactions. Practice named reactions, understand electron flow in every step, and solve multi-step synthesis problems. MS Chouhan is the gold-standard book. MindPeak mentors teach mechanism-first approach.' },
      { question: 'Is NCERT enough for JEE Chemistry?', answer: 'NCERT is essential but not sufficient. For JEE Main, NCERT covers 60-70% of the Chemistry syllabus. For JEE Advanced, you need additional reference books (MS Chouhan for Organic, N Avasthi for Physical). MindPeak mentors guide you through the right resources at the right depth.' },
      { question: 'How to remember Inorganic Chemistry for JEE?', answer: 'Use structured comparison tables, mnemonics, and spaced repetition. Group elements by periodic trends, create reaction flowcharts, and revise weekly using flashcard methodology. MindPeak\'s adaptive system sends personalized revision reminders based on your forgetting curve.' },
    ],
    faqs: [
      { question: 'How does MindPeak teach JEE Chemistry?', answer: 'Your dedicated Chemistry mentor identifies which of the three branches (Organic, Inorganic, Physical) needs the most attention. Organic is taught mechanism-first, Physical through problem-solving, and Inorganic through structured memorization techniques. Every session adapts to your diagnostic performance.' },
      { question: 'Can I focus only on Organic Chemistry at MindPeak?', answer: 'Yes! If you\'re strong in Physical and Inorganic but struggle with Organic, we can create an Organic-focused plan. Your mentor will concentrate on mechanisms, named reactions, and synthesis problems while doing light maintenance on other branches.' },
      { question: 'Do you cover both JEE Main and Advanced Chemistry?', answer: 'Absolutely. Our Chemistry program covers the full JEE Main syllabus plus Advanced-level concepts like complex coordination chemistry, advanced thermodynamics, and difficult Organic synthesis. The depth adapts to your target exam.' },
      { question: 'How long does it take to complete JEE Chemistry?', answer: 'Complete Chemistry preparation takes 6-10 months. Physical Chemistry (4-5 months), Organic (4-5 months), and Inorganic (3-4 months) — with overlap. MindPeak\'s personalized plans optimize this timeline based on your current level.' },
    ],
    links: [
      { label: 'JEE Physics Preparation', to: '/jee-physics-preparation' },
      { label: 'JEE Mathematics Preparation', to: '/jee-mathematics-preparation' },
      { label: 'Complete JEE Coaching', to: '/jee-coaching' },
      { label: 'Free Trial Class', to: '/free-trial' },
      { label: 'MindPeak vs Resonance', to: '/mindpeak-vs-resonance' },
    ],
  },

  'jee-mathematics-preparation': {
    exam: 'JEE',
    subject: 'Mathematics',
    slug: 'jee-mathematics-preparation',
    icon: Calculator,
    title: 'JEE Mathematics Preparation — Calculus, Algebra & Coordinate Geometry | MindPeak',
    description: 'Conquer JEE Mathematics with personalized 1-on-1 coaching. Master Calculus, Algebra, Coordinate Geometry, and Trigonometry. IIT alumni mentors. Start free trial!',
    heroHeading: 'JEE Mathematics Preparation —',
    heroHighlight: 'Calculus, Algebra & Geometry Mastery',
    heroParagraph: 'Mathematics is what separates JEE toppers from the rest — it rewards deep problem-solving skills and creative thinking. At MindPeak, your dedicated Mathematics mentor builds your skills progressively from fundamentals to JEE Advanced-level problem solving. Calculus, Algebra, Coordinate Geometry, Trigonometry — every chapter gets the attention it deserves with a curriculum that adapts to your pace and strengths.',
    snippetQ: 'How to prepare for JEE Mathematics?',
    snippetA: 'JEE Mathematics preparation demands consistent daily practice of 15-20 problems, strong fundamentals in Calculus (35% weightage), and mastery of Algebra and Coordinate Geometry. Focus on problem-solving techniques rather than formula memorization. Personalized coaching helps identify weak chapters and build systematic problem-solving approaches.',
    snippetBullets: [
      'Calculus is the highest-weightage topic (35%) — prioritize it',
      'Practice 15-20 problems daily from different chapters',
      'Build strong algebra fundamentals — they support every other topic',
      'Master Coordinate Geometry with graphical intuition',
      'Solve Cengage/Arihant series for comprehensive practice',
      'Attempt JEE Advanced PYQs after completing each topic',
    ],
    chapters: [
      { name: 'Calculus', topics: ['Limits & Continuity', 'Differentiation (Chain Rule, Implicit, Parametric)', 'Application of Derivatives (Maxima/Minima, Tangents)', 'Indefinite Integration (Substitution, Partial Fractions)', 'Definite Integration (Properties, Area Under Curves)', 'Differential Equations (Variable Separable, Linear)'] },
      { name: 'Algebra', topics: ['Complex Numbers (De Moivre, Geometry of Complex Plane)', 'Quadratic Equations & Inequalities', 'Sequences & Series (AP, GP, Special Series)', 'Permutations & Combinations', 'Binomial Theorem', 'Matrices & Determinants', 'Probability (Conditional, Bayes)'] },
      { name: 'Coordinate Geometry', topics: ['Straight Lines (Various Forms, Pair of Lines)', 'Circles (Tangent, Normal, Radical Axis)', 'Parabola (Focus, Directrix, Tangent Properties)', 'Ellipse & Hyperbola', 'Vectors in 2D & 3D', '3D Geometry (Lines, Planes)'] },
      { name: 'Trigonometry', topics: ['Trigonometric Functions & Identities', 'Trigonometric Equations', 'Inverse Trigonometric Functions', 'Properties of Triangles (Sine/Cosine Rule)', 'Heights & Distances'] },
    ],
    mistakes: [
      { title: 'Weak algebra fundamentals', desc: 'Students rush to Calculus without solid algebra skills. Since Calculus uses algebraic manipulation extensively, weak fundamentals cause cascading errors in integration and differentiation.' },
      { title: 'Solving too few problems', desc: 'Mathematics requires volume. Students who solve only textbook examples and skip practice sets consistently underperform. You need 200+ problems per major chapter.' },
      { title: 'Ignoring Coordinate Geometry', desc: 'Coordinate Geometry (Conics) carries 15-20% weightage in JEE. Many students find it "boring" and skip practice. This is free marks left on the table.' },
      { title: 'Not developing multiple approaches', desc: 'JEE Advanced rewards students who can approach a problem from multiple angles — algebraic, graphical, and coordinate methods. Batch coaching typically teaches only one approach.' },
    ],
    tips: [
      'Start with Algebra and Trigonometry before diving into Calculus',
      'Practice integration daily — it\'s the most asked topic',
      'Learn graphical approaches alongside analytical methods',
      'Solve at least 20 years of JEE PYQs topic-wise',
      'For Coordinate Geometry, always visualize the graph before computing',
      'Time yourself during practice — Mathematics is the biggest time sink in JEE',
    ],
    paa: [
      { question: 'Which chapters are most important for JEE Mathematics?', answer: 'Calculus (Limits, Differentiation, Integration) carries ~35% weightage, making it the most important. Algebra (Complex Numbers, Probability, Matrices) carries ~30%, and Coordinate Geometry ~20%. Within Calculus, Definite Integration and Application of Derivatives are the highest-value topics.' },
      { question: 'How to improve JEE Mathematics score quickly?', answer: 'Focus on high-weightage, high-scoring chapters first — Definite Integration, Probability, Matrices, and Straight Lines. Solve 15-20 problems daily from PYQs. Get personalized doubt resolution. MindPeak\'s adaptive approach has helped students improve Mathematics scores by 30-40 marks in 3 months.' },
      { question: 'Is RD Sharma enough for JEE Mathematics?', answer: 'RD Sharma builds a foundation but is not sufficient for JEE Main or Advanced. After RD Sharma, progress to Cengage series or Arihant\'s Skills in Mathematics. For JEE Advanced, solve Vikas Gupta and PYQs. MindPeak mentors create a personalized book progression plan.' },
      { question: 'How many hours should I study Math for JEE?', answer: 'Dedicate 2-3 hours daily to Mathematics practice — this means solving problems, not just reading theory. JEE Mathematics rewards consistent daily practice over marathon study sessions. Quality practice with targeted problems is more effective than solving hundreds of easy questions.' },
    ],
    faqs: [
      { question: 'How does MindPeak teach JEE Mathematics?', answer: 'Your dedicated Math mentor teaches through problem-solving, not lectures. Every concept is introduced with examples, then you solve progressively harder problems with real-time guidance. The curriculum adapts weekly — spending more time on chapters where you struggle and accelerating through areas of strength.' },
      { question: 'Do you teach for both JEE Main and Advanced Math?', answer: 'Yes. The Mathematics program covers the complete JEE Main syllabus plus Advanced-level topics like complex Definite Integration, advanced Coordinate Geometry (Conics), and difficult Probability. Your mentor adjusts the difficulty based on your target.' },
      { question: 'Can MindPeak help if I\'m very weak in Mathematics?', answer: 'Absolutely. That\'s actually our strength. Many students join MindPeak after struggling with Mathematics in batch coaching. Your dedicated mentor starts from YOUR current level — building fundamentals systematically before progressing to JEE-level problem solving.' },
      { question: 'How quickly can I improve in JEE Mathematics?', answer: 'With daily 1-on-1 sessions and targeted practice, most students see significant improvement within 2-3 months. MindPeak students typically improve their Mathematics mock scores by 30-40 marks in the first quarter. The key is consistent, personalized daily practice.' },
    ],
    links: [
      { label: 'JEE Physics Preparation', to: '/jee-physics-preparation' },
      { label: 'JEE Chemistry Preparation', to: '/jee-chemistry-preparation' },
      { label: 'Complete JEE Coaching', to: '/jee-coaching' },
      { label: 'Free Trial Class', to: '/free-trial' },
      { label: 'Online vs Offline JEE', to: '/online-vs-offline-jee-coaching' },
    ],
  },

  'jee-mock-test-strategy': {
    exam: 'JEE',
    subject: 'Mock Tests',
    slug: 'jee-mock-test-strategy',
    icon: Target,
    title: 'JEE Mock Test Strategy — How to Analyze & Improve Scores | MindPeak',
    description: 'Master JEE mock test strategy. Learn how to analyze mistakes, manage time, and improve scores by 50-80 marks. Expert tips from IIT alumni mentors at MindPeak.',
    heroHeading: 'JEE Mock Test Strategy —',
    heroHighlight: 'How Toppers Use Mocks to Score 250+',
    heroParagraph: 'Mock tests are the single most important tool in your JEE preparation — but only if you use them correctly. Most students take mock after mock without proper analysis, making the same mistakes repeatedly. At MindPeak, your mentor personally reviews every mock test with you, identifying not just what went wrong but WHY. This analysis-driven approach typically improves scores by 50-80 marks within 2-3 months.',
    snippetQ: 'How to improve JEE mock test scores?',
    snippetA: 'Improving JEE mock test scores requires systematic analysis after every test: categorize mistakes into conceptual errors, silly mistakes, and time management issues. Spend 2-3 hours analyzing each mock. Focus on converting "almost right" questions and eliminating negative marking patterns. Personalized mentor analysis accelerates improvement significantly.',
    snippetBullets: [
      'Take full-length mocks in exam conditions (3 hours, no breaks)',
      'Analyze every mock for 2-3 hours — categorize each mistake',
      'Track your accuracy per chapter to identify weak areas',
      'Reduce negative marking by developing a skip strategy',
      'Focus on time management — practice attempting easy questions first',
      'Take at least 30 full-length mocks before the actual exam',
    ],
    chapters: [
      { name: 'Before the Mock', topics: ['Set exam-like conditions (3 hours, no distractions)', 'Take at the same time as the actual exam', 'Complete the full paper — no early submission', 'Simulate CBT interface if possible'] },
      { name: 'During the Mock', topics: ['First pass: attempt all easy questions across subjects', 'Second pass: medium-difficulty questions', 'Third pass: difficult questions (only if confident)', 'Last 15 minutes: review flagged questions', 'Never spend more than 3 minutes on a single question'] },
      { name: 'After the Mock (Analysis)', topics: ['Categorize mistakes: conceptual / silly / time-management', 'Calculate accuracy rate per subject and chapter', 'Identify questions you "knew but got wrong" (silly mistakes)', 'Track negative marking pattern', 'Create a "mistake journal" with common error patterns'] },
      { name: 'Improvement Loop', topics: ['Focus next week\'s study on weakest chapters from mock', 'Re-attempt difficult questions after 3 days', 'Set one specific goal per mock (e.g., reduce silly mistakes by 50%)', 'Track score trend across 10+ mocks for improvement trajectory'] },
    ],
    mistakes: [
      { title: 'Taking mocks without analyzing', desc: 'The most common mistake. Students take 50 mocks but spend zero time analyzing. Without analysis, mocks are just tests — not learning tools. Analysis is where improvement happens.' },
      { title: 'Starting mocks too early', desc: 'Taking full mocks before completing 70% of the syllabus leads to discouraging scores and incorrect self-assessment. Start with topic-wise tests, then part-tests, then full mocks.' },
      { title: 'Ignoring negative marking patterns', desc: 'Many students lose 20-30 marks to negative marking. If your negative marking exceeds 15% of attempted marks, you need a "skip strategy" — identifying question types to skip.' },
      { title: 'Changing strategy every mock', desc: 'Consistency is key. Use the same time-management strategy for 5+ mocks before evaluating if it works. Changing approach every test prevents any strategy from showing results.' },
    ],
    tips: [
      'Maintain a "Mock Test Journal" — log score, time, and key learnings after every mock',
      'Your target should be 30+ mocks before the actual JEE exam',
      'Analyze your subject-wise completion — finish your strongest subject first',
      'Practice CBT (Computer Based Test) interface to build familiarity',
      'After analysis, create a "must-revise" list of concepts for the next mock',
      'Track your percentile trend, not just absolute score',
    ],
    paa: [
      { question: 'How many mock tests should I take for JEE?', answer: 'Aim for 25-30 full-length mock tests before JEE Main and 15-20 before JEE Advanced. Quality > quantity — each mock should be followed by 2-3 hours of detailed analysis. MindPeak students take weekly mocks with personalized analysis sessions with their mentor.' },
      { question: 'When should I start taking JEE mock tests?', answer: 'Start taking full-length mocks when you\'ve completed at least 70-75% of the syllabus (typically 3-4 months before the exam). Before that, take topic-wise tests and part-tests. MindPeak provides a structured mock test calendar aligned with your preparation timeline.' },
      { question: 'How to analyze JEE mock test results?', answer: 'Categorize every wrong answer into: conceptual error (didn\'t know), silly mistake (knew but careless), time crunch (didn\'t attempt). Calculate chapter-wise accuracy. Create a "mistake journal." Focus next week\'s study on your weakest 3 chapters. MindPeak mentors do this analysis with you 1-on-1.' },
      { question: 'What is a good mock test score for JEE Main?', answer: 'For 250+ in JEE Main, target 200+ consistently in mocks (mocks are typically harder). For 99+ percentile, target 240+ in mocks. Track your 10-mock moving average for a realistic projection. MindPeak provides calibrated mock tests that closely match actual JEE difficulty.' },
    ],
    faqs: [
      { question: 'Does MindPeak provide mock tests?', answer: 'Yes! MindPeak provides weekly full-length mock tests in CBT format for both JEE Main and Advanced. Every mock is followed by a 1-on-1 analysis session with your mentor who reviews your performance, identifies patterns, and adjusts your study plan accordingly.' },
      { question: 'How is MindPeak\'s mock analysis different from self-study?', answer: 'Your mentor identifies patterns you can\'t see yourself — like consistently losing marks in the last 30 minutes (time management) or making sign errors in Calculus (conceptual gap). This personalized analysis is what accelerates improvement from 5-10 marks/month to 20-30 marks/month.' },
      { question: 'Can mock test analysis really improve my JEE score?', answer: 'Absolutely. Systematic mock analysis is the #1 factor that differentiates JEE toppers from average scorers. MindPeak students who follow our analysis protocol typically improve by 50-80 marks over 2-3 months — that\'s the difference between 10K rank and sub-5K rank.' },
    ],
    links: [
      { label: 'JEE Physics Preparation', to: '/jee-physics-preparation' },
      { label: 'JEE Chemistry Preparation', to: '/jee-chemistry-preparation' },
      { label: 'JEE Mathematics Preparation', to: '/jee-mathematics-preparation' },
      { label: 'Complete JEE Coaching', to: '/jee-coaching' },
      { label: 'Free Trial Class', to: '/free-trial' },
    ],
  },

  'neet-biology-preparation': {
    exam: 'NEET',
    subject: 'Biology',
    slug: 'neet-biology-preparation',
    icon: Microscope,
    title: 'NEET Biology Preparation — Botany & Zoology Strategy | NCERT Mastery | MindPeak',
    description: 'Dominate NEET Biology with personalized coaching. NCERT line-by-line coverage, Botany & Zoology mastery, assertion-reason practice. 50% of NEET marks. Start free!',
    heroHeading: 'NEET Biology Preparation —',
    heroHighlight: 'NCERT Mastery for 320+ in Biology',
    heroParagraph: 'Biology accounts for 360 out of 720 marks in NEET — it is literally half the exam. Yet most batch coaching gives Biology the same time as Physics and Chemistry. At MindPeak, Biology gets 50% of the curriculum focus, matching its weightage. Your dedicated Biology mentor ensures line-by-line NCERT coverage, diagram-based learning, assertion-reason practice, and comprehensive revision of every chapter from Diversity in Living World to Ecology.',
    snippetQ: 'How to score 320+ in NEET Biology?',
    snippetA: 'Scoring 320+ in NEET Biology requires line-by-line NCERT mastery (90% questions from NCERT), regular assertion-reason practice, and comprehensive diagram memorization. Focus on high-weightage chapters like Genetics, Human Physiology, and Plant Physiology. Dedicate 50% of study time to Biology matching its 360/720 marks.',
    snippetBullets: [
      'Read NCERT Biology line-by-line — including diagrams, tables, and footnotes',
      'Genetics (Mendelian + Molecular) is the highest-value chapter — master it thoroughly',
      'Practice assertion-reason and match-the-following questions daily',
      'Create diagram flashcards for all labeled diagrams in NCERT',
      'Revise using the Human Physiology + Plant Physiology chapter pair approach',
      'Solve 20 years of NEET PYQs — many questions repeat conceptually',
    ],
    chapters: [
      { name: 'Botany', topics: ['Plant Morphology & Anatomy', 'Plant Physiology (Photosynthesis, Respiration, Growth)', 'Cell Biology (Cell Structure, Division)', 'Genetics & Molecular Biology', 'Biotechnology & Its Applications', 'Plant Kingdom (Classification)', 'Ecology & Environmental Biology'] },
      { name: 'Zoology', topics: ['Animal Morphology & Anatomy', 'Human Physiology (All Systems)', 'Genetics & Evolution', 'Animal Kingdom (Classification, Phyla)', 'Reproduction (Human + General)', 'Developmental Biology', 'Human Health & Disease'] },
      { name: 'NCERT Deep Dive', topics: ['Line-by-line reading with mentor', 'Diagram-based learning (all labeled diagrams)', 'Table memorization (comparison tables)', 'Footnote & in-text question coverage', 'NCERT Exemplar problem practice', 'Previous year NCERT-based questions'] },
    ],
    mistakes: [
      { title: 'Superficial NCERT reading', desc: 'Students "read" NCERT without truly absorbing every detail. NEET tests footnotes, diagram labels, and table entries. MindPeak mentors quiz you on every minute detail to ensure deep retention.' },
      { title: 'Neglecting Botany for Zoology', desc: 'Botany carries equal marks to Zoology but students often find it less interesting. Chapters like Plant Physiology and Plant Kingdom are high-value and frequently tested.' },
      { title: 'Not practicing assertion-reason', desc: 'NEET includes assertion-reason questions that test deeper understanding. Students who practice only MCQs miss out on this question pattern.' },
      { title: 'Ignoring diagrams', desc: 'NEET frequently tests diagram-based questions — heart diagram, nephron, flower parts. Students who skip diagram practice lose 15-20 easy marks.' },
    ],
    tips: [
      'Read NCERT Biology as your primary textbook — nothing else needed initially',
      'Create a "diagram bank" — draw every NCERT diagram from memory weekly',
      'Focus on Genetics (both Mendelian and Molecular) — highest weightage chapter',
      'Use comparison tables for similar concepts (arteries vs veins, mitosis vs meiosis)',
      'Practice 50+ MCQs daily from previous year NEET papers',
      'Revise each chapter at least 5 times before the exam',
    ],
    paa: [
      { question: 'Is NCERT enough for NEET Biology?', answer: 'Yes — NCERT is the primary source for NEET Biology. Approximately 90% of Biology questions come from NCERT or are based on NCERT concepts. However, you need to read NCERT at an extremely detailed level — every line, diagram, table, footnote, and in-text question. NCERT Exemplar is recommended for practice.' },
      { question: 'Which chapters are most important for NEET Biology?', answer: 'Genetics (Mendelian + Molecular Biology) is the single most important topic, carrying 15-20% of Biology marks. Human Physiology, Plant Physiology, and Ecology are next. Focus on these 4 areas for maximum ROI. MindPeak\'s Biology curriculum allocates time based on chapter-wise weightage analysis.' },
      { question: 'How to memorize Biology for NEET?', answer: 'Use active recall and spaced repetition over passive reading. Create flashcards for diagrams, use mnemonics for classifications, and build comparison tables for similar concepts. MindPeak mentors quiz you regularly and use adaptive revision scheduling based on your forgetting curve.' },
      { question: 'How to score 340+ in NEET Biology?', answer: 'Scoring 340+ (95%) requires: (1) 5+ complete NCERT reads with increasing depth, (2) mastery of all diagrams, (3) 3000+ MCQs from PYQs, (4) regular assertion-reason practice, (5) comprehensive revision. MindPeak\'s 1-on-1 Biology sessions systematically achieve this through daily focused practice.' },
    ],
    faqs: [
      { question: 'How does MindPeak teach NEET Biology?', answer: 'MindPeak provides a Biology-first approach with 50% curriculum focus. Your mentor — typically from AIIMS or a top medical college — conducts NCERT line-by-line reads, diagram practice, assertion-reason drills, and comprehensive revision sessions. Every session adapts to your diagnostic performance data.' },
      { question: 'Do you separate Botany and Zoology preparation?', answer: 'Yes! Our NEET Biology curriculum gives dedicated time to both Botany and Zoology. Many students are weaker in Botany, so we ensure balanced preparation. Your mentor tracks chapter-wise accuracy separately for Botany and Zoology to prevent imbalances.' },
      { question: 'Can I take only Biology coaching?', answer: 'Absolutely. If you\'re strong in Physics and Chemistry but need Biology help, we offer Biology-focused plans with dedicated Biology mentors at adjusted pricing. Book a free trial to discuss your specific needs.' },
      { question: 'How long to complete NEET Biology preparation?', answer: 'Complete NEET Biology coverage takes 6-8 months for a thorough first pass, including NCERT mastery, diagram practice, and revision. With MindPeak\'s focused approach, students achieve comprehensive Biology preparation including multiple revision cycles within our 1-year program.' },
    ],
    links: [
      { label: 'Complete NEET Coaching', to: '/neet-coaching' },
      { label: 'JEE vs NEET — Which Exam?', to: '/blog' },
      { label: 'Free Trial Class', to: '/free-trial' },
      { label: 'All Courses & Pricing', to: '/pricing' },
      { label: 'NEET Coaching in Delhi', to: '/neet-coaching-in-delhi' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════
   Reusable subject-cluster page component
   ═══════════════════════════════════════════════════════════ */

const SubjectPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const data = SUBJECTS[slug];
  const { openDemoModal } = useDemoModal();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data) return null; // fallback handled by router

  const Icon = data.icon;

  /* schemas */
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: data.title,
    description: data.description,
    provider: { '@type': 'EducationalOrganization', name: 'MindPeak Institute', url: 'https://mindpeakinstitute.com' },
    offers: { '@type': 'Offer', price: '60000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: `${data.exam} Coaching`, item: `https://mindpeakinstitute.com/${data.exam.toLowerCase()}-coaching` },
      { '@type': 'ListItem', position: 3, name: `${data.subject} Preparation`, item: `https://mindpeakinstitute.com/${data.slug}` },
    ],
  };

  return (
    <>
      <SEOHead
        title={data.title}
        description={data.description}
        jsonLd={[courseSchema, breadcrumbSchema, buildFAQSchema(data.faqs), buildPAASchema(data.paa)]}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li><Link to={`/${data.exam.toLowerCase()}-coaching`} className="hover:text-primary transition-colors">{data.exam} Coaching</Link></li>
            <span>/</span>
            <li className="text-foreground">{data.subject}</li>
          </ol>
        </nav>

        {/* ───── HERO ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <FreshnessBadge lastUpdated="2026-02-18" verifiedFor={`${data.exam} 2026`} />

            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex-shrink-0" width={56} height={56} />
              <div className="min-w-0">
                <p className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-xs sm:text-sm truncate">{data.exam} {data.subject} — 1-on-1 Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-4 sm:mb-6 text-[1.5rem] leading-tight sm:text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-[1.1]">
              {data.heroHeading}{' '}
              <span className="text-gradient-gold">{data.heroHighlight}</span>
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 sm:mb-8">{data.heroParagraph}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={openDemoModal} className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform text-center">
                Start Free Trial →
              </button>
              <a href="tel:+918219457704" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-foreground font-display text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>
          </motion.div>
        </section>

        {/* ───── FEATURED SNIPPET ───── */}
        <div className="px-4 sm:px-6">
          <FeaturedSnippet question={data.snippetQ} answer={data.snippetA} bullets={data.snippetBullets} />
        </div>

        {/* ───── SYLLABUS / CHAPTERS ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-7 h-7 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                {data.exam} {data.subject}{' '}
                <span className="text-gradient-gold">Chapter-Wise Syllabus</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-3xl mb-10">
              Complete {data.subject} syllabus covered in our personalized {data.exam} coaching program. Each topic is taught with conceptual depth and exam-pattern practice.
            </p>

            <div className={`grid gap-6 ${data.chapters.length >= 4 ? 'md:grid-cols-2' : 'md:grid-cols-' + data.chapters.length}`}>
              {data.chapters.map((ch, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" /> {ch.name}
                  </h3>
                  <ul className="space-y-2">
                    {ch.topics.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {t}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ───── COMMON MISTAKES ───── */}
        <section className="bg-secondary/30 border-y border-border py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
                Common {data.subject} <span className="text-gradient-gold">Mistakes to Avoid</span>
              </h2>
              <p className="text-muted-foreground text-base max-w-3xl mb-10">
                These are the mistakes MindPeak mentors see most frequently among {data.exam} aspirants preparing {data.subject}.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {data.mistakes.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-destructive/30 bg-destructive/5 p-6"
                  >
                    <h3 className="font-display font-bold text-foreground text-base mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ───── STUDY TIPS ───── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-7 h-7 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Expert <span className="text-gradient-gold">{data.subject} Study Tips</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-3xl mb-8">
              Proven tips from our IIT/AIIMS alumni mentors who have guided 500+ students.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.tips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{tip}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ───── PAA ───── */}
        <PeopleAlsoAsk questions={data.paa} heading={`People Also Ask About ${data.exam} ${data.subject}`} />

        {/* ───── INTERNAL LINKS ───── */}
        <section className="bg-card/30 border-y border-border py-8 sm:py-12 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-display font-bold text-foreground text-lg mb-6">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              {data.links.map((l) => (
                <Link key={l.to} to={l.to} className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-primary" /> {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <PageFAQ items={data.faqs} heading={`${data.exam} ${data.subject}`} highlight="FAQs" />

        {/* ───── FINAL CTA ───── */}
        <section className="bg-primary/10 border-y border-primary/20 py-10 sm:py-16 px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4">
              Master {data.exam} {data.subject} with <span className="text-gradient-gold">1-on-1 Coaching</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get a dedicated {data.subject} mentor, adaptive curriculum, and daily live sessions. Start your free trial today — zero commitment.
            </p>
            <button onClick={openDemoModal} className="w-full sm:w-auto px-8 sm:px-14 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
              Book Free {data.subject} Trial →
            </button>
          </motion.div>
        </section>

        <PageFooter extra={`${data.exam} ${data.subject} Preparation.`} />
      </main>
    </>
  );
};

export default SubjectPage;

/** Export slug list for routing & sitemap */
export const SUBJECT_SLUGS = Object.keys(SUBJECTS);
