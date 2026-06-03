/** Mock data portal Desa Kami — PRD v2 §4.3 */

import { IMAGES } from "@/lib/images";

export const DESA_BANNER = IMAGES.kantorDesa[0];

/** Galeri kantor desa — section Profil Desa */
export const KANTOR_DESA_GALERI = [...IMAGES.kantorDesa];

export const BATAS_WILAYAH = {
  utara: "Kelurahan Jatirasa, Kota Bekasi",
  timur: "Kelurahan Bantargebang, Kota Bekasi",
  selatan: "Desa Ciangsana, Kecamatan Gunungputri",
  barat: "Kelurahan Jatiluhur, Kota Bekasi",
} as const;

export const DESA_GPS = {
  lat: -6.3229,
  lng: 106.9689,
  luasHa: 185.42,
  label: "6°19'22.4\"S 106°58'08.1\"E",
} as const;

export const SEJARAH_DESA = `Desa Bojongkulur berdiri sejak masa kolonial sebagai pemukiman agraris di pinggiran aliran Sungai Cikeas. Nama "Bojongkulur" dipercaya berasal dari hutan bambu (bojong) yang rimbun dan tanah subur (kulur) yang menjadi pusat pertanian warga.

Seiring perkembangan wilayah metropolitan Bekasi, desa ini bertransformasi menjadi pemukiman padat dengan potensi wisata susur sungai, UMKM, dan layanan administrasi desa digital melalui SIGAP DESA.`;

export const TIMELINE_KADES = [
  { tahun: "1985–1998", nama: "H. Ahmad Suryadi" },
  { tahun: "1998–2010", nama: "Drs. Bambang Wijaya" },
  { tahun: "2010–2022", nama: "H. Yusuf Maulana, S.Sos." },
  { tahun: "2022–sekarang", nama: "Firman Riansyah, S.E." },
] as const;

export const VISI_MISI = {
  visi: "Desa Bojongkulur yang maju, mandiri, dan sejahtera melalui tata kelola pemerintahan yang baik dan partisipasi aktif warga.",
  misi: [
    "Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel.",
    "Memberdayakan ekonomi warga melalui UMKM dan potensi wisata.",
    "Mewujudkan tata kelola desa berbasis data dan partisipasi masyarakat.",
    "Menjaga kelestarian lingkungan dan mitigasi bencana berbasis warga.",
  ],
} as const;

export const TABEL_LUAS = [
  { jenis: "Sawah", ha: 42.5, persen: 22.9 },
  { jenis: "Kebun/Pekarangan", ha: 38.2, persen: 20.6 },
  { jenis: "Permukiman", ha: 72.1, persen: 38.9 },
  { jenis: "Jalan", ha: 18.4, persen: 9.9 },
  { jenis: "Fasilitas Sosial", ha: 14.22, persen: 7.7 },
] as const;

export type OrgNode = {
  id: string;
  nama: string;
  jabatan: string;
  foto: string;
  parentId?: string;
};

const FOTO = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces",
] as const;

export const SOTK_PEMDES: OrgNode[] = [
  {
    id: "kades",
    nama: "Firman Riansyah, S.E.",
    jabatan: "Kepala Desa",
    foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=faces",
  },
  {
    id: "sekdes",
    nama: "Drs. Hendra Gunawan",
    jabatan: "Sekretaris Desa",
    foto: FOTO[0],
    parentId: "kades",
  },
  {
    id: "kasi-pem",
    nama: "Siti Rahmawati, S.AP.",
    jabatan: "Kasi Pemerintahan",
    foto: FOTO[1],
    parentId: "sekdes",
  },
  {
    id: "kasi-pemb",
    nama: "Budi Santoso",
    jabatan: "Kasi Pembangunan",
    foto: FOTO[2],
    parentId: "sekdes",
  },
  {
    id: "kasi-sos",
    nama: "Rina Melati",
    jabatan: "Kasi Kesejahteraan",
    foto: FOTO[3],
    parentId: "sekdes",
  },
  {
    id: "kaur-keu",
    nama: "Agus Prasetyo",
    jabatan: "Kaur Keuangan",
    foto: FOTO[4],
    parentId: "sekdes",
  },
  {
    id: "kadus1",
    nama: "H. Slamet Riyadi",
    jabatan: "Kadus I",
    foto: FOTO[5],
    parentId: "kasi-pem",
  },
  {
    id: "kadus2",
    nama: "Ibu Yuni Astuti",
    jabatan: "Kadus II",
    foto: FOTO[6],
    parentId: "kasi-pem",
  },
];

