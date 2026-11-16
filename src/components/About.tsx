"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-16 border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index={1} label={t.about.label} title={t.about.title} />

        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <Reveal>
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-xl border border-line bg-surface">
              <Image
                src="/kaua.jpg"
                alt={t.about.photoAlt}
                fill
                sizes="320px"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-4">
                <p className="font-mono text-xs text-white/90">kauã_moreira.jpg</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="font-medium text-ink">{t.about.p3}</p>
            </Reveal>

            <Reveal delay={100}>
              <dl className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2">
                {t.about.facts.map((f) => (
                  <div key={f.k} className="border-b border-line py-4 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                    <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{f.k}</dt>
                    <dd className="mt-1 font-medium text-ink">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
