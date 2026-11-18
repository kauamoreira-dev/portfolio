"use client";

import Image from "next/image";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

type ProjectMeta = {
  logo: string;
  url: string;
  host: string;
  image: { src: string; width: number; height: number };
  tags: string[];
  repo?: string;
};

const meta: Record<string, ProjectMeta> = {
  vagas: {
    logo: "/logo-vagas-tapajos.png",
    url: "https://vagastapajos.com.br/",
    host: "vagastapajos.com.br",
    image: { src: "/vagas-tapajos.png", width: 772, height: 806 },
    tags: ["React", "TypeScript", "Vite", "Supabase", "Vercel"],
  },
  curriculo: {
    logo: "/logo-curriculo-tapajos.png",
    url: "https://curriculo-tapajos.vercel.app/",
    host: "curriculo-tapajos.vercel.app",
    image: { src: "/curriculo-tapajos-preview.png", width: 1230, height: 843 },
    tags: ["React", "TypeScript", "Vite", "React Router", "Vercel"],
    repo: "https://github.com/kauamoreira-dev/vagas-curriculo",
  },
};

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index={1} label={p.label} title={p.title} />

        <div className="space-y-10">
          {p.items.map((item, i) => {
            const m = meta[item.id];
            const flipped = i % 2 === 1;
            return (
              <Reveal key={item.id}>
                <article className="overflow-hidden rounded-xl border border-line bg-white">
                  <div className="flex items-center justify-between gap-4 border-b border-line bg-surface px-5 py-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-line" />
                      <span className="ml-3 flex min-w-0 items-center gap-2 rounded-md border border-line bg-white px-2.5 py-1">
                        <Image src={m.logo} alt="" width={14} height={14} className="rounded-[3px]" />
                        <span className="truncate font-mono text-xs text-muted">{m.host}</span>
                      </span>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {p.status}
                    </span>
                  </div>

                  <div className={`grid lg:grid-cols-2 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group relative flex items-center justify-center overflow-hidden border-b border-line bg-surface p-8 sm:p-12 lg:border-b-0 ${
                        flipped ? "lg:border-l" : "lg:border-r"
                      }`}
                    >
                      <div aria-hidden className="bg-grid absolute inset-0" />
                      <Image
                        src={m.image.src}
                        alt={item.imageAlt}
                        width={m.image.width}
                        height={m.image.height}
                        sizes="(max-width: 1024px) 90vw, 520px"
                        className={`relative w-full rounded-lg border border-line shadow-xl transition-transform duration-500 group-hover:-translate-y-1 ${
                          m.image.width > m.image.height ? "" : "max-w-[360px]"
                        }`}
                      />
                    </a>

                    <div className="flex flex-col p-7 sm:p-10">
                      <div className="flex items-center gap-4">
                        <Image
                          src={m.logo}
                          alt={`Logo ${item.name}`}
                          width={56}
                          height={56}
                          className="rounded-xl shadow-md"
                        />
                        <div>
                          <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                          <h3 className="text-3xl font-bold tracking-tight text-ink">{item.name}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-muted">{item.tagline}</p>

                      <dl className="mt-8 space-y-6">
                        {[...item.blocks, { k: p.role, v: item.roleValue }].map((b) => (
                          <div key={b.k} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
                            <dt className="font-mono text-xs uppercase tracking-wider text-accent sm:pt-1">{b.k}</dt>
                            <dd className="leading-relaxed text-ink/80">{b.v}</dd>
                          </div>
                        ))}
                      </dl>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {m.tags.map((tag) => (
                          <span key={tag} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-3 pt-10">
                        <a
                          href={m.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
                        >
                          {p.visit}
                          <ArrowUpRightIcon width={16} height={16} />
                        </a>
                        <a
                          href={m.repo ?? profile.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink"
                        >
                          <GithubIcon width={16} height={16} />
                          {m.repo ? p.code : p.more}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
