import Courses from "@/views/Courses";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

export const metadata: Metadata = {
  title: `Best JEE & NEET Coaching Courses ${CURRENT_EXAM_YEAR} — 1-on-1 Online Programs, Foundation to Crash [Free Demo]`,
  description: `Explore 12+ personalized JEE Main, JEE Advanced & NEET coaching programs for ${CURRENT_EXAM_YEAR}. Foundation (Class 6–10), 1-year & 2-year courses, crash programs, BITSAT, ISI & Olympiad prep. 95% success rate, AIR 42 best JEE result, 695/720 best NEET score. Daily 1-on-1 mentoring. Book free demo.`,
  alternates: { canonical: "https://mindpeakinstitute.com/courses" },
};
export default function CoursesPage() { return <Courses />; }
