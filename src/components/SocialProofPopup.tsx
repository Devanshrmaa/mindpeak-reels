import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const indianNames = [
  'Aarav S.', 'Priya M.', 'Vihaan K.', 'Ananya R.', 'Aditya P.',
  'Diya T.', 'Arjun V.', 'Isha G.', 'Rohan D.', 'Kavya N.',
  'Siddharth B.', 'Meera J.', 'Kartik L.', 'Riya C.', 'Arnav W.',
  'Sneha A.', 'Dhruv H.', 'Pooja S.', 'Vivaan M.', 'Nisha R.',
  'Rahul K.', 'Simran P.', 'Kunal T.', 'Tanvi G.', 'Harsh V.',
  'Shruti D.', 'Manav B.', 'Neha L.', 'Yash J.', 'Aditi C.',
];

const courses = [
  'JEE Main + Advanced (2 Year)',
  'JEE Main + Advanced (1 Year)',
  'NEET UG (2 Year)',
  'NEET UG (1 Year)',
  'Subject Crash Course',
  '1-on-1 Crash Program',
  '6th Foundation',
  '7th Foundation',
  '8th Foundation',
  '9th Foundation',
  '10th Foundation',
  'JEE Test Series',
  'NEET Test Series',
];

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune',
  'Jaipur', 'Lucknow', 'Patna', 'Kota', 'Chandigarh',
  'Bhopal', 'Indore', 'Nagpur', 'Kolkata', 'Chennai',
];

function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', course: '', city: '', mins: 0 });
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const scheduleNext = useCallback(() => {
    const delay = Math.random() * 8000 + 7000; // 7–15s
    timerRef.current = setTimeout(() => {
      setData({
        name: random(indianNames),
        course: random(courses),
        city: random(cities),
        mins: Math.floor(Math.random() * 45) + 2,
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 3500);
      scheduleNext();
    }, delay);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => clearTimeout(timerRef.current);
  }, [scheduleNext]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -80, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -80, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="fixed bottom-5 left-5 z-50 max-w-[260px] w-full rounded-xl p-3 flex items-start gap-2.5 cursor-default
            bg-background/40 backdrop-blur-xl backdrop-saturate-150 border border-border/50
            shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-foreground/90 text-xs font-semibold leading-tight truncate">
              {data.name} <span className="text-muted-foreground font-normal text-[11px]">• {data.city}</span>
            </p>
            <p className="text-muted-foreground text-[11px] mt-0.5 leading-snug">
              enrolled in <span className="text-primary font-medium">{data.course}</span>
            </p>
            <p className="text-muted-foreground/80 text-[9px] mt-0.5">{data.mins} min ago</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
