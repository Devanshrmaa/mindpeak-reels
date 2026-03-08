import type { NEETChapterData } from './types';

/* ─── Chapter: Human Health & Disease ─── */
const humanHealth: NEETChapterData = {
  name: 'Human Health & Disease',
  slug: 'human-health-disease',
  topics: [
    {
      name: 'Immunity & Common Diseases',
      slug: 'immunity-common-diseases',
      easy: [
        { q: 'Antibodies are produced by:', o: ['B-lymphocytes (plasma cells)', 'T-lymphocytes', 'Red blood cells', 'Platelets'], a: 0, s: 'B-cells differentiate into plasma cells that secrete antibodies (immunoglobulins).' },
        { q: 'Vaccination provides:', o: ['Active immunity', 'Passive immunity', 'Innate immunity', 'No immunity'], a: 0, s: 'Vaccination introduces antigens → body produces own antibodies = active acquired immunity.' },
        { q: 'Malaria is caused by:', o: ['Plasmodium', 'Salmonella', 'Wuchereria', 'Mycobacterium'], a: 0, s: 'Malaria is caused by Plasmodium species (P. vivax, P. falciparum, etc.).' },
        { q: 'The vector of malaria is:', o: ['Female Anopheles mosquito', 'Male Anopheles', 'Aedes mosquito', 'Culex mosquito'], a: 0, s: 'Female Anopheles mosquito transmits Plasmodium sporozoites during blood meal.' },
        { q: 'AIDS is caused by:', o: ['HIV (Human Immunodeficiency Virus)', 'Hepatitis B virus', 'Mycobacterium', 'Plasmodium'], a: 0, s: 'AIDS is caused by HIV, a retrovirus that attacks CD4+ T-helper cells.' },
        { q: 'Interferons are produced in response to:', o: ['Viral infection', 'Bacterial infection only', 'Parasitic infection only', 'Allergic reaction'], a: 0, s: 'Interferons are cytokines released by virus-infected cells to protect neighbouring cells.' },
      ],
      medium: [
        { q: 'The primary lymphoid organs in humans are:', o: ['Bone marrow and thymus', 'Spleen and lymph nodes', 'MALT and spleen', 'Thymus and spleen'], a: 0, s: 'Primary lymphoid: bone marrow (B-cell maturation) and thymus (T-cell maturation).' },
        { q: 'IgE antibodies are associated with:', o: ['Allergic reactions (Type I hypersensitivity)', 'Complement activation', 'Passive immunity', 'Autoimmunity'], a: 0, s: 'IgE binds to mast cells → antigen cross-linking → histamine release → allergy symptoms.' },
        { q: 'The Widal test is used to diagnose:', o: ['Typhoid', 'Malaria', 'AIDS', 'Tuberculosis'], a: 0, s: 'Widal test detects antibodies against Salmonella typhi (agglutination test for typhoid).' },
        { q: 'Cell-mediated immunity is primarily carried out by:', o: ['T-lymphocytes', 'B-lymphocytes', 'Neutrophils', 'Eosinophils'], a: 0, s: 'T-cells mediate cell-mediated immunity (CMI) — killing infected cells, transplant rejection.' },
        { q: 'The ELISA test is based on:', o: ['Antigen-antibody interaction with enzyme-linked detection', 'PCR amplification', 'Gel electrophoresis', 'Blood culture'], a: 0, s: 'ELISA = Enzyme-Linked Immunosorbent Assay. Detects antigens or antibodies using enzyme-substrate colour.' },
        { q: 'Autoimmune disease occurs when:', o: ['Immune system attacks self cells', 'Immune system is too weak', 'Only B-cells are produced', 'Antigens are absent'], a: 0, s: 'Autoimmunity: loss of self-tolerance → immune system attacks own tissues (e.g., rheumatoid arthritis, lupus).' },
      ],
      hard: [
        { q: 'In the life cycle of Plasmodium, the sexual phase occurs in:', o: ['Female Anopheles mosquito (definitive host)', 'Human liver', 'Human RBCs', 'Human lymph nodes'], a: 0, s: 'Sexual reproduction (gametogony → fertilisation → sporozoite) occurs in mosquito gut. Mosquito = definitive host.' },
        { q: 'Monoclonal antibodies are produced by:', o: ['Hybridoma cells (B-cell + myeloma fusion)', 'T-cells only', 'Natural killer cells', 'Macrophages'], a: 0, s: 'Hybridoma technology: fuse specific B-cell with myeloma cell → unlimited identical antibody production.' },
        { q: 'The major histocompatibility complex (MHC) Class I molecules present antigens to:', o: ['CD8+ cytotoxic T-cells', 'CD4+ helper T-cells', 'B-cells only', 'NK cells only'], a: 0, s: 'MHC-I on all nucleated cells presents endogenous antigens to CD8+ T-cells for killing.' },
        { q: 'HIV primarily infects cells bearing:', o: ['CD4 receptors (T-helper cells, macrophages)', 'CD8 receptors', 'CD19 receptors', 'No specific receptor'], a: 0, s: 'HIV gp120 binds CD4 receptor (+ co-receptors CCR5/CXCR4) → infects helper T-cells and macrophages.' },
      ],
    },
  ],
};

