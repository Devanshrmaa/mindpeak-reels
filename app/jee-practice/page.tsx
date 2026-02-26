import JEEPracticeHub from "@/views/JEEPracticeHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Practice Questions — Physics, Chemistry, Maths",
  description: "Practice JEE Main & Advanced MCQs across Physics, Chemistry, and Mathematics. Topic-wise, difficulty-wise questions with step-by-step solutions. Free JEE prep by MindPeak.",
  alternates: { canonical: "https://mindpeakinstitute.com/jee-practice" },
};
export default function Page() { return <JEEPracticeHub />; }
