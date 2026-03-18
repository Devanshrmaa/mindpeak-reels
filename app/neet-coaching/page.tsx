import NEETCoaching from "@/views/NEETCoaching";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const title = `Best NEET Coaching Online ${CURRENT_EXAM_YEAR} — Top Medical Colleges | 95% Success [Free Trial]`;
const description = `Crack NEET ${CURRENT_EXAM_YEAR} with 1-on-1 Biology-first coaching. NCERT mastery, dedicated mentors, 95% success rate. 500+ students. Book free demo class now.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-coaching" },
  openGraph: { title, description, url: "https://mindpeakinstitute.com/neet-coaching", siteName: "MindPeak Institute", type: "website" },
};
export default function NEETCoachingPage() { return <NEETCoaching />; }
