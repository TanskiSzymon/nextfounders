import { Reveal } from "./Reveal";

const PILLARS = [
  { n: "01", label: "Działanie", desc: "nie deklaracje" },
  { n: "02", label: "Wsparcie", desc: "founder founderowi" },
  { n: "03", label: "Selekcja", desc: "ścisła, świadoma" },
  { n: "04", label: "Wrocław", desc: "tu działamy" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-mist-6 pb-24 pt-36 md:pt-44"
    >
      <div className="hero-halo" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />

      <div className="container-x relative">
        <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <span className="relative inline-flex h-2 w-2">
              <span
                className="absolute inset-0 rounded-full bg-cyan animate-pulse-soft"
                aria-hidden
              />
              <span className="relative inline-block h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="overline-label">Niezależna organizacja founderów</span>
            <span className="hidden h-3 w-px bg-mist-12 sm:block" aria-hidden />
            <span className="hidden overline-label sm:inline">Wrocław</span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="heading-display max-w-[880px] text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px]">
            <span className="block text-white">Founderzy, którzy</span>
            <span className="block text-ghost">faktycznie działają.</span>
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-8 max-w-[620px] text-[17px] leading-relaxed text-ghost md:text-[18px]">
            NextFounders zrzesza młodych founderów i founderki, którzy budują
            realne produkty — nie kolekcjonują pomysłów. Wspieramy się
            nawzajem, dzielimy wiedzą i rozwijamy szybciej, niż zrobiłby to
            każdy z nas osobno.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-[4px] bg-white px-5 py-3 text-[14px] font-medium text-black transition-transform hover:-translate-y-px"
            >
              Aplikuj do NextFounders
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7 H11 M7 3 L11 7 L7 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </svg>
            </a>
            <a
              href="#manifest"
              className="inline-flex items-center gap-2 rounded-[4px] border border-mist-12 bg-cyan-glow px-5 py-3 text-[14px] text-white transition-colors hover:border-signal"
            >
              Przeczytaj manifest
            </a>
          </div>
        </Reveal>

        <Reveal delay={560}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-mist-10 bg-mist-10 md:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-ink p-5 transition-colors hover:bg-[#070707]">
                <div className="font-mono text-[12px] text-whisper">{p.n}</div>
                <div className="mt-3 text-[18px] text-white">{p.label}</div>
                <div className="mt-1 text-[13px] text-ghost">{p.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
