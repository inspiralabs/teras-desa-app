import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  subtitle,
  href,
  linkLabel,
  className,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-2xl font-bold text-primary md:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-dark-gray md:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {href && linkLabel && (
        <Button asChild variant="outline" size="sm" className="shrink-0">
          <Link href={href}>
            {linkLabel}
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
