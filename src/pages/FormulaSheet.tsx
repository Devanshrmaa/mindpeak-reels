import { useEffect, useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import { RelatedPages, getRelatedLinksForExam } from '@/components/RelatedPages';
import {
  Download, Phone, BookOpen, CheckCircle, ChevronDown,
  FileText, Star, ArrowRight, Lock,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════
   FormulaSheet — SEO-optimized formula sheet pages
   Each page: preview formulas (SEO content) + gated PDF download
   ═══════════════════════════════════════════════════════ */

interface FormulaSheetData {
  slug: string;
  exam: 'JEE' | 'NEET';
  subject: string;
  title: string;
  description: string;
  heroHeading: string;
  heroHighlight: string;
  heroParagraph: string;
  chapters: {
    name: string;
    formulas: { name: string; expression: string; note?: string }[];
  }[];
  faqs: { q: string; a: string }[];
}

const formulaSheets: FormulaSheetData[] = [
  {
    slug: 'jee-physics-formulas',
    exam: 'JEE', subject: 'Physics',
    title: 'JEE Physics Formula Sheet 2026 — All Chapters PDF Download | MindPeak',
    description: 'Download the complete JEE Physics formula sheet PDF — all chapters, all formulas. Master Mechanics, Electrodynamics, Optics, Thermodynamics & Modern Physics.',
    heroHeading: 'JEE Physics',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'Complete collection of all important JEE Physics formulas organized chapter-wise. Preview below and download the full PDF.',
    chapters: [
      {
        name: 'Mechanics',
        formulas: [
          { name: 'Newton\'s 2nd Law', expression: 'F = ma' },
          { name: 'Work-Energy', expression: 'W = ΔKE = ½mv² − ½mu²' },
          { name: 'Gravitational PE', expression: 'U = −GMm/r' },
          { name: 'SHM Period', expression: 'T = 2π√(m/k)' },
          { name: 'Moment of Inertia (Disc)', expression: 'I = ½MR²' },
          { name: 'Angular Momentum', expression: 'L = Iω = mvr', note: 'Conserved when τ_net = 0' },
        ],
      },
      {
        name: 'Electrostatics & Current',
        formulas: [
          { name: 'Coulomb\'s Law', expression: 'F = kq₁q₂/r²' },
          { name: 'Electric Field', expression: 'E = kQ/r²' },
          { name: 'Gauss\'s Law', expression: 'Φ = Q_enc/ε₀' },
          { name: 'Ohm\'s Law', expression: 'V = IR' },
          { name: 'Power', expression: 'P = VI = I²R = V²/R' },
          { name: 'Capacitance', expression: 'C = Q/V = ε₀A/d', note: 'Parallel plate' },
        ],
      },
      {
        name: 'Magnetism & EMI',
        formulas: [
          { name: 'Biot-Savart', expression: 'dB = (μ₀/4π)(Idl × r̂)/r²' },
          { name: 'Faraday\'s Law', expression: 'EMF = −dΦ/dt' },
          { name: 'Impedance (RLC)', expression: 'Z = √(R² + (XL − XC)²)' },
          { name: 'Self Inductance', expression: 'V = −L(dI/dt)' },
        ],
      },
      {
        name: 'Optics',
        formulas: [
          { name: 'Snell\'s Law', expression: 'n₁ sin θ₁ = n₂ sin θ₂' },
          { name: 'Mirror Formula', expression: '1/v + 1/u = 1/f' },
          { name: 'Lens Formula', expression: '1/v − 1/u = 1/f' },
          { name: 'YDSE Fringe Width', expression: 'β = λD/d' },
        ],
      },
      {
        name: 'Modern Physics',
        formulas: [
          { name: 'Photoelectric', expression: 'KE_max = hν − φ' },
          { name: 'de Broglie', expression: 'λ = h/mv' },
          { name: 'Bohr Energy', expression: 'Eₙ = −13.6Z²/n² eV' },
          { name: 'Half-Life', expression: 't½ = 0.693/λ' },
        ],
      },
    ],
    faqs: [
      { q: 'Is this JEE Physics formula sheet sufficient for JEE Main?', a: 'Yes — it covers all formulas from NCERT and standard reference books. However, understanding derivations and applications is equally important. MindPeak\'s 1-on-1 coaching ensures you can apply every formula in exam conditions.' },
      { q: 'How to use formula sheets effectively for JEE revision?', a: 'Revise the formula sheet every 3-4 days. Don\'t just read — test yourself by covering the formula and recalling it. Practice 5 problems per formula to build application skills. Our mentors create personalised revision schedules.' },
    ],
  },
  {
    slug: 'jee-chemistry-formulas',
    exam: 'JEE', subject: 'Chemistry',
    title: 'JEE Chemistry Formula Sheet 2026 — Physical, Organic & Inorganic | MindPeak',
    description: 'Download the complete JEE Chemistry formula sheet — Physical Chemistry equations, Organic named reactions, Inorganic trends. Free PDF from MindPeak Institute.',
    heroHeading: 'JEE Chemistry',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'All important JEE Chemistry formulas — Physical Chemistry equations, Organic reaction mechanisms, and Inorganic Chemistry trends in one place.',
    chapters: [
      {
        name: 'Physical Chemistry',
        formulas: [
          { name: 'Ideal Gas', expression: 'PV = nRT' },
          { name: 'Gibbs Free Energy', expression: 'ΔG = ΔH − TΔS' },
          { name: 'Nernst Equation', expression: 'E = E° − (0.0592/n)log Q', note: 'At 25°C' },
          { name: 'First Order Rate', expression: 'k = (2.303/t)log(a/(a−x))' },
          { name: 'pH', expression: 'pH = −log[H⁺]' },
          { name: 'Raoult\'s Law', expression: 'P = P°·x', note: 'For ideal solution' },
        ],
      },
      {
        name: 'Organic Chemistry',
        formulas: [
          { name: 'Degree of Unsaturation', expression: 'DoU = (2C + 2 + N − H − X)/2' },
          { name: 'Markovnikov\'s Rule', expression: 'H adds to C with more H atoms' },
          { name: 'SN1 Rate Order', expression: '3° > 2° > 1° > methyl' },
          { name: 'SN2 Rate Order', expression: 'methyl > 1° > 2° > 3°', note: 'Inversion' },
          { name: 'Acidity Order', expression: 'More stable conjugate base = stronger acid' },
        ],
      },
      {
        name: 'Inorganic Chemistry',
        formulas: [
          { name: 'Magnetic Moment', expression: 'μ = √(n(n+2)) BM' },
          { name: 'Crystal Field Splitting', expression: 'Δ_oct > Δ_tet (Δ_tet = 4/9 Δ_oct)' },
          { name: 'EAN', expression: 'EAN = Z − OS + 2(CN)' },
          { name: 'Lattice Energy', expression: 'U ∝ (Z⁺ × Z⁻)/(r⁺ + r⁻)' },
        ],
      },
    ],
    faqs: [
      { q: 'Which JEE Chemistry formulas are most important?', a: 'Physical Chemistry formulas (Nernst, rate laws, thermodynamics) carry the most numerical marks. Organic named reactions are equally important. Focus on Physical Chemistry formulas for reliable scoring.' },
      { q: 'How many formulas do I need to memorise for JEE Chemistry?', a: 'Approximately 80-100 key formulas across Physical, Organic, and Inorganic Chemistry. Our formula sheet is curated to cover all frequently tested formulas. Quality of understanding matters more than quantity.' },
    ],
  },
  {
    slug: 'jee-maths-formulas',
    exam: 'JEE', subject: 'Mathematics',
    title: 'JEE Mathematics Formula Sheet 2026 — Calculus, Algebra, Trigonometry | MindPeak',
    description: 'Download the complete JEE Maths formula sheet — Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors & 3D. All important formulas in one PDF.',
    heroHeading: 'JEE Mathematics',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'Every important JEE Mathematics formula from Calculus, Algebra, Coordinate Geometry, Trigonometry, and 3D Geometry — organized for quick revision.',
    chapters: [
      {
        name: 'Calculus',
        formulas: [
          { name: 'L\'Hospital\'s Rule', expression: 'lim f(x)/g(x) = lim f\'(x)/g\'(x)', note: 'For 0/0 or ∞/∞' },
          { name: 'Integration by Parts', expression: '∫u·v dx = u∫v dx − ∫(u\'·∫v dx)dx' },
          { name: 'Area Under Curve', expression: 'A = ∫ₐᵇ |f(x)| dx' },
          { name: 'DE (Linear)', expression: 'IF = e^(∫P dx)' },
        ],
      },
      {
        name: 'Algebra',
        formulas: [
          { name: 'Quadratic', expression: 'x = (−b ± √(b²−4ac))/2a' },
          { name: 'Sum of GP', expression: 'S = a(rⁿ−1)/(r−1)' },
          { name: 'Euler\'s Formula', expression: 'e^(iθ) = cos θ + i sin θ' },
          { name: 'Binomial', expression: 'T(r+1) = ⁿCr · aⁿ⁻ʳ · bʳ' },
        ],
      },
      {
        name: 'Coordinate Geometry',
        formulas: [
          { name: 'Distance', expression: 'd = √((x₂−x₁)² + (y₂−y₁)²)' },
          { name: 'Circle', expression: 'x² + y² + 2gx + 2fy + c = 0' },
          { name: 'Parabola', expression: 'y² = 4ax' },
          { name: 'Ellipse', expression: 'x²/a² + y²/b² = 1' },
        ],
      },
      {
        name: 'Trigonometry & Vectors',
        formulas: [
          { name: 'sin²θ + cos²θ', expression: '= 1' },
          { name: 'sin(A±B)', expression: 'sin A cos B ± cos A sin B' },
          { name: 'Dot Product', expression: 'a⃗ · b⃗ = |a||b|cos θ' },
          { name: 'Cross Product', expression: '|a⃗ × b⃗| = |a||b|sin θ' },
        ],
      },
    ],
    faqs: [
      { q: 'How many formulas in JEE Maths?', a: 'JEE Mathematics has approximately 120-150 key formulas. Calculus alone has 40+. Our curated sheet covers all frequently tested ones. The key is understanding when to apply each formula.' },
      { q: 'Is memorising formulas enough for JEE Maths?', a: 'No — JEE tests application, not recall. You need to practice 200+ problems using each formula to build problem-solving intuition. MindPeak mentors focus on building this application skill through 1-on-1 practice sessions.' },
    ],
  },
  {
    slug: 'neet-biology-formulas',
    exam: 'NEET', subject: 'Biology',
    title: 'NEET Biology Important Facts & Formulas 2026 — All Chapters | MindPeak',
    description: 'Complete NEET Biology formulas, key facts & important values — Human Physiology, Genetics, Ecology, Cell Biology. Free revision sheet from MindPeak Institute.',
    heroHeading: 'NEET Biology',
    heroHighlight: 'Key Facts & Formulas',
    heroParagraph: 'All important NEET Biology facts, values, and formulas organized chapter-wise. Perfect for last-minute revision before the exam.',
    chapters: [
      {
        name: 'Human Physiology',
        formulas: [
          { name: 'Cardiac Output', expression: 'CO = SV × HR ≈ 5 L/min' },
          { name: 'Vital Capacity', expression: 'VC = ERV + TV + IRV ≈ 4500 mL' },
          { name: 'GFR', expression: '125 mL/min = 180 L/day' },
          { name: 'Blood Composition', expression: 'Plasma (55%) + Formed Elements (45%)' },
        ],
      },
      {
        name: 'Genetics',
        formulas: [
          { name: 'Monohybrid F2', expression: '3:1 phenotypic, 1:2:1 genotypic' },
          { name: 'Dihybrid F2', expression: '9:3:3:1 phenotypic ratio' },
          { name: 'Hardy-Weinberg', expression: 'p² + 2pq + q² = 1' },
          { name: 'Chargaff\'s Rule', expression: 'A = T, G = C' },
        ],
      },
      {
        name: 'Ecology',
        formulas: [
          { name: '10% Rule', expression: 'Each trophic level = 10% of previous' },
          { name: 'Logistic Growth', expression: 'dN/dt = rN(K−N)/K' },
          { name: 'Species-Area', expression: 'log S = log C + Z·log A' },
          { name: 'Shannon Index', expression: 'H\' = −Σ(pi × ln pi)' },
        ],
      },
    ],
    faqs: [
      { q: 'Does NEET Biology have formulas?', a: 'While Biology is more conceptual than Physics/Chemistry, there are important values (cardiac output, GFR, etc.) and ecological formulas (logistic growth, Shannon index) that are directly tested. Our sheet covers all such quantitative facts.' },
      { q: 'How to revise Biology before NEET exam?', a: 'Use this formula/facts sheet for quick revision 1 week before the exam. Combine with NCERT re-reading of key chapters and diagram practice. MindPeak provides personalised revision schedules based on your weak areas.' },
    ],
  },
  {
    slug: 'neet-physics-formulas',
    exam: 'NEET', subject: 'Physics',
    title: 'NEET Physics Formula Sheet 2026 — All Chapters PDF | MindPeak',
    description: 'Download complete NEET Physics formulas — Mechanics, Electrodynamics, Optics, Modern Physics. Chapter-wise revision sheet for NEET UG 2026.',
    heroHeading: 'NEET Physics',
    heroHighlight: 'Formula Sheet',
    heroParagraph: 'All important NEET Physics formulas organized by chapter. Simpler than JEE but equally important — master these for 45/45 in Physics.',
    chapters: [
      {
        name: 'Mechanics',
        formulas: [
          { name: 'Equations of Motion', expression: 'v = u + at, s = ut + ½at²' },
          { name: 'Work-Energy', expression: 'W = ΔKE' },
          { name: 'Escape Velocity', expression: 'vₑ = √(2gR)' },
          { name: 'SHM Period (Pendulum)', expression: 'T = 2π√(L/g)' },
        ],
      },
      {
        name: 'Electromagnetism',
        formulas: [
          { name: 'Coulomb\'s Law', expression: 'F = kq₁q₂/r²' },
          { name: 'Ohm\'s Law', expression: 'V = IR' },
          { name: 'Faraday\'s Law', expression: 'EMF = −dΦ/dt' },
        ],
      },
      {
        name: 'Optics & Modern',
        formulas: [
          { name: 'Mirror Formula', expression: '1/v + 1/u = 1/f' },
          { name: 'Photoelectric', expression: 'KE = hν − φ' },
          { name: 'Bohr Energy', expression: 'Eₙ = −13.6/n² eV' },
          { name: 'Half-Life', expression: 'N = N₀(½)^(t/t½)' },
        ],
      },
    ],
    faqs: [
      { q: 'Is NEET Physics formula-based?', a: 'Yes — NEET Physics is mostly formula application. Unlike JEE, problems are straightforward and test direct formula substitution. Master the formulas and you can score 40+ out of 45.' },
    ],
  },
];

export const FORMULA_SLUGS = formulaSheets.map((f) => f.slug);

function getFormulaSheet(slug: string): FormulaSheetData | undefined {
  return formulaSheets.find((f) => f.slug === slug);
}

/* ═══════════════════════════ Component ═══════════════════════════ */

const FormulaSheet = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace('/', '');
  const data = getFormulaSheet(slug);
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [gateOpen, setGateOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  if (!data) return <Navigate to="/" replace />;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead title={data.title} description={data.description} />
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="bg-background min-h-screen pt-20 sm:pt-24 overflow-x-hidden">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li><Link to={data.exam === 'JEE' ? '/jee-coaching' : '/neet-coaching'} className="hover:text-primary transition-colors">{data.exam} Coaching</Link></li>
            <span>/</span>
            <li className="text-foreground">{data.subject} Formula Sheet</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Free Download</span>
            </div>
            <h1 className="font-display font-black text-foreground text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              {data.heroHeading} <span className="text-gradient-gold">{data.heroHighlight}</span> 2026
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">{data.heroParagraph}</p>
          </motion.div>
        </section>

        {/* Formula Preview — all formulas visible for SEO */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 space-y-10">
          {data.chapters.map((ch, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                {ch.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ch.formulas.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/40">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-semibold text-sm">{f.name}</p>
                      <p className="text-primary font-mono text-sm mt-0.5">{f.expression}</p>
                      {f.note && <p className="text-muted-foreground text-xs mt-1">{f.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Download CTA */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 mb-16">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-gold/5 p-6 sm:p-8 text-center">
            <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-2">
              Download Complete PDF + Get Expert Guidance
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Get the full formula sheet PDF with derivation tips + a free 1-on-1 demo class with an IIT/AIIMS mentor.
            </p>
            <button
              onClick={openDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition"
            >
              <Download className="w-5 h-5" />
              Get PDF + Book Free Demo
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
          <h2 className="font-display font-bold text-foreground text-2xl text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {data.faqs.map((f, i) => (
              <div key={i} className={`rounded-xl border transition-all ${openFaq === i ? 'border-primary/30 bg-card/50' : 'border-border'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="text-sm font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
          <RelatedPages
            title="Related Resources"
            links={getRelatedLinksForExam(data.exam)}
          />
        </div>

        <PageFooter />
      </main>
    </>
  );
};

export default FormulaSheet;
