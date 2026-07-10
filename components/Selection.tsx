import { Reveal } from "./Reveal";

const CRITERIA = [
  "Budujesz coś realnego — produkt, firmę, projekt, który istnieje poza prezentacją.",
  "Dowozisz. Liczy się to, co zrobione, nie to, co zaplanowane.",
  "Chcesz dawać od siebie — wiedzę, kontakty, czas — a nie tylko brać.",
  "Jesteś w stanie regularnie pojawiać się we Wrocławiu.",
];

const STEPS = [
  {
    n: "01",
    title: "Aplikacja",
    body: "Napisz do nas kilka zdań: kim jesteś, co budujesz i na jakim to jest etapie. Bez formularzy, bez CV.",
  },
  {
    n: "02",
    title: "Rozmowa",
    body: "Spotykamy się — na żywo we Wrocławiu albo online. Chcemy zobaczyć, jak myślisz i co faktycznie zrobiłeś.",
  },
  {
    n: "03",
    title: "Decyzja",
    body: "Jeśli jest dopasowanie, dołączasz. Jeśli jeszcze nie — mówimy wprost dlaczego i drzwi zostają otwarte.",
  },
];

export function Selection() {
  return (
    <section id="selekcja" className="border-b border-mist-6 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="overline-label mb-6">Selekcja</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="heading-section max-w-[720px] text-[32px] sm:text-[40px] md:text-[48px]">
            <span className="text-white">Nie da się tu zapisać.</span>{" "}
            <span className="text-ghost">Można dołączyć.</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 max-w-[620px] text-[15px] leading-relaxed text-ghost">
            Siła grupy zależy od tego, kto w niej jest — dlatego każdą
            aplikację rozpatrujemy indywidualnie. Nie szukamy idealnych CV.
            Szukamy ludzi, którzy działają.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal delay={300}>
            <div className="card-base p-7">
              <h3 className="font-mono text-[12px] uppercase tracking-overline text-cyan">
                Kogo szukamy
              </h3>
              <ul className="mt-5 space-y-4">
                {CRITERIA.map((c) => (
                  <li key={c} className="flex gap-3 text-[14px] leading-relaxed text-ghost">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-1 shrink-0"
                      aria-hidden
                    >
                      <path
                        d="M2.5 7.5 L5.5 10.5 L11.5 3.5"
                        stroke="#00ffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col gap-px overflow-hidden rounded-[4px] border border-mist-10 bg-mist-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={360 + i * 120}>
                <div className="flex gap-6 bg-ink p-7 transition-colors hover:bg-[#070707]">
                  <span className="font-mono text-[13px] text-whisper">{s.n}</span>
                  <div>
                    <h3 className="text-[17px] text-white">{s.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ghost">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
