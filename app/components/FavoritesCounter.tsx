"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FavoritesCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const favorites = JSON.parse(
        localStorage.getItem("travelia-favorites") || "[]"
      );

      setCount(favorites.length);
    };

    updateCount();

    window.addEventListener("storage", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return (
    <Link href="/projets/travelia-agence-voyage/demo/favoris">
      ❤️ Favoris ({count})
    </Link>
  );
}