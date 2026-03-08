import Courses from "@/views/Courses";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `JEE & NEET Courses ${CURRENT_EXAM_YEAR} — 1-on-1 Coaching, Foundation to Advanced [Free Demo]`,
  description: `Explore personalized JEE/NEET coaching programs ${CURRENT_EXAM_YEAR}. Foundation, 1-year & 2-year plans with dedicated mentors. 95% success rate. Book free demo now.`,
  alternates: { canonical: "https://mindpeakinstitute.com/courses" },
};
export default function CoursesPage() { return <Courses />; }
