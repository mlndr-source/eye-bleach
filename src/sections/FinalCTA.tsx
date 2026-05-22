export default function FinalCTA() {
  return (
    <section className="bg-eye-dark text-eye-white">
      <div className="mx-auto max-w-[1700px] px-10 py-24 text-center md:px-16 md:py-32">
        {/* Setup couplet */}
        <h2 className="font-display text-5xl uppercase leading-[1.1] md:text-8xl">
          You know what you've seen.
          <br />
          We have a solution.
        </h2>

        {/* Validation */}
        <p className="mx-auto mt-10 max-w-4xl font-display text-3xl leading-tight md:mt-14 md:text-5xl">
          Faster than therapy. Cheaper than denial.
        </p>

        {/* Question — the shove */}
        <p className="mt-6 font-display text-3xl leading-tight md:mt-8 md:text-5xl">
          What are you waiting for?
        </p>

        {/* CTA button */}
        <div className="mt-10 md:mt-14">
          <a
            href="https://www.amazon.com/dp/B0CJM2YLQK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-eye-red px-14 py-7 font-display text-3xl uppercase tracking-wide text-eye-white transition hover:opacity-90 md:px-20 md:py-8 md:text-4xl"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </section>
  )
}
