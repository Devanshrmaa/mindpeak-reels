"use client";

import { useEffect, useState, useMemo, type ReactNode } from 'react';
import { Link } from '@/components/RouterLink';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  Calendar, Clock, ArrowLeft, Share2, Copy, CheckCircle,
  Lightbulb, Info, AlertTriangle, Sparkles, List,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { subjectFor } from '../subjects';

const logo = '/images/logo.jpeg';

/* Flatten ReactMarkdown children to plain text (for heading ids + callout sniffing). */
const mdText = (node: ReactNode): string => {
  if (node == null || node === false) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(mdText).join('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = (node as any)?.props;
  return props ? mdText(props.children) : '';
};

const slugify = (s: string): string =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/* Paragraphs that open with these labels render as colour-coded callout cards. */
const CALLOUTS: { re: RegExp; Icon: typeof Info; wrap: string; icon: string }[] = [
  { re: /^(pro tip|tip)\b/i, Icon: Lightbulb, wrap: 'border-emerald-400 bg-emerald-500/10', icon: 'text-emerald-600' },
  { re: /^(note|info|fyi)\b/i, Icon: Info, wrap: 'border-blue-400 bg-blue-500/10', icon: 'text-blue-600' },
  { re: /^(important|key takeaway|key point|key|remember)\b/i, Icon: Sparkles, wrap: 'border-primary bg-primary/10', icon: 'text-primary' },
  { re: /^(warning|caution|avoid|common mistake|mistake|trap|don.?t)\b/i, Icon: AlertTriangle, wrap: 'border-amber-400 bg-amber-500/10', icon: 'text-amber-600' },
];

interface SerializedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  content: string;
  color?: string;
}

