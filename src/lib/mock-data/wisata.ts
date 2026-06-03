/** Mock Wisata Susur Sungai Cikeas — PRD v2 §4.6 */

import { IMAGES } from "@/lib/images";

export const WISATA_HERO_SLIDES = [
  {
    id: "dw1",
    src: IMAGES.desaWisata[0],
    alt: "Wisata desa Bojongkulur",
    caption: "Susur Sungai Cikeas — Wisata Alam Desa Bojongkulur",
  },
  {
    id: "dw2",
    src: IMAGES.desaWisata[1],
    alt: "Aktivitas wisata desa",
    caption: "Nikmati perjalanan perahu dengan pemandu lokal",
  },
  {
    id: "dw3",
    src: IMAGES.desaWisata[2],
    alt: "Pemandangan wisata desa",
    caption: "Pemandangan alam sepanjang aliran Cikeas",
  },
] as const;

export const WISATA_INFO = {
  nama: "Susur Sungai Cikeas",
  titikAwal: "Dermaga Desa Bojongkulur (dekat Kantor Desa)",
  titikAkhir: "Muara ke area pertanian Dusun IV",
  mapsEmbed:
    "https://maps.google.com/maps?q=-6.3185,106.9720&hl=id&z=14&output=embed",
  kapasitasPerSlot: 10,
  jumlahPerahu: 6,
  jadwal: "Senin–Minggu, 08.00–16.00 WIB (kecuali hujan deras)",
  hargaTiket: 75000,
  fasilitas: ["Pelampung", "Pemandu lokal", "Jas hujan", "Titik foto", "Area parkir"],
  rating: 4.6,
  jumlahUlasan: 128,
  /** Rating dari Google Maps (mock — sinkron API butuh Google Places) */
  googleRating: 4.4,
  googleReviewCount: 86,
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Susur+Sungai+Cikeas+Desa+Bojongkulur",
  youtubeId: "dQw4w9WgXcQ",
} as const;

/** Tanggal penuh (YYYY-MM-DD) — mock anti-overbooking */
export const TANGGAL_PENUH = ["2026-06-10", "2026-06-15", "2026-06-20"];

export const SLOT_KEBERANGKATAN = [
  { id: "08", label: "08:00", tersedia: 4, kapasitas: 10 },
  { id: "10", label: "10:00", tersedia: 0, kapasitas: 10 },
  { id: "12", label: "12:00", tersedia: 8, kapasitas: 10 },
  { id: "14", label: "14:00", tersedia: 2, kapasitas: 10 },
  { id: "16", label: "16:00", tersedia: 6, kapasitas: 10 },
] as const;

export const ULASAN_WISATA = [
  {
    id: "1",
    nama: "Budi Santoso",
    rating: 5,
    komentar: "Pemandangan indah, pemandu ramah. Cocok untuk keluarga.",
    tanggal: "2026-05-12",
    likes: 12,
    dislikes: 0,
    status: "published" as const,
  },
  {
    id: "2",
    nama: "Siti Aminah",
    rating: 4,
    komentar: "Seru, tapi antrian agak lama di weekend.",
    tanggal: "2026-05-08",
    likes: 8,
    dislikes: 1,
    status: "published" as const,
  },
  {
    id: "3",
    nama: "Rudi H.",
    rating: 5,
    komentar: "Anak-anak senang. Akan datang lagi.",
    tanggal: "2026-05-28",
    likes: 3,
    dislikes: 0,
    status: "pending" as const,
  },
];

export const GALERI_WISATA = [...IMAGES.susurSungai];
