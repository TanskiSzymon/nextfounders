"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "#manifest", label: "Manifest" },
  { href: "#zalozyciele", label: "Założyciele" },
  { href: "#selekcja", label: "Selekcja" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-mist-8 bg-void/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" aria-label="NextFounders — strona główna">
          <Logo />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-ghost transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-[4px] bg-white px-4 py-2 text-[13px] font-medium text-black transition-transform hover:-translate-y-px"
          >
            Aplikuj
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {open ? (
              <path
                d="M4 4 L16 16 M16 4 L4 16"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5 H18 M2 10 H18 M2 15 H18"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-mist-8 bg-void/95 backdrop-blur-md md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-[4px] px-2 py-3 text-[15px] text-ghost transition-colors hover:bg-mist-4 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[4px] bg-white px-4 py-3 text-center text-[14px] font-medium text-black"
            >
              Aplikuj
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
