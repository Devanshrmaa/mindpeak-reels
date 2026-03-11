"use client";

import { Link } from '@/components/RouterLink';
import { Navbar } from '@/components/sections/Navbar';
import { AlertTriangle, ArrowRight, Home } from 'lucide-react';

/**
 * NotFoundFallback — renders a proper 404-style page for invalid question slugs
 * instead of doing a client-side redirect (which Google flags as "Page with redirect").
 */
export function NotFoundFallback({ slug, hub, hubLabel }: { slug: string; hub: string; hubLabel: string }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 px-6">
        <div className="max-w-2xl mx-auto text-center py-20">
          <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-display font-bold text-foreground text-3xl mb-4">
            Question Not Found
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            This question may have been updated or moved. Browse our full question bank to find what you're looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={hub}
              className="px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] hover:scale-105 transition-transform flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" /> Browse {hubLabel} Questions
            </Link>
            <Link
              to="/"
              className="px-8 py-4 border border-border text-foreground font-display text-sm uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" /> Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
