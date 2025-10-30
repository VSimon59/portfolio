// app/projets/studio-creatif/layout.tsx
import type { Metadata } from "next";
import "../../globals.css"; // on remonte d’un dossier

export const metadata: Metadata = {
  title: "Studio Créatif | Verriele Simon",
  description:
    "Étude de cas complète du projet Studio Créatif : Next.js, Tailwind CSS, SEO et éco-conception.",
  alternates: { canonical: "/projets/studio-creatif" },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {children}
      </div>
    </section>
  );
}
