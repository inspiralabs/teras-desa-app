/** Mock statistik kependudukan Desa Bojongkulur — PRD v2 §4.1.3 */
import { BESTIE_KONDISI_UMUM, BESTIE_JENIS_KELAMIN } from "@/lib/mock-data/bestie-prodeskel";

export const STATISTIK_DESA = {
  totalPenduduk: BESTIE_KONDISI_UMUM.jumlahPenduduk,
  kepalaKeluarga: BESTIE_KONDISI_UMUM.jumlahKeluarga,
  lakiLaki: BESTIE_JENIS_KELAMIN[0].value,
  perempuan: BESTIE_JENIS_KELAMIN[1].value,
  diperbarui: "2024 (Bestie Kab. Bogor)",
} as const;

export const ASPIRASI_BULAN_INI = {
  ditindaklanjuti: 23,
  bulan: "Mei 2026",
} as const;

/** Statistik aspirasi untuk pie chart beranda — mock */
export const ASPIRASI_STATISTIK = [
  { name: "Masuk", value: 42, color: "#55816A" },
  { name: "Diproses", value: 28, color: "#F39C12" },
  { name: "Selesai", value: 67, color: "#2F6F4E" },
] as const;
