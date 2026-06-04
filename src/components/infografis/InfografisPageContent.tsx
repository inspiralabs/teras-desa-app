"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell } from "@/components/ui/SectionShell";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { ChartCard } from "@/components/infografis/ChartCard";
import { InfografisKpiStrip } from "@/components/infografis/InfografisKpiStrip";
import { InfografisTabBar } from "@/components/infografis/InfografisTabBar";
import { IdmStatusHero } from "@/components/infografis/IdmStatusHero";
import { SdgsGoalList } from "@/components/infografis/SdgsGoalList";
import {
  DonutChart,
  HorizontalBarChart,
  LineChartSimple,
  PieChartSimple,
  VerticalBarChart,
} from "@/components/infografis/chart-utils";
import { INFOGRAFIS_TABS } from "@/lib/constants";
import {
  AGAMA,
  APBDES_RINGKASAN,
  BANSOS_BY_YEAR,
  DPT,
  IDM,
  JENIS_KELAMIN,
  KELOMPOK_USIA,
  PENDIDIKAN_KK,
  PEKERJAAN,
  SDGS_DESA,
  STATUS_PERKAWINAN,
  STUNTING_DUSUN,
  STUNTING_PROGRAM,
  STUNTING_TREN,
  WILAYAH_ADMIN,
} from "@/lib/mock-data/infografis";

type InfografisTabId = (typeof INFOGRAFIS_TABS)[number]["id"];

const TAB_IDS: InfografisTabId[] = INFOGRAFIS_TABS.map((t) => t.id);

function isInfografisTabId(id: string): id is InfografisTabId {
  return (TAB_IDS as readonly string[]).includes(id);
}

function normalizeTabId(param: string | null): InfografisTabId {
  if (param === "demografi" || param === "penduduk") return "data-desa";
  if (param && isInfografisTabId(param)) return param;
  return INFOGRAFIS_TABS[0].id;
}

const BANSOS_YEARS = Object.keys(BANSOS_BY_YEAR)
  .sort((a, b) => Number(b) - Number(a))
  .map((y) => ({ value: y, label: `Tahun ${y}` }));

