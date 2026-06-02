import {
  FileText,
  HandCoins,
  HeartPulse,
  Receipt,
  ScrollText,
  Store,
  type LucideIcon,
} from "lucide-react";

export type LayananCardId =
  | "ktp"
  | "umkm"
  | "kesehatan"
  | "pbb"
  | "manfaat"
  | "ahli-waris";

export type LayananCard = {
  id: LayananCardId;
  label: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const LAYANAN_CARDS: LayananCard[] = [
  {
    id: "ktp",
    label: "Administrasi Kependudukan",
    description:
      "Ajukan pembuatan dokumen kependudukan, unggah persyaratan, dan pantau status berkas.",
    icon: FileText,
    accent: "bg-primary/10 text-primary",
  },
  {
    id: "umkm",
    label: "UMKM Desa",
    description:
      "Jelajahi katalog produk UMKM Bojongkulur dan hubungi penjual langsung via WhatsApp.",
    icon: Store,
    accent: "bg-secondary/10 text-secondary",
  },
  {
    id: "kesehatan",
    label: "Kesehatan",
    description:
      "Informasi layanan kesehatan desa — fitur lengkap akan segera tersedia.",
    icon: HeartPulse,
    accent: "bg-success/10 text-success",
  },
  {
    id: "pbb",
    label: "Cek Pajak Bumi & Bangunan",
    description:
      "Cek informasi SPPT dengan Nomor Objek Pajak (NOP) dan verifikasi di Kab. Bogor.",
    icon: Receipt,
    accent: "bg-accent/15 text-accent",
  },
  {
    id: "manfaat",
    label: "Penerima Manfaat",
    description:
      "Lihat data penerima bantuan sosial BPNT, PKH, BLT-DD dan cek status dengan NIK.",
    icon: HandCoins,
    accent: "bg-primary/10 text-primary",
  },
  {
    id: "ahli-waris",
    label: "Unduh Surat Ahli Waris",
    description:
      "Unduh template surat resmi ahli waris dan lihat panduan penyerahan ke balai desa.",
    icon: ScrollText,
    accent: "bg-secondary/10 text-secondary",
  },
];

export function isLayananTabId(value: string | null): value is LayananCardId {
  return LAYANAN_CARDS.some((c) => c.id === value);
}
