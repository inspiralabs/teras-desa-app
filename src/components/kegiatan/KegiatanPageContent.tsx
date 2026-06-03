"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Eye,
  Heart,
  LayoutGrid,
  Newspaper,
  Search,
  Share2,
  TrendingUp,
} from "lucide-react";
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import { id as localeId } from "date-fns/locale";
import { toast } from "sonner";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/badge";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { NewsFilterBar } from "@/components/ui/NewsFilterBar";
import { Pagination, paginateItems } from "@/components/ui/Pagination";
import { agendaList, type AgendaKategori } from "@/lib/mock-data/agenda";
import {
  beritaTerbaruSorted,
  beritaTerpopuler,
  type Berita,
} from "@/lib/mock-data/berita";
import { cn } from "@/lib/utils";

const AGENDA_PER_PAGE = 4;
const BERITA_PER_PAGE = 6;

const KATEGORI_AGENDA: (AgendaKategori | "Semua")[] = [
  "Semua",
  "Pemerintahan",
  "Pembangunan",
  "Pembinaan",
  "Pemberdayaan",
  "Penanggulangan Bencana",
  "Lain-lain",
];

const BULAN_AGENDA_OPTIONS = [
  { value: "2026-06", label: "Juni 2026" },
  { value: "2026-05", label: "Mei 2026" },
  { value: "2026-04", label: "April 2026" },
] as const;

const KAT_BERITA_OPTIONS = [
  { value: "", label: "Semua kategori" },
  { value: "Pembangunan", label: "Pembangunan" },
  { value: "Pemerintahan", label: "Pemerintahan" },
  { value: "Pembinaan", label: "Pembinaan" },
  { value: "Pemberdayaan", label: "Pemberdayaan" },
  { value: "Kesehatan", label: "Kesehatan" },
] as const;

