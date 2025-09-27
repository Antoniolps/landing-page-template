import Link from "next/link";
import type { LandingConfig } from "@/lib/landing-config";

type PricingProps = LandingConfig["pricing"] & {
  id?: string;
};

export function PricingSection({ title, subtitle, plans, id }: PricingProps) {
  return (
    <section id={id} className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/70 bg-slate-50 p-8 shadow-sm"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{plan.price}</p>
                <p className="mt-3 text-base text-slate-600">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={plan.callToAction.href}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                {plan.callToAction.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

