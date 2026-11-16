"use client";

import { useEffect, useState } from "react";
import { profile, sectionIds } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { CloseIcon, MenuIcon } from "./icons";

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
      className="flex items-center rounded-md border border-line bg-white p-0.5 font-mono text-[11px] font-medium"
    >
      {(["pt", "en"] as const).map((l) => (
        <span
          key={l}
          className={`rounded px-2 py-1 uppercase transition-colors ${lang === l ? "bg-ink text-white" : "text-muted"}`}
        >
          {l}
        </span>
      ))}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "border-b border-line bg-white/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink font-mono text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">
            {profile.shortName}
            <span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {sectionIds.map((s, i) => (
              <li key={s}>
                <a href={`#${s}`} className="group transition-colors hover:text-ink">
                  <span className="mr-1 font-mono text-[11px] text-subtle group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t.nav[s]}
                </a>
              </li>
            ))}
          </ul>
          {langButton}
          <a
            href="#contact"
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent"
          >
            {t.hero.ctaContact}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {langButton}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.menu}
            aria-expanded={open}
            className="rounded-md p-2 text-ink"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line bg-white px-4 py-3 lg:hidden">
          {sectionIds.map((s, i) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-2 py-3 font-medium text-ink hover:bg-surface"
              >
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                {t.nav[s]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
