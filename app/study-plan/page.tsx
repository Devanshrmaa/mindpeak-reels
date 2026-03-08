import StudyPlan from "@/views/StudyPlan";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `JEE & NEET Study Plan ${CURRENT_EXAM_YEAR} — Free Personalised Roadmap Generator`,
  description: `Generate your custom month-by-month JEE/NEET study plan for ${CURRENT_EXAM_YEAR}. Includes syllabus scheduling, mock-test timeline & crash course option. 100% free.`,
  alternates: { canonical: "https://mindpeakinstitute.com/study-plan" },
};
export default function StudyPlanPage() { return <StudyPlan />; }
