import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { SectionCard } from "@/components/ui/SectionShell";
import { formatBeritaDate, type Berita } from "@/lib/mock-data/berita";

const MAX_ITEMS = 4;

/** Sidebar terpopuler — maks. 4 artikel, format portal */
export function BeritaPopulerSidebar({
  items,
  max = MAX_ITEMS,
}: {
  items: Berita[];
  max?: number;
}) {
  const list = items.slice(0, max);

  return (
    <SectionCard className="overflow-hidden p-0">
      <div className="border-b border-mid-gray/25 bg-light px-4 py-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent" aria-hidden />
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
            Terpopuler
          </h3>
        </div>
      </div>
      <ul className="divide-y divide-mid-gray/25">
        {list.map((b, i) => (
          <li key={b.id}>
            <Link
              href={`/kegiatan/${b.slug}`}
              className="group flex gap-3 p-4 transition hover:bg-light-gray/50"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={b.gambar}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="80px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-2 text-sm font-semibold leading-snug text-primary group-hover:text-secondary">
                  {b.judul}
                </p>
                <p className="mt-1 text-[11px] text-dark-gray">
                  {formatBeritaDate(b.tanggal)} · {b.views.toLocaleString("id-ID")}{" "}
                  dibaca
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
