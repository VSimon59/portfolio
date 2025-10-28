export const metadata = {
  title: 'Étude de cas – Photographe freelance',
  description: "Portfolio immersif, léger et mobile-first pour un photographe indépendant.",
  openGraph: {
    title: 'Étude de cas – Photographe freelance',
    description: "Portfolio immersif, léger et mobile-first pour un photographe indépendant.",
    url: 'https://portfolio-vsimon59.vercel.app/projets/photographe-freelance',
    images: ['/og/photo.png'],
  },
}

export default function Page() {
  function Top({ title, subtitle, children }) {
    return (
      <header className="mb-8">
        <a href="/" className="text-sm underline">← Retour à l'accueil</a>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h1>
        {subtitle ? <p className="mt-1 text-neutral-600">{subtitle}</p> : null}
        {children ? <div className="mt-3 flex flex-wrap gap-2">{children}</div> : null}
      </header>
    )
  }
  function Section({ title, children }) {
    return (
      <section className="mb-10">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <div className="prose prose-neutral max-w-none text-sm sm:text-base">{children}</div>
      </section>
    )
  }
  function Badge({ children }) {
    return (
      <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none text-neutral-700">
        {children}
      </span>
    )
  }

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <Top title="Photographe freelance" subtitle="Portfolio immersif, léger et mobile-first">
        <Badge>Next.js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>SEO local</Badge>
        <Badge>Lazy loading</Badge>
      </Top>

      <Section title="Aperçu du projet">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="aspect-video rounded-xl border overflow-hidden bg-neutral-50">
            <img src="/images/photo-home.jpg" alt="Accueil — Photographe freelance"
                 className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-video rounded-xl border overflow-hidden bg-neutral-50">
            <img src="/images/photo-portfolio.jpg" alt="Galerie — Photographe freelance"
                 className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section title="Contexte & Objectifs">
        <p>
          Créer un portfolio fluide qui valorise les clichés sans sacrifier la vitesse.
          L’objectif : chargements instantanés sur mobile, navigation simple,
          et positionnement local optimisé (données structurées).
        </p>
      </Section>

      <Section title="Approche">
        <ul className="list-disc list-inside space-y-1">
          <li>Grille responsive et visuels compressés (WebP/JPG)</li>
          <li>Lazy loading natif, tailles adaptées selon l’écran</li>
          <li>SEO local (balises, titres, méta, schema.org)</li>
        </ul>
      </Section>

      <Section title="Résultat">
        <p>
          Une interface claire, des images nettes et une expérience rapide. Idéal pour capter des
          demandes locales et mettre en valeur le style du photographe.
        </p>
      </Section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/" className="rounded border px-4 py-2">Retour</a>
        <a href="mailto:simon.verriele@hotmail.fr" className="rounded bg-black px-4 py-2 text-white">
          Me contacter
        </a>
      </div>
    </main>
  )
}
