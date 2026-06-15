/**
 * Hand-written, per-chapter editorial insight blocks for the highest-value NEET
 * PYQ chapter hubs (from the 2026-06-12 GSC audit, section D: the cell-division
 * and haloalkanes hubs sit at position ~9 for proven queries with zero unique
 * on-page content — just a question list).
 *
 * WHY THIS IS NOT A TEMPLATE:
 * The PYQ hub view is generated from question data alone. Adding a generic
 * "this chapter is important for NEET, practice regularly" block to all 74
 * chapters would be exactly the noun-swap padding the March 2026 penalty
 * punished. Each entry here is researched, chapter-specific teaching content —
 * real NEET weightage, the actual high-yield sub-topics that recur in PYQs, the
 * specific traps students fall for — and applies to ONE chapter only.
 *
 * Keys are `${subjectSlug}-${chapterSlug}` (e.g. `biology-cell-division`).
 * Only chapters with a hand-written entry get the enriched section; the rest
 * render the question list unchanged.
 *
 * Weightage figures are NEET-UG averages over recent papers (NCERT/Careers360/
 * aggregator analysis, verified June 2026). They are stated as ranges because
 * the exact count moves year to year.
 */

import type { FAQItem } from '@/components/PageFAQ';

export interface ChapterInsight {
  /** One-line weightage headline shown as a highlighted stat. */
  weightage: string;
  /** Intro paragraphs rendered above the question list (plain strings). */
  intro: string[];
  /** High-yield sub-topics that recur in PYQs — bullet list. */
  highYield: string[];
  /** The mistake/trap students repeatedly make in this chapter. */
  commonTrap: string;
  /** Chapter-specific FAQs (also emitted as FAQPage JSON-LD). */
  faqs: FAQItem[];
}

