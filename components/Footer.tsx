import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-mist-8 bg-ink">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-[360px]">
            <Logo />
            <p className="mt-4 text-[13px] leading-relaxed text-ghost">
              Niezależna organizacja zrzeszająca młodych founderów i
              founderki, którzy faktycznie działają. Wrocław.
            </p>
          </div>

          <nav className="flex gap-12" aria-label="Stopka">
            <div className="flex flex-col gap-2.5">
              <span className="overline-label mb-1">Strona</span>
              <a href="#manifest" className="text-[13px] text-ghost transition-colors hover:text-white">
                Manifest
              </a>
              <a href="#zalozyciele" className="text-[13px] text-ghost transition-colors hover:text-white">
                Założyciele
              </a>
              <a href="#selekcja" className="text-[13px] text-ghost transition-colors hover:text-white">
                Selekcja
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="overline-label mb-1">Kontakt</span>
              <a
                href="mailto:info@nextrealstudio.com"
                className="text-[13px] text-ghost transition-colors hover:text-white"
              >
                info@nextrealstudio.com
              </a>
              <span className="text-[13px] text-ghost">Wrocław, Polska</span>
            </div>
          </nav>
        </div>

        <div className="mt-12 border-t border-mist-8 pt-6">
          <p className="text-[12px] leading-relaxed text-whisper">
            © {new Date().getFullYear()} NextFounders. Organizacja działa w
            ramach Next Real Spółka z ograniczoną odpowiedzialnością.
          </p>
          <p className="mt-2 font-mono text-[11px] leading-relaxed text-whisper">
            ul. Gdańska 13, 50-334 Wrocław · KRS 0001242343 · NIP 8982334148 ·
            REGON 544812952
          </p>
        </div>
      </div>
    </footer>
  );
}
