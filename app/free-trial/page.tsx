import FreeTrial from "@/views/FreeTrial";
import type { Metadata } from "next";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";

export const metadata: Metadata = {
  title: `Free Demo Class — Try 1-on-1 JEE/NEET Coaching ${CURRENT_EXAM_YEAR} [Zero Cost]`,
  description: `Experience personalized JEE/NEET coaching free. Meet your mentor, get a custom study plan, see our platform live. No card, no commitment — book in 30 seconds.`,
  alternates: { canonical: "https://mindpeakinstitute.com/free-trial" },
};
export default function FreeTrialPage() { return <FreeTrial />; }
