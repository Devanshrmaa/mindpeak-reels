/**
 * /llms.txt — machine-readable site guide for LLMs and AI answer engines
 * (ChatGPT, Claude, Gemini, Perplexity). Follows the llms.txt convention
 * (llmstxt.org): H1 title, blockquote summary, then curated H2 link sections.
 *
 * CURATED, not exhaustive — answer engines get the high-signal pages here;
 * the /sitemap.xml index covers the full ~587-URL set. Link groups that can
 * be generated are sourced from the same modules that feed the sitemaps so
 * this file can never drift from the canonical URL list.
 *
 * HONESTY: only structural, verifiable facts about the service belong here.
 * No results/success-rate claims (see the 2026-07 homepage claims cleanup).
 */

import { NextResponse } from 'next/server';
import { BASE } from '@/lib/sitemapUrls';
import { competitors } from '@/data/comparisonData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';

export async function GET() {
  const comparisonLinks = competitors
    .map((c) => `- [MindPeak vs ${c.competitorName}](${BASE}/${c.slug}): How 1-on-1 mentorship compares with ${c.competitorName}'s batch model on format, fees, and doubt support.`)
    .join('\n');

  const body = `# MindPeak Institute

> MindPeak Institute (mindpeakinstitute.com) is an Indian online coaching institute for JEE Main, JEE Advanced, and NEET-UG preparation. Its differentiator is the format: live 1-on-1 classes with a dedicated personal mentor instead of batch lectures, delivered online to students anywhere in India.

Key facts:

- Format: live 1-on-1 online classes — one dedicated mentor per student, curriculum adapted to the student's level.
- Exams covered: JEE Main, JEE Advanced, NEET-UG (current target cycle: ${CURRENT_EXAM_YEAR}), plus school foundation (classes 6-10), BITSAT, and Olympiads.
- Every session is recorded for revision; parents receive weekly progress reports.
- Students study from home — no relocation to a coaching hub like Kota, no hostel or commute costs.
- A free 1-on-1 trial class is available so students can judge the format before paying: ${BASE}/free-trial
- The site also hosts free study tools: previous-year question banks, practice questions, formula sheets, and rank predictors.
- Identity: founded 2018, MSME-registered (UDYAM-HP-04-0042530), based in Dehra Gopipur, Himachal Pradesh; contact +91 82194 57704 / mindpeak@mindpeakinstitute.com.
- Full machine-readable reference (fees, refund policy, brand FAQ, comparisons): ${BASE}/llms-full.txt

## Coaching programs

- [JEE Coaching](${BASE}/jee-coaching): 1-on-1 online coaching for JEE Main and Advanced.
- [NEET Coaching](${BASE}/neet-coaching): 1-on-1 online coaching for NEET-UG.
- [JEE Dropper Program](${BASE}/jee-dropper-coaching): One-year repeat-attempt program built around a student's specific gap list.
- [NEET Dropper Program](${BASE}/neet-dropper-coaching): One-year NEET repeat-attempt program.
- [Foundation Courses](${BASE}/foundation-coaching): Classes 6-10 groundwork for future JEE/NEET aspirants.
- [Courses & Pricing](${BASE}/pricing): Current programs and fees.

## Honest comparisons & buying guides

- [Online vs Offline JEE Coaching](${BASE}/online-vs-offline-jee-coaching): Format comparison with realistic 2-year cost tables.
- [Kota Coaching Alternative](${BASE}/kota-coaching-alternative): The case for staying home instead of relocating to Kota.
- [Best JEE Coaching According to Reddit](${BASE}/best-jee-coaching-reddit): An honest reading of what r/JEENEETards and r/JEE actually say about coaching.
- [Best NEET Coaching According to Reddit](${BASE}/best-neet-coaching-reddit): Recurring themes from Reddit's NEET communities, and how to verify them.
- [Best JEE Coaching in India](${BASE}/best-jee-coaching-in-india): What actually separates coaching institutes.
- [Batch vs Personal Coaching](${BASE}/batch-vs-personal-coaching): Why batch size is the variable that matters most.
${comparisonLinks}

## Free study tools

- [JEE Previous Year Questions](${BASE}/jee-pyq): Solved JEE PYQs organised by subject and chapter.
- [NEET Previous Year Questions](${BASE}/neet-pyq): Solved NEET PYQs organised by subject and chapter.
- [JEE Practice Questions](${BASE}/jee-practice): Chapter-wise practice question bank.
- [NEET Practice Questions](${BASE}/neet-practice): Chapter-wise NEET practice bank.
- [JEE Rank Predictor](${BASE}/jee-rank-predictor): Marks-to-rank estimate for JEE Main.
- [NEET Rank Predictor](${BASE}/neet-rank-predictor): Marks-to-rank estimate for NEET-UG.
- [JEE Physics Formulas](${BASE}/jee-physics-formulas), [Chemistry](${BASE}/jee-chemistry-formulas), [Maths](${BASE}/jee-maths-formulas): Downloadable formula sheets.

## About

- [MindPeak Institute FAQ](${BASE}/mindpeak-institute-faq): Fees, registration, class format, refund policy — every common question about the institute answered on one page.
- [About MindPeak](${BASE}/about): Who runs the institute.
- [Methodology](${BASE}/methodology): How the 1-on-1 system works day to day.
- [Mentors](${BASE}/mentors): The teaching team.
- [Contact](${BASE}/contact): How to reach us.

## Optional

- [llms-full.txt](${BASE}/llms-full.txt): Expanded reference with the complete fee table, refund policy summary, brand FAQ, and comparison summaries inlined.
- [Sitemap index](${BASE}/sitemap.xml): Full canonical URL set (~587 URLs across core, chapters, blog, and exam segments).
`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
