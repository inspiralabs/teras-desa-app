export type AgendaKategori =
  | "Pemerintahan"
  | "Pembangunan"
  | "Pembinaan"
  | "Pemberdayaan"
  | "Penanggulangan Bencana"
  | "Lain-lain";

export type Agenda = {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  jam: string;
  lokasi: string;
  gambar: string;
  mode: "online" | "offline";
  status: "akan-datang" | "selesai";
  kategori: AgendaKategori;
  likes: number;
  views: number;
};

export const agendaList: Agenda[] = [
  {
    id: "1",
    judul: "Festival UMKM Desa",
    deskripsi:
      "Pameran produk UMKM lokal dengan stan penjualan dan demo produk unggulan desa.",
    tanggal: "2026-05-29",
    jam: "08:00",
    lokasi: "Lapangan Desa Bojongkulur",
    gambar:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    mode: "offline",
    status: "akan-datang",
    kategori: "Pemberdayaan",
    likes: 24,
    views: 312,
  },
  {
    id: "2",
    judul: "Posyandu Balita Dusun III",
    deskripsi:
      "Kegiatan penimbangan, imunisasi, dan penyuluhan kesehatan ibu dan anak.",
    tanggal: "2026-05-15",
    jam: "09:00",
    lokasi: "Posyandu Melati, Dusun III",
    gambar:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    mode: "offline",
    status: "selesai",
    kategori: "Pembinaan",
    likes: 18,
    views: 156,
  },
  {
    id: "3",
    judul: "Gotong Royong Bersih Desa",
    deskripsi:
      "Kerja bakti bersama warga membersihkan saluran air dan lingkungan permukiman.",
    tanggal: "2026-05-20",
    jam: "07:00",
    lokasi: "Seluruh wilayah Desa Bojongkulur",
    gambar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    mode: "offline",
    status: "selesai",
    kategori: "Pembangunan",
    likes: 45,
    views: 520,
  },
  {
    id: "4",
    judul: "Rapat Koordinasi RT/RW",
    deskripsi:
      "Pembahasan program kerja desa dan penjadwalan kegiatan warga bulan depan.",
    tanggal: "2026-06-05",
    jam: "09:00",
    lokasi: "Aula Kantor Desa Bojongkulur",
    gambar:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    mode: "offline",
    status: "akan-datang",
    kategori: "Pemerintahan",
    likes: 9,
    views: 88,
  },
  {
    id: "5",
    judul: "Pelatihan SIGAP DESA untuk Perangkat",
    deskripsi: "Sosialisasi layanan digital desa kepada perangkat dan kader.",
    tanggal: "2026-05-22",
    jam: "13:00",
    lokasi: "Aula Kantor Desa",
    gambar:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    mode: "offline",
    status: "akan-datang",
    kategori: "Pemerintahan",
    likes: 14,
    views: 102,
  },
  {
    id: "6",
    judul: "Senam Lansia Bersama",
    deskripsi: "Kegiatan senam dan cek kesehatan gratis untuk lansia desa.",
    tanggal: "2026-05-25",
    jam: "06:30",
    lokasi: "Lapangan Desa",
    gambar:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    mode: "offline",
    status: "akan-datang",
    kategori: "Pembinaan",
    likes: 31,
    views: 198,
  },
  {
    id: "7",
    judul: "Pembagian Sembako PKH",
    deskripsi: "Penyaluran paket sembako untuk keluarga penerima manfaat.",
    tanggal: "2026-06-12",
    jam: "08:00",
    lokasi: "Kantor Desa Bojongkulur",
    gambar:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    mode: "offline",
    status: "akan-datang",
    kategori: "Pemerintahan",
    likes: 22,
    views: 145,
  },
  {
    id: "8",
    judul: "Simulasi Tanggap Bencana",
    deskripsi: "Latihan evakuasi dan koordinasi tagana desa.",
    tanggal: "2026-06-18",
    jam: "09:00",
    lokasi: "Dusun I",
    gambar:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    mode: "offline",
    status: "akan-datang",
    kategori: "Penanggulangan Bencana",
    likes: 17,
    views: 91,
  },
];

/** Bulan default tampilan beranda (Mei 2026) */
export const AGENDA_DEFAULT_MONTH = new Date(2026, 4, 1);
