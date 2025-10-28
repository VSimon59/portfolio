'use client'

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Éditeur du site</h2>
        <p>Simon Verriele — Développeur web</p>
        <p>Contact : <a className="underline" href="mailto:simon.verriele@hotmail.fr">simon.verriele@hotmail.fr</a></p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Hébergement</h2>
        <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
        <p>https://vercel.com</p>
      </section>

      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
        <p>Le contenu de ce site (textes, visuels, code) est protégé. Toute reproduction nécessite l’accord préalable de l’éditeur.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Données personnelles</h2>
        <p>Aucune donnée n’est collectée sans votre consentement. Pour toute question, contactez l’éditeur.</p>
      </section>
    </main>
  )
}
