"use client";

import { useEffect, useState } from "react";

type FavoriteButtonProps = {
  slug: string;
};

export default function FavoriteButton({ slug }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("travelia-favorites") || "[]");
    setIsFavorite(favorites.includes(slug));
  }, [slug]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("travelia-favorites") || "[]");

    const updatedFavorites = favorites.includes(slug)
      ? favorites.filter((item: string) => item !== slug)
      : [...favorites, slug];

    localStorage.setItem("travelia-favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(updatedFavorites.includes(slug));
  };

  return (
    <button
      onClick={toggleFavorite}
      className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20"
    >
      {isFavorite ? "💔 Retirer des favoris" : "❤️ Ajouter aux favoris"}
    </button>
  );
}