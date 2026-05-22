const cuteImages = [
  { src: "/cutebunny.jpg", alt: "Cute bunny" },
  { src: "/cutecat.jpg", alt: "Cute cat" },
  { src: "/cutedog.jpg", alt: "Cute dog" },
  { src: "/cuteduck.jpg", alt: "Cute duck" },
  { src: "/cuteotter.jpg", alt: "Cute otter" },
  { src: "/cutesheep.jpg", alt: "Cute sheep" },
]

export default function Formula() {
  return (
    <section className="bg-eye-dark text-eye-light">
      <div className="mx-auto max-w-[1700px] px-10 pt-24 pb-12 md:px-16 md:pt-32 md:pb-16">
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

        {/* Reddit screenshots collage */}
        <div className="mx-auto mb-20 max-w-5xl">
          <img
            src="/Reddit_Collage.png"
            alt="Reddit r/EyeBleach posts collage"
            className="block h-auto w-full"
          />
        </div>

        {/* Cute content collage */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {cuteImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
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
        <p className="mb-4 text-center font-display text-5xl uppercase leading-tight text-eye-white md:text-7xl">
          That's how Eye Bleach was born.
        </p>

        {/* Product reveal */}
        <div className="flex justify-center">
          <img
            src="/Box_Glorified.png"
            alt="Eye Bleach product reveal"
            className="block h-auto w-full max-w-3xl"
          />
        </div>
      </div>
    </section>
  )
}
