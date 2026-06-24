export const DESA = {
  nama: "Bojongkulur",
  kecamatan: "Gunung Putri",
  kabupaten: "Bogor",
  provinsi: "Jawa Barat",
  alamat:
    "Jl. Letda Natsir No. 584, Desa Bojongkulur, Kec. Gunungputri, Kab. Bogor, Jawa Barat 16969",
  kodeWilayah: "32.01.02.2002",
  kepalaDesa: "Firman Riansyah, S.E.",
  jabatanKepalaDesa: "Kepala Desa Bojongkulur",
  email: "bojongkulurdesa@gmail.com",
  telepon: "(021) 82771919",
  jamPelayanan: "08.00–15.00 WIB",
  mapsUrl: "https://maps.app.goo.gl/dCLx3RrrSPacCVTi9",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d106.9689!3d-6.3229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMjIuNCJTIDEwNsKwNTgnMDguMSJF!5e0!3m2!1sid!2sid!4v1",
} as const;

export const SITE_NAME = "TERAS Desa";

/** Kepanjangan resmi: Tempat E-layanan & Registrasi Administrasi Sipil Desa */
export const SITE_ACRONYM_EXPANSION =
  "Tempat E-layanan & Registrasi Administrasi Sipil Desa";

export const SITE_TITLE = `${SITE_NAME} | Desa Bojongkulur`;

export const SITE_DESCRIPTION = `${SITE_NAME} Bojongkulur — ${SITE_ACRONYM_EXPANSION}. Berita, agenda, dan transparansi pemerintahan desa.`;

export const SITE_TAGLINE =
  "E-layanan dan registrasi administrasi sipil desa dalam satu platform digital";

export const HERO_TAGLINE =
  "Satu tempat untuk e-layanan administrasi sipil, informasi, dan aspirasi warga";

/** Sub-menu PRD v2 §3.1 — di bawah Desa Kami */
export const DESA_KAMI_SUBMENU = [
  { href: "/desa-kami", label: "Profil Desa" },
  { href: "/lembaga-desa", label: "Lembaga Desa" },
  { href: "/produk-hukum", label: "Produk Hukum" },
  { href: "/apbdes", label: "APBDes" },
] as const;

/** Menu utama navbar — PRD v2 §3.1 (9 item) */
export const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/desa-kami", label: "Desa Kami", submenu: DESA_KAMI_SUBMENU },
  { href: "/infografis", label: "Infografis" },
  { href: "/ppid", label: "PPID" },
  { href: "/wisata", label: "Wisata" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/polling-aspirasi", label: "Polling & Aspirasi" },
  { href: "/kontak", label: "Kontak" },
] as const;

/** Footer quick links — kolom 1 & 2 */
export const FOOTER_QUICK_LINKS_COL1 = [
  { href: "/", label: "Beranda" },
  { href: "/desa-kami", label: "Desa Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/infografis", label: "Infografis" },
] as const;

export const FOOTER_QUICK_LINKS_COL2 = [
  { href: "/ppid", label: "PPID" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/polling-aspirasi", label: "Polling" },
  { href: "/kontak", label: "Kontak" },
] as const;

/** @deprecated gunakan FOOTER_QUICK_LINKS_COL1 + COL2 */
export const FOOTER_QUICK_LINKS = [
  ...FOOTER_QUICK_LINKS_COL1,
  ...FOOTER_QUICK_LINKS_COL2,
] as const;

/** PRD v2 §4.1.1 — pencarian populer */
export const POPULAR_SEARCH_LINKS = [
  { href: "/layanan?tab=pbb", label: "Cek PBB" },
  { href: "/layanan?tab=ktp", label: "Ajukan Surat" },
  { href: "/wisata", label: "Info Wisata" },
  { href: "/layanan?tab=manfaat", label: "Penerima Bansos" },
] as const;

export const LAYANAN_TABS = [
  { id: "ktp", label: "Administrasi Kependudukan" },
  { id: "umkm", label: "UMKM Desa" },
  { id: "kesehatan", label: "Kesehatan" },
  { id: "pbb", label: "Cek Pajak Bumi & Bangunan (PBB)" },
  { id: "manfaat", label: "Penerima Manfaat" },
  { id: "ahli-waris", label: "Surat Ahli Waris" },
] as const;

export const INFOGRAFIS_TABS = [
  { id: "data-desa", label: "Data Desa" },
  { id: "apbdes", label: "APBDes" },
  { id: "stunting", label: "Stunting" },
  { id: "bansos", label: "Bansos" },
  { id: "idm", label: "IDM" },
  { id: "sdgs", label: "SDGs" },
] as const;

export const PPID_TABS = [
  { id: "dasar-hukum", label: "Dasar Hukum" },
  { id: "berkala", label: "Informasi Berkala" },
  { id: "serta-merta", label: "Informasi Serta Merta" },
  { id: "setiap-saat", label: "Informasi Setiap Saat" },
] as const;
