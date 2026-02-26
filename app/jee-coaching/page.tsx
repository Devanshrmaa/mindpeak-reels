import JEECoaching from "@/views/JEECoaching";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Online Coaching — Personalized 1-on-1 Mentorship | 95% Success Rate",
  description: "Achieve AIR <5K with personalized JEE coaching. Dedicated mentors, adaptive curriculum, 95% success rate. 500+ students trust MindPeak. Start free trial today!",
  alternates: { canonical: "https://mindpeakinstitute.com/jee-coaching" },
  openGraph: { title: "JEE Online Coaching — Personalized 1-on-1 Mentorship", description: "Achieve AIR <5K with personalized JEE coaching. Dedicated mentors, adaptive curriculum, 95% success rate.", url: "https://mindpeakinstitute.com/jee-coaching", siteName: "MindPeak Institute", type: "website" },
};
export default function JEECoachingPage() { return <JEECoaching />; }
