import Image from "next/image";
import { Fraunces } from "next/font/google";
import { Reveal } from "@/components/Reveal";
import { FOUNDERS, LEGAL } from "@/lib/founders";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
});

const INK = "#191713";
const BLUE = "#1B2CC1";

export type TeamVariant = "original" | "rows" | "compact" | "collective";

const SHORT_BIOS: Record<string, string> = {
  "Stanisław Rajm":
    "Trzy pierwsze projekty ubił, zanim cokolwiek zarobiły. Z każdego wyciągnął lekcję i dziś zaczyna od rozmowy z klientem, nie od kodu.",
  "Szymon Tański":
    "Wszystkiego nauczył się, budując: od robota drukującego naleśniki po systemy, które po prostu muszą działać.",
  "Filip Hanasz":
    "Pierwsze automatyzacje składał sam, dla małych firm. Krok po kroku przeszedł drogę od drobnych zleceń do własnych produktów.",
};

const PRINCIPLES = [
  {
    n: "01",
    title: "Budujesz, więc jesteś",
    body: "W NextFounders nie ma obserwatorów. Każda osoba w organizacji prowadzi własny projekt: produkt, firmę, coś, co realnie istnieje i się rozwija.",
  },
  {
    n: "02",
    title: "Dajesz tyle, ile bierzesz",
    body: "Kontakty, wiedza, feedback, popełnione błędy. Dzielimy się wszystkim, co skraca drogę innym, bo wsparcie działa tylko wtedy, gdy płynie w obie strony.",
  },
  {
    n: "03",
    title: "Mała grupa, wysoka gęstość",
    body: "Wolimy kilkanaście osób, które faktycznie działają, niż setki nazwisk na liście. Dlatego do NextFounders prowadzi ścisła selekcja.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Aplikacja",
    body: "Napisz kilka zdań: kim jesteś, co budujesz, na jakim to jest etapie. Bez formularzy, bez CV.",
  },
  {
    n: "2",
    title: "Rozmowa",
    body: "Spotykamy się we Wrocławiu albo online. Chcemy zobaczyć, jak myślisz i co faktycznie zrobiłeś.",
  },
  {
    n: "3",
    title: "Decyzja",
    body: "Jeśli jest dopasowanie, dołączasz. Jeśli jeszcze nie, mówimy wprost dlaczego. Drzwi zostają otwarte.",
  },
];

/* ---------- Team section variants ---------- */

