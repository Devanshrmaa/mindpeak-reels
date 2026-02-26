import Index from "@/views/Index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MindPeak Institute — #1 Personalized JEE & NEET Coaching | 95% Success",
  description: "Transform your JEE/NEET preparation with personalized 1-on-1 coaching. Achieve AIR <5K with adaptive curriculum, dedicated mentors. Trusted by 500+ students.",
  alternates: { canonical: "https://mindpeakinstitute.com/" },
};
export default function HomePage() { return <Index />; }
