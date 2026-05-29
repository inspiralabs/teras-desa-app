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
];

export const beritaTerpopuler: Berita[] = [...beritaTerbaru]
  .sort((a, b) => b.views - a.views)
  .slice(0, 4);

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
