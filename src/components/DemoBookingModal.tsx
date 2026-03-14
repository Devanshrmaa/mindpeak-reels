"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";

interface DemoModalContextType {
  openDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType>({
  openDemoModal: () => {},
});

const DemoBookingModalContent = dynamic(
  () => import("@/components/DemoBookingModalContent"),
  { ssr: false },
);

export const useDemoModal = () => useContext(DemoModalContext);

export const DemoModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider value={{ openDemoModal: () => setIsOpen(true) }}>
      {children}
      <DemoBookingModalContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </DemoModalContext.Provider>
  );
};
