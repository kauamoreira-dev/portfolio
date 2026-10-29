"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { AwardIcon, GraduationIcon } from "./icons";

export function Education() {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <section id="education" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label={e.label} title={e.title} />

        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-ink p-8 text-white sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
                <GraduationIcon width={24} height={24} />
              </span>
              <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent">{e.period}</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{e.degree}</h3>
              <p className="mt-2 text-white/70">{e.school}</p>
              <div className="mt-8 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-accent" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-ink">
                <AwardIcon className="text-accent" />
                {e.certsTitle}
              </h3>
            </Reveal>
            <ol className="relative space-y-4 border-l-2 border-line pl-7">
              {e.certs.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-accent ring-2 ring-accent/20" />
                    <div className="rounded-2xl border border-line bg-white p-5 transition hover:border-accent/40">
                      <p className="font-semibold text-ink">{c.name}</p>
                      <p className="mt-0.5 text-sm text-muted">{c.note}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
