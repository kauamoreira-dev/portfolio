"use client";

import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { ArrowRightIcon, GithubIcon, InstagramIcon, LinkedinIcon, MapPinIcon } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  const socials = [
    { href: profile.github, label: "GitHub", icon: GithubIcon },
    { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon },
    { href: profile.instagram, label: "Instagram", icon: InstagramIcon },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="hero-in">
          <div className="mb-8 inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-1.5 font-mono text-xs text-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.status}
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-7xl">
            {profile.shortName}
            <span className="text-accent">.</span>
          </h1>
          <p className="cursor mt-5 font-mono text-lg font-medium text-accent sm:text-xl">{t.hero.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.pitch}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 font-semibold text-white transition hover:bg-accent"
            >
              {t.hero.ctaProjects}
              <ArrowRightIcon width={18} height={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:border-ink"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs">
              <MapPinIcon width={14} height={14} />
              {t.hero.location}
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-ink"
                >
                  <s.icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-in" style={{ animationDelay: "150ms" }}>
          <div className="overflow-hidden rounded-xl border border-ink/10 bg-ink shadow-2xl shadow-ink/20">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-white/40">~/kaua-moreira — zsh</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm">
              {t.hero.terminal.map((line) => (
                <div key={line.cmd}>
                  <p className="text-white">
                    <span className="text-accent">❯</span> {line.cmd}
                  </p>
                  <p className="text-white/60">{line.out}</p>
                </div>
              ))}
              <p className="cursor text-white">
                <span className="text-accent">❯</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
