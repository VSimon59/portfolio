import type { Metadata } from "next";
import { Code, Gauge, ShieldCheck, Rocket } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

export const metadata: Metadata = {
  title: "Points forts — Studio Créatif",
  description:
    "Les atouts du Studio Créatif : design réfléchi, performances, SEO, accompagnement humain.",
};

export default function PointsFortsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Nos <span className="text-indigo-400">points forts</span>
          </h1>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            Expertise, rigueur et transparence. Voici les piliers qui font la différence dans notre approche web.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Design réfléchi"
            description="Une approche centrée sur l’utilisateur. Chaque interface est pensée pour guider le regard et favoriser l’action."
            icon={<Code />}
          />
          <FeatureCard
            title="Performances mesurées"
            description="Sites légers, rapides et stables. Nous veillons à la vitesse d’affichage (Lighthouse, Core Web Vitals)."
            icon={<Gauge />}
          />
          <FeatureCard
            title="SEO technique"
            description="Structure sémantique propre, métadonnées optimisées, et compatibilité totale avec Google Search Console."
            icon={<Rocket />}
          />
          <FeatureCard
            title="Sécurité & fiabilité"
            description="Utilisation des bonnes pratiques de Next.js, hébergement fiable et surveillance des versions de dépendances."
            icon={<ShieldCheck />}
          />
          <FeatureCard
            title="Accompagnement humain"
            description="Nous travaillons dans une logique de partenariat : écoute, pédagogie et suivi à long terme."
          />
          <FeatureCard
            title="Livraison & suivi"
            description="Formation courte, documentation claire, et ajustements inclus après mise en ligne."
          />
        </div>
      </section>
    </main>
  );
}
