"use client";

import { useEffect, useState } from 'react';
import { Link } from '@/components/RouterLink';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { Calendar, Clock, ArrowLeft, Share2, Copy, CheckCircle, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const logo = '/images/logo.jpeg';

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
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <span>/</span>
            <li className="text-foreground truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${post.color || 'from-primary to-primary/70'} flex items-center justify-center`}>
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
              {post.title}
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
              <span className="font-medium text-foreground">By {post.author}</span>
            </div>

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

            <div className="mb-16">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ ...props }) => <h1 className="font-display font-black text-foreground mt-12 mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }} {...props} />,
                  h2: ({ ...props }) => <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mt-10 mb-4" {...props} />,
                  h3: ({ ...props }) => <h3 className="font-display font-semibold text-foreground text-xl mt-8 mb-3" {...props} />,
                  h4: ({ ...props }) => <h4 className="font-display font-semibold text-foreground text-lg mt-6 mb-2" {...props} />,
                  p: ({ ...props }) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
                  ul: ({ ...props }) => <ul className="list-disc list-outside ml-6 mb-4 space-y-2" {...props} />,
                  ol: ({ ...props }) => <ol className="list-decimal list-outside ml-6 mb-4 space-y-2" {...props} />,
                  li: ({ ...props }) => <li className="text-muted-foreground leading-relaxed" {...props} />,
                  strong: ({ ...props }) => <strong className="font-bold text-foreground" {...props} />,
                  em: ({ ...props }) => <em className="italic text-muted-foreground" {...props} />,
                  blockquote: ({ ...props }) => <blockquote className="border-l-4 border-primary pl-5 my-6 italic text-muted-foreground" {...props} />,
                  code: ({ ...props }) => <code className="bg-secondary/50 text-primary px-2 py-0.5 rounded text-sm font-mono" {...props} />,
                  table: ({ ...props }) => <div className="overflow-x-auto my-6 rounded-xl border border-border"><table className="min-w-full" {...props} /></div>,
                  thead: ({ ...props }) => <thead className="bg-secondary/50" {...props} />,
                  th: ({ ...props }) => <th className="px-5 py-3 text-left text-foreground font-display text-sm" {...props} />,
                  td: ({ ...props }) => <td className="px-5 py-3 text-muted-foreground text-sm border-t border-border" {...props} />,
                  a: ({ href, ...props }) => {
                    const isExternal = href?.startsWith('http') || href?.startsWith('//');
                    if (isExternal) return <a href={href} className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />;
                    return <Link to={href || '#'} className="text-primary hover:underline font-medium" {...props} />;
                  },
                  hr: () => <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-8 sm:p-12 text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src={logo} alt="MindPeak" className="w-10 h-10 rounded-full" width={40} height={40} />
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
