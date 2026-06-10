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
    <main className="min-h-screen bg-white px-8 py-12 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/projets/travelia-agence-voyage/demo"
          className="text-sm font-semibold text-slate-500 hover:text-slate-900"
        >
          ← Retour à Travelia
        </Link>

        <h1 className="mt-10 text-5xl font-bold">
          Mes favoris
        </h1>

        <p className="mt-4 text-slate-500">
          ❤️ {favoriteDestinations.length} destination(s) enregistrée(s)
        </p>

        {favoriteDestinations.length === 0 ? (
          <p className="mt-8 text-lg text-slate-500">
            Vous n’avez encore ajouté aucune destination en favori.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {favoriteDestinations.map((destination) => (
              <div
                key={destination.slug}
                className="relative"
              >
                <Link
                  href={`/projets/travelia-agence-voyage/demo/destinations/${destination.slug}`}
                  className="group relative block h-72 overflow-hidden rounded-2xl shadow-xl"
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

                    <p className="mt-2 text-xl">
                      {destination.price}
                    </p>
                  </div>
                </Link>

                <button
                  onClick={() =>
                    removeFavorite(destination.slug)
                  }
                  className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-red-100"
                >
                  ❌ Retirer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}