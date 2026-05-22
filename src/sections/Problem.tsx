const tiles = [
  {
    text: "Walking into your parents' room without knocking. At 41.",
    meme: "/Eye_Wash_Meme.jpg",
    alt: "Eye wash meme reaction",
  },
  {
    text: "Your pre-teen cousin's search history.",
    meme: "/Holy_Water_Meme.jpg",
    alt: "Holy water meme reaction",
  },
  {
    text: "The first time you learned Rule 34 was real.",
    meme: "/The_What_Meme.jpg",
    alt: "The what meme reaction",
  },
]

export default function Problem() {
  return (
    <section className="bg-eye-light text-eye-dark">
      <div className="mx-auto max-w-[1700px] px-10 pt-24 md:px-16 md:pt-32">
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
            <img
              src="/SpongeBob_Meme.jpg"
              alt="SpongeBob brain-brush meme"
              className="absolute bottom-0 left-0 aspect-square w-[62%] object-cover shadow-md"
            />
            {/* Homer — top-right, in front */}
            <img
              src="/Homer_Meme.png"
              alt="Homer pour meme"
              className="absolute right-0 top-0 aspect-square w-[62%] object-cover shadow-md"
            />
          </div>
        </div>

        {/* Tiles — situation first, then meme reaction */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="flex flex-col border border-eye-dark/20 bg-eye-dark/5 p-6 md:p-8"
            >
              <p className="mb-6 font-display text-2xl leading-tight md:text-3xl">
                {tile.text}
              </p>
              <div className="mt-auto aspect-[4/3] overflow-hidden bg-eye-dark/10">
                <img
                  src={tile.meme}
                  alt={tile.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Solution intro — single salesy tagline pivoting from problem to product */}
        <div className="mx-auto mb-20 max-w-6xl">
          <h3 className="text-center font-display text-5xl uppercase leading-[1.05] md:text-7xl">
            One splash of{" "}
            <span className="text-eye-red">Eye Bleach</span> hits the reset
            button on your retinas.
          </h3>
        </div>

      </div>

      {/* Before / After — flush with bottom of section, 60% width centered */}
      <img
        src="/Before_After.png"
        alt="Before and after Eye Bleach"
        className="mx-auto block h-auto w-full md:w-[60%]"
      />
    </section>
  )
}
