"use client";

import Image from "next/image";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MapPinIcon } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 md:grid-cols-[1.25fr_1fr]">
        <div className="hero-in order-2 md:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-sm font-medium text-accent-strong">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.status}
          </div>

          <p className="text-lg font-medium text-muted">{t.hero.greeting}</p>
          <h1 className="mt-1 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-accent sm:text-3xl">{t.hero.role}</p>
          <p className="mt-2 font-mono text-sm text-muted sm:text-base">{t.hero.stack}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-strong"
            >
              {t.hero.ctaProjects}
              <ArrowRightIcon width={18} height={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-muted">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPinIcon width={16} height={16} />
              {t.hero.location}
            </span>
            <span className="h-4 w-px bg-line" />
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="hero-in order-1 mx-auto w-full max-w-[300px] md:order-2 md:max-w-[380px]" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-accent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface shadow-xl">
              <Image
                src="/kaua.jpg"
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 300px, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