function TeamOriginal() {
  return (
    <section id="ludzie" className="mx-auto w-full max-w-[1200px] px-6 pb-24 md:px-10 md:pb-32">
      <Reveal>
        <h2 className="max-w-[720px] font-[family-name:var(--font-fraunces)] text-[36px] leading-[1.05] tracking-tight md:text-[52px]">
          Założona przez ludzi, którzy{" "}
          <em style={{ color: BLUE }}>sami przez to przechodzą</em>.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
        {FOUNDERS.map((f, i) => (
          <Reveal key={f.name} delay={i * 140}>
            <article>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2px]">
                <Image
                  src={f.photo}
                  alt={`${f.name}, ${f.area}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-[24px]">{f.name}</h3>
              <p className="mt-1 text-[12px] uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                {f.area}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed opacity-75">{f.bio}</p>
              <p className="mt-4 border-t border-[#191713]/15 pt-4 font-[family-name:var(--font-fraunces)] text-[15px] italic leading-relaxed opacity-80">
                „{f.quote}”
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* A - masthead rows: small square photos, editorial imprint feel */
function TeamRows() {
  return (
    <section id="ludzie" className="mx-auto w-full max-w-[1200px] px-6 pb-24 md:px-10 md:pb-32">
      <Reveal>
        <div className="flex items-baseline justify-between border-b border-[#191713]/15 pb-6">
          <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] tracking-tight md:text-[52px]">
            Założyciele
          </h2>
          <span className="text-[12px] uppercase tracking-[0.2em] opacity-50">
            Sami przez to przechodzimy
          </span>
        </div>
      </Reveal>
      <div>
        {FOUNDERS.map((f, i) => (
          <Reveal key={f.name} delay={i * 120}>
            <div className="grid grid-cols-[72px_1fr] items-center gap-5 border-b border-[#191713]/15 py-7 md:grid-cols-[88px_260px_220px_1fr] md:gap-8">
              <div className="relative h-[72px] w-[72px] overflow-hidden rounded-[2px] md:h-[88px] md:w-[88px]">
                <Image
                  src={f.photo}
                  alt={f.name}
                  fill
                  sizes="88px"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-[family-name:var(--font-fraunces)] text-[22px] leading-tight md:text-[24px]">
                {f.name}
              </h3>
              <p className="col-start-2 text-[12px] uppercase tracking-[0.18em] md:col-start-3" style={{ color: BLUE }}>
                {f.area}
              </p>
              <p className="col-span-2 text-[14px] leading-relaxed opacity-70 md:col-span-1 md:col-start-4">
                {SHORT_BIOS[f.name]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* B - compact centered columns with circular portraits */
function TeamCompact() {
  return (
    <section id="ludzie" className="mx-auto w-full max-w-[1200px] px-6 pb-24 md:px-10 md:pb-32">
      <Reveal>
        <div className="text-center">
          <p className="text-[12px] uppercase tracking-[0.28em] opacity-60">Założyciele</p>
          <h2 className="mx-auto mt-5 max-w-[600px] font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.1] tracking-tight md:text-[44px]">
            Zaczęliśmy to miejsce,{" "}
            <em style={{ color: BLUE }}>bo sami go potrzebowaliśmy.</em>
          </h2>
        </div>
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-[880px] gap-12 md:grid-cols-3 md:gap-10">
        {FOUNDERS.map((f, i) => (
          <Reveal key={f.name} delay={i * 130}>
            <article className="text-center">
              <div className="relative mx-auto h-[128px] w-[128px] overflow-hidden rounded-full border border-[#191713]/15">
                <Image
                  src={f.photo}
                  alt={f.name}
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-[21px]">{f.name}</h3>
              <p className="mx-auto mt-3 max-w-[250px] text-[14px] leading-relaxed opacity-70">
                {SHORT_BIOS[f.name]}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={420}>
        <p className="mx-auto mt-14 max-w-[540px] text-center font-[family-name:var(--font-fraunces)] text-[18px] italic leading-relaxed opacity-80 md:text-[20px]">
          Ale NextFounders to nie my trzej. To każda kolejna osoba, która
          dołącza i pcha swój projekt do przodu.
        </p>
      </Reveal>
    </section>
  );
}

/* C - collective paragraph, tiny avatar cluster, most understated */
function TeamCollective() {
  return (
    <section id="ludzie" className="mx-auto w-full max-w-[1200px] px-6 pb-24 md:px-10 md:pb-32">
      <Reveal>
        <div className="border-y border-[#191713]/15 py-14 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <div>
              <p className="text-[12px] uppercase tracking-[0.28em] opacity-60">Założyciele</p>
              <div className="mt-6 flex items-center">
                {FOUNDERS.map((f, i) => (
                  <div
                    key={f.name}
                    className="relative h-[56px] w-[56px] overflow-hidden rounded-full border-2 border-[#F6F2E9]"
                    style={{ marginLeft: i === 0 ? 0 : -14, zIndex: 3 - i }}
                  >
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-[family-name:var(--font-fraunces)] text-[22px] leading-[1.5] md:text-[26px]">
                Za NextFounders stoją{" "}
                <span className="whitespace-nowrap">Stanisław Rajm</span>{" "}
                <em className="text-[0.75em] not-italic uppercase tracking-[0.1em]" style={{ color: BLUE }}>
                  dystrybucja
                </em>
                , <span className="whitespace-nowrap">Szymon Tański</span>{" "}
                <em className="text-[0.75em] not-italic uppercase tracking-[0.1em]" style={{ color: BLUE }}>
                  systemy i AI
                </em>{" "}
                i <span className="whitespace-nowrap">Filip Hanasz</span>{" "}
                <em className="text-[0.75em] not-italic uppercase tracking-[0.1em]" style={{ color: BLUE }}>
                  automatyzacja
                </em>
                .
              </p>
              <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed opacity-75">
                Każdy z nas zaczynał od zera i wszystkiego uczył się na własnych
                projektach. NextFounders to organizacja, jakiej sami
                potrzebowaliśmy, gdy zaczynaliśmy.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Full page ---------- */

export function EditorialPage({ team }: { team: TeamVariant }) {
  const TeamSection = {
    original: TeamOriginal,
    rows: TeamRows,
    compact: TeamCompact,
    collective: TeamCollective,
  }[team];

  return (
    <div
      className={`${fraunces.variable} min-h-screen bg-[#F6F2E9] text-[#191713] selection:bg-[#1B2CC1] selection:text-[#F6F2E9]`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#191713]/12 bg-[#F6F2E9]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="font-[family-name:var(--font-fraunces)] text-[19px] tracking-tight"
          >
            NextFounders<span style={{ color: BLUE }}>.</span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.14em] md:flex">
            <a href="#manifest" className="opacity-70 transition-opacity hover:opacity-100">Manifest</a>
            <a href="#ludzie" className="opacity-70 transition-opacity hover:opacity-100">Założyciele</a>
            <a href="#selekcja" className="opacity-70 transition-opacity hover:opacity-100">Selekcja</a>
          </nav>
          <a
            href="#kontakt"
            className="rounded-full border border-[#191713] px-5 py-2 text-[13px] uppercase tracking-[0.1em] transition-colors hover:bg-[#191713] hover:text-[#F6F2E9]"
          >
            Aplikuj
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 pt-16 md:px-10 md:pt-24">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.28em] opacity-60">
              Niezależna organizacja founderów · Wrocław
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-8 font-[family-name:var(--font-fraunces)] text-[13vw] leading-[0.95] tracking-[-0.02em] md:text-[104px]">
              Founderzy,
              <br />
              którzy{" "}
              <em className="font-light" style={{ color: BLUE }}>
                faktycznie
              </em>
              <br />
              działają.
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[520px] text-[17px] leading-relaxed opacity-80">
                NextFounders to społeczność młodych founderów i founderek,
                którzy budują realne rzeczy. Najwięcej dzieje się między
                ludźmi: wiedza, kontakty i szczery feedback krążą w obie
                strony, a każdy rozwija się szybciej niż w pojedynkę.
              </p>
              <a
                href="#kontakt"
                className="group inline-flex shrink-0 items-center gap-3 text-[15px] uppercase tracking-[0.12em]"
                style={{ color: BLUE }}
              >
                <span className="border-b border-current pb-1">
                  Aplikuj do NextFounders
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* Art banner */}
        <Reveal>
          <section className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
            <div className="overflow-hidden rounded-[2px]">
              <Image
                src="/art/v1-art.jpg"
                alt="Abstrakcyjna kompozycja: organiczne kształty w kolorach niebieskim i pomarańczowym"
                width={2000}
                height={857}
                priority
                className="h-auto w-full"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] opacity-50">
              <span>Razem rośnie się szybciej</span>
              <span>Wrocław, {new Date().getFullYear()}</span>
            </div>
          </section>
        </Reveal>

        {/* Manifest */}
        <section id="manifest" className="mx-auto w-full max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-[#191713]/15 pb-6">
              <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] tracking-tight md:text-[52px]">
                Manifest
              </h2>
              <span className="text-[12px] uppercase tracking-[0.2em] opacity-50">
                Trzy zasady
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-[620px] text-[16px] leading-relaxed opacity-75">
              O sile NextFounders nie decydujemy my, tylko ludzie, którzy tu
              są. Te trzy rzeczy sprawiają, że warto być wśród nich.
            </p>
          </Reveal>
          <div className="mt-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div className="grid gap-4 border-b border-[#191713]/15 py-10 md:grid-cols-[120px_1fr_1.2fr] md:gap-10">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[40px] leading-none md:text-[56px]"
                    style={{ color: BLUE }}
                  >
                    {p.n}
                  </span>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight md:text-[30px]">
                    {p.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed opacity-75">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Team */}
        <TeamSection />

        {/* Partners */}
        <section id="partnerzy" className="mx-auto w-full max-w-[1200px] px-6 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <div className="grid gap-6 border-t border-[#191713]/15 pt-10 md:grid-cols-[120px_1fr_1.2fr] md:gap-10">
              <span className="text-[12px] uppercase tracking-[0.2em] opacity-50">
                Partnerzy
              </span>
              <a
                href="https://odysai.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-2 font-[family-name:var(--font-fraunces)] text-[26px] leading-tight transition-colors hover:text-[#1B2CC1] md:text-[30px]"
              >
                OdysAI
                <span className="text-[16px] opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span>
              </a>
              <p className="text-[15px] leading-relaxed opacity-75">
                Studencka grupa badawcza applied AI działająca przy Politechnice
                Wrocławskiej. Razem łączymy wrocławskie środowiska founderów i
                badaczy AI.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Selection */}
        <section id="selekcja" className="border-y border-[#191713]/15 bg-[#EFE9DC]">
          <div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
            <div className="grid gap-14 md:grid-cols-2 md:gap-20">
              <div>
                <Reveal>
                  <h2 className="font-[family-name:var(--font-fraunces)] text-[36px] leading-[1.05] tracking-tight md:text-[52px]">
                    Nie da się tu zapisać.
                    <br />
                    <em style={{ color: BLUE }}>Można dołączyć.</em>
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-6 max-w-[440px] text-[16px] leading-relaxed opacity-75">
                    Siła grupy zależy od tego, kto w niej jest, dlatego każdą
                    aplikację rozpatrujemy indywidualnie. Nie szukamy idealnych
                    CV. Szukamy ludzi, którzy działają.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <ul className="mt-10 space-y-4">
                    {[
                      "Budujesz coś realnego: produkt, firmę, projekt.",
                      "Dowozisz. Liczy się zrobione, nie zaplanowane.",
                      "Dajesz od siebie: wiedzę, kontakty, czas.",
                      "Regularnie pojawiasz się we Wrocławiu.",
                    ].map((c) => (
                      <li key={c} className="flex gap-3 text-[15px] leading-relaxed">
                        <span style={{ color: BLUE }}>✳</span>
                        <span className="opacity-80">{c}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div>
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 130}>
                    <div className="border-b border-[#191713]/15 py-8 first:pt-0">
                      <div className="flex items-baseline gap-6">
                        <span
                          className="font-[family-name:var(--font-fraunces)] text-[34px] italic"
                          style={{ color: BLUE }}
                        >
                          {s.n}.
                        </span>
                        <div>
                          <h3 className="font-[family-name:var(--font-fraunces)] text-[24px]">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-[15px] leading-relaxed opacity-75">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="mx-auto w-full max-w-[1200px] px-6 py-28 text-center md:px-10 md:py-40">
          <Reveal>
            <h2 className="font-[family-name:var(--font-fraunces)] text-[11vw] leading-[0.98] tracking-[-0.02em] md:text-[88px]">
              Budujesz coś?
              <br />
              <em style={{ color: BLUE }}>Odezwij się.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-[460px] text-[16px] leading-relaxed opacity-75">
              Napisz kilka zdań o sobie i o tym, nad czym pracujesz.
              Odpowiadamy na każdą wiadomość.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 flex flex-col items-center gap-5">
              <a
                href={`mailto:${LEGAL.email}?subject=${encodeURIComponent("Aplikacja do NextFounders")}`}
                className="rounded-full px-8 py-4 text-[15px] uppercase tracking-[0.12em] text-[#F6F2E9] transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: INK }}
              >
                Napisz do nas
              </a>
              <a
                href={`mailto:${LEGAL.email}`}
                className="border-b border-[#191713]/30 pb-0.5 text-[14px] tracking-wide opacity-70 transition-opacity hover:opacity-100"
              >
                {LEGAL.email}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#191713]/15">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-10 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <span className="font-[family-name:var(--font-fraunces)] text-[17px]">
              NextFounders<span style={{ color: BLUE }}>.</span>
            </span>
            <span className="text-[12px] uppercase tracking-[0.2em] opacity-50">
              Wrocław, Polska
            </span>
          </div>
          <p className="mt-8 text-[12px] leading-relaxed opacity-55">
            © {new Date().getFullYear()} NextFounders. {LEGAL.line1}
            <br />
            {LEGAL.line2}
          </p>
        </div>
      </footer>
    </div>
  );
}
