"use client";

import { SectionBoundary } from "@/components/layout/SectionBoundary";
import { HeroSection } from "@/components/sections/HeroSection";
import { SambutanSection } from "@/components/sections/SambutanSection";
import { CounterStatistikSection } from "@/components/sections/CounterStatistikSection";
import { AspirasiSection } from "@/components/sections/AspirasiSection";
import { BeritaTerkiniSection } from "@/components/sections/BeritaTerkiniSection";
import { GaleriSection } from "@/components/sections/GaleriSection";
import { LayananRingkasSection } from "@/components/sections/LayananRingkasSection";
import { AgendaDesaSection } from "@/components/sections/AgendaDesaSection";
import { EtalaseUmkmSection } from "@/components/sections/EtalaseUmkmSection";
import { PublikasiSection } from "@/components/sections/PublikasiSection";

/** Urutan section beranda — PRD v2 §4.1 */
const SECTIONS = [
  { key: "hero", variant: "hero" as const, Component: HeroSection },
  { key: "sambutan", variant: "sambutan" as const, Component: SambutanSection },
  { key: "statistik", variant: "counter" as const, Component: CounterStatistikSection },
  { key: "aspirasi", variant: "aspirasi" as const, Component: AspirasiSection },
  { key: "berita", variant: "berita" as const, Component: BeritaTerkiniSection },
  { key: "galeri", variant: "galeri" as const, Component: GaleriSection },
  { key: "layanan", variant: "layanan" as const, Component: LayananRingkasSection },
  { key: "agenda", variant: "agenda" as const, Component: AgendaDesaSection },
  { key: "umkm", variant: "umkm" as const, Component: EtalaseUmkmSection },
  { key: "publikasi", variant: "publikasi" as const, Component: PublikasiSection },
];

export function BerandaSections() {
  return (
    <>
      {SECTIONS.map(({ key, variant, Component }) => (
        <SectionBoundary key={key} variant={variant}>
          <Component />
        </SectionBoundary>
      ))}
    </>
  );
}
