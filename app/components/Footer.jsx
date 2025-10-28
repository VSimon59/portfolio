'use client'

export default function Footer() {
  return (
    <footer className="py-6 border-t mt-16 text-center text-sm text-neutral-600">
      © {new Date().getFullYear()} Simon Verriele — Tous droits réservés.
      <br />
      <a href="/mentions-legales" className="underline">Mentions légales</a>
    </footer>
  )
}