export const SOTK_BPD: OrgNode[] = [
  {
    id: "ketua-bpd",
    nama: "H. Maman Suparman",
    jabatan: "Ketua BPD",
    foto: FOTO[0],
  },
  {
    id: "wakil-bpd",
    nama: "Dede Kurniawan",
    jabatan: "Wakil Ketua",
    foto: FOTO[1],
    parentId: "ketua-bpd",
  },
  {
    id: "sek-bpd",
    nama: "Nurhayati",
    jabatan: "Sekretaris BPD",
    foto: FOTO[2],
    parentId: "ketua-bpd",
  },
  {
    id: "anggota1",
    nama: "Rudi Hartono",
    jabatan: "Anggota BPD",
    foto: FOTO[3],
    parentId: "ketua-bpd",
  },
  {
    id: "anggota2",
    nama: "Sri Mulyani",
    jabatan: "Anggota BPD",
    foto: FOTO[4],
    parentId: "ketua-bpd",
  },
];

export type LembagaDesa = {
  id: string;
  nama: string;
  singkatan: string;
  logo: string;
  deskripsi: string;
  visi: string;
  misi: string;
  tujuan: string;
  kontak: string;
  narahubung: string;
  jadwalRutin: string;
  struktur: { nama: string; jabatan: string }[];
};

const LOGO = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=80&h=80&fit=crop";

export const LEMBAGA_DESA_LIST: LembagaDesa[] = [
  {
    id: "bpd",
    nama: "Badan Permusyawaratan Desa",
    singkatan: "BPD",
    logo: LOGO,
    deskripsi: "Lembaga legislatif desa yang melakukan fungsi pembentukan peraturan dan pengawasan.",
    visi: "BPD yang responsif terhadap aspirasi warga.",
    misi: "Melaksanakan pengawasan dan musyawarah desa secara transparan.",
    tujuan: "Mewujudkan tata kelola desa partisipatif.",
    kontak: "(021) 82771919",
    narahubung: "H. Maman Suparman",
    jadwalRutin: "Rapat pleno setiap Senin minggu kedua, 09.00 WIB",
    struktur: [
      { nama: "H. Maman Suparman", jabatan: "Ketua" },
      { nama: "Dede Kurniawan", jabatan: "Wakil Ketua" },
    ],
  },
  {
    id: "bumdes",
    nama: "Badan Usaha Milik Desa",
    singkatan: "BUMDes",
    logo: LOGO,
    deskripsi: "Unit usaha desa untuk mengelola aset dan potensi ekonomi warga.",
    visi: "BUMDes sebagai motor ekonomi desa.",
    misi: "Mengembangkan usaha susur sungai dan UMKM.",
    tujuan: "Meningkatkan PADes dan lapangan kerja.",
    kontak: "0812-3456-7890",
    narahubung: "Budi Santoso (Direktur)",
    jadwalRutin: "Rapat pengurus setiap Jumat, 13.00 WIB",
    struktur: [
      { nama: "Budi Santoso", jabatan: "Direktur" },
      { nama: "Rina Melati", jabatan: "Komisaris" },
    ],
  },
  {
    id: "posyandu",
    nama: "Posyandu",
    singkatan: "Posyandu",
    logo: LOGO,
    deskripsi: "Pelayanan kesehatan ibu dan anak tingkat RT.",
    visi: "Generasi desa yang sehat dan cerdas.",
    misi: "Penimbangan, imunisasi, dan penyuluhan gizi.",
    tujuan: "Menurunkan angka stunting.",
    kontak: "0856-1111-2222",
    narahubung: "Ibu Yuni Astuti (Kader)",
    jadwalRutin: "Posyandu setiap Selasa minggu pertama, 08.00 WIB",
    struktur: [
      { nama: "Ibu Yuni Astuti", jabatan: "Koordinator" },
      { nama: "5 Kader RT", jabatan: "Kader Posyandu" },
    ],
  },
  {
    id: "pkk",
    nama: "Pemberdayaan Kesejahteraan Keluarga",
    singkatan: "TP-PKK",
    logo: LOGO,
    deskripsi: "Gerakan kesejahteraan keluarga di tingkat desa hingga RT.",
    visi: "Keluarga sehat, mandiri, dan produktif.",
    misi: "Program 10 pokok kesejahteraan keluarga.",
    tujuan: "Peningkatan peran perempuan dalam pembangunan.",
    kontak: "(021) 82771920",
    narahubung: "Ibu Sri Mulyani",
    jadwalRutin: "Arisan PKK setiap Kamis minggu ketiga",
    struktur: [
      { nama: "Ibu Sri Mulyani", jabatan: "Ketua" },
      { nama: "Perwakilan RT", jabatan: "Pengurus" },
    ],
  },
  {
    id: "karangtaruna",
    nama: "Karang Taruna",
    singkatan: "Karang Taruna",
    logo: LOGO,
    deskripsi: "Organisasi kepemudaan desa untuk pembinaan dan kegiatan sosial.",
    visi: "Pemuda desa kreatif dan berdaya.",
    misi: "Olahraga, seni, dan kepedulian sosial.",
    tujuan: "Mengurangi pengangguran pemuda.",
    kontak: "0813-9999-8888",
    narahubung: "Rudi Hartono",
    jadwalRutin: "Latihan futsal setiap Sabtu sore",
    struktur: [
      { nama: "Rudi Hartono", jabatan: "Ketua" },
      { nama: "Tim Pengurus", jabatan: "Sekretaris & Bendahara" },
    ],
  },
];

