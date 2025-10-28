export const metadata = {
  title: 'Étude de cas – Artisan plombier',
  description: "Site clair, rassurant et orienté conversion pour un artisan local.",
  openGraph: {
    title: 'Étude de cas – Artisan plombier',
    description: "Site clair, rassurant et orienté conversion pour un artisan local.",
    url: 'https://portfolio-vsimon59.vercel.app/projets/artisan-plombier',
    images: ['/og/plombier.png'],
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
      <Top title="Artisan plombier" subtitle="Site clair, rassurant, orienté conversion">
        <Badge>Next.js</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Appels directs</Badge>
        <Badge>SEO local</Badge>
      </Top>

      <Section title="Aperçu du projet">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="aspect-video rounded-xl border overflow-hidden bg-neutral-50">
            <img src="/images/plombier-home.jpg" alt="Accueil — Artisan plombier"
                 className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="aspect-video rounded-xl border overflow-hidden bg-neutral-50">
            <img src="/images/plombier-services.jpg" alt="Services — Artisan plombier"
                 className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section title="Contexte & Objectifs">
        <p>
          Générer des appels / demandes de devis. Rassurer par la clarté : horaires,
          zone d’intervention, services, avis, et boutons d’action visibles.
        </p>
      </Section>

      <Section title="Approche">
        <ul className="list-disc list-inside space-y-1">
          <li>Appels à l’action “Appeler / Devis” visibles en haut et en bas</li>
          <li>Pages “Services” dédiées + zone d’intervention</li>
          <li>Contenu local optimisé (titres, méta, données structurées)</li>
        </ul>
      </Section>

      <Section title="Résultat">
        <p>
          Un site simple, rapide et crédible, pensé pour convertir. L’utilisateur trouve vite
          l’information essentielle et peut contacter l’artisan immédiatement.
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
