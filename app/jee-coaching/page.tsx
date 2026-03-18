import JEECoaching from "@/views/JEECoaching";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const revalidate = false;

const title = `Best JEE Coaching Online ${CURRENT_EXAM_YEAR} — AIR <5K | 95% Success [Free Trial]`;
const description = `Crack JEE ${CURRENT_EXAM_YEAR} with 1-on-1 mentors from IIT/NIT. Adaptive curriculum, daily doubt sessions, 95% success rate. 500+ students trust MindPeak. Try free today.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://mindpeakinstitute.com/jee-coaching" },
  openGraph: { title, description, url: "https://mindpeakinstitute.com/jee-coaching", siteName: "MindPeak Institute", type: "website" },
};
export default function JEECoachingPage() { return <JEECoaching />; }
