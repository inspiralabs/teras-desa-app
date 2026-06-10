import { toast } from "sonner";

export function shareBerita(title: string, slug: string) {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/kegiatan/${slug}`
      : `/kegiatan/${slug}`;
  if (typeof navigator !== "undefined" && navigator.share) {
    void navigator.share({ title, url }).catch(() => {});
  } else {
    void navigator.clipboard?.writeText(url);
    toast.success("Link berita disalin");
  }
}
