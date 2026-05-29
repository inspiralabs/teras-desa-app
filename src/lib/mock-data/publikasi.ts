export type Publikasi = {
  id: string;
  judul: string;
  tanggal: string;
  deskripsi: string;
  kategori: string;
  fileUrl: string;
};

export const publikasiList: Publikasi[] = [
  {
    id: "1",
    judul: "Program Kerja Desa Tahun 2026",
    tanggal: "2026-01-15",
    deskripsi:
      "Dokumen perencanaan program kerja pemerintah desa untuk mendukung pembangunan dan pelayanan warga.",
    kategori: "Perencanaan",
    fileUrl: "#",
  },
  {
    id: "2",
    judul: "Laporan Keuangan Desa Semester I",
    tanggal: "2026-07-01",
    deskripsi:
      "Ringkasan realisasi anggaran pendapatan dan belanja desa periode Januari–Juni 2026.",
    kategori: "Keuangan",
    fileUrl: "#",
  },
  {
    id: "3",
    judul: "LKPJ Desa Bojongkulur",
    tanggal: "2025-12-20",
    deskripsi:
      "Laporan keterangan pertanggungjawaban kegiatan pemerintah desa tahun anggaran berjalan.",
    kategori: "Akuntabilitas",
    fileUrl: "#",
  },
  {
    id: "4",
    judul: "Rencana Pembangunan Jangka Menengah",
    tanggal: "2026-03-10",
    deskripsi:
      "Prioritas pembangunan infrastruktur, ekonomi, dan sosial desa untuk lima tahun ke depan.",
    kategori: "Pembangunan",
    fileUrl: "#",
  },
];
