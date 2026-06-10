import { IMAGES } from "@/lib/images";

export const POLLING_HERO_SLIDES = [
  {
    id: "p1",
    src: IMAGES.polling[0],
    alt: "Polling pembangunan desa",
    caption: "Polling & Aspirasi — Suara Warga Desa Bojongkulur",
  },
  {
    id: "p2",
    src: IMAGES.polling[1],
    alt: "Jajak pendapat warga",
    caption: "Prioritaskan pembangunan bersama pemerintah desa",
  },
  {
    id: "p3",
    src: IMAGES.polling[2],
    alt: "Partisipasi masyarakat",
    caption: "Partisipasi aktif untuk desa yang lebih baik",
  },
] as const;

export const ASPIRASI_HERO_SLIDES = [
  {
    id: "a1",
    src: IMAGES.aspirasi[0],
    alt: "Aspirasi warga desa",
    caption: "Sampaikan aspirasi Anda kepada pemerintah desa",
  },
  {
    id: "a2",
    src: IMAGES.aspirasi[1],
    alt: "Kanal aspirasi warga",
    caption: "Kritik, saran, dan masukan diterima dengan baik",
  },
  {
    id: "a3",
    src: IMAGES.aspirasi[2],
    alt: "Partisipasi warga",
    caption: "Data NIK Anda dilindungi dan tidak dipublikasikan",
  },
] as const;