const TAHUN_BERITA_OPTIONS = [
  { value: "", label: "Semua tahun" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
] as const;

function shareMock(title: string) {
  if (typeof navigator !== "undefined" && navigator.share) {
    void navigator.share({ title, url: window.location.href }).catch(() => {});
  } else {
    void navigator.clipboard?.writeText(window.location.href);
    toast.success("Link disalin (mock)");
  }
}

function BeritaCard({ b, large }: { b: Berita; large?: boolean }) {
  return (
    <Link
      href={`/kegiatan/${b.slug}`}
      className={cn(
        "group overflow-hidden rounded-xl border border-mid-gray/35 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
        large && "md:grid md:grid-cols-2"
      )}
    >
      <div
        className={cn(
          "relative aspect-video",
          large && "md:aspect-auto md:min-h-full"
        )}
      >
        <Image
          src={b.gambar}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes={large ? "50vw" : "400px"}
        />
      </div>
      <div className={cn("p-4", large && "flex flex-col justify-center md:p-6")}>
        <Badge>{b.kategori}</Badge>
        <h3
          className={cn(
            "mt-2 font-semibold text-primary group-hover:text-secondary",
            large ? "text-xl line-clamp-3" : "line-clamp-2"
          )}
        >
          {b.judul}
        </h3>
        <p className="mt-1 text-xs text-dark-gray">
          {format(parseISO(b.tanggal), "d MMMM yyyy", { locale: localeId })} ·{" "}
          {b.views} dibaca
        </p>
        <p
          className={cn(
            "mt-2 text-dark-gray",
            large ? "line-clamp-4 text-sm" : "line-clamp-2 text-sm"
          )}
        >
          {b.ringkasan}
        </p>
      </div>
    </Link>
  );
}

export function KegiatanPageContent() {
  const [viewAgenda, setViewAgenda] = useState<"grid" | "kalender">("grid");
  const [katAgenda, setKatAgenda] = useState("Semua");
  const [bulanAgenda, setBulanAgenda] = useState("2026-05");
  const [agendaPage, setAgendaPage] = useState(1);

  const [searchBerita, setSearchBerita] = useState("");
  const [katBerita, setKatBerita] = useState("");
  const [tahunBerita, setTahunBerita] = useState("");
  const [beritaPage, setBeritaPage] = useState(1);
  const [likedAgenda, setLikedAgenda] = useState<Set<string>>(new Set());

  const filteredAgenda = useMemo(() => {
    const [y, m] = bulanAgenda.split("-").map(Number);
    return agendaList.filter((a) => {
      const d = parseISO(a.tanggal);
      if (d.getFullYear() !== y || d.getMonth() + 1 !== m) return false;
      if (katAgenda !== "Semua" && a.kategori !== katAgenda) return false;
      return true;
    });
  }, [katAgenda, bulanAgenda]);

  const filteredBerita = useMemo(() => {
    const q = searchBerita.trim().toLowerCase();
    return beritaTerbaruSorted.filter((b) => {
      if (q && !b.judul.toLowerCase().includes(q) && !b.ringkasan.toLowerCase().includes(q))
        return false;
      if (katBerita && b.kategori !== katBerita) return false;
      if (tahunBerita && !b.tanggal.startsWith(tahunBerita)) return false;
      return true;
    });
  }, [searchBerita, katBerita, tahunBerita]);

  const agendaPaginated = useMemo(
    () => paginateItems(filteredAgenda, agendaPage, AGENDA_PER_PAGE),
    [filteredAgenda, agendaPage]
  );

  const beritaPaginated = useMemo(
    () => paginateItems(filteredBerita, beritaPage, BERITA_PER_PAGE),
    [filteredBerita, beritaPage]
  );

  const featuredBerita =
    beritaPage === 1 && beritaPaginated.items.length > 0
      ? beritaPaginated.items[0]
      : null;
  const gridBerita =
    featuredBerita && beritaPaginated.items.length > 1
      ? beritaPaginated.items.slice(1)
      : beritaPaginated.items;

  const populerList = beritaTerpopuler.slice(0, 8);
  const terbaruList = beritaTerbaruSorted.slice(0, 8);

  useEffect(() => {
    setAgendaPage(1);
  }, [katAgenda, bulanAgenda]);

  useEffect(() => {
    setBeritaPage(1);
  }, [searchBerita, katBerita, tahunBerita]);

  useEffect(() => {
    if (agendaPage > agendaPaginated.totalPages) {
      setAgendaPage(agendaPaginated.safePage);
    }
  }, [agendaPage, agendaPaginated.totalPages, agendaPaginated.safePage]);

  useEffect(() => {
    if (beritaPage > beritaPaginated.totalPages) {
      setBeritaPage(beritaPaginated.safePage);
    }
  }, [beritaPage, beritaPaginated.totalPages, beritaPaginated.safePage]);

  const calMonth = parseISO(`${bulanAgenda}-01`);
  const calDays = eachDayOfInterval({
    start: startOfMonth(calMonth),
    end: endOfMonth(calMonth),
  });

  const kategoriAgendaOptions = KATEGORI_AGENDA.map((k) => ({
    value: k,
    label: k,
  }));

  return (
    <PageContentBoundary>
      <PageHero
        title="Kegiatan"
        description="Portal agenda dan berita Desa Bojongkulur — informasi terbaru pemerintahan desa."
      />

      <SectionShell className="pt-0">
        <FadeIn>
          <SectionCard className="overflow-hidden p-0">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mid-gray/25 bg-light/50 px-4 py-4 md:px-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" aria-hidden />
                <h2 className="text-lg font-bold text-primary md:text-xl">
                  Agenda Kegiatan
                </h2>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {filteredAgenda.length} acara
                </span>
              </div>
              <div className="flex gap-1 rounded-lg border border-mid-gray/40 p-1">
                <button
                  type="button"
                  onClick={() => setViewAgenda("grid")}
                  className={cn(
                    "rounded-md p-2 transition",
                    viewAgenda === "grid"
                      ? "bg-primary text-white"
                      : "text-primary hover:bg-light"
                  )}
                  aria-label="Tampilan grid"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewAgenda("kalender")}
                  className={cn(
                    "rounded-md p-2 transition",
                    viewAgenda === "kalender"
                      ? "bg-primary text-white"
                      : "text-primary hover:bg-light"
                  )}
                  aria-label="Tampilan kalender"
                >
                  <CalendarDays className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="border-b border-mid-gray/20 px-4 py-4 md:px-6">
              <NewsFilterBar>
                <FilterSelect
                  label="Kategori agenda"
                  value={katAgenda}
                  onChange={setKatAgenda}
                  options={kategoriAgendaOptions}
                  className="flex-1 sm:max-w-xs"
                />
                <FilterSelect
                  label="Bulan"
                  value={bulanAgenda}
                  onChange={setBulanAgenda}
                  options={BULAN_AGENDA_OPTIONS}
                  className="flex-1 sm:max-w-xs"
                />
              </NewsFilterBar>
            </div>

            <div className="p-4 md:p-6">
              {viewAgenda === "grid" ? (
                filteredAgenda.length === 0 ? (
                  <p className="py-8 text-center text-sm text-dark-gray">
                    Tidak ada agenda pada filter ini.
                  </p>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {agendaPaginated.items.map((a) => (
                        <article
                          key={a.id}
                          className="overflow-hidden rounded-xl border border-mid-gray/30 bg-white shadow-sm transition hover:shadow-[var(--shadow-card)]"
                        >
                          <div className="relative h-36">
                            <Image
                              src={a.gambar}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="400px"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex flex-wrap gap-1.5">
                              <Badge>{a.kategori}</Badge>
                              <Badge
                                variant={a.mode === "online" ? "default" : "warning"}
                              >
                                {a.mode === "online" ? "Online" : "Offline"}
                              </Badge>
                              <Badge
                                variant={
                                  a.status === "akan-datang" ? "success" : "default"
                                }
                              >
                                {a.status === "akan-datang"
                                  ? "Akan Datang"
                                  : "Selesai"}
                              </Badge>
                            </div>
                            <h3 className="mt-2 font-semibold text-primary">
                              {a.judul}
                            </h3>
                            <p className="mt-1 text-sm text-dark-gray line-clamp-2">
                              {a.deskripsi}
                            </p>
                            <p className="mt-2 text-xs text-dark-gray">
                              {format(parseISO(a.tanggal), "d MMM yyyy", {
                                locale: localeId,
                              })}{" "}
                              · {a.jam} · {a.lokasi}
                            </p>
                            <div className="mt-3 flex gap-4 text-xs text-dark-gray">
                              <button
                                type="button"
                                className="inline-flex items-center gap-1 hover:text-primary"
                                onClick={() => {
                                  setLikedAgenda((s) => {
                                    const n = new Set(s);
                                    if (n.has(a.id)) n.delete(a.id);
                                    else n.add(a.id);
                                    return n;
                                  });
                                }}
                              >
                                <Heart
                                  className={cn(
                                    "h-3.5 w-3.5",
                                    likedAgenda.has(a.id) && "fill-error text-error"
                                  )}
                                />
                                {a.likes + (likedAgenda.has(a.id) ? 1 : 0)}
                              </button>
                              <span className="inline-flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" /> {a.views}
                              </span>
                              <button
                                type="button"
                                className="inline-flex items-center gap-1 hover:text-primary"
                                onClick={() => shareMock(a.judul)}
                              >
                                <Share2 className="h-3.5 w-3.5" /> Bagikan
                              </button>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                    <Pagination
                      className="mt-6"
                      page={agendaPaginated.safePage}
                      totalPages={agendaPaginated.totalPages}
                      onPageChange={setAgendaPage}
                    />
                  </>
                )
              ) : (
                <div>
                  <p className="mb-4 text-sm font-medium text-primary">
                    {format(calMonth, "MMMM yyyy", { locale: localeId })}
                  </p>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((d) => (
                      <div key={d} className="py-1 font-bold text-primary">
                        {d}
                      </div>
                    ))}
                    {calDays.map((day) => {
                      const events = filteredAgenda.filter((a) =>
                        isSameDay(parseISO(a.tanggal), day)
                      );
                      return (
                        <div
                          key={day.toISOString()}
                          className={cn(
                            "min-h-14 rounded border border-mid-gray/20 p-1 md:min-h-16",
                            events.length > 0 && "border-primary/20 bg-light"
                          )}
                        >
                          <span className="text-dark-gray">{format(day, "d")}</span>
                          {events.map((e) => (
                            <p
                              key={e.id}
                              className="mt-0.5 truncate text-[10px] font-medium text-primary"
                            >
                              {e.judul}
                            </p>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </SectionCard>
        </FadeIn>
      </SectionShell>

      <SectionShell variant="muted" className="pt-0">
        <FadeIn>
          <div className="mb-6 flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-primary" aria-hidden />
            <h2 className="text-lg font-bold text-primary md:text-xl">Berita Desa</h2>
            <span className="text-sm text-dark-gray">
              ({filteredBerita.length} artikel)
            </span>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start">
            <div className="min-w-0 space-y-6">
              <NewsFilterBar>
                <div className="relative min-w-0 flex-[2]">
                  <label className="text-xs font-semibold text-primary">
                    Cari berita
                  </label>
                  <div className="relative mt-1.5">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dark-gray" />
                    <input
                      className="h-11 w-full rounded-lg border border-mid-gray/50 bg-white py-2 pl-10 pr-3 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/25"
                      placeholder="Kata kunci judul atau ringkasan..."
                      value={searchBerita}
                      onChange={(e) => setSearchBerita(e.target.value)}
                    />
                  </div>
                </div>
                <FilterSelect
                  label="Kategori"
                  value={katBerita}
                  onChange={setKatBerita}
                  options={KAT_BERITA_OPTIONS}
                  className="flex-1 sm:max-w-[200px]"
                />
                <FilterSelect
                  label="Tahun"
                  value={tahunBerita}
                  onChange={setTahunBerita}
                  options={TAHUN_BERITA_OPTIONS}
                  className="w-full sm:max-w-[140px]"
                />
              </NewsFilterBar>

              {filteredBerita.length === 0 ? (
                <p className="py-12 text-center text-sm text-dark-gray">
                  Tidak ada berita yang cocok dengan filter.
                </p>
              ) : (
                <>
                  {featuredBerita ? (
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-secondary">
                        Berita utama
                      </p>
                      <BeritaCard b={featuredBerita} large />
                    </div>
                  ) : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {gridBerita.map((b) => (
                      <BeritaCard key={b.id} b={b} />
                    ))}
                  </div>
                  <Pagination
                    page={beritaPaginated.safePage}
                    totalPages={beritaPaginated.totalPages}
                    onPageChange={setBeritaPage}
                  />
                </>
              )}
            </div>

            <aside className="space-y-6 xl:sticky xl:top-24">
              <SectionCard>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <h3 className="text-sm font-bold text-primary">Terpopuler</h3>
                </div>
                <ul className="mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1">
                  {populerList.map((b, i) => (
                    <li
                      key={b.id}
                      className="border-b border-mid-gray/20 pb-3 last:border-0 last:pb-0"
                    >
                      <Link
                        href={`/kegiatan/${b.slug}`}
                        className="text-sm font-medium leading-snug text-primary hover:text-secondary"
                      >
                        <span className="mr-1 font-bold text-accent">{i + 1}.</span>
                        {b.judul}
                      </Link>
                      <p className="mt-0.5 text-xs text-dark-gray">
                        {b.views} dibaca · {b.kategori}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard>
                <h3 className="text-sm font-bold text-primary">Terbaru</h3>
                <ul className="mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1">
                  {terbaruList.map((b) => (
                    <li
                      key={b.id}
                      className="border-b border-mid-gray/20 pb-3 last:border-0 last:pb-0"
                    >
                      <Link
                        href={`/kegiatan/${b.slug}`}
                        className="text-sm font-medium leading-snug text-primary hover:text-secondary"
                      >
                        {b.judul}
                      </Link>
                      <p className="mt-0.5 text-xs text-dark-gray">
                        {format(parseISO(b.tanggal), "d MMM yyyy", {
                          locale: localeId,
                        })}
                      </p>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </aside>
          </div>
        </FadeIn>
      </SectionShell>
    </PageContentBoundary>
  );
}
