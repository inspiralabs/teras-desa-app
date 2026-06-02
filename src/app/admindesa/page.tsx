import { PageContentBoundary } from "@/components/layout/PageContentBoundary";
import { SectionShell } from "@/components/ui/SectionShell";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata = { title: "Masuk Admin" };

export default function AdminDesaPage() {
  return (
    <PageContentBoundary>
      <SectionShell className="py-16">
        <div className="mx-auto max-w-md">
          <AdminLoginForm />
        </div>
      </SectionShell>
    </PageContentBoundary>
  );
}
