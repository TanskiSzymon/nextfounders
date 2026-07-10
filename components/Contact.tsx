import { Reveal } from "./Reveal";

const EMAIL = "info@nextrealstudio.com";

export function Contact() {
  return (
    <section id="kontakt" className="relative isolate overflow-hidden py-28 md:py-36">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, rgba(0,7,205,0.14), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="container-x text-center">
        <Reveal>
          <p className="overline-label mb-6">Kontakt</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="heading-section mx-auto max-w-[760px] text-[34px] sm:text-[44px] md:text-[56px]">
            <span className="text-white">Budujesz coś?</span>{" "}
            <span className="text-ghost">Odezwij się.</span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-[520px] text-[15px] leading-relaxed text-ghost">
            Napisz kilka zdań o sobie i o tym, nad czym pracujesz. Odpowiadamy
            na każdą wiadomość.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                "Aplikacja do NextFounders"
              )}`}
              className="group inline-flex items-center gap-2 rounded-[4px] bg-white px-6 py-3.5 text-[15px] font-medium text-black transition-transform hover:-translate-y-px"
            >
              Napisz do nas
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
              href={`mailto:${EMAIL}`}
              className="font-mono text-[13px] text-ghost transition-colors hover:text-cyan"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
