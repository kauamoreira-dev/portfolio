"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { ArrowUpRightIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./icons";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  const channels = [
    { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon },
    { label: "WhatsApp", value: profile.phoneDisplay, href: profile.whatsapp, icon: WhatsappIcon },
    { label: "LinkedIn", value: "/in/kauamoreira-dev", href: profile.linkedin, icon: LinkedinIcon },
    { label: "Instagram", value: "@kauamoreira.dev", href: profile.instagram, icon: InstagramIcon },
    { label: "GitHub", value: "kauamoreira-dev", href: profile.github, icon: GithubIcon },
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10";

  return (
    <section id="contact" className="scroll-mt-16 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading label={c.label} title={c.title} />

        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{c.text}</p>
            <ul className="mt-8 space-y-3">
              {channels.map((ch) => (
                <li key={ch.label}>
                  <a
                    href={ch.href}
                    target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-accent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <ch.icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{ch.label}</span>
                      <span className="block truncate font-medium text-ink">{ch.value}</span>
                    </span>
                    <ArrowUpRightIcon width={18} height={18} className="text-muted transition group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
              {/* honeypot: hidden from people, filled by bots */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">{c.name}</span>
                  <input name="name" required maxLength={100} placeholder={c.namePh} className={inputClass} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-ink">{c.email}</span>
                  <input name="email" type="email" required maxLength={200} placeholder={c.emailPh} className={inputClass} />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">{c.message}</span>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  placeholder={c.messagePh}
                  className={`${inputClass} resize-none`}
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-full bg-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-strong disabled:opacity-60"
              >
                {status === "sending" ? c.sending : c.send}
              </button>
              <p aria-live="polite" className="mt-4 min-h-6 text-center text-sm font-medium">
                {status === "success" && <span className="text-green-700">{c.success}</span>}
                {status === "error" && <span className="text-red-600">{c.error}</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
