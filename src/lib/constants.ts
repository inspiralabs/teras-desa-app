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
  email: "desa.bojongkulur@bogorkab.go.id",
  telepon: "(021) XXXX-XXXX",
  mapsUrl: "https://www.google.com/maps?q=-6.322900271778084,106.9689039480517",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d106.9689!3d-6.3229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMjIuNCJTIDEwNsKwNTgnMDguMSJF!5e0!3m2!1sid!2sid!4v1",
} as const;

export const SITE_TITLE = "SIGAP DESA | Desa Bojongkulur";

export const HERO_TAGLINE =
  "Platform digital layanan desa - Menjawab Kebutuhan Informasi Warga Desa";

/** Sub-menu PRD §3.1 — di bawah Desa Kami */
export const DESA_KAMI_SUBMENU = [
  { href: "/desa-kami", label: "Profil Desa" },
  { href: "/lembaga-desa", label: "Lembaga Desa" },
  { href: "/data-desa", label: "Data Desa" },
] as const;

/** Menu utama navbar (6 top-level; Lembaga & Data sebagai sub-menu Desa Kami) */
export const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/desa-kami", label: "Desa Kami", submenu: DESA_KAMI_SUBMENU },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/wisata", label: "Wisata" },
  { href: "/kontak", label: "Kontak" },
] as const;

/** Footer quick links PRD §4.10 */
export const FOOTER_QUICK_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/desa-kami", label: "Desa Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/kontak", label: "Kontak" },
] as const;

export const POPULAR_SEARCH_LINKS = [
  { href: "/layanan?tab=ktp", label: "Cek Status KTP" },
  { href: "/layanan?tab=pbb", label: "Cek PBB" },
  { href: "/layanan?tab=manfaat", label: "Penerima Manfaat" },
  { href: "/kegiatan", label: "Agenda Desa" },
] as const;

export const LAYANAN_TABS = [
  { id: "ktp", label: "Administrasi Kependudukan" },
  { id: "umkm", label: "UMKM Desa" },
  { id: "kesehatan", label: "Kesehatan" },
  { id: "pbb", label: "Cek PBB" },
  { id: "manfaat", label: "Penerima Manfaat" },
  { id: "ahli-waris", label: "Surat Ahli Waris" },
] as const;
