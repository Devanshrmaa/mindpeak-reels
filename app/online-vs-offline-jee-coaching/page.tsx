import OnlineVsOffline from "@/views/OnlineVsOffline";
import { CURRENT_EXAM_YEAR } from "@/lib/examYears";
import type { Metadata } from "next";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title: `Online vs Offline JEE Coaching ${CURRENT_EXAM_YEAR} — Which Wins? | MindPeak`,
  description: `Honest online vs offline JEE coaching comparison ${CURRENT_EXAM_YEAR}. Pros, cons, costs & real results. Find the format that works for your preparation.`,
  alternates: { canonical: "https://mindpeakinstitute.com/online-vs-offline-jee-coaching" },
  openGraph: {
    title: `Online vs Offline JEE Coaching ${CURRENT_EXAM_YEAR} — Honest Comparison`,
    description: "Pros, cons, cost analysis & results compared. See why 1-on-1 online coaching outperforms offline batch classrooms for JEE & NEET preparation.",
    url: "https://mindpeakinstitute.com/online-vs-offline-jee-coaching",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Online vs Offline JEE Coaching ${CURRENT_EXAM_YEAR} — Which Wins?`,
    description: "Honest comparison of pros, cons, fees & results. See why 1-on-1 online coaching beats offline batches.",
    images: [_ogImage],
  },
};
export default function Page() { return <OnlineVsOffline />; }
