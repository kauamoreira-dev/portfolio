"use client";

import {
  siCapacitor,
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siReact,
  siSupabase,
  siTypescript,
  siVercel,
  siVite,
  type SimpleIcon,
} from "simple-icons";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SubHeading } from "./Reveal";
import { CodeIcon } from "./icons";

type Tech = { name: string; icon?: SimpleIcon };

const groups: { key: "languages" | "backend" | "tools"; items: Tech[] }[] = [
  {
    key: "languages",
    items: [
      { name: "React", icon: siReact },
      { name: "TypeScript", icon: siTypescript },
      { name: "JavaScript", icon: siJavascript },
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS", icon: siCss },
    ],
  },
  {
    key: "backend",
    items: [{ name: "Supabase", icon: siSupabase }, { name: "APIs REST" }],
  },
  {
    key: "tools",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Vite", icon: siVite },
      { name: "Vercel", icon: siVercel },
      { name: "Capacitor", icon: siCapacitor },
    ],
  },
];

function TechTile({ tech }: { tech: Tech }) {
  return (
    <li
      className="group flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md"
      style={{ "--brand": tech.icon ? `#${tech.icon.hex}` : "var(--color-accent)" } as React.CSSProperties}
    >
      {tech.icon ? (
        <svg
          role="img"
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 fill-ink transition-colors group-hover:fill-[var(--brand)]"
        >
          <path d={tech.icon.path} />
        </svg>
      ) : (
        <CodeIcon className="h-5 w-5 shrink-0 text-ink transition-colors group-hover:text-accent" />
      )}
      <span className="text-sm font-medium text-ink">{tech.name}</span>
    </li>
  );
}

export function StackBlock() {
  const { t } = useLanguage();

  return (
    <div id="stack" className="mt-24 scroll-mt-20">
      <div>
        <SubHeading label={t.stack.label} title={t.stack.title} />

        <div className="space-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.key} delay={i * 80}>
              <div className="grid gap-4 lg:grid-cols-[200px_1fr] lg:gap-10">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted lg:pt-4">{t.stack.groups[g.key]}</h3>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                  {g.items.map((tech) => (
                    <TechTile key={tech.name} tech={tech} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
