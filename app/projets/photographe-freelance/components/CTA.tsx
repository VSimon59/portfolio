export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-neutral-800 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
          Envie d’un site qui met en valeur <br />
          <span className="text-amber-400">votre regard et vos images</span> ?
        </h2>

        <p className="mt-6 text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Ensemble, créons un site à votre image — élégant, naturel et conçu
          pour attirer vos futurs clients.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/projets/photographe-freelance/contact"
            className="inline-flex items-center rounded-full bg-amber-500/90 hover:bg-amber-400 text-neutral-900 px-8 py-3 font-medium shadow-lg shadow-amber-900/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Me contacter
          </a>
          <a
            href="/projets/photographe-freelance/galerie"
            className="inline-flex items-center rounded-full border border-amber-400/70 text-amber-300 hover:bg-amber-400/10 px-8 py-3 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Voir la galerie
          </a>
        </div>
      </div>
    </section>
  );
}