export default function BlogPostClient({ post }: { post: SerializedPost }) {
  const { openDemoModal } = useDemoModal();
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const subject = subjectFor(post);
  const Motif = subject.Motif;
  const gradient = subject.gradient;

  // Build a table of contents from the H2 headings in the markdown.
  const toc = useMemo(() => {
    const items: { text: string; id: string }[] = [];
    for (const line of post.content.split('\n')) {
      const m = /^##\s+(?!#)(.+?)\s*$/.exec(line);
      if (m) {
        const text = m[1].replace(/[*_`]/g, '').trim();
        items.push({ text, id: slugify(text) });
      }
    }
    return items;
  }, [post.content]);

  useEffect(() => { window.scrollTo(0, 0); }, [post.slug]);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${post.slug}` : '';
  const shareText = encodeURIComponent(`Check out: ${post.title}`);

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    if (urls[platform]) window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead title={`${post.title} — Mindpeak Blog`} description={post.excerpt} />

      {/* Reading-progress bar */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-gradient-to-r from-gold to-gold-dark"
        style={{ scaleX: progress }}
      />

      <Navbar />

      <main className="bg-background min-h-screen">
        {/* ── Article hero (navy band) ──────────────────────────────── */}
        <header className="relative overflow-hidden bg-[hsl(225,43%,7%)] pt-28 sm:pt-32 pb-14 text-white">
          <div className="absolute inset-0 dot-grid opacity-50" />
          <div className={`absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-br ${gradient} opacity-25 blur-[130px]`} />
          {/* Large faint subject motif */}
          <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 text-white/[0.07] hidden sm:block">
            <Motif />
          </div>

          <div className="relative max-w-4xl mx-auto px-6">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <span>/</span>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <span>/</span>
                <li className="text-white/80 truncate max-w-[180px]">{post.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase shadow-lg`}>
                <span className="h-4 w-4">{<Motif />}</span> {subject.label}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-semibold tracking-[0.15em] uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="font-display font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.5rem)' }}>
              {post.title}
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-7 max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
              <span className="font-medium text-white/90">By {post.author}</span>
            </div>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-6 pt-12 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-border">
              <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Share
              </span>
              {(['facebook', 'twitter', 'linkedin'] as const).map((p) => (
                <button key={p} onClick={() => handleShare(p)} className="px-4 py-2 border border-border rounded-full text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors capitalize">{p}</button>
              ))}
              <button onClick={copyLink} className="px-4 py-2 border border-border rounded-full text-xs text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors flex items-center gap-1.5">
                {copied ? <><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy Link</>}
              </button>
            </div>

            {/* Table of contents */}
            {toc.length >= 3 && (
              <nav aria-label="In this article" className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-card">
                <p className="mb-4 flex items-center gap-2 font-display font-bold text-foreground">
                  <List className="h-4 w-4 text-primary" /> In this article
                </p>
                <ol className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {toc.map((t, i) => (
                    <li key={t.id}>
                      <a href={`#${t.id}`} className="group flex items-baseline gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <span className="font-display font-bold text-primary/60 group-hover:text-primary">{String(i + 1).padStart(2, '0')}</span>
                        <span className="line-clamp-1">{t.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="mb-16 text-[1.0625rem] leading-relaxed [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1 [&>p:first-of-type]:first-letter:font-display [&>p:first-of-type]:first-letter:font-black [&>p:first-of-type]:first-letter:text-6xl [&>p:first-of-type]:first-letter:leading-[0.8] [&>p:first-of-type]:first-letter:text-primary">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="font-display font-black text-foreground mt-4 mb-5" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)' }}>{children}</h1>,
                  h2: ({ children }) => (
                    <h2 id={slugify(mdText(children))} className="scroll-mt-24 mt-12 mb-5 flex items-center gap-3 font-display font-bold text-foreground text-2xl md:text-3xl">
                      <span className="inline-block h-7 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-gold to-gold-dark" />
                      <span>{children}</span>
                    </h2>
                  ),
                  h3: ({ children }) => <h3 id={slugify(mdText(children))} className="scroll-mt-24 font-display font-semibold text-foreground text-xl mt-8 mb-3">{children}</h3>,
                  h4: ({ children }) => <h4 className="font-display font-semibold text-foreground text-lg mt-6 mb-2">{children}</h4>,
                  p: ({ children }) => {
                    const text = mdText(children).trimStart();
                    const c = CALLOUTS.find((x) => x.re.test(text));
                    if (c) {
                      const Icon = c.Icon;
                      return (
                        <div className={`my-6 flex gap-3 rounded-xl border-l-4 p-4 ${c.wrap}`}>
                          <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${c.icon}`} />
                          <p className="leading-relaxed text-foreground/80 [&>strong]:text-foreground">{children}</p>
                        </div>
                      );
                    }
                    return <p className="text-foreground/80 leading-relaxed mb-5">{children}</p>;
                  },
                  ul: ({ children }) => <ul className="list-disc marker:text-primary pl-6 mb-5 space-y-2.5">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal marker:text-primary marker:font-bold pl-6 mb-5 space-y-2.5">{children}</ol>,
                  li: ({ children }) => <li className="text-foreground/80 leading-relaxed pl-1.5">{children}</li>,
                  strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                  em: ({ children }) => <em className="italic">{children}</em>,
                  blockquote: ({ children }) => (
                    <blockquote className="relative my-8 overflow-hidden rounded-2xl border border-border bg-secondary/50 py-6 pl-14 pr-6 [&>p]:mb-0 [&>p]:font-display [&>p]:text-lg [&>p]:italic [&>p]:text-foreground">
                      <span aria-hidden className="absolute left-4 top-2 font-display text-5xl leading-none text-primary/40">&ldquo;</span>
                      {children}
                    </blockquote>
                  ),
                  pre: ({ children }) => <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-[hsl(225,43%,9%)] p-4 text-sm text-white/90">{children}</pre>,
                  code: ({ children }) => <code className="rounded bg-secondary/60 px-1.5 py-0.5 text-sm font-mono text-primary">{children}</code>,
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto rounded-xl border border-border shadow-card">
                      <table className="min-w-full text-sm [&_tbody_tr:nth-child(even)]:bg-secondary/25">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => <thead className="bg-gradient-to-r from-secondary to-secondary/60">{children}</thead>,
                  th: ({ children }) => <th className="px-5 py-3.5 text-left text-foreground font-display font-semibold text-sm">{children}</th>,
                  td: ({ children }) => <td className="px-5 py-3 text-foreground/80 border-t border-border align-top">{children}</td>,
                  a: ({ href, children }) => {
                    const isExternal = href?.startsWith('http') || href?.startsWith('//');
                    if (isExternal) return <a href={href} className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary" target="_blank" rel="noopener noreferrer">{children}</a>;
                    return <Link to={href || '#'} className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary">{children}</Link>;
                  },
                  img: ({ src, alt }) => <img src={typeof src === 'string' ? src : ''} alt={alt || ''} loading="lazy" className="my-8 w-full rounded-2xl border border-border shadow-card" />,
                  hr: () => (
                    <div aria-hidden className="my-10 flex items-center justify-center gap-2">
                      <span className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
                      <span className="h-1.5 w-1.5 rotate-45 bg-primary/50" />
                      <span className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 sm:p-12 text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={logo} alt="MindPeak" className="w-10 h-10 rounded-full" />
              </div>
              <h3 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">Ready to Excel in Your Preparation?</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Get personalized 1-on-1 coaching and achieve your JEE/NEET goals with expert guidance.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={openDemoModal} className="px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-sm rounded-full hover:scale-105 transition-transform shadow-gold-glow">Book Your Free Demo</button>
                <Link to="/courses" className="px-10 py-4 border border-primary text-primary font-display text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center">Explore Courses</Link>
              </div>
            </div>
          </motion.div>
        </article>

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
