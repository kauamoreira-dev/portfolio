"use client";

import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © 2026 {profile.shortName}
          <span className="text-accent">.</span>
        </p>
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}
