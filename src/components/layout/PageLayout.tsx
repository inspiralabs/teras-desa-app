import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-light-gray">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
