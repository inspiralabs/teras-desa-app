import Image from "next/image";
import Link from "next/link";
import { formatBeritaDate, type Berita } from "@/lib/mock-data/berita";

export function BeritaGridTile({ berita }: { berita: Berita }) {
  return (
    <Link
      href={`/kegiatan/${berita.slug}`}
      className="group block min-w-0 touch-manipulation"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-light-gray">
        <Image
          src={berita.gambar}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 50vw, 220px"
        />
      </div>
      <h3 className="mt-2 line-clamp-3 text-xs font-bold leading-snug text-primary transition group-hover:text-secondary sm:mt-2.5 sm:text-sm">
        {berita.judul}
      </h3>
      <p className="mt-1 line-clamp-1 text-[10px] font-semibold text-dark-gray sm:text-xs">
        {berita.kategori}
      </p>
      <p className="mt-0.5 text-[10px] text-dark-gray sm:hidden">
        {formatBeritaDate(berita.tanggal)}
      </p>
    </Link>
  );
}
