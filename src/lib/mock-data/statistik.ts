/** Mock statistik kependudukan Desa Bojongkulur — PRD v2 §4.1.3 */
export const STATISTIK_DESA = {
  totalPenduduk: 12487,
  kepalaKeluarga: 3892,
  lakiLaki: 6314,
  perempuan: 6173,
  diperbarui: "Mei 2026",
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
