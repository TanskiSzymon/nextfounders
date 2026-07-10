import { Reveal } from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Budujesz, więc jesteś",
    body: "W NextFounders nie ma obserwatorów. Każda osoba w organizacji prowadzi własny projekt — produkt, firmę, coś, co realnie istnieje i się rozwija.",
  },
  {
    n: "02",
    title: "Dajesz tyle, ile bierzesz",
    body: "Kontakty, wiedza, feedback, popełnione błędy — dzielimy się wszystkim, co skraca drogę innym. Wsparcie działa, bo płynie w obie strony.",
  },
  {
    n: "03",
    title: "Mała grupa, wysoka gęstość",
    body: "Wolimy kilkanaście osób, które faktycznie działają, niż setki nazwisk na liście. Dlatego do NextFounders prowadzi ścisła selekcja.",
  },
];

export function Manifest() {
  return (
    <section id="manifest" className="border-b border-mist-6 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="overline-label mb-6">Manifest</p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <Reveal delay={120}>
            <h2 className="heading-section text-[32px] sm:text-[40px] md:text-[48px]">
              <span className="text-white">Środowisko robi różnicę.</span>{" "}
              <span className="text-ghost">Budujemy najlepsze, jakie znamy.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="space-y-4 text-[15px] leading-relaxed text-ghost md:pt-2">
              <p>
                Budowanie startupu w pojedynkę jest samotne — większość ludzi
                wokół nie rozumie, po co to robisz. NextFounders istnieje po
                to, żeby ludzie, którzy działają, mieli wokół siebie ludzi,
                którzy działają.
              </p>
              <p>
                Jesteśmy niezależną organizacją. Spotykamy się we Wrocławiu,
                pracujemy nad swoimi projektami, wymieniamy się tym, co wiemy,
                i pilnujemy nawzajem, żeby nikt nie stanął w miejscu.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-mist-10 bg-mist-10 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col bg-ink p-7 transition-colors hover:bg-[#070707]">
                <span className="font-mono text-[12px] text-cyan">{p.n}</span>
                <h3 className="mt-4 text-[20px] leading-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ghost">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
