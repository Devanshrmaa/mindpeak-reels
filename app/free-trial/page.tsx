import FreeTrial from "@/views/FreeTrial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Free Trial — 1-on-1 JEE & NEET Coaching",
  description: "Experience personalized JEE/NEET coaching free. Meet your mentor, get a study plan, see our platform. Zero commitment. Book your free trial today!",
  alternates: { canonical: "https://mindpeakinstitute.com/free-trial" },
};
export default function FreeTrialPage() { return <FreeTrial />; }
