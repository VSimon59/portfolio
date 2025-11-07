"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const TABS = [
{ href: "/projets/artisan-plombier", label: "Accueil" },
{ href: "/projets/artisan-plombier/services", label: "Services" },
{ href: "/projets/artisan-plombier/tarifs", label: "Tarifs" },
{ href: "/projets/artisan-plombier/zones", label: "Zones" },
{ href: "/projets/artisan-plombier/urgences", label: "Urgences" },
{ href: "/projets/artisan-plombier/a-propos", label: "À propos" },
{ href: "/projets/artisan-plombier/contact", label: "Contact" },
];


export default function NavTabs() {
const pathname = usePathname();
return (
<div className="border-t border-gray-100 bg-white">
<div className="container mx-auto flex flex-wrap gap-2 px-4 py-3">
{TABS.map((t) => {
const active = pathname === t.href || pathname.startsWith(t.href + "/");
return (
<Link
key={t.href}
href={t.href}
className={`rounded-xl px-3 py-1.5 text-sm font-medium transition ${
active
? "bg-gray-900 text-white"
: "text-gray-700 hover:bg-gray-50 border border-gray-200"
}`}
>
{t.label}
</Link>
);
})}
</div>
</div>
);
}