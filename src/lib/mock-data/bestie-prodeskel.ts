/**
 * Data statistik Desa Bojong Kulur — disalin dari portal Bestie Kab. Bogor
 * https://bestie.bogorkab.go.id/profilwilayah.php?cKec=2&cKel=135
 * Sumber: Diskominfo, Disdik, Disdukcapil (2024)
 */

export const BESTIE_META = {
  sumber: "Diskominfo, Disdik, Disdukcapil (2024) via Bestie Kab. Bogor",
  url: "https://bestie.bogorkab.go.id/profilwilayah.php?cKec=2&cKel=135",
  klasifikasi: "Desa Mandiri",
  diperbarui: "2024",
} as const;

export const BESTIE_PROFIL = {
  kepalaDesa: "Firman",
  alamat: "Jl. Letda Natsir, Bojong Kulur, Kec. Gn. Putri, Kabupaten Bogor",
  telepon: "82771919",
  website: "bojongkulur-gunungputri.desa.id",
  email: "bojongkulurdesa@gmail.com",
} as const;

export const BESTIE_KONDISI_UMUM = {
  luasHa: 457.17,
  jumlahKeluarga: 11656,
  jumlahPenduduk: 36862,
  kepadatan: 80.63,
} as const;

export {
  BOJONGKULUR_BOUNDARY,
  BOJONGKULUR_CENTER,
  BOJONGKULUR_BOUNDARY_META,
} from "@/lib/mock-data/bojongkulur-boundary";

export const BESTIE_AGAMA = [
  { name: "Islam", value: 31900 },
  { name: "Kristen", value: 4502 },
  { name: "Hindu", value: 161 },
  { name: "Budha", value: 292 },
  { name: "Konghucu", value: 2 },
  { name: "Kepercayaan", value: 5 },
] as const;

export const BESTIE_STATUS_PERKAWINAN = [
  { name: "Kawin", value: 17634 },
  { name: "Belum Kawin", value: 17484 },
  { name: "Cerai Hidup", value: 632 },
  { name: "Cerai Mati", value: 1112 },
] as const;

/** Ringkasan pendidikan (gabungan L+P dari tabel Bestie) */
export const BESTIE_PENDIDIKAN = [
  { name: "Tidak/Belum Sekolah", value: 6549 },
  { name: "SD / Sederajat", value: 5426 },
  { name: "SLTP / Sederajat", value: 4373 },
  { name: "SLTA / Sederajat", value: 9336 },
  { name: "Diploma I–III", value: 1271 },
  { name: "Strata I–III", value: 432 },
] as const;

/** Ringkasan pekerjaan utama (gabungan L+P) */
export const BESTIE_PEKERJAAN = [
  { name: "Karyawan", jumlah: 8123 },
  { name: "Ibu Rumah Tangga", jumlah: 7056 },
  { name: "Pelajar / Mahasiswa", jumlah: 8730 },
  { name: "Wiraswasta", jumlah: 2819 },
  { name: "Tidak Bekerja", jumlah: 6732 },
  { name: "PNS / ASN", jumlah: 600 },
] as const;

/** Perkiraan jenis kelamin dari agregat tabel usia Bestie */
export const BESTIE_JENIS_KELAMIN = [
  { name: "Laki-laki", value: 18842 },
  { name: "Perempuan", value: 18020 },
] as const;

/**
 * Marker peta Desa Kami — edit `lat` / `lng` di sini (format: derajat desimal).
 * Sumber awal: OpenStreetMap Nominatim (Juni 2026). Verifikasi di Google Maps
 * lalu sesuaikan jika perlu.
 */
export const DESA_POI_MARKERS = [
  {
    id: "kantor-desa",
    nama: "Kantor Desa Bojongkulur",
    kategori: "Pemerintahan",
    lat: -6.322926,
    lng: 106.968984,
  },
  {
    id: "puskesmas",
    nama: "Puskesmas Bojongkulur",
    kategori: "Kesehatan",
    lat: -6.330693372525271,
    lng: 106.97153204128388
  },
  {
    id: "sekolah-1",
    nama: "SDN Bojongkulur 01",
    kategori: "Pendidikan",
    lat: -6.3167395,
    lng: 106.9685537
  },
  {
    id: "sekolah-2",
    nama: "SDN Bojongkulur 02",
    kategori: "Pendidikan",
    lat: -6.3304848,
    lng: 106.9682372
  },
  {
    id: "sekolah-3",
    nama: "SDN Bojongkulur 03",
    kategori: "Pendidikan",
    lat: -6.3240521,
    lng: 106.9668371,
  },
] as const;

