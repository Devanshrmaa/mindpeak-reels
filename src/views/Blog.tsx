"use client";

import { useState, useEffect, useMemo } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { getAllPosts } from '@/lib/blogResolver';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { Search, Clock, Calendar, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import type { BlogPost } from '@/data/blogData';

const categories = ['All', 'JEE', 'NEET', 'Study Tips', 'Exam Strategy', 'General'] as const;

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

/* ── Magazine lead card: the single most prominent article ───────────── */
const LeadCard = ({ post }: { post: BlogPost }) => {
  const Icon = post.icon;
  return (
    <Link to={`/blog/${post.slug}`} className="group block lg:col-span-2 lg:row-span-2">
      <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_hsl(224_40%_22%/0.16)]">
        {/* Visual panel — gradient stands in for hero imagery */}
        <div className={`relative h-52 sm:h-64 bg-gradient-to-br ${post.color ?? 'from-primary to-gold-dark'} overflow-hidden`}>
          <div className="absolute inset-0 dot-grid opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <Icon className="absolute -bottom-6 -right-4 w-44 h-44 text-white/15 rotate-12" strokeWidth={1} />
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Editor&rsquo;s Pick
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5 text-muted-foreground font-medium normal-case tracking-normal">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h3 className="font-display font-black text-foreground text-2xl sm:text-[2rem] leading-[1.1] mb-4 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 max-w-2xl">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" /> {formatDate(post.publishDate)}
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read article
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

/* ── Compact featured card (the two secondary spots) ─────────────────── */
const SecondaryCard = ({ post }: { post: BlogPost }) => {
  const Icon = post.icon;
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="flex h-full gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-400 hover:-translate-y-1 hover:border-primary/30">
        <div className={`shrink-0 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${post.color ?? 'from-primary to-gold-dark'}`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">{post.category}</span>
          <h3 className="font-display font-bold text-foreground leading-snug mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>
      </article>
    </Link>
  );
};

/* ── Standard grid card for the full article list ────────────────────── */
const ArticleCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const Icon = post.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: Math.min(index * 0.04, 0.3), duration: 0.5 }}
    >
      <Link to={`/blog/${post.slug}`} className="group block h-full">
        <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_48px_hsl(224_40%_22%/0.14)]">
          {/* Top gradient accent strip */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${post.color ?? 'from-primary to-gold-dark'}`} />

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${post.color ?? 'from-primary to-gold-dark'} shadow-sm`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-secondary-foreground">
                {post.category}
              </span>
            </div>

            <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-2.5 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5 flex-1">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="rounded-md bg-primary/8 px-2 py-0.5 text-[10px] font-medium text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {formatDate(post.publishDate)}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openDemoModal } = useDemoModal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allPosts = useMemo(() => getAllPosts(), []);

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = allPosts.filter(post => post.featured).slice(0, 3);
  const showFeatured = !searchQuery && selectedCategory === 'All' && featuredPosts.length > 0;

  return (
    <>
      <SEOHead
        title="Blog — JEE & NEET Preparation Tips | Mindpeak Institute"
        description="Expert tips and strategies for JEE and NEET preparation. Get study guides, exam strategies, time management tips, and subject-specific advice from our experts."
      />

      <Navbar />

      <main className="bg-background min-h-screen">
        {/* ── Editorial masthead (dark navy band for contrast) ──────── */}
        <section className="relative overflow-hidden bg-[hsl(225,43%,7%)] pt-28 sm:pt-32 pb-16 sm:pb-20 text-white">
          {/* Atmosphere */}
          <div className="absolute inset-0 dot-grid opacity-50" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />

          <div className="relative max-w-6xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <span>/</span>
                <li className="text-white/80">Blog</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-primary font-semibold">
                MindPeak Insights
              </span>
            </div>

            <h1 className="font-display font-black uppercase leading-[0.95] mb-6" style={{ fontSize: 'clamp(2.6rem, 8vw, 6rem)' }}>
              The <span className="text-gradient-gold">Journal</span>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
              Strategy, study systems, and exam-day playbooks from IIT &amp; AIIMS mentors — written to help you crack JEE, NEET, and build habits that outlast any exam.
            </p>

            {/* Search */}
            <div className="max-w-xl relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search topics, tips, strategies…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-13 pr-4 py-4 rounded-2xl bg-white/[0.07] border border-white/15 text-white placeholder:text-white/40 backdrop-blur-sm focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
                style={{ paddingLeft: '3.25rem' }}
              />
            </div>

            {/* Stats strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-primary text-xl">{allPosts.length}+</span>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.12em]">Articles</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-primary text-xl">{categories.length - 1}</span>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.12em]">Topics</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-primary text-xl">Weekly</span>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.12em]">New Guides</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured (magazine layout) ────────────────────────────── */}
        {showFeatured && (
          <section className="max-w-6xl mx-auto px-6 -mt-8 sm:-mt-10 relative z-10 pb-8">
            <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
              <LeadCard post={featuredPosts[0]} />
              {featuredPosts.slice(1, 3).map((post) => (
                <SecondaryCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* ── Category filter ───────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl">
              {searchQuery
                ? <><span className="text-gradient-gold">{filteredPosts.length}</span> result{filteredPosts.length === 1 ? '' : 's'}</>
                : <>All <span className="text-gradient-gold">Articles</span></>}
            </h2>
            <span className="hidden sm:block flex-1 h-px bg-border" />
          </div>
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

        {/* ── Article grid ──────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 rounded-3xl border border-dashed border-border bg-card/50">
              <Search className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-foreground font-display font-bold text-lg mb-1">No articles found</p>
              <p className="text-muted-foreground">Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post, i) => (
                <ArticleCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </section>

        {/* ── CTA band (navy) ───────────────────────────────────────── */}
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
                to="/jee-coaching"
                className="px-8 py-4 rounded-full border border-white/25 text-white font-display text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-background transition-all duration-300 flex items-center"
              >
                JEE Coaching
              </Link>
              <Link
                to="/neet-coaching"
                className="px-8 py-4 rounded-full border border-white/25 text-white font-display text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-background transition-all duration-300 flex items-center"
              >
                NEET Coaching
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-8 px-6 text-center" role="contentinfo">
          <p className="text-muted-foreground text-xs tracking-wider mb-4">
            © {new Date().getFullYear()} MindPeak Institute. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <span className="text-border">|</span>
            <Link to="/refund-policy" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Blog;
