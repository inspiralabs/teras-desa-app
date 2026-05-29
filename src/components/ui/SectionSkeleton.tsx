import { Skeleton } from "@/components/ui/skeleton";
import { SectionShell } from "@/components/ui/SectionShell";

export type SectionSkeletonVariant =
  | "hero"
  | "sambutan"
  | "aspirasi"
  | "berita"
  | "galeri"
  | "layanan"
  | "agenda"
  | "publikasi"
  | "page";

function Shell({
  children,
  muted,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <SectionShell variant={muted ? "muted" : "default"}>
      <div className="rounded-2xl border border-mid-gray/30 bg-white p-6 shadow-sm md:p-8">
        {children}
      </div>
    </SectionShell>
  );
}

export function SectionSkeleton({
  variant,
  showError,
}: {
  variant: SectionSkeletonVariant;
  showError?: boolean;
}) {
  const errorNote = showError ? (
    <p className="mb-4 rounded-lg bg-error/10 px-3 py-2 text-center text-sm text-error">
      Konten tidak dapat dimuat. Menampilkan placeholder.
    </p>
  ) : null;

  switch (variant) {
    case "hero":
      return (
        <div className="relative min-h-[440px] bg-primary/20 md:min-h-[500px]">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
            {errorNote}
            <Skeleton className="h-8 w-48 bg-white/30" />
            <Skeleton className="mt-4 h-12 w-3/4 max-w-lg bg-white/30" />
            <Skeleton className="mt-6 h-14 w-full max-w-2xl bg-white/40" />
            <div className="mt-6 flex gap-2">
              <Skeleton className="h-8 w-28 bg-white/25" />
              <Skeleton className="h-8 w-24 bg-white/25" />
            </div>
          </div>
        </div>
      );

    case "sambutan":
      return (
        <Shell>
          {errorNote}
          <div className="grid gap-6 md:grid-cols-[200px_1fr]">
            <Skeleton className="h-56 w-full rounded-xl md:h-60" />
            <div className="space-y-3">
              <Skeleton className="h-8 w-2/3" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </Shell>
      );

    case "aspirasi":
      return (
        <SectionShell variant="muted">
          <Skeleton className="h-48 w-full rounded-2xl md:h-56" />
        </SectionShell>
      );

    case "berita":
      return (
        <Shell>
          {errorNote}
          <Skeleton className="mb-6 h-8 w-48" />
          <div className="grid gap-4 lg:grid-cols-12">
            <Skeleton className="h-80 rounded-xl lg:col-span-3" />
            <Skeleton className="h-80 rounded-xl lg:col-span-5" />
            <Skeleton className="h-80 rounded-xl lg:col-span-4" />
          </div>
        </Shell>
      );

    case "galeri":
      return (
        <Shell muted>
          {errorNote}
          <Skeleton className="mb-4 h-8 w-40" />
          <Skeleton className="aspect-video w-full rounded-xl" />
        </Shell>
      );

    case "layanan":
      return (
        <Shell>
          {errorNote}
          <Skeleton className="mb-6 h-8 w-44" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </div>
          <Skeleton className="my-6 h-6 w-full max-w-md mx-auto" />
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        </Shell>
      );

    case "agenda":
      return (
        <Shell muted>
          {errorNote}
          <Skeleton className="mb-6 h-8 w-36" />
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <Skeleton className="h-[340px] rounded-xl" />
            <div className="space-y-3">
              <Skeleton className="h-28 rounded-xl" />
              <Skeleton className="h-28 rounded-xl" />
              <Skeleton className="h-28 rounded-xl" />
            </div>
          </div>
        </Shell>
      );

    case "publikasi":
      return (
        <Shell>
          {errorNote}
          <Skeleton className="mb-6 h-8 w-40" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-52 rounded-xl" />
            ))}
          </div>
        </Shell>
      );

    case "page":
    default:
      return (
        <SectionShell>
          {errorNote}
          <Skeleton className="mb-4 h-10 w-64" />
          <Skeleton className="mb-2 h-4 w-full max-w-2xl" />
          <Skeleton className="h-64 w-full rounded-xl mt-6" />
        </SectionShell>
      );
  }
}
