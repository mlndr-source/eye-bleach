export default function Hero() {
  return (
    <section className="bg-eye-dark text-eye-light">
      <div className="mx-auto flex min-h-screen max-w-[1700px] flex-col px-10 md:px-16">
        {/* Header / logo */}
        <header className="flex items-center justify-between py-8">
          <a
            href="#"
            className="font-display text-3xl uppercase tracking-wide text-eye-light"
          >
            Eye Bleach
          </a>
        </header>

        {/* Hero content */}
        <div className="grid flex-1 grid-cols-1 items-center gap-16 pb-16 md:grid-cols-2">
          {/* Text */}
          <div className="space-y-10">
            <h1 className="font-display text-6xl uppercase leading-[0.95] text-eye-white md:text-8xl">
              Neutralizes<br />
              99.9% of what<br />
              you can't unsee.
            </h1>
            <p className="max-w-2xl text-2xl text-eye-light/80 md:text-3xl">
              For the doom-scroll, the deep-web wander, and whatever grandpa
              misunderstood about naked day.
            </p>
            <div className="flex flex-col items-start gap-8 pt-2 sm:flex-row sm:items-center">
              <a
                href="#buy"
                className="bg-eye-red px-12 py-6 font-display text-2xl uppercase tracking-wide text-eye-white transition hover:opacity-90"
              >
                Buy on Amazon
              </a>
              <div className="flex flex-col gap-1">
                <div className="text-3xl tracking-wider text-eye-yellow">
                  ★ ★ ★ ★ ★
                </div>
                <div className="text-base text-eye-light/60">
                  4.7 / 5 — 2,000+ reviews
                </div>
              </div>
            </div>
          </div>

          {/* Product placeholder */}
          <div className="flex justify-center">
            <div className="flex aspect-[3/4] w-full max-w-lg items-center justify-center border-2 border-dashed border-eye-light/30 bg-eye-light/5 p-8 text-center text-eye-light/40">
              <div>
                <div className="mb-2 font-display text-3xl uppercase">
                  Product Hero Shot
                </div>
                <div className="text-base">
                  Photoreal AI · bottle tilted ~22° CCW · lying on dark teal
                  surface · no splash
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
