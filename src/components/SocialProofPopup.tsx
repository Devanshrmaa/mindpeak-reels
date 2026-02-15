import { useState, useEffect, useCallback } from 'react';
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

function randomMinutes(): number {
  return Math.floor(Math.random() * 45) + 2; // 2–46 mins ago
}

export const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', course: '', city: '', mins: 0 });

  const showNext = useCallback(() => {
    setData({
      name: random(indianNames),
      course: random(courses),
      city: random(cities),
      mins: randomMinutes(),
    });
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, []);

  useEffect(() => {
    // Initial delay
    const first = setTimeout(showNext, 5000);
    // Recurring
    const interval = setInterval(showNext, Math.random() * 5000 + 3000); // 3–8s between cycles
    return () => { clearTimeout(first); clearInterval(interval); };
  }, [showNext]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 z-50 max-w-xs w-full bg-card border border-border rounded-xl shadow-lg p-4 flex items-start gap-3 cursor-default"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-foreground text-sm font-semibold leading-tight truncate">
              {data.name} <span className="text-muted-foreground font-normal">from {data.city}</span>
            </p>
            <p className="text-muted-foreground text-xs mt-0.5 leading-snug">
              enrolled in <span className="text-primary font-medium">{data.course}</span>
            </p>
            <p className="text-muted-foreground/60 text-[10px] mt-1">{data.mins} min ago</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
