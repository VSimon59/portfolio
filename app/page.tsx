import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="text-center py-24">
        <h1 className="text-4xl md:text-6xl font-bold">Portfolio de Verriele Simon</h1>
        <p className="mt-4 text-neutral-600 text-lg">
          Découvrez mes projets : design, développement et optimisation web.
        </p>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <h2 className="text-2xl font-semibold mb-10 text-center">Projets récents</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* --- STUDIO CRÉATIF --- */}
          <Link
            href="/projets/studio-creatif"
            className="group block border rounded-xl overflow-hidden hover:shadow-md transition"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src="/images/studio-home.jpg"
                alt="Aperçu du projet Studio Créatif"
                width={800}
                height={450}
                className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Studio créatif
              </h3>
              <p className="text-sm text-neutral-600">
                Site vitrine mettant en avant design, performance et SEO.
              </p>
            </div>
          </Link>

          {/* --- PHOTOGRAPHE FREELANCE --- */}
          <Link
            href="/projets/photographe-freelance"
            className="group block border rounded-xl overflow-hidden hover:shadow-md transition"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src="/images/photographe-freelance.jpg"
                alt="Aperçu du projet Photographe freelance"
                width={800}
                height={450}
                className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Photographe freelance
              </h3>
              <p className="text-sm text-neutral-600">
                Vitrine épurée mettant en valeur portfolio et contact.
              </p>
            </div>
          </Link>

          {/* --- ARTISAN PLOMBIER --- */}
          <Link
            href="/projets/artisan-plombier"
            className="group block border rounded-xl overflow-hidden hover:shadow-md transition"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src="/images/artisan-plombier.jpg"
                alt="Aperçu du projet Artisan plombier"
                width={800}
                height={450}
                className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:translate-x-2 group-hover:-translate-y-1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                Artisan plombier
              </h3>
              <p className="text-sm text-neutral-600">
                Présentation claire et rassurante pour un artisan local.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
