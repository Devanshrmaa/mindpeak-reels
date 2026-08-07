import KotaAlternative from "@/views/KotaAlternative";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Skip Kota — 1-on-1 JEE & NEET Coaching at Home | MindPeak",
  description: "Why send your child to Kota? Get personalized 1-on-1 JEE/NEET coaching at home — a dedicated mentor, no relocation, no hostel costs. Book a free trial.",
  alternates: { canonical: "https://mindpeakinstitute.com/kota-coaching-alternative" },
  openGraph: {
    title: "Why Kota Isn't Worth It — Get 1-on-1 JEE & NEET Coaching at Home",
    description: "Skip the hostel and relocation costs of Kota. A dedicated 1-on-1 mentor and daily live classes — from home. Book a free trial today.",
    url: "https://mindpeakinstitute.com/kota-coaching-alternative",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skip Kota — 1-on-1 JEE & NEET Coaching at Home for 60% Less",
    description: "A dedicated mentor and daily live classes — without moving to Kota. Book a free trial class today.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function Page() { return <KotaAlternative />; }
