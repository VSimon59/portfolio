import Section from "@artisan-plombier/Section";
import Link from "next/link";

export default function CTA() {
  return (
    <Section id="contact" className="py-20">
      <div className="rounded-3xl bg-gray-900 p-10 text-white">
        <h2 className="text-2xl font-semibold">Besoin d'une intervention ?</h2>
        <p className="mt-2 opacity-90">
          Décrivez votre besoin en quelques lignes et recevez un devis rapidement.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
            Demander un devis
          </Link>
          <a href="tel:+33XXXXXXXXX" className="inline-flex rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
            Appeler maintenant
          </a>
        </div>
      </div>
    </Section>
  );
}
