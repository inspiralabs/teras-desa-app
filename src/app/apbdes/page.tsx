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
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const apbdesData = [
  { name: "Pendapatan", jumlah: 4200 },
  { name: "Belanja", jumlah: 3950 },
  { name: "Realisasi", jumlah: 3780 },
];

const pieData = [
  { name: "Bidang Pembangunan", value: 35 },
  { name: "Bidang Pemerintahan", value: 25 },
  { name: "Bidang Pemberdayaan", value: 20 },
  { name: "Bidang Lainnya", value: 20 },
];

const COLORS = ["#2F6F4E", "#55816A", "#F39C12", "#1E8449"];

export default function ApbdesPage() {
  const [tahun, setTahun] = useState("2026");
  const [jenis, setJenis] = useState("Awal");

  return (
    <PageContentBoundary>
      <PageHero
        title="APBDes"
        description="Anggaran Pendapatan dan Belanja Desa — mock data PRD v2 §4.3.5"
      />
      <SectionShell className="pt-0">
        <div className="mb-6 flex flex-wrap gap-3">
          <select
            className="rounded-lg border border-mid-gray px-3 py-2 text-sm"
            value={jenis}
            onChange={(e) => setJenis(e.target.value)}
          >
            <option value="Awal">Anggaran Awal</option>
            <option value="Perubahan">Perubahan</option>
            <option value="Realisasi">Realisasi</option>
          </select>
          <select
            className="rounded-lg border border-mid-gray px-3 py-2 text-sm"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
          </select>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => toast.info("Unduh APBDes PDF — mock")}
          >
            Unduh APBDes PDF
          </Button>
        </div>

        <p className="mb-4 text-sm text-dark-gray">
          Data per Mei 2026 — {jenis} TA {tahun}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <SectionCard>
              <h2 className="font-bold text-primary">Pendapatan vs Belanja</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={apbdesData}>
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
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {pieData.map((_, i) => (
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
