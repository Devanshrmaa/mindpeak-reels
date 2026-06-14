import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: `NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Predict Your AIR & College`,
  description: `Use MindPeak's free NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} to estimate your All India Rank and get college suggestions. Based on MCC cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-rank-predictor" },
  openGraph: {
    title: `NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Estimate Your AIR & Medical College`,
    description: `Enter your NEET ${CURRENT_EXAM_YEAR} score and predict your All India Rank. See college options from MCC/state counselling data. Free tool by MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free NEET Rank Predictor ${CURRENT_EXAM_YEAR} — Predict AIR & Medical College`,
    description: `Enter your NEET score, get your predicted AIR and top medical college options. Based on MCC counselling data. Free by MindPeak.`,
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function Page() { return <RankPredictor />; }
