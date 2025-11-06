import Link from "next/link";

type Offer = {
  title: string;
  desc: string;
  price: string;
  points: string[];
  href: string;
  highlight?: boolean;
};

const offers: Offer[] = [
  {
    title: "Site vitrine",
    desc: "Présenter clairement votre activité avec une image pro.",
    price: "À partir de 1 490 €",
    points: [
      "Arborescence & wireframes",
      "Design UI propre & accessible",
      "Intégration Next.js (SEO + perf)",
    ],
    href: "/projets/studio-creatif/contact",
    highlight: true,
  },
  {
    title: "E-commerce",
    desc: "Vendre en ligne avec un parcours simple et rassurant.",
    price: "Sur devis",
    points: [
      "Catalogue & fiches produits",
      "Paiement & confirmation",
      "Bonnes pratiques conversion",
    ],
    href: "/projets/studio-creatif/contact",
  },
  {
    title: "Refonte",
    desc: "Moderniser design, UX, performances et référencement.",
    price: "Sur devis",
    points: [
      "Audit UX/SEO & priorités",
      "Refonte UI + contenu",
      "Migration & redirections",
    ],
    href: "/projets/studio-creatif/contact",
  },
];

export default function OfferSection() {
  return (
    <section id="offre" className="py-16">
      <header className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Nos offres
        </h2>
        <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
          Des solutions claires, orientées résultats. Design net, UX rassurante, mise en ligne maîtrisée.
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((o) => (
          <li
            key={o.title}
            className={`rounded-2xl border bg-neutral-900/60 p-6 flex flex-col
              ${o.highlight ? "border-indigo-500/40 shadow-lg shadow-indigo-900/20" : "border-neutral-800"}
            `}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{o.title}</h3>
              <p className="mt-2 text-neutral-300">{o.desc}</p>
              <div className="mt-4 text-indigo-300 font-medium">{o.price}</div>

              <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400/80 inline-block" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={o.href}
              className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 font-medium focus:outline-none focus-visible:ring-2
                ${o.highlight
                  ? "bg-indigo-500/90 hover:bg-indigo-400 text-neutral-950 focus-visible:ring-indigo-400"
                  : "border border-neutral-800 hover:bg-neutral-900/60 focus-visible:ring-neutral-700"}`}
            >
              Demander un devis
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA sticky mobile */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 px-4 z-30">
        <div className="mx-auto max-w-md rounded-full border border-neutral-800 bg-neutral-900/80 backdrop-blur p-2 shadow-xl">
          <Link
            href="/projets/studio-creatif/contact"
            className="block w-full text-center rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-neutral-950 px-6 py-3 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
