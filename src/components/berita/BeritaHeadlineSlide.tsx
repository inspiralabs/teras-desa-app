import Image from "next/image";
import Link from "next/link";
import { Eye, Share2 } from "lucide-react";
import { formatBeritaDate, type Berita } from "@/lib/mock-data/berita";
import { shareBerita } from "@/components/berita/berita-share";

export function BeritaHeadlineSlide({
  berita,
  badgeLabel = "Headline",
}: {
  berita: Berita;
  badgeLabel?: string;
}) {
  return (
    <article className="min-w-0 flex-[0_0_100%]">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-light-gray sm:aspect-[16/9] md:aspect-[2/1] lg:min-h-[260px] lg:aspect-[21/9]">
        <Image
          src={berita.gambar}
          alt={berita.judul}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 66vw"
          priority
        />
        <span className="absolute left-2 top-2 z-10 rounded bg-primary/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {badgeLabel}
        </span>

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/92 via-black/60 to-transparent px-3 pb-3 pt-14 sm:px-4 sm:pb-4 sm:pt-20 md:px-5 md:pb-5">
          <div className="flex gap-2 sm:gap-3">
            <span
              className="mt-0.5 hidden w-1 shrink-0 self-stretch rounded-full bg-accent sm:block"
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <Link href={`/kegiatan/${berita.slug}`} className="group">
                <h2 className="line-clamp-3 text-base font-bold leading-snug text-white transition group-hover:text-white/90 sm:text-lg md:text-xl lg:text-2xl">
                  {berita.judul}
                </h2>
              </Link>
              <div className="mt-2 flex flex-col gap-1.5 text-[11px] text-white/85 sm:mt-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1 sm:text-xs">
                <time dateTime={berita.tanggal}>{formatBeritaDate(berita.tanggal)}</time>
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  {berita.views.toLocaleString("id-ID")} dibaca
                </span>
                <button
                  type="button"
                  className="inline-flex min-h-10 w-fit items-center gap-1 rounded-md font-semibold text-white touch-manipulation hover:bg-white/10 hover:text-accent sm:min-h-0 sm:px-0"
                  onClick={() => shareBerita(berita.judul, berita.slug)}
                >
                  <Share2 className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden />
                  Bagikan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
