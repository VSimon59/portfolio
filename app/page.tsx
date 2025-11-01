// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Portfolio – Verriele Simon
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Développeur web et designer passionné. <br />
          Création de sites performants, esthétiques et éco-conçus.
        </p>
      </section>

      {/* PROJETS */}
      <section id="projets" className="py-20 px-6 bg-neutral-50 border-t">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Projets récents
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* --- STUDIO CRÉATIF --- */}
          <Link
            href="/projets/studio-creatif"
            className="group block border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/images/studio-home.jpg"
                alt="Aperçu du projet Studio Créatif"
                fill
                className="object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                Studio Créatif
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Site vitrine moderne avec Next.js, Tailwind, SEO et optimisation
                des médias.
              </p>
            </div>
          </Link>

          {/* --- PHOTOGRAPHE FREELANCE --- */}
          <Link
            href="/projets/photographe-freelance"
            className="group block border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/images/photographe-freelance.jpg"
                alt="Aperçu du projet Photographe freelance"
                fill
                className="object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                Photographe freelance
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Présentation élégante et immersive pour une photographe
                indépendante.
              </p>
            </div>
          </Link>

          {/* --- ARTISAN PLOMBIER --- */}
          <Link
            href="/projets/artisan-plombier"
            className="group block border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src="/images/artisan-plombier.jpg"
                alt="Aperçu du projet Artisan plombier"
                fill
                className="object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
                Artisan plombier
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Présentation claire et rassurante pour un artisan local.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-neutral-500 py-10 border-t mt-16">
        © {new Date().getFullYear()} Verriele Simon — Tous droits réservés.
      </footer>
    </main>
  );
}
