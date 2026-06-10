"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


const destinations = [
  {
    slug: "santorin",
    name: "Santorin, Grèce",
    price: "À partir de 599 €",
    image: "/images/santorin.jpg",
  },
  {
    slug: "bali",
    name: "Bali, Indonésie",
    price: "À partir de 799 €",
    image: "/images/bali.jpg",
  },
  {
    slug: "maldives",
    name: "Maldives",
    price: "À partir de 999 €",
    image: "/images/maldives.jpg",
  },
  {
    slug: "barcelone",
    name: "Barcelone, Espagne",
    price: "À partir de 499 €",
    image: "/images/barcelone.jpg",
  },
];

export default function FavorisPage() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("travelia-favorites") || "[]"
    );

    setFavoriteSlugs(storedFavorites);
  }, []);

  const removeFavorite = (slug: string) => {
    const updatedFavorites = favoriteSlugs.filter(
      (item) => item !== slug
    );

    localStorage.setItem(
      "travelia-favorites",
      JSON.stringify(updatedFavorites)
    );

    setFavoriteSlugs(updatedFavorites);
  };

  const favoriteDestinations = destinations.filter((destination) =>
    favoriteSlugs.includes(destination.slug)
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-yellow-50 px-6 py-10 text-slate-900">
        <div className="mx-auto max-w-7xl">
        <Link
            href="/projets/travelia-agence-voyage/demo"
            className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:text-slate-900 hover:shadow-md"
        >
            ← Retour à Travelia
        </Link>

        <section className="mt-10 overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
            <div
            className="relative px-8 py-16 md:px-12"
            style={{
                backgroundImage: "url('/images/santorin.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />

            <div className="relative z-10 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                Travelia
                </p>

                <h1 className="mt-4 text-5xl font-bold md:text-6xl">
                Mes favoris
                </h1>

                <p className="mt-5 max-w-2xl text-lg text-slate-200">
                Retrouvez ici toutes les destinations que vous avez sauvegardées
                pour préparer votre prochain voyage.
                </p>

                <div className="mt-8 inline-flex rounded-full bg-white/15 px-5 py-3 font-semibold backdrop-blur-md">
                ❤️ {favoriteDestinations.length} destination(s) enregistrée(s)
                </div>
            </div>
            </div>
        </section>

        {favoriteDestinations.length === 0 ? (
            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl">
                ❤️
            </div>

            <h2 className="mt-6 text-3xl font-bold">
                Aucun favori pour le moment
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-500">
                Explorez les destinations Travelia et ajoutez vos coups de cœur pour
                les retrouver facilement ici.
            </p>

            <Link
                href="/projets/travelia-agence-voyage/demo#destinations"
                className="mt-8 inline-flex rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-slate-950 transition hover:scale-105"
            >
                Découvrir les destinations
            </Link>
            </section>
        ) : (
            <section className="mt-10">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                <h2 className="text-3xl font-bold">
                    Vos destinations sauvegardées
                </h2>
                <p className="mt-2 text-slate-500">
                    Cliquez sur une carte pour revoir les détails du séjour.
                </p>
                </div>
            </div>

            <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                {favoriteDestinations.map((destination) => (
                <div key={destination.slug} className="relative">
                    <Link
                    href={`/projets/travelia-agence-voyage/demo/destinations/${destination.slug}`}
                    className="group relative block h-72 overflow-hidden rounded-3xl shadow-xl"
                    >
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h2 className="text-2xl font-bold">
                        📍 {destination.name}
                        </h2>

                        <p className="mt-2 text-xl">{destination.price}</p>
                    </div>
                    </Link>

                    <button
                    onClick={() => removeFavorite(destination.slug)}
                    className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-2 text-xs font-semibold text-slate-900 backdrop-blur-md transition hover:bg-red-100"
                    >
                    ❌ Retirer
                    </button>
                </div>
                ))}
            </div>
            </section>
        )}
        </div>
    </main>
    );
}