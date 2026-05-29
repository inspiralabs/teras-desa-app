import Link from "next/link";
import Image from "next/image";
import { beritaTerbaru } from "@/lib/mock-data/berita";
import { agendaList } from "@/lib/mock-data/agenda";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Kegiatan" };

export default function KegiatanPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Kegiatan"
        description="Agenda dan berita Desa Bojongkulur."
      />
      <SectionShell className="pt-0">
        <FadeIn>
          <h2 className="mb-4 text-xl font-bold text-primary">Agenda Kegiatan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {agendaList.map((a) => (
              <SectionCard key={a.id} className="overflow-hidden p-0">
                <div className="relative h-40">
                  <Image src={a.gambar} alt="" fill className="object-cover" sizes="400px" />
                </div>
                <div className="p-4">
                  <Badge>{a.mode === "online" ? "Online" : "Offline"}</Badge>
                  <h3 className="mt-2 font-semibold text-primary">{a.judul}</h3>
                  <p className="text-sm text-dark-gray line-clamp-2">{a.deskripsi}</p>
                  <p className="mt-2 text-xs text-dark-gray">
                    {a.tanggal} · {a.jam} · {a.lokasi}
                  </p>
                </div>
              </SectionCard>
            ))}
          </div>
        </FadeIn>
      </SectionShell>

      <SectionShell variant="muted">
        <FadeIn>
          <h2 className="mb-4 text-xl font-bold text-primary">Berita</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beritaTerbaru.map((b) => (
              <Link
                key={b.id}
                href={`/kegiatan/${b.slug}`}
                className="group overflow-hidden rounded-2xl border border-mid-gray/40 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative aspect-video">
                  <Image
                    src={b.gambar}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="400px"
                  />
                </div>
                <div className="p-4">
                  <Badge>{b.kategori}</Badge>
                  <h3 className="mt-2 font-semibold text-primary group-hover:text-secondary">
                    {b.judul}
                  </h3>
                  <p className="mt-2 text-sm text-dark-gray line-clamp-2">
                    {b.ringkasan}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </SectionShell>
    </PageContentBoundary>
  );
}
