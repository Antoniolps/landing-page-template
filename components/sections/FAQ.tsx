import type { LandingConfig } from "@/lib/landing-config";

type FAQProps = LandingConfig["faqs"] & {
  id?: string;
};

export function FAQSection({ title, items, id }: FAQProps) {
  return (
    <section id={id} className="bg-slate-100 py-24 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-10 space-y-6">
          {items.map((faq) => (
            <details key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-lg font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-4 text-base text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

