import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studio Créatif — Étude de cas | VSIMON",
  description:
    "Design & développement web : un style moderne, fiable et orienté résultats.",
};

export default function StudioCreatifLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Fond pro : léger dégradé + grille subtile */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(120%_60%_at_50%_-10%,rgba(99,102,241,0.10),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Header compact */}
      <header className="sticky top-0 z-40 border-b border-neutral-900/80 bg-neutral-950/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/projets/studio-creatif" className="font-semibold tracking-tight">
            <span className="text-neutral-200">Studio</span>{" "}
            <span className="text-indigo-300">Créatif</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/projets/studio-creatif" className="text-neutral-300 hover:text-white">Aperçu</Link>
            <Link href="/projets/studio-creatif/contact" className="text-neutral-300 hover:text-white">Contact</Link>
            <Link
              href="/projets/studio-creatif/contact"
              className="ml-2 rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-neutral-950 px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Demander un devis
            </Link>
            <Link href="/projets/studio-creatif/points-forts" className="text-neutral-300 hover:text-white">
              Points forts
            </Link>

          </nav>
        </div>
      </header>

      {/* Contenu */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer mini */}
      <footer className="mt-16 border-t border-neutral-900/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400">
          © {new Date().getFullYear()} Studio Créatif — design & web.
        </div>
      </footer>
    </div>
  );
}
