import Image from "next/image";
import Link from "next/link";

export default function TraveliaPage() {
  return (
    <main className="min-h-screen bg-metal-dark px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-16">
        <Link href="/" className="text-sm text-slate-400 hover:text-slate-100">
          ← Retour à l’accueil
        </Link>

        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Projet fictif
          </p>

          <h1 className="text-4xl font-semibold md:text-5xl">
            Travelia – Agence de voyage
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Site vitrine pour une agence de voyage digitale, conçu pour inspirer
            l’utilisateur, mettre en avant des destinations premium et simplifier
            la prise de contact.
          </p>

          <Link
            href="/projets/travelia-agence-voyage/demo"
            className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-200"
          >
            Voir la démo
          </Link>

          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span>Next.js</span>
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Responsive design</span>
          </div>
        </section>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image
            src="/images/Travelia.png"
            alt="Aperçu du projet Travelia"
            width={1200}
            height={800}
            className="w-full object-cover"
            priority
          />
        </div>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold">Objectif</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Créer une interface claire, moderne et immersive pour présenter
              une offre de voyages de manière professionnelle.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold">Approche</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Mise en avant d’un hero visuel fort, d’une navigation simple et de
              sections pensées pour guider rapidement l’utilisateur.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-lg font-semibold">Résultat</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Une page premium, responsive et cohérente, adaptée à une agence de
              voyage souhaitant valoriser ses destinations.
            </p>
          </div>
        </section>
        <section className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-50">
              Compétences démontrées
            </h2>

            <p className="max-w-3xl text-slate-300">
              Ce projet m'a permis de mettre en pratique plusieurs compétences
              essentielles du développement front-end moderne.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold">Développement</h3>

              <ul className="space-y-2 text-slate-300">
                <li>✓ Architecture de composants React</li>
                <li>✓ Routing avec Next.js</li>
                <li>✓ Gestion des images optimisées</li>
                <li>✓ Responsive design</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold">UX & Design</h3>

              <ul className="space-y-2 text-slate-300">
                <li>✓ Interface responsive</li>
                <li>✓ Hiérarchie visuelle claire</li>
                <li>✓ Navigation intuitive</li>
                <li>✓ Expérience utilisateur soignée</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}