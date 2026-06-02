export type StatusDokumen =
  | "Selesai"
  | "Sedang Diproses"
  | "Perlu Konfirmasi Datang ke Kantor Desa";

export const STATUS_DOKUMEN_OPTIONS: StatusDokumen[] = [
  "Selesai",
  "Sedang Diproses",
  "Perlu Konfirmasi Datang ke Kantor Desa",
];

/** NIK disimpan internal mock — tidak ditampilkan di UI publik */
export type DokumenPengajuan = {
  no: number;
  updated: string;
  nama: string;
  nik: string;
  jenis: string;
  status: StatusDokumen;
};

export const JENIS_DOKUMEN = [
  "Surat Keterangan Domisili",
  "Surat Keterangan Tidak Mampu",
  "Surat Keterangan Usaha",
  "Surat Keterangan Kelakuan Baik",
  "Surat Pengantar KTP/KK",
  "Surat Keterangan Kematian",
] as const;

export const dokumenPengajuan: DokumenPengajuan[] = [
  {
    no: 1,
    updated: "2026-05-22T09:30:00",
    nama: "Ahmad Wijaya",
    nik: "3201021508900001",
    jenis: "Surat Keterangan Domisili",
    status: "Selesai",
  },
  {
    no: 2,
    updated: "2026-05-24T14:15:00",
    nama: "Siti Rahayu",
    nik: "3201022203950002",
    jenis: "Surat Keterangan Tidak Mampu",
    status: "Sedang Diproses",
  },
  {
    no: 3,
    updated: "2026-05-25T08:00:00",
    nama: "Budi Santoso",
    nik: "3201021012780003",
    jenis: "Surat Keterangan Usaha",
    status: "Perlu Konfirmasi Datang ke Kantor Desa",
  },
  {
    no: 4,
    updated: "2026-05-20T11:45:00",
    nama: "Dewi Lestari",
    nik: "3201020506880004",
    jenis: "Surat Pengantar KTP/KK",
    status: "Selesai",
  },
  {
    no: 5,
    updated: "2026-05-18T16:20:00",
    nama: "Rudi Hartono",
    nik: "3201020304850005",
    jenis: "Surat Keterangan Kelakuan Baik",
    status: "Sedang Diproses",
  },
  {
    no: 6,
    updated: "2026-05-15T10:00:00",
    nama: "Maya Sari",
    nik: "3201021209920006",
    jenis: "Surat Keterangan Kematian",
    status: "Selesai",
  },
  {
    no: 7,
    updated: "2026-05-10T13:30:00",
    nama: "Agus Prasetyo",
    nik: "3201020801780007",
    jenis: "Surat Keterangan Domisili",
    status: "Perlu Konfirmasi Datang ke Kantor Desa",
  },
];

/** @deprecated gunakan dokumenPengajuan */
export const dokumenSiapDiambil = dokumenPengajuan;

export type SpptRow = {
  tahun: number;
  ketetapan: number;
  denda: number;
  nilaiBayar: number;
  sisaBayar: number;
  jatuhTempo: string;
};

export const spptMockByNop: Record<string, SpptRow[]> = {
  "320102000100010001": [
    {
      tahun: 2026,
      ketetapan: 245000,
      denda: 0,
      nilaiBayar: 245000,
      sisaBayar: 0,
      jatuhTempo: "2026-08-31",
    },
    {
      tahun: 2025,
      ketetapan: 230000,
      denda: 11500,
      nilaiBayar: 230000,
      sisaBayar: 11500,
      jatuhTempo: "2025-08-31",
    },
  ],
};

export type PenerimaProgram = {
  program: "BPNT" | "PKH" | "BLT-DD";
  jumlah: number;
};

export const penerimaManfaatSummary: PenerimaProgram[] = [
  { program: "BPNT", jumlah: 412 },
  { program: "PKH", jumlah: 186 },
  { program: "BLT-DD", jumlah: 95 },
];

export const penerimaManfaatTable = [
  { no: 1, nama: "Rina Wulandari", program: "BPNT" as const, dusun: "Dusun I" },
  { no: 2, nama: "Hendra Gunawan", program: "PKH" as const, dusun: "Dusun II" },
  { no: 3, nama: "Maya Sari", program: "BLT-DD" as const, dusun: "Dusun III" },
  { no: 4, nama: "Agus Prasetyo", program: "BPNT" as const, dusun: "Dusun I" },
  { no: 5, nama: "Fitri Handayani", program: "PKH" as const, dusun: "Dusun II" },
  { no: 6, nama: "Bambang Sutrisno", program: "BLT-DD" as const, dusun: "Dusun IV" },
  { no: 7, nama: "Yuni Astuti", program: "BPNT" as const, dusun: "Dusun III" },
  { no: 8, nama: "Dedi Kurniawan", program: "PKH" as const, dusun: "Dusun I" },
];

export const nikManfaatRegistry: Record<string, string> = {
  "3201021508900001": "BPNT",
  "3201022203950002": "PKH",
  "3201021012780003": "BLT-DD",
};

export type TemplateAhliWaris = {
  id: string;
  judul: string;
  deskripsi: string;
  fileName: string;
};

export const templateAhliWaris: TemplateAhliWaris[] = [
  {
    id: "sk-ahli-waris",
    judul: "Surat Keterangan Ahli Waris",
    deskripsi:
      "Format resmi surat keterangan ahli waris untuk keperluan administrasi waris di Desa Bojongkulur.",
    fileName: "surat-keterangan-ahli-waris.pdf",
  },
  {
    id: "form-permohonan",
    judul: "Formulir Permohonan Ahli Waris",
    deskripsi:
      "Formulir permohonan yang wajib diisi lengkap oleh pemohon beserta daftar ahli waris.",
    fileName: "formulir-permohonan-ahli-waris.pdf",
  },
  {
    id: "surat-pernyataan",
    judul: "Surat Pernyataan Ahli Waris",
    deskripsi:
      "Surat pernyataan kesepakatan ahli waris yang ditandatangani di atas materai.",
    fileName: "surat-pernyataan-ahli-waris.pdf",
  },
];

export const PBB_REDIRECT_URL = "http://bogorkab.net/cekpbb/";
