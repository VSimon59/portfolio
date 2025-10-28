export default function Page() {
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

  return (
    <main>
      <Top title="Studio créatif — site vitrine" subtitle="Design audacieux, performance instantanée." />

      <Section title="Galerie (captures)">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="aspect-video rounded-xl border bg-neutral-50 flex items-center justify-center overflow-hidden">
            <video
              src="/videos/home.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              aria-label="Aperçu vidéo home"
            />
          </div>
        </div>
      </Section>
    </main>
  )
}
