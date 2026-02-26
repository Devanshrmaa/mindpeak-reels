import StudyPlan from "@/views/StudyPlan";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE & NEET Study Plan — Personalised Roadmap Generator",
  description: "Auto-generate a personalised month-by-month study plan for JEE or NEET. Includes syllabus scheduling, mock-test timeline, and crash course option.",
  alternates: { canonical: "https://mindpeakinstitute.com/study-plan" },
};
export default function StudyPlanPage() { return <StudyPlan />; }
