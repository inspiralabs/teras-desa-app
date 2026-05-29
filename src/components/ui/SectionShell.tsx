import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
  innerClassName,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "muted";
}) {
  return (
    <section
      className={cn(
        "py-8 md:py-10",
        variant === "muted" && "bg-light-gray/50",
        className
      )}
    >
      <div className={cn("mx-auto max-w-7xl px-4 md:px-6", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-mid-gray/40 bg-white p-6 shadow-[var(--shadow-card)] md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
