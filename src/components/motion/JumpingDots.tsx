"use client";

import { m } from "motion/react";

const DOT_DELAYS = [0, 0.15, 0.3];

export function JumpingDots({
  className = "",
  dotClassName = "bg-primary",
}: {
  className?: string;
  dotClassName?: string;
}) {
  return (
    <div className={`flex items-end justify-center gap-2 ${className}`} aria-hidden>
      {DOT_DELAYS.map((delay, i) => (
        <m.span
          key={i}
          className={`block h-3 w-3 rounded-full ${dotClassName}`}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay,
          }}
        />
      ))}
    </div>
  );
}
