import type { StatusDokumen } from "@/lib/mock-data/layanan";

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatTanggalWaktu(iso: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function statusDokumenVariant(
  status: StatusDokumen
): "success" | "warning" | "default" {
  if (status === "Selesai") return "success";
  if (status === "Sedang Diproses") return "warning";
  return "default";
}

export function isUmkmOpen(bukaJam: string, tutupJam: string, now = new Date()) {
  const [bH, bM] = bukaJam.split(":").map(Number);
  const [tH, tM] = tutupJam.split(":").map(Number);
  const minutes = now.getHours() * 60 + now.getMinutes();
  const open = bH * 60 + bM;
  const close = tH * 60 + tM;
  return minutes >= open && minutes <= close;
}

export const inputClassName =
  "w-full rounded-lg border border-mid-gray px-4 py-3 text-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary";
