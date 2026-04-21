"use client";

import { Navbar } from '@/components/sections/Navbar';
import { PageFooter } from '@/components/PageFooter';
import { Link } from '@/components/RouterLink';
import { Award, BookOpen, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Author } from '@/data/authorData';

export default function MentorsClient({ authors }: { authors: Author[] }) {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-10 pb-16 text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <span>/</span>
              <li className="text-foreground">Our Mentors</li>
            </ol>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-foreground mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            LEARN FROM <span className="text-gradient-gold">IIT & AIIMS</span> ALUMNI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Every MindPeak mentor is an IIT or AIIMS graduate with 8–12 years of 1-on-1 JEE/NEET coaching. Vetted on credentials, results, and teaching ability — not just a degree.
          </motion.p>
        </section>

        {/* Author cards grid */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {authors.map((author, i) => (
              <motion.div
                key={author.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/mentors/${author.slug}`} aria-label={`View ${author.name}'s profile`}>
                  <article className="h-full rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-card transition-all duration-300 group cursor-pointer">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0 text-white font-display font-bold">
                        {author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {author.name}
                        </h2>
                        <p className="text-primary text-sm font-medium">{author.credential}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{author.institution}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
                        <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Experience</p>
                          <p className="text-foreground text-sm font-medium">{author.experienceYears} years</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
                        <Users className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Students</p>
                          <p className="text-foreground text-sm font-medium">{author.studentsMentored}+</p>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                      {author.bio}
                    </p>

                    {/* Top result */}
                    {author.notableResults[0] && (
                      <div className="flex items-start gap-2 bg-primary/5 border border-primary/10 rounded-lg px-3 py-2 mb-5">
                        <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{author.notableResults[0]}</p>
                      </div>
                    )}

                    {/* Subjects & exam tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {author.exams.map(e => (
                        <span key={e} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{e}</span>
                      ))}
                      {author.subjects.map(s => (
                        <span key={s} className="px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground text-xs">{s}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      <BookOpen className="w-4 h-4" />
                      View full profile
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
}
