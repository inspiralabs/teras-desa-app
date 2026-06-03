/** Mock data halaman Infografis — PRD §4.4 */

export const INFOGRAFIS_META = {
  sumberDefault: "Disdukcapil & Data Statistik Desa Bojongkulur",
  diperbarui: "3 Juni 2026",
} as const;

export const CHART_COLORS = [
  "#2F6F4E",
  "#55816A",
  "#1E8449",
  "#F39C12",
  "#5D8A6E",
  "#94B49E",
] as const;

export const WILAYAH_ADMIN = [
  { dusun: "Dusun I", rt: 8, rw: 2, kk: 1240, jiwa: 3980 },
  { dusun: "Dusun II", rt: 6, rw: 2, kk: 980, jiwa: 3120 },
  { dusun: "Dusun III", rt: 7, rw: 2, kk: 1105, jiwa: 3540 },
  { dusun: "Dusun IV", rt: 5, rw: 1, kk: 567, jiwa: 1847 },
] as const;

export const PENDIDIKAN_KK = [
  { name: "Belum sekolah", value: 420 },
  { name: "SD", value: 2100 },
  { name: "SMP", value: 1850 },
  { name: "SMA/SMK", value: 1420 },
  { name: "Diploma/S1+", value: 680 },
] as const;

export const PEKERJAAN = [
  { name: "Wiraswasta", jumlah: 420 },
  { name: "Karyawan", jumlah: 380 },
  { name: "PNS/TNI/Polri", jumlah: 95 },
  { name: "Petani", jumlah: 210 },
  { name: "Lainnya", jumlah: 145 },
] as const;

export const AGAMA = [
  { name: "Islam", value: 85 },
  { name: "Kristen", value: 8 },
  { name: "Katolik", value: 5 },
  { name: "Lainnya", value: 2 },
] as const;

export const JENIS_KELAMIN = [
  { name: "Laki-laki", value: 6314 },
  { name: "Perempuan", value: 6173 },
] as const;

export const KELOMPOK_USIA = [
  { range: "0–4", jumlah: 890 },
  { range: "5–9", jumlah: 1020 },
  { range: "10–14", jumlah: 980 },
  { range: "15–19", jumlah: 1105 },
  { range: "20–24", jumlah: 1240 },
  { range: "25–29", jumlah: 1180 },
  { range: "30–34", jumlah: 1050 },
  { range: "35–39", jumlah: 920 },
  { range: "40–44", jumlah: 810 },
  { range: "45–49", jumlah: 720 },
  { range: "50–54", jumlah: 650 },
  { range: "55–59", jumlah: 580 },
  { range: "60–64", jumlah: 490 },
  { range: "65–69", jumlah: 380 },
  { range: "70–74", jumlah: 290 },
  { range: "75+", jumlah: 282 },
] as const;

export const STATUS_PERKAWINAN = [
  { name: "Belum Menikah", value: 28 },
  { name: "Menikah", value: 62 },
  { name: "Cerai", value: 10 },
] as const;

export const DPT = {
  total: 9842,
  perDusun: [
    { dusun: "Dusun I", jumlah: 3120 },
    { dusun: "Dusun II", jumlah: 2480 },
    { dusun: "Dusun III", jumlah: 2810 },
    { dusun: "Dusun IV", jumlah: 1432 },
  ],
} as const;

export const PENDUDUK_KPI = {
  totalPenduduk: 12487,
  kepalaKeluarga: 3892,
  lakiLaki: 6314,
  perempuan: 6173,
} as const;

export const APBDES_RINGKASAN = [
  { name: "Pendapatan", jumlah: 4200 },
  { name: "Belanja", jumlah: 3950 },
  { name: "Realisasi", jumlah: 3780 },
] as const;

