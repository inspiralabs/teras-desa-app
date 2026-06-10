export type Berita = {
  id: string;
  slug: string;
  judul: string;
  ringkasan: string;
  tanggal: string;
  kategori: string;
  views: number;
  gambar: string;
  isi?: string;
};

const UNSPLASH = {
  gotong:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  bantuan:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
  kesehatan:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  umkm: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
};

export const beritaTerbaru: Berita[] = [
  {
    id: "1",
    slug: "gotong-royong-bersih-desa",
    judul: "Gotong Royong Bersih Desa Bojongkulur",
    ringkasan:
      "Warga bersama perangkat desa menggelar kerja bakti membersihkan saluran air dan lingkungan permukiman.",
    tanggal: "2026-05-20",
    kategori: "Pembangunan",
    views: 124,
    gambar: UNSPLASH.gotong,
  },
  {
    id: "2",
    slug: "penyaluran-blt-dd",
    judul: "Penyaluran BLT-DD Tahap II",
    ringkasan:
      "Pemerintah desa menyalurkan bantuan langsung tunai desa kepada keluarga penerima yang telah diverifikasi.",
    tanggal: "2026-05-18",
    kategori: "Pemerintahan",
    views: 89,
    gambar: UNSPLASH.bantuan,
  },
  {
    id: "3",
    slug: "posyandu-balita",
    judul: "Posyandu Balita Dusun III",
    ringkasan:
      "Kegiatan penimbangan dan imunisasi balita berjalan lancar di Posyandu Melati.",
    tanggal: "2026-05-15",
    kategori: "Pembinaan",
    views: 56,
    gambar: UNSPLASH.kesehatan,
  },
  {
    id: "4",
    slug: "pelatihan-umkm",
    judul: "Pelatihan Digital UMKM Desa",
    ringkasan:
      "Pelaku UMKM dilatih memanfaatkan media sosial untuk promosi produk lokal.",
    tanggal: "2026-05-12",
    kategori: "Pemberdayaan",
    views: 201,
    gambar: UNSPLASH.umkm,
  },
  {
    id: "5",
    slug: "vaksinasi-gratis",
    judul: "Vaksinasi Gratis Warga Desa",
    ringkasan: "Program vaksinasi rutin di Puskesmas pembantu desa.",
    tanggal: "2026-05-10",
    kategori: "Kesehatan",
    views: 178,
    gambar: UNSPLASH.kesehatan,
  },
  {
    id: "6",
    slug: "rapat-bpd-transparansi",
    judul: "Rapat BPD Bahas Transparansi APBDes",
    ringkasan: "BPD mengundang perwakilan warga membahas realisasi anggaran desa.",
    tanggal: "2026-05-08",
    kategori: "Pemerintahan",
    views: 142,
    gambar: UNSPLASH.bantuan,
  },
  {
    id: "7",
    slug: "pembangunan-jalan-dusun",
    judul: "Pembangunan Jalan Lingkungan Dusun II",
    ringkasan: "Pengerjaan jalan desa memasuki tahap pengaspalan.",
    tanggal: "2026-05-05",
    kategori: "Pembangunan",
    views: 267,
    gambar: UNSPLASH.gotong,
  },
  {
    id: "8",
    slug: "lomba-kebersihan-rt",
    judul: "Lomba Kebersihan Antar RT",
    ringkasan: "TP-PKK menggelar lomba lingkungan bersih se-Desa Bojongkulur.",
    tanggal: "2026-05-03",
    kategori: "Pembinaan",
    views: 95,
    gambar: UNSPLASH.gotong,
  },
  {
    id: "9",
    slug: "sosialisasi-pajak-bumi",
    judul: "Sosialisasi Pajak Bumi dan Bangunan",
    ringkasan: "Warga diajak memahami kewajiban PBB dan cara cek tagihan online.",
    tanggal: "2026-04-28",
    kategori: "Pemerintahan",
    views: 112,
    gambar: UNSPLASH.bantuan,
  },
  {
    id: "10",
    slug: "festival-wisata-sungai",
    judul: "Festival Wisata Susur Sungai Cikeas",
    ringkasan: "Promosi paket wisata desa dengan harga khusus warga.",
    tanggal: "2026-04-22",
    kategori: "Pemberdayaan",
    views: 334,
    gambar: UNSPLASH.umkm,
  },
  {
    id: "11",
    slug: "penanaman-pohon",
    judul: "Gerakan Penanaman 500 Pohon",
    ringkasan: "Karang taruna dan warga menanam pohon di bantaran sungai.",
    tanggal: "2026-04-18",
    kategori: "Pembangunan",
    views: 88,
    gambar: UNSPLASH.gotong,
  },
  {
    id: "12",
    slug: "bantuan-pupuk",
    judul: "Distribusi Bantuan Pupuk Subsidi",
    ringkasan: "Petani desa menerima bantuan pupuk untuk musim tanam.",
    tanggal: "2026-04-12",
    kategori: "Pemberdayaan",
    views: 76,
    gambar: UNSPLASH.umkm,
  },
];

export const beritaTerpopuler: Berita[] = [...beritaTerbaru]
  .sort((a, b) => b.views - a.views);

export const beritaTerbaruSorted: Berita[] = [...beritaTerbaru].sort(
  (a, b) => new Date(b.tanggal).getTime() - new Date(a.tanggal).getTime()
);

export function getBeritaBySlug(slug: string): Berita | undefined {
  return beritaTerbaru.find((b) => b.slug === slug);
}

export function formatBeritaDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
