"use client";

import Link from "next/link";
import { FileText, BarChart3, Calendar, ClipboardList } from "lucide-react";
import { AnimatedModal } from "@/components/motion/AnimatedModal";

const ITEMS = [
  {
    href: "/layanan",
    label: "Layanan",
    desc: "Ajukan dokumen dan cek status layanan",
    icon: ClipboardList,
    color: "bg-primary/10 text-primary",
  },
  {
    href: "/data-desa",
    label: "Data Desa",
    desc: "Statistik dan visualisasi data desa",
    icon: BarChart3,
    color: "bg-secondary/10 text-secondary",
  },
  {
    href: "/data-desa",
    label: "Publikasi Desa",
    desc: "Laporan keuangan dan program kerja",
    icon: FileText,
    color: "bg-accent/10 text-accent",
  },
  {
    href: "/kegiatan",
    label: "Agenda",
    desc: "Jadwal kegiatan desa",
    icon: Calendar,
    color: "bg-success/10 text-success",
  },
] as const;

export function AksesCepatPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatedModal open={open} onClose={onClose} title="Akses Cepat">
      <div className="grid gap-3 sm:grid-cols-2">
        {ITEMS.map(({ href, label, desc, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            onClick={onClose}
            className="group rounded-xl border border-mid-gray/40 bg-white p-4 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-lg ${color}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-3 font-bold text-primary group-hover:text-secondary">
              {label}
            </p>
            <p className="mt-1 text-xs text-dark-gray">{desc}</p>
          </Link>
        ))}
      </div>
    </AnimatedModal>
  );
}
