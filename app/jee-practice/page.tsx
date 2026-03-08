import JEEPracticeHub from "@/views/JEEPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `JEE Practice MCQs ${CURRENT_EXAM_YEAR} — Physics, Chemistry, Maths [Free, With Solutions]`,
  description: `Solve 500+ JEE Main & Advanced MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with step-by-step solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" },
};
export default function Page() { return <JEEPracticeHub />; }
