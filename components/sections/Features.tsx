import type { LandingConfig } from "@/lib/landing-config";

type FeaturesProps = LandingConfig["features"] & {
  id?: string;
};

export function FeaturesSection({ id, title, description, items }: FeaturesProps) {
  return (
    <section id={id} className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-600">{description}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {items.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-base text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

