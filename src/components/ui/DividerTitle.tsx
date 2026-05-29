export function DividerTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-mid-gray/60" aria-hidden />
      <h3 className="shrink-0 text-center text-lg font-bold text-primary md:text-xl">
        {children}
      </h3>
      <span className="h-px flex-1 bg-mid-gray/60" aria-hidden />
    </div>
  );
}
