import Index from "@/views/Index";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `Best JEE & NEET Coaching ${CURRENT_EXAM_YEAR} — 1-on-1 Mentors | 95% Success [Free Demo]`,
  description: `Crack JEE/NEET ${CURRENT_EXAM_YEAR} with personal 1-on-1 mentors from IIT/NIT. Adaptive study plan, 95% success rate, 500+ students. Book your free demo class today — zero commitment.`,
  alternates: { canonical: "https://mindpeakinstitute.com/" },
};
export default function HomePage() { return <Index />; }
