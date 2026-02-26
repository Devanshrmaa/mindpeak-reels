import type { FAQItem } from '@/components/PageFAQ';

/* ═══════════════════════════════════════════════════
   Dynamic SEO content generators for question pages.
   Generates unique, relevant text for each chapter/
   topic/difficulty combination — no hardcoded walls
   of text that search engines could penalise.
   ═══════════════════════════════════════════════════ */

/* ── helpers ── */
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ── JEE Practice FAQs ── */
export function buildJEEPracticeFAQs(
  subject: string, chapterName: string, topicName: string, difficulty: string, totalQs: number,
): FAQItem[] {
  return [
    {
      question: `How many ${difficulty} questions are available for ${topicName} in JEE ${subject}?`,
      answer: `MindPeak offers ${totalQs} ${difficulty.toLowerCase()}-level MCQs on ${topicName} (${chapterName}) for JEE ${subject}. Each question comes with a detailed step-by-step solution so you can learn the concept, not just the answer.`,
    },
    {
      question: `Is ${topicName} important for JEE Main and Advanced?`,
      answer: `Yes. ${topicName} under ${chapterName} is a frequently tested topic in both JEE Main and JEE Advanced. Questions from this topic appear regularly and mastering it can give you a significant edge in the exam.`,
    },
    {
      question: `How should I prepare ${chapterName} for JEE?`,
      answer: `Start with Easy questions to build conceptual clarity, then move to Medium for application-based practice, and finally tackle Hard questions for competitive-level depth. MindPeak's chapter-wise practice with instant solutions makes this progression seamless.`,
    },
    {
      question: `Are these practice questions based on the JEE syllabus?`,
      answer: `Absolutely. All questions on ${topicName} are crafted by subject experts and aligned with the latest NTA JEE syllabus. They cover the key concepts, formulas, and problem-solving patterns that appear in the actual exam.`,
    },
    {
      question: `Can I get 1-on-1 help if I'm stuck on ${chapterName}?`,
      answer: `Yes! MindPeak provides personalized 1-on-1 coaching where expert mentors solve doubts in real time, explain weak areas, and build a custom study plan tailored to your pace and goals. Book a free demo class to get started.`,
    },
  ];
}

/* ── JEE PYQ FAQs ── */
export function buildJEEPYQFAQs(
  subject: string, chapterName: string, year: number, exam: string, totalQs: number,
): FAQItem[] {
  const examLabel = exam === 'advanced' ? 'JEE Advanced' : 'JEE Main';
  return [
    {
      question: `How many previous year questions are available for ${chapterName} in JEE ${subject}?`,
      answer: `MindPeak has ${totalQs} previous year questions on ${chapterName} from JEE Main and JEE Advanced spanning multiple years. Each PYQ includes the original year, shift, and a detailed solution.`,
    },
    {
      question: `Was this question asked in ${examLabel} ${year}?`,
      answer: `Yes. This question on ${chapterName} appeared in ${examLabel} ${year}. Practising actual PYQs is one of the most effective strategies for understanding the exam pattern and question style.`,
    },
    {
      question: `Why should I solve JEE previous year questions?`,
      answer: `PYQs reveal the exam's difficulty pattern, frequently tested sub-topics, and the style of options used. Solving them improves time management, boosts confidence, and helps you identify high-yield topics within ${chapterName}.`,
    },
    {
      question: `How is ${chapterName} weighted in JEE?`,
      answer: `${chapterName} is a consistently important chapter in JEE ${subject}. Historically, 1-3 questions from this chapter appear every year in JEE Main, and it's a favourite for conceptual questions in JEE Advanced as well.`,
    },
  ];
}

/* ── NEET Practice FAQs ── */
export function buildNEETPracticeFAQs(
  subject: string, chapterName: string, topicName: string, difficulty: string, totalQs: number,
): FAQItem[] {
  return [
    {
      question: `How many ${difficulty} NEET ${subject} questions are on ${topicName}?`,
      answer: `There are ${totalQs} ${difficulty.toLowerCase()}-level MCQs on ${topicName} (${chapterName}) prepared for NEET ${subject} preparation. Every question includes a detailed NCERT-aligned solution.`,
    },
    {
      question: `Is ${topicName} important for NEET UG?`,
      answer: `Yes. ${topicName} from ${chapterName} is a high-weightage area in NEET. NTA regularly asks 2-4 questions from this topic, making it critical for scoring well in ${subject}.`,
    },
    {
      question: `How should I study ${chapterName} for NEET?`,
      answer: `Begin with NCERT thoroughly, then practise Easy MCQs for concept recall and Medium/Hard for application and assertion-reason style questions. MindPeak's difficulty-graded practice mirrors the actual NEET pattern.`,
    },
    {
      question: `Are NEET practice questions on MindPeak based on NCERT?`,
      answer: `Yes. All NEET ${subject} questions are aligned with the NCERT syllabus and NTA guidelines. They cover factual recall, diagram-based reasoning, and conceptual application — exactly what NEET demands.`,
    },
    {
      question: `How can MindPeak help me score better in NEET ${subject}?`,
      answer: `MindPeak offers 1-on-1 personalised coaching with NEET expert mentors, chapter-wise practice with instant solutions, and custom study plans — all designed to maximise your NEET score. Try a free demo class today.`,
    },
  ];
}

