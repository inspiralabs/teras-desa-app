"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Clock, Calendar, CalendarDays } from "lucide-react";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  AgendaMonthCalendar,
  filterAgendaByMonth,
} from "@/components/ui/AgendaMonthCalendar";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  agendaList,
  AGENDA_DEFAULT_MONTH,
  type Agenda,
} from "@/lib/mock-data/agenda";
import { formatBeritaDate } from "@/lib/mock-data/berita";
import { IMAGES } from "@/lib/images";

export function AgendaDesaSection() {
  const [viewDate, setViewDate] = useState(AGENDA_DEFAULT_MONTH);
  const [detail, setDetail] = useState<Agenda | null>(null);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const monthAgendas = useMemo(
    () => filterAgendaByMonth(agendaList, viewDate),
    [viewDate]
  );

  const listItems = useMemo(() => {
    if (!selectedDay) return monthAgendas;
    return monthAgendas.filter((a) => {
      const d = parseISO(a.tanggal);
      return (
        d.getDate() === selectedDay.getDate() &&
        d.getMonth() === selectedDay.getMonth() &&
        d.getFullYear() === selectedDay.getFullYear()
      );
    });
  }, [monthAgendas, selectedDay]);

  const monthLabel = format(viewDate, "MMMM yyyy", { locale: id });

  const handleMonthChange = (d: Date) => {
    setViewDate(d);
    setSelectedDay(null);
  };

  return (
    <SectionShell variant="muted">
      <FadeIn>
        <SectionHeader
          title="Agenda Desa"
          subtitle={`Menampilkan agenda Desa Bojongkulur untuk bulan ${monthLabel}.`}
          href="/kegiatan"
          linkLabel="Lihat Agenda Lainnya"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-start">
          <SectionCard className="lg:sticky lg:top-24">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-primary">Kalender Agenda</h3>
            </div>
            <p className="mt-1 text-sm text-dark-gray">
              Klik tanggal bertanda titik untuk memfilter agenda hari tersebut.
            </p>
            <div className="mt-4 max-w-[360px]">
              <AgendaMonthCalendar
                viewDate={viewDate}
                onViewDateChange={handleMonthChange}
                agendas={monthAgendas}
                selectedDay={selectedDay}
                onSelectDay={setSelectedDay}
              />
            </div>
          </SectionCard>

          <div className="min-h-[320px] space-y-3">
            {monthAgendas.length === 0 ? (
              <SectionCard className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <Calendar className="mb-3 h-12 w-12 text-mid-gray" />
                <p className="text-lg font-bold text-primary">
                  Belum Ada Agenda yang Tersedia
                </p>
                <p className="mt-2 max-w-md text-sm text-dark-gray">
                  Tidak ada agenda untuk bulan {monthLabel}. Gunakan tombol
                  panah pada kalender untuk melihat bulan lain.
                </p>
              </SectionCard>
            ) : listItems.length === 0 ? (
              <SectionCard className="flex min-h-[200px] flex-col items-center justify-center text-center">
                <p className="text-sm text-dark-gray">
                  Tidak ada agenda pada tanggal yang dipilih.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => setSelectedDay(null)}
                >
                  Tampilkan semua agenda bulan ini
                </Button>
              </SectionCard>
            ) : (
              listItems.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setDetail(a)}
                  className="flex w-full gap-4 rounded-xl border border-mid-gray/40 bg-white p-4 text-left shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                    <SafeImage
                      src={a.gambar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="112px"
                      fallbackSrc={IMAGES.agendaFallback}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant={a.status === "akan-datang" ? "success" : "default"}
                      >
                        {a.status === "akan-datang" ? "Akan datang" : "Selesai"}
                      </Badge>
                      <Badge>{a.mode === "online" ? "Online" : "Offline"}</Badge>
                    </div>
                    <p className="mt-2 font-semibold text-primary">{a.judul}</p>
                    <p className="mt-1 text-sm text-dark-gray line-clamp-2">
                      {a.deskripsi}
                    </p>
                    <p className="mt-2 text-xs text-dark-gray">
                      {formatBeritaDate(a.tanggal)} · {a.jam} WIB · {a.lokasi}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </FadeIn>

      <AnimatedModal
        open={!!detail}
        onClose={() => setDetail(null)}
        title={detail?.judul}
        className="max-w-lg"
      >
        {detail && (
          <div className="space-y-4">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <SafeImage
                src={detail.gambar}
                alt={detail.judul}
                fill
                className="object-cover"
                sizes="400px"
                fallbackSrc={IMAGES.agendaFallback}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={detail.status === "akan-datang" ? "success" : "default"}
              >
                {detail.status === "akan-datang" ? "Akan datang" : "Selesai"}
              </Badge>
              <Badge>{detail.mode === "online" ? "Online" : "Offline"}</Badge>
            </div>
            <p className="text-sm text-dark-gray">{detail.deskripsi}</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-dark-gray">
                <Calendar className="h-4 w-4 shrink-0 text-primary" />
                {formatBeritaDate(detail.tanggal)}
              </li>
              <li className="flex items-center gap-2 text-dark-gray">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                {detail.jam} WIB
              </li>
              <li className="flex items-center gap-2 text-dark-gray">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {detail.lokasi}
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/kegiatan">Lihat Selengkapnya</Link>
            </Button>
          </div>
        )}
      </AnimatedModal>
    </SectionShell>
  );
}
