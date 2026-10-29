import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const title = "Kauã Moreira · Desenvolvedor Full Stack";
const description =
  "Portfólio de Kauã Moreira Cirino, desenvolvedor Full Stack (React, TypeScript, Supabase) em Santarém, PA. Disponível para projetos.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kauamoreira.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/kaua.jpg", width: 800, height: 1000, alt: "Kauã Moreira Cirino" }],
  },
  twitter: { card: "summary", title, description, images: ["/kaua.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
