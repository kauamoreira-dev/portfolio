"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { DatabaseIcon, LayoutIcon, ServerIcon, WrenchIcon } from "./icons";

const icons = [LayoutIcon, ServerIcon, DatabaseIcon, WrenchIcon];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-16 border-t border-line bg-surface py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index={2} label={t.services.label} title={t.services.title} />

        <div className="grid overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2" style={{ gap: 1 }}>
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delay={i * 70} className="h-full">
                <div className="group h-full bg-white p-8 transition-colors hover:bg-surface sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon />
                    </span>
                    <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
