import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Free Tool | MindPeak`,
  description: `Use MindPeak's free NEET UG Rank Predictor to estimate your ${CURRENT_EXAM_YEAR} All India Rank and get medical college suggestions based on MCC cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-rank-predictor" },
  openGraph: {
    title: `Free NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Estimate Your AIR`,
    description:
      "Predict your NEET All India Rank instantly. Enter your score and get medical college suggestions based on latest MCC cutoff data.",
    url: "https://mindpeakinstitute.com/neet-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Free | MindPeak`,
    description:
      "Enter your NEET score → get your estimated AIR + medical college list. Based on official MCC cutoff data.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function Page() { return <RankPredictor />; }
