"use client";

import Image from "next/image";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { ArrowUpRightIcon, CheckIcon, GithubIcon } from "./icons";

const vagasTags = ["React", "Vite", "TypeScript", "Supabase", "Vercel"];

export function Projects() {
  const { t } = useLanguage();
  const v = t.projects.vagas;

  return (
    <section id="projects" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label={t.projects.label} title={t.projects.title} />

        <Reveal>
          <article className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-accent/5 md:grid-cols-2">
            <a
              href="https://vagastapajos.com.br/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-surface p-8 sm:p-12"
            >
              <Image
                src="/vagas-tapajos.png"
                alt={v.imageAlt}
                width={772}
                height={806}
                sizes="(max-width: 768px) 90vw, 480px"
                className="w-full max-w-[380px] rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>

            <div className="flex flex-col p-7 sm:p-10">
              <span className="mb-4 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-strong">
                {t.projects.featured}
              </span>
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">{v.name}</h3>
              <p className="mt-1 font-medium text-accent">{v.tagline}</p>
              <p className="mt-5 leading-relaxed text-muted">{v.description}</p>

              <ul className="mt-6 space-y-2">
                {v.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <CheckIcon width={13} height={13} strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {vagasTags.map((tag) => (
                  <span key={tag} className="rounded-md bg-surface px-2.5 py-1 font-mono text-xs text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="https://vagastapajos.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
                >
                  {t.projects.visit}
                  <ArrowUpRightIcon width={16} height={16} />
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 flex flex-col items-start gap-4 rounded-3xl border-2 border-dashed border-line p-7 transition hover:border-accent sm:flex-row sm:items-center sm:p-8"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface text-ink group-hover:text-accent">
              <GithubIcon width={24} height={24} />
            </span>
            <div className="flex-1">
              <p className="font-bold text-ink">{t.projects.soonTitle}</p>
              <p className="mt-1 text-sm text-muted">{t.projects.soonText}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              {t.projects.soonCta}
              <ArrowUpRightIcon width={16} height={16} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
