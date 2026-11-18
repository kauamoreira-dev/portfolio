"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ index, label, title }: { index: number; label: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <div className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="text-accent">{String(index).padStart(2, "0")}</span>
        <span>/</span>
        <span>{label}</span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-[2.6rem] sm:leading-[1.1]">{title}</h2>
    </Reveal>
  );
}

export function SubHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-10 border-t border-line pt-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
      <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h3>
    </Reveal>
  );
}
