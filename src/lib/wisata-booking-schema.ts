import { z } from "zod";

export const wisataBookingFieldsSchema = z.object({
  nama: z
    .string()
    .trim()
    .min(2, "Nama minimal 2 karakter")
    .max(80, "Nama maksimal 80 karakter"),
  email: z
    .string()
    .trim()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  alamat: z
    .string()
    .trim()
    .min(5, "Alamat minimal 5 karakter")
    .max(200, "Alamat maksimal 200 karakter"),
  telepon: z
    .string()
    .trim()
    .regex(/^[0-9]{10,15}$/, "Nomor telepon 10–15 digit (angka saja)"),
  metodeBayar: z.enum(["transfer"], {
    error: "Pilih metode pembayaran",
  }),
});

export type WisataBookingFields = z.infer<typeof wisataBookingFieldsSchema>;

/** Hanya digit — untuk input telepon */
export function sanitizePhoneInput(value: string): string {
  return value.replace(/\D/g, "").slice(0, 15);
}
