"use client";

import { Link } from '@/components/RouterLink';
import { ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { getAllPosts } from '@/lib/blogResolver';

export const BlogHighlights = () => {
  const featured = useMemo(() => getAllPosts().filter(p => p.featured).slice(0, 3), []);
  if (!featured.length) return null;

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background border-t border-foreground/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-foreground/10" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70 font-medium">Blog</span>
            </div>
            <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl tracking-[-0.02em]">
              JEE &amp; NEET <span className="text-gradient-gold">Preparation Tips</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-1.5 text-primary/70 hover:text-primary text-xs uppercase tracking-[0.15em] transition-colors"
          >
            All Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {featured.map(post => {
            const Icon = post.icon;
            return (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <div className="rounded-2xl border border-foreground/[0.06] bg-foreground/[0.02] p-6 hover:border-primary/15 hover:bg-foreground/[0.04] transition-all duration-400 group h-full flex flex-col">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.color ?? 'from-primary to-primary/60'} flex items-center justify-center mb-4 shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium mb-1">{post.category}</span>
                  <h3 className="font-display font-semibold text-foreground text-sm leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground/70 text-xs line-clamp-2 leading-relaxed mb-3">{post.excerpt}</p>
                  <span className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">{post.readTime}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="sm:hidden text-center mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-primary/70 hover:text-primary text-xs uppercase tracking-[0.15em] transition-colors"
          >
            View All JEE &amp; NEET Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
