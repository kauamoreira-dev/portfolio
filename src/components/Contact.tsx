"use client";

import { useState } from "react";
import { LIMITS, readContact, validateContact, type ContactInput, type FieldErrors } from "@/lib/contact";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";
import { ArrowUpRightIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./icons";

type Status = "idle" | "sending" | "success" | "invalid" | "server" | "network";

export function Contact() {
  const { lang, t } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [sentName, setSentName] = useState("");

  const channels = [
    {
      label: "E-mail",
      value: profile.email,
      href: `mailto:${profile.email}?subject=${encodeURIComponent(c.emailSubject)}`,
      icon: MailIcon,
    },
    {
      label: "WhatsApp",
      value: profile.phoneDisplay,
      href: `${profile.whatsapp}?text=${encodeURIComponent(c.whatsappText)}`,
      icon: WhatsappIcon,
    },
    { label: "LinkedIn", value: "/in/kauamoreira-dev", href: profile.linkedin, icon: LinkedinIcon },
    { label: "Instagram", value: "@kauamoreira.dev", href: profile.instagram, icon: InstagramIcon },
    { label: "GitHub", value: "kauamoreira-dev", href: profile.github, icon: GithubIcon },
  ];

  function clearFieldError(field: keyof ContactInput) {
    if (!fieldErrors[field]) return;
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (status === "invalid") setStatus("idle");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const input = readContact(data);

    const errors = validateContact(input);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("invalid");
      form.querySelector<HTMLElement>(`[name="${Object.keys(errors)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    let res: Response;
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
    } catch {
      setStatus("network");
      return;
    }

    if (res.ok) {
      setSentName(input.name.split(" ")[0]);
      form.reset();
      setStatus("success");
      return;
    }
    const payload = await res.json().catch(() => ({}));
    if (res.status === 400 && payload.fields) {
      setFieldErrors(payload.fields);
      setStatus("invalid");
    } else {
      setStatus("server");
    }
  }

  const inputClass = (field: keyof ContactInput) =>
    `w-full rounded-md border bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:ring-4 ${
      fieldErrors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
        : "border-line focus:border-accent focus:ring-accent/10"
    }`;

  const errorText = (field: keyof ContactInput) =>
    fieldErrors[field] && (
      <span id={`${field}-error`} className="mt-1.5 block text-sm text-red-600">
        {c.fieldErrors[fieldErrors[field]!]}
      </span>
    );

  const statusMessage = {
    success: { text: c.success.replace("{name}", sentName), className: "text-green-700" },
    invalid: { text: c.errorInvalid, className: "text-red-600" },
    server: { text: c.errorServer, className: "text-red-600" },
    network: { text: c.errorNetwork, className: "text-red-600" },
  }[status as "success" | "invalid" | "server" | "network"];

  return (
    <section id="contact" className="scroll-mt-16 border-t border-line bg-surface py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index={6} label={c.label} title={c.title} />

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
                    className="group flex items-center gap-4 rounded-lg border border-line bg-white p-4 transition hover:border-ink"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line text-ink transition-colors group-hover:border-accent group-hover:text-accent">
                      <ch.icon />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-wider text-subtle">{ch.label}</span>
                      <span className="block truncate font-medium text-ink">{ch.value}</span>
                    </span>
                    <ArrowUpRightIcon width={18} height={18} className="text-muted transition group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="rounded-xl border border-line bg-white p-6 shadow-sm sm:p-8">
              {/* honeypot: hidden from people, filled by bots */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">{c.name}</span>
                  <input
                    name="name"
                    required
                    maxLength={LIMITS.name}
                    placeholder={c.namePh}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    onInput={() => clearFieldError("name")}
                    className={inputClass("name")}
                  />
                  {errorText("name")}
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">{c.email}</span>
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={LIMITS.email}
                    placeholder={c.emailPh}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    onInput={() => clearFieldError("email")}
                    className={inputClass("email")}
                  />
                  {errorText("email")}
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">{c.message}</span>
                <textarea
                  name="message"
                  required
                  minLength={LIMITS.messageMin}
                  maxLength={LIMITS.messageMax}
                  rows={6}
                  placeholder={c.messagePh}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  onInput={() => clearFieldError("message")}
                  className={`${inputClass("message")} resize-none`}
                />
                {errorText("message")}
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full rounded-md bg-ink px-6 py-3.5 font-semibold text-white transition hover:bg-accent disabled:opacity-60"
              >
                {status === "sending" ? c.sending : c.send}
              </button>
              <p aria-live="polite" className="mt-4 min-h-6 text-center text-sm font-medium">
                {statusMessage && <span className={statusMessage.className}>{statusMessage.text}</span>}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
