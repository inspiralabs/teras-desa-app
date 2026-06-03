"use client";

import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { PageGaleriCarousel } from "@/components/ui/PageGaleriCarousel";
import { FadeIn } from "@/components/motion/FadeIn";
import { WisataBookingForm } from "@/components/wisata/WisataBookingForm";
import { WisataInfoPanel } from "@/components/wisata/WisataInfoPanel";
import { WisataReviewsSection } from "@/components/wisata/WisataReviewsSection";
import {
  GALERI_WISATA,
  WISATA_HERO_SLIDES,
  WISATA_INFO,
} from "@/lib/mock-data/wisata";

const GALERI_ITEMS = WISATA_HERO_SLIDES.map((s) => ({
  id: s.id,
  gambar: s.src,
  judul: s.caption,
  alt: s.alt,
}));

const GALERI_SUSUR = GALERI_WISATA.map((src, i) => ({
  id: `ss-${i}`,
  gambar: src,
  judul: `Susur Sungai Cikeas ${i + 1}`,
  alt: `Dokumentasi wisata ${i + 1}`,
}));

export function WisataPageContent() {
  return (
    <PageContentBoundary>
      <PageHero
        title={WISATA_INFO.nama}
        description="Wisata susur sungai Desa Bojongkulur — booking online, pemandu lokal, dan ulasan pengunjung."
      />

      <SectionShell className="pt-0">
        <FadeIn>
          <SectionCard className="p-4 md:p-6">
            <PageGaleriCarousel items={[...GALERI_ITEMS, ...GALERI_SUSUR]} />
          </SectionCard>
        </FadeIn>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start xl:gap-10">
          <div className="flex min-w-0 flex-col gap-8">
            <WisataInfoPanel />
            <WisataReviewsSection />
          </div>
          <div className="min-w-0 xl:sticky xl:top-24">
            <WisataBookingForm />
          </div>
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
