"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal, SubHeading } from "./Reveal";
import { AwardIcon, GraduationIcon } from "./icons";

export function EducationBlock() {
  const { t } = useLanguage();
  const e = t.education;

  return (
    <div id="education" className="mt-24 scroll-mt-20">
      <div>
        <SubHeading label={e.label} title={e.title} />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-line bg-white p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink">
                  <GraduationIcon />
                </span>
                <span className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-strong">{e.period}</span>
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-wider text-subtle">{e.degreeLabel}</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">{e.degree}</h3>
              <p className="mt-2 text-muted">{e.school}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-xl border border-line bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink">
                  <AwardIcon />
                </span>
                <h3 className="text-lg font-bold text-ink">{e.certsTitle}</h3>
              </div>
              <ul className="mt-6 divide-y divide-line">
                {e.certs.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4 py-3.5">
                    <span className="font-medium text-ink">{c.name}</span>
                    <span className="shrink-0 text-right font-mono text-xs text-muted">{c.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
