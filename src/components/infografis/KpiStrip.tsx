import { cn } from "@/lib/utils";

export function KpiStrip({
  items,
  className,
}: {
  items: { label: string; value: number | string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-4",
        className
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-primary/10 bg-light p-4 text-center"
        >
          <p className="text-xl font-bold text-primary md:text-2xl">
            {typeof item.value === "number"
              ? item.value.toLocaleString("id-ID")
              : item.value}
          </p>
          <p className="mt-1 text-xs text-dark-gray">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
