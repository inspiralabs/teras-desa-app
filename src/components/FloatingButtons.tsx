"use client";

import { useState } from "react";
import { LayoutGrid, Megaphone, Star } from "lucide-react";
import { PenilaianModal } from "@/components/floating/PenilaianModal";
import { AspirasiModal } from "@/components/floating/AspirasiModal";
import { AksesCepatPanel } from "@/components/floating/AksesCepatPanel";
import { FloatingActionButton } from "@/components/floating/FloatingActionButton";

export function FloatingButtons() {
  const [ratingOpen, setRatingOpen] = useState(false);
  const [aspirasiOpen, setAspirasiOpen] = useState(false);
  const [aksesOpen, setAksesOpen] = useState(false);

  const items = [
    {
      id: "rating",
      label: "Beri Penilaian",
      icon: Star,
      onClick: () => setRatingOpen(true),
    },
    {
      id: "aspirasi",
      label: "Aspirasi Warga",
      icon: Megaphone,
      onClick: () => setAspirasiOpen(true),
    },
    {
      id: "akses",
      label: "Akses Cepat",
      icon: LayoutGrid,
      onClick: () => setAksesOpen(true),
    },
  ];

  return (
    <>
      <FloatingActionButton items={items} />
      <PenilaianModal open={ratingOpen} onClose={() => setRatingOpen(false)} />
      <AspirasiModal open={aspirasiOpen} onClose={() => setAspirasiOpen(false)} />
      <AksesCepatPanel open={aksesOpen} onClose={() => setAksesOpen(false)} />
    </>
  );
}
