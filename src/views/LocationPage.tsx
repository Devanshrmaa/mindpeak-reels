"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { motion } from 'framer-motion';
import { Link } from '@/components/RouterLink';
import { ChevronDown, Phone, ArrowRight, CheckCircle, Users, BarChart3, GraduationCap, MapPin, Building2, Quote, Star, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { cities, allCities, getLocationTitle, getLocationDescription } from '@/data/cityData';
import type { CityData } from '@/data/cityData';
const logo = '/images/logo.jpeg';

const LocationPage = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Parse slug: "jee-coaching-in-delhi" → exam="jee", citySlug="delhi"
  const match = slug?.match(/^(jee|neet)-coaching-in-(.+)$/);
  const exam = match?.[1] as 'jee' | 'neet' | undefined;
  const citySlug = match?.[2];

  const city: CityData | undefined = allCities.find((c) => c.slug === citySlug);

  if (!exam || !city) {
    return <Navigate to="/" replace />;
  }

  const examLabel = exam === 'jee' ? 'JEE' : 'NEET';
  const examFull = exam === 'jee' ? 'JEE Main & Advanced' : 'NEET UG';
  const otherExam = exam === 'jee' ? 'neet' : 'jee';
  const otherExamLabel = exam === 'jee' ? 'NEET' : 'JEE';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `MindPeak Institute — ${examLabel} Coaching ${city.city}`,
      description: getLocationDescription(exam, city.city),
      url: `https://mindpeakinstitute.com/${exam}-coaching-in-${city.slug}`,
      telephone: '+91-82194-57704',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city.city,
        addressRegion: city.state,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
      areaServed: { '@type': 'City', name: city.city },
      priceRange: '₹₹₹',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: city.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
        { '@type': 'ListItem', position: 2, name: `${examLabel} Coaching`, item: `https://mindpeakinstitute.com/courses` },
        { '@type': 'ListItem', position: 3, name: `${examLabel} Coaching in ${city.city}`, item: `https://mindpeakinstitute.com/${exam}-coaching-in-${city.slug}` },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title={getLocationTitle(exam, city.city)}
        description={getLocationDescription(exam, city.city)}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="bg-background pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" className="hover:text-primary transition-colors">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/courses" itemProp="item" className="hover:text-primary transition-colors">
                <span itemProp="name">Courses</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <span>/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-foreground">{examLabel} Coaching in {city.city}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">Personalized 1-on-1 {examFull} Coaching</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
              Best {examLabel} Coaching in{' '}
              <span className="text-gradient-gold">{city.city}</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              {city.educationLandscape}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={openDemoModal}
                className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
              >
                Book Free Demo Class
              </button>
              <a
                href="tel:+918219457704"
                className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call +91 82194 57704
              </a>
            </div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <section className="bg-secondary/30 border-y border-border py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Students Mentored' },
              { value: '95%', label: 'Selection Rate' },
              { value: 'AIR 42', label: `Best ${examLabel} Rank` },
              { value: '1-on-1', label: 'Dedicated Mentoring' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-black text-primary text-2xl md:text-3xl mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1: Why MindPeak for {City} */}
        <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`Why MindPeak for ${city.city}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Why Choose MindPeak for {examLabel} Coaching in{' '}
                <span className="text-gradient-gold">{city.city}</span>?
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
              {city.whyMindPeak}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {city.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 2: 1-on-1 Mentoring Advantage */}
        <section className="bg-card/30 border-y border-border py-16 px-6" aria-label="Mentoring advantage">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  1-on-1 Mentoring Advantage for {city.city} Students
                </h2>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
                {city.mentoringAdvantage}
              </p>

              {/* Comparison Mini-Table */}
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left px-5 py-3 text-foreground font-display">Feature</th>
                      <th className="text-center px-5 py-3 text-primary font-display">MindPeak 1-on-1</th>
                      <th className="text-center px-5 py-3 text-muted-foreground font-display">Batch Coaching</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['Dedicated Mentor', '✓ Personal mentor', '✗ Shared teacher'],
                      ['Adaptive Curriculum', '✓ Tailored to you', '✗ One-size-fits-all'],
                      ['Doubt Resolution', '✓ Instant, 1-on-1', '✗ Crowded sessions'],
                      ['Schedule Flexibility', '✓ Your convenience', '✗ Fixed batches'],
                      ['Progress Tracking', '✓ Weekly analytics', '✗ Periodic tests only'],
                    ].map(([feature, mindpeak, batch], i) => (
                      <tr key={i} className="bg-background">
                        <td className="px-5 py-3 text-foreground">{feature}</td>
                        <td className="px-5 py-3 text-center text-primary">{mindpeak}</td>
                        <td className="px-5 py-3 text-center text-muted-foreground">{batch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Parent-Focused Performance Tracking */}
        <section className="max-w-5xl mx-auto px-6 py-16" aria-label="Performance tracking for parents">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                Parent-Focused Performance Tracking
              </h2>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-4xl">
              {city.parentTracking}
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: 'Weekly Reports', desc: 'Topic-wise accuracy, speed improvements, mock percentiles, and mentor observations delivered every week.' },
                { title: 'Parent Dashboard', desc: 'Real-time visibility into attendance, homework completion, and performance trends — accessible 24/7.' },
                { title: 'Monthly Strategy Calls', desc: 'Detailed mentor-parent discussions on preparation health, lifestyle adjustments, and rank projections.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-foreground font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Student Testimonials */}
        {city.testimonials && city.testimonials.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`${examLabel} coaching testimonials from ${city.city}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  Success Stories from <span className="text-gradient-gold">{city.city}</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Real results from real {city.city} students who transformed their preparation with MindPeak's personalized 1-on-1 coaching.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {city.testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border relative"
                  >
                    <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                      "{t.quote}"
                    </p>
                    <div className="border-t border-border pt-3">
                      <p className="text-foreground font-semibold text-sm">{t.name}</p>
                      <p className="text-primary text-xs font-medium">{t.rank}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Target Colleges */}
        {city.targetColleges && city.targetColleges.length > 0 && (
          <section className="bg-card/30 border-y border-border py-16 px-6" aria-label={`Target colleges for ${city.city} students`}>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                    Top Colleges {city.city} Students Target
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8 max-w-3xl">
                  Our {examLabel} coaching prepares {city.city} students for admission to these premier institutions and more.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {city.targetColleges.map((college, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 rounded-xl bg-background border border-border text-center hover:border-primary/40 transition-colors"
                    >
                      <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="text-foreground text-xs font-medium">{college}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Areas Served */}
        {city.localAreas && city.localAreas.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 py-16" aria-label={`Areas served in ${city.city}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl">
                  {examLabel} Coaching for All Areas in {city.city}
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                MindPeak's online 1-on-1 coaching is available for students across all localities in {city.city}. No commute, no area restrictions — world-class {examLabel} preparation from your home.
              </p>
              <div className="flex flex-wrap gap-2">
                {city.localAreas.map((area, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-xs hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* CTA Band */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Ready to Start Your {examLabel} Journey in {city.city}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ students across India who transformed their preparation with personalized 1-on-1 coaching. Book your free demo class today.
          </p>
          <button
            onClick={openDemoModal}
            className="px-12 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-105 transition-transform"
          >
            Book Your Free Demo — {city.city}
          </button>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-6 py-16" aria-label={`${examLabel} coaching FAQs for ${city.city}`}>
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl text-center mb-10">
            {examLabel} Coaching in {city.city} — <span className="text-gradient-gold">FAQs</span>
          </h2>

          <div className="space-y-3">
            {city.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-background/50 backdrop-blur-xl border-primary/30 shadow-card'
                      : 'bg-background/25 backdrop-blur-lg border-border/40 hover:border-border/70'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/80'}`}>
                      {faq.q}
                    </span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                      <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Internal Links */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <h3 className="font-display font-bold text-foreground text-xl mb-6">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 text-primary" /> Home — About MindPeak Institute
            </Link>
            <Link
              to="/courses"
              className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 text-primary" /> All {examLabel} & {otherExamLabel} Courses
            </Link>
            {city.exams.includes(otherExam) && (
              <Link
                to={`/${otherExam}-coaching-in-${city.slug}`}
                className="px-5 py-3 rounded-lg bg-card border border-border text-foreground text-sm hover:border-primary/40 transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 text-primary" /> {otherExamLabel} Coaching in {city.city}
              </Link>
            )}
          </div>

          {/* Other City Links */}
          <h3 className="font-display font-bold text-foreground text-lg mt-10 mb-4">
            {examLabel} Coaching in Other Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== city.slug && c.exams.includes(exam))
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/${exam}-coaching-in-${c.slug}`}
                  className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground text-xs hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {examLabel} Coaching in {c.city}
                </Link>
              ))}
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="bg-background border-t border-border py-8 px-6 text-center" role="contentinfo">
          <p className="text-muted-foreground text-xs tracking-wider mb-4">
            © 2026 MindPeak Institute. Personalized 1-on-1 {examLabel} Coaching in {city.city}, {city.state}.
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            <span className="text-border">|</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default LocationPage;
