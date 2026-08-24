"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--hairline)]">
      <div className="container-page flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-[var(--ink)]"
          onClick={() => setOpen(false)}
        >
          Creative Acts
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.filter((l) => l.href !== "/").map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-full bg-[var(--ink)] text-[var(--bg)] hover:opacity-85 transition-opacity"
          >
            Get in touch
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-5 h-px bg-[var(--ink)]" />
          <span className="w-5 h-px bg-[var(--ink)]" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--hairline)] px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--ink-soft)]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
