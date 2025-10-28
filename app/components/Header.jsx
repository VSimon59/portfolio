'use client'

export default function Header() {
  return (
    <header className="py-4 border-b bg-white">
      <nav className="mx-auto max-w-5xl flex justify-between items-center px-4">
        <a href="/" className="text-lg font-bold">Simon Verriele</a>
        <ul className="flex gap-6 text-sm">
          <li><a href="/#projets" className="hover:underline">Projets</a></li>
          <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
        </ul>
      </nav>
    </header>
  )
}
