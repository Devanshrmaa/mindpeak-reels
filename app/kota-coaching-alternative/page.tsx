import KotaAlternative from "@/views/KotaAlternative";
import type { Metadata } from "next";

export const revalidate = false;

const _ogImage = "https://mindpeakinstitute.com/images/og/coaching.jpg";

export const metadata: Metadata = {
  title: "Best Kota Coaching Alternative — Online 1-on-1 JEE/NEET | MindPeak",
  description: "Skip Kota's costs & crowds. Get personalized 1-on-1 JEE/NEET coaching at home with IIT faculty. AIR 42 achieved. Save ₹3–5 lakh. 95% success rate.",
  alternates: { canonical: "https://mindpeakinstitute.com/kota-coaching-alternative" },
  openGraph: {
    title: "Best Alternative to Kota Coaching — Personalized 1-on-1 JEE/NEET",
    description: "Skip Kota. Get 1-on-1 JEE/NEET coaching from IIT faculty at home. AIR 42 achieved. Save ₹3–5 lakh vs Kota relocations. Book a free demo class.",
    url: "https://mindpeakinstitute.com/kota-coaching-alternative",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: _ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skip Kota — Get 1-on-1 JEE/NEET Coaching at Home | MindPeak",
    description: "Save ₹3–5 lakh vs Kota. Dedicated IIT mentor, 95% success rate. AIR 42 achieved. Book a free demo today.",
    images: [_ogImage],
  },
};
export default function Page() { return <KotaAlternative />; }
