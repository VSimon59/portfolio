import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container-pro flex h-16 items-center justify-between">
        <Link href="/projets/artisan-plombier" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-[var(--brand-900)]" />
          <span className="text-base font-semibold text-gray-900">Artisan Plombier</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
          <Link href="/projets/artisan-plombier/services" className="hover:text-gray-900">Services</Link>
          <Link href="/projets/artisan-plombier/urgences" className="hover:text-gray-900">Urgences</Link>
          <Link href="/projets/artisan-plombier/zones" className="hover:text-gray-900">Zones</Link>
          <Link href="/projets/artisan-plombier/tarifs" className="hover:text-gray-900">Tarifs</Link>
          <Link href="/projets/artisan-plombier/contact" className="hover:text-gray-900">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <a href="tel:+33XXXXXXXXX" className="btn btn-primary">Appeler</a>
        </div>
      </div>
    </header>
  );
}
