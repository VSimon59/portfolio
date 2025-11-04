import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b border-neutral-900 sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm text-neutral-300 hover:text-white">← Retour à l’accueil</Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="/#projets" className="hover:text-amber-300">Projets</a>
            <a href="/projets/photographe-freelance/services" className="hover:text-amber-300">Services</a>
            <a href="/projets/photographe-freelance/contact" className="hover:text-amber-300">Contact</a>
          </nav>


      </div>
    </div>
  );
}
