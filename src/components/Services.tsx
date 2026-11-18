"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import {
  ArrowRightIcon,
  DatabaseIcon,
  LayoutIcon,
  ServerIcon,
  WrenchIcon,
} from "./icons";

const icons = [LayoutIcon, ServerIcon, DatabaseIcon, WrenchIcon];

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="scroll-mt-16 border-t border-line bg-surface py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index={2}
          label={t.services.label}
          title={t.services.title}
        />

        <div
          className="grid overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2"
          style={{ gap: 1 }}
        >
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.title} delay={i * 70} className="h-full">
                <div className="group h-full bg-white p-8 transition-colors hover:bg-surface sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon />
                    </span>
                    <span className="font-mono text-xs text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <ProcessBlock />
      </div>
    </section>
  );
}

function ProcessBlock() {
  const { t } = useLanguage();
  const p = t.services.process;
  const last = p.steps.length - 1;

  return (
    <div className="mt-24">
      <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {p.label}
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {p.title}
          </h3>
        </div>
      </Reveal>

      <ol className="relative grid gap-5 lg:grid-cols-3">
        {/* connector line behind the step numbers (desktop) */}
        <span
          aria-hidden
          className="absolute top-[52px] right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-line via-accent/50 to-accent lg:block"
        />
        {p.steps.map((step, i) => {
          const highlight = i === last;
          return (
            <li key={step.title} className="h-full">
              <Reveal delay={i * 110} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-xl border p-7 transition sm:p-8 ${
                    highlight
                      ? "border-ink bg-ink text-white shadow-2xl shadow-ink/20"
                      : "border-line bg-white hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-bold ring-8 ${
                        highlight
                          ? "bg-accent text-white ring-ink"
                          : "bg-accent/10 text-accent ring-white"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${
                        highlight
                          ? "bg-white/10 text-white/80"
                          : "bg-surface text-muted"
                      }`}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <h4
                    className={`mt-8 text-xl font-bold ${highlight ? "text-white" : "text-ink"}`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`mt-3 leading-relaxed ${highlight ? "text-white/70" : "text-muted"}`}
                  >
                    {step.text}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal delay={200} className="mt-10 flex justify-center">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-strong"
        >
          {p.cta}
          <ArrowRightIcon
            width={18}
            height={18}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </Reveal>
    </div>
  );
}
