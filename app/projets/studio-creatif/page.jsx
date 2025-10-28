// Page 100% server component, pilotée par un objet "project"
// Nécessite les assets :
//  - public/images/studio-home.jpg
//  - public/images/studio-portfolio.jpg
//  - public/og/studio.png

export const metadata = {
  title: 'Étude de cas – Studio créatif',
  description:
    "Vitrine design, rapide et élégante pour un studio de création numérique. Next.js + Tailwind, images optimisées et SEO prêt à l'emploi.",
  openGraph: {
    title: 'Étude de cas – Studio créatif',
    description:
      "Vitrine design, rapide et élégante pour un studio de création numérique. Next.js + Tailwind, images optimisées et SEO prêt à l'emploi.",
    images: ['/og/studio.png'],
  },
}

// ———————————————————————————————————————————————
// Données du projet (éditables facilement)
const project = {
  slug: 'studio-creatif',
  title: 'Studio créatif',
  subtitle: 'Vitrine design pour une agence de création numérique',
  contactEmail: 'simon.verriele@hotmail.fr',
  goals: [
    'Valoriser l’identité visuelle du studio avec une vitrine sobre et haut de gamme',
    'Garantir des performances élevées (chargement rapide, images optimisées)',
    'Soigner l’UX mobile-first et les micro-interactions',
  ],
  approach: [
    'Next.js (App Router) pour un rendu rapide et modulaire',
    'Tailwind CSS pour une mise en page fluide et un design systémique',
    'Optimisation des médias (WebP/JPG), lazy loading, tailles adaptées',
    'Méta-données Open Graph + JSON-LD pour le SEO',
  ],
  stack: ['Next.js 15', 'React', 'Tailwind CSS', 'Vercel'],
  metrics: [
    { label: 'LCP', value: '≈ 1,3 s' },
    { label: 'Accessibilité', value: '100' },
    { label: 'SEO', value: '100' },
  ],
  media: [
    {
      alt: "Aperçu — page d'accueil du Studio créatif",
      src: '/images/studio-home.jpg',
      ratio: 'aspect-video',
    },
    {
      alt: 'Aperçu — page portfolio du Studio créatif',
      src: '/images/studio-portfolio.jpg',
      ratio: 'aspect-video',
    },
  ],
  ctas: [
    { label: 'Retour', href: '/' },
    { label: 'Me contacter', href: 'mailto:simon.verriele@hotmail.fr', primary: true },
  ],
}

// JSON-LD (CreativeWork) pour le SEO
function ProjectJsonLd({ p }) {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    description:
      'Site vitrine design, fluide et performant pour un studio de création numérique.',
    url: `https://portfolio-vsimon59.vercel.app/projets/${p.slug}`,
    creator: {
      '@type': 'Person',
      name: 'Simon Verriele',
      email: p.contactEmail,
    },
    inLanguage: 'fr-FR',
    keyword: ['Next.js', 'Tailwind CSS', 'Portfolio', 'Site vitrine', 'SEO'],
  }

  return (
    <script
      type="application/ld+json"
      // @ts-ignore
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}

// ———————————————————————————————————————————————
// Composants locaux
function Top({ title, subtitle, children }) {
  return (
    <header className="mb-8">
      <a href="/" className="text-sm underline">
        ← Retour à l&apos;accueil
      </a>
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
      <div className="prose prose-neutral max-w-none text-sm sm:text-base">
        {children}
      </div>
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

// ———————————————————————————————————————————————
// Page
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <ProjectJsonLd p={project} />

      <Top title={project.title} subtitle={project.subtitle}>
        {project.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </Top>

      <Section title="Objectifs">
        <ul className="list-disc list-inside space-y-1">
          {project.goals.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      </Section>

      <Section title="Approche">
        <ul className="list-disc list-inside space-y-1">
          {project.approach.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </Section>

      <Section title="Résultats (exemples)">
        <div className="flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span
              key={m.label}
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
              title={m.label}
            >
              <strong className="mr-1">{m.label}:</strong> {m.value}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Aperçus du projet">
        <div className="grid gap-4 sm:grid-cols-2">
          {project.media.map((m, i) => (
            <div
              key={i}
              className={`${m.ratio} rounded-xl border overflow-hidden bg-neutral-50`}
            >
              <img
                src={m.src}
                alt={m.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.ctas.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className={[
              'rounded px-4 py-2 transition',
              c.primary
                ? 'bg-black text-white hover:bg-neutral-800'
                : 'border hover:bg-neutral-50',
            ].join(' ')}
          >
            {c.label}
          </a>
        ))}
      </div>
    </main>
  )
}
