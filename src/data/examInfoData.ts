/**
 * Exam Info Hub Data — ~30 high-volume pages
 * Covers: syllabus, exam pattern, cutoff, eligibility, dates, admit card, answer key, result, registration, counselling
 * Year auto-updates via CURRENT_EXAM_YEAR
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

const Y = CURRENT_EXAM_YEAR;

export interface ExamInfoFAQ { q: string; a: string }

export interface ExamInfoTableRow { label: string; value: string }

export interface ExamInfoStep { title: string; description: string }

export interface ExamInfoSection {
  heading: string;
  content?: string;
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  steps?: ExamInfoStep[];
}

export interface ExamInfoPage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  highlight: string;
  heroSubtitle: string;
  exam: 'JEE' | 'NEET';
  category: string;
  sections: ExamInfoSection[];
  faqs: ExamInfoFAQ[];
  relatedSlugs: string[];
}

function jeeMainSyllabus(): ExamInfoPage {
  return {
    slug: `jee-main-syllabus-${Y}`,
    title: `JEE Main Syllabus ${Y} — Complete Subject-wise Syllabus PDF [Latest NTA]`,
    description: `Download JEE Main ${Y} syllabus. Complete Physics, Chemistry & Maths chapter list with weightage, deleted topics & preparation tips. Updated per NTA notification.`,
    h1: `JEE Main Syllabus`,
    highlight: `${Y}`,
    heroSubtitle: `Complete NTA-approved JEE Main ${Y} syllabus with subject-wise chapter list, weightage analysis & deleted topics. Use this as your preparation blueprint.`,
    exam: 'JEE',
    category: 'syllabus',
    sections: [
      {
        heading: `JEE Main ${Y} Physics Syllabus`,
        content: `The Physics syllabus for JEE Main ${Y} covers 20 chapters from Class 11 and Class 12 NCERT. Mechanics and Electrodynamics carry the highest weightage (~35-40% combined).`,
        table: {
          headers: ['Unit', 'Chapters', 'Weightage', 'Difficulty'],
          rows: [
            ['Mechanics', 'Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion, Gravitation', '~18%', 'Moderate-Hard'],
            ['Electrodynamics', 'Electrostatics, Current Electricity, EMI, AC', '~16%', 'Moderate'],
            ['Optics & Modern Physics', 'Ray Optics, Wave Optics, Dual Nature, Atoms, Nuclei, Semiconductors', '~15%', 'Moderate'],
            ['Thermodynamics & Waves', 'KTG, Thermodynamics, Oscillations, Waves', '~12%', 'Easy-Moderate'],
            ['Properties of Matter', 'Elasticity, Fluids, Surface Tension, Viscosity', '~6%', 'Easy'],
            ['Magnetism', 'Moving Charges, Magnetism, EMI', '~8%', 'Moderate'],
          ],
        },
      },
      {
        heading: `JEE Main ${Y} Chemistry Syllabus`,
        content: `Chemistry is divided into Physical, Organic, and Inorganic Chemistry with roughly equal weightage (~33% each). Inorganic Chemistry is the most scoring section.`,
        table: {
          headers: ['Branch', 'Key Chapters', 'Weightage', 'Scoring Potential'],
          rows: [
            ['Physical Chemistry', 'Mole Concept, Thermodynamics, Equilibrium, Electrochemistry, Chemical Kinetics', '~33%', 'High (formula-based)'],
            ['Organic Chemistry', 'GOC, Hydrocarbons, Alcohols, Aldehydes, Amines, Biomolecules', '~33%', 'Moderate (concept + practice)'],
            ['Inorganic Chemistry', 'Periodic Table, Chemical Bonding, Coordination Compounds, p-Block, d-Block', '~33%', 'Very High (memory-based)'],
          ],
        },
      },
      {
        heading: `JEE Main ${Y} Mathematics Syllabus`,
        content: `Mathematics carries the highest difficulty level. Algebra and Calculus dominate with ~60% combined weightage.`,
        table: {
          headers: ['Unit', 'Chapters', 'Weightage', 'Difficulty'],
          rows: [
            ['Algebra', 'Quadratic Equations, Complex Numbers, Sequences & Series, Matrices, Permutations', '~30%', 'Moderate-Hard'],
            ['Calculus', 'Limits, Continuity, Differentiability, Application of Derivatives, Integrals, Differential Equations', '~30%', 'Hard'],
            ['Coordinate Geometry', 'Straight Lines, Circles, Conics (Parabola, Ellipse, Hyperbola)', '~20%', 'Moderate'],
            ['Trigonometry & Vectors', 'Trigonometric Equations, Inverse Trig, Vector Algebra, 3D Geometry', '~15%', 'Moderate'],
            ['Statistics & Probability', 'Mean, Median, Mode, Probability, Distributions', '~5%', 'Easy'],
          ],
        },
      },
      {
        heading: `Deleted Topics in JEE Main ${Y}`,
        content: `NTA periodically removes topics from the syllabus. Ensure you study the latest notification to avoid wasting time on deleted chapters. Focus your energy on high-weightage chapters that appear every year.`,
        bullets: [
          'Check the official NTA website for the latest syllabus notification',
          'Compare with previous year syllabus to identify changes',
          'Focus on NCERT + standard reference books for core chapters',
          'Use MindPeak\'s chapter-wise practice to target high-weightage topics',
        ],
      },
      {
        heading: 'How to Use This Syllabus for Preparation',
        steps: [
          { title: 'Map the Syllabus', description: 'List all chapters and mark their weightage. Prioritize chapters with >5% weightage.' },
          { title: 'Create a Study Plan', description: 'Allocate 40% time to high-weightage, 35% to moderate, 25% to low-weightage chapters.' },
          { title: 'Practice Chapter-wise', description: 'Use MindPeak\'s 2500+ JEE practice questions organized by chapter and difficulty.' },
          { title: 'Solve PYQs', description: 'After completing each chapter, solve 10 years of PYQs to understand exam patterns.' },
          { title: 'Revise with Formula Sheets', description: 'Download subject-wise formula sheets for quick revision before mocks.' },
        ],
      },
    ],
    faqs: [
      { q: `What is the JEE Main ${Y} syllabus?`, a: `JEE Main ${Y} syllabus covers Physics (20 chapters), Chemistry (30 chapters), and Mathematics (23 chapters) from Class 11 and 12 NCERT. NTA releases the official syllabus with the notification.` },
      { q: `Are there any changes in JEE Main ${Y} syllabus?`, a: `NTA may add or remove topics each year. Always check the official notification for the latest ${Y} syllabus.` },
      { q: 'Which subject has the highest weightage in JEE Main?', a: 'All three subjects carry equal marks (100 each, total 300). However, Chemistry is considered the most scoring due to direct NCERT questions.' },
      { q: 'Is NCERT enough for JEE Main?', a: 'NCERT is the foundation, especially for Chemistry. For Physics and Maths, you need additional practice from reference books and PYQs.' },
      { q: `How to cover the entire JEE Main ${Y} syllabus in 6 months?`, a: 'Focus on high-weightage chapters first, study 8-10 hours daily, solve 50+ MCQs per day, and take weekly mock tests. A 1-on-1 mentor can optimize your study plan.' },
    ],
    relatedSlugs: [`jee-main-exam-pattern-${Y}`, `jee-main-cutoff-${Y}`, 'jee-coaching', 'jee-practice', 'jee-pyq'],
  };
}

function jeeAdvSyllabus(): ExamInfoPage {
  return {
    slug: `jee-advanced-syllabus-${Y}`,
    title: `JEE Advanced Syllabus ${Y} — Complete Topic List with Weightage [IIT]`,
    description: `JEE Advanced ${Y} syllabus: Physics, Chemistry & Maths topics with IIT-level weightage. Includes new pattern analysis & preparation roadmap.`,
    h1: `JEE Advanced Syllabus`,
    highlight: `${Y}`,
    heroSubtitle: `Complete IIT JEE Advanced ${Y} syllabus with topic-level analysis. JEE Advanced tests deeper conceptual understanding — master these topics to crack the top 10,000 ranks.`,
    exam: 'JEE',
    category: 'syllabus',
    sections: [
      { heading: 'JEE Advanced vs JEE Main Syllabus', content: `JEE Advanced ${Y} syllabus is a superset of JEE Main with additional topics like Thermal Physics (detailed), Electrochemistry (advanced), and additional Calculus concepts. The difficulty level is significantly higher with multi-concept, multi-step problems.`, table: { headers: ['Aspect', 'JEE Main', 'JEE Advanced'], rows: [['Total Questions', '90 (75 to attempt)', '54-57'], ['Negative Marking', 'Yes (-1)', 'Yes (varies by section)'], ['Difficulty', 'Moderate', 'High-Very High'], ['Conceptual Depth', 'NCERT-based', 'Beyond NCERT'], ['Question Types', 'MCQ only', 'MCQ + Integer + Matrix Match']] } },
      { heading: 'Physics Syllabus — Advanced Level', content: 'JEE Advanced Physics emphasizes problem-solving with multi-concept questions. Mechanics, Electromagnetism, and Modern Physics carry the highest weightage.', bullets: ['Mechanics: Rigid body dynamics, SHM, fluid mechanics (~30%)', 'Electromagnetism: Gauss law applications, AC circuits, EM waves (~25%)', 'Optics: Wave optics, interference, diffraction (~15%)', 'Modern Physics: Photoelectric effect, nuclear physics, X-rays (~15%)', 'Thermodynamics: KTG, heat engines, entropy (~15%)'] },
      { heading: 'Chemistry Syllabus — Advanced Level', content: 'JEE Advanced Chemistry requires deeper understanding of reaction mechanisms and bonding theories.', bullets: ['Physical: Thermodynamics, Electrochemistry, Chemical Kinetics (~35%)', 'Organic: Named reactions, stereochemistry, spectroscopy (~35%)', 'Inorganic: Coordination chemistry, metallurgy, qualitative analysis (~30%)'] },
      { heading: 'Mathematics Syllabus — Advanced Level', content: 'Mathematics in JEE Advanced tests creative problem-solving and unconventional approaches.', bullets: ['Calculus: Definite integrals, differential equations, area under curves (~35%)', 'Algebra: Matrices, complex numbers, number theory (~30%)', 'Coordinate Geometry: Conics, locus problems (~20%)', 'Vectors & 3D: Vector algebra, planes, lines in 3D (~15%)'] },
    ],
    faqs: [
      { q: `What is the JEE Advanced ${Y} syllabus?`, a: `JEE Advanced ${Y} syllabus covers advanced-level Physics, Chemistry, and Mathematics. It includes all JEE Main topics plus additional topics like fluid dynamics details, electrochemistry (advanced), and complex calculus.` },
      { q: 'Is JEE Advanced syllabus different from JEE Main?', a: 'Yes, JEE Advanced has additional topics and tests deeper conceptual understanding. The question pattern and difficulty are also significantly different.' },
      { q: 'How many months are needed to prepare for JEE Advanced?', a: 'Ideally 12-18 months of dedicated preparation after building a strong JEE Main foundation. With a personal mentor, you can optimize this to 8-10 months.' },
    ],
    relatedSlugs: [`jee-main-syllabus-${Y}`, `jee-advanced-exam-pattern-${Y}`, 'jee-advanced-coaching', 'jee-pyq'],
  };
}

function neetSyllabus(): ExamInfoPage {
  return {
    slug: `neet-syllabus-${Y}`,
    title: `NEET ${Y} Syllabus — Complete Biology, Physics, Chemistry Topics [NTA Updated]`,
    description: `Download NEET ${Y} syllabus. Chapter-wise Biology, Physics & Chemistry topics with weightage, deleted topics & NCERT mapping. NTA-approved syllabus.`,
    h1: `NEET Syllabus`,
    highlight: `${Y}`,
    heroSubtitle: `Complete NTA-approved NEET ${Y} syllabus with chapter-wise analysis. Biology carries 50% weightage — use this guide to prioritize your preparation.`,
    exam: 'NEET',
    category: 'syllabus',
    sections: [
      { heading: `NEET ${Y} Biology Syllabus (Botany + Zoology)`, content: `Biology is the most important subject in NEET with 90 questions (360 marks out of 720). Class 12 chapters carry higher weightage than Class 11.`, table: { headers: ['Unit', 'Key Chapters', 'Questions/Year', 'Weightage'], rows: [['Human Physiology', 'Digestion, Breathing, Body Fluids, Excretion, Locomotion, Neural Control', '12-15', '~16%'], ['Genetics & Evolution', 'Molecular Basis of Inheritance, Principles of Inheritance, Evolution', '10-12', '~14%'], ['Plant Physiology', 'Photosynthesis, Respiration, Plant Growth, Mineral Nutrition', '8-10', '~11%'], ['Cell Biology', 'Cell Structure, Cell Division, Biomolecules', '6-8', '~9%'], ['Ecology', 'Organisms & Environment, Ecosystem, Biodiversity', '6-8', '~9%'], ['Diversity in Living World', 'Classification, Plant Kingdom, Animal Kingdom', '5-7', '~8%'], ['Reproduction', 'Human Reproduction, Reproductive Health, Sexual Reproduction in Plants', '5-7', '~8%']] } },
      { heading: `NEET ${Y} Physics Syllabus`, content: 'NEET Physics has 45 questions (180 marks). Mechanics and Electrodynamics together contribute ~50% of Physics questions.', table: { headers: ['Unit', 'Chapters', 'Weightage'], rows: [['Mechanics', 'Laws of Motion, Work-Energy, Rotational Motion, Gravitation', '~25%'], ['Electrodynamics', 'Electrostatics, Current Electricity, EMI', '~22%'], ['Optics & Modern Physics', 'Ray Optics, Wave Optics, Atoms, Nuclei, Semiconductors', '~20%'], ['Heat & Thermodynamics', 'KTG, Thermodynamics, Heat Transfer', '~15%'], ['Waves & Oscillations', 'SHM, Mechanical Waves, Sound', '~10%'], ['Properties of Matter', 'Elasticity, Fluids, Surface Tension', '~8%']] } },
      { heading: `NEET ${Y} Chemistry Syllabus`, content: 'NEET Chemistry has 45 questions (180 marks). It is the bridge subject — easier than Physics but requires more memorization than Biology.', table: { headers: ['Branch', 'Key Chapters', 'Weightage'], rows: [['Physical Chemistry', 'Chemical Equilibrium, Thermodynamics, Electrochemistry, Solutions', '~30%'], ['Organic Chemistry', 'GOC, Hydrocarbons, Biomolecules, Polymers, Chemistry in Everyday Life', '~35%'], ['Inorganic Chemistry', 'Periodic Table, Chemical Bonding, p-Block, d-Block, Coordination Compounds', '~35%']] } },
      { heading: 'NCERT Alignment', content: 'NEET questions are directly based on NCERT textbooks. Over 85% of Biology questions and 70% of Chemistry questions can be answered using NCERT alone. Thoroughly reading NCERT line-by-line is the single most effective preparation strategy.', bullets: ['Read NCERT Biology line-by-line — every example, diagram, and footnote', 'For Chemistry, master NCERT + solve NEET PYQs for pattern recognition', 'For Physics, NCERT provides the foundation; practice numerical problems from additional books', 'Highlight and annotate your NCERT — these become your revision notes'] },
    ],
    faqs: [
      { q: `What is the NEET ${Y} syllabus?`, a: `NEET ${Y} syllabus covers Biology (Botany & Zoology), Physics, and Chemistry from Class 11 and 12 NCERT. Biology carries 50% weightage (90 questions), while Physics and Chemistry carry 25% each (45 questions each).` },
      { q: 'Is NCERT enough for NEET?', a: 'For Biology, NCERT is sufficient for 85% of questions. For Chemistry, NCERT covers ~70%. For Physics, you need additional practice books alongside NCERT.' },
      { q: 'Which chapters are most important for NEET?', a: 'Human Physiology, Genetics & Evolution, and Plant Physiology are the highest-weightage Biology chapters. Electrodynamics and Mechanics dominate Physics. Physical and Organic Chemistry are key for Chemistry.' },
    ],
    relatedSlugs: [`neet-exam-pattern-${Y}`, `neet-cutoff-${Y}`, 'neet-coaching', 'neet-practice', 'neet-pyq'],
  };
}

function jeeMainExamPattern(): ExamInfoPage {
  return {
    slug: `jee-main-exam-pattern-${Y}`,
    title: `JEE Main ${Y} Exam Pattern — Marking Scheme, Total Questions & Time [NTA]`,
    description: `JEE Main ${Y} exam pattern: total questions, marks distribution, negative marking, section-wise time, and strategic tips. Complete NTA pattern analysis.`,
    h1: `JEE Main Exam Pattern`,
    highlight: `${Y}`,
    heroSubtitle: `Understand the JEE Main ${Y} exam structure — question types, marking scheme, and time management strategy to maximize your score.`,
    exam: 'JEE',
    category: 'exam-pattern',
    sections: [
      { heading: 'JEE Main Paper Structure', table: { headers: ['Parameter', 'Details'], rows: [['Total Questions', '90 (75 to attempt)'], ['Total Marks', '300'], ['Duration', '3 hours'], ['Sections', 'Physics, Chemistry, Mathematics'], ['Questions per Section', '30 (25 to attempt: 20 MCQ + 10 Numerical, attempt 5)'], ['MCQ Marking', '+4 for correct, -1 for wrong'], ['Numerical Marking', '+4 for correct, 0 for wrong'], ['Mode', 'Computer-Based Test (CBT)'], ['Sessions', 'Session 1 (Jan) & Session 2 (Apr)'], ['Best Score', 'Best of two sessions considered']] } },
      { heading: 'Subject-wise Time Allocation Strategy', content: 'With 3 hours for 75 questions, you have ~2.4 minutes per question. Strategic time allocation is crucial.', table: { headers: ['Subject', 'Recommended Time', 'Questions', 'Strategy'], rows: [['Chemistry', '45-50 min', '25', 'Attempt first — fastest to solve, highest accuracy'], ['Mathematics', '65-70 min', '25', 'Attempt second — needs most time for calculations'], ['Physics', '55-60 min', '25', 'Attempt last — moderate time, concept-heavy']] } },
      { heading: 'Scoring Strategy for 250+', content: 'To score 250+ in JEE Main, you need ~60 correct answers out of 75 attempted. Here\'s the chapter-wise approach:', steps: [{ title: 'Master 15 High-Yield Chapters', description: 'These chapters contribute 60% of questions. Focus on Mechanics, Electrostatics, Mole Concept, Organic Chemistry basics, Algebra, and Calculus.' }, { title: 'Perfect Chemistry First', description: 'Chemistry is the fastest to improve. NCERT + PYQs can guarantee 80+ in Chemistry within 2 months.' }, { title: 'Practice 50 Numerical Questions Daily', description: 'Numerical-type questions have no negative marking — these are free marks if you practice enough.' }, { title: 'Take Weekly Full-Length Mocks', description: 'Simulate exam conditions every Sunday. Analyze mistakes and weak areas after each mock.' }] },
    ],
    faqs: [
      { q: `What is the JEE Main ${Y} exam pattern?`, a: `JEE Main ${Y} has 90 questions (75 to attempt) across Physics, Chemistry, and Mathematics for 300 marks in 3 hours. Each section has 20 MCQs (+4/-1) and 10 Numerical (+4/0, attempt 5).` },
      { q: 'Is there negative marking in JEE Main?', a: 'Yes, -1 for wrong MCQ answers. Numerical-type questions have no negative marking.' },
      { q: 'How many sessions does JEE Main have?', a: `JEE Main ${Y} will have 2 sessions (January and April). The best score from both sessions is considered for ranking.` },
    ],
    relatedSlugs: [`jee-main-syllabus-${Y}`, `jee-main-cutoff-${Y}`, `jee-main-important-dates-${Y}`, 'jee-coaching'],
  };
}

function jeeAdvExamPattern(): ExamInfoPage {
  return {
    slug: `jee-advanced-exam-pattern-${Y}`,
    title: `JEE Advanced ${Y} Exam Pattern — Paper 1 & 2, Question Types [IIT]`,
    description: `JEE Advanced ${Y} exam pattern: Paper 1 & 2 structure, question types (MCQ, Integer, Matrix Match), marking scheme & time strategy for IIT selection.`,
    h1: `JEE Advanced Exam Pattern`,
    highlight: `${Y}`,
    heroSubtitle: `JEE Advanced ${Y} has two papers of 3 hours each. Understanding the unique question types and marking scheme is critical for IIT selection.`,
    exam: 'JEE',
    category: 'exam-pattern',
    sections: [
      { heading: 'Paper Structure', table: { headers: ['Parameter', 'Paper 1', 'Paper 2'], rows: [['Duration', '3 hours', '3 hours'], ['Sections', 'Physics, Chemistry, Maths', 'Physics, Chemistry, Maths'], ['Question Types', 'MCQ (single/multi), Integer, Paragraph', 'MCQ (single/multi), Integer, Matrix Match'], ['Total Marks', '~180', '~180'], ['Negative Marking', 'Varies by section', 'Varies by section']] } },
      { heading: 'Question Types Explained', bullets: ['Single Correct MCQ: Standard 4-option MCQ (+3, -1)', 'Multi-Correct MCQ: 1-4 correct options, partial marking available', 'Integer Type: Answer is a single-digit integer (0-9), no negative marking', 'Matrix Match: Match items from Column 1 to Column 2', 'Paragraph Based: Read passage and answer 2-3 linked questions'] },
      { heading: 'Key Differences from JEE Main', content: 'JEE Advanced tests deeper understanding and problem-solving ability. Questions often combine concepts from multiple chapters.', bullets: ['Multi-concept problems are standard (e.g., Mechanics + Thermodynamics)', 'Lengthy calculations are common — speed and accuracy both matter', 'Partial marking in multi-correct questions rewards partial knowledge', 'No choice in questions — all questions are compulsory in each section'] },
    ],
    faqs: [
      { q: `What is the JEE Advanced ${Y} exam pattern?`, a: `JEE Advanced ${Y} consists of 2 papers of 3 hours each, with Physics, Chemistry, and Mathematics. Question types include MCQ (single/multi correct), Integer type, and Matrix Match.` },
      { q: 'How is JEE Advanced different from JEE Main?', a: 'JEE Advanced has more diverse question types, deeper conceptual problems, and multi-concept questions. Both Paper 1 and Paper 2 scores are combined for the final rank.' },
    ],
    relatedSlugs: [`jee-advanced-syllabus-${Y}`, `jee-advanced-cutoff-${Y}`, 'jee-advanced-coaching', 'jee-pyq'],
  };
}

function neetExamPattern(): ExamInfoPage {
  return {
    slug: `neet-exam-pattern-${Y}`,
    title: `NEET ${Y} Exam Pattern — Marking Scheme, Total Questions & Sections [NTA]`,
    description: `NEET ${Y} exam pattern: 200 questions, 720 marks, section-wise distribution, marking scheme & time management tips. Complete NTA pattern guide.`,
    h1: `NEET Exam Pattern`,
    highlight: `${Y}`,
    heroSubtitle: `Understand the NEET ${Y} exam structure — 200 questions for 720 marks across Biology, Physics, and Chemistry with strategic section analysis.`,
    exam: 'NEET',
    category: 'exam-pattern',
    sections: [
      { heading: 'NEET Paper Structure', table: { headers: ['Parameter', 'Details'], rows: [['Total Questions', '200 (180 to attempt)'], ['Total Marks', '720'], ['Duration', '3 hours 20 minutes'], ['Sections', 'Physics (A+B), Chemistry (A+B), Botany (A+B), Zoology (A+B)'], ['Section A', '35 MCQs (all compulsory) per subject'], ['Section B', '15 MCQs (attempt 10) per subject'], ['Marking', '+4 correct, -1 wrong'], ['Mode', 'Pen and Paper (OMR-based)'], ['Medium', 'English, Hindi + 11 regional languages']] } },
      { heading: 'Subject-wise Marks Distribution', table: { headers: ['Subject', 'Questions', 'Marks', 'Weightage'], rows: [['Botany', '50 (45 to attempt)', '180', '25%'], ['Zoology', '50 (45 to attempt)', '180', '25%'], ['Physics', '50 (45 to attempt)', '180', '25%'], ['Chemistry', '50 (45 to attempt)', '180', '25%']] } },
      { heading: 'Time Management Strategy', content: 'With 200 minutes for 180 questions, you get ~67 seconds per question.', steps: [{ title: 'Biology First (70 min)', description: 'Attempt all 90 Biology questions first — fastest to solve and highest accuracy.' }, { title: 'Chemistry Next (50 min)', description: 'Inorganic and Organic questions can be answered quickly from NCERT recall.' }, { title: 'Physics Last (60 min)', description: 'Physics requires calculations — allocate remaining time here.' }, { title: 'Review (20 min)', description: 'Use remaining time to review marked/unsure answers.' }] },
    ],
    faqs: [
      { q: `What is the NEET ${Y} exam pattern?`, a: `NEET ${Y} has 200 questions (180 to attempt) for 720 marks in 3 hours 20 minutes. Each of 4 subjects (Botany, Zoology, Physics, Chemistry) has Section A (35 compulsory) and Section B (15, attempt 10).` },
      { q: 'Is there negative marking in NEET?', a: 'Yes, -1 mark for each wrong answer and +4 for correct answers.' },
    ],
    relatedSlugs: [`neet-syllabus-${Y}`, `neet-cutoff-${Y}`, 'neet-coaching', 'neet-practice'],
  };
}

function buildCutoffPage(exam: 'jee-main' | 'jee-advanced' | 'neet'): ExamInfoPage {
  const isJEE = exam.startsWith('jee');
  const examLabel = exam === 'jee-main' ? 'JEE Main' : exam === 'jee-advanced' ? 'JEE Advanced' : 'NEET';
  const cutoffData = exam === 'jee-main'
    ? { headers: ['Category', `${Y-1} Cutoff`, `${Y-2} Cutoff`, 'Trend'], rows: [['General', '93.2 percentile', '90.8 percentile', '↑ Rising'], ['OBC-NCL', '78.5 percentile', '75.2 percentile', '↑ Rising'], ['SC', '55.3 percentile', '52.1 percentile', 'Stable'], ['ST', '44.2 percentile', '40.8 percentile', 'Stable'], ['EWS', '82.1 percentile', '78.8 percentile', '↑ Rising'], ['PwD', '0.1 percentile', '0.1 percentile', 'Stable']] }
    : exam === 'jee-advanced'
    ? { headers: ['Category', `${Y-1} Cutoff (Marks/360)`, `${Y-2} Cutoff`, 'Min Aggregate'], rows: [['General', '108', '101', '30%'], ['OBC-NCL', '97', '91', '27%'], ['SC', '54', '51', '15%'], ['ST', '54', '51', '15%'], ['EWS', '97', '91', '27%'], ['PwD', '54', '51', '15%']] }
    : { headers: ['Category', `${Y-1} Cutoff (Marks/720)`, `${Y-2} Cutoff`, 'Trend'], rows: [['General', '720-137', '720-137', 'Stable'], ['OBC', '136-107', '136-107', 'Stable'], ['SC', '106-107', '107-93', 'Slight ↓'], ['ST', '106-93', '107-93', 'Stable'], ['EWS', '136-107', '136-107', 'Stable']] };

  return {
    slug: `${exam}-cutoff-${Y}`,
    title: `${examLabel} Cutoff ${Y} — Expected & Previous Year Category-wise Cutoffs`,
    description: `${examLabel} ${Y} cutoff: expected and previous year category-wise cutoff marks/percentile. Includes trend analysis and preparation tips to clear the cutoff.`,
    h1: `${examLabel} Cutoff`,
    highlight: `${Y}`,
    heroSubtitle: `Expected ${examLabel} ${Y} cutoff marks with category-wise analysis and year-on-year trends. Plan your target score to secure your dream college.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'cutoff',
    sections: [
      { heading: `${examLabel} Cutoff — Category-wise Analysis`, table: cutoffData },
      { heading: 'How Cutoff is Determined', content: `The ${examLabel} cutoff is determined by NTA based on total candidates, difficulty level, and available seats. Cutoffs generally rise when the paper is easier and fall when it\'s tougher.`, bullets: ['Number of candidates appearing', 'Difficulty level of the paper', 'Total seats available across colleges', 'Category-wise seat reservation percentages'] },
      { heading: `How to Score Above ${examLabel} Cutoff`, steps: [{ title: 'Target 20% Above Cutoff', description: 'Aim for a score well above the cutoff to get better college options.' }, { title: 'Focus on Scoring Subjects', description: isJEE ? 'Chemistry is the fastest to improve. Master NCERT Chemistry for guaranteed marks.' : 'Biology carries 50% weightage. Master NCERT Biology line-by-line.' }, { title: 'Eliminate Silly Mistakes', description: 'Track and categorize your mistakes in mock tests. Most students lose 20-30 marks to avoidable errors.' }] },
    ],
    faqs: [
      { q: `What is the expected ${examLabel} ${Y} cutoff?`, a: `Based on trend analysis, the ${examLabel} ${Y} cutoff for General category is expected to be similar to ${Y-1}. Exact cutoff depends on paper difficulty and number of candidates.` },
      { q: `How is ${examLabel} cutoff calculated?`, a: `NTA calculates the cutoff based on normalization across sessions, total candidates, difficulty level, and available seats.` },
    ],
    relatedSlugs: [`${exam}-syllabus-${Y}`, `${exam}-exam-pattern-${Y}`, `${exam}-result-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

function buildDatesPage(exam: 'jee-main' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee-main';
  const examLabel = isJEE ? 'JEE Main' : 'NEET';
  const events = isJEE
    ? [['Registration Opens', `Sep-Oct ${Y-1}`, 'Complete early to avoid last-minute issues'], ['Admit Card Release', `Dec ${Y-1} / Mar ${Y}`, 'Download from jeemain.nta.nic.in'], ['Session 1 Exam', `Jan ${Y}`, '2 days, CBT mode'], ['Session 1 Result', `Feb ${Y}`, 'Scorecard + Percentile'], ['Session 2 Registration', `Feb-Mar ${Y}`, 'Optional — improve your score'], ['Session 2 Exam', `Apr ${Y}`, '2 days, CBT mode'], ['Session 2 Result', `Apr-May ${Y}`, 'Best of both sessions considered'], ['JEE Advanced Registration', `May ${Y}`, 'Top 2.5 lakh qualifiers eligible']]
    : [['Registration Opens', `Feb-Mar ${Y}`, 'Complete on neet.nta.nic.in'], ['Application Correction', `Mar-Apr ${Y}`, 'Correct errors in application'], ['Admit Card Release', `Apr ${Y}`, 'Download from official website'], ['NEET Exam Date', `May ${Y}`, 'Pen-paper, OMR-based'], ['Answer Key Release', `May-Jun ${Y}`, 'Challenge window available'], ['Result Declaration', `Jun ${Y}`, 'Scorecard + AIR rank'], ['Counselling Begins', `Jul ${Y}`, 'AIQ + State quota counselling']];

  return {
    slug: `${exam}-important-dates-${Y}`,
    title: `${examLabel} ${Y} Important Dates — Registration, Exam, Result Schedule`,
    description: `${examLabel} ${Y} important dates: registration, admit card, exam date, answer key, result & counselling schedule. Complete timeline with preparation milestones.`,
    h1: `${examLabel} Important Dates`,
    highlight: `${Y}`,
    heroSubtitle: `Complete timeline of ${examLabel} ${Y} events — from registration to counselling. Plan your preparation milestones around these dates.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'important-dates',
    sections: [
      { heading: `${examLabel} ${Y} Event Timeline`, table: { headers: ['Event', 'Expected Date', 'Notes'], rows: events } },
      { heading: 'Preparation Milestones to Track', content: `Align your study plan with ${examLabel} ${Y} dates for maximum efficiency.`, steps: [{ title: '6 Months Before Exam', description: 'Complete syllabus coverage. Start revision and mock tests.' }, { title: '3 Months Before', description: 'Intensive revision cycle. Solve 2-3 full mock tests weekly.' }, { title: '1 Month Before', description: 'Focus on weak areas, formula revision, and PYQ solving.' }, { title: '1 Week Before', description: 'Light revision only. Focus on mental health, sleep, and exam strategy.' }] },
    ],
    faqs: [
      { q: `When is ${examLabel} ${Y} exam?`, a: isJEE ? `JEE Main ${Y} Session 1 is expected in January ${Y} and Session 2 in April ${Y}. Exact dates will be announced by NTA.` : `NEET ${Y} is expected in May ${Y}. The exact date will be announced by NTA with the official notification.` },
      { q: `When does ${examLabel} ${Y} registration start?`, a: `${examLabel} ${Y} registration is expected to start in ${isJEE ? `September-October ${Y-1}` : `February-March ${Y}`} on the official NTA website.` },
    ],
    relatedSlugs: [`${exam}-syllabus-${Y}`, `${exam}-exam-pattern-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

function buildEligibilityPage(exam: 'jee-main' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee-main';
  const examLabel = isJEE ? 'JEE Main' : 'NEET';
  return {
    slug: `${exam}-eligibility-${Y}`,
    title: `${examLabel} ${Y} Eligibility Criteria — Age, Qualification, Attempts [Complete Guide]`,
    description: `${examLabel} ${Y} eligibility: age limit, educational qualification, number of attempts, and category-wise relaxation. Complete NTA eligibility guide.`,
    h1: `${examLabel} Eligibility`,
    highlight: `${Y}`,
    heroSubtitle: `Check if you meet the ${examLabel} ${Y} eligibility criteria — age limit, educational qualification, required subjects, and attempt limits.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'eligibility',
    sections: [
      { heading: 'Eligibility Criteria', table: { headers: ['Criterion', 'Requirement'], rows: isJEE ? [['Age', 'No age limit (as per latest NTA notification)'], ['Qualification', 'Class 12 passed or appearing with Physics, Chemistry & Maths'], ['Minimum Marks', '75% in Class 12 (65% for SC/ST) OR Top 20 percentile'], ['Attempts', '3 consecutive years'], ['Nationality', 'Indian nationals, OCI, PIO, Foreign nationals']] : [['Age', 'Minimum 17 years as of Dec 31 of admission year; upper limit as per court orders'], ['Qualification', 'Class 12 passed or appearing with Physics, Chemistry & Biology/Biotechnology'], ['Minimum Marks', '50% aggregate in PCB (40% for SC/ST/OBC, 45% for PwD)'], ['Attempts', 'No limit on attempts'], ['Nationality', 'Indian nationals, OCI, NRI']] } },
      { heading: 'Subject Requirements', content: `Candidates must have studied the mandatory subjects in Class 11 and 12 from a recognized board.`, bullets: isJEE ? ['Physics and Mathematics are compulsory', 'Chemistry/Biology/Biotechnology/Technical Vocational as 3rd subject', 'Diploma holders can also apply for JEE Main'] : ['Physics, Chemistry, and Biology/Biotechnology are compulsory', 'English is compulsory as a language subject', 'Candidates with Mathematics instead of Biology are NOT eligible'] },
    ],
    faqs: [
      { q: `What is the age limit for ${examLabel} ${Y}?`, a: isJEE ? `There is no upper age limit for JEE Main ${Y}. Candidates who passed Class 12 in ${Y-1} or ${Y-2} or appearing in ${Y} are eligible.` : `Candidates must be at least 17 years old as of December 31 of the year of admission. Upper age limit is subject to court orders.` },
      { q: `How many times can I attempt ${examLabel}?`, a: isJEE ? 'You can attempt JEE Main for 3 consecutive years.' : 'There is no limit on the number of NEET attempts.' },
    ],
    relatedSlugs: [`${exam}-syllabus-${Y}`, `${exam}-registration-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

function buildResultPage(exam: 'jee-main' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee-main';
  const examLabel = isJEE ? 'JEE Main' : 'NEET';
  return {
    slug: `${exam}-result-${Y}`,
    title: `${examLabel} Result ${Y} — How to Check, Scorecard Download & Cutoff Analysis`,
    description: `${examLabel} ${Y} result: step-by-step guide to check result, download scorecard, understand percentile/rank, and what to do after result.`,
    h1: `${examLabel} Result`,
    highlight: `${Y}`,
    heroSubtitle: `${examLabel} ${Y} result guide — how to check your score, download scorecard, understand your rank, and plan next steps.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'result',
    sections: [
      { heading: `How to Check ${examLabel} ${Y} Result`, steps: [{ title: 'Visit Official Website', description: isJEE ? 'Go to jeemain.nta.nic.in' : 'Go to neet.nta.nic.in' }, { title: 'Login with Credentials', description: 'Enter your Application Number and Date of Birth' }, { title: 'View & Download Scorecard', description: 'Your scorecard will show raw marks, percentile (JEE) or rank (NEET), and category rank' }, { title: 'Save for Counselling', description: 'Download and print the scorecard — you\'ll need it during counselling' }] },
      { heading: 'What After Result?', content: 'Your next steps depend on your score.', bullets: isJEE ? ['Score 95+ percentile → Register for JEE Advanced', 'Score 85-95 percentile → Apply for NITs, IIITs via JoSAA', 'Score below 85 → Consider state-level counselling or improvement', 'Start next year\'s preparation with a personal mentor at MindPeak'] : ['Score 600+ → Target top government medical colleges', 'Score 500-600 → Apply to state government colleges', 'Score below 500 → Consider deemed universities or re-attempt', 'Start next year\'s preparation with MindPeak\'s 1-on-1 coaching'] },
    ],
    faqs: [
      { q: `When will ${examLabel} ${Y} result be declared?`, a: isJEE ? `JEE Main ${Y} Session 1 result is expected in February ${Y}. Session 2 result in April-May ${Y}.` : `NEET ${Y} result is expected in June ${Y}, approximately 4-6 weeks after the exam.` },
      { q: `How to download ${examLabel} ${Y} scorecard?`, a: `Visit the official NTA website, login with your application number and date of birth, and download the scorecard.` },
    ],
    relatedSlugs: [`${exam}-cutoff-${Y}`, isJEE ? `jee-counselling-${Y}` : `neet-counselling-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

function buildRegistrationPage(exam: 'jee-main' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee-main';
  const examLabel = isJEE ? 'JEE Main' : 'NEET';
  return {
    slug: `${exam}-registration-${Y}`,
    title: `${examLabel} ${Y} Registration — How to Apply, Fees & Documents [Step-by-Step]`,
    description: `${examLabel} ${Y} registration guide: step-by-step application process, fees, required documents, and common mistakes to avoid. Apply on NTA website.`,
    h1: `${examLabel} Registration`,
    highlight: `${Y}`,
    heroSubtitle: `Complete guide to ${examLabel} ${Y} registration — documents needed, fees, step-by-step application process, and tips to avoid rejection.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'registration',
    sections: [
      { heading: 'Registration Steps', steps: [{ title: 'Create NTA Account', description: `Visit ${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'} and register with email and phone number.` }, { title: 'Fill Application Form', description: 'Enter personal details, educational qualification, exam center preferences, and category.' }, { title: 'Upload Documents', description: 'Upload passport-size photo (10-200 KB, JPG), signature (4-30 KB), and category certificate if applicable.' }, { title: 'Pay Application Fee', description: `General: ₹${isJEE ? '1000' : '1700'} | SC/ST/PwD: ₹${isJEE ? '500' : '1000'} | Female: ₹${isJEE ? '500' : '1000'}. Pay via UPI, Net Banking, or Credit/Debit Card.` }, { title: 'Print Confirmation', description: 'Download and save the confirmation page with application number for future reference.' }] },
      { heading: 'Required Documents', bullets: ['Class 10 marksheet and certificate', 'Class 12 marksheet (if passed)', 'Aadhaar card or valid ID proof', 'Passport-size photograph (white background)', 'Scanned signature', 'Category certificate (SC/ST/OBC/EWS if applicable)', 'PwD certificate (if applicable)'] },
      { heading: 'Common Mistakes to Avoid', bullets: ['Incorrect spelling of name (must match Class 10 certificate)', 'Wrong category selection (cannot be changed later)', 'Low-quality photo upload (ensure proper lighting and white background)', 'Missing the correction window deadline', 'Not saving the application number and confirmation page'] },
    ],
    faqs: [
      { q: `How to register for ${examLabel} ${Y}?`, a: `Visit the official NTA website (${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'}), create an account, fill the application form, upload documents, and pay the fee online.` },
      { q: `What is the ${examLabel} ${Y} registration fee?`, a: `General category: ₹${isJEE ? '1000' : '1700'}. SC/ST/PwD/Female candidates get reduced fees.` },
    ],
    relatedSlugs: [`${exam}-eligibility-${Y}`, `${exam}-important-dates-${Y}`, `${exam}-syllabus-${Y}`],
  };
}

function buildAdmitCardPage(exam: 'jee-main' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee-main';
  const examLabel = isJEE ? 'JEE Main' : 'NEET';
  return {
    slug: `${exam}-admit-card-${Y}`,
    title: `${examLabel} Admit Card ${Y} — Download Link, Steps & Important Instructions`,
    description: `Download ${examLabel} ${Y} admit card from NTA website. Step-by-step guide, important exam day instructions, and what to carry to the exam center.`,
    h1: `${examLabel} Admit Card`,
    highlight: `${Y}`,
    heroSubtitle: `Download your ${examLabel} ${Y} admit card and review exam day instructions — documents to carry, reporting time, and prohibited items.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'admit-card',
    sections: [
      { heading: 'How to Download Admit Card', steps: [{ title: 'Visit NTA Website', description: `Go to ${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'}` }, { title: 'Login', description: 'Enter Application Number and Date of Birth / Password' }, { title: 'Download', description: 'Click "Download Admit Card" and save as PDF' }, { title: 'Print', description: 'Take 2-3 color printouts on A4 paper' }] },
      { heading: 'What to Carry on Exam Day', bullets: ['Printed admit card (color, A4)', 'Valid photo ID (Aadhaar/Passport/Voter ID)', 'Passport-size photographs (2 extra)', 'Transparent water bottle', 'Transparent pouch for documents', isJEE ? 'Nothing else — no calculator, no phone' : 'Blue/black ballpoint pen (for OMR marking)', isJEE ? '' : 'No electronic devices allowed'].filter(Boolean) },
      { heading: 'Important Instructions', bullets: ['Report 1 hour before gate closure time', 'Wear simple clothes — avoid items with large buttons or metallic accessories', 'No smartwatches, fitness bands, or Bluetooth devices', 'Follow COVID protocols if mandated'] },
    ],
    faqs: [
      { q: `When will ${examLabel} ${Y} admit card be released?`, a: `${examLabel} ${Y} admit card is typically released ${isJEE ? '3-4 days before the exam date' : '2-3 weeks before the exam date'} on the official NTA website.` },
      { q: 'What if my photo on the admit card is unclear?', a: 'Contact the NTA helpline immediately. You may need to carry additional ID proof with a clear photograph.' },
    ],
    relatedSlugs: [`${exam}-important-dates-${Y}`, `${exam}-exam-pattern-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

function buildAnswerKeyPage(exam: 'jee-main' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee-main';
  const examLabel = isJEE ? 'JEE Main' : 'NEET';
  return {
    slug: `${exam}-answer-key-${Y}`,
    title: `${examLabel} Answer Key ${Y} — Official & Provisional Keys, How to Challenge`,
    description: `${examLabel} ${Y} answer key: provisional and final keys, how to check, challenge process, and score calculation method. Estimate your marks accurately.`,
    h1: `${examLabel} Answer Key`,
    highlight: `${Y}`,
    heroSubtitle: `Check the ${examLabel} ${Y} answer key — calculate your expected score, understand the challenge process, and plan your next steps.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'answer-key',
    sections: [
      { heading: 'How to Check Answer Key', steps: [{ title: 'Visit NTA Website', description: `Go to ${isJEE ? 'jeemain.nta.nic.in' : 'neet.nta.nic.in'}` }, { title: 'Login', description: 'Enter Application Number and Password' }, { title: 'View Responses', description: 'Download your recorded responses and match with the answer key' }, { title: 'Calculate Score', description: isJEE ? '+4 for correct MCQ, -1 for wrong MCQ, +4 for correct numerical (no negative)' : '+4 for correct, -1 for wrong, 0 for unattempted' }] },
      { heading: 'How to Challenge Answer Key', content: `NTA allows candidates to challenge the provisional answer key by paying ₹${isJEE ? '200' : '200'} per question. If your challenge is accepted, the fee is refunded.`, steps: [{ title: 'Review Provisional Key', description: 'Compare your answers carefully with the provisional answer key' }, { title: 'Submit Challenge Online', description: 'Login to your account and submit the challenge with supporting reference' }, { title: 'Pay Challenge Fee', description: `₹200 per question challenged (refunded if accepted)` }, { title: 'Wait for Final Key', description: 'NTA reviews all challenges and releases the final answer key' }] },
      { heading: 'Score Estimation', content: `Use this formula to estimate your ${examLabel} ${Y} score:`, bullets: [`Estimated Score = (Correct × 4) - (Incorrect × 1)`, 'Compare with previous year cutoffs to gauge your rank', 'Note: NTA may change answers after reviewing challenges', 'Your actual percentile/rank may differ from estimated score'] },
    ],
    faqs: [
      { q: `When will ${examLabel} ${Y} answer key be released?`, a: `${examLabel} ${Y} provisional answer key is typically released ${isJEE ? '1-2 weeks after the exam' : '1-2 weeks after the exam'} on the official NTA website.` },
      { q: 'Can I challenge the answer key?', a: `Yes, NTA allows challenges during a 2-3 day window after the provisional answer key release. Fee is ₹200 per question, refundable if accepted.` },
    ],
    relatedSlugs: [`${exam}-result-${Y}`, `${exam}-cutoff-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

function buildCounsellingPage(exam: 'jee' | 'neet'): ExamInfoPage {
  const isJEE = exam === 'jee';
  const examLabel = isJEE ? 'JEE' : 'NEET';
  return {
    slug: `${exam}-counselling-${Y}`,
    title: `${examLabel} Counselling ${Y} — Process, Dates, Choice Filling & Seat Allotment`,
    description: `${examLabel} ${Y} counselling: complete guide to registration, choice filling, document verification, and seat allotment. Tips to get your dream college.`,
    h1: `${examLabel} Counselling`,
    highlight: `${Y}`,
    heroSubtitle: `Complete guide to ${examLabel} ${Y} counselling — step-by-step process from registration to seat allotment. Make informed choices to get your dream college.`,
    exam: isJEE ? 'JEE' : 'NEET',
    category: 'counselling',
    sections: [
      { heading: 'Counselling Process Overview', steps: isJEE ? [{ title: 'JoSAA Registration', description: 'Register on josaa.nic.in with JEE Main/Advanced roll number and score' }, { title: 'Choice Filling', description: 'Fill your preferred colleges + branches in order of preference (fill 50+ choices)' }, { title: 'Seat Allotment', description: '6-7 rounds of allotment based on rank, category, and choices' }, { title: 'Document Verification', description: 'Report to the allotted institute with original documents for verification' }, { title: 'Fee Payment', description: 'Pay seat acceptance fee to confirm admission (refundable if withdrawn in freeze/float)' }] : [{ title: 'MCC Registration', description: 'Register on mcc.nic.in for AIQ (All India Quota) counselling' }, { title: 'Choice Filling', description: 'Fill preferred colleges and courses from the available list' }, { title: 'Seat Allotment', description: '3-4 rounds of allotment for AIQ, followed by state-level counselling' }, { title: 'Document Verification', description: 'Report to the allotted medical college with original documents' }, { title: 'Fee Payment', description: 'Pay tuition and admission fee to confirm the seat' }] },
      { heading: 'Important Tips for Choice Filling', bullets: ['Fill maximum choices (100+ if possible) to increase chances', 'Research college placements, faculty, and infrastructure before ranking choices', 'Prefer branch over college for engineering (CSE at a good NIT > Mechanical at IIT)', isJEE ? 'Use JoSAA historical data to understand closing ranks for each branch' : 'Check state-wise seat matrix for colleges in your home state', 'Keep documents ready: Class 10, Class 12 marksheets, category certificates, scorecard'] },
      { heading: 'Documents Required', bullets: ['JEE/NEET admit card and scorecard', 'Class 10 marksheet and certificate', 'Class 12 marksheet', 'Category certificate (if applicable)', 'Income certificate (for EWS)', 'Domicile certificate (for state quota)', 'Medical fitness certificate (for NEET)', '10 passport-size photographs', 'Aadhaar card'] },
    ],
    faqs: [
      { q: `When does ${examLabel} ${Y} counselling start?`, a: isJEE ? `JoSAA counselling for JEE ${Y} starts approximately 1-2 weeks after JEE Advanced results, typically in June-July ${Y}.` : `NEET ${Y} AIQ counselling by MCC starts approximately 2-3 weeks after NEET result declaration, typically in July-August ${Y}.` },
      { q: 'Can I participate in both AIQ and state counselling?', a: isJEE ? 'JoSAA counselling covers all IITs, NITs, IIITs. State-level counselling is separate for state engineering colleges.' : 'Yes, you can participate in both MCC (AIQ) and state counselling. If allotted a seat in AIQ, you must withdraw from state counselling.' },
    ],
    relatedSlugs: [`${exam === 'jee' ? 'jee-main' : 'neet'}-result-${Y}`, `${exam === 'jee' ? 'jee-main' : 'neet'}-cutoff-${Y}`, isJEE ? 'jee-coaching' : 'neet-coaching'],
  };
}

/** All exam info pages */
export function getAllExamInfoPages(): ExamInfoPage[] {
  return [
    jeeMainSyllabus(),
    jeeAdvSyllabus(),
    neetSyllabus(),
    jeeMainExamPattern(),
    jeeAdvExamPattern(),
    neetExamPattern(),
    buildCutoffPage('jee-main'),
    buildCutoffPage('jee-advanced'),
    buildCutoffPage('neet'),
    buildDatesPage('jee-main'),
    buildDatesPage('neet'),
    buildEligibilityPage('jee-main'),
    buildEligibilityPage('neet'),
    buildResultPage('jee-main'),
    buildResultPage('neet'),
    buildRegistrationPage('jee-main'),
    buildRegistrationPage('neet'),
    buildAdmitCardPage('jee-main'),
    buildAdmitCardPage('neet'),
    buildAnswerKeyPage('jee-main'),
    buildAnswerKeyPage('neet'),
    buildCounsellingPage('jee'),
    buildCounsellingPage('neet'),
  ];
}

/** Get a single exam info page by slug */
export function getExamInfoPage(slug: string): ExamInfoPage | undefined {
  return getAllExamInfoPages().find(p => p.slug === slug);
}

/** All exam info slugs for routing/sitemap */
export function getAllExamInfoSlugs(): string[] {
  return getAllExamInfoPages().map(p => p.slug);
}
