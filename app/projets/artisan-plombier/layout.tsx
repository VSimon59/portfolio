export default function PlombierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* CONTENEUR GLOBAL */}
      <div className="flex flex-col min-h-screen">

        {/* HEADER LOCAL */}
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-blue-900" />
              <span className="font-semibold text-slate-800 tracking-tight">
                Artisan Plombier
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
              <a href="/projets/artisan-plombier/services" className="hover:text-slate-900">Services</a>
              <a href="/projets/artisan-plombier//urgences" className="hover:text-slate-900">Urgences</a>
              <a href="/projets/artisan-plombier/zones" className="hover:text-slate-900">Zones</a>
              <a href="/projets/artisan-plombier/tarifs" className="hover:text-slate-900">Tarifs</a>
              <a href="/projets/artisan-plombier/contact" className="hover:text-slate-900">Contact</a>
            </nav>

            <a
              href="tel:0766292258"
              className="hidden md:inline-flex px-4 py-2 rounded bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition"
            >
              Appeler
            </a>
          </div>
        </header>

        {/* CONTENU DE LA PAGE */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs text-slate-500">
            © 2025 Artisan Plombier — Calais
          </div>
        </footer>

      </div>
    </div>
  );
}
