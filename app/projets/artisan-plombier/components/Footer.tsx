import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="container-pro py-8">
        {/* Bandeau CTA */}
        <div className="card p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="text-sm uppercase tracking-wide text-gray-500">Besoin d’une intervention</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">Diagnostic clair et prise en charge soignée</div>
              <p className="mt-1 text-sm text-gray-600">Calais et alentours — devis transparent avant travaux.</p>
            </div>
            <div className="flex gap-2">
              <a href="tel:+33755292258" className="btn btn-primary">Appeler</a>
              <Link href="/projets/artisan-plombier/contact" className="btn btn-ghost">Demander un devis</Link>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-sm text-gray-600 md:flex-row">
          <div>© {new Date().getFullYear()} Artisan Plombier — Calais</div>
          <div className="flex flex-wrap gap-3">
            <span className="badge">Devis clair</span>
            <span className="badge">Intervention soignée</span>
            <span className="badge">Matériel pro</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
