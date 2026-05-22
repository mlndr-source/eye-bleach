const cuteScenes = [
  "Capybara in onsen",
  "Corgi on staircase",
  "Ducklings in single file",
  "Sleepy kitten",
  "Baby goat",
  "Otter holding stone",
]

export default function Formula() {
  return (
    <section className="bg-eye-dark text-eye-light">
      <div className="mx-auto max-w-[1700px] px-10 py-24 md:px-16 md:py-32">
        {/* Heading */}
        <h2 className="mb-12 text-center font-display text-6xl uppercase text-eye-white md:mb-16 md:text-8xl">
          The Formula
        </h2>

        {/* Paragraph 1 */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-eye-light/90 md:text-2xl">
            But something else was happening at the same time. In quieter
            corners of the internet, an antidote was being built — the largest
            archive of unprovoked sweetness ever assembled. Uploaded one post
            at a time, by strangers, for strangers, as a defense mechanism
            against everything else.
          </p>
        </div>

        {/* Reddit screenshots collage — single composite image to be supplied */}
        <div className="mx-auto mb-20 max-w-5xl">
          <div className="flex aspect-[16/9] items-center justify-center border-2 border-dashed border-eye-light/30 bg-eye-light/5 p-8 text-center text-eye-light/40">
            <div>
              <div className="mb-3 font-display text-3xl uppercase">
                r/EyeBleach Collage
              </div>
              <div className="mx-auto max-w-md text-base">
                Single composite image to be created: multiple screenshots from
                the r/EyeBleach subreddit, fanned out like cards spread on a
                surface seen from above (Polaroid-stack effect — but using
                Reddit post screenshots instead of Polaroids).
              </div>
            </div>
          </div>
        </div>

        {/* Cute content collage */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {cuteScenes.map((label, i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center border-2 border-dashed border-eye-light/30 bg-eye-light/5 p-3 text-center text-eye-light/40"
            >
              <div>
                <div className="mb-1 font-display text-xs uppercase tracking-wider md:text-sm">
                  Photo
                </div>
                <div className="text-xs md:text-sm">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Paragraph 2 */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-eye-light/90 md:text-2xl">
            We collected all of it. Every clip, every photo, every wholesome
            thread the internet ever bothered to save. We distilled it.
            Concentrated it. Removed the impurities.
          </p>
        </div>

        {/* Closing line — treated as a beat */}
        <p className="mb-16 text-center font-display text-5xl uppercase leading-tight text-eye-white md:text-7xl">
          That's how Eye Bleach was born.
        </p>

        {/* Product reveal */}
        <div className="flex justify-center">
          <div className="flex aspect-[3/4] w-full max-w-lg items-center justify-center border-2 border-dashed border-eye-light/30 bg-eye-light/5 p-8 text-center text-eye-light/40">
            <div>
              <div className="mb-2 font-display text-3xl uppercase">
                Product Reveal
              </div>
              <div className="text-base">
                Photoreal AI · hero bottle / box shot · lying on dark teal · no
                splash
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
