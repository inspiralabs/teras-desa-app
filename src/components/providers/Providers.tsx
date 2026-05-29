"use client";

import { Toaster } from "sonner";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SplashGate } from "@/components/layout/SplashGate";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionProvider>
      <SplashGate>{children}</SplashGate>
      <Toaster position="bottom-right" richColors closeButton />
    </MotionProvider>
  );
}
