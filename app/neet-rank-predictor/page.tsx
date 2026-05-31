import RankPredictor from "@/views/RankPredictor";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title: `NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Predict Your Rank | MindPeak`,
  description: `Use MindPeak's free NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} to estimate your All India Rank and get college suggestions. Based on MCC cutoff data.`,
  alternates: { canonical: "https://mindpeakinstitute.com/neet-rank-predictor" },
  openGraph: {
    title: `Free NEET UG Rank Predictor ${CURRENT_EXAM_YEAR} — Estimate Your AIR`,
    description: `Predict your NEET UG ${CURRENT_EXAM_YEAR} All India Rank in seconds. Get medical college suggestions based on MCC cutoff data. Free tool by MindPeak.`,
    url: "https://mindpeakinstitute.com/neet-rank-predictor",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Free NEET Rank Predictor ${CURRENT_EXAM_YEAR} | MindPeak`,
    description: `Predict your NEET UG AIR and get medical college suggestions. Based on MCC cutoff data. 100% free.`,
    images: [_ogImage],
  },
};
export default function Page() { return <RankPredictor />; }
