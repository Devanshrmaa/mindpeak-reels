/**
 * Exam Registry — Central configuration for 14+ competitive exams
 * Each entry contains exam metadata, syllabus structure, differentiation from JEE/NEET,
 * preparation strategy, and FAQs for generating 2,000+ word pages.
 */

import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

export interface ExamSubject {
  name: string;
  chapters: string[];
  weightagePercent: number;
  uniqueTopics?: string[]; // Topics NOT in JEE/NEET
}

export interface ExamConfig {
  slug: string;
  name: string;
  fullName: string;
  category: 'engineering' | 'medical' | 'aptitude' | 'state' | 'university' | 'olympiad';
  conductedBy: string;
  /** Which base exam's syllabus overlaps most */
  overlapsWith: 'jee' | 'neet' | 'both';
  overlapPercent: number;
  totalMarks: number;
  duration: string;
  totalQuestions: number;
  negativeMarking: string;
  mode: 'online' | 'offline' | 'both';
  examMonth: string;
  eligibility: string;
  topColleges: string[];
  subjects: ExamSubject[];
  /** How this exam differs from JEE Main / NEET */
  keyDifferences: string[];
  /** Preparation strategy specific to this exam */
  prepStrategy: string[];
  /** Why MindPeak coaching helps for this exam */
  whyMindPeak: string;
  faqs: { q: string; a: string }[];
}

const year = CURRENT_EXAM_YEAR;

