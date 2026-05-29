"use client";

import { useEffect } from "react";
import Image from "next/image";
import { m } from "motion/react";
import { JumpingDots } from "@/components/motion/JumpingDots";
import { IMAGES } from "@/lib/images";
import { DESA } from "@/lib/constants";
import {
  SPLASH_FADE_OUT_MS,
  SPLASH_MAX_WAIT_MS,
  SPLASH_MIN_DURATION_MS,
} from "@/lib/splash-config";

type SplashScreenProps = {
  onComplete: () => void;
};

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, SPLASH_MIN_DURATION_MS - elapsed);
      window.setTimeout(onComplete, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      const fallback = window.setTimeout(finish, SPLASH_MAX_WAIT_MS);
      return () => {
        window.removeEventListener("load", finish);
        window.clearTimeout(fallback);
      };
    }
  }, [onComplete]);

  return (
    <m.div
      className="fixed inset-0 z-[101] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: SPLASH_FADE_OUT_MS / 1000, ease: "easeInOut" }}
      role="status"
      aria-live="polite"
      aria-label="Memuat SIGAP DESA"
    >
      <m.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center px-6 text-center"
      >
        <Image
          src={IMAGES.lambangKabupaten}
          alt=""
          width={72}
          height={72}
          className="rounded-full"
          priority
        />
        <p className="mt-4 text-xl font-bold text-primary">SIGAP DESA</p>
        <p className="mt-1 text-sm text-dark-gray">
          Desa {DESA.nama} · Kab. {DESA.kabupaten}
        </p>
        <JumpingDots className="mt-8" />
        <p className="mt-4 text-xs text-dark-gray">Memuat layanan desa...</p>
      </m.div>
    </m.div>
  );
}
