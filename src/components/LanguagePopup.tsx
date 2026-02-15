import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';

const INDIAN_LANGUAGES: Record<string, { name: string; nativeName: string; code: string }> = {
  hi: { name: 'Hindi', nativeName: 'हिन्दी', code: 'hi' },
  bn: { name: 'Bengali', nativeName: 'বাংলা', code: 'bn' },
  te: { name: 'Telugu', nativeName: 'తెలుగు', code: 'te' },
  mr: { name: 'Marathi', nativeName: 'मराठी', code: 'mr' },
  ta: { name: 'Tamil', nativeName: 'தமிழ்', code: 'ta' },
  gu: { name: 'Gujarati', nativeName: 'ગુજરાતી', code: 'gu' },
  kn: { name: 'Kannada', nativeName: 'ಕನ್ನಡ', code: 'kn' },
  ml: { name: 'Malayalam', nativeName: 'മലയാളം', code: 'ml' },
  pa: { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', code: 'pa' },
  or: { name: 'Odia', nativeName: 'ଓଡ଼ିଆ', code: 'or' },
  as: { name: 'Assamese', nativeName: 'অসমীয়া', code: 'as' },
  ur: { name: 'Urdu', nativeName: 'اردو', code: 'ur' },
};

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: object, id: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export const LanguagePopup = () => {
  const [show, setShow] = useState(false);
  const [detectedLang, setDetectedLang] = useState<{ name: string; nativeName: string; code: string } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem('lang-popup-dismissed');
    if (alreadyDismissed) return;

    const browserLang = navigator.language?.split('-')[0] || '';
    const match = INDIAN_LANGUAGES[browserLang];

    if (match) {
      setDetectedLang(match);
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleTranslate = () => {
    if (!detectedLang) return;

    // Inject Google Translate
    const existing = document.getElementById('google-translate-element');
    if (!existing) {
      const div = document.createElement('div');
      div.id = 'google-translate-element';
      div.style.display = 'none';
      document.body.appendChild(div);
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: detectedLang.code, autoDisplay: false },
          'google-translate-element'
        );
      }
      // Trigger translation after element init
      setTimeout(() => {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
          select.value = detectedLang.code;
          select.dispatchEvent(new Event('change'));
        }
      }, 500);
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    dismiss();
  };

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('lang-popup-dismissed', 'true');
  };

  if (dismissed || !detectedLang) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
            <Globe className="w-4 h-4 text-primary flex-shrink-0" />
            <p className="text-foreground text-xs leading-snug">
              Translate to <span className="font-semibold text-primary">{detectedLang.nativeName}</span>?
            </p>
            <button
              onClick={handleTranslate}
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
            >
              Yes
            </button>
            <button
              onClick={dismiss}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
