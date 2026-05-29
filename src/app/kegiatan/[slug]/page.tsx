import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBeritaBySlug, formatBeritaDate } from "@/lib/mock-data/berita";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);
  return { title: berita?.judul ?? "Berita" };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);
  if (!berita) notFound();

  return (
    <PageContentBoundary>
    <SectionShell>
      <article className="mx-auto max-w-3xl">
        <Link href="/kegiatan" className="text-sm text-secondary hover:underline">
          ← Kembali ke Kegiatan
        </Link>
        <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
          <Image
            src={berita.gambar}
            alt={berita.judul}
            fill
            className="object-cover"
            sizes="800px"
            priority
          />
        </div>
        <SectionCard className="mt-6">
          <p className="text-sm text-dark-gray">
            {formatBeritaDate(berita.tanggal)} · {berita.kategori}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-primary">{berita.judul}</h1>
          <p className="mt-6 leading-relaxed text-dark-gray">
            {berita.ringkasan} Konten artikel lengkap akan diisi melalui CMS admin
            pada integrasi backend.
          </p>
        </SectionCard>
      </article>
    </SectionShell>
    </PageContentBoundary>
  );
}
