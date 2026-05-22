type StatCell = {
  type: "stat"
  number: string
  claim: string
  footnote: string
}

type RemovesCell = {
  type: "removes"
  label: string
  items: string[]
}

type Cell = StatCell | RemovesCell

const cells: Cell[] = [
  {
    type: "stat",
    number: "99.9%",
    claim: "Kill rate on intrusive visual memory.",
    footnote: "On contact. In ideal conditions.",
  },
  {
    type: "stat",
    number: "9 of 10",
    claim: "Fictional optometrists agree.",
    footnote: "The tenth was excused from the trial. He had seen the data.",
  },
  {
    type: "stat",
    number: "100%",
    claim: "Of test subjects could not recall the question.",
    footnote: "Considered, in this case, evidence of efficacy.",
  },
  {
    type: "removes",
    label: "Removes:",
    items: [
      "The shower-drain clog the moment you pulled it out.",
      "Your boss's TikTok dance account. He's 52.",
      "Accidentally clicking on the #mpreg hashtag.",
    ],
  },
]

export default function ClinicalData() {
  return (
    <section className="bg-eye-light text-eye-dark">
      <div className="mx-auto max-w-[1700px] px-10 py-24 md:px-16 md:py-32">
        <h2 className="mb-16 text-center font-display text-6xl uppercase text-eye-red md:mb-20 md:text-8xl">
          Clinical Data
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cells.map((cell, i) => (
            <div
              key={i}
              className="border border-eye-dark/20 bg-eye-dark/5 p-6 md:p-10"
            >
              {cell.type === "stat" ? (
                <>
                  <div className="mb-5 font-display text-6xl uppercase leading-none md:text-8xl">
                    {cell.number}
                    <span className="align-top text-[0.45em] text-eye-green">*</span>
                  </div>
                  <p className="mb-5 text-lg text-eye-dark/90 md:text-xl">
                    {cell.claim}
                  </p>
                  <p className="text-sm italic text-eye-dark/60 md:text-base">
                    *{cell.footnote}
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-5 font-display text-5xl uppercase leading-none md:text-6xl">
                    {cell.label}
                  </div>
                  <ul className="space-y-3">
                    {cell.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex text-lg text-eye-dark/90 md:text-xl"
                      >
                        <span className="mr-3 flex-shrink-0 text-eye-green">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
