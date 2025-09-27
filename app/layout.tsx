import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { landingConfig } from "@/lib/landing-config";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${landingConfig.brand.name} — ${landingConfig.brand.tagline}`,
  description: landingConfig.hero.description,
  keywords: [
    "Next.js landing page template",
    "Tailwind marketing site",
    "Client website starter",
  ],
  openGraph: {
    title: `${landingConfig.brand.name} — ${landingConfig.brand.tagline}`,
    description: landingConfig.hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-100 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

