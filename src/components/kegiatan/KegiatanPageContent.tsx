"use client";

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
import { BeritaPortalLayout } from "@/components/berita/BeritaPortalLayout";
import { Badge } from "@/components/ui/badge";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { NewsFilterBar } from "@/components/ui/NewsFilterBar";
import { Pagination, paginateItems } from "@/components/ui/Pagination";
import { agendaList, type AgendaKategori } from "@/lib/mock-data/agenda";
import { beritaTerbaruSorted, beritaTerpopuler } from "@/lib/mock-data/berita";
import { cn } from "@/lib/utils";

const AGENDA_PER_PAGE = 4;
const BERITA_GRID_PAGE_SIZE = 6;

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

  /** Grid halaman — tetap saat carousel headline bergeser */
  const gridBerita = useMemo(() => {
    const start = (beritaPage - 1) * BERITA_GRID_PAGE_SIZE;
    return filteredBerita.slice(start, start + BERITA_GRID_PAGE_SIZE);
  }, [filteredBerita, beritaPage]);

  const beritaGridTotalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredBerita.length / BERITA_GRID_PAGE_SIZE)),
    [filteredBerita.length]
  );

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
    if (beritaPage > beritaGridTotalPages) {
      setBeritaPage(beritaGridTotalPages);
    }
  }, [beritaPage, beritaGridTotalPages]);

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

          <NewsFilterBar className="mb-6">
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

          <BeritaPortalLayout
            headlineItems={filteredBerita}
            gridItems={gridBerita}
            terbaruSidebarItems={filteredBerita}
            populerSidebarItems={beritaTerpopuler}
            headlineBadge="Berita utama"
            emptyMessage="Tidak ada berita yang cocok dengan filter."
            pagination={
              filteredBerita.length > BERITA_GRID_PAGE_SIZE
                ? {
                    page: beritaPage,
                    totalPages: beritaGridTotalPages,
                    onPageChange: setBeritaPage,
                  }
                : undefined
            }
          />
        </FadeIn>
      </SectionShell>
    </PageContentBoundary>
  );
}
