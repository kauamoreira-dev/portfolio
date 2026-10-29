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

export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
