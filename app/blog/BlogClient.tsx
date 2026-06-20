"use client";

import { useState, useEffect, useMemo } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { Search, Clock, ArrowUpRight } from 'lucide-react';
import { AtomMotif, HexMotif, DnaMotif, CurveMotif, subjectFor } from './subjects';

const categories = ['All', 'JEE', 'NEET', 'Study Tips', 'Exam Strategy', 'General'] as const;

interface PostSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  featured?: boolean;
  color?: string;
}

/* Bento sizing — featured posts go large; a repeating pattern adds rhythm.
   grid-flow-dense packs the gaps so the mosaic always fills. */
const tileSpan = (post: PostSummary, i: number, defaultView: boolean): string => {
  if (defaultView && post.featured && i < 3) return 'sm:col-span-2 sm:row-span-2';
  const m = i % 9;
  if (m === 4) return 'sm:col-span-2';
  if (m === 7) return 'sm:row-span-2';
  return '';
};

const BentoTile = ({ post, span, index }: { post: PostSummary; span: string; index: number }) => {
  const s = subjectFor(post);
  const big = span.includes('row-span-2');
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: Math.min(index * 0.03, 0.25), duration: 0.4 }}
      className={span}
    >
      <Link to={`/blog/${post.slug}`} className="group relative block h-full min-h-[180px]">
        <article className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${s.gradient} p-5 text-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_hsl(224_40%_22%/0.28)]`}>
          {/* Subject motif — big, faint, animates on hover */}
          <div className={`pointer-events-none absolute ${big ? '-right-8 -bottom-10 h-64 w-64' : '-right-6 -bottom-8 h-40 w-40'} text-white/15 transition-transform duration-700 ease-out group-hover:rotate-[14deg] group-hover:scale-110`}>
            <s.Motif />
          </div>
          {/* Legibility wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
          <div className="absolute inset-0 dot-grid opacity-20 mix-blend-overlay" />

          <div className="relative flex h-full flex-col">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
              {s.label}
            </span>

            <div className="mt-auto">
              <h3 className={`font-display font-black leading-[1.12] ${big ? 'text-2xl sm:text-3xl line-clamp-4' : 'text-lg line-clamp-3'} drop-shadow-sm`}>
                {post.title}
              </h3>
              {big && (
                <p className="mt-2 text-sm text-white/80 line-clamp-2">{post.excerpt}</p>
              )}
              <div className="mt-3 flex items-center justify-between text-[11px] text-white/75">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

/* A few drifting motifs for the masthead backdrop. */
const FloatMotif = ({ Motif, className, delay }: { Motif: () => JSX.Element; className: string; delay: number }) => (
  <motion.div
    aria-hidden
    className={`pointer-events-none absolute text-white/[0.06] ${className}`}
    animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
    transition={{ duration: 9, delay, repeat: Infinity, ease: 'easeInOut' }}
  >
    <Motif />
  </motion.div>
);

export default function BlogClient({ posts }: { posts: PostSummary[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openDemoModal } = useDemoModal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const defaultView = !searchQuery && selectedCategory === 'All';

  const filteredPosts = useMemo(() => posts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }), [posts, searchQuery, selectedCategory]);

  // Featured first in the default view so they take the big tiles up top.
  const ordered = useMemo(() => {
    if (!defaultView) return filteredPosts.slice(0, 60);
    const feat = filteredPosts.filter(p => p.featured);
    const rest = filteredPosts.filter(p => !p.featured);
    return [...feat, ...rest].slice(0, 60);
  }, [filteredPosts, defaultView]);

  return (
    <>
      <SEOHead
        title="Blog — JEE & NEET Preparation Tips | Mindpeak Institute"
        description="Expert tips and strategies for JEE and NEET preparation. Get study guides, exam strategies, time management tips, and subject-specific advice from our experts."
      />
      <Navbar />

      <main className="bg-background min-h-screen">
        {/* ── Masthead ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[hsl(225,43%,7%)] pt-28 sm:pt-32 pb-14 text-white">
          <div className="absolute inset-0 dot-grid opacity-50" />
          <div className="absolute -top-24 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
          <FloatMotif Motif={AtomMotif}  className="top-24 right-[8%] h-40 w-40" delay={0} />
          <FloatMotif Motif={HexMotif}   className="bottom-10 right-[28%] h-28 w-28 hidden sm:block" delay={1.5} />
          <FloatMotif Motif={DnaMotif}   className="top-32 left-[6%] h-36 w-36 hidden md:block" delay={0.8} />
          <FloatMotif Motif={CurveMotif} className="bottom-6 left-[34%] h-24 w-24 hidden lg:block" delay={2.2} />

          <div className="relative max-w-6xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <span>/</span>
                <li className="text-white/80">Blog</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-primary font-semibold">MindPeak Insights</span>
            </div>

            <h1 className="font-display font-black uppercase leading-[0.92] mb-6" style={{ fontSize: 'clamp(2.6rem, 9vw, 6.5rem)' }}>
              Crack It<span className="text-gradient-gold">.</span><br />
              <span className="text-gradient-gold">Subject by Subject.</span>
            </h1>

            <div className="max-w-xl relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search physics, biology, strategy…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-4 py-4 rounded-2xl bg-white/[0.07] border border-white/15 text-white placeholder:text-white/40 backdrop-blur-sm focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
                style={{ paddingLeft: '3.25rem' }}
              />
            </div>
          </div>
        </section>

        {/* ── Filter pills ──────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-gold-glow'
                    : 'border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Bento grid ────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-6 pb-20">
          {ordered.length === 0 ? (
            <div className="text-center py-24 rounded-3xl border border-dashed border-border bg-card/50">
              <Search className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-foreground font-display font-bold text-lg mb-1">No articles found</p>
              <p className="text-muted-foreground">Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-flow-dense auto-rows-[190px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {ordered.map((post, i) => (
                <BentoTile key={post.slug} post={post} span={tileSpan(post, i, defaultView)} index={i} />
              ))}
            </div>
          )}
        </section>

        {/* ── CTA band ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[hsl(225,43%,7%)] py-16 px-6 text-center text-white">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/15 blur-[120px]" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-4">
              Ready to Start Your <span className="text-gradient-gold">Preparation</span> Journey?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Get personalized 1-on-1 coaching from IIT &amp; AIIMS mentors and crack JEE/NEET with confidence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={openDemoModal}
                className="px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-base rounded-full hover:scale-105 transition-transform shadow-gold-glow"
              >
                Book Your Free Demo
              </button>
              <Link
                to="/courses"
                className="px-8 py-4 rounded-full border border-white/25 text-white font-display text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-background transition-all duration-300 flex items-center"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-background border-t border-border py-8 px-6 text-center" role="contentinfo">
          <p className="text-muted-foreground text-xs tracking-wider mb-4">© {new Date().getFullYear()} MindPeak Institute. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <span className="text-border">|</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
