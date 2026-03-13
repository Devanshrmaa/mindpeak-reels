"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { motion } from 'framer-motion';
import { Link } from '@/components/RouterLink';
import {
  ChevronDown, ArrowRight, CheckCircle, BookOpen, Target, Zap,
  BarChart3, GraduationCap, AlertTriangle, Star, Send, Shield, MapPin
} from 'lucide-react';
import { useState, useCallback, FormEvent } from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { buildFAQSchemaFromQA } from '@/components/PageFAQ';
import { parseSubjectCitySlug, buildSubjectCityPage, type SubjectCityPage as SubjectCityData } from '@/data/subjectCityData';

export default function SubjectCityPage() {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const config = parseSubjectCitySlug(slug);
  if (!config) return <Navigate to="/" replace />;

  const page = buildSubjectCityPage(config);
  const { city, exam, subjectLabel } = page;
  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: `MindPeak Institute — ${examLabel} ${subjectLabel} Coaching ${city.city}`,
      description: page.description,
      url: `https://mindpeakinstitute.com/${page.slug}`,
      telephone: '+91-82194-57704',
      address: { '@type': 'PostalAddress', addressLocality: city.city, addressRegion: city.state, addressCountry: 'IN' },
      areaServed: { '@type': 'City', name: city.city },
    },
    buildFAQSchemaFromQA(page.faqs.map(f => ({ q: f.q, a: f.a }))),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: `${examLabel} Coaching in ${city.city}`, item: `https://mindpeakinstitute.com/${exam}-coaching-in-${city.slug}` },
        { '@type': 'ListItem', position: 3, name: `${examLabel} ${subjectLabel} in ${city.city}`, item: `https://mindpeakinstitute.com/${page.slug}` },
      ],
    },
  ];

  return (
    <>
      <SEOHead title={page.title} description={page.description} jsonLd={jsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${exam}-coaching-in-${city.slug}`} className="hover:text-primary transition-colors">{examLabel} Coaching in {city.city}</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{subjectLabel}</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">{city.city}, {city.state}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">{page.heroHeadline}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">{page.heroSubtext}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openDemoModal} className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-[1.02] transition-transform flex items-center gap-2">
                <Zap className="w-4 h-4" /> Book Free {subjectLabel} Demo
              </button>
              <Link href={`/${exam}-coaching-in-${city.slug}`} className="px-8 py-4 border border-border text-foreground font-display font-bold text-sm uppercase tracking-[0.15em] hover:border-primary transition-colors flex items-center gap-2">
                View All {examLabel} Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">Why {examLabel} {subjectLabel} Coaching in {city.city} Matters</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{page.introText}</p>
          </motion.div>
        </div>
      </section>

      {/* Weightage Table */}
      {page.weightageTable.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                <BarChart3 className="inline w-6 h-6 text-primary mr-2" />
                {examLabel} {subjectLabel} Chapter Weightage Analysis
              </h2>
              <p className="text-muted-foreground mb-8">Based on analysis of last 10 years of {examLabel} papers</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="text-left p-3 text-foreground font-display text-sm">Chapter / Unit</th>
                      <th className="text-center p-3 text-foreground font-display text-sm">Weightage</th>
                      <th className="text-center p-3 text-foreground font-display text-sm">Difficulty</th>
                      <th className="text-center p-3 text-foreground font-display text-sm">Avg Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.weightageTable.map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                        <td className="p-3 text-foreground font-medium text-sm">{row.chapter}</td>
                        <td className="p-3 text-center">
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold">{row.weightage}</span>
                        </td>
                        <td className="p-3 text-center text-muted-foreground text-sm">{row.difficulty}</td>
                        <td className="p-3 text-center text-muted-foreground text-sm">{row.avgQuestions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Chapter-wise Study Plan */}
      {page.chapterPlan.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                <Target className="inline w-6 h-6 text-primary mr-2" />
                Chapter-wise {subjectLabel} Study Plan for {city.city} Students
              </h2>
              <p className="text-muted-foreground mb-8">Personalised by your MindPeak mentor based on your current level</p>
              <div className="space-y-4">
                {page.chapterPlan.map((plan, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-colors">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${plan.priority === 'High' ? 'bg-destructive/20 text-destructive' : plan.priority === 'Medium' ? 'bg-primary/20 text-primary' : 'bg-accent/40 text-accent-foreground'}`}>
                      {plan.priority[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        {plan.slug ? (
                          <Link href={`/${plan.slug}`} className="font-display font-bold text-foreground hover:text-primary transition-colors text-sm">{plan.chapter}</Link>
                        ) : (
                          <span className="font-display font-bold text-foreground text-sm">{plan.chapter}</span>
                        )}
                        <span className="text-xs text-muted-foreground">Week {plan.weeks}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{plan.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Study Strategy */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6">
              <BookOpen className="inline w-6 h-6 text-primary mr-2" />
              {examLabel} {subjectLabel} Study Strategy — 12-Month Roadmap
            </h2>
            <div className="prose prose-invert max-w-none text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {page.studyStrategy}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
              <AlertTriangle className="inline w-6 h-6 text-yellow-400 mr-2" />
              Common {subjectLabel} Mistakes {city.city} Students Make
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.commonMistakes.map((mistake, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                  <span className="text-yellow-400 font-bold text-sm flex-shrink-0">#{i + 1}</span>
                  <p className="text-muted-foreground text-sm">{mistake}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '95%', label: 'Selection Rate' },
              { value: '150+', label: 'Marks Improvement' },
              { value: '2,300+', label: 'Students Coached' },
              { value: 'AIR 42', label: 'Best Rank' },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual Backlinks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            <GraduationCap className="inline w-6 h-6 text-primary mr-2" />
            Related Resources for {city.city} Students
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {page.backlinks.map((link, i) => (
              <Link key={i} href={link.href} className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-sm">
                <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions — {examLabel} {subjectLabel} in {city.city}
          </h2>
          <div className="space-y-3">
            {page.faqs.map((faq, i) => (
              <div key={i} className="border border-border/50 rounded-lg overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/5 transition-colors">
                  <span className="text-foreground font-medium text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Star className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Start Your {examLabel} {subjectLabel} Journey from {city.city}
            </h2>
            <p className="text-muted-foreground mb-8">Book a free 1-on-1 {subjectLabel} demo class. No commitments, no pressure — just experience the MindPeak difference.</p>
            <button onClick={openDemoModal} className="px-10 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-[1.02] transition-transform">
              Book Free {subjectLabel} Demo Class
            </button>
            <p className="text-muted-foreground text-xs mt-4">Or call us at +91-82194-57704</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
