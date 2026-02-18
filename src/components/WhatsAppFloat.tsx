import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/918219457704?text=Hello!!%20MindPeak%20Institute';

export const WhatsAppFloat = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, type: 'spring', stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-shadow hover:shadow-xl"
    style={{ background: '#25D366' }}
  >
    <MessageCircle className="w-7 h-7 text-white" fill="white" />
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#25D366' }} />
  </motion.a>
);
