import Link from "next/link";

import {
  type ActionLink,
  type LandingConfig,
  landingConfig,
} from "@/lib/landing-config";
import { ContactSection } from "@/components/sections/Contact";
import { FAQSection } from "@/components/sections/FAQ";
import { FeaturesSection } from "@/components/sections/Features";
import { HeroSection } from "@/components/sections/Hero";
import { PricingSection } from "@/components/sections/Pricing";
import { TestimonialsSection } from "@/components/sections/Testimonials";

export default function Home() {
  const {
    brand,
    navigation,
    hero,
    stats,
    features,
    testimonials,
    pricing,
    faqs,
    contact,
    footer,
  } = landingConfig;

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <SiteHeader
        brand={brand}
        navigation={navigation}
        primaryAction={hero.primaryAction}
      />
      <main className="flex-1">
        <HeroSection id="top" brand={brand} hero={hero} stats={stats} />
        <FeaturesSection id="services" {...features} />
        <TestimonialsSection id="testimonials" {...testimonials} />
        <PricingSection id="pricing" {...pricing} />
        <FAQSection id="faqs" {...faqs} />
        <ContactSection {...contact} />
      </main>
      <SiteFooter brand={brand} footer={footer} />
    </div>
  );
}

type HeaderProps = {
  brand: LandingConfig["brand"];
  navigation: LandingConfig["navigation"];
  primaryAction: ActionLink;
};

function SiteHeader({ brand, navigation, primaryAction }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="#top" className="text-base font-semibold text-slate-900">
          {brand.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={primaryAction.href}
          className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:inline-flex"
        >
          {primaryAction.label}
        </Link>
      </div>
    </header>
  );
}

type FooterProps = {
  brand: LandingConfig["brand"];
  footer: LandingConfig["footer"];
};

function SiteFooter({ brand, footer }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              {brand.tagline}
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">{brand.name}</p>
            <p className="mt-3 max-w-sm text-sm text-slate-300">
              Purpose-built landing page sections to launch client sites faster.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}

