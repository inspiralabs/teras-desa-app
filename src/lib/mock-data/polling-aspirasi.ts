export type PollingItem = {
  id: string;
  judul: string;
  opsi: string[];
  mulai: string;
  berakhir: string;
  hasil: Record<string, number>;
};

export type AspirasiStatus = {
  noTiket: string;
  kategori: string;
  tanggal: string;
  status: "Diterima" | "Diproses" | "Selesai" | "Ditolak";
  catatan: string;
};

export const pollingAktif: PollingItem[] = [
  {
    id: "poll-1",
    judul: "Prioritas Pembangunan 2027 — pilih satu",
    opsi: ["Perbaikan Jalan", "Drainase", "Posyandu", "Penerangan Jalan"],
    mulai: "2026-05-01",
    berakhir: "2026-06-30",
    hasil: { "Perbaikan Jalan": 142, Drainase: 98, Posyandu: 67, "Penerangan Jalan": 115 },
  },
];

/** Mock: aspirasi by NIK prefix for demo */
export const aspirasiByNik: Record<string, AspirasiStatus[]> = {
  "3201010212345678": [
    {
      noTiket: "ASP-2026-0042",
      kategori: "Infrastruktur",
      tanggal: "2026-05-12",
      status: "Diproses",
      catatan: "Tim teknis sedang mengecek lokasi jalan rusak.",
    },
  ],
};
