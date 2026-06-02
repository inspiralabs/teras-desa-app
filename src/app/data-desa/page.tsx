"use client";

import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { PageHero } from "@/components/layout/PageHero";
import { SectionShell, SectionCard } from "@/components/ui/SectionShell";
import { FadeIn } from "@/components/motion/FadeIn";

const agama = [
  { name: "Islam", value: 85 },
  { name: "Kristen", value: 8 },
  { name: "Katolik", value: 5 },
  { name: "Lainnya", value: 2 },
];

const pekerjaan = [
  { name: "Wiraswasta", jumlah: 420 },
  { name: "Karyawan", jumlah: 380 },
  { name: "PNS/TNI/Polri", jumlah: 95 },
];

const COLORS = ["#2F6F4E", "#55816A", "#F39C12", "#1E8449"];

export default function DataDesaPage() {
  return (
    <PageContentBoundary>
      <PageHero
        title="Data Desa"
        description="Statistik kependudukan Desa Bojongkulur (mock). Data diperbarui: Mei 2026."
      />
      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <SectionCard>
              <h2 className="font-bold text-primary">Komposisi Agama</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={agama} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {agama.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </FadeIn>
          <FadeIn>
            <SectionCard>
              <h2 className="font-bold text-primary">Pekerjaan</h2>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pekerjaan} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="jumlah" fill="#2F6F4E" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </SectionCard>
          </FadeIn>
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
