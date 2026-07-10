import type { Metadata } from "next";
import Image from "next/image";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import { Reveal } from "@/components/Reveal";
import { FOUNDERS, LEGAL } from "@/lib/founders";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-archivo",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wersja 2 - Neo-Brutal",
  robots: { index: false, follow: false },
};

const LIME = "#C6FF4A";
const BLUE = "#2B4BFF";
const ORANGE = "#FF5227";

const MARQUEE = [
  "Budujemy, nie gadamy",
  "Ścisła selekcja",
  "Wrocław",
  "Founder founderowi",
  "Zero teorii",
];

const PRINCIPLES = [
  {
    n: "01",
    color: LIME,
    title: "Budujesz, więc jesteś",
    body: "Nie ma obserwatorów. Każda osoba w NextFounders prowadzi własny projekt, coś, co realnie istnieje i się rozwija.",
  },
  {
    n: "02",
    color: BLUE,
    title: "Dajesz tyle, ile bierzesz",
    body: "Kontakty, wiedza, feedback, błędy, dzielimy się wszystkim, co skraca drogę innym. Wsparcie płynie w obie strony.",
  },
  {
    n: "03",
    color: ORANGE,
    title: "Mała grupa, wysoka gęstość",
    body: "Wolimy kilkanaście osób, które działają, niż setki nazwisk na liście. Dlatego wejście prowadzi przez ścisłą selekcję.",
  },
];

const STEPS = [
  { n: "1", title: "Aplikacja", body: "Kilka zdań: kim jesteś, co budujesz, na jakim etapie. Bez formularzy, bez CV." },
  { n: "2", title: "Rozmowa", body: "Na żywo we Wrocławiu albo online. Pokaż, jak myślisz i co faktycznie zrobiłeś." },
  { n: "3", title: "Decyzja", body: "Pasujesz, wchodzisz. Nie tym razem, mówimy wprost dlaczego i drzwi zostają otwarte." },
];

