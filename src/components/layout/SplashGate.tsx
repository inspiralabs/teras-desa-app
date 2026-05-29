"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { SplashPlaceholder } from "@/components/layout/SplashPlaceholder";
import { SplashScreen } from "@/components/layout/SplashScreen";
import { SPLASH_STORAGE_KEY } from "@/lib/splash-config";

type Gate = "pending" | "splash" | "ready";

function clearSplashClass() {
  document.body?.classList.remove("splash-active");
}

export function SplashGate({ children }: { children: React.ReactNode }) {
  const [gate, setGate] = useState<Gate>("pending");

  useEffect(() => {
    const skip = sessionStorage.getItem(SPLASH_STORAGE_KEY) === "1";
    clearSplashClass();
    setGate(skip ? "ready" : "splash");
  }, []);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(SPLASH_STORAGE_KEY, "1");
    clearSplashClass();
    setGate("ready");
  }, []);

  return (
    <>
      <SplashPlaceholder />
      <AnimatePresence>
        {gate === "splash" && (
          <SplashScreen key="splash" onComplete={handleComplete} />
        )}
      </AnimatePresence>
      <div
        id="sigap-app-root"
        className={gate === "splash" ? "invisible" : undefined}
        aria-hidden={gate === "splash"}
      >
        {children}
      </div>
    </>
  );
}
