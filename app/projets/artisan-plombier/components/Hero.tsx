import Section from "@artisan-plombier/Section";
import Link from "next/link";

export default function Hero() {
  return (
    <Section className="pt-20">
      <div className="max-w-3xl">
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
          Projet client — Démonstration
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Plombier à Calais — Dépannage & installations
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Intervention rapide pour fuites, débouchage, chauffe‑eau et salles de bains. 
          Devis clair, travail soigné, garanties.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#services" className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800">
            Découvrir les services
          </Link>
          <Link href="#contact" className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">
            Demander un devis
          </Link>
        </div>
      </div>
    </Section>
  );
}