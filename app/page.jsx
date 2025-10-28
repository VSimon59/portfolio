'use client'

export default function StudioPage() {
  function Top({ title, subtitle }) {
    return (
      <header className="mb-8">
        <a href="/" className="text-sm underline">← Retour à l'accueil</a>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h1>
        {subtitle ? <p className="mt-1 text-neutral-600">{subtitle}</p> : null}
      </header>
    )
  }
  function Section({ title, children }) {
    return (
      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <div className="prose prose-neutral max-w-none text-sm sm:text-base">{children}</div>
      </section>
    )
  }
  function Badge({ children }) {
    return (
      <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none text-neutral-700 mr-2 mb-2">
        {children}
      </span>
    )
  }

  return (
    <main>
      <Top title="Studio créatif — site vitrine" subtitle="Design audacieux, performance instantanée." />

      <Section title="Contexte">
        <p>Un petit studio de design voulait une vitrine claire et moderne pour présenter ses services et son book, avec un chargement rapide.</p>
      </Section>

      <Section title="Approche">
        <ul className="list-disc pl-5">
          <li>Next.js (App Router) + Tailwind CSS</li>
          <li>Animations CSS légères</li>
          <li>Images optimisées (WebP &lt; 150 Ko)</li>
          <li>SEO & balises Open Graph</li>
        </ul>
      </Section>

      <Section title="Résultats">
        <div>
          <Badge>LCP ~1,3 s</Badge>
          <Badge>Accessibilité 100</Badge>
          <Badge>SEO 100</Badge>
        </div>
      </Section>

      <Section title="Galerie (captures)">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="aspect-video rounded-xl border bg-neutral-50 flex items-center justify-center">Home</div>
          <div className="aspect-video rounded-xl border bg-neutral-50 flex items-center justify-center">Portfolio</div>
        </div>
      </Section>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#" className="rounded border px-4 py-2">Voir la démo</a>
        <a href="#" className="rounded border px-4 py-2">Voir le code</a>
        <a href="/" className="rounded bg-black px-4 py-2 text-white">Retour</a>
      </div>
    </main>
  )
}
function Projects() {
  const items = [
    {
      titre: 'Studio créatif — site vitrine',
      desc: 'Un site vitrine moderne et animé pour un petit studio de design.',
      href: '/projets/studio-creatif',
    },
    {
      titre: 'Photographe freelance — portfolio',
      desc: 'Galerie rapide, optimisée pour mobile et référencement local.',
      href: '/projets/photographe-freelance',
    },
    {
      titre: 'Artisan plombier — leads locaux',
      desc: 'Site simple et efficace, contact immédiat et clair.',
      href: '/projets/artisan-plombier',
    },
  ]

  return (
    <section id="projets" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionTitle
          title="3 exemples concrets"
          subtitle="À chaque projet : objectif, approche, résultats (preuves Lighthouse)."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.titre} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{p.titre}</h3>
              <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
              <div className="mt-4 flex gap-3">
                <a className="btn btn-primary" href={p.href}>Étude de cas</a>
                <a className="btn border" href="#contact">Me contacter</a>
                <a href="/mentions-legales" className="underline">Mentions légales</a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
