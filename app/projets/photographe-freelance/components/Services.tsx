import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";

type Service = {
  title: string;
  desc: string;
  img: string;
  href?: string;
};

const services: Service[] = [
  {
    title: "Portrait",
    desc: "Lumière naturelle, rendu authentique, retouches douces.",
    img: "/images/studio-site/service-portrait.jpg",
    href: "/projets/photographe-freelance/galerie",
  },
  {
    title: "Mariage",
    desc: "Storytelling du jour J : émotions, détails et instants vrais.",
    img: "/images/studio-site/service-mariage.jpg",
    href: "/projets/photographe-freelance/galerie",
  },
  {
    title: "Produit",
    desc: "Packshots nets et esthétiques pour e-commerce et réseaux.",
    img: "/images/studio-site/service-produit.jpg",
    href: "/projets/photographe-freelance/galerie",
  },
];

// Petit wrapper qui renvoie un <Link> si href existe, sinon un <div>
function CardWrapper({
  href,
  className,
  children,
}: PropsWithChildren<{ href?: string; className?: string }>) {
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 border-y border-neutral-900 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-400">
            Services & approche
          </h2>
          <p className="mt-3 text-neutral-300">
            Trois univers, une même exigence : lumière chaleureuse, simplicité et élégance.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <li key={s.title}>
              <CardWrapper
                href={s.href}
                className="group relative block overflow-hidden rounded-2xl border border-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {/* Image de fond */}
                <div className="absolute inset-0">
                  <Image
                    src={s.img}
                    alt={`${s.title} — illustration`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
                </div>

                {/* Contenu */}
                <div className="relative z-10 p-5 flex min-h-[240px] flex-col justify-end">
                  <h3 className="text-xl font-semibold text-neutral-50 drop-shadow">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-200/90">{s.desc}</p>

                  {s.href && (
                    <span className="mt-4 inline-flex items-center self-start rounded-full border border-amber-400/70 text-amber-300 px-4 py-1.5 text-sm transition group-hover:bg-amber-400/10">
                      Voir plus
                    </span>
                  )}
                </div>
              </CardWrapper>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
