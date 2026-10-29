"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { CloseIcon, MenuIcon } from "./icons";

const sections = ["about", "projects", "skills", "education", "contact"] as const;

export function Header() {
  const { lang, t, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langButton = (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.langToggle}
      className="flex items-center rounded-full border border-line bg-white p-0.5 text-xs font-semibold"
    >
      {(["pt", "en"] as const).map((l) => (
        <span
          key={l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l ? "bg-accent text-white" : "text-muted"
          }`}
        >
          {l}
        </span>
      ))}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "border-b border-line bg-white/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight text-ink">
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {sections.map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="transition-colors hover:text-accent">
                  {t.nav[s]}
                </a>
              </li>
            ))}
          </ul>
          {langButton}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {langButton}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.menu}
            aria-expanded={open}
            className="rounded-lg p-2 text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line bg-white px-4 py-3 md:hidden">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 font-medium text-ink hover:bg-surface hover:text-accent"
              >
                {t.nav[s]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
