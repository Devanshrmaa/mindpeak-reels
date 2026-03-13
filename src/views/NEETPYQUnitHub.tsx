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
import { parseNEETPYQHubSlug, getUnitBySlug, neetPyqHierarchy } from '@/data/neet-pyq/hierarchy';
import { neetPyqSubjectBanks, getNEETPYQChapter } from '@/data/neet-pyq';

const NEETPYQUnitHub = () => {
  const pathname = usePathname();
  const slug = pathname.replace(/^\//, '');
  const { openDemoModal } = useDemoModal();

  const hubInfo = parseNEETPYQHubSlug(slug);
  if (!hubInfo || hubInfo.type !== 'unit') return <Navigate to="/neet-pyq" replace />;

  const bank = neetPyqSubjectBanks.find(b => b.slug === hubInfo.subjectSlug);
  const unit = getUnitBySlug(hubInfo.subjectSlug, hubInfo.unitSlug!);
  if (!bank || !unit) return <Navigate to="/neet-pyq" replace />;

  const subj = bank.subject;

  // Get chapters with question counts
  const chaptersWithData = unit.chapterSlugs.map(chSlug => {
    const ch = getNEETPYQChapter(hubInfo.subjectSlug, chSlug);
    return { slug: chSlug, name: ch?.name ?? chSlug, count: ch?.questions.length ?? 0, years: ch ? [...new Set(ch.questions.map(q => q.year))].sort((a, b) => b - a) : [] };
  });
  const totalQs = chaptersWithData.reduce((s, c) => s + c.count, 0);

  const title = `NEET ${subj} PYQ — ${unit.unitName} | Unit-wise Previous Year Questions`;
  const description = `${totalQs}+ NEET ${subj} PYQs from ${unit.unitName} (Class ${unit.classLevel}). Chapter-wise breakdown with year filters and solutions.`;

  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `NEET ${subj} PYQ — ${unit.unitName}`, description },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mindpeakinstitute.com' },
      { '@type': 'ListItem', position: 2, name: 'NEET PYQ', item: 'https://mindpeakinstitute.com/neet-pyq' },
      { '@type': 'ListItem', position: 3, name: `${subj} Class ${unit.classLevel}`, item: `https://mindpeakinstitute.com/neet-pyq-${hubInfo.subjectSlug}-class-${unit.classLevel}` },
      { '@type': 'ListItem', position: 4, name: unit.unitName, item: `https://mindpeakinstitute.com/${slug}` },
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
              <Link to={`/neet-pyq-${hubInfo.subjectSlug}-class-${unit.classLevel}`} className="hover:text-primary transition-colors">{subj} Class {unit.classLevel}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{unit.unitName}</span>
            </nav>
            <motion.div animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{bank.icon}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30 bg-green-500/10 text-green-400">Unit PYQ</span>
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                {unit.unitName} — <span className="text-green-400">NEET PYQ</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-2">
                {totalQs} previous year questions across {chaptersWithData.length} chapters in {unit.unitName} ({subj} Class {unit.classLevel}).
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chaptersWithData.map((ch, i) => (
              <motion.div key={ch.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link
                  to={`/neet-pyq-${hubInfo.subjectSlug}-${ch.slug}`}
                  className="block rounded-xl border border-border bg-card/50 p-5 hover:border-green-500/40 hover:bg-green-500/5 transition-colors group h-full"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <h3 className="font-display font-semibold text-foreground text-sm">{ch.name}</h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-400 transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{ch.count} PYQs</p>
                  {ch.years.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {ch.years.slice(0, 5).map(y => (
                        <span key={y} className="text-[10px] rounded-full px-1.5 py-0.5 bg-secondary/50 text-muted-foreground border border-border">{y}</span>
                      ))
                      }
                      {ch.years.length > 5 && <span className="text-[10px] text-muted-foreground">+{ch.years.length - 5}</span>}
                    </div>
                  )}
                </Link>
              </motion.div>
            ))
            }
          </div>
        </section>

        {/* Other units at same class level */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">Other {subj} Units — Class {unit.classLevel}</h2>
          <div className="flex flex-wrap gap-2">
            {neetPyqHierarchy.find(s => s.subjectSlug === hubInfo.subjectSlug)?.units
              .filter(u => u.classLevel === unit.classLevel && u.unitSlug !== unit.unitSlug)
              .map(u => (
                <Link
                  key={u.unitSlug}
                  to={`/neet-pyq-${hubInfo.subjectSlug}-unit-${u.unitSlug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-green-500/40 transition-colors"
                >
                  <Layers className="w-4 h-4 text-green-400" /> {u.unitName}
                </Link>
              ))
            }
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/10 p-8 text-center">
            <h2 className="font-display font-bold text-xl text-foreground mb-2">Master {unit.unitName} for NEET</h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">Get chapter-wise PYQ analysis and expert mentoring with MindPeak.</p>
            <button onClick={openDemoModal} className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-600 transition-colors">
              Book Free Demo Class <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        <PageFooter extra={`NEET ${subj} PYQ — ${unit.unitName} — ${totalQs} Questions.`} />
      </main>
    </>
  );
};

export default NEETPYQUnitHub;
