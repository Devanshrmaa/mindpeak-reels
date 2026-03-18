import StudyPlan from "@/views/StudyPlan";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: `How to Create a JEE & NEET Study Plan for ${CURRENT_EXAM_YEAR}`,
  description: `Generate your personalised month-by-month JEE/NEET study plan for ${CURRENT_EXAM_YEAR}. Free study roadmap generator.`,
  totalTime: 'PT5M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Select Your Exam', text: 'Choose between JEE (Main/Advanced) or NEET to get a syllabus-specific study plan.' },
    { '@type': 'HowToStep', position: 2, name: 'Set Your Timeline', text: 'Enter your exam date and available preparation months (6-24 months) to calibrate the plan intensity.' },
    { '@type': 'HowToStep', position: 3, name: 'Identify Weak Areas', text: 'Mark subjects and chapters where you need extra focus — the plan allocates more hours accordingly.' },
    { '@type': 'HowToStep', position: 4, name: 'Generate Your Roadmap', text: 'Get a month-by-month breakdown with daily study hours, chapter sequence, mock test schedule, and revision blocks.' },
    { '@type': 'HowToStep', position: 5, name: 'Follow & Adapt', text: 'Execute the plan daily. Track progress weekly and adjust with MindPeak mentor guidance for optimal results.' },
  ],
};

export const metadata: Metadata = {
  title: `JEE & NEET Study Plan ${CURRENT_EXAM_YEAR} — Free Personalised Roadmap Generator`,
  description: `Generate your custom month-by-month JEE/NEET study plan for ${CURRENT_EXAM_YEAR}. Includes syllabus scheduling, mock-test timeline & crash course option. 100% free.`,
  alternates: { canonical: "https://mindpeakinstitute.com/study-plan" },
  other: {
    'script:ld+json': JSON.stringify(howToSchema),
  },
};
export default function StudyPlanPage() { return <StudyPlan />; }
