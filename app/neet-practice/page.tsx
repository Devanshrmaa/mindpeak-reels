import NEETPracticeHub from "@/views/NEETPracticeHub";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `NEET Practice MCQs ${CURRENT_EXAM_YEAR} — Biology, Physics, Chemistry [Free, With Solutions]`,
  description: `Solve 500+ NEET UG MCQs ${CURRENT_EXAM_YEAR}. Topic-wise, difficulty-wise with NCERT-based solutions. Track your score. 100% free practice by MindPeak.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-practice" },
};
export default function Page() { return <NEETPracticeHub />; }
