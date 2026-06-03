"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { WisataFormField, wisataInputClass } from "@/components/wisata/WisataFormField";
import {
  sanitizePhoneInput,
  wisataBookingFieldsSchema,
  type WisataBookingFields,
} from "@/lib/wisata-booking-schema";
import {
  SLOT_KEBERANGKATAN,
  TANGGAL_PENUH,
  WISATA_INFO,
} from "@/lib/mock-data/wisata";
import { cn } from "@/lib/utils";
import "react-day-picker/style.css";

const WA_BOOKING = "6281234567890";

export function WisataBookingForm() {
  const [kategori, setKategori] = useState<"perorangan" | "kelompok">("perorangan");
  const [tanggal, setTanggal] = useState<Date | undefined>();
  const [slotId, setSlotId] = useState<string | null>(null);
  const [peserta, setPeserta] = useState(2);
  const [agreed, setAgreed] = useState(false);
  const [scheduleError, setScheduleError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<WisataBookingFields>({
    resolver: zodResolver(wisataBookingFieldsSchema),
    defaultValues: {
      nama: "",
      email: "",
      alamat: "",
      telepon: "",
      metodeBayar: "transfer",
    },
    mode: "onBlur",
  });

  const slot = SLOT_KEBERANGKATAN.find((s) => s.id === slotId);
  const maxPeserta = slot?.tersedia ?? WISATA_INFO.kapasitasPerSlot;

  const disabledDays = useMemo(
    () => TANGGAL_PENUH.map((d) => new Date(d + "T12:00:00")),
    []
  );

  const validateSchedule = (): boolean => {
    if (!tanggal) {
      setScheduleError("Pilih tanggal keberangkatan");
      return false;
    }
    if (!slotId) {
      setScheduleError("Pilih jam keberangkatan");
      return false;
    }
    if (peserta < 1 || peserta > maxPeserta) {
      setScheduleError(`Jumlah peserta 1–${maxPeserta} untuk slot ini`);
      return false;
    }
    if (!agreed) {
      setScheduleError("Anda harus menyetujui syarat dan ketentuan");
      return false;
    }
    setScheduleError(null);
    return true;
  };

  const onSubmit = (data: WisataBookingFields) => {
    if (!validateSchedule()) return;

    const tgl = format(tanggal!, "d MMMM yyyy", { locale: localeId });
    const jam = SLOT_KEBERANGKATAN.find((s) => s.id === slotId)?.label;
    const msg = encodeURIComponent(
      `Booking Susur Sungai Cikeas\n` +
        `Nama: ${data.nama}\n` +
        `Email: ${data.email}\n` +
        `Telepon: ${data.telepon}\n` +
        `Alamat: ${data.alamat}\n` +
        `Tanggal: ${tgl}\n` +
        `Jam: ${jam}\n` +
        `Kategori: ${kategori}\n` +
        `Jumlah: ${peserta} orang\n` +
        `(Mock SIGAP DESA)`
    );
    window.open(`https://wa.me/${WA_BOOKING}?text=${msg}`, "_blank");
    toast.success("Membuka WhatsApp untuk konfirmasi booking (mock)");
  };

  return (
    <FadeIn>
      <aside className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[var(--shadow-card-hover)] lg:sticky lg:top-24">
        <div className="flex items-center gap-2 border-b border-primary/10 bg-primary px-5 py-4 text-white">
          <CalendarDays className="h-5 w-5 shrink-0 text-accent" aria-hidden />
          <h2 className="text-lg font-bold">Booking Wisata</h2>
        </div>

        <form
          className="space-y-4 p-5"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex rounded-lg border border-mid-gray/40 bg-light/50 p-1">
            {(["perorangan", "kelompok"] as const).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKategori(k)}
                className={cn(
                  "flex-1 rounded-md py-2 text-sm font-medium capitalize transition",
                  kategori === k
                    ? "bg-primary text-white shadow-sm"
                    : "text-primary hover:bg-white"
                )}
              >
                {k === "perorangan" ? "Perorangan" : "Kelompok"}
              </button>
            ))}
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-primary">Tanggal</p>
            <DayPicker
              mode="single"
              selected={tanggal}
              onSelect={(d) => {
                setTanggal(d);
                setScheduleError(null);
              }}
              disabled={[{ before: new Date() }, ...disabledDays]}
              className="mx-auto rounded-lg border border-mid-gray/30 bg-white p-2 text-sm [--rdp-accent-color:var(--primary)]"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-primary">Jam keberangkatan</p>
            <div className="flex flex-wrap gap-2">
              {SLOT_KEBERANGKATAN.map((s) => {
                const penuh = s.tersedia === 0;
                return (
                  <button
                    key={s.id}
                    type="button"
                    disabled={penuh}
                    onClick={() => {
                      setSlotId(s.id);
                      setScheduleError(null);
                    }}
                    className={cn(
                      "rounded-lg border px-3 py-2 text-sm transition",
                      penuh && "cursor-not-allowed opacity-40 line-through",
                      slotId === s.id
                        ? "border-primary bg-primary text-white"
                        : "border-mid-gray/40 hover:border-primary/30 hover:bg-light"
                    )}
                  >
                    {s.label}
                    {!penuh && (
                      <span className="ml-1 text-xs opacity-80">
                        ({s.tersedia})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <WisataFormField label="Nama lengkap" id="nama" error={errors.nama?.message}>
            <input
              id="nama"
              className={wisataInputClass(!!errors.nama)}
              autoComplete="name"
              {...register("nama")}
            />
          </WisataFormField>

          <WisataFormField label="Email" id="email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              className={wisataInputClass(!!errors.email)}
              placeholder="nama@email.com"
              {...register("email")}
            />
          </WisataFormField>

          <WisataFormField label="Alamat" id="alamat" error={errors.alamat?.message}>
            <input
              id="alamat"
              className={wisataInputClass(!!errors.alamat)}
              autoComplete="street-address"
              {...register("alamat")}
            />
          </WisataFormField>

          <WisataFormField
            label="Nomor telepon"
            id="telepon"
            error={errors.telepon?.message}
            hint="Angka saja, 10–15 digit"
          >
            <Controller
              name="telepon"
              control={control}
              render={({ field }) => (
                <input
                  id="telepon"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  className={wisataInputClass(!!errors.telepon)}
                  placeholder="08xxxxxxxxxx"
                  value={field.value}
                  onChange={(e) =>
                    field.onChange(sanitizePhoneInput(e.target.value))
                  }
                  onBlur={field.onBlur}
                />
              )}
            />
          </WisataFormField>

          <WisataFormField label="Jumlah peserta" id="peserta">
            <input
              id="peserta"
              type="number"
              min={1}
              max={maxPeserta}
              value={peserta}
              onChange={(e) => {
                setPeserta(Number(e.target.value));
                setScheduleError(null);
              }}
              className={wisataInputClass()}
            />
          </WisataFormField>

          <WisataFormField
            label="Metode pembayaran"
            id="metodeBayar"
            error={errors.metodeBayar?.message}
          >
            <select
              id="metodeBayar"
              className={wisataInputClass(!!errors.metodeBayar)}
              {...register("metodeBayar")}
            >
              <option value="transfer">Transfer Bank (v1)</option>
            </select>
          </WisataFormField>

          <label className="flex cursor-pointer items-start gap-2 text-sm text-dark-gray">
            <input
              type="checkbox"
              className="mt-1"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setScheduleError(null);
              }}
            />
            Saya setuju dengan syarat dan ketentuan wisata
          </label>

          {scheduleError ? (
            <p className="text-xs font-medium text-error" role="alert">
              {scheduleError}
            </p>
          ) : null}

          <Button type="submit" className="w-full gap-2">
            <MessageCircle className="h-4 w-4" />
            Kirim via WhatsApp
          </Button>
        </form>
      </aside>
    </FadeIn>
  );
}
