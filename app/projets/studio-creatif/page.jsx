// en haut de app/projets/studio-creatif/page.jsx
export const metadata = {
  title: 'Étude de cas – Studio créatif',
  description: "Vitrine design et performante pour un studio de création numérique.",
  openGraph: {
    title: 'Étude de cas – Studio créatif',
    description: "Vitrine design et performante pour un studio de création numérique.",
    images: ['/og/studio.png'],
  },
}



export default function Page() {
  // Petits composants locaux (aucun import requis)
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
      {/* EN-TÊTE */}
      <Top
        title="Studio créatif"
        subtitle="Vitrine design pour une agence de création numérique"
      >
        <Badge>Next.js</Badge>
        <Badge>React</Badge>
        <Badge>Tailwind CSS</Badge>
        <Badge>Animations</Badge>
      </Top>

      {/* APERÇU VIDÉO / IMAGE (mets une image si tu n’as pas encore la vidéo) */}
      <Section title="Aperçu du projet">
        <div className="aspect-video rounded-xl border bg-neutral-50 overflow-hidden">
          <img
            src="/images/studio-home.jpg"
            alt="Aperçu du site — Studio créatif"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Section>

      {/* DESCRIPTION */}
      <Section title="Contexte & Objectifs">
        <p>
          Le studio souhaitait un site vitrine moderne, sobre et fluide, capable de refléter son
          expertise en design et communication. L’objectif : valoriser les visuels et
          simplifier le parcours utilisateur.
        </p>
      </Section>

      <Section title="Design & Identité">
        <p>
          Palette bleu acier / cyan, typographies aérées, micro-interactions contrôlées et
          médias légers. Une ambiance abstraite et élégante donne de la personnalité sans distraire.
        </p>
      </Section>

      <Section title="Technologies utilisées">
        <ul className="list-disc list-inside space-y-1">
          <li>Next.js (App Router)</li>
          <li>Tailwind CSS</li>
          <li>Hébergement sur Vercel</li>
        </ul>
      </Section>

      {/* GALERIE */}
      <Section title="Galerie du projet">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="aspect-video rounded-xl border overflow-hidden">
            <img
              src="/images/studio-home.jpg"
              alt="Page d'accueil — Studio créatif"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="aspect-video rounded-xl border overflow-hidden">
            <img
              src="/images/studio-portfolio.jpg"
              alt="Page portfolio — Studio créatif"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/" className="rounded border px-4 py-2">Retour</a>
        <a href="mailto:simon.verriele@hotmail.fr" className="rounded bg-black px-4 py-2 text-white">
          Me contacter
        </a>
      </div>
    </main>
  )
}
