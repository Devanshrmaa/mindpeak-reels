import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const revalidate = false;

export const metadata: Metadata = {
  title: "JEE & NEET Coaching Enquiry — Contact MindPeak",
  description: "Have questions about JEE/NEET coaching? Call +91 82194 57704, WhatsApp, or email. Get a callback within 30 minutes. Mon-Sat, 9 AM – 8 PM IST.",
  alternates: { canonical: "https://mindpeakinstitute.com/contact" },
  openGraph: {
    title: "Contact MindPeak Institute — We Reply in 30 Minutes",
    description: "Call, WhatsApp, or email MindPeak for JEE & NEET coaching enquiries. Mon–Sat, 9 AM–8 PM IST. Book a free demo class on the spot.",
    url: "https://mindpeakinstitute.com/contact",
    siteName: "MindPeak Institute",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://mindpeakinstitute.com/images/og/coaching.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MindPeak — JEE & NEET Coaching Enquiry",
    description: "Call, WhatsApp, or email. We reply within 30 minutes. Mon–Sat, 9 AM–8 PM IST.",
    images: ["https://mindpeakinstitute.com/images/og/coaching.jpg"],
  },
};
export default function ContactPage() { return <Contact />; }
