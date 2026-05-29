import Link from "next/link";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";

const LEMBAGA = [
  "BPD",
  "BUMDes",
  "TPBDes",
  "BKM",
  "Desa Wisata",
  "TP-PKK",
  "Posyandu",
  "Karang Taruna",
  "MUI",
  "LPM",
];

export const metadata = { title: "Lembaga Desa" };

export default function LembagaDesaPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Lembaga Desa"
        description="Direktori organisasi kemasyarakatan dan pemerintahan desa."
      />
      <SectionShell className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEMBAGA.map((nama) => (
            <FadeIn key={nama}>
              <SectionCard className="flex h-32 flex-col justify-center transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
                <p className="font-bold text-primary">{nama}</p>
                <Link
                  href="#"
                  className="mt-2 text-sm text-secondary hover:underline"
                >
                  Lihat detail
                </Link>
              </SectionCard>
            </FadeIn>
          ))}
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
