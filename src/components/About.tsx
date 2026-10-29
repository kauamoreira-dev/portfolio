"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-16 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label={t.about.label} title={t.about.title} />
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="font-medium text-ink">{t.about.p3}</p>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 self-start md:grid-cols-1">
            {t.about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="rounded-2xl border border-line bg-white p-5 md:flex md:items-center md:gap-5">
                  <p className="text-3xl font-extrabold text-accent sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-muted md:mt-0">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
