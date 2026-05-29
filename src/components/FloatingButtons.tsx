"use client";

import { useState } from "react";
import { PenilaianModal } from "@/components/floating/PenilaianModal";
import { AspirasiModal } from "@/components/floating/AspirasiModal";
import { AksesCepatPanel } from "@/components/floating/AksesCepatPanel";

const FAB_ITEMS = [
  { emoji: "😀", label: "Beri Penilaian", key: "rating" as const },
  { emoji: "📢", label: "Aspirasi Warga", key: "aspirasi" as const },
  { emoji: "🏃‍♂️‍➡️", label: "Akses Cepat", key: "akses" as const },
];

export function FloatingButtons() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const [aspirasiOpen, setAspirasiOpen] = useState(false);
  const [aksesOpen, setAksesOpen] = useState(false);

  const openModal = (key: (typeof FAB_ITEMS)[number]["key"]) => {
    if (key === "rating") setRatingOpen(true);
    if (key === "aspirasi") setAspirasiOpen(true);
    if (key === "akses") setAksesOpen(true);
  };

  return (
    <>
      <div className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 md:right-4">
        {FAB_ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => openModal(item.key)}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl shadow-[var(--shadow-card-hover)] transition hover:scale-105 hover:bg-secondary md:h-14 md:w-14"
            aria-label={item.label}
            title={item.label}
          >
            <span aria-hidden>{item.emoji}</span>
          </button>
        ))}
      </div>

      <PenilaianModal open={ratingOpen} onClose={() => setRatingOpen(false)} />
      <AspirasiModal open={aspirasiOpen} onClose={() => setAspirasiOpen(false)} />
      <AksesCepatPanel open={aksesOpen} onClose={() => setAksesOpen(false)} />
    </>
  );
}
