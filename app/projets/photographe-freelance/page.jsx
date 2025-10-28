export function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="prose prose-neutral max-w-none text-sm sm:text-base">{children}</div>
    </section>
  )
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none text-neutral-700 mr-2 mb-2">
      {children}
    </span>
  )
}

export function Top({ title, subtitle }) {
  return (
    <header className="mb-8">
      <a href="/" className="text-sm underline">← Retour à l'accueil</a>
      <h1 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-1 text-neutral-600">{subtitle}</p>}
    </header>
  )
}
'use client'
import { Top, Section, Badge } from '../layout'

export default function PhotographePage() {
  return (
    <main>
      <Top title="Photographe freelance — portfolio" subtitle="Galerie rapide, mobile-first et SEO local." />

      <Section title="Contexte">
        <p>Le client voulait un site simple, fluide et mobile-first pour présenter ses clichés et se positionner localement.</p>
      </Section>

      <Section title="Approche">
        <ul className="list-disc pl-5">
          <li>Grille CSS responsive</li>
          <li>Lazy loading natif</li>
          <li>SEO local avec données structurées</li>
        </ul>
      </Section>

      <Section title="Résultats">
        <Badge>LCP ~1,5 s</Badge>
        <Badge>Accessibilité 98</Badge>
        <Badge>SEO 100</Badge>
      </Section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#" className="rounded border px-4 py-2">Voir la démo</a>
        <a href="#" className="rounded border px-4 py-2">Voir le code</a>
        <a href="/" className="rounded bg-black px-4 py-2 text-white">Retour</a>
      </div>
    </main>
  )
}
