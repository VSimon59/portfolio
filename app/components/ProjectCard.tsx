import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  href: string;
  title: string;
  image: string;
  alt: string;
};

export function ProjectCard({
  href,
  title,
  image,
  alt,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.45)] hover:bg-white/8 transition"
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 100vw"
        />
        {/* Voile subtil au survol */}
        <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* CONTENU */}
      <div className="flex flex-1 flex-col gap-1.5 px-3 pb-3 pt-2">
        <h3 className="text-sm md:text-base font-semibold text-slate-50 transition-colors group-hover:text-white">
          {title}
        </h3>
        <span className="mt-1 inline-flex items-center text-[11px] font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
          Voir le projet →
        </span>
      </div>
    </Link>
  );
}
