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
  },
];

/** Bulan default tampilan beranda (Mei 2026) */
export const AGENDA_DEFAULT_MONTH = new Date(2026, 4, 1);
