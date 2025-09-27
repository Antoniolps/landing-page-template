import Link from "next/link";
import type { LandingConfig } from "@/lib/landing-config";

type HeroProps = {
  brand: LandingConfig["brand"];
  hero: LandingConfig["hero"];
  stats: LandingConfig["stats"];
  id?: string;
};

export function HeroSection({ brand, hero, stats, id }: HeroProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-24">
        <div className="w-full lg:w-3/5">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-300">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.primaryAction.href}
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-300"
            >
              {hero.primaryAction.label}
            </Link>
            <Link
              href={hero.secondaryAction.href}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white"
            >
              {hero.secondaryAction.label}
            </Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur lg:w-2/5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            {brand.tagline}
          </p>
          <p className="text-2xl font-semibold text-white">{brand.name}</p>
          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

