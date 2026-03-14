"use client";

import { usePathname } from 'next/navigation';
import { Navigate } from '@/components/Navigate';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, ArrowRight, Layers } from 'lucide-react';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import { parseNEETPYQHubSlug, getUnitsForClass } from '@/data/neet-pyq/hierarchy';
import { neetPyqSubjectBanks, getNEETPYQChapter } from '@/data/neet-pyq';

const NEETPYQClassHub = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();

  const hubInfo = parseNEETPYQHubSlug(slug);
  if (!hubInfo || hubInfo.type !== 'class') return <Navigate to="/neet-pyq" replace />;

  const bank = neetPyqSubjectBanks.find(b => b.slug === hubInfo.subjectSlug);
  if (!bank) return <Navigate to="/neet-pyq" replace />;

  const classLevel = hubInfo.classLevel!;
  const subj = bank.subject;
  const units = getUnitsForClass(hubInfo.subjectSlug, classLevel);

  // Build unit data with question counts
  const unitsWithData = units.map(unit => {
    const chapters = unit.chapterSlugs.map(chSlug => {
      const ch = getNEETPYQChapter(hubInfo.subjectSlug, chSlug);
      return { slug: chSlug, name: ch?.name ?? chSlug, count: ch?.questions.length ?? 0 };
    });
    const totalQs = chapters.reduce((s, c) => s + c.count, 0);
    return { ...unit, chapters, totalQs };
  });
  const grandTotal = unitsWithData.reduce((s, u) => s + u.totalQs, 0);

  const title = `NEET ${subj} Class ${classLevel} PYQ | Previous Year Questions`;
  const description = `${grandTotal}+ NEET ${subj} Class ${classLevel} previous year questions. Unit-wise and chapter-wise PYQs with solutions.`;

  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `NEET ${subj} Class ${classLevel} PYQ`, description },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'NEET PYQ', item: 'https://mindpeakinstitute.com/neet-pyq' },
      { '@type': 'ListItem', position: 3, name: `${subj} Class ${classLevel}`, item: `https://mindpeakinstitute.com/${slug}` },
    ] },
  ];

  return (
    <>
      <SEOHead title={title} description={description} jsonLd={jsonLd} />
      <Navbar />
      <main className="bg-background pt-20">
        <section className="relative overflow-hidden bg-gradient-to-b from-green-500/5 via-background to-background py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/neet-pyq" className="hover:text-primary transition-colors">NEET PYQ</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{subj} Class {classLevel}</span>
            </nav>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bank.icon}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30 bg-green-500/10 text-green-400">Class {classLevel}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                NEET {subj} Class {classLevel} — <span className="text-green-400">PYQ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-2">
                {grandTotal} previous year questions across {unitsWithData.length} units and {unitsWithData.reduce((s, u) => s + u.chapters.length, 0)} chapters.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 space-y-10">
          {unitsWithData.map((unit, uIdx) => (
            <motion.div key={unit.unitSlug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: uIdx * 0.08 }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-bold text-lg text-foreground flex items-center gap-2">
                  <Layers className="w-5 h-5 text-green-400" /> {unit.unitName}
                </h2>
                <Link to={`/neet-pyq-${hubInfo.subjectSlug}-unit-${unit.unitSlug}`} className="text-xs text-green-400 hover:underline flex items-center gap-1">
                  View unit <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {unit.chapters.map(ch => (
                  <Link
                    key={ch.slug}
                    to={`/neet-pyq-${hubInfo.subjectSlug}-${ch.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 hover:border-green-500/40 hover:bg-green-500/5 transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{ch.name}</p>
                      <p className="text-xs text-muted-foreground">{ch.count} PYQs</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-400 transition-colors ml-auto flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Link to other class */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <Link
            to={`/neet-pyq-${hubInfo.subjectSlug}-class-${classLevel === 11 ? 12 : 11}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/50 text-sm font-medium text-foreground hover:border-green-500/40 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-green-400" />
            View {subj} Class {classLevel === 11 ? 12 : 11} PYQ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/10 p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">Master NEET {subj} Class {classLevel}</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Get personalised coaching and PYQ analysis with MindPeak's expert mentors.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors">
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra={`NEET ${subj} Class ${classLevel} PYQ — ${grandTotal} Questions.`} />
      </main>
    </>
  );
};

export default NEETPYQClassHub;
