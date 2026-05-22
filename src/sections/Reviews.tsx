const bigTestimonial = {
  title: "My best friend was a mess",
  body: "My friend's cat brought in a half-alive opossum and dropped it on her pillow at 4 AM. She woke up to it making eye contact with her. She refused to sleep in her own bed for a month. I ordered her a bottle. The cat sleeps on her face now. She finds this charming.",
  author: "Margaret Goodfriend",
}

const smallTestimonials = [
  {
    title: "Five stars?",
    body: "Don't remember buying it. Don't remember reviewing it. Five stars.",
    author: "[name not recorded]",
  },
  {
    title: "Got one for my therapist",
    body: "Bought one for me, one for my therapist. She thanked me. She also no longer recognizes me.",
    author: "Cornelia Traumadale",
  },
]

function Stars() {
  return (
    <div className="text-xl tracking-wider text-eye-yellow md:text-2xl">
      ★ ★ ★ ★ ★
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-eye-dark text-eye-light">
      <div className="mx-auto max-w-[1700px] px-10 py-24 md:px-16 md:py-32">
        <h2 className="mb-16 text-center font-display text-6xl uppercase text-eye-white md:mb-20 md:text-8xl">
          Reviews
        </h2>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {/* Big featured card */}
          <div className="border border-eye-light/20 bg-eye-light/5 p-6 md:p-10 lg:col-span-2">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              {/* Character illustration */}
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="/Review_friend.png"
                  alt="Friend giving thumbs up after Eye Bleach"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Testimonial copy */}
              <div>
                <Stars />
                <h3 className="mb-4 mt-3 font-display text-3xl md:text-4xl">
                  "{bigTestimonial.title}"
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-eye-light/90 md:text-xl">
                  {bigTestimonial.body}
                </p>
                <p className="text-lg italic text-eye-light/80 md:text-xl">
                  — {bigTestimonial.author}
                </p>
              </div>
            </div>
          </div>

          {/* Small cards stacked */}
          <div className="flex flex-col gap-6 md:gap-8">
            {smallTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col border border-eye-light/20 bg-eye-light/5 p-6 md:p-8"
              >
                <Stars />
                <h3 className="mb-3 mt-3 font-display text-xl md:text-2xl">
                  "{t.title}"
                </h3>
                <p className="mb-4 flex-1 text-base leading-relaxed text-eye-light/90 md:text-lg">
                  {t.body}
                </p>
                <p className="text-base italic text-eye-light/80 md:text-lg">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
