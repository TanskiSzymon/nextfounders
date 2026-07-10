import Image from "next/image";
import { Reveal } from "./Reveal";

const FOUNDERS = [
  {
    name: "Stanisław Rajm",
    photo: "/team/stanislaw.jpg",
    area: "Dystrybucja i sprzedaż",
    bio: "Rozmawia z klientami, zanim powstanie kod. Uczestnik MD Fellowship — 1 z 9 founderów wybranych spośród 400 aplikacji.",
    quote: "Zabiłem trzy produkty, zanim znalazłem właściwy. Każdy był diagnozą.",
  },
  {
    name: "Szymon Tański",
    photo: "/team/szymon.jpg",
    area: "Systemy produkcyjne i AI",
    bio: "Inżynier, którego projekty jeżdżą w setkach tysięcy aut w Europie (Bosch). Buduje systemy AI/ML, które działają w produkcji, nie w prezentacji.",
    quote: "Jeśli coś ma zadziałać milion razy bez awarii — to moja działka.",
  },
  {
    name: "Filip Hanasz",
    photo: "/team/filip.jpg",
    area: "Automatyzacja i operacje",
    bio: "Były CTO platformy B2B AI wunderloop.de. Przez lata automatyzował procesy polskich firm — od scrapingu po operacje finansowe.",
    quote: "Gdy trzeci raz buduję tę samą automatyzację, czwarty raz to już produkt.",
  },
];

export function Founders() {
  return (
    <section id="zalozyciele" className="border-b border-mist-6 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="overline-label mb-6">Założyciele</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="heading-section max-w-[720px] text-[32px] sm:text-[40px] md:text-[48px]">
            <span className="text-white">Założona przez ludzi,</span>{" "}
            <span className="text-ghost">którzy sami przez to przechodzą.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 140} className="h-full">
              <article className="card-base group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={f.photo}
                    alt={`${f.name} — ${f.area}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] text-white">{f.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-overline text-cyan">
                    {f.area}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-ghost">
                    {f.bio}
                  </p>
                  <p className="mt-auto border-t border-mist-8 pt-4 text-[13px] italic leading-relaxed text-whisper">
                    „{f.quote}”
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
