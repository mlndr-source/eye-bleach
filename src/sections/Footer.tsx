export default function Footer() {
  return (
    <footer className="bg-eye-dark text-eye-light">
      <div className="mx-auto max-w-[1700px] px-10 py-16 md:px-16 md:py-20">
        {/* Top hairline */}
        <div className="border-t border-eye-light/15" />

        {/* Brand-safety disclosure — load-bearing, leads the footer */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-base text-eye-light/80 md:text-lg">
          Eye Bleach is a gag gift. The bottle ships empty. We're selling the concept, not the cure.
        </p>

        {/* Fake-legal disclaimers */}
        <div className="mt-12 space-y-3 text-center text-sm text-eye-light/50 md:text-base">
          <p>Statements on this site have not been evaluated by anyone qualified.</p>
          <p>Keep out of reach of children, the literal-minded, and most courts.</p>
        </div>

        {/* Bottom hairline */}
        <div className="mt-12 border-t border-eye-light/15" />

        {/* Witty Yeti credit */}
        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-eye-light/60 md:flex-row md:justify-between md:gap-0">
          <p>
            Eye Bleach is a{' '}
            <a
              href="https://wittyyeti.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display uppercase tracking-wide text-eye-light underline-offset-4 hover:underline"
            >
              Witty Yeti
            </a>{' '}
            product.
          </p>
          <p className="text-eye-light/40">© 2026 Witty Yeti</p>
        </div>
      </div>
    </footer>
  )
}
