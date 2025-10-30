// app/studio-creatif/page.tsx
import Image from "next/image";
import BeforeAfter from "../../components/BeforeAfter";
import Link from "next/link";

<Link
  href="/studio-creatif/v1"
  target="_blank"
  rel="noopener noreferrer"
>
  {/* ...carte V1... */}
</Link>



export default function Page() {
  return (
    <main className="px-6 md:px-12 lg:px-24">
      <section className="max-w-6xl mx-auto py-14 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Site vitrine — <span className="text-blue-600">comparatif V1/V2</span>
        </h1>
        <p className="mt-4 text-lg text-neutral-700 max-w-3xl">
          V1 : version rudimentaire et lisible. V2 : version optimisée (Next/Image,
          SEO, JSON-LD, médias, perfs).
        </p>
      </section>

      <section className="max-w-6xl mx-auto pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Aperçu</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Carte V1 */}
          <a href="/studio-creatif/v1" className="group block border rounded-2xl overflow-hidden hover:shadow-md transition">
            <div className="aspect-video bg-neutral-100 relative">
              <Image
                src="/images/studio-site/v1-preview.png"
                alt="Aperçu V1 — site vitrine rudimentaire"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">Version V1 (rudimentaire)</h3>
              <p className="text-neutral-700 mt-1">Structure simple, HTML sémantique, Tailwind minimal.</p>
            </div>
          </a>

          {/* Carte V2 */}
          <a href="/studio-creatif/v2" className="group block border rounded-2xl overflow-hidden hover:shadow-md transition">
            <div className="aspect-video bg-neutral-100 relative">
              <Image
                src="/images/studio-site/v2-preview.png"
                alt="Aperçu V2 — site vitrine optimisé"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">Version V2 (optimisée)</h3>
              <p className="text-neutral-700 mt-1">
                Next/Image, SEO (Open Graph + JSON-LD), médias JPG lazy, tailles adaptées.
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
