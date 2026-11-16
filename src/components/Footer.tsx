"use client";

import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-ink">
            © 2026 {profile.shortName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted">{t.footer.built}</p>
        </div>
        <div className="flex items-center gap-5 text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-ink">
            <GithubIcon width={18} height={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-ink">
            <LinkedinIcon width={18} height={18} />
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-ink">
            <InstagramIcon width={18} height={18} />
          </a>
          <span className="h-4 w-px bg-line" />
          <a href="#inicio" className="font-mono text-xs hover:text-ink">
            {t.footer.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