/* ─── Chapter: Reproduction in Organisms ─── */
const reproduction: NEETChapterData = {
  name: 'Human Reproduction',
  slug: 'human-reproduction',
  topics: [
    {
      name: 'Gametogenesis & Fertilisation',
      slug: 'gametogenesis-fertilisation',
      easy: [
        { q: 'Spermatogenesis occurs in:', o: ['Seminiferous tubules of testes', 'Epididymis', 'Vas deferens', 'Prostate gland'], a: 0, s: 'Spermatogenesis takes place in seminiferous tubules, supported by Sertoli cells.' },
        { q: 'Oogenesis produces:', o: ['One ovum and three polar bodies', 'Four ova', 'Two ova and two polar bodies', 'One ovum only'], a: 0, s: 'Oogenesis: unequal division → 1 functional ovum + 3 non-functional polar bodies.' },
        { q: 'Fertilisation in humans normally occurs in:', o: ['Ampulla of fallopian tube', 'Uterus', 'Ovary', 'Cervix'], a: 0, s: 'Fertilisation typically occurs in the ampullary-isthmic junction of the oviduct.' },
        { q: 'The acrosome reaction involves:', o: ['Release of enzymes to penetrate egg coats', 'Tail formation', 'Nuclear division', 'Mitochondrial fusion'], a: 0, s: 'Acrosome releases hyaluronidase and other enzymes to digest zona pellucida for sperm entry.' },
        { q: 'Implantation of the blastocyst occurs in the:', o: ['Endometrium of uterus', 'Fallopian tube', 'Cervix', 'Vagina'], a: 0, s: 'Blastocyst implants in the endometrium (uterine wall) about 6-7 days after fertilisation.' },
      ],
      medium: [
        { q: 'The hormone responsible for maintaining pregnancy is:', o: ['Progesterone', 'Estrogen only', 'LH', 'FSH'], a: 0, s: 'Progesterone (from corpus luteum, then placenta) maintains the endometrium and supports pregnancy.' },
        { q: 'Human chorionic gonadotropin (hCG) is produced by:', o: ['Trophoblast of developing embryo', 'Corpus luteum', 'Anterior pituitary', 'Hypothalamus'], a: 0, s: 'hCG is secreted by trophoblast → maintains corpus luteum → basis of pregnancy tests.' },
        { q: 'The stage of sperm that enters the egg is:', o: ['Secondary oocyte stage (egg) — sperm is mature spermatozoon', 'Primary spermatocyte', 'Spermatogonium', 'Spermatid'], a: 0, s: 'Mature spermatozoon (haploid, capacitated) fertilises the secondary oocyte.' },
        { q: 'Leydig cells produce:', o: ['Testosterone', 'Estrogen', 'Progesterone', 'Inhibin'], a: 0, s: 'Leydig (interstitial) cells in testes produce testosterone under LH stimulation.' },
        { q: 'The placenta acts as a barrier but allows passage of:', o: ['IgG antibodies', 'All blood cells', 'Bacteria', 'IgM antibodies'], a: 0, s: 'IgG is the only immunoglobulin that crosses the placental barrier → passive immunity to fetus.' },
      ],
      hard: [
        { q: 'The correct sequence of spermatogenesis is:', o: ['Spermatogonium → Primary spermatocyte → Secondary spermatocyte → Spermatid → Sperm', 'Spermatogonium → Spermatid → Primary spermatocyte → Sperm', 'Spermatid → Spermatogonium → Primary spermatocyte → Sperm', 'Primary spermatocyte → Spermatogonium → Spermatid → Sperm'], a: 0, s: 'Spermatogonium (2n) → mitosis → primary spermatocyte (2n) → meiosis I → secondary (n) → meiosis II → spermatid (n) → spermiogenesis → sperm.' },
        { q: 'Polyspermy is prevented by:', o: ['Cortical reaction releasing enzymes that harden zona pellucida', 'Acrosome reaction only', 'Egg membrane depolarisation only', 'Sperm competition'], a: 0, s: 'Fast block: membrane depolarisation. Slow block: cortical granules release → zona hardening. Both prevent polyspermy.' },
        { q: 'In IVF (In Vitro Fertilisation), the embryo is typically transferred at:', o: ['8-cell stage or blastocyst stage', 'Zygote stage', 'Gastrula stage', 'Morula only'], a: 0, s: 'IVF embryos are transferred at 8-cell stage (Day 3) or blastocyst stage (Day 5) into the uterus.' },
        { q: 'Capacitation of sperm involves:', o: ['Removal of cholesterol from sperm membrane in female tract', 'Addition of the acrosome', 'Tail elongation', 'Nuclear condensation'], a: 0, s: 'Capacitation in female reproductive tract removes cholesterol and glycoproteins from sperm membrane, enabling acrosome reaction.' },
      ],
    },
  ],
};

export const zoologyExpansion3Chapters: NEETChapterData[] = [humanHealth, reproduction];
