import Courses from "@/views/Courses";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses — JEE & NEET Coaching Programs",
  description: "Explore MindPeak's personalized 1-on-1 coaching programs for JEE and NEET. Foundation, 1-year, and 2-year plans with dedicated mentors.",
  alternates: { canonical: "https://mindpeakinstitute.com/courses" },
};
export default function CoursesPage() { return <Courses />; }
