import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatBeritaDate, type Berita } from "@/lib/mock-data/berita";
import { cn } from "@/lib/utils";

/** Lead story — layout horizontal standar portal berita (gambar + konten) */
export function BeritaPortalLead({
  berita,
  className,
}: {
  berita: Berita;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border border-mid-gray/35 bg-white shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
    >
      <Link
        href={`/kegiatan/${berita.slug}`}
        className="group grid md:grid-cols-12"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-light-gray md:col-span-5">
          <Image
            src={berita.gambar}
            alt={berita.judul}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 42vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center border-t border-mid-gray/25 p-5 md:col-span-7 md:border-l md:border-t-0 md:p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-dark-gray">
            <Badge>{berita.kategori}</Badge>
            <time dateTime={berita.tanggal}>{formatBeritaDate(berita.tanggal)}</time>
            <span aria-hidden>·</span>
            <span>{berita.views.toLocaleString("id-ID")} dibaca</span>
          </div>
          <h2 className="mt-3 text-xl font-bold leading-snug text-primary group-hover:text-secondary md:text-2xl lg:line-clamp-3">
            {berita.judul}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-dark-gray md:text-base">
            {berita.ringkasan}
          </p>
          <span className="mt-4 text-sm font-semibold text-secondary group-hover:underline">
            Baca selengkapnya →
          </span>
        </div>
      </Link>
    </article>
  );
}
