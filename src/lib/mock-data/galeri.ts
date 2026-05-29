import { IMAGES } from "@/lib/images";

const JUDUL = [
  "Layanan Kesehatan Masyarakat",
  "Informasi Layanan Publik",
  "UMKM dan ekonomi kreatif lokal",
  "Mitigasi Bencana Alam",
  "Wisata Susur Sungai Bojongkulur",
];

export type GaleriItem = {
  id: string;
  judul: string;
  gambar: string;
  alt: string;
};

export const galeriItems: GaleriItem[] = IMAGES.galeri.map((gambar, i) => ({
  id: String(i + 1),
  judul: JUDUL[i] ?? `Galeri Desa ${i + 1}`,
  gambar,
  alt: JUDUL[i] ?? `Foto galeri desa ${i + 1}`,
}));
