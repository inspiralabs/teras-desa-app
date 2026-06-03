"use client";

import { useState } from "react";
import { Download } from "lucide-react";
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
import { toast } from "sonner";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { FilterSelect } from "@/components/ui/FilterSelect";
import { APBDES_MOCK } from "@/lib/mock-data/desa-kami";

const COLORS = ["#2F6F4E", "#55816A", "#F39C12", "#1E8449"];

const JENIS_OPTIONS = [
  { value: "Awal", label: "Anggaran Awal" },
  { value: "Perubahan", label: "Perubahan Anggaran" },
  { value: "Realisasi", label: "Realisasi" },
] as const;

const TAHUN_OPTIONS = [
  { value: "2026", label: "Tahun 2026" },
  { value: "2025", label: "Tahun 2025" },
  { value: "2024", label: "Tahun 2024" },
] as const;

export default function ApbdesPage() {
  const [tahun, setTahun] = useState("2026");
  const [jenis, setJenis] = useState("Awal");

  return (
    <PageContentBoundary>
      <PageHero
        title="APBDes"
        description="Anggaran Pendapatan dan Belanja Desa — transparansi keuangan desa (mock data)."
      />
      <SectionShell className="pt-0">
        <SectionCard className="mb-6 p-4 md:p-5">
          <p className="mb-4 text-sm font-semibold text-primary">Filter data APBDes</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
            <FilterSelect
              label="Jenis anggaran"
              value={jenis}
              onChange={setJenis}
              options={JENIS_OPTIONS}
              className="sm:flex-1"
            />
            <FilterSelect
              label="Tahun anggaran"
              value={tahun}
              onChange={setTahun}
              options={TAHUN_OPTIONS}
              className="sm:flex-1"
            />
            <Button
              type="button"
              variant="outline"
              className="h-11 w-full gap-2 sm:w-auto sm:shrink-0"
              onClick={() => toast.info("Unduh APBDes PDF — mock")}
            >
              <Download className="h-4 w-4" />
              Unduh APBDes PDF
            </Button>
          </div>
          <p className="mt-4 text-xs text-dark-gray md:text-sm">
            Data per {APBDES_MOCK.diperbarui} — {jenis} TA {tahun}
          </p>
        </SectionCard>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <SectionCard>
              <h2 className="font-bold text-primary">Pendapatan vs Belanja</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={APBDES_MOCK.chartBar}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="jumlah" fill="#2F6F4E" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </FadeIn>
          <FadeIn>
            <SectionCard>
              <h2 className="font-bold text-primary">Alokasi per Bidang</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={APBDES_MOCK.chartPie}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {APBDES_MOCK.chartPie.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
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
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
