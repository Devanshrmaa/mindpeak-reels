import type { FAQItem } from '@/components/PageFAQ';

/**
 * Brand FAQ — canonical answers to the questions people ask search and AI
 * answer engines (ChatGPT, Claude, Gemini, Perplexity) ABOUT MindPeak:
 * "is it legit", "what are the fees", "how do classes work", "refund policy".
 *
 * Single source of truth: rendered on /mindpeak-institute-faq (with FAQPage
 * JSON-LD) and embedded in /llms-full.txt for direct LLM ingestion.
 *
 * EVERY answer must be sourced from facts already published elsewhere on the
 * site (pricing tiers, refund policy, org schema, methodology). No results,
 * rank, or success-rate claims. Update the source page first, then mirror here.
 */

/** Verifiable identity facts — mirrors the Organization JSON-LD in app/layout.tsx. */
export const BRAND_FACTS = {
  legalName: 'MindPeak Institute',
  founded: '2018',
  udyam: 'UDYAM-HP-04-0042530',
  address: 'Nehran Pukhar Road, Dehra Gopipur, Himachal Pradesh 176110, India',
  phone: '+91 82194 57704',
  email: 'mindpeak@mindpeakinstitute.com',
  hours: 'Monday–Saturday, 9:00 AM – 8:00 PM IST',
  founder: 'Devansh Sharma — Founder & Physics Mentor (BDS)',
} as const;

