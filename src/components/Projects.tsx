"use client";

import Image from "next/image";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

const vagasTags = ["React", "TypeScript", "Vite", "Supabase", "Vercel"];

export function Projects() {
  const { t } = useLanguage();
  const v = t.projects.vagas;

  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index={3} label={t.projects.label} title={t.projects.title} />

        <Reveal>
          <article className="overflow-hidden rounded-xl border border-line bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-line bg-surface px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-3 truncate font-mono text-xs text-muted">vagastapajos.com.br</span>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t.projects.status}
              </span>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <a
                href={profile.vagasTapajos}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center overflow-hidden border-b border-line bg-surface p-8 sm:p-12 lg:border-r lg:border-b-0"
              >
                <div aria-hidden className="bg-grid absolute inset-0" />
                <Image
                  src="/vagas-tapajos.png"
                  alt={v.imageAlt}
                  width={772}
                  height={806}
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="relative w-full max-w-[360px] rounded-lg border border-line shadow-xl transition-transform duration-500 group-hover:-translate-y-1"
                />
              </a>

              <div className="flex flex-col p-7 sm:p-10">
                <h3 className="text-3xl font-bold tracking-tight text-ink">{v.name}</h3>
                <p className="mt-2 text-muted">{v.tagline}</p>

                <dl className="mt-8 space-y-6">
                  {v.blocks.map((b) => (
                    <div key={b.k} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
                      <dt className="font-mono text-xs uppercase tracking-wider text-accent sm:pt-1">{b.k}</dt>
                      <dd className="leading-relaxed text-ink/80">{b.v}</dd>
                    </div>
                  ))}
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
                    <dt className="font-mono text-xs uppercase tracking-wider text-accent sm:pt-1">{v.role}</dt>
                    <dd className="leading-relaxed text-ink/80">{v.roleValue}</dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap gap-2">
                  {vagasTags.map((tag) => (
                    <span key={tag} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-10">
                  <a
                    href={profile.vagasTapajos}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
                  >
                    {t.projects.visit}
                    <ArrowUpRightIcon width={16} height={16} />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink"
                  >
                    <GithubIcon width={16} height={16} />
                    {t.projects.more}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
