import Contact from "@/views/Contact";
import type { Metadata } from "next";

export const revalidate = false;

const BASE = 'https://mindpeakinstitute.com';

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${BASE}/contact`,
      name: 'Contact MindPeak Institute',
      url: `${BASE}/contact`,
      description: 'Contact MindPeak Institute for JEE & NEET coaching enquiries. Call, WhatsApp, or email — we reply within 30 minutes.',
      about: { '@id': `${BASE}/#organization` },
      mainEntity: {
        '@type': 'Organization',
        '@id': `${BASE}/#organization`,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91-82194-57704',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi'],
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '20:00',
            },
          },
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            contactOption: 'TollFree',
            availableLanguage: ['English', 'Hindi'],
            email: 'mindpeak@mindpeakinstitute.com',
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE}/contact` },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: "Contact MindPeak — JEE & NEET Coaching Enquiry | MindPeak",
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
  other: {
    'script:ld+json': JSON.stringify(contactSchema),
  },
};
export default function ContactPage() { return <Contact />; }
