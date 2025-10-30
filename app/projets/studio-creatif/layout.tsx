// app/studio-creatif/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio créatif — Site vitrine (V1)",
  description:
    "Identités visuelles, sites web, contenu — simple et efficace.",
  alternates: { canonical: "/studio-creatif" },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-white text-neutral-900">
      <header className="px-6 md:px-12 lg:px-24 py-6 border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-semibold">← Retour</a>
          <strong>Studio créatif</strong>
        </div>
      </header>

      {children}

      <footer className="px-6 md:px-12 lg:px-24 py-10 border-t mt-16">
        <div className="max-w-6xl mx-auto text-sm text-neutral-500">
          © {new Date().getFullYear()} Studio créatif
        </div>
      </footer>
    </section>
  );
}
