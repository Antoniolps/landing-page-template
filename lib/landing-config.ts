export type ActionLink = {
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  callToAction: ActionLink;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type LandingConfig = {
  brand: {
    name: string;
    tagline: string;
  };
  navigation: SocialLink[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: ActionLink;
    secondaryAction: ActionLink;
    highlights: string[];
  };
  stats: Stat[];
  features: {
    title: string;
    description: string;
    items: Feature[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  faqs: {
    title: string;
    items: FAQ[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
  };
  footer: {
    links: SocialLink[];
    copyright: string;
  };
};

export const landingConfig: LandingConfig = {
  brand: {
    name: "Acme Solutions",
    tagline: "Digital experiences that convert",
  },
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Full-service growth partner",
    title: "Launch a standout presence in weeks, not months.",
    description:
      "A modern marketing website template with reusable sections you can tailor for any product, service, or client engagement.",
    primaryAction: {
      label: "Book a strategy call",
      href: "#contact",
    },
    secondaryAction: {
      label: "View sample deliverables",
      href: "#services",
    },
    highlights: [
      "Copy-ready sections",
      "Plug-and-play Next.js + Tailwind stack",
      "Optimized for conversions",
    ],
  },
  stats: [
    { value: "120+", label: "Projects launched" },
    { value: "4.9/5", label: "Client satisfaction" },
    { value: "18%", label: "Avg. conversion lift" },
  ],
  features: {
    title: "Flexible sections you can remix for every client",
    description:
      "Swap in your client\'s messaging, visuals, and CTAs without touching the layout. Every module is powered by simple JSON data.",
    items: [
      {
        title: "Hero & value proposition",
        description:
          "Introduce any offer with bold copy, supporting bullets, and a persuasive call-to-action block.",
      },
      {
        title: "Feature storytelling",
        description:
          "Highlight differentiators in a clean responsive grid that adapts to any amount of content.",
      },
      {
        title: "Social proof & outcomes",
        description:
          "Stack testimonials, stats, and proof points to build immediate trust with new prospects.",
      },
    ],
  },
  testimonials: {
    title: "What partners say",
    items: [
      {
        quote:
          "The template made onboarding new clients a breeze. We launched a polished site in days instead of weeks.",
        name: "Laura Chen",
        role: "Founder, Brightside Creative",
      },
      {
        quote:
          "Our conversions jumped 22% after switching to this layout. It\'s clean, fast, and easy to optimize.",
        name: "David Ruiz",
        role: "Growth Lead, Pioneer AI",
      },
    ],
  },
  pricing: {
    title: "Engagement options",
    subtitle: "Pick the path that fits your workflow.",
    plans: [
      {
        name: "Template only",
        price: "$499",
        description: "One-time license for unlimited client projects.",
        features: [
          "Next.js 14 + App Router",
          "Fully responsive Tailwind UI",
          "Modular content configuration",
        ],
        callToAction: {
          label: "Download template",
          href: "#contact",
        },
      },
      {
        name: "Template + setup",
        price: "From $1,950",
        description: "We customize copy, visuals, and integrations for your launch.",
        features: [
          "Done-for-you deployment",
          "Analytics & automation setup",
          "Two revision cycles",
        ],
        callToAction: {
          label: "Request proposal",
          href: "#contact",
        },
      },
    ],
  },
  faqs: {
    title: "FAQs",
    items: [
      {
        question: "How do I tailor this for a new client?",
        answer:
          "Update the content object in `lib/landing-config.ts` or source data from your CMS. The UI updates automatically.",
      },
      {
        question: "Can I integrate a CMS or headless backend?",
        answer:
          "Yes. The sections accept any data shape—you can fetch from your preferred CMS using Next.js server components.",
      },
      {
        question: "Is the template production ready?",
        answer:
          "It includes accessibility-friendly markup, semantic HTML, and performance best practices out of the box.",
      },
    ],
  },
  contact: {
    title: "Let\'s plan your next launch",
    description:
      "Share a few details about the project and we\'ll respond within one business day.",
    email: "hello@acmesolutions.co",
    phone: "+1 (555) 123-4567",
  },
  footer: {
    links: [
      { label: "Capabilities", href: "#services" },
      { label: "FAQs", href: "#faqs" },
      { label: "Contact", href: "#contact" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
    copyright: "© " + new Date().getFullYear() + " Acme Solutions. All rights reserved.",
  },
};

