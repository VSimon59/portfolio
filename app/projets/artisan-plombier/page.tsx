import Link from "next/link";
import Section from "./components/Section";

export const metadata = {
  title: "Artisan Plombier à Calais — Dépannage & entretien",
  description: "Interventions soignées à Calais et alentours. Devis clair avant travaux. Urgences prises en charge selon créneau.",
};

export default function HomePlombier() {
  return (
    <Section>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold leading-tight">
            Plomberie à Calais — <span className="text-[var(--brand-900)]">interventions soignées</span> et devis clair
          </h1>
          <p className="mt-3 max-w-xl text-gray-700">
            Dépannage, débouchage, entretien chauffe-eau et petits travaux. Diagnostic pédagogique, respect de l’existant,
            et solutions durables adaptées à votre installation.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <a href="tel:+33766292258" className="btn btn-primary">Appeler</a>
            <Link href="/projets/artisan-plombier/contact" className="btn btn-ghost">Demander un devis</Link>
            <Link href="/projets/artisan-plombier/services" className="btn btn-ghost">Voir les services</Link>
          </div>

        
        </div>

        {/* Visuel sobre (fond bleu & trame) */}
        <div className="card h-64 w-full overflow-hidden">
          <div className="h-full w-full"
               style={{
                 background:
                   "radial-gradient(120% 70% at 110% -10%, rgba(34,84,163,.25), transparent 60%), linear-gradient(135deg, #163973 0%, #2254a3 100%)"
               }}>
            <div className="p-6 text-white">
              <div className="text-sm uppercase tracking-wide/relaxed text-white/80">Disponibilités</div>
              <div className="mt-1 text-lg font-semibold">Interventions sur Calais & proches communes</div>
              <p className="mt-2 max-w-sm text-white/80 text-sm">
                Créneaux priorisés pour les urgences. Hors secteur, devis ajusté selon distance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
