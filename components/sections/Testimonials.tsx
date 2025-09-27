import type { LandingConfig } from "@/lib/landing-config";

type TestimonialsProps = LandingConfig["testimonials"] & {
  id?: string;
};

export function TestimonialsSection({ title, items, id }: TestimonialsProps) {
  return (
    <section id={id} className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {items.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-10 shadow-lg shadow-slate-950/40"
            >
              <blockquote className="text-lg text-slate-200">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-wide text-slate-300">
                <span className="font-semibold text-white">{testimonial.name}</span> · {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