/* ── NEET PYQ FAQs ── */
export function buildNEETPYQFAQs(
  subject: string, chapterName: string, year: number, shift: string, totalQs: number,
): FAQItem[] {
  return [
    {
      question: `How many NEET previous year questions are available for ${chapterName}?`,
      answer: `MindPeak has ${totalQs} NEET PYQs on ${chapterName} across multiple years and shifts. Each question includes the year, shift details, and a comprehensive NCERT-based solution.`,
    },
    {
      question: `Is this question from NEET ${year}?`,
      answer: `Yes. This ${subject} question on ${chapterName} was asked in NEET ${year} (${shift}). Solving actual PYQs is the best way to understand NTA's pattern and improve your score.`,
    },
    {
      question: `Why are NEET PYQs important for preparation?`,
      answer: `NEET PYQs reveal repeated concepts, common traps, and the exact difficulty level NTA targets. Many questions are directly repeated or slightly modified — solving them gives you a proven scoring advantage.`,
    },
    {
      question: `How is ${chapterName} weighted in NEET?`,
      answer: `${chapterName} is a consistently high-yield chapter in NEET ${subject}. NTA has asked multiple questions from this chapter every year, making it one of the most important topics for score maximisation.`,
    },
  ];
}

/* ── Topic / Chapter Overview Paragraphs ── */
export function buildTopicOverview(
  exam: 'JEE' | 'NEET', subject: string, chapterName: string, topicName: string, difficulty: string,
): string {
  return `${topicName} is a core concept within ${chapterName} for ${exam} ${subject} preparation. Understanding ${topicName} at the ${difficulty.toLowerCase()} level builds the foundation needed to tackle more advanced problems in the exam. This practice set covers key formulas, conceptual traps, and frequently asked patterns — helping you move from theory to exam-ready problem solving.`;
}

export function buildPYQOverview(
  exam: 'JEE' | 'NEET', subject: string, chapterName: string, year: number,
): string {
  return `This previous year question from ${exam} ${year} tests your understanding of ${chapterName} — one of the most important chapters in ${exam} ${subject}. By solving actual past-exam questions, you gain insight into the examiner's approach, learn to manage time under pressure, and identify which concepts get tested most frequently.`;
}

/* ── Concept Summary (always-visible 150+ word block for thin-content fix) ── */
export function buildConceptSummary(
  exam: 'JEE' | 'NEET', subject: string, chapterName: string, topicName: string, difficulty?: string,
): string[] {
  const diff = difficulty ? ` ${difficulty.toLowerCase()}-level` : '';
  return [
    `${topicName} is one of the most important concepts within ${chapterName} for ${exam} ${subject} preparation. ${exam === 'JEE' ? 'Both JEE Main and JEE Advanced' : 'The NEET UG exam'} regularly feature questions from this area, making it essential for every serious aspirant to develop a thorough understanding.`,
    `This${diff} practice question tests your conceptual clarity and problem-solving ability on ${topicName}. Working through questions at various difficulty levels — Easy for building foundations, Medium for strengthening application skills, and Hard for developing competitive-level mastery — is the proven approach recommended by top rankers and expert educators.`,
    `When studying ${chapterName}, pay close attention to the underlying principles, standard derivations, and common pitfalls that examiners love to exploit. The step-by-step solution provided after you attempt this question will help you understand not just the correct answer, but the reasoning and shortcuts that save time under exam conditions.`,
    `MindPeak Institute offers personalised 1-on-1 coaching where expert mentors guide you through ${chapterName} and all other ${exam} ${subject} chapters. Our adaptive curriculum identifies your specific weak areas and creates a targeted study plan to maximise your score.`,
  ];
}

/* ── LearningResource JSON-LD schema builder ── */
export function buildLearningResourceSchema(
  exam: string, subject: string, chapterName: string, topicName: string,
  slug: string, difficulty?: string,
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `${exam} ${subject} — ${topicName}${difficulty ? ` (${difficulty})` : ''}`,
    description: `Practice ${exam} ${subject} question on ${topicName} from ${chapterName} with step-by-step solution.`,
    educationalLevel: difficulty === 'Easy' ? 'Beginner' : difficulty === 'Hard' ? 'Advanced' : 'Intermediate',
    learningResourceType: 'Practice Problem',
    educationalAlignment: {
      '@type': 'AlignmentObject',
      alignmentType: 'teaches',
      educationalFramework: exam === 'JEE' ? 'NTA JEE Syllabus' : 'NTA NEET Syllabus',
      targetName: `${chapterName} — ${topicName}`,
    },
    provider: {
      '@type': 'Organization',
      name: 'MindPeak Institute',
      url: 'https://mindpeakinstitute.com',
    },
    url: `https://mindpeakinstitute.com/${slug}`,
    isAccessibleForFree: true,
    inLanguage: 'en',
  };
}

/* ── Exam Preparation Tips ── */
export function buildExamTips(exam: 'JEE' | 'NEET', subject: string, chapterName: string): string[] {
  const base = [
    `Master the fundamental concepts of ${chapterName} before attempting complex problems.`,
    `Practise questions at all difficulty levels — Easy for concept clarity, Hard for exam readiness.`,
    `Review solutions even for questions you answered correctly — you may discover faster methods.`,
    `Track your accuracy chapter-wise to identify and fix weak areas early.`,
  ];

  if (exam === 'JEE') {
    return [
      ...base,
      `For ${subject}, focus on numerical-type and multi-concept problems — JEE Advanced loves them.`,
      `Revise key formulas and dimensional analysis shortcuts specific to ${chapterName}.`,
    ];
  }
  return [
    ...base,
    `For NEET ${subject}, ensure thorough NCERT coverage — 90%+ questions are NCERT-based.`,
    `Pay special attention to diagrams, assertion-reason, and statement-based questions in ${chapterName}.`,
  ];
}