export const examRegistry: ExamConfig[] = [
  // ═══════════════════════════════════════════════════
  // BITSAT — Birla Institute of Technology & Science
  // ═══════════════════════════════════════════════════
  {
    slug: 'bitsat',
    name: 'BITSAT',
    fullName: 'Birla Institute of Technology and Science Admission Test',
    category: 'engineering',
    conductedBy: 'BITS Pilani',
    overlapsWith: 'jee',
    overlapPercent: 80,
    totalMarks: 390,
    duration: '3 hours',
    totalQuestions: 130,
    negativeMarking: '−1 for wrong answer',
    mode: 'online',
    examMonth: 'May-June',
    eligibility: 'Class 12 with PCM, minimum 75% aggregate in PCM',
    topColleges: ['BITS Pilani', 'BITS Goa', 'BITS Hyderabad'],
    subjects: [
      {
        name: 'Physics',
        chapters: ['Mechanics', 'Thermodynamics', 'Electrostatics', 'Current Electricity', 'Optics', 'Modern Physics', 'Waves', 'Magnetism'],
        weightagePercent: 28,
      },
      {
        name: 'Chemistry',
        chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Environmental Chemistry'],
        weightagePercent: 28,
      },
      {
        name: 'Mathematics',
        chapters: ['Algebra', 'Calculus', 'Coordinate Geometry', 'Trigonometry', 'Probability & Statistics', '3D Geometry'],
        weightagePercent: 28,
      },
      {
        name: 'English Proficiency',
        chapters: ['Grammar', 'Vocabulary', 'Reading Comprehension', 'Verbal Ability', 'Composition'],
        weightagePercent: 8,
        uniqueTopics: ['Verbal Ability', 'Reading Comprehension', 'Grammar & Usage', 'Vocabulary in Context'],
      },
      {
        name: 'Logical Reasoning',
        chapters: ['Verbal Reasoning', 'Non-Verbal Reasoning', 'Analytical Puzzles', 'Data Interpretation'],
        weightagePercent: 8,
        uniqueTopics: ['Analytical Reasoning', 'Pattern Recognition', 'Series Completion', 'Logical Deductions'],
      },
    ],
    keyDifferences: [
      'BITSAT has 130 questions in 3 hours — speed is more important than in JEE Main (75 questions in 3 hours). You get about 1.4 minutes per question vs 2.4 minutes in JEE Main.',
      'BITSAT includes English Proficiency and Logical Reasoning sections (25 questions total) which are NOT part of JEE Main at all.',
      'BITSAT has a unique bonus feature: if you finish all 130 questions, you can attempt 12 extra bonus questions. These bonus questions can only improve your score, not reduce it.',
      'BITSAT difficulty is slightly below JEE Main on average, but the time pressure is significantly higher, making speed-accuracy balance the primary skill.',
      'BITSAT does not have numerical answer type questions — all questions are MCQ with 4 options, unlike JEE Main which has integer-type questions.',
      'BITSAT allows you to change answers any number of times, whereas JEE Main has a more restrictive navigation system.',
      'BITSAT cutoffs are typically 290-310/390 for BITS Pilani CS, making it one of the most competitive exams per seat.',
    ],
    prepStrategy: [
      'Master NCERT + JEE Main level concepts first — 80% of BITSAT physics, chemistry, and maths questions are JEE Main difficulty or slightly easier.',
      'Dedicate 30 minutes daily to English vocabulary and grammar from months before the exam. Many JEE students neglect this and lose 15-20 easy marks.',
      'Practice logical reasoning puzzles daily — use books like RS Aggarwal Verbal and Non-Verbal Reasoning. Target 23/25 in English + LR sections.',
      'Speed is king: solve full-length BITSAT mocks under timed conditions. Target finishing 120 questions in 2 hours 40 minutes to unlock bonus questions.',
      'Focus on accuracy in easy-medium questions rather than attempting hard ones. With −1 negative marking, 3 wrong answers cancel 1 correct answer.',
      'Create a section-wise time allocation: Physics (40 min), Chemistry (35 min), Maths (50 min), English (12 min), LR (13 min), Review (10 min).',
    ],
    whyMindPeak: `MindPeak's 1-on-1 coaching for BITSAT goes beyond standard JEE preparation. Your dedicated mentor creates a dual-track plan: JEE-level concept mastery for PCM sections plus targeted English and Logical Reasoning training. Our timed mock test system simulates BITSAT's unique speed pressure, and weekly speed drills ensure you consistently finish all 130 questions with time for bonus attempts. Students coached by MindPeak for BITSAT have achieved 320+ scores, securing CS and ECE at BITS Pilani.`,
    faqs: [
      { q: `Is BITSAT easier than JEE Main?`, a: `BITSAT questions are slightly easier than JEE Main on average, but the exam is harder overall because of extreme time pressure (1.4 min/question vs 2.4 min). Additionally, BITSAT includes English and Logical Reasoning which JEE Main doesn't test. Students who prepare for JEE Main are typically 70-80% prepared for BITSAT — the remaining 20% needs targeted BITSAT-specific practice.` },
      { q: `Can I prepare for BITSAT and JEE simultaneously?`, a: `Absolutely — and you should. 80% of the BITSAT syllabus overlaps with JEE Main. Your JEE preparation covers Physics, Chemistry, and Mathematics. For BITSAT, you need to additionally prepare English Proficiency and Logical Reasoning (25 questions, ~40 marks). MindPeak mentors build an integrated study plan that covers both exams without duplication.` },
      { q: `What BITSAT score is needed for BITS Pilani CS?`, a: `For ${year}, BITS Pilani Computer Science typically requires 310-330/390. Electronics needs 280-300, and Mechanical needs 250-270. BITS Goa and Hyderabad cutoffs are 15-30 marks lower for equivalent branches.` },
      { q: `How is BITSAT different from JEE Advanced?`, a: `BITSAT and JEE Advanced are fundamentally different exams. JEE Advanced tests deep conceptual understanding with multi-concept problems and has varied question formats (MCQ, integer, matrix match). BITSAT tests speed and accuracy with straightforward MCQs. Most JEE Advanced toppers also crack BITSAT, but the reverse isn't always true.` },
      { q: `Do I need separate coaching for BITSAT?`, a: `Not entirely separate coaching, but you need BITSAT-specific preparation for English, Logical Reasoning, and speed training. MindPeak integrates this into your JEE preparation schedule — your mentor adds 30-minute daily drills for BITSAT-unique sections starting 3 months before the exam.` },
      { q: `Is BITS Pilani worth it compared to NITs?`, a: `BITS Pilani CS/ECE is generally considered equivalent to or better than top 5 NITs (NIT Trichy, NIT Warangal, NIT Surathkal). The campus culture, flexible academic structure, and strong alumni network make BITS a top choice. However, for branches like Mechanical or Civil, top NITs may offer better placement statistics.` },
    ],
  },

  // ═══════════════════════════════════════════════════
  // CUET — Common University Entrance Test
  // ═══════════════════════════════════════════════════
  {
    slug: 'cuet',
    name: 'CUET',
    fullName: 'Common University Entrance Test',
    category: 'university',
    conductedBy: 'National Testing Agency (NTA)',
    overlapsWith: 'both',
    overlapPercent: 60,
    totalMarks: 800,
    duration: '3 hours 15 min (varies by combination)',
    totalQuestions: 200,
    negativeMarking: '−1 for wrong answer',
    mode: 'online',
    examMonth: 'May',
    eligibility: 'Class 12 pass or appearing, no minimum percentage (university-specific cutoffs apply)',
    topColleges: ['Delhi University', 'JNU', 'BHU', 'Jamia Millia Islamia', 'Aligarh Muslim University', 'Central University of Hyderabad', 'Tezpur University', 'Pondicherry University'],
    subjects: [
      {
        name: 'Section IA — Languages',
        chapters: ['Reading Comprehension', 'Verbal Ability', 'Literary Aptitude', 'Vocabulary'],
        weightagePercent: 25,
        uniqueTopics: ['Literary Appreciation', 'Language Proficiency', 'Passage-based inference'],
      },
      {
        name: 'Section II — Domain Subjects',
        chapters: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Economics', 'Accountancy', 'Business Studies'],
        weightagePercent: 50,
      },
      {
        name: 'Section III — General Test',
        chapters: ['General Knowledge', 'Current Affairs', 'Quantitative Reasoning', 'Logical Reasoning', 'Data Interpretation'],
        weightagePercent: 25,
        uniqueTopics: ['General Knowledge', 'Current Affairs', 'General Mental Ability', 'Quantitative Aptitude'],
      },
    ],
    keyDifferences: [
      'CUET is a multi-domain exam — students can choose subjects based on which university/course they\'re applying to. Unlike JEE/NEET which test fixed subjects, CUET offers 27 domain subjects.',
      'CUET difficulty is strictly NCERT Class 12 level — significantly easier than JEE Main but requires broader knowledge across subjects.',
      'CUET is the gateway to ALL central universities in India, not just engineering or medical. This includes DU, BHU, JNU for courses ranging from BA to B.Sc to B.Com.',
      'CUET has a language section that tests reading comprehension and verbal ability — completely absent in JEE/NEET.',
      'The General Test section in CUET tests general knowledge and current affairs, which are never tested in JEE or NEET.',
      'CUET scoring is percentile-based for university admissions, but the preparation approach is fundamentally different from JEE/NEET — it rewards breadth over depth.',
      'CUET allows students to appear for up to 6 domain subjects, giving flexibility to apply to multiple courses across universities.',
    ],
    prepStrategy: [
      'NCERT textbooks are the ONLY preparation material needed for CUET domain subjects. Read every line, diagram, and exercise — the exam strictly follows NCERT.',
      'For the General Test, dedicate 20 minutes daily to reading newspapers (The Hindu / Indian Express) and solving GK quizzes. This section is scoring if prepared.',
      'Practice previous year CUET papers to understand the exact difficulty level — it\'s lower than JEE/NEET, so don\'t over-prepare with reference books.',
      'If targeting DU top colleges, aim for 750+ / 800. The cutoff competition is fierce despite easier questions.',
      'Time management is crucial — practice completing each section well within the allotted time, as CUET has a strict section-wise time limit.',
      'For science students also appearing for JEE/NEET: your JEE/NEET preparation MORE than covers CUET domain subjects. Focus extra time on Language and General Test sections only.',
    ],
    whyMindPeak: `MindPeak helps science students crack CUET alongside JEE/NEET without any extra stress. Since our 1-on-1 mentors already cover NCERT thoroughly for JEE/NEET, CUET domain subjects are automatically prepared. Your mentor adds targeted sessions for CUET's unique Language and General Test sections, ensuring you score 750+ for top DU/BHU admissions as a backup to IIT/AIIMS.`,
    faqs: [
      { q: 'Is CUET easier than JEE Main?', a: 'Yes, significantly. CUET tests NCERT Class 12 level concepts while JEE Main tests application-based problem-solving well beyond NCERT. However, CUET cutoffs for top DU colleges are extremely competitive (95-99 percentile), so high accuracy is essential despite easier questions.' },
      { q: 'Should JEE/NEET students also prepare for CUET?', a: 'Absolutely. CUET serves as an excellent backup for DU, BHU, and other central universities. If you\'re already preparing for JEE/NEET, you\'re 70-80% ready for CUET domain subjects. You only need additional prep for Language and General Test sections.' },
      { q: 'Which CUET subjects should a science student choose?', a: 'Choose Physics, Chemistry, and Mathematics (for engineering aspirants) or Physics, Chemistry, and Biology (for medical aspirants). Add English as your language and General Test. This combination covers top science courses at DU, BHU, and JNU.' },
      { q: 'What CUET score is needed for DU?', a: `For top DU colleges like Hindu, SRCC, and St. Stephen's, you typically need 95+ percentile in CUET. For science courses at top DU colleges, 90+ percentile is generally competitive.` },
      { q: 'Is CUET coaching necessary?', a: 'For domain subjects, thorough NCERT study is sufficient. However, the General Test and Language sections benefit from structured practice. MindPeak integrates CUET prep into JEE/NEET coaching at no extra cost.' },
      { q: 'How many attempts are allowed in CUET?', a: 'There is no limit on the number of CUET attempts. You can appear for CUET every year as long as you meet the eligibility criteria.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // WBJEE — West Bengal Joint Entrance Examination
  // ═══════════════════════════════════════════════════
  {
    slug: 'wbjee',
    name: 'WBJEE',
    fullName: 'West Bengal Joint Entrance Examination',
    category: 'state',
    conductedBy: 'West Bengal Joint Entrance Examinations Board',
    overlapsWith: 'jee',
    overlapPercent: 85,
    totalMarks: 200,
    duration: '2 hours per paper (4 hours total)',
    totalQuestions: 155,
    negativeMarking: '−0.25 for Category 1; no negative for Category 2 & 3',
    mode: 'offline',
    examMonth: 'April-May',
    eligibility: 'Class 12 with PCM from any recognized board, domicile not required',
    topColleges: ['Jadavpur University', 'IEM Kolkata', 'Heritage Institute', 'MAKAUT affiliated colleges', 'NIT Durgapur (partial)'],
    subjects: [
      { name: 'Mathematics', chapters: ['Algebra', 'Trigonometry', 'Coordinate Geometry', 'Calculus', 'Vectors & 3D', 'Statistics & Probability'], weightagePercent: 50 },
      { name: 'Physics', chapters: ['Mechanics', 'Heat & Thermodynamics', 'Waves', 'Electrostatics', 'Current Electricity', 'Optics', 'Modern Physics'], weightagePercent: 25 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'], weightagePercent: 25 },
    ],
    keyDifferences: [
      'WBJEE is conducted in OFFLINE (pen-and-paper) mode, unlike JEE Main which is computer-based. This changes the strategy for time management and answer navigation.',
      'WBJEE Mathematics paper carries 100 marks (50% of total) while Physics and Chemistry are 50 marks each — Mathematics has DOUBLE the weightage compared to JEE Main where all subjects are equal.',
      'WBJEE has a unique 3-category question system: Category 1 (1 mark, −0.25 negative), Category 2 (2 marks, no negative), and Category 3 (2 marks, no negative). This means you should attempt ALL Category 2 and 3 questions.',
      'WBJEE difficulty is between CBSE board exams and JEE Main — easier than JEE Main but requires solid conceptual understanding.',
      'WBJEE is specifically for admission to engineering colleges in West Bengal, while JEE Main is for NITs, IIITs, and other central institutions nationwide.',
      'WBJEE Physics and Chemistry are combined in a single paper (Paper 2), while Mathematics has its own paper (Paper 1).',
    ],
    prepStrategy: [
      'Since Mathematics carries 50% weightage, allocate 50% of your WBJEE preparation time to Maths. Focus on Calculus (15-18 marks) and Algebra (12-15 marks).',
      'For Category 2 and 3 questions (no negative marking), attempt every single question even if unsure — intelligent guessing can add 10-15 marks.',
      'Practice pen-and-paper mock tests since WBJEE is offline. Your JEE online practice doesn\'t fully prepare you for OMR-based exams.',
      'If preparing for both JEE Main and WBJEE, your JEE prep covers 85% of WBJEE. Add 3-4 weeks of WBJEE-specific mock practice.',
      'Focus on NCERT + HC Verma (Physics), Morrison Boyd (Organic Chemistry), and RD Sharma/Arihant (Mathematics) for WBJEE.',
      'Previous 10 years\' WBJEE papers are essential — question patterns repeat frequently.',
    ],
    whyMindPeak: `MindPeak mentors create a combined JEE Main + WBJEE strategy for West Bengal students. Since WBJEE gives 50% weightage to Mathematics, your mentor designs a math-heavy preparation plan while maintaining JEE Main balance. Our offline mock test practice ensures you're comfortable with OMR sheets, and our category-wise strategy maximizes marks from no-negative-marking questions. MindPeak students from Kolkata have consistently secured top 100 ranks in WBJEE.`,
    faqs: [
      { q: 'Is WBJEE easier than JEE Main?', a: 'Yes, WBJEE is generally easier than JEE Main. The questions are closer to CBSE board exam difficulty with some application-based problems. However, competition is fierce for top colleges like Jadavpur University, where you need 95+ percentile.' },
      { q: 'Can I get into Jadavpur University through WBJEE?', a: 'Yes, Jadavpur University admissions for engineering are primarily through WBJEE. For CS at JU, you typically need a rank within top 200-300 in WBJEE. JU is considered among the top 15 engineering colleges in India.' },
      { q: 'Should I prepare separately for WBJEE if I\'m already preparing for JEE Main?', a: 'Not separately, but you should practice WBJEE-specific mock tests (offline, OMR-based) and understand the unique 3-category marking scheme. Your JEE Main preparation covers 85% of WBJEE syllabus.' },
      { q: 'Is WBJEE only for West Bengal students?', a: 'No, WBJEE is open to students from all states. There is no domicile requirement. However, the colleges available through WBJEE are primarily in West Bengal.' },
      { q: 'What is the WBJEE exam pattern?', a: 'WBJEE has 2 papers: Paper 1 (Mathematics — 75 questions, 100 marks, 2 hours) and Paper 2 (Physics + Chemistry — 80 questions, 100 marks, 2 hours). Total: 155 questions, 200 marks, 4 hours.' },
      { q: 'How does WBJEE negative marking work?', a: 'Only Category 1 questions (1 mark each) have −0.25 negative marking. Category 2 (2 marks) and Category 3 (2 marks) have NO negative marking, so you should attempt all of them.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // MHT-CET — Maharashtra Common Entrance Test
  // ═══════════════════════════════════════════════════
  {
    slug: 'mht-cet',
    name: 'MHT-CET',
    fullName: 'Maharashtra Common Entrance Test',
    category: 'state',
    conductedBy: 'State Common Entrance Test Cell, Maharashtra',
    overlapsWith: 'both',
    overlapPercent: 75,
    totalMarks: 200,
    duration: '3 hours 10 min (90 min PCM + 100 min Bio)',
    totalQuestions: 150,
    negativeMarking: 'No negative marking',
    mode: 'online',
    examMonth: 'April-May',
    eligibility: 'Class 12 with PCM/PCB, Maharashtra domicile preferred but not required',
    topColleges: ['COEP Pune', 'VJTI Mumbai', 'ICT Mumbai (formerly UDCT)', 'Government Engineering College Aurangabad', 'PICT Pune', 'MIT Pune'],
    subjects: [
      { name: 'Physics', chapters: ['Rotational Motion', 'Oscillations', 'Electrostatics', 'Current Electricity', 'Magnetic Fields', 'EMI', 'Semiconductors', 'Communication'], weightagePercent: 33 },
      { name: 'Chemistry', chapters: ['Solid State', 'Solutions', 'Electrochemistry', 'Chemical Kinetics', 'Surface Chemistry', 'Coordination Chemistry', 'Organic Compounds'], weightagePercent: 33 },
      { name: 'Mathematics / Biology', chapters: ['Differentiation', 'Integration', 'Differential Equations', 'Probability', 'Vectors', 'Line & Plane', 'Linear Programming'], weightagePercent: 34 },
    ],
    keyDifferences: [
      'MHT-CET has NO negative marking, unlike JEE Main (−1) and NEET (−1). This fundamentally changes strategy — you should attempt every single question.',
      'MHT-CET syllabus is based on Maharashtra State Board Class 11 and 12 syllabus, which differs from CBSE in topic organization and depth.',
      'MHT-CET gives 20% weightage to Class 11 topics and 80% to Class 12 — heavily skewed toward Class 12 unlike JEE which tests both years equally.',
      'MHT-CET Physics and Chemistry questions are at JEE Main difficulty (2 marks each), but Mathematics questions are at board-level difficulty (1 mark each).',
      'MHT-CET is used for BOTH engineering and pharmacy/medical admissions in Maharashtra — students can appear for PCM and PCB sections.',
      'The exam serves as the primary gateway to Maharashtra\'s top engineering colleges (COEP, VJTI, ICT) and medical colleges.',
    ],
    prepStrategy: [
      'Since there\'s NO negative marking, attempt every question. Intelligent guessing can add 15-20 marks without any risk.',
      'Focus 80% of preparation on Class 12 topics since they carry 80% weightage.',
      'For Mathematics, board-level practice is sufficient. Don\'t waste time on JEE Advanced level problems.',
      'For Physics and Chemistry, JEE Main level preparation covers MHT-CET. Practice MHT-CET-specific mock tests for familiarity.',
      'Maharashtra State Board students have a slight advantage — study from state board textbooks AND NCERT for comprehensive coverage.',
      'Previous year MHT-CET papers (last 5 years) are essential — patterns repeat, especially in Chemistry.',
    ],
    whyMindPeak: `MindPeak's 1-on-1 mentors design a combined JEE Main + MHT-CET strategy for Maharashtra students. Since MHT-CET has no negative marking and a Class 12-heavy syllabus, your mentor prioritizes Class 12 concepts while maintaining JEE readiness. Our mock tests simulate MHT-CET's unique format, and our no-negative-marking strategy training helps students score 15-20 marks extra through intelligent attempts. MindPeak students from Maharashtra consistently secure ranks within top 500 in MHT-CET.`,
    faqs: [
      { q: 'Is MHT-CET easier than JEE Main?', a: 'MHT-CET Mathematics is significantly easier than JEE Main (board level). Physics and Chemistry are at a similar difficulty level to JEE Main but with no negative marking, making the overall exam more scoring. The key challenge is speed and accuracy.' },
      { q: 'Can CBSE students appear for MHT-CET?', a: 'Yes, CBSE students can appear for MHT-CET. While the syllabus is based on Maharashtra board, 80-85% overlaps with CBSE. CBSE students should review Maharashtra-specific topics in Chemistry and Biology.' },
      { q: 'What MHT-CET score is needed for COEP CS?', a: `For COEP Pune Computer Science, you typically need a percentile of 98.5+ in MHT-CET. For VJTI Mumbai CS, 99+ percentile is usually required. These cutoffs vary slightly each year.` },
      { q: 'Should I focus on JEE Main or MHT-CET?', a: 'Prepare for JEE Main as your primary exam — it automatically covers MHT-CET Physics and Chemistry. Add 3-4 weeks of MHT-CET-specific Mathematics practice (board level) and mock tests. MindPeak helps you balance both without separate coaching.' },
      { q: 'Is MHT-CET only for Maharashtra students?', a: 'MHT-CET is open to all Indian students. However, Maharashtra domicile students get preference in seat allocation under state quota (about 85% of seats). All-India students compete for the remaining seats.' },
      { q: 'Does MHT-CET have negative marking?', a: 'No, MHT-CET has absolutely no negative marking. This is one of its biggest advantages — you should attempt every question, even if you need to make an educated guess.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // KVPY / INSPIRE — Kishore Vaigyanik Protsahan Yojana
  // ═══════════════════════════════════════════════════
  {
    slug: 'kvpy',
    name: 'KVPY',
    fullName: 'Kishore Vaigyanik Protsahan Yojana (now INSPIRE)',
    category: 'aptitude',
    conductedBy: 'Indian Institute of Science (IISc) Bangalore / DST',
    overlapsWith: 'jee',
    overlapPercent: 65,
    totalMarks: 100,
    duration: '3 hours',
    totalQuestions: 80,
    negativeMarking: '−0.25 for wrong answers',
    mode: 'offline',
    examMonth: 'January',
    eligibility: 'Class 11, 12, or 1st year B.Sc students with minimum 60% in science subjects',
    topColleges: ['IISc Bangalore', 'IISERs (Pune, Mohali, Kolkata, Thiruvananthapuram, Bhopal, Tirupati, Berhampur)'],
    subjects: [
      {
        name: 'Physics',
        chapters: ['Mechanics', 'Thermodynamics', 'Optics', 'Electromagnetism', 'Modern Physics', 'Waves'],
        weightagePercent: 25,
      },
      {
        name: 'Chemistry',
        chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Analytical Chemistry'],
        weightagePercent: 25,
      },
      {
        name: 'Mathematics',
        chapters: ['Number Theory', 'Combinatorics', 'Algebra', 'Geometry', 'Calculus'],
        weightagePercent: 25,
        uniqueTopics: ['Number Theory', 'Combinatorics', 'Proof-based problems', 'Olympiad-style reasoning'],
      },
      {
        name: 'Biology',
        chapters: ['Cell Biology', 'Genetics', 'Ecology', 'Evolution', 'Human Physiology', 'Plant Biology'],
        weightagePercent: 25,
      },
    ],
    keyDifferences: [
      'KVPY/INSPIRE tests scientific aptitude and reasoning, not just problem-solving. Questions often require creative thinking and understanding of fundamental principles rather than formula application.',
      'KVPY includes Biology as a compulsory section for SA stream (Class 11), unlike JEE which is purely PCM. Students must study all 4 sciences.',
      'Questions are conceptual and often tricky — a single KVPY question may take 5-10 minutes of deep thinking, unlike JEE where 2-3 minutes per question is normal.',
      'KVPY is a scholarship exam that also serves as an entrance to IISc Bangalore and IISERs — these are research-focused institutions, fundamentally different from IITs.',
      'The interview round (for shortlisted candidates) contributes to the final selection — no other engineering/medical entrance exam has an interview component.',
      'KVPY Mathematics includes Number Theory and Combinatorics at a level much deeper than JEE Main, closer to Olympiad difficulty.',
    ],
    prepStrategy: [
      'Build strong conceptual understanding rather than formulaic problem-solving. KVPY rewards students who truly understand physics principles over those who can plug numbers into equations.',
      'Practice Olympiad-level problems in Mathematics — KVPY Maths is closer to RMO difficulty than JEE Main.',
      'Read popular science books (Feynman Lectures, Brief History of Time) to develop scientific intuition that helps with KVPY\'s reasoning-based questions.',
      'For Biology, focus on NCERT deeply — every concept, every diagram. KVPY Biology questions test understanding, not memorization.',
      'Practice with KVPY previous year papers (2010-2022) — the question style is unique and you need familiarity.',
      'Prepare for the interview round: be ready to explain concepts, derive formulas from first principles, and discuss real-world applications of science.',
    ],
    whyMindPeak: `MindPeak's research-oriented mentors help KVPY aspirants develop the deep conceptual clarity needed for this aptitude exam. Unlike JEE coaching that focuses on speed and accuracy, our KVPY preparation emphasizes understanding first principles, scientific reasoning, and creative problem-solving. Mentors from IISc and IISER backgrounds guide students through Olympiad-level problems and interview preparation — an area where no batch coaching can provide adequate support.`,
    faqs: [
      { q: 'Is KVPY still conducted?', a: `KVPY in its original form was discontinued after 2022. However, the INSPIRE scholarship and fellowship program by DST continues with similar objectives. IISc and IISERs now primarily use JEE Advanced, NEET, and their own aptitude tests for admissions. MindPeak prepares students for all these pathways.` },
      { q: 'Is KVPY harder than JEE Main?', a: 'KVPY questions are conceptually harder and more creative than JEE Main, but there are fewer questions and no time pressure. KVPY tests depth of understanding while JEE Main tests breadth and speed. A student scoring 99 percentile in JEE Main might find KVPY challenging without specific preparation.' },
      { q: 'What is IISc Bangalore?', a: 'IISc (Indian Institute of Science) Bangalore is India\'s top research institution, consistently ranked #1 in India for research output. It offers integrated B.Sc-M.Sc programs in fundamental sciences. It\'s very different from IITs — focused on research and academics rather than engineering placement.' },
      { q: 'Can JEE students crack KVPY without extra preparation?', a: 'JEE preparation covers about 60-65% of KVPY syllabus. However, KVPY requires additional preparation in Biology, Number Theory, and conceptual reasoning. About 3-4 months of dedicated KVPY-specific practice is recommended alongside JEE coaching.' },
      { q: 'What is the KVPY fellowship amount?', a: 'KVPY fellows receive ₹5,000/month during B.Sc/B.S/integrated M.S and ₹7,000/month during M.Sc. An annual contingency grant of ₹20,000-28,000 is also provided. The fellowship continues till pre-PhD level, making it one of the most generous science scholarships.' },
      { q: 'How to prepare for KVPY interview?', a: 'KVPY interviews test your understanding of fundamental concepts, ability to derive formulas, and scientific curiosity. Practice explaining concepts to others, solve "why" questions (e.g., "why is the sky blue?"), and be ready to think on your feet. MindPeak mentors conduct mock interviews.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // ISI — Indian Statistical Institute Entrance
  // ═══════════════════════════════════════════════════
  {
    slug: 'isi-entrance',
    name: 'ISI Entrance',
    fullName: 'Indian Statistical Institute Admission Test',
    category: 'aptitude',
    conductedBy: 'Indian Statistical Institute',
    overlapsWith: 'jee',
    overlapPercent: 50,
    totalMarks: 100,
    duration: '2 hours (objective) + 2 hours (subjective)',
    totalQuestions: 60,
    negativeMarking: 'No negative marking in objective; subjective is graded',
    mode: 'offline',
    examMonth: 'May',
    eligibility: 'Class 12 pass with Mathematics',
    topColleges: ['ISI Kolkata', 'ISI Delhi', 'ISI Bangalore', 'ISI Chennai', 'ISI Tezpur'],
    subjects: [
      {
        name: 'Mathematics',
        chapters: ['Combinatorics', 'Number Theory', 'Algebra', 'Real Analysis', 'Geometry', 'Probability', 'Sequences & Series'],
        weightagePercent: 70,
        uniqueTopics: ['Proof-based problems', 'Olympiad Combinatorics', 'Graph Theory basics', 'Pigeonhole Principle', 'Mathematical Induction proofs'],
      },
      {
        name: 'Statistics & Probability',
        chapters: ['Probability Theory', 'Random Variables', 'Distributions', 'Expectation', 'Descriptive Statistics'],
        weightagePercent: 20,
        uniqueTopics: ['Formal Probability Theory', 'Random Variable distributions', 'Bayesian reasoning'],
      },
      {
        name: 'Logical Reasoning',
        chapters: ['Mathematical Logic', 'Set Theory', 'Functions', 'Relations'],
        weightagePercent: 10,
      },
    ],
    keyDifferences: [
      'ISI entrance is 70% Mathematics with a focus on proof-based, Olympiad-style problems — completely different from JEE which tests computational speed.',
      'ISI has a SUBJECTIVE paper where you write detailed proofs and solutions — JEE is entirely objective (MCQ/integer type).',
      'ISI tests Mathematical maturity: ability to construct proofs, reason abstractly, and think creatively. JEE tests ability to solve problems quickly.',
      'ISI includes formal Probability and Statistics at a level not covered in JEE — students need to study probability distributions, random variables, and expectation.',
      'The difficulty of ISI Mathematics is between JEE Advanced and International Mathematical Olympiad (IMO).',
      'ISI doesn\'t test Physics or Chemistry at all — it\'s purely mathematics and statistics.',
    ],
    prepStrategy: [
      'Master proof techniques: mathematical induction, contradiction, contrapositive, and direct proofs. Every subjective question requires a rigorous proof.',
      'Study from "Challenge and Thrill of Pre-College Mathematics" by Pranesachar — it\'s considered the gold standard for ISI preparation.',
      'Solve ISI previous year papers (last 15 years) — they\'re freely available on the ISI website and the question style is consistent.',
      'Strengthen Combinatorics and Number Theory beyond JEE level — these topics carry 30-40% weightage and need Olympiad-level preparation.',
      'Practice writing subjective solutions: clarity of argument, logical flow, and mathematical rigor are all graded.',
      'Join online communities (AoPS, ISI preparation groups) to discuss problems and learn different approaches.',
    ],
    whyMindPeak: `MindPeak connects ISI aspirants with mentors who are ISI/CMI alumni or have strong Olympiad backgrounds. Our 1-on-1 sessions focus on building proof-writing skills, Olympiad-level problem-solving in Combinatorics and Number Theory, and developing the mathematical maturity ISI demands. This personalized guidance is impossible in batch coaching, where ISI preparation is treated as an afterthought.`,
    faqs: [
      { q: 'Is ISI harder than IIT?', a: 'The ISI entrance test (for B.Stat/B.Math) is mathematically harder than JEE Advanced in terms of conceptual depth. However, it only tests Mathematics, while JEE tests Physics and Chemistry too. A JEE Advanced topper may struggle with ISI without specific preparation, and vice versa.' },
      { q: 'What is ISI famous for?', a: 'ISI is the world\'s first and India\'s premier institution for Statistics and Mathematics. Founded by P.C. Mahalanobis, ISI alumni have founded or led major global companies, research institutions, and policy organizations. ISI Kolkata\'s B.Stat/B.Math programs are considered equivalent to the best mathematics programs globally.' },
      { q: 'What is the ISI B.Stat program?', a: 'B.Stat (Bachelor of Statistics) at ISI is a 3-year honors program covering advanced mathematics, probability, statistics, and computing. It\'s considered the most rigorous undergraduate statistics program in India, with graduates being recruited by Wall Street firms, Google Research, and top PhD programs worldwide.' },
      { q: 'Can JEE students crack ISI?', a: 'JEE preparation covers about 40-50% of ISI syllabus (basic algebra, calculus). However, ISI requires additional deep preparation in proof-based problems, Olympiad combinatorics, number theory, and formal probability — areas not covered in JEE at all. 4-6 months of dedicated ISI preparation alongside JEE is recommended.' },
      { q: 'What career options after ISI?', a: 'ISI graduates have exceptional career prospects: data science at top tech companies (Google, Amazon, Microsoft), quantitative roles at investment banks (Goldman Sachs, Morgan Stanley), research positions at global universities, and government statistical services. Average packages are comparable to IIT Bombay CS.' },
      { q: 'Is there an interview for ISI admission?', a: 'Yes, shortlisted candidates (based on written test performance) are called for a personal interview at ISI Kolkata. The interview tests mathematical thinking, problem-solving approach, and genuine interest in statistics/mathematics.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // COMEDK — Consortium of Medical Engineering Dental Colleges
  // ═══════════════════════════════════════════════════
  {
    slug: 'comedk',
    name: 'COMEDK',
    fullName: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka',
    category: 'state',
    conductedBy: 'COMEDK UGET',
    overlapsWith: 'jee',
    overlapPercent: 80,
    totalMarks: 180,
    duration: '3 hours',
    totalQuestions: 180,
    negativeMarking: 'No negative marking',
    mode: 'online',
    examMonth: 'May',
    eligibility: 'Class 12 with PCM, minimum 45% aggregate (40% for reserved)',
    topColleges: ['RV College of Engineering', 'BMS College of Engineering', 'MS Ramaiah Institute', 'PES University', 'Dayananda Sagar College'],
    subjects: [
      { name: 'Physics', chapters: ['Mechanics', 'Electrodynamics', 'Optics', 'Modern Physics', 'Thermodynamics', 'Waves'], weightagePercent: 33 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'], weightagePercent: 33 },
      { name: 'Mathematics', chapters: ['Algebra', 'Calculus', 'Coordinate Geometry', 'Trigonometry', 'Probability', 'Vectors'], weightagePercent: 34 },
    ],
    keyDifferences: [
      'COMEDK has NO negative marking — attempt every question. This is the single biggest strategic difference from JEE Main.',
      'COMEDK difficulty is between CBSE boards and JEE Main — easier than JEE but requires conceptual understanding.',
      'COMEDK is specifically for private engineering colleges in Karnataka, while JEE Main covers NITs and IIITs nationwide.',
      'All 180 questions carry 1 mark each — no differential marking, making every question equally important.',
      'COMEDK is particularly important for students targeting top Bangalore engineering colleges (RVCE, BMS, MSRIT, PESIT) which offer excellent placement statistics.',
      'COMEDK counseling is separate from JoSAA — students need to register separately and the process is managed by the COMEDK consortium.',
    ],
    prepStrategy: [
      'JEE Main preparation covers 80% of COMEDK. Add 2-3 weeks of COMEDK-specific mock tests to build familiarity.',
      'Since there\'s no negative marking, develop a strategy to attempt all 180 questions. Practice speed to complete within 2.5 hours, leaving 30 minutes for review.',
      'Focus on NCERT + JEE Main level problems. Don\'t waste time on JEE Advanced level difficulty.',
      'Karnataka state board students: supplement your board textbooks with NCERT for comprehensive coverage.',
      'Previous year COMEDK papers are highly predictive — solve last 8-10 years\' papers.',
      'Physics Numericals and Chemistry MCQs carry the most marks — practice these extensively.',
    ],
    whyMindPeak: `MindPeak's 1-on-1 coaching gives Karnataka students a dual advantage: JEE Main readiness plus COMEDK-specific optimization. Your mentor builds a combined strategy where JEE Main preparation serves as the foundation, and COMEDK mock tests with no-negative-marking strategies add 15-20 marks through intelligent attempting. Our students from Bangalore regularly secure top 200 ranks in COMEDK.`,
    faqs: [
      { q: 'Is COMEDK easier than JEE Main?', a: 'Yes, COMEDK is easier than JEE Main. Questions are at an intermediate level between CBSE boards and JEE Main. However, the lack of negative marking makes it more scoring if you have a good attempt-all strategy.' },
      { q: 'Which are the best colleges through COMEDK?', a: 'RV College of Engineering (RVCE), BMS College of Engineering, MS Ramaiah Institute of Technology (MSRIT), PES University, and Dayananda Sagar are the top choices. RVCE and BMS CS placements compete with mid-tier NITs.' },
      { q: 'Is COMEDK only for Karnataka students?', a: 'No, COMEDK is open to students from all states. However, the colleges available are all in Karnataka, primarily in Bangalore. There is no state domicile requirement.' },
      { q: 'What COMEDK rank is needed for RVCE CS?', a: 'For RVCE Computer Science, you typically need a rank within top 300-500. For BMS CS, top 600-800. For MSRIT CS, top 1000-1200. These cutoffs vary each year.' },
      { q: 'Can I appear for both JEE Main and COMEDK?', a: 'Yes, most Karnataka engineering aspirants appear for both JEE Main and COMEDK. The exams are on different dates, and JEE preparation covers most of COMEDK syllabus.' },
      { q: 'Does COMEDK have negative marking?', a: 'No, COMEDK has absolutely no negative marking. This is a major advantage — you should attempt all 180 questions. Even educated guessing can improve your score by 10-15 marks.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // VITEEE — VIT Engineering Entrance Exam
  // ═══════════════════════════════════════════════════
  {
    slug: 'viteee',
    name: 'VITEEE',
    fullName: 'Vellore Institute of Technology Engineering Entrance Examination',
    category: 'engineering',
    conductedBy: 'VIT University',
    overlapsWith: 'jee',
    overlapPercent: 75,
    totalMarks: 125,
    duration: '2 hours 30 minutes',
    totalQuestions: 125,
    negativeMarking: 'No negative marking',
    mode: 'online',
    examMonth: 'April-May',
    eligibility: 'Class 12 with PCM/PCB, minimum 60% aggregate',
    topColleges: ['VIT Vellore', 'VIT Chennai', 'VIT Bhopal', 'VIT AP'],
    subjects: [
      { name: 'Physics', chapters: ['Mechanics', 'Electrodynamics', 'Optics', 'Modern Physics', 'Thermodynamics'], weightagePercent: 28 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Environmental Chemistry'], weightagePercent: 28 },
      { name: 'Mathematics', chapters: ['Algebra', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Probability'], weightagePercent: 28 },
      {
        name: 'Aptitude',
        chapters: ['Verbal Reasoning', 'Quantitative Aptitude', 'Logical Reasoning', 'Data Sufficiency'],
        weightagePercent: 16,
        uniqueTopics: ['Aptitude & Logical Reasoning', 'Data Sufficiency', 'Verbal Reasoning'],
      },
    ],
    keyDifferences: [
      'VITEEE includes an Aptitude section (Logical Reasoning, Verbal, Quantitative) not found in JEE Main — worth ~20 marks.',
      'No negative marking — attempt every question for maximum score.',
      'VITEEE is conducted over a 2-3 week window — you can choose your exam date, unlike JEE Main\'s fixed dates.',
      'Difficulty is below JEE Main — questions are NCERT to moderate level.',
      'VIT Vellore CS is highly competitive (needs 110+/125) despite the exam being easier, because of the large number of applicants.',
      'VITEEE allows both PCM and PCB students — medical aspirants can use it as a backup for biotech/bioinformatics at VIT.',
    ],
    prepStrategy: [
      'JEE Main preparation is more than sufficient for VITEEE PCM sections. Focus on NCERT-level concepts.',
      'Practice aptitude questions (similar to CAT verbal/LR) for 2-3 weeks before VITEEE.',
      'No negative marking means attempt all 125 questions. Build speed to finish in 2 hours, review in 30 minutes.',
      'Choose an early exam date in the VITEEE window for more course/campus options during counseling.',
      'VIT gives preference to VITEEE toppers for scholarships — scoring 115+/125 can get you full tuition waiver.',
      'Focus on accuracy over difficulty — VITEEE rewards students who solve easy-medium questions correctly.',
    ],
    whyMindPeak: `MindPeak's JEE coaching inherently prepares students for VITEEE's PCM sections. Your mentor adds targeted aptitude training (2-3 weeks before VITEEE) to ensure you ace the unique reasoning section. With no negative marking optimization and early exam date strategy, MindPeak students consistently score 110+ in VITEEE, securing CS and ECE at VIT Vellore.`,
    faqs: [
      { q: 'Is VITEEE worth appearing for?', a: 'Absolutely. VIT Vellore is consistently ranked among India\'s top 15-20 engineering colleges. VIT CS placements include Google, Microsoft, Amazon with packages of 20-40 LPA. It\'s an excellent backup to NITs and a strong choice in its own right.' },
      { q: 'What VITEEE score is needed for VIT Vellore CS?', a: 'For VIT Vellore Computer Science, you need 108-115/125. For Electronics, 100-108. Chennai campus cutoffs are 5-8 marks lower.' },
      { q: 'Is VITEEE easier than JEE Main?', a: 'Yes, VITEEE is noticeably easier than JEE Main. Most questions are at NCERT to slightly-above-NCERT level. However, time management is important as you get about 1.2 minutes per question.' },
      { q: 'Does VITEEE have negative marking?', a: 'No, VITEEE has no negative marking. Attempt all 125 questions for maximum score.' },
      { q: 'Can I get scholarship at VIT through VITEEE?', a: 'Yes, VIT offers merit scholarships based on VITEEE scores: 100% tuition waiver (top ranks), 75%, 50%, and 25% waivers. Scoring 115+/125 typically qualifies for significant scholarships.' },
      { q: 'When is VITEEE conducted?', a: `VITEEE is typically conducted over a 2-3 week window in April-May. Students can choose their preferred date and slot during registration.` },
    ],
  },

  // ═══════════════════════════════════════════════════
  // SRMJEEE — SRM Joint Engineering Entrance Exam
  // ═══════════════════════════════════════════════════
  {
    slug: 'srmjeee',
    name: 'SRMJEEE',
    fullName: 'SRM Joint Engineering Entrance Examination',
    category: 'engineering',
    conductedBy: 'SRM Institute of Science and Technology',
    overlapsWith: 'jee',
    overlapPercent: 75,
    totalMarks: 125,
    duration: '2 hours 30 minutes',
    totalQuestions: 125,
    negativeMarking: 'No negative marking',
    mode: 'online',
    examMonth: 'April',
    eligibility: 'Class 12 with PCM/PCB, minimum 50% in PCM',
    topColleges: ['SRM KTR (Kattankulathur)', 'SRM Ramapuram', 'SRM NCR', 'SRM AP', 'SRM Sikkim'],
    subjects: [
      { name: 'Physics', chapters: ['Mechanics', 'Electromagnetism', 'Optics', 'Modern Physics', 'Thermodynamics'], weightagePercent: 28 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'], weightagePercent: 28 },
      { name: 'Mathematics / Biology', chapters: ['Algebra', 'Calculus', 'Coordinate Geometry', 'Trigonometry'], weightagePercent: 28 },
      { name: 'English & Aptitude', chapters: ['Grammar', 'Comprehension', 'Verbal Ability', 'Quantitative Aptitude'], weightagePercent: 16, uniqueTopics: ['English Grammar', 'Comprehension', 'Aptitude'] },
    ],
    keyDifferences: [
      'SRMJEEE includes English and Aptitude sections (~20 marks) not present in JEE Main.',
      'No negative marking — attempt all questions.',
      'SRMJEEE is conducted in multiple phases over 3-4 weeks, giving multiple chances to appear.',
      'Difficulty is at CBSE board to slightly above board level — significantly easier than JEE Main.',
      'SRM KTR (Kattankulathur) is the primary campus — cutoffs and placements vary significantly across campuses.',
      'SRMJEEE accepts both PCM and PCB students, making it accessible to both engineering and medical aspirants.',
    ],
    prepStrategy: [
      'NCERT + basic JEE preparation is more than enough for SRMJEEE PCM sections.',
      'Practice English comprehension and basic aptitude for 1-2 weeks before the exam.',
      'No negative marking — attempt every question. Even random guessing has a 25% success rate.',
      'SRM offers early admission based on Class 12 marks for some branches — check if you qualify before SRMJEEE.',
      'Focus on solving previous year SRMJEEE papers — patterns are very predictable.',
      'Choose Phase 1 of SRMJEEE for maximum seat availability in counseling.',
    ],
    whyMindPeak: `MindPeak students appearing for SRMJEEE are already over-prepared through their JEE coaching. Our mentors ensure the English and Aptitude sections are covered with 1-2 weeks of targeted practice. With no negative marking strategy training and previous year paper analysis, MindPeak students easily score 100+/125, securing CS at SRM KTR.`,
    faqs: [
      { q: 'Is SRM a good engineering college?', a: 'SRM KTR (Kattankulathur campus) is among India\'s top 20-25 private engineering colleges. CS and IT placements include Amazon, TCS, Infosys, Cognizant with average packages of 6-8 LPA. The brand value is recognized by major recruiters.' },
      { q: 'Is SRMJEEE easy?', a: 'Yes, SRMJEEE is one of the easier engineering entrance exams. Questions are at CBSE board to slightly above board level. With JEE preparation, scoring 100+/125 is very achievable.' },
      { q: 'What score is needed for SRM KTR CS?', a: 'For SRM Kattankulathur CS, you typically need 95-105/125 in Phase 1. Cutoffs for later phases may be slightly higher due to fewer remaining seats.' },
      { q: 'Does SRMJEEE have negative marking?', a: 'No, SRMJEEE has no negative marking at all.' },
      { q: 'How many times can I appear for SRMJEEE?', a: 'SRMJEEE is conducted in multiple phases (3-4). You can appear in any one phase. There is no multiple attempt option within the same year.' },
      { q: 'Is SRM better than VIT?', a: 'VIT Vellore is generally ranked higher than SRM in national rankings and placements. However, SRM KTR offers competitive education and good placements. For CS specifically, both are strong choices among private universities.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // KCET — Karnataka Common Entrance Test
  // ═══════════════════════════════════════════════════
  {
    slug: 'kcet',
    name: 'KCET',
    fullName: 'Karnataka Common Entrance Test',
    category: 'state',
    conductedBy: 'Karnataka Examinations Authority (KEA)',
    overlapsWith: 'both',
    overlapPercent: 80,
    totalMarks: 180,
    duration: '80 minutes per paper',
    totalQuestions: 180,
    negativeMarking: 'No negative marking',
    mode: 'offline',
    examMonth: 'April-May',
    eligibility: 'Class 12 with PCM/PCB, Karnataka domicile or studied in Karnataka for 7+ years',
    topColleges: ['UVCE Bangalore', 'NIE Mysore', 'SJCE Mysore', 'BMS College', 'RVCE (through management quota)'],
    subjects: [
      { name: 'Physics', chapters: ['Mechanics', 'Electrodynamics', 'Optics', 'Modern Physics', 'Thermodynamics', 'Waves'], weightagePercent: 25 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Environmental Chemistry'], weightagePercent: 25 },
      { name: 'Mathematics', chapters: ['Algebra', 'Calculus', 'Coordinate Geometry', 'Trigonometry', 'Probability', 'Vectors', '3D'], weightagePercent: 25 },
      { name: 'Biology', chapters: ['Botany', 'Zoology', 'Genetics', 'Ecology', 'Biotechnology'], weightagePercent: 25 },
    ],
    keyDifferences: [
      'KCET is an OFFLINE (pen-and-paper) exam — practice OMR-based answering unlike JEE\'s computer-based format.',
      'KCET has NO negative marking — attempt every question.',
      'KCET tests all 4 subjects (PCM for engineering, PCB for medical) separately — unlike JEE which combines them.',
      'KCET gives 50% weightage to entrance test and 50% to Class 12 board marks — board performance directly affects your rank.',
      'KCET is primarily for Karnataka students — domicile or 7-year study requirement limits the candidate pool.',
      'KCET difficulty is at PU (Pre-University) board level — easier than both JEE Main and NEET.',
      'KCET ranks are used for both engineering AND medical admissions in Karnataka government colleges.',
    ],
    prepStrategy: [
      'Since KCET gives 50% weightage to board marks, maintain excellent performance in PU/CBSE board exams alongside KCET preparation.',
      'PU board textbooks + NCERT cover 95% of KCET syllabus. Don\'t use reference books meant for JEE/NEET.',
      'No negative marking — attempt all 60 questions in each subject. Practice speed to finish each paper in 60 minutes, review in 20 minutes.',
      'For students also preparing for JEE/NEET: your JEE/NEET prep more than covers KCET. Focus on board marks and KCET mock tests.',
      'Solve last 10 years KCET papers — question patterns are repetitive and predictable.',
      'Biology section is compulsory for medical aspirants — prepare Botany and Zoology from NCERT and PU textbooks.',
    ],
    whyMindPeak: `MindPeak's Karnataka students get a triple advantage: JEE/NEET concept mastery, board exam excellence (critical for KCET's 50% board weightage), and KCET-specific mock test training. Your 1-on-1 mentor balances PU board preparation with competitive exam coaching — ensuring high board marks AND high KCET scores. This dual focus is impossible in batch coaching where board prep is ignored.`,
    faqs: [
      { q: 'Is KCET easier than JEE Main?', a: 'Yes, KCET is significantly easier than JEE Main. Questions are at PU board level. However, since 50% weightage goes to board marks, students need strong board performance alongside a good KCET score.' },
      { q: 'Do CBSE students have a disadvantage in KCET?', a: 'Not in the entrance test, but board mark normalization can be tricky. CBSE students studying in Karnataka can appear for KCET. The entrance test covers PU/CBSE-equivalent syllabus.' },
      { q: 'What KCET rank is needed for CS in top Karnataka colleges?', a: 'For UVCE Bangalore CS, you need top 200 rank. For NIE Mysore CS, top 1000. For SJCE Mysore CS, top 1500. Government seat availability depends on category and quota.' },
      { q: 'Is KCET only for Karnataka students?', a: 'Yes, KCET requires Karnataka domicile or completion of 1st and 2nd PUC (equivalent of Class 11-12) in Karnataka. It\'s not open to students from other states.' },
      { q: 'Does KCET have negative marking?', a: 'No, KCET has no negative marking. Attempt every question for maximum score.' },
      { q: 'How are KCET ranks calculated?', a: 'KCET rank = 50% entrance test marks + 50% Class 12 (PU) board marks (after normalization). This means board exam performance is equally important as the entrance test.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // AP EAMCET / TS EAMCET
  // ═══════════════════════════════════════════════════
  {
    slug: 'ap-eamcet',
    name: 'AP EAMCET',
    fullName: 'Andhra Pradesh Engineering, Agriculture & Medical Common Entrance Test',
    category: 'state',
    conductedBy: 'JNTU (on behalf of APSCHE)',
    overlapsWith: 'both',
    overlapPercent: 80,
    totalMarks: 160,
    duration: '3 hours',
    totalQuestions: 160,
    negativeMarking: 'No negative marking',
    mode: 'online',
    examMonth: 'May-June',
    eligibility: 'Class 12 with PCM/PCB/MPC, AP/TS domicile or studied in AP/TS',
    topColleges: ['JNTU Hyderabad', 'JNTU Kakinada', 'Andhra University', 'SVNIT Surat (partial)', 'IIIT Nuzvid', 'IIIT Ongole'],
    subjects: [
      { name: 'Mathematics', chapters: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Probability', 'Vectors & 3D'], weightagePercent: 50 },
      { name: 'Physics', chapters: ['Mechanics', 'Electrostatics', 'Current Electricity', 'Optics', 'Modern Physics', 'Thermodynamics'], weightagePercent: 25 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Environmental Chemistry'], weightagePercent: 25 },
    ],
    keyDifferences: [
      'AP EAMCET gives 50% weightage to Mathematics (80 questions) — double that of Physics (40) and Chemistry (40). Math-heavy students have a clear advantage.',
      'No negative marking — attempt every question.',
      'AP EAMCET difficulty is between Intermediate (AP board) level and JEE Main — moderate difficulty.',
      'AP EAMCET is used for engineering AND agricultural science admissions in Andhra Pradesh.',
      'AP EAMCET rank determines admissions to 400+ engineering colleges in AP — the largest state-level engineering entrance.',
      'The exam pattern is similar for both AP EAMCET and TS EAMCET (Telangana), but they are separate exams with separate counseling.',
    ],
    prepStrategy: [
      'Mathematics carries 50% weightage — allocate proportional preparation time. Focus on Calculus (20 questions) and Algebra (15 questions).',
      'No negative marking — attempt all 160 questions. Build speed through timed practice.',
      'AP Intermediate textbooks + NCERT cover the entire syllabus. For competitive edge, add selected JEE Main problems.',
      'Previous year AP EAMCET papers (last 8 years) are essential — chapter-wise pattern analysis reveals high-frequency topics.',
      'For students also appearing for JEE Main: JEE prep covers AP EAMCET completely. Add 2 weeks of AP EAMCET mock practice.',
      'TS EAMCET preparation is nearly identical to AP EAMCET — prepare for both with the same study material.',
    ],
    whyMindPeak: `MindPeak mentors design AP/TS EAMCET strategy alongside JEE Main preparation for Telugu-speaking students. With 50% Mathematics weightage, your mentor prioritizes math-intensive preparation while ensuring Physics and Chemistry fundamentals are strong. Our no-negative-marking strategy and timed mock tests help students attempt all 160 questions confidently. MindPeak students from Hyderabad and Vijayawada have secured top 100 ranks in AP EAMCET.`,
    faqs: [
      { q: 'Is AP EAMCET easier than JEE Main?', a: 'Yes, AP EAMCET is easier than JEE Main. Questions are at Intermediate (AP board) to slightly above board level. The absence of negative marking makes it even more scoring.' },
      { q: 'What is the difference between AP EAMCET and TS EAMCET?', a: 'AP EAMCET is for Andhra Pradesh colleges and TS EAMCET is for Telangana colleges. The exam pattern, difficulty, and syllabus are nearly identical. Students from either state can appear for both exams.' },
      { q: 'What AP EAMCET rank is needed for JNTU CS?', a: 'For JNTU Hyderabad (main campus) CS, you need top 500 rank. For JNTU Kakinada CS, top 1500. For AU CS, top 2000. Private college cutoffs are more relaxed.' },
      { q: 'Should I prepare separately for AP EAMCET if preparing for JEE?', a: 'No separate preparation needed. JEE Main preparation more than covers AP EAMCET. Add 2 weeks of AP EAMCET mock tests for pattern familiarity and speed practice.' },
      { q: 'Does AP EAMCET have negative marking?', a: 'No, AP EAMCET has no negative marking. Attempt all 160 questions.' },
      { q: 'Is AP EAMCET valid for private colleges?', a: 'Yes, AP EAMCET rank is used for admission to both government and private engineering colleges in Andhra Pradesh. Most private colleges in AP also accept AP EAMCET scores.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // Science Olympiads (NSO, RMO, NSEP, NSEC, NSEB)
  // ═══════════════════════════════════════════════════
  {
    slug: 'olympiad',
    name: 'Science Olympiads',
    fullName: 'National Science Olympiads (NSEP, NSEC, NSEB, RMO, NSO)',
    category: 'olympiad',
    conductedBy: 'IAPT (Physics), IChO (Chemistry), HBCSE (Biology, Maths)',
    overlapsWith: 'both',
    overlapPercent: 55,
    totalMarks: 100,
    duration: '2-3 hours (varies)',
    totalQuestions: 50,
    negativeMarking: 'Varies by exam (NSEP: −1 for wrong)',
    mode: 'offline',
    examMonth: 'November-January (Stage 1)',
    eligibility: 'Class 11 or 12 students, Indian citizenship',
    topColleges: ['International Olympiad teams', 'Direct IISc admission', 'IISER admission', 'IIT interview bypass (for IOQM medalists)'],
    subjects: [
      {
        name: 'Physics (NSEP/INPhO/IPhO)',
        chapters: ['Classical Mechanics', 'Thermodynamics', 'Electrodynamics', 'Optics', 'Modern Physics', 'Experimental Physics'],
        weightagePercent: 25,
        uniqueTopics: ['Experimental Physics', 'Error Analysis', 'Advanced Classical Mechanics', 'Special Relativity basics'],
      },
      {
        name: 'Chemistry (NSEC/INChO/IChO)',
        chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Analytical Chemistry', 'Biochemistry basics'],
        weightagePercent: 25,
        uniqueTopics: ['Analytical Chemistry', 'Spectroscopy basics', 'Laboratory techniques', 'Reaction mechanisms at depth'],
      },
      {
        name: 'Mathematics (RMO/INMO/IMO)',
        chapters: ['Number Theory', 'Combinatorics', 'Geometry (Euclidean)', 'Algebra', 'Inequalities', 'Functional Equations'],
        weightagePercent: 25,
        uniqueTopics: ['Proof-based problems', 'Euclidean Geometry proofs', 'Functional Equations', 'Inequalities (AM-GM, Cauchy-Schwarz, Schur)'],
      },
      {
        name: 'Biology (NSEB/INBiO/IBO)',
        chapters: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology', 'Biochemistry', 'Plant & Animal Physiology'],
        weightagePercent: 25,
        uniqueTopics: ['Biochemistry at depth', 'Molecular Biology', 'Bioinformatics basics', 'Experimental Biology'],
      },
    ],
    keyDifferences: [
      'Olympiads test DEEP understanding and creative problem-solving — completely different from JEE/NEET\'s speed-accuracy format.',
      'Mathematics Olympiad (RMO/INMO) is entirely proof-based — no MCQs, no calculators, just rigorous mathematical proofs.',
      'Physics Olympiad (NSEP/INPhO) includes experimental physics — you may need to design and analyze actual experiments.',
      'Olympiad medals provide direct admission to IISc, IISERs, and can bypass JEE Advanced for some IIT programs.',
      'The difficulty is significantly higher than JEE Advanced — Olympiads represent the highest level of pre-college science.',
      'Olympiad preparation develops thinking skills that make JEE/NEET significantly easier as a side benefit.',
      'India sends teams of 4-6 students to International Olympiads each year — representing the nation at the highest level.',
    ],
    prepStrategy: [
      'Start with JEE/NEET foundation, then go significantly deeper. Olympiads require understanding at the level of introductory college courses.',
      'For Mathematics (RMO): Practice from "Mathematical Circles" by Fomin, "Problem Solving Strategies" by Engel, and Art of Problem Solving resources.',
      'For Physics (NSEP): Study from "Problems in General Physics" by Irodov and "An Introduction to Mechanics" by Kleppner & Kolenkow.',
      'For Chemistry (NSEC): Go beyond JEE syllabus into Atkins\' Physical Chemistry and Morrison & Boyd Organic Chemistry at depth.',
      'Join Olympiad training camps (HBCSE, regional math circles) for exposure to problem-solving culture.',
      'Practice previous year Olympiad papers from HBCSE — the transition from Stage 1 to Stage 2 requires a significant jump in difficulty.',
    ],
    whyMindPeak: `MindPeak's Olympiad preparation track connects students with mentors who are former International Olympiad medalists or have INPhO/INMO/INChO experience. Our 1-on-1 sessions focus on building the deep conceptual mastery and creative problem-solving skills that Olympiads demand. This individualized guidance is crucial — Olympiad preparation cannot be effectively done in batch coaching where the focus is on speed rather than depth.`,
    faqs: [
      // These three lead the array so they render in the comparison post
      // (generateExamComparisonPosts uses faqs.slice(0,4)) and its FAQPage
      // JSON-LD — targeting the GSC striking-distance cluster (2026-07-21):
      // "is nsep harder than jee advanced" (pos 13), "is nsec harder than jee
      // advanced" (15), "imo vs jee advanced" (27), "is nsep harder than jee
      // mains" (23).
      { q: 'Is NSEP harder than JEE Advanced?', a: 'It depends which stage you mean, and this is where most answers go wrong. NSEP (National Standard Examination in Physics) is the Stage 1 screening paper — a two-hour objective test on the same Class 11-12 syllabus JEE Advanced uses, and students who sit it usually rate the question level nearer JEE Main than JEE Advanced. Many JEE aspirants clear it with no olympiad-specific preparation. What is genuinely harder than JEE Advanced is Stage 2 (INPhO), which is subjective and demands multi-step derivations. Sources that flatly answer "yes" are describing the olympiad track as a whole, not the NSEP paper.' },
      { q: 'Is NSEC harder than JEE Advanced?', a: 'Same structure as physics. NSEC (National Standard Examination in Chemistry) is a Stage 1 objective screening paper that sits around JEE Main to JEE Advanced level, because it has to filter a very large pool. Stage 2 — INChO, conducted by HBCSE — is harder than JEE Advanced Chemistry, going deeper into mechanism, analytical chemistry and quantitative reasoning than JEE ever asks.' },
      { q: 'How do IMO and RMO (Maths Olympiad) compare to JEE Advanced?', a: 'The Maths Olympiad track (IOQM → RMO/INMO, and internationally IMO) is significantly harder than JEE Advanced Mathematics in problem depth: it tests proof-writing, number theory, combinatorics and functional equations that JEE never touches. JEE Advanced is more about fast, accurate application of a fixed syllabus. Different skills — Olympiad rewards creativity and rigour, JEE rewards speed and coverage.' },
      { q: 'Do Olympiad medals help in JEE/NEET?', a: 'Yes, significantly. INPhO/INChO/INMO medalists get direct admission to IISc and IISERs. IOQM (formerly RMO) top performers get advantages in JEE Advanced. More importantly, the deep understanding developed through Olympiad preparation makes JEE/NEET significantly easier.' },
      { q: 'When should I start Olympiad preparation?', a: 'Ideally from Class 9-10 for Mathematics Olympiad and Class 11 for Science Olympiads. Early start allows building the depth of understanding needed at each stage.' },
      { q: 'Can I prepare for Olympiads and JEE simultaneously?', a: 'Yes, but Olympiad preparation requires additional 1-2 hours daily beyond JEE coaching. The overlap is about 55% — JEE covers the basics, but Olympiads go much deeper. MindPeak mentors balance both tracks effectively.' },
      { q: 'What are the stages of Science Olympiads?', a: 'Stage 1: NSEP/NSEC/NSEB (national level, November). Stage 2: INPhO/INChO/INBiO (top ~300 from Stage 1, January-February). Stage 3: Training camp at HBCSE (top 30-40). Stage 4: International team selection (top 4-6 students).' },
      { q: 'Is Olympiad preparation useful even without medals?', a: 'Absolutely. Students who prepare for Olympiads develop superior analytical skills that translate to excellent JEE/NEET performance. Even clearing Stage 1 demonstrates strong fundamentals and looks great on college applications.' },
      { q: 'What books are recommended for Science Olympiads?', a: 'Physics: Irodov, Kleppner & Kolenkow. Chemistry: Atkins, Clayden. Mathematics: Engel, Arthur Engel. Biology: Campbell, Alberts. These are in addition to standard JEE/NEET preparation material.' },
    ],
  },

  // ═══════════════════════════════════════════════════
  // TS EAMCET — Telangana State EAMCET
  // ═══════════════════════════════════════════════════
  {
    slug: 'ts-eamcet',
    name: 'TS EAMCET',
    fullName: 'Telangana State Engineering, Agriculture & Medical Common Entrance Test',
    category: 'state',
    conductedBy: 'JNTU Hyderabad (on behalf of TSCHE)',
    overlapsWith: 'both',
    overlapPercent: 80,
    totalMarks: 160,
    duration: '3 hours',
    totalQuestions: 160,
    negativeMarking: 'No negative marking',
    mode: 'online',
    examMonth: 'May',
    eligibility: 'Class 12 with PCM/PCB, Telangana domicile or studied in TS',
    topColleges: ['JNTU Hyderabad', 'Osmania University', 'CBIT Hyderabad', 'Vasavi College', 'GRIET', 'VNRVJIET'],
    subjects: [
      { name: 'Mathematics', chapters: ['Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Vectors', 'Probability'], weightagePercent: 50 },
      { name: 'Physics', chapters: ['Mechanics', 'Electrostatics', 'Current Electricity', 'Optics', 'Modern Physics'], weightagePercent: 25 },
      { name: 'Chemistry', chapters: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry'], weightagePercent: 25 },
    ],
    keyDifferences: [
      'TS EAMCET is nearly identical to AP EAMCET in pattern — 160 questions, no negative marking, 50% Maths weightage.',
      'TS EAMCET is specifically for Telangana state college admissions, while AP EAMCET covers Andhra Pradesh.',
      'Hyderabad-based colleges (JNTU, Osmania, CBIT, Vasavi) are among the best accessible through TS EAMCET.',
      'No negative marking — attempt all questions.',
      'The competition pool is primarily Telangana students, making it less competitive than all-India exams for the same caliber of colleges.',
    ],
    prepStrategy: [
      'Identical preparation strategy to AP EAMCET — focus 50% effort on Mathematics.',
      'TS Intermediate textbooks + NCERT cover the syllabus. JEE Main preparation is more than sufficient.',
      'No negative marking — build speed to attempt all 160 questions comfortably.',
      'Practice TS EAMCET previous year papers — patterns overlap significantly with AP EAMCET papers too.',
      'For dual-state students: appear for both AP EAMCET and TS EAMCET for maximum college options.',
    ],
    whyMindPeak: `MindPeak helps Hyderabad and Telangana students ace TS EAMCET alongside JEE Main preparation. With 50% Maths weightage, your mentor designs a math-focused strategy while ensuring Physics and Chemistry are solid. Our students from Hyderabad have secured top 200 ranks in TS EAMCET while simultaneously performing well in JEE Main.`,
    faqs: [
      { q: 'Is TS EAMCET different from AP EAMCET?', a: 'The exam pattern and difficulty are nearly identical. The difference is in the colleges available — TS EAMCET covers Telangana colleges while AP EAMCET covers Andhra Pradesh colleges. Students eligible for both states can appear for both exams.' },
      { q: 'What TS EAMCET rank is needed for JNTU Hyderabad CS?', a: 'For JNTU Hyderabad (main campus) CS, you typically need top 300-500 rank. For Osmania University Engineering, top 1000. For top private colleges like CBIT, top 2000-3000.' },
      { q: 'Can I appear for both AP EAMCET and TS EAMCET?', a: 'Yes, if you meet the domicile requirements for both states. Many students from the AP-TS border region appear for both exams to maximize college options.' },
      { q: 'Is TS EAMCET easier than JEE Main?', a: 'Yes, TS EAMCET is easier than JEE Main. The questions are at Intermediate (TS board) level. No negative marking makes it even more scoring.' },
      { q: 'Does TS EAMCET have negative marking?', a: 'No, TS EAMCET has absolutely no negative marking.' },
    ],
  },
];

/* ─── Utility functions ─── */

export function getExamBySlug(slug: string): ExamConfig | undefined {
  return examRegistry.find(e => e.slug === slug);
}

export function getExamsByCategory(category: ExamConfig['category']): ExamConfig[] {
  return examRegistry.filter(e => e.category === category);
}

export function getExamsOverlappingWith(base: 'jee' | 'neet' | 'both'): ExamConfig[] {
  return examRegistry.filter(e => e.overlapsWith === base || e.overlapsWith === 'both' || base === 'both');
}

export function getAllExamSlugs(): string[] {
  return examRegistry.map(e => e.slug);
}
