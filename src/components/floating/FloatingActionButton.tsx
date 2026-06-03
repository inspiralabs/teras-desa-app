"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { LayoutGrid, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FabMenuItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 420,
      damping: 26,
      delay: i * 0.06,
    },
  }),
  exit: { opacity: 0, y: 12, scale: 0.9, transition: { duration: 0.15 } },
};

export function FloatingActionButton({ items }: { items: FabMenuItem[] }) {
  const [open, setOpen] = useState(false);

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setOpen(false);
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6"
      aria-label="Menu akses cepat"
    >
      <AnimatePresence>
        {open && (
          <m.div
            className="flex flex-col items-end gap-2.5"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={cn(
                      "rounded-lg bg-primary px-2.5 py-1.5 text-xs font-medium text-white shadow-md",
                      "whitespace-nowrap"
                    )}
                  >
                    {item.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleItemClick(item.onClick)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-[var(--shadow-card-hover)] ring-1 ring-primary/15 transition hover:bg-light hover:ring-primary/30"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </button>
                </m.div>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>

      <m.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[var(--shadow-card-hover)]"
        whileTap={{ scale: 0.92 }}
        aria-expanded={open}
        aria-label={open ? "Tutup menu akses cepat" : "Buka menu akses cepat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <m.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" strokeWidth={2.5} />
            </m.span>
          ) : (
            <m.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <LayoutGrid className="h-6 w-6" strokeWidth={2.5} />
            </m.span>
          )}
        </AnimatePresence>
      </m.button>
    </div>
  );
}
