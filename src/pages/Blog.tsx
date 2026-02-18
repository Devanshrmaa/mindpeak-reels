import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogData';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useDemoModal } from '@/components/DemoBookingModal';
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const categories = ['All', 'JEE', 'NEET', 'Study Tips', 'Exam Strategy', 'General'] as const;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openDemoModal } = useDemoModal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  return (
    <>
      <SEOHead
        title="Blog — JEE & NEET Preparation Tips | Mindpeak Institute"
        description="Expert tips and strategies for JEE and NEET preparation. Get study guides, exam strategies, time management tips, and subject-specific advice from our experts."
      />

      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Blog</li>
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
                <p className="text-muted-foreground text-sm">Expert Guides for JEE &amp; NEET Aspirants</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
              THE <span className="text-gradient-gold">BLOG</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Tips, strategies, and in-depth guides to help you crack JEE, NEET, and build study habits that last a lifetime.
            </p>

            {/* Search */}
            <div className="max-w-xl relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search topics, tips, strategies…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card/40 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>
        </section>

        {/* Featured Articles */}
        {!searchQuery && selectedCategory === 'All' && (
          <section className="bg-secondary/30 border-y border-border py-16 px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-8"
              >
                FEATURED <span className="text-gradient-gold">ARTICLES</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredPosts.map((post, i) => {
                  const IconComponent = post.icon;
                  return (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <div className="h-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 group cursor-pointer hover:border-primary/40 transition-all duration-300 hover:shadow-card">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center mb-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase">
                            {post.category}
                          </span>
                          <h3 className="font-display font-bold text-foreground text-lg mt-3 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-muted-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-foreground text-2xl sm:text-3xl mb-8 mt-8"
          >
            {searchQuery
              ? <><span className="text-gradient-gold">RESULTS</span> ({filteredPosts.length})</>
              : <>ALL <span className="text-gradient-gold">ARTICLES</span></>
            }
          </motion.h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No articles found. Try a different search term or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5">
              {filteredPosts.map((post, i) => {
                const IconComponent = post.icon;
                return (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="rounded-2xl border border-border bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors">
                        <div className="w-full text-left p-6 sm:p-8 flex flex-col gap-4">
                          {/* Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center shrink-0`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-display font-bold text-foreground text-lg sm:text-xl group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-muted-foreground text-sm mt-1">{post.category} • {post.readTime}</p>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-primary mt-1 group-hover:translate-x-1 transition-transform" />
                          </div>

                          {/* Meta pills */}
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase">
                                {tag}
                              </span>
                            ))}
                            <span className="px-3 py-1 rounded-full bg-accent/60 text-foreground text-xs font-bold tracking-wider flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>

                          {/* Excerpt */}
                          <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* CTA Band */}
        <section className="bg-primary/10 border-y border-primary/20 py-12 px-6 text-center">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Ready to Start Your Preparation Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized 1-on-1 coaching from expert mentors and crack JEE/NEET with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={openDemoModal}
              className="px-12 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-bold text-base rounded-full hover:scale-105 transition-transform shadow-gold-glow"
            >
              Book Your Free Demo
            </button>
            <Link
              to="/courses"
              className="px-12 py-4 border border-primary text-primary font-display text-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center"
            >
              Explore Courses
            </Link>
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
