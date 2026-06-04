"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { BeritaPortalLayout } from "@/components/berita/BeritaPortalLayout";
import { beritaTerbaru, beritaTerpopuler } from "@/lib/mock-data/berita";

/** Grid beranda tetap — tidak ikut carousel headline */
const GRID_BERITA = beritaTerbaru.slice(0, 6);

export function BeritaTerkiniSection() {
  return (
    <SectionShell variant="muted">
      <FadeIn>
        <SectionHeader
          title="Berita Terkini"
          subtitle="Informasi terbaru seputar kegiatan dan program pemerintah desa."
          href="/kegiatan"
          linkLabel="Lihat Semua Berita"
        />
        <BeritaPortalLayout
          headlineItems={beritaTerbaru}
          gridItems={GRID_BERITA}
          terbaruSidebarItems={beritaTerbaru}
          populerSidebarItems={beritaTerpopuler}
          headlineBadge="Headline"
        />
      </FadeIn>
    </SectionShell>
  );
}
