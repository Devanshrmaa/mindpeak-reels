/**
 * Per-slug enrichments for selected "Difference Between" pages.
 *
 * This is NOT a template applied to all ~200 comparison pages. Each entry here is
 * hand-written for one specific comparison, grounded in what NEET/JEE actually tests
 * and the gaps left by the top-ranking competitor pages (which give the table but skip
 * exam weightage, the bookkeeping students get wrong, and worked counting examples).
 *
 * Rendered conditionally in DifferenceBetweenPage.tsx — pages without an entry are
 * unchanged. Seed a new entry only when you have genuinely page-specific substance.
 */

export interface DiffEnrichment {
  slug: string;
  /** A short paragraph with real exam-weightage numbers for this exact topic. */
  examWeightage?: string;
  /** The single fastest way to tell the two apart in an MCQ. */
  fastTip?: { title: string; body: string };
  /** An extra titled table — bookkeeping, worked counting examples, sub-stage map, etc. */
  extraTable?: {
    title: string;
    intro?: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  };
  /** Common student mistakes phrased as the wrong belief + the correction. */
  traps?: { mistake: string; correction: string }[];
  /** Extra FAQs phrased in the searcher's own words. Merged into the page FAQ + schema. */
  faqs?: { q: string; a: string }[];
}

const enrichments: DiffEnrichment[] = [
  // ── Mitosis vs Meiosis (NEET Biology — Cell Cycle & Cell Division) ──
  {
    slug: 'difference-between-mitosis-and-meiosis',
    examWeightage:
      'Cell Cycle and Cell Division contributes roughly 2–3 questions every year in NEET (about 4–5% of the Botany half), and the mitosis-vs-meiosis comparison is its single most-asked angle — usually as a "match the event to the stage" or "which is true of Meiosis I only" MCQ. It overlaps directly with Class 11 Biology Unit on Cell, so the same prep covers your board exam.',
    fastTip: {
      title: 'The 30-second exam check',
      body:
        'Read the question for three words. If it says "growth / repair / somatic / identical" → Mitosis. If it says "gamete / variation / crossing over / halved / homologous pairing" → Meiosis. Crossing over (recombination) happens ONLY in Prophase I of meiosis — if that phrase appears, the answer is never mitosis.',
    },
    extraTable: {
      title: 'Chromosome number vs DNA content — the bookkeeping NEET loves to trap',
      intro:
        'Students lose marks because they assume "chromosome number halves" means "DNA halves". They are tracked separately. Chromosome number is counted as n (sets); DNA content is counted as C (one C = the DNA in a single unreplicated chromatid set). DNA doubles in S-phase BEFORE division even starts.',
      headers: ['Cell / Stage (start → end)', 'Chromosome number', 'DNA content'],
      rows: [
        ['G1 (resting cell)', '2n', '2C'],
        ['After S-phase (G2)', '2n (number unchanged!)', '4C (DNA doubled)'],
        ['Mitosis end (each daughter)', '2n', '2C'],
        ['Meiosis I end (each cell)', 'n (number halved)', '2C (chromatids still joined)'],
        ['Meiosis II end (each gamete)', 'n', '1C'],
      ],
    },
    traps: [
      {
        mistake: '"DNA is halved in Meiosis I because chromosome number halves."',
        correction:
          'Meiosis I takes a cell from 2n,4C to n,2C. The chromosome NUMBER halves (homologues separate) but each chromosome still has two sister chromatids, so DNA per cell goes 4C → 2C, not to 1C. DNA reaches 1C only after Meiosis II.',
      },
      {
        mistake: '"Crossing over and synapsis happen in metaphase."',
        correction:
          'Synapsis (pairing of homologues into bivalents) and crossing over occur in Prophase I — specifically Zygotene (synapsis) and Pachytene (crossing over). Chiasmata become visible in Diplotene.',
      },
      {
        mistake: '"Mitosis and meiosis both produce 4 cells."',
        correction:
          'Mitosis = 1 division = 2 identical diploid cells. Meiosis = 2 divisions (I and II) = 4 genetically different haploid cells. There is no interphase / no DNA replication between Meiosis I and II.',
      },
    ],
    faqs: [
      {
        q: 'Is DNA halved in mitosis or meiosis?',
        a: 'In neither does DNA "halve" in the way most students think. Mitosis keeps each daughter at 2n, 2C (same as a normal G1 cell). Meiosis reduces DNA from 4C to 1C across two divisions — Meiosis I drops 4C → 2C and Meiosis II drops 2C → 1C. The chromosome NUMBER (2n → n) is halved only once, in Meiosis I.',
      },
      {
        q: 'In which phase of meiosis does crossing over occur?',
        a: 'Crossing over occurs in the Pachytene sub-stage of Prophase I, after homologous chromosomes have paired (synapsis, in Zygotene). The five sub-stages of Prophase I in order are Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis. A common NEET mnemonic is "Lazy Zebras Practice Daily Drills".',
      },
      {
        q: 'Why does meiosis produce genetic variation but mitosis does not?',
        a: 'Two meiosis-only events create variation: crossing over (exchange of segments between homologues in Pachytene) and independent assortment (random orientation of the 23 homologous pairs at Metaphase I, giving 2^23 ≈ 8 million combinations in humans). Mitosis copies DNA exactly and separates sister chromatids, so daughter cells are clones — no variation.',
      },
    ],
  },

  // ── Sigma vs Pi bond (JEE Chemistry — Chemical Bonding) ──
  {
    slug: 'difference-between-sigma-and-pi-bond',
    examWeightage:
      'Chemical Bonding contributes roughly 2–3 questions per year in JEE Main and is almost guaranteed in JEE Advanced as part of structure/MOT problems. The single most-repeated sigma-vs-pi task is "count the number of σ and π bonds" in a given molecule — so the skill below is worth more marks than memorising the definitions.',
    fastTip: {
      title: 'The counting rule that scores marks',
      body:
        'You never count π bonds directly — you count single, double and triple bonds. Every bond (single, double or triple) has exactly ONE σ bond. A double bond adds 1 π; a triple bond adds 2 π. So: total σ = total number of bonds + all C–H/X–H bonds; total π = (number of double bonds) + 2 × (number of triple bonds).',
    },
    extraTable: {
      title: 'Worked σ/π counts for the molecules JEE repeats',
      intro:
        'Draw the full structure first, then apply the rule. These exact molecules recur across JEE Main and Advanced papers.',
      headers: ['Molecule', 'σ bonds', 'π bonds'],
      rows: [
        ['N₂ (N≡N)', '1', '2'],
        ['CO₂ (O=C=O)', '2', '2'],
        ['C₂H₄ (ethene)', '5 (4 C–H + 1 C–C)', '1'],
        ['C₂H₂ (ethyne)', '3 (2 C–H + 1 C–C)', '2'],
        ['Benzene C₆H₆', '12 (6 C–H + 6 C–C)', '3'],
        ['HCN (H–C≡N)', '2', '2'],
      ],
    },
    traps: [
      {
        mistake: '"A π bond can exist on its own between two atoms."',
        correction:
          'A π bond never forms first or alone. The first bond between any two atoms is always a σ bond (head-on overlap gives the strongest, lowest-energy bond). π bonds form only as the 2nd and 3rd bonds, on top of an existing σ.',
      },
      {
        mistake: '"More π bonds means a stronger, more stable bond, so it reacts less."',
        correction:
          'π bonds are individually WEAKER (sideways overlap is less effective) and are the reactive site — that is exactly why alkenes/alkynes undergo addition reactions while alkanes (σ-only) are relatively inert. Bond strength order of a multiple bond is correct, but its EXTRA reactivity comes from the exposed π electrons.',
      },
    ],
    faqs: [
      {
        q: 'How do you count sigma and pi bonds in benzene?',
        a: 'Benzene (C₆H₆) has 6 C–H σ bonds + 6 C–C σ bonds = 12 σ bonds, and 3 π bonds (one per alternate "double" bond in a Kekulé structure; in reality these 3 π bonds are delocalised over the ring). A quick rule: for an aromatic ring with n carbons each bearing one H, σ = 2n and π = n/2 for benzene-type rings.',
      },
      {
        q: 'Which is stronger, a sigma or a pi bond, and why?',
        a: 'A σ bond is stronger. Its orbitals overlap head-on along the internuclear axis, giving maximum electron density between the nuclei. A π bond overlaps sideways (above and below the axis), so the overlap — and hence the bond energy — is smaller. This is why the second and third bonds of a multiple bond (the π bonds) break first in reactions.',
      },
      {
        q: 'Does a double bond have one sigma and one pi bond?',
        a: 'Yes. A single bond = 1 σ. A double bond = 1 σ + 1 π. A triple bond = 1 σ + 2 π. The σ bond always forms first; the π bond(s) form by lateral overlap of the leftover p-orbitals. This 1σ-rule is the backbone of every bond-counting question.',
      },
    ],
  },

  // ── Prokaryotic vs Eukaryotic cell (NEET Biology — Cell Structure) ──
  {
    slug: 'difference-between-prokaryotic-and-eukaryotic-cell',
    examWeightage:
      'Cell: The Unit of Life is a high-yield NEET chapter (~2–3 questions/year), and the prokaryote-vs-eukaryote contrast is its anchor concept. NCERT phrases most of these as "which of the following is/are found ONLY in prokaryotes" assertion-reason items, so the exceptions below matter more than the basic table.',
    fastTip: {
      title: 'The exception examiners exploit',
      body:
        'Eukaryotic cells contain 80S cytoplasmic ribosomes — BUT their mitochondria and chloroplasts contain 70S ribosomes (evidence for the endosymbiotic theory). So "all ribosomes in a eukaryote are 80S" is FALSE. This single exception is one of NEET\'s most repeated traps.',
    },
    extraTable: {
      title: 'The four exceptions NEET tests most',
      intro:
        'The plain table says "prokaryote = X, eukaryote = Y". NEET scores its marks on the cases where that breaks down. Memorise these.',
      headers: ['Feature', 'The "rule"', 'The exception NEET asks'],
      rows: [
        ['Ribosomes', 'Pro = 70S, Euk = 80S', 'Mitochondria & chloroplasts (in eukaryotes) have 70S'],
        ['Membrane-bound organelles', 'Only in eukaryotes', 'Mesosome (infolded membrane) is the prokaryotic analogue; cyanobacteria have thylakoid-like membranes'],
        ['Histones / chromosomes', 'Histones only in eukaryotes', 'Archaea (a prokaryote) have histone-like proteins'],
        ['Cell wall material', 'Pro = peptidoglycan', 'Archaea LACK peptidoglycan; plant walls are cellulose, fungal are chitin'],
      ],
    },
    traps: [
      {
        mistake: '"Prokaryotes have no internal membranes at all."',
        correction:
          'Prokaryotes lack membrane-bound ORGANELLES, but they do have membrane infoldings — the mesosome (helps in respiration, DNA replication, cell-wall formation) and, in cyanobacteria, photosynthetic membranes.',
      },
      {
        mistake: '"Viruses are the simplest prokaryotes."',
        correction:
          'Viruses are not cells at all (acellular) — they have no ribosomes, no cytoplasm, and cannot self-replicate. They are neither prokaryotic nor eukaryotic.',
      },
    ],
    faqs: [
      {
        q: 'Do eukaryotic cells have 70S ribosomes?',
        a: 'Yes — but only inside their mitochondria and chloroplasts, which have their own 70S ribosomes (and circular DNA). The ribosomes free in the eukaryotic cytoplasm and on the rough ER are 80S. This dual presence is the core evidence for the endosymbiotic theory and a very common NEET MCQ.',
      },
      {
        q: 'What is the main difference between prokaryotic and eukaryotic DNA?',
        a: 'Prokaryotic DNA is a single, circular, naked molecule (no histones) lying free in the nucleoid region, often with extra circular plasmids. Eukaryotic DNA is linear, wrapped around histone proteins to form chromatin/chromosomes, and enclosed in a membrane-bound nucleus.',
      },
      {
        q: 'Is a mesosome found in prokaryotic or eukaryotic cells?',
        a: 'The mesosome is found only in prokaryotes (bacteria). It is an infolding of the plasma membrane that increases surface area and helps in respiration, secretion, DNA replication and distribution to daughter cells, and formation of the new cell wall during division.',
      },
    ],
  },

  // ── JEE Main vs JEE Advanced (exam comparison) ──
  {
    slug: 'difference-between-jee-main-and-advanced',
    examWeightage:
      'These are two stages of the same admission funnel, not two separate exams. ~12–14 lakh students sit JEE Main; only the top ~2.5 lakh (by NTA percentile) qualify to attempt JEE Advanced; and JEE Advanced fills roughly 17,000+ IIT seats. So your odds and your strategy at each stage are completely different — which is what the comparison below is really about.',
    fastTip: {
      title: 'Which one decides what',
      body:
        'JEE Main rank → NITs, IIITs, GFTIs (via JoSAA) AND your eligibility for Advanced. JEE Advanced rank → IITs only. You cannot enter an IIT through JEE Main alone. If your target is "any good NIT/IIIT", Main is the whole game; sit Advanced only if an IIT seat is realistically in range.',
    },
    extraTable: {
      title: 'How the scoring and rules actually differ',
      intro:
        'The headline "Advanced is harder" is true but vague. These are the concrete rule differences that change how you prepare.',
      headers: ['Aspect', 'JEE Main', 'JEE Advanced'],
      rows: [
        ['How you are ranked', 'NTA percentile (normalised across sessions), best of 2 attempts in a year', 'Absolute aggregate marks in one sitting'],
        ['Pattern', 'Fixed: 3 sections, mostly single-correct + integer, predictable', 'Changes every year: multi-correct, match-the-column, paragraph, integer — set by the host IIT'],
        ['Negative marking', 'Yes on single-correct; usually none on integer-type', 'Varies by section, including partial marking and full-negative multi-correct'],
        ['Board eligibility for the seat', '75% in Class 12 (65% reserved) OR top-20-percentile of your board', 'Same 75% / top-20-percentile rule applies for the IIT seat'],
        ['What "qualifying" means', 'Crossing the category percentile cutoff to enter the top ~2.5 lakh', 'Crossing the category rank cutoff for a seat in JoSAA counselling'],
      ],
    },
    traps: [
      {
        mistake: '"If I clear JEE Main with a good percentile, I am basically into an IIT."',
        correction:
          'A high Main percentile only qualifies you to ATTEMPT Advanced. IIT seats are allotted purely on your JEE Advanced rank. Many students with 99+ percentile in Main still do not clear Advanced — the depth of problems is a different level.',
      },
      {
        mistake: '"Advanced is the same syllabus, just harder questions, so Main prep is enough."',
        correction:
          'The syllabi overlap heavily, but Advanced tests multi-concept, multi-step problems and unfamiliar question formats (multi-correct, comprehension, matrix-match). You can be excellent at Main-style single-correct speed and still struggle with Advanced-style depth. Practise past Advanced papers specifically.',
      },
    ],
    faqs: [
      {
        q: 'Can I get into an IIT through JEE Main only?',
        a: 'No. JEE Main gets you into NITs, IIITs and GFTIs, and it qualifies you to sit JEE Advanced — but every IIT B.Tech seat is allotted on your JEE Advanced rank. There is no IIT admission route that skips Advanced (except a few specific programs like the IIT-BHU/ISM and certain prep courses that still require Advanced).',
      },
      {
        q: 'What percentile in JEE Main is needed to qualify for JEE Advanced?',
        a: 'You need to be in the top ~2.5 lakh rankers across categories. For the General category this has historically meant roughly a 90–93 percentile band, but NTA fixes the exact category-wise percentile cutoff each year after normalisation — it is published only in percentile, never in fixed marks, and it shifts slightly year to year. Treat ~93+ General as a safe working target.',
      },
      {
        q: 'Is JEE Advanced much harder than JEE Main, and is it worth attempting?',
        a: 'Yes, Advanced is significantly harder — it rewards conceptual depth and unusual question formats over speed. It is worth attempting if an IIT seat is a realistic goal for your Main rank; for many students, a strong NIT/IIIT branch via Main is an excellent outcome and chasing Advanced is optional. Be honest about your target: there is no shame in optimising for the seat you can actually win.',
      },
    ],
  },
];

export function getDiffEnrichment(slug: string): DiffEnrichment | undefined {
  return enrichments.find(e => e.slug === slug);
}
