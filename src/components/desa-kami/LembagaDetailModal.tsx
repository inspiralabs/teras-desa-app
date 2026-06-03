"use client";

import Image from "next/image";
import { Calendar, Phone, Users } from "lucide-react";
import { AnimatedModal } from "@/components/motion/AnimatedModal";
import type { LembagaDesa } from "@/lib/mock-data/desa-kami";

export function LembagaDetailModal({
  lembaga,
  open,
  onClose,
}: {
  lembaga: LembagaDesa | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!lembaga) return null;

  return (
    <AnimatedModal
      open={open}
      onClose={onClose}
      title={lembaga.nama}
      className="max-w-lg"
    >
      <div className="flex items-center gap-4 border-b border-mid-gray/20 pb-4">
        <Image
          src={lembaga.logo}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 rounded-xl object-cover"
        />
        <div>
          <p className="text-sm font-medium text-secondary">{lembaga.singkatan}</p>
          <p className="mt-1 text-xs text-dark-gray">Lembaga Desa Bojongkulur</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-dark-gray">{lembaga.deskripsi}</p>

      <div className="mt-5 space-y-3 rounded-xl bg-light p-4 text-sm">
        <p>
          <span className="font-semibold text-primary">Visi:</span> {lembaga.visi}
        </p>
        <p>
          <span className="font-semibold text-primary">Misi:</span> {lembaga.misi}
        </p>
        <p>
          <span className="font-semibold text-primary">Tujuan:</span> {lembaga.tujuan}
        </p>
      </div>

      <div className="mt-4 space-y-2 text-sm text-dark-gray">
        <p className="flex items-start gap-2">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>
            {lembaga.kontak}
            <br />
            <span className="text-dark-gray">{lembaga.narahubung}</span>
          </span>
        </p>
        <p className="flex items-start gap-2">
          <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          {lembaga.jadwalRutin}
        </p>
      </div>

      <div className="mt-5">
        <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
          <Users className="h-4 w-4" />
          Struktur Organisasi
        </p>
        <ul className="space-y-1.5 rounded-lg border border-mid-gray/25 bg-white px-4 py-3 text-sm">
          {lembaga.struktur.map((s) => (
            <li key={`${s.nama}-${s.jabatan}`} className="flex justify-between gap-2">
              <span className="font-medium text-primary">{s.nama}</span>
              <span className="text-dark-gray">{s.jabatan}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedModal>
  );
}
