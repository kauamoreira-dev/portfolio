"use client";

import { skills } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { CodeIcon, UsersIcon, WrenchIcon } from "./icons";

export function Skills() {
  const { t } = useLanguage();

  const groups = [
    { title: t.skills.technical, items: [...skills.technical, t.skills.responsive], icon: CodeIcon },
    { title: t.skills.tools, items: skills.tools, icon: WrenchIcon },
    { title: t.skills.soft, items: t.skills.softList, icon: UsersIcon },
  ];

  return (
    <section id="skills" className="scroll-mt-16 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label={t.skills.label} title={t.skills.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <g.icon />
                  </span>
                  <h3 className="text-lg font-bold text-ink">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
