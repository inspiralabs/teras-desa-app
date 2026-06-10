import { ShieldCheck } from "lucide-react";

export function PrivacyNotice() {
  return (
    <p className="mt-1 flex items-center gap-1.5 text-xs text-dark-gray">
      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden />
      Data Anda dilindungi dan tidak dipublikasikan.
    </p>
  );
}