const LEMBAGA_EXTRA_SINGKATAN = [
  "TPBDes",
  "BKM",
  "Desa Wisata",
  "Amilin Desa",
  "LPM",
  "MUI",
  "Kordes",
  "Puskesos",
  "RT/RW",
] as const;

export const LEMBAGA_DESA_ALL: LembagaDesa[] = [
  ...LEMBAGA_DESA_LIST,
  ...LEMBAGA_EXTRA_SINGKATAN.map((singkatan, i) => ({
    id: `lembaga-extra-${i}`,
    nama: singkatan,
    singkatan,
    logo: LOGO,
    deskripsi: `Lembaga ${singkatan} Desa Bojongkulur — data mock untuk demonstrasi portal.`,
    visi: "Mendukung pembangunan desa.",
    misi: "Koordinasi program sesuai tupoksi lembaga.",
    tujuan: "Peningkatan kesejahteraan warga.",
    kontak: "(021) 82771919",
    narahubung: "Perwakilan Lembaga",
    jadwalRutin: "Kegiatan rutin sesuai kalender desa (mock)",
    struktur: [{ nama: "Koordinator", jabatan: "Ketua" }],
  })),
];

export const PRODUK_HUKUM_MOCK = [
  {
    subjek: "Tata Ruang",
    judul: "Perdes Rencana Detail Tata Ruang Desa",
    jenis: "Perdes",
    tahun: "2024",
    nomor: "05/2024",
    status: "Berlaku",
  },
  {
    subjek: "Keuangan",
    judul: "Perdes APBDes Tahun Anggaran 2026",
    jenis: "Perdes",
    tahun: "2026",
    nomor: "02/2026",
    status: "Berlaku",
  },
  {
    subjek: "Organisasi",
    judul: "Perdes Struktur Organisasi Pemerintah Desa",
    jenis: "Perdes",
    tahun: "2025",
    nomor: "08/2025",
    status: "Berlaku",
  },
  {
    subjek: "Pelayanan",
    judul: "SK Kades Standar Pelayanan Minimal",
    jenis: "SK Kades",
    tahun: "2025",
    nomor: "12/2025",
    status: "Berlaku",
  },
];

export const APBDES_MOCK = {
  diperbarui: "3 Juni 2026",
  chartBar: [
    { name: "Pendapatan", jumlah: 4200 },
    { name: "Belanja", jumlah: 3950 },
    { name: "Realisasi", jumlah: 3780 },
  ],
  chartPie: [
    { name: "Bidang Pembangunan", value: 35 },
    { name: "Bidang Pemerintahan", value: 25 },
    { name: "Bidang Pemberdayaan", value: 20 },
    { name: "Bidang Lainnya", value: 20 },
  ],
  rincian: [
    {
      bidang: "Bidang Pembangunan",
      pos: [
        { nama: "Pembangunan Jalan Desa", anggaran: 850 },
        { nama: "Drainase Lingkungan", anggaran: 420 },
      ],
    },
    {
      bidang: "Bidang Pemerintahan",
      pos: [
        { nama: "Tata Praja Pemerintahan", anggaran: 310 },
        { nama: "Administrasi Kependudukan", anggaran: 180 },
      ],
    },
    {
      bidang: "Bidang Pemberdayaan",
      pos: [
        { nama: "Pemberdayaan UMKM", anggaran: 290 },
        { nama: "Bantuan Sosial", anggaran: 510 },
      ],
    },
  ],
};
