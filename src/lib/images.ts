/** Path publik ke aset di `public/images/` */
export const IMAGES = {
  hero: ["/images/hero-1.webp", "/images/hero-2.webp", "/images/hero-3.webp"] as const,
  kepalaDesa: "/images/kepala-desa-bojongkulur.jpg",
  lambangKabupaten: "/images/lambang-kabupaten-bogor.png",
  galeri: [
    "/images/galeri-1.jpeg",
    "/images/galeri-2.jpeg",
    "/images/galeri-3.jpeg",
    "/images/galeri-4.jpeg",
    "/images/susur-sungai-1.jpeg",
  ] as const,
  agendaFallback: "/images/hero-1.webp",
  pageNotFound: "/images/page-not-found.svg",
} as const;
