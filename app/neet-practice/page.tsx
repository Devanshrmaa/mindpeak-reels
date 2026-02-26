import NEETPracticeHub from "@/views/NEETPracticeHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET Practice Questions — Biology, Physics, Chemistry",
  description: "Practice NEET UG MCQs across Biology, Physics, and Chemistry. Topic-wise, difficulty-wise questions with step-by-step solutions. Free NEET prep by MindPeak.",
  alternates: { canonical: "https://mindpeakinstitute.com/neet-practice" },
};
export default function Page() { return <NEETPracticeHub />; }
