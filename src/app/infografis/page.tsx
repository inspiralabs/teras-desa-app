"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { TabShell } from "@/components/ui/TabShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { INFOGRAFIS_TABS } from "@/lib/constants";
import { STATISTIK_DESA } from "@/lib/mock-data/statistik";

const CHART_COLORS = ["#2F6F4E", "#55816A", "#F39C12", "#1E8449"];

const stuntingData = [
  { dusun: "Dusun I", jumlah: 12 },
  { dusun: "Dusun II", jumlah: 8 },
  { dusun: "Dusun III", jumlah: 15 },
];

const bansosData = [
  { program: "BPNT", jumlah: 420 },
  { program: "PKH", jumlah: 185 },
  { program: "BLT-DD", jumlah: 310 },
];

const idmHistory = [
  { tahun: "2022", skor: 0.612 },
  { tahun: "2023", skor: 0.645 },
  { tahun: "2024", skor: 0.671 },
  { tahun: "2025", skor: 0.698 },
];

const sdgsGoals = [
  { tujuan: "Desa Tanpa Kemiskinan", capaian: 78 },
  { tujuan: "Desa Tanpa Kelaparan", capaian: 82 },
  { tujuan: "Desa Sehat & Sejahtera", capaian: 71 },
  { tujuan: "Pendidikan Desa", capaian: 85 },
];

export default function InfografisPage() {
  const [tab, setTab] = useState<string>(INFOGRAFIS_TABS[0].id);

  return (
    <PageContentBoundary>
      <PageHero
        title="Infografis"
        description="Visualisasi data statistik Desa Bojongkulur — mock data"
      />
      <SectionShell className="pt-0">
        <TabShell tabs={INFOGRAFIS_TABS} active={tab} onChange={setTab} />

        <div className="mt-8">
          {tab === "penduduk" && (
            <FadeIn>
              <SectionCard>
                <h2 className="font-bold text-primary">Data Penduduk</h2>
                <p className="mt-1 text-sm text-dark-gray">
                  Data diperbarui: {STATISTIK_DESA.diperbarui}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { label: "Total Penduduk", value: STATISTIK_DESA.totalPenduduk },
                    { label: "Kepala Keluarga", value: STATISTIK_DESA.kepalaKeluarga },
                    { label: "Laki-laki", value: STATISTIK_DESA.lakiLaki },
                    { label: "Perempuan", value: STATISTIK_DESA.perempuan },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-light p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-primary">
                        {item.value.toLocaleString("id-ID")}
                      </p>
                      <p className="mt-1 text-sm text-dark-gray">{item.label}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </FadeIn>
          )}

          {tab === "apbdes" && (
            <FadeIn>
              <SectionCard>
                <h2 className="font-bold text-primary">Ringkasan APBDes</h2>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Pendapatan", jumlah: 4200 },
                        { name: "Belanja", jumlah: 3950 },
                        { name: "Realisasi", jumlah: 3780 },
                      ]}
                    >
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="jumlah" fill="#2F6F4E" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </SectionCard>
            </FadeIn>
          )}

          {tab === "stunting" && (
            <FadeIn>
              <SectionCard>
                <h2 className="font-bold text-primary">Data Stunting per Dusun</h2>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={stuntingData}>
                      <XAxis dataKey="dusun" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="jumlah" fill="#55816A" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </SectionCard>
            </FadeIn>
          )}

          {tab === "bansos" && (
            <FadeIn>
              <SectionCard>
                <h2 className="font-bold text-primary">Penerima Bansos</h2>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bansosData}
                        dataKey="jumlah"
                        nameKey="program"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {bansosData.map((_, i) => (
                          <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend
                        verticalAlign="bottom"
                        align="center"
                        iconType="circle"
                        wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </SectionCard>
            </FadeIn>
          )}

          {tab === "idm" && (
            <FadeIn>
              <SectionCard>
                <h2 className="font-bold text-primary">Indeks Desa Membangun (IDM)</h2>
                <p className="mt-2 text-sm text-dark-gray">
                  Status desa: <strong>Berkembang</strong> — Skor terkini 0.698
                </p>
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={idmHistory}>
                      <XAxis dataKey="tahun" tick={{ fontSize: 12 }} />
                      <YAxis domain={[0.5, 0.8]} tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Bar dataKey="skor" fill="#2F6F4E" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </SectionCard>
            </FadeIn>
          )}

          {tab === "sdgs" && (
            <FadeIn>
              <SectionCard>
                <h2 className="font-bold text-primary">Capaian SDGs Desa</h2>
                <ul className="mt-4 space-y-4">
                  {sdgsGoals.map((goal) => (
                    <li key={goal.tujuan}>
                      <div className="flex justify-between text-sm">
                        <span>{goal.tujuan}</span>
                        <span className="font-semibold text-primary">
                          {goal.capaian}%
                        </span>
                      </div>
                      <div className="mt-1 h-2 overflow-hidden rounded-full bg-light-gray">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${goal.capaian}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </FadeIn>
          )}
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
