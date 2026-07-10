import type { Metadata } from "next";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Reveal } from "@/components/Reveal";
import { FOUNDERS, LEGAL } from "@/lib/founders";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wersja 3 - Klub",
  robots: { index: false, follow: false },
};

const BG = "#0E1310";
const CREAM = "#E9E2D0";
const BRASS = "#BFA26B";
const HAIRLINE = "rgba(233,226,208,0.16)";

const PRINCIPLES = [
  {
    n: "I",
    title: "Budujesz, więc jesteś",
    body: "W NextFounders nie ma obserwatorów. Każda osoba prowadzi własny projekt, coś, co realnie istnieje i się rozwija.",
  },
  {
    n: "II",
    title: "Dajesz tyle, ile bierzesz",
    body: "Kontakty, wiedza, feedback, popełnione błędy, dzielimy się wszystkim, co skraca drogę innym.",
  },
  {
    n: "III",
    title: "Mała grupa, wysoka gęstość",
    body: "Wolimy kilkanaście osób, które działają, niż setki nazwisk na liście. Dlatego obowiązuje ścisła selekcja.",
  },
];

const STEPS = [
  { n: "1", title: "Aplikacja", body: "Kilka zdań o sobie i o tym, co budujesz. Bez formularzy, bez CV." },
  { n: "2", title: "Rozmowa", body: "We Wrocławiu albo online, chcemy zobaczyć, jak myślisz i co zrobiłeś." },
  { n: "3", title: "Decyzja", body: "Dopasowanie, dołączasz. Jeszcze nie, mówimy wprost dlaczego." },
];

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden>
      <span className="h-px w-16" style={{ backgroundColor: HAIRLINE }} />
      <span className="text-[10px]" style={{ color: BRASS }}>
        ◆
      </span>
      <span className="h-px w-16" style={{ backgroundColor: HAIRLINE }} />
    </div>
  );
}

