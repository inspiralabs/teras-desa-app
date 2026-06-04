import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatBeritaDate, type Berita } from "@/lib/mock-data/berita";
import { cn } from "@/lib/utils";

/** Kartu berita grid — format listing portal */
export function BeritaGridCard({ berita, className }: { berita: Berita; className?: string }) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border border-mid-gray/35 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
    >
      <Link href={`/kegiatan/${berita.slug}`} className="group flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-light-gray">
          <Image
            src={berita.gambar}
            alt=""
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <Badge className="w-fit">{berita.kategori}</Badge>
          <h3 className="mt-2 line-clamp-2 font-semibold leading-snug text-primary group-hover:text-secondary">
            {berita.judul}
          </h3>
          <p className="mt-1 text-xs text-dark-gray">
            {formatBeritaDate(berita.tanggal)} · {berita.views.toLocaleString("id-ID")}{" "}
            dibaca
          </p>
          <p className="mt-2 line-clamp-2 flex-1 text-sm text-dark-gray">
            {berita.ringkasan}
          </p>
        </div>
      </Link>
    </article>
  );
}
