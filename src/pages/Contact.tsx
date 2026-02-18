import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { PageFooter } from '@/components/PageFooter';
import { useDemoModal } from '@/components/DemoBookingModal';
import {
  Phone, Mail, MapPin, MessageCircle, User, Clock, CheckCircle, ShieldCheck, Send,
} from 'lucide-react';
import { toast } from 'sonner';
import logo from '@/assets/logo.jpeg';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbynDEbMQqfStBwK-sJa5UoLuZtBDNvSPZ4HLvcpuZxTSe6lUy7nuIbxWbQ3QOPovG6N/exec';

const contactInfo = [
  { icon: Phone, label: '+91 82194 57704', href: 'tel:+918219457704', desc: 'Mon-Sat, 9 AM – 8 PM IST' },
  { icon: Mail, label: 'mindpeak@mindpeakinstitute.com', href: 'mailto:mindpeak@mindpeakinstitute.com', desc: 'We reply within 24 hours' },
  { icon: MessageCircle, label: 'WhatsApp Chat', href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute', desc: 'Instant chat support' },
  { icon: MapPin, label: 'Kota, Rajasthan (100% Online)', href: '#', desc: 'Serving students across India' },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { openDemoModal } = useDemoModal();
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please enter your name';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) return 'Please enter a valid 10-digit phone number';
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Please enter a valid email';
    if (!form.message.trim()) return 'Please enter your message';
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
        body: JSON.stringify({ ...form, source: 'contact-page', timestamp: new Date().toISOString() }),
      });
      setSubmitted(true);
      toast.success('Message sent! We\'ll get back to you within 24 hours.');
    } catch {
      toast.error('Something went wrong. Please try calling us instead.');
    } finally { setLoading(false); }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'MindPeak Institute',
    url: 'https://mindpeakinstitute.com',
    telephone: '+91-82194-57704',
    email: 'mindpeak@mindpeakinstitute.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Kota', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-82194-57704',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '20:00' },
    },
  };

  return (
    <>
      <SEOHead
        title="Contact MindPeak Institute — JEE & NEET Coaching Enquiries"
        description="Get in touch with MindPeak Institute. Call +91 82194 57704, email us, or WhatsApp for JEE & NEET coaching enquiries. Mon-Sat, 9 AM – 8 PM IST."
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="bg-background min-h-screen pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <span>/</span>
            <li className="text-foreground">Contact</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="MindPeak Institute" className="w-14 h-14 rounded-full" width={56} height={56} />
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">MindPeak Institute</p>
                <p className="text-muted-foreground text-sm">We&rsquo;re Here to Help</p>
              </div>
            </div>

            <h1 className="font-display font-black text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Have questions about our JEE or NEET coaching programs? Want to know if MindPeak is right for your child? Reach out — our counselors are available Monday to Saturday, 9 AM – 8 PM IST.
            </p>
          </motion.div>
        </section>

        {/* Contact Cards */}
        <section className="bg-secondary/30 border-y border-border py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors text-center"
              >
                <c.icon className="w-7 h-7 text-primary" />
                <span className="text-foreground text-sm font-medium">{c.label}</span>
                <span className="text-muted-foreground text-xs">{c.desc}</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Form + Info Grid */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h2 className="font-display font-bold text-foreground text-2xl mb-3">Message Sent!</h2>
                    <p className="text-muted-foreground mb-6">We&rsquo;ll get back to you within 24 hours.</p>
                    <Link to="/" className="px-8 py-3 bg-primary text-primary-foreground font-display font-bold text-sm rounded-lg hover:scale-105 transition-transform inline-block">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display font-bold text-foreground text-xl mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground text-sm mb-6">Fill in the form and our team will respond within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Name *</label>
                          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                        </div>
                        <div>
                          <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Phone *</label>
                          <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile"
                            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                        </div>
                      </div>
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Email (Optional)</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm" />
                      </div>
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Subject</label>
                        <select name="subject" value={form.subject} onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary/50 text-sm appearance-none">
                          <option value="">Select a topic</option>
                          <option value="JEE Coaching Enquiry">JEE Coaching Enquiry</option>
                          <option value="NEET Coaching Enquiry">NEET Coaching Enquiry</option>
                          <option value="Foundation Course">Foundation Course (Class 6-10)</option>
                          <option value="Pricing & Fees">Pricing &amp; Fees</option>
                          <option value="Free Trial">Free Trial Booking</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-foreground text-xs font-semibold uppercase tracking-wider block mb-1.5">Message *</label>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="How can we help you?"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 text-sm resize-none" />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-[0.15em] shadow-gold-glow hover:scale-[1.02] transition-transform disabled:opacity-50 rounded-lg flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" /> {loading ? 'Sending…' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-4">Office Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" /><span className="text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM IST</span></div>
                  <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-muted-foreground" /><span className="text-muted-foreground">Sunday: Closed</span></div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button onClick={openDemoModal} className="w-full py-3 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider rounded-lg hover:scale-[1.02] transition-transform">
                    Book Free Demo
                  </button>
                  <a href="https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-border text-foreground font-display text-sm uppercase tracking-wider rounded-lg hover:border-primary hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">100% Online Institute</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  MindPeak Institute operates entirely online, serving students across India. No matter where you are — Delhi, Mumbai, tier-2, or tier-3 city — you get the same premium 1-on-1 coaching experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageFooter />
      </main>
    </>
  );
};

export default Contact;