export default function V3() {
  return (
    <div
      className={`${playfair.variable} min-h-screen`}
      style={{ backgroundColor: BG, color: CREAM }}
    >
      {/* Header */}
      <header
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
        style={{ borderColor: HAIRLINE, backgroundColor: "rgba(14,19,16,0.8)" }}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-6 md:px-8">
          <a
            href="#top"
            className="font-[family-name:var(--font-playfair)] text-[17px] tracking-[0.06em]"
          >
            NextFounders
          </a>
          <nav className="hidden items-center gap-9 text-[11px] uppercase tracking-[0.24em] md:flex">
            <a href="#zasady" className="opacity-60 transition-opacity hover:opacity-100">Zasady</a>
            <a href="#ludzie" className="opacity-60 transition-opacity hover:opacity-100">Założyciele</a>
            <a href="#selekcja" className="opacity-60 transition-opacity hover:opacity-100">Selekcja</a>
          </nav>
          <a
            href="#kontakt"
            className="border px-5 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors"
            style={{ borderColor: BRASS, color: BRASS }}
          >
            Aplikuj
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-32 text-center">
          <Image
            src="/art/v3-texture.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-90"
            aria-hidden
          />
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border font-[family-name:var(--font-playfair)] text-[18px]"
                style={{ borderColor: BRASS, color: BRASS }}
              >
                NF
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p
                className="mt-10 text-[11px] uppercase tracking-[0.34em]"
                style={{ color: BRASS }}
              >
                Niezależna organizacja founderów · Wrocław
              </p>
            </Reveal>
            <Reveal delay={260}>
              <h1 className="mt-8 font-[family-name:var(--font-playfair)] text-[11vw] leading-[1.04] md:text-[76px]">
                Founderzy, którzy
                <br />
                <em>faktycznie</em> działają.
              </h1>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10">
                <Divider />
              </div>
            </Reveal>
            <Reveal delay={480}>
              <p className="mx-auto mt-10 max-w-[560px] text-[16px] leading-[1.9] opacity-80">
                Zrzeszamy młodych founderów i founderki, którzy budują realne
                produkty. Wspieramy się nawzajem, dzielimy wiedzą i rozwijamy
                szybciej, niż zrobiłby to każdy z nas osobno.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <div className="mt-12 flex flex-col items-center gap-4">
                <a
                  href="#kontakt"
                  className="border px-9 py-3.5 text-[12px] uppercase tracking-[0.24em] transition-all hover:tracking-[0.3em]"
                  style={{ borderColor: BRASS, color: BRASS }}
                >
                  Aplikuj do NextFounders
                </a>
                <span className="text-[11px] uppercase tracking-[0.24em] opacity-40">
                  Nabór przez selekcję
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Zasady */}
        <section
          id="zasady"
          className="border-t px-6 py-24 md:py-32"
          style={{ borderColor: HAIRLINE }}
        >
          <div className="mx-auto w-full max-w-[1100px]">
            <Reveal>
              <p className="text-center text-[11px] uppercase tracking-[0.34em]" style={{ color: BRASS }}>
                Zasady
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mx-auto mt-6 max-w-[680px] text-center font-[family-name:var(--font-playfair)] text-[32px] leading-[1.15] md:text-[44px]">
                Środowisko robi różnicę.
                <br />
                <em className="opacity-70">Budujemy najlepsze, jakie znamy.</em>
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.n} delay={i * 140} className="h-full">
                  <article
                    className={`flex h-full flex-col items-center px-8 text-center ${
                      i > 0 ? "md:border-l" : ""
                    }`}
                    style={{ borderColor: HAIRLINE }}
                  >
                    <span
                      className="font-[family-name:var(--font-playfair)] text-[28px] italic"
                      style={{ color: BRASS }}
                    >
                      {p.n}
                    </span>
                    <h3 className="mt-5 font-[family-name:var(--font-playfair)] text-[21px] leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.9] opacity-70">{p.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section
          id="ludzie"
          className="border-t px-6 py-24 md:py-32"
          style={{ borderColor: HAIRLINE }}
        >
          <div className="mx-auto w-full max-w-[1100px]">
            <Reveal>
              <p className="text-center text-[11px] uppercase tracking-[0.34em]" style={{ color: BRASS }}>
                Założyciele
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mx-auto mt-6 max-w-[640px] text-center font-[family-name:var(--font-playfair)] text-[32px] leading-[1.15] md:text-[44px]">
                Założona przez ludzi, którzy
                <br />
                <em className="opacity-70">sami przez to przechodzą.</em>
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
              {FOUNDERS.map((f, i) => (
                <Reveal key={f.name} delay={i * 150}>
                  <article className="text-center">
                    <div
                      className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden border"
                      style={{
                        borderColor: HAIRLINE,
                        borderRadius: "999px 999px 6px 6px",
                      }}
                    >
                      <Image
                        src={f.photo}
                        alt={`${f.name}, ${f.area}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    <h3 className="mt-6 font-[family-name:var(--font-playfair)] text-[22px]">
                      {f.name}
                    </h3>
                    <p
                      className="mt-2 text-[10px] uppercase tracking-[0.28em]"
                      style={{ color: BRASS }}
                    >
                      {f.area}
                    </p>
                    <p className="mx-auto mt-4 max-w-[300px] text-[14px] leading-[1.85] opacity-70">
                      {f.bio}
                    </p>
                    <p className="mx-auto mt-4 max-w-[300px] font-[family-name:var(--font-playfair)] text-[14px] italic leading-relaxed opacity-80">
                      „{f.quote}”
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Selekcja */}
        <section
          id="selekcja"
          className="border-t px-6 py-24 md:py-32"
          style={{ borderColor: HAIRLINE }}
        >
          <div className="mx-auto w-full max-w-[760px] text-center">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: BRASS }}>
                Selekcja
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-[family-name:var(--font-playfair)] text-[32px] leading-[1.15] md:text-[44px]">
                Nie da się tu zapisać.
                <br />
                <em className="opacity-70">Można dołączyć.</em>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mx-auto mt-8 max-w-[540px] text-[15px] leading-[1.9] opacity-75">
                Siła grupy zależy od tego, kto w niej jest. Nie szukamy
                idealnych CV, szukamy ludzi, którzy budują coś realnego,
                dowożą, dają od siebie i są w stanie regularnie pojawiać się we
                Wrocławiu.
              </p>
            </Reveal>
            <div className="mt-14">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={280 + i * 130}>
                  <div
                    className="grid items-baseline gap-2 border-t py-8 text-left md:grid-cols-[80px_200px_1fr] md:gap-8"
                    style={{ borderColor: HAIRLINE }}
                  >
                    <span
                      className="font-[family-name:var(--font-playfair)] text-[26px] italic"
                      style={{ color: BRASS }}
                    >
                      {s.n}.
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-[21px]">
                      {s.title}
                    </h3>
                    <p className="text-[14px] leading-[1.85] opacity-70">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt"
          className="relative isolate overflow-hidden border-t px-6 py-28 text-center md:py-40"
          style={{ borderColor: HAIRLINE }}
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 70% at 50% 110%, rgba(191,162,107,0.18), transparent 70%)",
            }}
            aria-hidden
          />
          <div className="mx-auto max-w-[720px]">
            <Reveal>
              <Divider />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-10 font-[family-name:var(--font-playfair)] text-[10vw] leading-[1.08] md:text-[64px]">
                Budujesz coś?
                <br />
                <em className="opacity-70">Odezwij się.</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-8 max-w-[460px] text-[15px] leading-[1.9] opacity-75">
                Napisz kilka zdań o sobie i o tym, nad czym pracujesz.
                Odpowiadamy na każdą wiadomość.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex flex-col items-center gap-5">
                <a
                  href={`mailto:${LEGAL.email}?subject=${encodeURIComponent("Aplikacja do NextFounders")}`}
                  className="px-9 py-4 text-[12px] uppercase tracking-[0.24em] transition-opacity hover:opacity-85"
                  style={{ backgroundColor: BRASS, color: BG }}
                >
                  Napisz do nas
                </a>
                <a
                  href={`mailto:${LEGAL.email}`}
                  className="border-b pb-0.5 text-[13px] tracking-[0.06em] opacity-60 transition-opacity hover:opacity-100"
                  style={{ borderColor: HAIRLINE }}
                >
                  {LEGAL.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-12" style={{ borderColor: HAIRLINE }}>
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <span
            className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border font-[family-name:var(--font-playfair)] text-[13px]"
            style={{ borderColor: BRASS, color: BRASS }}
          >
            NF
          </span>
          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] opacity-50">
            NextFounders · Wrocław · MMXXVI
          </p>
          <p className="mx-auto mt-6 max-w-[640px] text-[11px] leading-relaxed opacity-45">
            © {new Date().getFullYear()} NextFounders. {LEGAL.line1}
            <br />
            {LEGAL.line2}
          </p>
        </div>
      </footer>
    </div>
  );
}
