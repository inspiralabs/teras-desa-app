"use client";

import { ArrowRight } from "lucide-react";
import { m } from "motion/react";
import { LAYANAN_CARDS, type LayananCardId } from "@/lib/layanan-cards";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 320, damping: 28 },
  },
};

export function LayananServiceGrid({
  onSelect,
  selectingId,
}: {
  onSelect: (id: LayananCardId) => void;
  selectingId?: LayananCardId | null;
}) {
  return (
    <m.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {LAYANAN_CARDS.map((card) => {
        const Icon = card.icon;
        const isSelecting = selectingId === card.id;

        return (
          <m.button
            key={card.id}
            type="button"
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            animate={
              isSelecting
                ? { scale: 0.95, opacity: 0.85 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.2 }}
            onClick={() => onSelect(card.id)}
            disabled={!!selectingId}
            className="group flex h-full flex-col rounded-2xl border border-mid-gray/40 bg-white p-6 text-left shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.accent}`}
            >
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="mt-4 font-bold text-primary group-hover:text-secondary">
              {card.label}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-gray">
              {card.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary">
              Buka layanan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </m.button>
        );
      })}
    </m.div>
  );
}
