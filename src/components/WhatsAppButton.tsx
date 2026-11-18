"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";
import { WhatsappIcon } from "./icons";

export function WhatsAppButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Appears only after the hero, so it never covers the first screen
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`${profile.whatsapp}?text=${encodeURIComponent(t.contact.whatsappText)}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappFab}
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 transition-all duration-300 sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-md bg-ink px-3 py-2 text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        {t.whatsappFab}
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform group-hover:scale-105">
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-duration:2.5s]" />
        <WhatsappIcon width={28} height={28} className="relative" />
      </span>
    </a>
  );
}
