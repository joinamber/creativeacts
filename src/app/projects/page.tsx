import type { Metadata } from "next";

const description =
  "Exploring the intersections of technology, design, and innovation to create AI-powered solutions that are human-centered and impactful.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "https://www.adptv.xyz/creativeacts/projects",
  },
  openGraph: {
    title: "Projects — Creative Acts",
    description,
    url: "https://www.adptv.xyz/creativeacts/projects",
  },
  twitter: {
    title: "Projects — Creative Acts",
    description,
  },
};

const PROJECTS = [
  {
    name: "HyperPersona",
    category: "Behavioral Systems",
    description:
      "Mapping human decision patterns through AI-driven behavioral segmentation.",
    href: "https://hyperpersona.cc/",
  },
  {
    name: "Adaptive ERP",
    category: "Business Enablers",
    description:
      "Reimagining ERP systems with AI-native workflows for leaner, smarter operations.",
    href: "https://adptv.xyz/",
  },
  {
    name: "The Contrarian Economist",
    category: "Creative Endeavors",
    description:
      "A podcast unearthing overlooked data and counterintuitive truths shaping the modern economy with AI hosts.",
    href: "https://open.spotify.com/show/5qMwiP1Ismiv6lvJ02exns",
  },
  {
    name: "Agentic Infrastructure",
    category: "Agentic Commerce",
    description:
      "Authenticating AI agents for secure transactions and delegated action — the trust layer for an agentic future.",
    href: "https://kyan.coaltlab.com/",
  },
  {
    name: "Agentic Catalog Management",
    category: "Agentic Commerce",
    description:
      "Agentic eCommerce uses AI to automatically categorize, tag, and enrich your product listings for every platform.",
    href: "https://agenticommerce.coaltlab.com/",
  },
  {
    name: "VibeCraft",
    category: "Learning & Education",
    description:
      "Cohort-based learning to bring your ideas to life, no coding skill required.",
    href: "https://vibecraft.coaltlab.com/",
  },
  {
    name: "Day of AI Singapore",
    category: "Learning & Education",
    description:
      "AI Education for Bold Young Learners, powered by MIT RAISE & i2 Learning.",
    href: "https://www.dayofaisingapore.com/",
  },
];

export default function Projects() {
  return (
    <section className="container-page pt-20 pb-28 md:pt-28">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-6">
        Projects
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--ink)] max-w-2xl">
        Our initiatives
      </h1>
      <p className="mt-6 text-[var(--ink-soft)] max-w-xl leading-relaxed">
        Exploring the intersections of technology, design, and innovation to
        create AI-powered solutions that are human-centered and impactful.
      </p>

      <div className="mt-16 border-t border-[var(--hairline)]">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group grid md:grid-cols-[1fr_auto_2fr] gap-3 md:gap-10 items-baseline py-8 border-b border-[var(--hairline)] hover:bg-black/[0.02] transition-colors -mx-4 px-4"
          >
            <h2 className="font-display text-2xl text-[var(--ink)] group-hover:opacity-70 transition-opacity">
              {p.name}
            </h2>
            <span className="text-xs uppercase tracking-wider text-[var(--muted)] md:whitespace-nowrap">
              {p.category}
            </span>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
              {p.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
