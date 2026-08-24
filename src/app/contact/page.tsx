import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Creative Acts",
};

const CHANNELS = [
  {
    label: "Email",
    value: "amber@adptv.xyz",
    href: "mailto:amber@adptv.xyz",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/company/adptvintel",
    href: "https://www.linkedin.com/company/adptvintel/",
  },
  {
    label: "X",
    value: "@gocreativeacts",
    href: "https://x.com/gocreativeacts",
  },
];

export default function Contact() {
  return (
    <section className="container-page pt-20 pb-28 md:pt-28">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-6">
        Contact
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--ink)] max-w-xl">
        Let&rsquo;s build something
      </h1>
      <p className="mt-6 text-[var(--ink-soft)] max-w-lg leading-relaxed">
        Have a bold idea, a hard problem, or a project you think we&rsquo;d
        love? Reach out — we&rsquo;d love to hear from you.
      </p>

      <div className="mt-16 border-t border-[var(--hairline)] max-w-2xl">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="group flex items-center justify-between py-8 border-b border-[var(--hairline)] hover:bg-black/[0.02] transition-colors -mx-4 px-4"
          >
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
              {c.label}
            </span>
            <span className="font-display text-xl md:text-2xl text-[var(--ink)] group-hover:opacity-70 transition-opacity">
              {c.value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
