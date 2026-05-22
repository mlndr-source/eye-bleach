export default function Hero() {
  return (
    <section className="bg-eye-dark text-eye-light">
      <div className="mx-auto flex min-h-[65vh] max-w-[1700px] flex-col px-10 md:px-16">
        {/* Header / logo */}
        <header className="flex items-center justify-between py-8">
          <a href="#" className="block">
            <img
              src="/EyeBleach_Logo.svg"
              alt="Eye Bleach"
              className="h-24 w-auto md:h-40"
            />
          </a>
        </header>

        {/* Hero content */}
        <div className="grid flex-1 grid-cols-1 items-center gap-16 md:grid-cols-[1fr_1.5fr]">
          {/* Text */}
          <div className="space-y-10 pb-16">
            <h1 className="font-display text-6xl uppercase leading-[0.95] text-eye-white md:text-8xl">
              Neutralizes
              <br />
              <span className="text-7xl leading-none text-eye-green md:text-[10rem]">
                99.99%
              </span>
              <br />
              of what you
              <br />
              can't unsee
            </h1>
            <p className="max-w-2xl text-2xl text-eye-light/80 md:text-3xl">
              For the doom-scroll, the deep-web wander, and whatever grandpa
              misunderstood about naked day.
            </p>
            <div className="pt-2">
              <a
                href="https://www.amazon.com/dp/B0CJM2YLQK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-eye-red px-12 py-6 font-display text-2xl uppercase tracking-wide text-eye-white transition hover:opacity-90"
              >
                Buy on Amazon
              </a>
            </div>
          </div>

          {/* Bottle hero shot — flush with bottom of dark section */}
          <div className="flex justify-center self-end">
            <img
              src="/Bottle_Hero_Man.png"
              alt="Eye Bleach being poured on a relieved man"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
