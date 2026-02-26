import NEETCoaching from "@/views/NEETCoaching";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET Online Coaching — Personalized 1-on-1 Mentorship | Top Medical Colleges",
  description: "Crack NEET with personalized 1-on-1 coaching. Biology-first approach, NCERT mastery, dedicated mentors. 95% success rate, 500+ students. Start free trial today!",
  alternates: { canonical: "https://mindpeakinstitute.com/neet-coaching" },
  openGraph: { title: "NEET Online Coaching — Personalized 1-on-1 Mentorship", description: "Crack NEET with personalized 1-on-1 coaching. Biology-first approach, NCERT mastery, dedicated mentors.", url: "https://mindpeakinstitute.com/neet-coaching", siteName: "MindPeak Institute", type: "website" },
};
export default function NEETCoachingPage() { return <NEETCoaching />; }
