export const metadata = {
  title: 'Portfolio – Simon Verriele',
  description: "Développeur web – sites vitrines élégants et performants (Next.js, Tailwind).",
  openGraph: {
    title: 'Portfolio – Simon Verriele',
    description: "Développeur web – sites vitrines élégants et performants (Next.js, Tailwind).",
    url: 'https://portfolio-vsimon59.vercel.app/',
    images: ['/og/home.png'],
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      {/* SECTION HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Portfolio — Simon Verriele
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl">
          Développeur web créatif, spécialisé en sites vitrines élégants et performants.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="#projets"
            className="rounded bg-black text-white px-6 py-3 hover:bg-neutral-800 transition"
          >
            Voir mes projets
          </a>
          <a
            href="mailto:simon.verriele@hotmail.fr"
            className="rounded border border-neutral-300 px-6 py-3 hover:bg-neutral-50 transition"
          >
            Me contacter
          </a>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-20 px-6 bg-neutral-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Mes projets
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <a
            href="/projets/studio-creatif"
            className="group block border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
          >
           <div className="aspect-video overflow-hidden rounded-xl border bg-neutral-100 relative group">
  {/* Image statique */}
            <img
              src="/images/studio-home.jpg"
              alt="Aperçu Studio créatif"
              className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-1"
            />

            {/* Overlay texte */}
           {/* Image Studio Créatif sur la page d'accueil */}
            <div className="aspect-video overflow-hidden rounded-xl border bg-neutral-100 relative group">
              <img
                src="/images/studio-home.jpg"
                alt="Aperçu du projet Studio créatif"
                className="w-full h-full object-cover transition-transform duration-[6000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

          </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Studio créatif
              </h3>
              <p className="text-sm text-neutral-600">
                Une vitrine design et performante pour un studio de création.
              </p>
            </div>
          </a>

          <a
            href="/projets/photographe-freelance"
            className="group block border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
          >
            <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src="/images/photographe-freelance.jpg"
                  alt="Aperçu du projet Photographe freelance"
                  className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-1"
                />
              </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Photographe freelance
              </h3>
              <p className="text-sm text-neutral-600">
                Site épuré et immersif pour un photographe indépendant.
              </p>
            </div>
          </a>

        <a
            href="/projets/artisan-plombier"
            className="group block border rounded-xl overflow-hidden hover:shadow-md transition bg-white"
          >
            <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src="/images/artisan-plombier.jpg"
                  alt="Aperçu du projet Artisan plombier"
                  className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-1"
                />
              </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Artisan plombier
              </h3>
              <p className="text-sm text-neutral-600">
                Présentation claire et rassurante pour un artisan local.
              </p>
            </div>
          </a>
      </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-neutral-600 mb-4">
          Une idée, un projet ? Parlons-en ensemble.
        </p>
        <a
          href="mailto:simon.verriele@hotmail.fr"
          className="inline-block rounded bg-black text-white px-8 py-3 hover:bg-neutral-800 transition"
        >
          Me contacter
        </a>
      </section>
    </main>
  )
}
