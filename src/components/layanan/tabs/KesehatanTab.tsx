import Link from "next/link";
import { Calendar, ExternalLink, HeartPulse, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const POSYANDU = [
  { nama: "Posyandu Melati", jadwal: "Setiap Selasa minggu pertama, 08.00–11.00" },
  { nama: "Posyandu Mawar", jadwal: "Setiap Rabu minggu kedua, 08.00–11.00" },
  { nama: "Posyandu Anggrek", jadwal: "Setiap Kamis minggu ketiga, 08.00–11.00" },
];

const DARURAT = [
  { label: "Puskesmas Gunung Putri", tel: "021-1234567" },
  { label: "Ambulans", tel: "118" },
  { label: "Polsek Gunung Putri", tel: "110" },
];

export function KesehatanTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-primary">Informasi Kesehatan</h3>
        <p className="mt-1 text-sm text-dark-gray">
          Jadwal Posyandu, fasilitas kesehatan terdekat, dan nomor darurat.
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-primary">Jadwal Posyandu</h4>
          </div>
          <ul className="mt-4 space-y-3">
            {POSYANDU.map((p) => (
              <li
                key={p.nama}
                className="rounded-lg border border-mid-gray/30 bg-light-gray/50 px-4 py-3 text-sm"
              >
                <p className="font-medium text-primary">{p.nama}</p>
                <p className="mt-1 text-dark-gray">{p.jadwal}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-primary">Puskesmas Terdekat</h4>
          </div>
          <p className="mt-3 text-sm text-dark-gray">
            Puskesmas Kecamatan Gunung Putri — Jl. Raya Gunung Putri, Bogor.
            Layanan: IGD, poli umum, KIA/KB, dan imunisasi.
          </p>
          <Button asChild variant="secondary" size="sm" className="mt-4 gap-1.5">
            <a
              href="https://www.google.com/maps/search/puskesmas+gunung+putri+bogor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat di Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-primary">Nomor Darurat Kesehatan</h4>
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {DARURAT.map((d) => (
              <li key={d.label} className="flex justify-between gap-4">
                <span className="text-dark-gray">{d.label}</span>
                <a href={`tel:${d.tel.replace(/-/g, "")}`} className="font-medium text-primary">
                  {d.tel}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-light">
        <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-primary">BPJS Kesehatan</p>
            <p className="mt-1 text-sm text-dark-gray">
              Cek kepesertaan dan layanan kesehatan online melalui portal BPJS.
            </p>
          </div>
          <Button asChild className="gap-1.5 shrink-0">
            <Link href="https://www.bpjs-kesehatan.go.id" target="_blank" rel="noopener noreferrer">
              Buka BPJS Kesehatan
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
