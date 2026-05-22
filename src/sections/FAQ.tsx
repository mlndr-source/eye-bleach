const faqs = [
  {
    q: "Why isn't it sold in pharmacies?",
    a: "We applied. They had follow-up questions.",
  },
  {
    q: "How is the formula made?",
    a: "With confidence and very few witnesses.",
  },
  {
    q: "Are there side effects?",
    a: "Yes: occasional erasure of memories you wanted to keep.",
  },
  {
    q: "Is there a generic version?",
    a: 'Yes. It\'s called "just don\'t think about it." It does not work.',
  },
  {
    q: "Is this actually real?",
    a: "Bless your heart, no. It's a gag gift. You can buy it for someone you love. Or hate. Or both.",
  },
]

export default function FAQ() {
  return (
    <section className="bg-eye-light text-eye-dark">
      <div className="mx-auto max-w-[1700px] px-10 py-24 md:px-16 md:py-32">
        <h2 className="mb-16 text-center font-display text-6xl uppercase text-eye-dark md:mb-20 md:text-8xl">
          FAQ
        </h2>

        <div className="mx-auto max-w-4xl">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group border-b-2 border-eye-dark/20 py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl leading-tight md:text-3xl">
                <span>{item.q}</span>
                <span className="shrink-0 font-display text-4xl leading-none text-eye-green transition-transform duration-200 group-open:rotate-45 md:text-5xl">
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-eye-dark/80 md:text-xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
