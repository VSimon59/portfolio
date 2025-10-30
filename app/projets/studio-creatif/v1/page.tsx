// app/projets/studio-creatif/v1/page.tsx
// V1 rudimentaire inspirée de sites vitrine de studios : simple, statique, sans SEO avancé ni next/image.

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-neutral-900">
      {/* NAV */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/projets/studio-creatif/v1" className="font-bold tracking-tight">
            Studio Créatif
          </a>
          <nav className="text-sm text-neutral-700 space-x-6">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#travaux" className="hover:text-black">Travaux</a>
            <a href="#process" className="hover:text-black">Process</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="py-20 border-b bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Un studio créatif qui <span className="underline decoration-neutral-300">conçoit</span> et <span className="underline decoration-neutral-300">déploie</span> des expériences simples et efficaces.
            </h1>
            <p className="mt-4 text-neutral-600">
              Identités visuelles, sites vitrines et contenus — sans complexité inutile. Nous allons à l’essentiel pour
              livrer vite et bien.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="px-5 py-3 bg-black text-white rounded-md text-sm">Discuter de votre projet</a>
              <a href="#travaux" className="px-5 py-3 border rounded-md text-sm">Voir nos travaux</a>
            </div>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-neutral-200 border">
            {/* Image JPG basique (pas d’optimisation) */}
            <img
              src="/images/studio-site/hero-v1.jpg"
              alt="Aperçu simple d’un site vitrine réalisé"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* LOGOS CLIENTS (placeholders) */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-neutral-500 mb-4">Ils nous ont fait confiance</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-80">
            <img src="/images/studio-site/logos/client-1.jpg" alt="Client 1" className="h-10 w-auto mx-auto" loading="lazy"/>
            <img src="/images/studio-site/logos/client-2.jpg" alt="Client 2" className="h-10 w-auto mx-auto" loading="lazy"/>
            <img src="/images/studio-site/logos/client-3.jpg" alt="Client 3" className="h-10 w-auto mx-auto" loading="lazy"/>
            <img src="/images/studio-site/logos/client-4.jpg" alt="Client 4" className="h-10 w-auto mx-auto" loading="lazy"/>
            <img src="/images/studio-site/logos/client-5.jpg" alt="Client 5" className="h-10 w-auto mx-auto" loading="lazy"/>
            <img src="/images/studio-site/logos/client-6.jpg" alt="Client 6" className="h-10 w-auto mx-auto" loading="lazy"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Nos services</h2>
          <p className="text-neutral-600 mt-2 max-w-2xl">
            Des prestations centrées sur l’impact : clarifier votre marque, la rendre visible et convertir vos visiteurs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Identité visuelle</h3>
              <p className="text-sm text-neutral-600">
                Logo, palette, typographies. Un système simple et réutilisable, décliné sur vos supports.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Site vitrine</h3>
              <p className="text-sm text-neutral-600">
                Pages claires, lisibles, rapides. Pas de fioritures, juste l’essentiel pour présenter et capter.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Contenus</h3>
              <p className="text-sm text-neutral-600">
                Visuels, photos, textes sobres. L’objectif : cohérence et efficacité, en peu de temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVAUX (grid rudimentaire) */}
      <section id="travaux" className="py-20 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Sélection de travaux</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <a href="#" className="block group">
              <div className="aspect-video rounded-lg overflow-hidden bg-neutral-100 border">
                <img src="/images/studio-site/work-1.jpg" alt="Projet A" className="w-full h-full object-cover group-hover:opacity-90 transition" loading="lazy"/>
              </div>
              <div className="mt-2 text-sm">
                <div className="font-medium">Projet A — Site vitrine</div>
                <div className="text-neutral-500">Design minimal, 3 pages, contact</div>
              </div>
            </a>
            <a href="#" className="block group">
              <div className="aspect-video rounded-lg overflow-hidden bg-neutral-100 border">
                <img src="/images/studio-site/work-2.jpg" alt="Projet B" className="w-full h-full object-cover group-hover:opacity-90 transition" loading="lazy"/>
              </div>
              <div className="mt-2 text-sm">
                <div className="font-medium">Projet B — Identité</div>
                <div className="text-neutral-500">Logo + guidelines</div>
              </div>
            </a>
            <a href="#" className="block group">
              <div className="aspect-video rounded-lg overflow-hidden bg-neutral-100 border">
                <img src="/images/studio-site/work-3.jpg" alt="Projet C" className="w-full h-full object-cover group-hover:opacity-90 transition" loading="lazy"/>
              </div>
              <div className="mt-2 text-sm">
                <div className="font-medium">Projet C — One-page</div>
                <div className="text-neutral-500">Landing simple orientée contact</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Notre approche</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="border rounded-lg p-6">
              <div className="text-xs text-neutral-500">Étape 1</div>
              <div className="font-semibold mt-1">Cadrage</div>
              <p className="text-sm text-neutral-600 mt-2">Objectifs, contenus, structure des pages.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="text-xs text-neutral-500">Étape 2</div>
              <div className="font-semibold mt-1">Wireframe</div>
              <p className="text-sm text-neutral-600 mt-2">Zoning rapide pour valider le parcours.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="text-xs text-neutral-500">Étape 3</div>
              <div className="font-semibold mt-1">Design</div>
              <p className="text-sm text-neutral-600 mt-2">Style sobre, typographies lisibles, hiérarchie.</p>
            </div>
            <div className="border rounded-lg p-6">
              <div className="text-xs text-neutral-500">Étape 4</div>
              <div className="font-semibold mt-1">Mise en ligne</div>
              <p className="text-sm text-neutral-600 mt-2">Intégration simple, tests, livraison.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES (rudimentaire) */}
      <section className="py-20 border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Témoignages</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <blockquote className="border rounded-lg p-6">
              <p className="italic">“Rapides et efficaces. Le site est clair et on a plus de demandes.”</p>
              <footer className="mt-3 text-sm text-neutral-500">— Marie, artisan</footer>
            </blockquote>
            <blockquote className="border rounded-lg p-6">
              <p className="italic">“Un process simple, on valide vite et on avance.”</p>
              <footer className="mt-3 text-sm text-neutral-500">— Paul, freelance</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Parlons de votre projet</h2>
          <p className="text-neutral-600 mt-2">Répondez en 3 champs, on vous recontacte rapidement.</p>
          <form className="grid gap-4 max-w-md mx-auto text-left mt-8">
            <input type="text" placeholder="Votre nom" className="border p-3 rounded-md w-full" />
            <input type="email" placeholder="Votre email" className="border p-3 rounded-md w-full" />
            <textarea placeholder="Décrivez brièvement votre besoin" rows={4} className="border p-3 rounded-md w-full" />
            <button type="submit" className="bg-black text-white py-3 rounded-md">Envoyer</button>
          </form>
          <p className="text-xs text-neutral-500 mt-4">Sans engagement. Réponse sous 24–48h ouvrées.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Studio Créatif — Verriele Simon
      </footer>
    </main>
  );
}
