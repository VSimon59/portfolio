import Link from "next/link";

const destinations = [
  {
    slug: "santorin",
    name: "Santorin, Grèce",
    price: "À partir de 599 €",
    image: "/images/santorin.jpg",
    description:
      "Entre maisons blanches, coupoles bleues et couchers de soleil spectaculaires, Santorin est une destination idéale pour une escapade romantique en Méditerranée.",
    duration: "7 jours / 6 nuits",
    flight: "Vol direct depuis Paris",
    highlights: [
      ["🌅", "Couchers de soleil sur la caldeira"],
      ["🏛️", "Villages blancs emblématiques"],
      ["🍷", "Vignobles et gastronomie grecque"],
      ["📸", "Panoramas iconiques à Oia"],
      ["⛵", "Croisières autour du volcan"],
      ["⭐", "Destination romantique incontournable"],
    ],
    included: [
        ["✈️", "Vol aller-retour"],
        ["🏨", "Hébergement premium"],
        ["🍳", "Petit-déjeuner inclus"],
        ["🚐", "Transferts aéroport"],
        ["📶", "Wi-Fi gratuit"],
        ["🛟", "Assistance 24h/24"],
    ],
  },

  {
    slug: "bali",
    name: "Bali, Indonésie",
    price: "À partir de 799 €",
    image: "/images/bali.jpg",
    description:
      "Bali mêle plages paradisiaques, rizières luxuriantes, temples spirituels et ambiance tropicale pour un voyage totalement dépaysant.",
    duration: "10 jours / 9 nuits",
    flight: "Vol avec escale",
    highlights: [
      ["🌿", "Magnifiques rizières en terrasse"],
      ["🛕", "Temples hindous emblématiques"],
      ["🏄", "Spots de surf mondialement connus"],
      ["🍜", "Cuisine balinaise authentique"],
      ["🌋", "Excursions vers les volcans"],
      ["🧘", "Culture du bien-être et du yoga"],
    ],
    included: [
        ["✈️", "Vol avec escale"],
        ["🏨", "Hôtel 4 étoiles"],
        ["🍽️", "Petit-déjeuner quotidien"],
        ["🛕", "Visite de temples"],
        ["🚐", "Transferts inclus"],
        ["📶", "Wi-Fi gratuit"],
        ],
  },

  {
    slug: "maldives",
    name: "Maldives",
    price: "À partir de 999 €",
    image: "/images/maldives.jpg",
    description:
      "Les Maldives offrent des lagons turquoise, des plages de sable blanc et des hôtels sur pilotis dans un cadre exceptionnel.",
    duration: "8 jours / 7 nuits",
    flight: "Vol avec escale",
    highlights: [
      ["🏝️", "Îles paradisiaques uniques"],
      ["🐠", "Snorkeling et plongée exceptionnels"],
      ["🌊", "Lagons turquoise cristallins"],
      ["🏨", "Hôtels de luxe sur pilotis"],
      ["☀️", "Climat tropical toute l'année"],
      ["❤️", "Destination idéale pour les couples"],
    ],
    included: [
        ["✈️", "Vol international"],
        ["🏝️", "Bungalow sur pilotis"],
        ["🍹", "Formule demi-pension"],
        ["🐠", "Activités snorkeling"],
        ["🚤", "Transferts en bateau"],
        ["🛟", "Assistance 24h/24"],
        ],
  },

  {
    slug: "barcelone",
    name: "Barcelone, Espagne",
    price: "À partir de 499 €",
    image: "/images/barcelone.jpg",
    description:
      "Barcelone combine architecture, culture, plage et gastronomie dans l'une des villes les plus dynamiques d'Europe.",
    duration: "4 jours / 3 nuits",
    flight: "Vol direct depuis Paris",
    highlights: [
      ["🏛️", "Architecture unique de Gaudí"],
      ["🏖️", "Plages en plein cœur de la ville"],
      ["🍤", "Tapas et gastronomie catalane"],
      ["⚽", "Ambiance football et Camp Nou"],
      ["🎨", "Musées et culture toute l'année"],
      ["🌃", "Vie nocturne animée"],
    ],
    included: [
        ["✈️", "Vol direct"],
        ["🏨", "Hôtel en centre-ville"],
        ["🍽️", "Petit-déjeuner inclus"],
        ["🎟️", "Pass touristique"],
        ["🚇", "Carte transport urbain"],
        ["📶", "Wi-Fi gratuit"],
        ],
  },
];

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Destination introuvable
          </h1>

          <Link
            href="/projets/travelia-agence-voyage/demo"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950"
          >
            Retour à Travelia
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section
        className="relative min-h-[520px] overflow-hidden text-white"
        style={{
          backgroundImage: `url('${destination.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-8 py-12">
          <Link
            href="/projets/travelia-agence-voyage/demo"
            className="mb-10 inline-flex w-fit rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold backdrop-blur-md transition hover:bg-white/25"
          >
            ← Retour aux destinations
          </Link>

          <h1 className="max-w-3xl text-6xl font-bold leading-tight">
            {destination.name}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed">
            {destination.description}
          </p>

          <p className="mt-8 text-3xl font-bold text-yellow-400">
            {destination.price}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
            href="#reservation"
            className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:scale-105"
            >
            ✈️ Réserver maintenant
            </a>

            <button className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20">
                ❤️ Ajouter aux favoris
            </button>
            </div>
        </div>

      </section>
        <section className="mx-auto grid max-w-7xl gap-8 px-8 py-20 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <p className="text-4xl">🗓️</p>
            <h2 className="mt-4 text-2xl font-bold">Durée</h2>
            <p className="mt-2 text-slate-600">{destination.duration}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <p className="text-4xl">✈️</p>
            <h2 className="mt-4 text-2xl font-bold">Transport</h2>
            <p className="mt-2 text-slate-600">{destination.flight}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <p className="text-4xl">⭐</p>
            <h2 className="mt-4 text-2xl font-bold">Expérience</h2>
            <p className="mt-2 text-slate-600">
                Séjour sélectionné par Travelia.
            </p>
            </div>
        </section>
        <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="rounded-3xl bg-slate-50 p-10">
            <h2 className="text-4xl font-bold text-slate-900">
            Pourquoi visiter {destination.name} ?
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            {destination.highlights.map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                <span className="text-2xl">{icon}</span>
                <p>{text}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
        <section className="mx-auto max-w-7xl px-8 pb-20">
            <div className="rounded-3xl bg-slate-50 p-10">
                <h2 className="text-4xl font-bold text-slate-900">
                Ce qui est inclus
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
        {destination.included.map(([icon, text]) => (
            <div key={text} className="flex items-center gap-4">
            <span className="text-2xl">{icon}</span>
            <p>{text}</p>
            </div>
        ))}
        </div>
            </div>
            </section>
       <section id="reservation" className="mx-auto max-w-7xl px-8 pb-24">
        <div className="grid overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl lg:grid-cols-2">
            <div
            className="min-h-[360px] bg-cover bg-center"
            style={{
                backgroundImage: `url('${destination.image}')`,
            }}
            />

            <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Réservation
            </p>

            <h2 className="mt-4 text-4xl font-bold">
                Réservez votre séjour à {destination.name}
            </h2>

            <p className="mt-4 text-slate-300">
                Remplissez ce formulaire pour simuler une demande de réservation.
            </p>

            <form className="mt-8 grid gap-5">
                <input
                type="text"
                placeholder="Votre nom"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-yellow-400"
                />

                <input
                type="email"
                placeholder="Votre email"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-yellow-400"
                />

                <input
                type="number"
                min="1"
                placeholder="Nombre de voyageurs"
                className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-yellow-400"
                />

                <textarea
                placeholder="Message ou demande particulière"
                rows={4}
                className="resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-slate-400 focus:border-yellow-400"
                />

                <button
                type="button"
                className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:scale-105"
                >
                Envoyer la demande
                </button>
            </form>
            </div>
        </div>
        </section>
    </main>
  );
}