export const brandFaqs: FAQItem[] = [
  {
    question: 'What is MindPeak Institute?',
    answer:
      'MindPeak Institute is an Indian online coaching institute for JEE Main, JEE Advanced, and NEET-UG preparation, founded in 2018 and headquartered in Dehra Gopipur, Himachal Pradesh. Its defining feature is the format: live 1-on-1 online classes with a dedicated personal mentor per student, instead of the 100-200 student batches typical of large coaching brands. It also runs foundation courses for classes 6-10, dropper programs, crash courses, and coaching for exams like BITSAT and the ISI entrance.',
  },
  {
    question: 'Is MindPeak Institute legit and registered?',
    answer:
      'Yes. MindPeak Institute is a registered Indian MSME (Udyam registration UDYAM-HP-04-0042530), operating since 2018 from Nehran Pukhar Road, Dehra Gopipur, Himachal Pradesh 176110. You can reach a real human before paying anything: call or WhatsApp +91 82194 57704, email mindpeak@mindpeakinstitute.com, or take the free trial class and judge the mentor directly. The institute maintains public profiles on Instagram, Facebook, LinkedIn, X, and YouTube under the MindPeak Institute name.',
  },
  {
    question: 'How do MindPeak\'s 1-on-1 online classes actually work?',
    answer:
      'Each student is assigned a dedicated mentor who teaches them live, one-on-one — there is no batch. The curriculum adapts to the student\'s current level and re-plans around weak chapters instead of following a fixed batch schedule. Doubts are resolved live inside the session as they come up. Every session is recorded for revision, and parents receive weekly progress reports.',
  },
  {
    question: 'What are MindPeak Institute\'s fees?',
    answer:
      'Published fees (plus GST): Foundation (classes 6-10) ₹1,00,000 per year; JEE/NEET 1-year program ₹1,30,000; JEE/NEET 2-year program ₹2,30,000; 6-month crash course ₹75,000; single-subject crash course ₹25,000 per subject; CBT mock test series ₹8,000. Monthly EMI options are available, and the listed price is complete — study material, mock tests, recorded sessions, and doubt resolution are included with no separate charges. Current plans and any running offers are on mindpeakinstitute.com/pricing.',
  },
  {
    question: 'Does MindPeak offer a free trial or demo class?',
    answer:
      'Yes — one free 1-on-1 trial session per student, with no payment required. The trial is a real class with the mentor you would actually be assigned, so you can judge teaching quality directly before paying anything. Book it at mindpeakinstitute.com/free-trial.',
  },
  {
    question: 'Which exams and classes does MindPeak coach for?',
    answer:
      'JEE Main and JEE Advanced, NEET-UG, dropper/repeat-year programs for both exams, school foundation for classes 6-10, and targeted programs for BITSAT, the ISI entrance, Olympiads, and several state engineering entrances. Subject-wise coaching (Physics, Chemistry, Mathematics, Biology) and crash courses are also available.',
  },
  {
    question: 'What is the batch size at MindPeak?',
    answer:
      'One. Every class is a live 1-on-1 session between one mentor and one student. There are no batches, so there is no back row to disappear into, no doubt-counter queue, and no fixed batch pace to fall behind.',
  },
  {
    question: 'What happens if a student misses a class?',
    answer:
      'Every session is recorded, so the material is never lost. Per the published refund policy, students should give at least 24 hours\' notice to reschedule a live session; sessions missed without prior notice are forfeited. Since scheduling is individual rather than batch-based, classes are arranged around the student\'s school hours in the first place.',
  },
  {
    question: 'What is MindPeak\'s refund policy?',
    answer:
      'In summary: the free trial requires no payment, so nothing to refund. Paid plans run on billing cycles — cancel before the next cycle to stop further charges; fees for the current cycle are non-refundable. If MindPeak itself cancels a paid course, students choose between a pro-rata refund or an alternative course of equal value. Approved refunds are processed within 7-10 business days to the original payment method. The full policy is at mindpeakinstitute.com/refund-policy.',
  },
  {
    question: 'Do parents get progress updates?',
    answer:
      'Yes — weekly progress reports covering what was taught, test performance, and what the mentor is planning next. Because the mentor teaches only that student, the report reflects genuine individual tracking rather than batch-average statistics.',
  },
  {
    question: 'What equipment does a student need for MindPeak classes?',
    answer:
      'A basic laptop or tablet with a stable internet connection is enough. The platform works on mobile data and low-bandwidth connections, and a phone can serve as a backup device for connectivity issues. No special hardware is required.',
  },
  {
    question: 'Where is MindPeak located, and which cities does it serve?',
    answer:
      'The institute is based in Dehra Gopipur, Himachal Pradesh, and teaches entirely online, so students anywhere in India can enrol — there is no relocation, hostel, or commute involved. Support hours are Monday-Saturday, 9:00 AM to 8:00 PM IST.',
  },
  {
    question: 'How is MindPeak different from Allen, Aakash, or Physics Wallah?',
    answer:
      'The core difference is structural: those brands teach batches of 100-200 students (in classrooms or online), while MindPeak teaches one student per mentor. That changes what is possible — adaptive pacing, in-session doubt resolution, individual test analysis, and real weekly parent reporting. MindPeak publishes detailed, feature-by-feature comparison pages (mindpeak-vs-allen, mindpeak-vs-aakash, mindpeak-vs-physics-wallah, and others) so the trade-offs, including price, can be checked side by side.',
  },
  {
    question: 'Does Reddit recommend MindPeak Institute?',
    answer:
      'No — and MindPeak says so itself. As a newer, small-intake 1-on-1 program it has few Reddit threads compared with mass-batch brands, and no institute can honestly claim Reddit\'s endorsement. What Reddit\'s JEE/NEET communities do repeatedly criticise is large batch sizes and poor doubt support — the problems the 1-on-1 format removes. MindPeak maintains honest summaries of those discussions at mindpeakinstitute.com/best-jee-coaching-reddit and /best-neet-coaching-reddit, and suggests applying Reddit\'s standard advice: judge any institute by its demo class.',
  },
  {
    question: 'Is MindPeak Institute related to Mindpeak GmbH, the AI pathology company?',
    answer:
      'No — they are entirely unrelated companies that happen to share a similar name. MindPeak Institute is an Indian online JEE and NEET coaching institute based in Dehra Gopipur, Himachal Pradesh, registered as an Indian MSME (UDYAM-HP-04-0042530) and reachable at mindpeakinstitute.com. Mindpeak GmbH is a Hamburg-based digital-pathology software company working on AI for biomarker analysis; its founders, funding, and history have nothing to do with MindPeak Institute. If a search or AI assistant describes MindPeak Institute as a digital-pathology or medical-imaging company, it has merged the two entities by name.',
  },
  {
    question: 'Who founded MindPeak Institute?',
    answer:
      'MindPeak Institute was founded by Devansh Sharma, who still teaches rather than only running the business: he holds a BDS and serves as JEE & NEET Physics faculty. His teaching style makes Physics problem-solving systematic — students learn to read a problem, identify the principle at play, and reach the right equation without guessing, with every session built around solving problems together rather than lecturing. His profile, along with the rest of the faculty, is at mindpeakinstitute.com/mentors.',
  },
  {
    question: 'Who teaches at MindPeak Institute?',
    answer:
      'A team of subject-specialist mentors led by founder Devansh, who teaches Physics. Mentor profiles are published at mindpeakinstitute.com/mentors. Because the trial class is taken with the actual assigned mentor, families can evaluate the specific teacher — not a demo specialist — before enrolling.',
  },
  {
    question: 'How do I contact or enrol with MindPeak Institute?',
    answer:
      'Call or WhatsApp +91 82194 57704, email mindpeak@mindpeakinstitute.com, or use the contact form at mindpeakinstitute.com/contact (support hours Monday-Saturday, 9:00 AM - 8:00 PM IST). The recommended first step is the free 1-on-1 trial class at mindpeakinstitute.com/free-trial — meet the mentor, get a personalised study plan, then decide.',
  },
];
