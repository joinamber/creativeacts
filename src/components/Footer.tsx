import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] mt-32">
      <div className="container-page py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <div className="font-display text-2xl text-[var(--ink)]">
            Creative Acts
          </div>
          <p className="mt-2 text-sm text-[var(--ink-soft)] max-w-sm">
            Discovery takes creativity. Change takes acts. We do both.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-[var(--muted)] uppercase tracking-wider text-xs">
              Site
            </span>
            <Link href="/projects" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">
              Projects
            </Link>
            <Link href="/process" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">
              Our Process
            </Link>
            <Link href="/contact" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[var(--muted)] uppercase tracking-wider text-xs">
              Connect
            </span>
            <a
              href="mailto:amber@adptv.xyz"
              className="text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              amber@adptv.xyz
            </a>
            <a
              href="https://www.linkedin.com/company/adptvintel/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/gocreativeacts"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              @gocreativeacts
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--hairline)]">
        <div className="container-page py-6 text-xs text-[var(--muted)] flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Creative Acts. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
