import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import {
  CheckCircle, Star, Users, Clock, BarChart3, ShieldCheck, Phone, Mail, User, BookOpen,
} from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/logo.jpeg';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

const examOptions = [
  'JEE Main + Advanced (2 Year)',
  'JEE Main + Advanced (1 Year)',
  'NEET UG (2 Year)',
  'NEET UG (1 Year)',
  'Subject Crash Course',
  '1-on-1 Crash Program',
  'Foundation (Class 6-10)',
  'Not sure — need guidance',
];

const trialBenefits = [
  { icon: Users, title: 'Meet Your Dedicated Mentor', desc: 'Experience a live 1-on-1 session with the mentor who could guide your entire preparation journey.' },
  { icon: BarChart3, title: 'Get a Personalized Assessment', desc: 'Receive a detailed analysis of your current level, strengths, and specific areas for improvement.' },
  { icon: BookOpen, title: 'See Your Custom Study Roadmap', desc: 'Walk away with a personalized preparation plan tailored to your exam goals and timeline.' },
  { icon: Clock, title: 'Experience the Platform', desc: 'Try our live video sessions, whiteboard tools, recorded replays, and doubt resolution system firsthand.' },
];

const trustBadges = [
  { value: '500+', label: 'Students Mentored' },
  { value: '95%', label: 'Success Rate' },
  { value: '₹0', label: 'Trial Cost' },
  { value: '0', label: 'Commitment Required' },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  exam: string;
  city: string;
}

const FreeTrial = () => {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', exam: '', city: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    if (!form.name.trim() || form.name.trim().length > 100) return 'Please enter a valid name';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) return 'Please enter a valid 10-digit Indian phone number';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Please enter a valid email';
    if (!form.exam) return 'Please select an exam / course';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) { toast.error(error); return; }
    setLoading(true);
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'free-trial-page', timestamp: new Date().toISOString() }),
      });
      setSubmitted(true);
      toast.success('Your free trial has been booked! We\'ll call you within 24 hours.');
    } catch {
      toast.error('Something went wrong. Please try again or call us.');
    } finally {
      setLoading(false);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Book Free Trial — MindPeak Institute',
    description: 'Book a free 1-on-1 trial class with MindPeak Institute. Meet your mentor, get a personalized study plan, zero commitment.',
    url: 'https://mindpeakinstitute.com/free-trial',
  };

  return (
    <>
      <SEOHead
        title="Book Free Trial — 1-on-1 JEE & NEET Coaching | MindPeak Institute"
        description="Experience personalized JEE/NEET coaching free. Meet your mentor, get a study plan, see our platform. Zero commitment. Book your free trial today!"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Free Trial</li>
          </ol>
        </nav>

        {/* Hero + Form Grid */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — messaging */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-6">
                <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
                <div>
                  <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                  <p className="text-muted-foreground text-sm">Your Free Trial Awaits</p>
                </div>
              </div>

              <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
                Book Your <span className="text-gradient-gold">Free Trial</span> Class
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Experience personalized 1-on-1 JEE or NEET coaching — completely free. Meet your dedicated mentor, get an honest assessment of your current level, and receive a custom study roadmap. No payment required, no commitment, just pure value.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {trustBadges.map((b) => (
                  <div key={b.label} className="text-center p-4 rounded-xl border border-border bg-card">
                    <div className="font-display font-black text-primary text-xl mb-1">{b.value}</div>
                    <div className="text-muted-foreground text-xs uppercase tracking-wider">{b.label}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {trialBenefits.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50">
                    <b.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm mb-1">{b.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="rounded-2xl border border-primary/20 bg-card p-8 shadow-gold-glow">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h2 className="font-display font-bold text-foreground text-2xl mb-3">You&rsquo;re All Set!</h2>
                    <p className="text-muted-foreground mb-6">Our counselor will call you within 24 hours to schedule your free trial class.</p>
                    <Link to="/" className="px-8 py-3 bg-primary text-primary-foreground font-display font-bold text-sm rounded-lg hover:scale-105 transition-transform inline-block">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-foreground text-xl mb-2">Start Your Free Trial</h2>
                    <p className="text-muted-foreground text-sm mb-6">Fill in your details and we&rsquo;ll schedule your 1-on-1 session.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Mobile Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile number"
                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Email (Optional)</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                        </div>
                      </div>

                      {/* Exam */}
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Exam / Course *</label>
                        <select name="exam" value={form.exam} onChange={handleChange} required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary/50 text-sm appearance-none">
                          <option value="">Select exam / course</option>
                          {examOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      {/* City */}
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">City (Optional)</label>
                        <input name="city" value={form.city} onChange={handleChange} placeholder="Your city"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                      </div>

                      <button type="submit" disabled={loading}
                        className="w-full py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-[1.02] transition-transform disabled:opacity-50 rounded-lg">
                        {loading ? 'Booking…' : 'Book My Free Trial →'}
                      </button>

                      <p className="text-muted-foreground text-xs text-center">
                        <ShieldCheck className="w-3 h-3 inline-block mr-1" />
                        100% Free — No payment details required
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary/30 border-y border-border py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10">
              What Students Say After Their <span className="text-gradient-gold">Free Trial</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Aditi K.', city: 'Pune', quote: 'The free trial was an eye-opener. My mentor identified gaps in my Chemistry preparation that 6 months of batch coaching missed. I signed up immediately.' },
                { name: 'Rahul M.', city: 'Jaipur', quote: 'I was skeptical about online coaching, but the 1-on-1 trial session felt more engaging than any classroom. The personalized study plan was worth it alone.' },
                { name: 'Meera S.', city: 'Chennai', quote: 'My parents were impressed by how transparent and data-driven the approach was. The weekly progress tracking convinced them this was the right choice for my NEET prep.' },
              ].map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 text-left">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-primary fill-primary" />)}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default FreeTrial;
