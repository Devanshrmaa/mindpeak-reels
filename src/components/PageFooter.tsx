import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/mindpeakinstitute', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584805776923', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mindpeak-institute/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/mindpeakins', label: 'X / Twitter' },
  { icon: MessageCircle, href: 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute', label: 'WhatsApp' },
];

export const PageFooter = ({ extra }: { extra?: string }) => (
  <footer className="bg-background border-t border-border py-10 px-6" role="contentinfo">
    <div className="max-w-5xl mx-auto">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="MindPeak Institute" className="w-10 h-10 rounded-full" />
          <span className="font-display font-bold text-foreground text-lg tracking-wide">MINDPEAK</span>
        </Link>
        <p className="text-muted-foreground text-sm text-center max-w-md">
          Personalized 1-on-1 JEE &amp; NEET Coaching — Transforming Aspirants into Achievers.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8">
        {[
          { label: 'JEE Coaching', to: '/jee-coaching' },
          { label: 'NEET Coaching', to: '/neet-coaching' },
          { label: 'Courses', to: '/courses' },
          { label: 'Blog', to: '/blog' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'Free Trial', to: '/free-trial' },
          { label: 'Contact', to: '/contact' },
          { label: 'Kota Alternative', to: '/kota-coaching-alternative' },
        ].map((l) => (
          <Link key={l.to} to={l.to} className="text-muted-foreground text-xs hover:text-primary transition-colors uppercase tracking-wider">
            {l.label}
          </Link>
        ))}
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-5 mb-8">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-muted-foreground hover:text-primary transition-colors">
            <s.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Legal */}
      <div className="flex flex-col items-center gap-3 text-xs text-muted-foreground tracking-wider">
        <div className="flex items-center gap-4">
          <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
          <span className="text-border">|</span>
          <Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
        </div>
        <p>© 2026 MindPeak Institute. All rights reserved.{extra ? ` ${extra}` : ''}</p>
      </div>
    </div>
  </footer>
);
