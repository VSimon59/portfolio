import type { Metadata } from "next";
import NavTabs from "./nav-tabs";


export const metadata: Metadata = {
title: "Plombier à Calais — Dépannage, débouchage, chauffe‑eau",
description:
"Artisan plombier à Calais : urgences, fuites, débouchage, chauffe‑eau, petites rénovations. Intervention rapide, devis clair.",
};


export default function PlombierLayout({ children }: { children: React.ReactNode }) {
return (
<main>
<section className="border-b border-gray-100 bg-white">
<div className="container mx-auto px-4 py-8">
<p className="text-xs uppercase tracking-wider text-gray-500">Projet démo — Artisan</p>
<h1 className="mt-1 text-3xl font-bold tracking-tight">Plombier à Calais</h1>
<p className="mt-2 max-w-3xl text-gray-700">
Dépannage d'urgence, débouchage, recherche de fuites, chauffe‑eau et petits travaux.
Intervention soignée à Calais et alentours. Devis clair.
</p>
</div>
<NavTabs />
</section>
{children}
</main>
);
}