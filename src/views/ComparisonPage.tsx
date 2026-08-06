"use client";

import { useEffect } from 'react';
import { Link } from '@/components/RouterLink';
import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { PageFAQ, buildFAQSchema } from '@/components/PageFAQ';
import { useDemoModal } from '@/components/DemoBookingModal';
import { CheckCircle, XCircle, ArrowRight, Phone, Award, Target, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
const logo = '/images/logo.jpeg';
import { competitors } from '@/data/comparisonData';
import { CURRENT_EXAM_YEAR } from '@/lib/examYears';
import type { CompetitorData } from '@/data/comparisonData';

/* ─── Competitor strengths (honest) ─── */
const competitorStrengths: Record<string, { title: string; desc: string }[]> = {
  Allen: [
    { title: 'Massive Student Community', desc: 'With thousands of peers in Kota, Allen provides a highly competitive environment that naturally motivates top-performing students to push harder.' },
    { title: 'Long Track Record', desc: 'Decades of JEE/NEET coaching experience with consistent topper production. Allen\'s structured material (especially test series) is well-regarded industry-wide.' },
    { title: 'Physical Lab & Library Access', desc: 'For students who benefit from physical infrastructure — libraries, labs, and on-campus study halls — Allen\'s Kota campus provides a focused environment.' },
  ],
  Resonance: [
    { title: 'Strong Faculty Base', desc: 'Resonance has invested in recruiting experienced teachers who create structured, concept-heavy content that forms a solid preparation foundation.' },
    { title: 'Smaller Batches Than Some Competitors', desc: 'Compared to some Kota institutes, Resonance maintains relatively smaller batch sizes (50-100 students), offering somewhat more teacher accessibility.' },
    { title: 'Comprehensive Study Material', desc: 'Resonance\'s printed study material and test series are thorough and well-organized, covering all difficulty levels for JEE & NEET.' },
  ],
  FIITJEE: [
    { title: 'Pioneer in JEE Coaching', desc: 'FIITJEE essentially created the modern JEE coaching industry. Their curriculum depth and problem banks (especially for JEE Advanced) are among the best available.' },
    { title: 'Strong IIT Brand Association', desc: 'Many FIITJEE faculty are IIT alumni, bringing authentic exam experience and problem-solving philosophy to their teaching.' },
    { title: 'Pan-India Presence', desc: 'With centers in 40+ cities, FIITJEE offers local classroom access for students who prefer offline learning with a nationally recognized brand.' },
  ],
  "BYJU'S": [
    { title: 'Excellent Production Quality', desc: 'BYJU\'S video content is among the best produced in Indian edtech — high-quality animations, clear explanations, and engaging visuals for concept building.' },
    { title: 'Massive Content Library', desc: 'From Class 6 to competitive exams, BYJU\'S offers the broadest content library in Indian edtech, useful for foundational concept building.' },
    { title: 'Brand Trust & Accessibility', desc: 'As India\'s largest edtech company, BYJU\'S is widely recognized and their app-based model makes content accessible on any smartphone.' },
  ],
};

/* ─── Who should choose whom ─── */
const whoShouldChoose: Record<string, { mindpeak: string[]; competitor: string[] }> = {
  Allen: {
    mindpeak: [
      'Students who need personalized attention and adaptive pacing',
      'Families who don\'t want to send children to Kota',
      'Students who struggle in competitive batch environments',
      'Budget-conscious families (save ₹65K+ per year)',
      'Students who need flexible schedules around school',
    ],
    competitor: [
      'Top-5% students who thrive independently in high-competition environments',
      'Students who perform best with physical classroom discipline',
      'Families already located in Kota with no relocation cost',
    ],
  },
  Resonance: {
    mindpeak: [
      'Students who need dedicated mentor attention',
      'Families wanting to avoid Kota relocation stress',
      'Students with specific weak areas needing targeted coaching',
      'Families seeking weekly transparency into child\'s progress',
    ],
    competitor: [
      'Students who prefer physical classroom learning',
      'Students near a Resonance center with no commute burden',
      'Families with strong preference for offline printed material',
    ],
  },
  FIITJEE: {
    mindpeak: [
      'Students who need more attention than batch coaching provides',
      'Budget-conscious families (MindPeak is cheaper)',
      'Students needing flexible scheduling',
      'Families seeking weekly progress reports and accountability',
      'Students in cities without FIITJEE centers',
    ],
    competitor: [
      'Students who want to access FIITJEE\'s legendary problem banks in-person',
      'Self-driven students comfortable in competitive batch settings',
      'Students near a FIITJEE center wanting offline experience',
    ],
  },
  "BYJU'S": {
    mindpeak: [
      'Students who need live human mentorship (not recorded videos)',
      'Students who lack self-discipline for app-based learning',
      'Families wanting weekly human mentor interaction',
      'Students preparing for JEE Advanced (needs personalized problem-solving)',
      'Students who dropped off from BYJU\'s app due to lack of engagement',
    ],
    competitor: [
      'Students who prefer self-paced, content-first learning',
      'Families looking for foundational (school-level) concept videos',
      'Budget learners seeking supplementary content only',
    ],
  },
};

const ComparisonPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, ''); // e.g. "mindpeak-vs-allen"
  const { openDemoModal } = useDemoModal();
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const data: CompetitorData | undefined = competitors.find(c => c.slug === slug);
  if (!data) return <Navigate to="/" replace />;

  const strengths = competitorStrengths[data.competitorName] ?? [];
  const who = whoShouldChoose[data.competitorName] ?? { mindpeak: [], competitor: [] };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.metaTitle,
      description: data.metaDescription,
      url: `https://mindpeakinstitute.com/${data.slug}`,
    },
    buildFAQSchema(data.faqs),
  ];

  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} jsonLd={jsonLd} />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">{data.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} priority />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">Honest Comparison</p>
                <p className="text-muted-foreground text-sm">{data.title} — Which One Is Right for You?</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
              {data.title.split('vs')[0]}vs <span className="text-gradient-gold">{data.competitorName}</span> — Detailed Comparison for JEE &amp; NEET {CURRENT_EXAM_YEAR - 1}-{String(CURRENT_EXAM_YEAR).slice(-2)}
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">{data.intro}</p>

            <div className="flex flex-wrap gap-4">
              <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book Free Trial →
              </button>
              <a href="tel:+918219457704" className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Quick Comparison: <span className="text-primary">MindPeak</span> vs <span className="text-blue-400">{data.competitorName}</span>
            </motion.h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-muted-foreground py-3 px-4 font-semibold">Feature</th>
                    <th className="text-left text-primary py-3 px-4 font-semibold">MindPeak</th>
                    <th className="text-left text-blue-400 py-3 px-4 font-semibold">{data.competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="py-3 px-4 text-muted-foreground font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-foreground">
                        {row.mindpeak.startsWith('✓') ? (
                          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{row.mindpeak.slice(2)}</span>
                        ) : row.mindpeak.startsWith('✗') ? (
                          <span className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{row.mindpeak.slice(2)}</span>
                        ) : row.mindpeak}
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {row.competitor.startsWith('✓') ? (
                          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />{row.competitor.slice(2)}</span>
                        ) : row.competitor.startsWith('✗') ? (
                          <span className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{row.competitor.slice(2)}</span>
                        ) : row.competitor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why MindPeak Wins */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Why Students Choose <span className="text-gradient-gold">MindPeak</span> Over {data.competitorName}
          </motion.h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Key advantages that make MindPeak the preferred choice for JEE & NEET preparation.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {data.whyBetter.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-secondary/30 border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  {[<Award />, <Target />, <TrendingUp />, <Users />][i % 4]}
                  <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Competitor Strengths (Honest) */}
        {strengths.length > 0 && (
          <section className="bg-secondary/30 border-y border-border py-16 px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                Where <span className="text-blue-400">{data.competitorName}</span> Excels
              </motion.h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Being honest — here&rsquo;s what {data.competitorName} genuinely does well.</p>

              <div className="grid md:grid-cols-3 gap-6">
                {strengths.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-background border border-border rounded-lg p-6">
                    <h3 className="font-display font-bold text-foreground mb-2 text-sm">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Who Should Choose */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Who Should Choose <span className="text-gradient-gold">MindPeak</span> vs <span className="text-blue-400">{data.competitorName}</span>?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Choose MindPeak */}
            <div className="bg-secondary/30 border border-primary/30 rounded-lg p-8">
              <h3 className="font-display font-bold text-primary text-lg mb-6">Choose MindPeak If:</h3>
              <ul className="space-y-3">
                {who.mindpeak.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Competitor */}
            <div className="bg-secondary/30 border border-border rounded-lg p-8">
              <h3 className="font-display font-bold text-blue-400 text-lg mb-6">Choose {data.competitorName} If:</h3>
              <ul className="space-y-3">
                {who.competitor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                    <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Pricing: <span className="text-primary">MindPeak</span> vs <span className="text-blue-400">{data.competitorName}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/30 border border-primary/30 rounded-lg p-8 text-center">
              <h3 className="font-display font-bold text-primary text-xl mb-2">MindPeak</h3>
              <p className="text-3xl font-display font-black text-foreground mb-2">₹1,30,000<span className="text-sm text-muted-foreground font-normal"> + GST / year*</span></p>
              <p className="text-muted-foreground text-sm mb-4">All-inclusive. No hidden costs. <span className="text-green-400 font-semibold">*After discount</span></p>
              <ul className="text-left space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />Dedicated 1-on-1 mentor</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />Daily live sessions (6 days/week)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />Adaptive curriculum</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />All sessions recorded</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />Weekly parent reports</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" />Study from home</li>
              </ul>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-8 text-center">
              <h3 className="font-display font-bold text-blue-400 text-xl mb-2">{data.competitorName}</h3>
              <p className="text-3xl font-display font-black text-foreground mb-2">
                {data.competitorName === 'Allen' ? '₹2,00,000+' : data.competitorName === 'Resonance' ? '₹1,80,000+' : data.competitorName === 'FIITJEE' ? '₹1,50,000+' : '₹1,50,000+'}
                <span className="text-sm text-muted-foreground font-normal"> / year (total)</span>
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {data.competitorName === "BYJU'S" ? 'App subscription + add-on costs' : 'Tuition + hostel + food + transport'}
              </p>
              <ul className="text-left space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />Shared teacher (batch of 60-200)</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />Fixed curriculum for everyone</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />{data.competitorName === "BYJU'S" ? 'Mostly recorded content' : 'Classes not recorded'}</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />{data.competitorName === "BYJU'S" ? 'No dedicated human mentor' : 'Limited doubt resolution windows'}</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />{data.competitorName === "BYJU'S" ? 'App-based analytics only' : 'Quarterly parent meetings'}</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" />{data.competitorName === "BYJU'S" ? 'High dropout rate' : 'Away from home'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final Verdict */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Honest <span className="text-gradient-gold">Verdict</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {data.competitorName} is a {data.competitorName === "BYJU'S" ? 'massive edtech platform' : 'reputable coaching institute'} with genuine strengths.
              However, for the <strong className="text-foreground">majority of JEE &amp; NEET aspirants</strong> who need personalized attention, adaptive curriculum, and accountability —
              MindPeak&rsquo;s 1-on-1 model delivers significantly better outcomes at a{' '}
              {data.competitorName === 'FIITJEE' ? 'lower' : 'comparable or lower'} price.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The best way to decide? <strong className="text-foreground">Try both.</strong> MindPeak offers a <strong className="text-primary">free trial class</strong> so you can experience the difference firsthand — no commitment, no pressure.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <PageFAQ items={data.faqs} heading={`${data.title}`} highlight="FAQs" />

        {/* Internal Links */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-xl font-bold text-foreground mb-6">Related Comparisons</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {competitors.filter(c => c.slug !== data.slug).map(c => (
              <Link key={c.slug} to={`/${c.slug}`} className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
                <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">{c.title}</p>
                <p className="text-xs text-muted-foreground mt-1">Detailed comparison →</p>
              </Link>
            ))}
            <Link to="/kota-coaching-alternative" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">Kota Coaching Alternative</p>
              <p className="text-xs text-muted-foreground mt-1">Why MindPeak beats Kota →</p>
            </Link>
            <Link to="/online-vs-offline-jee-coaching" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">Online vs Offline Coaching</p>
              <p className="text-xs text-muted-foreground mt-1">Complete analysis →</p>
            </Link>
            <Link to="/jee-coaching" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">JEE Personalized Coaching</p>
              <p className="text-xs text-muted-foreground mt-1">1-on-1 JEE mentorship program →</p>
            </Link>
            <Link to="/neet-coaching" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">NEET Personalized Coaching</p>
              <p className="text-xs text-muted-foreground mt-1">1-on-1 NEET mentorship program →</p>
            </Link>
          </div>

          <h2 className="font-display text-xl font-bold text-foreground mt-12 mb-6">Free Prep Resources & Tools</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/jee-practice" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">JEE Practice Questions</p>
              <p className="text-xs text-muted-foreground mt-1">Chapter-wise MCQs with solutions →</p>
            </Link>
            <Link to="/jee-pyq" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">JEE Previous Year Questions</p>
              <p className="text-xs text-muted-foreground mt-1">PYQs from JEE Main &amp; Advanced →</p>
            </Link>
            <Link to="/neet-practice" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">NEET Practice Questions</p>
              <p className="text-xs text-muted-foreground mt-1">Biology, Physics, Chemistry MCQs →</p>
            </Link>
            <Link to="/jee-rank-predictor" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">JEE Rank Predictor</p>
              <p className="text-xs text-muted-foreground mt-1">Estimate your JEE rank free →</p>
            </Link>
            <Link to="/mentors" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">Meet Our IIT &amp; AIIMS Mentors</p>
              <p className="text-xs text-muted-foreground mt-1">Verified credentials &amp; profiles →</p>
            </Link>
            <Link to="/methodology" className="bg-secondary/30 border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group">
              <p className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">MindPeak Teaching Methodology</p>
              <p className="text-xs text-muted-foreground mt-1">How our 1-on-1 sessions work →</p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Experience the <span className="text-gradient-gold">MindPeak Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Don&rsquo;t just take our word for it. Book a free trial class and see why students switch from {data.competitorName} to MindPeak.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform">
                Book Free Trial Class →
              </button>
              <a href="tel:+918219457704" className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 82194 57704
              </a>
            </div>
          </motion.div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default ComparisonPage;