function MarqueeStrip() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-y-2 border-black bg-black py-3" aria-hidden>
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((t, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-6 pr-6 font-[family-name:var(--font-archivo)] text-[15px] uppercase tracking-wide"
                style={{ color: LIME }}
              >
                {t}
                <span style={{ color: "#fff" }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function V2() {
  return (
    <div
      className={`${archivo.variable} ${grotesk.variable} min-h-screen bg-[#EFEDE3] font-[family-name:var(--font-grotesk)] text-black selection:bg-black selection:text-[#C6FF4A]`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-black bg-[#EFEDE3]">
        <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center border-2 border-black bg-black font-[family-name:var(--font-archivo)] text-[13px]"
              style={{ color: LIME }}
            >
              N
            </span>
            <span className="font-[family-name:var(--font-archivo)] text-[15px] uppercase tracking-tight">
              NextFounders
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[14px] font-medium uppercase md:flex">
            <a href="#manifest" className="hover:underline hover:decoration-2 hover:underline-offset-4">Manifest</a>
            <a href="#ludzie" className="hover:underline hover:decoration-2 hover:underline-offset-4">Ekipa</a>
            <a href="#selekcja" className="hover:underline hover:decoration-2 hover:underline-offset-4">Selekcja</a>
          </nav>
          <a
            href="#kontakt"
            className="border-2 border-black px-4 py-2 text-[13px] font-bold uppercase shadow-[4px_4px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000]"
            style={{ backgroundColor: LIME }}
          >
            Aplikuj
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-14 md:px-8 md:pt-20">
            <Reveal>
              <div className="mb-8 inline-flex rotate-[-2deg] items-center gap-2 border-2 border-black bg-white px-4 py-1.5 text-[13px] font-bold uppercase shadow-[4px_4px_0_#000]">
                <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ORANGE }} />
                Niezależna organizacja founderów · Wrocław
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-[family-name:var(--font-archivo)] text-[13.5vw] uppercase leading-[0.92] tracking-tight md:text-[110px]">
                Founderzy,
                <br />
                którzy{" "}
                <span
                  className="inline-block rotate-[-1.5deg] border-2 border-black px-3 shadow-[6px_6px_0_#000]"
                  style={{ backgroundColor: LIME }}
                >
                  działają
                </span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <p className="max-w-[520px] text-[17px] font-medium leading-relaxed">
                  Budujemy realne produkty, nie kolekcjonujemy pomysłów.
                  Wspieramy się nawzajem, dzielimy wiedzą i rozwijamy szybciej,
                  niż zrobiłby to każdy z nas osobno.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#kontakt"
                    className="border-2 border-black bg-black px-6 py-3.5 text-[15px] font-bold uppercase shadow-[5px_5px_0_#2B4BFF] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#2B4BFF]"
                    style={{ color: LIME }}
                  >
                    Aplikuj →
                  </a>
                  <a
                    href="#manifest"
                    className="border-2 border-black bg-white px-6 py-3.5 text-[15px] font-bold uppercase shadow-[5px_5px_0_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#000]"
                  >
                    Manifest
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <MarqueeStrip />

        {/* Manifest */}
        <section id="manifest" className="mx-auto w-full max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <h2 className="font-[family-name:var(--font-archivo)] text-[34px] uppercase leading-none md:text-[54px]">
              Trzy zasady<span style={{ color: ORANGE }}>.</span> Zero wyjątków
              <span style={{ color: BLUE }}>.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 120} className="h-full">
                <article className="flex h-full flex-col border-2 border-black bg-white p-7 shadow-[7px_7px_0_#000] transition-transform hover:rotate-[-0.6deg]">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center border-2 border-black font-[family-name:var(--font-archivo)] text-[14px]"
                    style={{ backgroundColor: p.color, color: p.color === BLUE ? "#fff" : "#000" }}
                  >
                    {p.n}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-archivo)] text-[19px] uppercase leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium leading-relaxed">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section id="ludzie" className="border-y-2 border-black bg-white">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
            <Reveal>
              <h2 className="max-w-[900px] font-[family-name:var(--font-archivo)] text-[34px] uppercase leading-[1.02] md:text-[54px]">
                Założona przez ludzi, którzy{" "}
                <span className="underline decoration-[6px] underline-offset-8" style={{ textDecorationColor: LIME }}>
                  sami przez to przechodzą
                </span>
                .
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {FOUNDERS.map((f, i) => (
                <Reveal key={f.name} delay={i * 130} className="h-full">
                  <article className="flex h-full flex-col border-2 border-black bg-[#EFEDE3] shadow-[7px_7px_0_#000]">
                    <div className="relative aspect-[3/4] overflow-hidden border-b-2 border-black">
                      <Image
                        src={f.photo}
                        alt={`${f.name}, ${f.area}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <span
                        className="absolute left-3 top-3 rotate-[-2deg] border-2 border-black px-2.5 py-1 text-[11px] font-bold uppercase"
                        style={{ backgroundColor: [LIME, BLUE, ORANGE][i], color: i === 1 ? "#fff" : "#000" }}
                      >
                        {f.area}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-[family-name:var(--font-archivo)] text-[19px] uppercase">
                        {f.name}
                      </h3>
                      <p className="mt-3 text-[14px] font-medium leading-relaxed">{f.bio}</p>
                      <p className="mt-auto pt-4 text-[13px] font-bold leading-relaxed">
                        „{f.quote}”
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Selection */}
        <section id="selekcja" className="mx-auto w-full max-w-[1240px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <h2 className="font-[family-name:var(--font-archivo)] text-[34px] uppercase leading-[1.02] md:text-[54px]">
                  Nie zapiszesz się<span style={{ color: ORANGE }}>.</span>
                  <br />
                  Możesz dołączyć<span style={{ color: BLUE }}>.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-[440px] text-[16px] font-medium leading-relaxed">
                  Siła grupy zależy od tego, kto w niej jest. Nie szukamy
                  idealnych CV, szukamy ludzi, którzy działają:
                </p>
              </Reveal>
              <Reveal delay={240}>
                <ul className="mt-8 space-y-3">
                  {[
                    "Budujesz coś realnego, produkt, firmę, projekt.",
                    "Dowozisz. Liczy się zrobione, nie zaplanowane.",
                    "Dajesz od siebie, wiedzę, kontakty, czas.",
                    "Regularnie pojawiasz się we Wrocławiu.",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[15px] font-medium leading-relaxed">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-black text-[11px] font-bold"
                        style={{ backgroundColor: LIME }}
                      >
                        ✓
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="flex flex-col gap-5">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 130}>
                  <div className="flex gap-5 border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black font-[family-name:var(--font-archivo)] text-[16px]"
                      style={{ backgroundColor: [LIME, BLUE, ORANGE][i], color: i === 1 ? "#fff" : "#000" }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-archivo)] text-[17px] uppercase">{s.title}</h3>
                      <p className="mt-1.5 text-[14px] font-medium leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <MarqueeStrip />

        {/* Contact */}
        <section id="kontakt" className="mx-auto w-full max-w-[1240px] px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <h2 className="font-[family-name:var(--font-archivo)] text-[12vw] uppercase leading-[0.95] md:text-[92px]">
              Budujesz coś?
              <br />
              <span
                className="mt-2 inline-block rotate-[-1deg] border-2 border-black px-4 shadow-[7px_7px_0_#000]"
                style={{ backgroundColor: LIME }}
              >
                Odezwij się.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-[460px] text-[16px] font-medium leading-relaxed">
              Napisz kilka zdań o sobie i o tym, nad czym pracujesz.
              Odpowiadamy na każdą wiadomość.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-5">
              <a
                href={`mailto:${LEGAL.email}?subject=${encodeURIComponent("Aplikacja do NextFounders")}`}
                className="border-2 border-black bg-black px-8 py-4 text-[16px] font-bold uppercase shadow-[6px_6px_0_#2B4BFF] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#2B4BFF]"
                style={{ color: LIME }}
              >
                Napisz do nas →
              </a>
              <a href={`mailto:${LEGAL.email}`} className="text-[14px] font-bold underline decoration-2 underline-offset-4">
                {LEGAL.email}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black text-white">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-10 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <span className="font-[family-name:var(--font-archivo)] text-[15px] uppercase" style={{ color: LIME }}>
              NextFounders
            </span>
            <span className="text-[13px] font-medium uppercase tracking-wide opacity-70">
              Wrocław, Polska
            </span>
          </div>
          <p className="mt-8 text-[12px] leading-relaxed opacity-60">
            © {new Date().getFullYear()} NextFounders. {LEGAL.line1}
            <br />
            {LEGAL.line2}
          </p>
        </div>
      </footer>
    </div>
  );
}