export function InfografisPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [tab, setTab] = useState<InfografisTabId>(() => normalizeTabId(tabParam));
  const [bansosYear, setBansosYear] = useState(BANSOS_YEARS[0]?.value ?? "2026");

  useEffect(() => {
    const next = normalizeTabId(tabParam);
    setTab(next);
    if (tabParam === "penduduk" || tabParam === "demografi") {
      router.replace("/infografis?tab=data-desa", { scroll: false });
    }
  }, [tabParam, router]);

  const onTabChange = useCallback(
    (id: InfografisTabId) => {
      setTab(id);
      router.replace(`/infografis?tab=${id}`, { scroll: false });
    },
    [router]
  );

  const bansosData = useMemo(
    () => BANSOS_BY_YEAR[bansosYear] ?? BANSOS_BY_YEAR["2026"],
    [bansosYear]
  );

  return (
    <PageContentBoundary>
      <PageHero
        title="Infografis"
        description="Pusat data statistik Desa Bojongkulur — visualisasi interaktif dan transparan."
      />
      <SectionShell className="pt-0">
        <InfografisTabBar
          tabs={INFOGRAFIS_TABS}
          active={tab}
          onChange={(id) => {
            if (isInfografisTabId(id)) onTabChange(id);
          }}
        />

        <div
          className="mt-6 md:mt-8"
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
        >
          {tab === "data-desa" && (
            <FadeIn>
              <InfografisKpiStrip />
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
                <ChartCard
                  title="Wilayah Administratif"
                  subtitle="Data dusun hingga RT/RW"
                  fullWidth
                  sumber="Disdukcapil Desa Bojongkulur"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[480px] text-left text-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="px-3 py-2 font-semibold">Dusun</th>
                          <th className="px-3 py-2 font-semibold">RT</th>
                          <th className="px-3 py-2 font-semibold">RW</th>
                          <th className="px-3 py-2 font-semibold">KK</th>
                          <th className="px-3 py-2 font-semibold">Jiwa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {WILAYAH_ADMIN.map((row) => (
                          <tr
                            key={row.dusun}
                            className="border-b border-mid-gray/20 even:bg-light-gray/40"
                          >
                            <td className="px-3 py-2 font-medium text-primary">
                              {row.dusun}
                            </td>
                            <td className="px-3 py-2">{row.rt}</td>
                            <td className="px-3 py-2">{row.rw}</td>
                            <td className="px-3 py-2">
                              {row.kk.toLocaleString("id-ID")}
                            </td>
                            <td className="px-3 py-2">
                              {row.jiwa.toLocaleString("id-ID")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ChartCard>

                <ChartCard
                  title="Pendidikan (dalam KK)"
                  subtitle="Belum sekolah s.d. strata"
                >
                  <DonutChart data={PENDIDIKAN_KK} />
                </ChartCard>

                <ChartCard title="Komposisi Agama">
                  <PieChartSimple data={AGAMA} />
                </ChartCard>

                <ChartCard title="Pekerjaan Warga">
                  <HorizontalBarChart data={PEKERJAAN} />
                </ChartCard>

                <ChartCard title="Jenis Kelamin">
                  <DonutChart data={JENIS_KELAMIN} />
                </ChartCard>

                <ChartCard title="Kelompok Usia" subtitle="Rentang 5 tahunan">
                  <VerticalBarChart
                    data={KELOMPOK_USIA}
                    xKey="range"
                    dataKey="jumlah"
                  />
                </ChartCard>

                <ChartCard title="Status Perkawinan">
                  <DonutChart data={STATUS_PERKAWINAN} />
                </ChartCard>

                <ChartCard
                  title="Wajib Pilih (DPT)"
                  subtitle="Data Pemilu — jumlah pemilih terdaftar"
                  fullWidth
                >
                  <div className="flex flex-col gap-4">
                    <p className="text-center text-3xl font-bold text-primary md:text-4xl">
                      {DPT.total.toLocaleString("id-ID")}
                      <span className="mt-1 block text-sm font-normal text-dark-gray">
                        Total DPT Desa
                      </span>
                    </p>
                    <VerticalBarChart
                      data={DPT.perDusun}
                      xKey="dusun"
                      dataKey="jumlah"
                      fill="#55816A"
                    />
                  </div>
                </ChartCard>
              </div>
            </FadeIn>
          )}

          {tab === "apbdes" && (
            <FadeIn>
              <div className="space-y-6">
                <ChartCard title="Ringkasan APBDes" subtitle="Dalam juta rupiah (mock)">
                  <VerticalBarChart
                    data={APBDES_RINGKASAN}
                    xKey="name"
                    dataKey="jumlah"
                  />
                </ChartCard>
                <div className="text-center">
                  <Button asChild className="gap-2">
                    <Link href="/apbdes">
                      Buka halaman APBDes lengkap
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          )}

          {tab === "stunting" && (
            <FadeIn>
              <div className="space-y-4 lg:space-y-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-center">
                    <p className="text-2xl font-bold text-primary">5,2%</p>
                    <p className="text-xs text-dark-gray">Prevalensi stunting desa</p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-light p-4 text-center">
                    <p className="text-2xl font-bold text-primary">41</p>
                    <p className="text-xs text-dark-gray">Kasus balita (mock)</p>
                  </div>
                </div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <ChartCard title="Stunting per Dusun" sumber="Puskesmas & Posyandu">
                    <VerticalBarChart
                      data={STUNTING_DUSUN}
                      xKey="dusun"
                      dataKey="jumlah"
                      fill="#55816A"
                    />
                  </ChartCard>
                  <ChartCard title="Tren Prevalensi Tahunan" sumber="Puskesmas">
                    <LineChartSimple
                      data={STUNTING_TREN}
                      xKey="tahun"
                      dataKey="prevalensi"
                    />
                  </ChartCard>
                </div>
                <ChartCard
                  title="Program Penanganan"
                  subtitle="Kegiatan rutin penurunan stunting"
                  chartClassName="min-h-0"
                >
                  <ul className="list-inside list-disc space-y-2 text-sm text-dark-gray">
                    {STUNTING_PROGRAM.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ChartCard>
              </div>
            </FadeIn>
          )}

          {tab === "bansos" && (
            <FadeIn>
              <div className="space-y-4">
                <FilterSelect
                  label="Tahun data"
                  value={bansosYear}
                  onChange={setBansosYear}
                  options={BANSOS_YEARS}
                  className="max-w-xs"
                />
                <ChartCard
                  title="Penerima Bansos per Program"
                  subtitle={`Tahun anggaran ${bansosYear}`}
                  sumber="DTKS / Data Desa"
                >
                  <PieChartSimple
                    data={bansosData.map((d) => ({
                      name: d.program,
                      value: d.jumlah,
                    }))}
                    dataKey="value"
                    nameKey="name"
                  />
                </ChartCard>
              </div>
            </FadeIn>
          )}

          {tab === "idm" && (
            <FadeIn>
              <div className="space-y-6">
                <IdmStatusHero
                  skor={IDM.skorTerkini}
                  tahun={IDM.tahun}
                  status={IDM.status}
                  delta={IDM.delta}
                />
                <ChartCard title="Historis Skor IDM" sumber="Kemendesa PDT">
                  <VerticalBarChart
                    data={IDM.history}
                    xKey="tahun"
                    dataKey="skor"
                  />
                </ChartCard>
              </div>
            </FadeIn>
          )}

          {tab === "sdgs" && (
            <FadeIn>
              <SdgsGoalList goals={SDGS_DESA} />
            </FadeIn>
          )}
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
