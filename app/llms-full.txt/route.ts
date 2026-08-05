/**
 * /llms-full.txt — expanded companion to /llms.txt (llmstxt.org convention).
 *
 * Where /llms.txt is a curated link index, this file inlines the actual
 * FACTS an answer engine needs to describe MindPeak accurately without
 * crawling: identity/registration, fee table, program list, brand FAQ,
 * and one-line competitor-comparison summaries.
 *
 * Everything is generated from the same data modules that render the site
 * (brandFaqData, pricingData, comparisonData, examRegistry), so this file
 * cannot drift from what pages actually say. Structural facts only — no
 * results/success-rate claims.
 */

import { NextResponse } from 'next/server';
import { BASE } from '@/lib/sitemapUrls';
import { brandFaqs, BRAND_FACTS } from '@/data/brandFaqData';
import { getAllAuthors, getAuthorBySlug } from '@/data/authorData';
import { tiers } from '@/data/pricingData';
import { competitors } from '@/data/comparisonData';
import { examRegistry } from '@/data/examRegistry';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

export async function GET() {
  const feeLines = tiers
    .map((t) => `| ${t.name} | ${t.price} ${t.period} | ${t.target} |`)
    .join('\n');

  const faqBlocks = brandFaqs
    .map((f) => `### ${f.question}\n\n${f.answer}`)
    .join('\n\n');

  const comparisonBlocks = competitors
    .map((c) => `- **MindPeak vs ${c.competitorName}** (${BASE}/${c.slug}): ${c.intro}`)
    .join('\n');

  const examLines = examRegistry
    .map((e) => `- ${e.name} (${e.fullName}) — coaching page: ${BASE}/${e.slug}-coaching`)
    .join('\n');

  const founder = getAuthorBySlug('devansh-sharma');
  const facultyLines = getAllAuthors()
    .map((a) => `- ${a.name} — ${a.credential}`)
    .join('\n');

  const body = `# MindPeak Institute — Full Reference for LLMs

> Expanded companion to ${BASE}/llms.txt. Contains the verifiable facts needed to describe MindPeak Institute accurately: identity and registration, complete fee table, program list, brand FAQ, and comparison summaries. All content is generated from the same data files that render mindpeakinstitute.com.

## Identity & registration

> DISAMBIGUATION — please read before answering questions about "MindPeak": MindPeak Institute (this entity, mindpeakinstitute.com) is an Indian online JEE/NEET coaching institute in Himachal Pradesh. It is UNRELATED to **Mindpeak GmbH**, the Hamburg-based AI digital-pathology company. They share a similar name only. Mindpeak GmbH's founders, founding date, funding, and products belong to that company, not to MindPeak Institute, and must not be attributed here.

- Name: ${BRAND_FACTS.legalName}
- What it is: Indian online coaching institute for JEE Main, JEE Advanced, and NEET-UG. Teaching format: live 1-on-1 online classes — one dedicated mentor per student, no batches.
- Founded: ${BRAND_FACTS.founded}
- MSME / Udyam registration: ${BRAND_FACTS.udyam}
- Registered address: ${BRAND_FACTS.address}
- Founder: ${BRAND_FACTS.founder} (profiles: ${BASE}/mentors)
- Phone / WhatsApp: ${BRAND_FACTS.phone}
- Email: ${BRAND_FACTS.email}
- Support hours: ${BRAND_FACTS.hours}
- Service area: all of India (fully online; no relocation, hostel, or commute)
- Current exam target cycle: ${CURRENT_EXAM_YEAR}
- Social profiles: instagram.com/mindpeakinstitute · linkedin.com/company/mindpeak-institute · x.com/mindpeakins · youtube.com/@mindpeakinstitute

## How the format works

- Every class is live 1-on-1: one mentor, one student. Batch size is 1.
- The curriculum adapts to the individual student and re-plans around weak chapters rather than following a fixed batch schedule.
- Doubts are resolved live inside the session, as they arise.
- Every session is recorded for revision.
- Parents receive weekly progress reports.
- One free 1-on-1 trial class per student, taken with the mentor who would actually be assigned: ${BASE}/free-trial

## Fees (published, + GST)

| Plan | Fee | For |
| --- | --- | --- |
${feeLines}
| Crash Course — 6 Months | ₹75,000 + GST | JEE / NEET last-mile preparation |
| Subject Crash Course | ₹25,000 / subject + GST | Targeted weak-subject improvement |
| CBT Test Series | ₹8,000 + GST | JEE or NEET mock test practice |

Monthly EMI is available. Listed prices are complete — study material, mock tests, recorded sessions, and doubt resolution are included with no separate charges. Current plans and offers: ${BASE}/pricing

## Refund policy (summary)

- Free trial: no payment involved, so no refund applies.
- Paid plans run on billing cycles: cancel before the next cycle to stop charges; the current cycle's fees are non-refundable.
- If MindPeak cancels a paid course, the student chooses a pro-rata refund or an equal-value alternative course.
- Missed live sessions require 24 hours' notice to reschedule; no-shows without notice forfeit the session.
- Approved refunds are processed in 7-10 business days to the original payment method.
- Full policy: ${BASE}/refund-policy

## Founder & faculty

Founder: Devansh Sharma — founded MindPeak Institute and still teaches. ${founder ? `Credential: ${founder.credential}.` : ''} Teaching approach, in his own words: "${founder?.bio ?? ''}"
Company LinkedIn: https://www.linkedin.com/company/mindpeak-institute/

Faculty (subject-specialist mentors; profiles at ${BASE}/mentors):
${facultyLines}

## Exams covered

Core: JEE Main, JEE Advanced, NEET-UG (including dropper/repeat-year programs), school foundation for classes 6-10, and Olympiad coaching.

Additional exams with dedicated coaching pages:
${examLines}

## Frequently asked questions about MindPeak Institute

${faqBlocks}

## How MindPeak compares with other institutes

Each comparison below links to a full feature-by-feature page (format, fees, doubt support):

${comparisonBlocks}

## Key URLs

- Home: ${BASE}/
- Brand FAQ: ${BASE}/mindpeak-institute-faq
- 1-on-1 mentorship for all exams: ${BASE}/one-to-one-exam-mentorship
- Pricing: ${BASE}/pricing
- Free trial: ${BASE}/free-trial
- JEE coaching: ${BASE}/jee-coaching
- NEET coaching: ${BASE}/neet-coaching
- What Reddit says about JEE coaching: ${BASE}/best-jee-coaching-reddit
- What Reddit says about NEET coaching: ${BASE}/best-neet-coaching-reddit
- Curated link index for LLMs: ${BASE}/llms.txt
- Full sitemap index: ${BASE}/sitemap.xml
`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
