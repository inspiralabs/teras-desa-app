/** Path publik ke aset di `public/images/` */
export const IMAGES = {
  hero: ["/images/hero-1.webp", "/images/hero-2.webp", "/images/hero-3.webp"] as const,
  kepalaDesa: "/images/kepala-desa-bojongkulur.jpg",
  lambangKabupaten: "/images/lambang-kabupaten-bogor.png",
  /** Galeri beranda & halaman /galeri */
  galeri: [
    "/images/galeri-1.jpeg",
    "/images/galeri-2.jpeg",
    "/images/galeri-3.jpeg",
    "/images/galeri-4.jpeg",
    "/images/susur-sungai-1.jpeg",
    "/images/aspirasi-1.jpeg",
    "/images/desa-wisata-3.jpeg",
    "/images/polling-1.jpeg",
  ] as const,
  aspirasi: [
    "/images/aspirasi-1.jpeg",
    "/images/aspirasi-2.jpeg",
    "/images/aspirasi-3.jpeg",
  ] as const,
  polling: [
    "/images/polling-1.jpeg",
    "/images/polling-2.jpeg",
    "/images/polling-3.jpeg",
  ] as const,
  kantorDesa: [
    "/images/kantor-desa-1.jpeg",
    "/images/kantor-desa-2.jpeg",
    "/images/kantor-desa-3.jpeg",
    "/images/kantor-desa-4.jpeg",
  ] as const,
  desaWisata: [
    "/images/desa-wisata-1.jpeg",
    "/images/desa-wisata-2.jpeg",
    "/images/desa-wisata-3.jpeg",
  ] as const,
  susurSungai: [
    "/images/susur-sungai-1.jpeg",
    "/images/susur-sungai-2.jpeg",
    "/images/susur-sungai-3.jpeg",
  ] as const,
  agendaFallback: "/images/hero-1.webp",
  pageNotFound: "/images/page-not-found.svg",
} as const;