export const STUNTING_DUSUN = [
  { dusun: "Dusun I", jumlah: 12 },
  { dusun: "Dusun II", jumlah: 8 },
  { dusun: "Dusun III", jumlah: 15 },
  { dusun: "Dusun IV", jumlah: 6 },
] as const;

export const STUNTING_TREN = [
  { tahun: "2022", prevalensi: 8.2 },
  { tahun: "2023", prevalensi: 7.1 },
  { tahun: "2024", prevalensi: 6.4 },
  { tahun: "2025", prevalensi: 5.8 },
  { tahun: "2026", prevalensi: 5.2 },
] as const;

export const STUNTING_PROGRAM = [
  "Pemberian PMT balita risiko stunting",
  "Penyuluhan gizi ibu hamil & menyusui",
  "Pendampingan Posyandu bulanan",
] as const;

export const BANSOS_BY_YEAR: Record<
  string,
  { program: string; jumlah: number }[]
> = {
  "2026": [
    { program: "BPNT", jumlah: 420 },
    { program: "PKH", jumlah: 185 },
    { program: "BLT-DD", jumlah: 310 },
  ],
  "2025": [
    { program: "BPNT", jumlah: 398 },
    { program: "PKH", jumlah: 172 },
    { program: "BLT-DD", jumlah: 295 },
  ],
  "2024": [
    { program: "BPNT", jumlah: 385 },
    { program: "PKH", jumlah: 168 },
    { program: "BLT-DD", jumlah: 280 },
  ],
};

export const IDM = {
  skorTerkini: 0.698,
  tahun: "2025",
  status: "Berkembang" as const,
  delta: 0.027,
  history: [
    { tahun: "2022", skor: 0.612 },
    { tahun: "2023", skor: 0.645 },
    { tahun: "2024", skor: 0.671 },
    { tahun: "2025", skor: 0.698 },
  ],
} as const;

export const SDGS_DESA = [
  { no: 1, tujuan: "Desa Tanpa Kemiskinan", capaian: 78, targetNasional: 80 },
  { no: 2, tujuan: "Desa Tanpa Kelaparan", capaian: 82, targetNasional: 85 },
  { no: 3, tujuan: "Desa Sehat & Sejahtera", capaian: 71, targetNasional: 80 },
  { no: 4, tujuan: "Pendidikan Desa Berkualitas", capaian: 85, targetNasional: 88 },
  { no: 5, tujuan: "Keterlibatan Perempuan Desa", capaian: 76, targetNasional: 82 },
  { no: 6, tujuan: "Desa Layak Air Bersih & Sanitasi", capaian: 88, targetNasional: 90 },
  { no: 7, tujuan: "Desa Layak Energi Bersih", capaian: 72, targetNasional: 78 },
  { no: 8, tujuan: "Pertumbuhan Ekonomi Desa", capaian: 69, targetNasional: 75 },
  { no: 9, tujuan: "Infrastruktur & Inovasi Desa", capaian: 74, targetNasional: 80 },
  { no: 10, tujuan: "Desa Tanpa Kesenjangan", capaian: 70, targetNasional: 78 },
  { no: 11, tujuan: "Desa Layak & Berkelanjutan", capaian: 81, targetNasional: 85 },
  { no: 12, tujuan: "Konsumsi & Produksi Desa", capaian: 65, targetNasional: 72 },
  { no: 13, tujuan: "Desa Iklim & Lingkungan", capaian: 68, targetNasional: 75 },
  { no: 14, tujuan: "Ekosistem Desa", capaian: 73, targetNasional: 80 },
  { no: 15, tujuan: "Kehidupan Darat Desa", capaian: 77, targetNasional: 82 },
  { no: 16, tujuan: "Kehidupan Perairan Desa", capaian: 62, targetNasional: 70 },
  { no: 17, tujuan: "Kemitraan untuk Desa", capaian: 79, targetNasional: 83 },
  { no: 18, tujuan: "Kelembagaan Desa", capaian: 84, targetNasional: 88 },
] as const;