const INSIGHTS: Record<string, ChapterInsight> = {
  /* ───────────────────────── Cell Cycle & Cell Division (Biology) ─────────────
     Query: "cell cycle and cell division neet pyq" (pos ~9). The SERP leaders
     give a weightage number and a generic topic list; none front-load the
     prophase-I substage sequence or the counting-numerical pattern that NEET
     actually repeats. */
  'biology-cell-division': {
    weightage:
      'Cell Cycle & Cell Division contributes roughly 2–3 NEET questions almost every year — about 9% of the Class 11 Cell Biology unit and a consistent, high-return chapter.',
    intro: [
      'Cell Cycle & Cell Division is one of the most dependable scoring chapters in NEET Biology: it asks 2–3 questions almost every single year, and the questions stay close to the NCERT text. Because the concepts are finite and the question patterns repeat, this is a chapter where a few hours of focused revision reliably converts into 8–12 marks.',
      'Across the last decade of NEET papers two patterns dominate. First, sequence and stage questions — which substage of prophase I shows synapsis, when chiasmata become visible, which phase has DNA replication. Second, counting numericals — chromosome, chromatid and DNA (C-value) counts at the end of meiosis I, meiosis II or a given mitotic stage. If you can place every event on the timeline and count confidently, you have covered most of what NEET asks here.',
    ],
    highYield: [
      'Prophase I substages in order — Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis (synapsis at zygotene, crossing over at pachytene, chiasmata visible at diplotene, terminalisation at diakinesis).',
      'Cell cycle phases and what happens in each — G1, S (DNA replication, 2C→4C), G2, and M; plus the quiescent G0 phase.',
      'Mitosis vs meiosis: where sister chromatids separate (anaphase of mitosis / anaphase II), where homologues separate (anaphase I), and the significance of meiosis (variation + halving chromosome number).',
      'Counting numericals — chromosome / chromatid / DNA content at the end of meiosis I, II and at mitotic metaphase.',
      'Checkpoints (G1/S, G2/M, spindle-assembly at metaphase) and spindle composition (microtubules of tubulin); inhibitors like colchicine.',
    ],
    commonTrap:
      'The single most common slip: confusing where crossing over happens (pachytene) with where chiasmata first become visible (diplotene). They are different substages — NEET has tested exactly this distinction more than once.',
    faqs: [
      {
        question: 'How many questions come from Cell Cycle and Cell Division in NEET?',
        answer:
          'Typically 2–3 questions in NEET-UG almost every year, making it one of the more reliably tested Class 11 Biology chapters (about 9% of the Cell Biology unit). The questions stay close to NCERT, so it is a high-return chapter to secure early.',
      },
      {
        question: 'Which topics in Cell Cycle and Cell Division are most important for NEET?',
        answer:
          'The prophase I substages and their events (synapsis, crossing over, chiasmata), the cell-cycle phases (G1/S/G2/M and G0), the difference between mitosis and meiosis, and chromosome/chromatid/DNA counting numericals. Spindle-assembly checkpoints and colchicine also recur.',
      },
      {
        question: 'What is the difference between mitosis and meiosis for NEET?',
        answer:
          'Mitosis is one division producing two genetically identical diploid cells (growth and repair); meiosis is two successive divisions producing four genetically varied haploid cells (gametes). In mitosis sister chromatids separate in anaphase; in meiosis homologues separate in anaphase I and sister chromatids only in anaphase II. NEET tests this comparison and the related counts directly.',
      },
      {
        question: 'Is Cell Cycle and Cell Division a hard chapter for NEET?',
        answer:
          'No — it is conceptually contained and NCERT-faithful, which makes it one of the safest scoring chapters once you memorise the prophase I sequence and practise the counting numericals. Solving the previous-year questions on this page is enough to cover most of what NEET asks.',
      },
    ],
  },

  /* ───────────────────────── Haloalkanes & Haloarenes (Chemistry) ─────────────
     Query: "haloalkanes and haloarenes neet pyq" (pos ~9). SERP leaders list
     reactions generically; none front-load the named-reaction table or the
     SN1/SN2 reactivity-order trap that NEET repeats. */
  'chemistry-haloalkanes': {
    weightage:
      'Haloalkanes & Haloarenes contributes roughly 1–2 NEET questions most years — about 4% of the NEET Chemistry paper — and is one of the most named-reaction-dense chapters in Organic Chemistry.',
    intro: [
      'Haloalkanes & Haloarenes is a small but consistent NEET Chemistry chapter: 1–2 questions in most papers, almost always testing either a named reaction or the SN1/SN2 mechanism. Because the testable facts are finite and direct, it is among the highest marks-per-hour chapters in Organic Chemistry — most questions reward memory and clear mechanism understanding rather than long problem-solving.',
      'Two clusters cover the overwhelming majority of PYQs here. First, named reactions — Wurtz, Finkelstein, Swarts, Sandmeyer and Williamson, each with a one-line reagent-and-product summary. Second, substitution mechanisms — SN1 vs SN2 reactivity orders, solvent preferences and stereochemistry (inversion in SN2, racemisation in SN1). Add the polyhalogen "facts" (chloroform → phosgene in light, CCl₄, DDT, Freon) and you have nearly the whole chapter.',
    ],
    highYield: [
      'Named reactions — Wurtz (2 R–X + 2 Na → R–R), Finkelstein (R–Cl + NaI/acetone → R–I), Swarts (R–Cl + AgF → R–F), Sandmeyer (ArN₂⁺ + CuX → Ar–X), Williamson ether synthesis (R–X + R′O⁻ → R–O–R′).',
      'SN2 vs SN1 reactivity order — SN2: 1° > 2° > 3° (steric); SN1: 3° > 2° > 1° (carbocation stability). Solvent: SN1 favours polar protic, SN2 favours polar aprotic.',
      'Stereochemistry — SN2 gives inversion (Walden), SN1 gives racemisation; reagent to distinguish 1°/2°/3° (AgNO₃-ethanol or Lucas-type tests).',
      'Why haloarenes and vinyl halides are less reactive — partial double-bond character of C–X from resonance, so shorter/stronger bond.',
      'Polyhalogen facts — chloroform stored in dark bottles (light → toxic phosgene), CCl₄ as solvent, DDT, Freon-12 (CCl₂F₂) and ozone depletion.',
    ],
    commonTrap:
      'The classic NEET trap: writing the SN2 reactivity order as 3° > 2° > 1°. That is the SN1 order. SN2 is the reverse — methyl and 1° halides react fastest because the backside attack is least hindered.',
    faqs: [
      {
        question: 'How many questions come from Haloalkanes and Haloarenes in NEET?',
        answer:
          'Usually 1–2 questions in NEET-UG most years — about 4% of the Chemistry section. They almost always test a named reaction or the SN1/SN2 mechanism, so it is a high marks-per-hour chapter to lock down.',
      },
      {
        question: 'What are the most important reactions in Haloalkanes and Haloarenes for NEET?',
        answer:
          'The named reactions recur most: Wurtz, Finkelstein, Swarts, Sandmeyer and Williamson ether synthesis. Alongside them, master SN1 vs SN2 (reactivity order, solvent, stereochemistry), elimination giving alkenes (Zaitsev), and the polyhalogen facts — chloroform→phosgene, CCl₄, DDT, Freon.',
      },
      {
        question: 'What is the difference between SN1 and SN2 reaction for NEET?',
        answer:
          'SN1 is a two-step reaction via a carbocation — favoured by 3° halides and polar protic solvents, and it gives racemisation. SN2 is a single-step backside attack — favoured by 1°/methyl halides and polar aprotic solvents, and it gives inversion of configuration (Walden inversion). The reactivity orders are exact opposites, which NEET tests directly.',
      },
      {
        question: 'Why are haloarenes less reactive than haloalkanes in substitution?',
        answer:
          'In haloarenes the halogen lone pair delocalises into the aromatic ring, giving the C–X bond partial double-bond character. That makes the bond shorter and stronger and the carbon less electrophilic, so nucleophilic substitution is much harder than in haloalkanes. Vinyl halides are less reactive for the same resonance reason.',
      },
    ],
  },
};

/** Returns the hand-written insight block for a NEET PYQ chapter hub, if one exists. */
export function getNEETPYQChapterInsight(
  subjectSlug: string,
  chapterSlug: string,
): ChapterInsight | undefined {
  return INSIGHTS[`${subjectSlug}-${chapterSlug}`];
}
