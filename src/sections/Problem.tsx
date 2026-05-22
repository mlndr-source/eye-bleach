const tiles = [
  "Walking into your parents' bedroom without knocking. At 41.",
  "Your pre-teen cousin's search history.",
  "The first time you learned Rule 34 was real.",
]

const memes = ["Homer pour", "SpongeBob brain-brush"]

export default function Problem() {
  return (
    <section className="bg-eye-light text-eye-dark">
      <div className="mx-auto max-w-[1700px] px-10 py-24 md:px-16 md:py-32">
        {/* Top: text left, 2 memes right */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Intro text */}
          <div>
            <h2 className="mb-8 font-display text-6xl uppercase leading-[0.9] md:text-8xl">
              You know the moment.
            </h2>
            <p className="text-xl leading-relaxed text-eye-dark/80 md:text-2xl">
              The pause. The slow dawning awareness that what you just saw
              cannot be returned. Between 2007 and now, the internet produced
              more genuinely upsetting content than any prior medium in human
              history. Add life itself — already a generous source of
              regrettable visuals — and the average pair of eyes is carrying
              more than it ever signed up for.
            </p>
          </div>

          {/* Right: 2 memes overlapping diagonally */}
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            {/* SpongeBob — bottom-left, behind */}
            <div className="absolute bottom-0 left-0 flex aspect-square w-[62%] items-center justify-center border-2 border-dashed border-eye-dark/30 bg-eye-light p-4 text-center text-eye-dark/40 shadow-md">
              <div>
                <div className="mb-1 font-display text-lg uppercase tracking-wider">
                  Meme
                </div>
                <div className="text-base">{memes[1]}</div>
              </div>
            </div>
            {/* Homer — top-right, in front */}
            <div className="absolute right-0 top-0 flex aspect-square w-[62%] items-center justify-center border-2 border-dashed border-eye-dark/30 bg-eye-light p-4 text-center text-eye-dark/40 shadow-md">
              <div>
                <div className="mb-1 font-display text-lg uppercase tracking-wider">
                  Meme
                </div>
                <div className="text-base">{memes[0]}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tiles — 3 in a single row on desktop */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="border border-eye-dark/20 bg-eye-dark/5 p-6 md:p-8"
            >
              {/* Redacted "photo" */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-eye-dark">
                <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6">
                  <div className="h-3 w-3/4 bg-eye-light/15"></div>
                  <div className="h-3 w-full bg-eye-light/15"></div>
                  <div className="h-3 w-1/2 bg-eye-light/15"></div>
                  <div className="h-3 w-5/6 bg-eye-light/15"></div>
                </div>
              </div>
              <p className="font-display text-xl leading-tight md:text-2xl">
                {tile}
              </p>
            </div>
          ))}
        </div>

        {/* Before / After split */}
        <div className="mx-auto max-w-5xl">
          <div className="flex aspect-[2/1] items-center justify-center border-2 border-dashed border-eye-dark/30 bg-eye-dark/5 p-8 text-center text-eye-dark/50">
            <div>
              <div className="mb-3 font-display text-3xl uppercase">
                Before / After
              </div>
              <div className="mx-auto max-w-md text-base">
                Photoreal AI · split-frame composition · same person on both
                sides · LEFT: cursed / traumatized expression (without Eye
                Bleach) · RIGHT: calm / neutralized (with Eye Bleach) · classic
                pharma before-and-after layout, deadpan delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
