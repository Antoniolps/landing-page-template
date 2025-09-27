import type { LandingConfig } from "@/lib/landing-config";

type ContactProps = LandingConfig["contact"];

export function ContactSection({ title, description, email, phone }: ContactProps) {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-slate-200">{description}</p>
        <div className="mt-8 space-y-3 text-base text-slate-100">
          <p>
            Email: <a href={`mailto:${email}`} className="text-sky-300 hover:text-sky-200">{email}</a>
          </p>
          <p>
            Phone: <a href={`tel:${phone}`} className="text-sky-300 hover:text-sky-200">{phone}</a>
          </p>
        </div>
        <form className="mt-10 grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Jane Doe"
              className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-200">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-200">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share goals, timeline, and budget."
              className="w-full rounded-lg border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}

