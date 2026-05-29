import { Suspense } from "react";
import { LayananTabs } from "@/components/layanan/LayananTabs";
import { PageHero } from "@/components/layout/PageHero";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = { title: "Layanan" };

export default function LayananPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Layanan Publik"
        description="Pilih layanan yang Anda butuhkan. Data sementara menggunakan mock untuk pengembangan frontend."
      />
      <SectionShell className="pt-0">
        <FadeIn>
          <SectionCard>
            <Suspense fallback={<SectionSkeleton variant="layanan" />}>
              <LayananTabs />
            </Suspense>
          </SectionCard>
        </FadeIn>
      </SectionShell>
    </PageContentBoundary>
  );
}
