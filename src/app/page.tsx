import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container-page pt-24 pb-28 md:pt-36 md:pb-40">
        <p className="animate-fade-up text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--muted)] mb-6">
          Creative Acts
        </p>

        <h1 className="animate-fade-up font-display text-[2.5rem] leading-[1.08] sm:text-6xl md:text-7xl text-[var(--ink)] max-w-4xl">
          Discovery takes creativity.
          <br />
          <span className="text-[var(--ink-soft)]">Change takes acts.</span>
          <br />
          We do both.
        </h1>

        <p
          className="animate-fade-up mt-8 text-base md:text-lg text-[var(--ink-soft)] max-w-2xl leading-relaxed"
          style={{ animationDelay: "0.1s" }}
        >
          Creative Acts builds solutions at the intersection of innovation and
          design. We embody the forward-deployed mindset that pushes the
          boundaries of what&rsquo;s possible.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "0.18s" }}
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] text-sm hover:opacity-85 transition-opacity"
          >
            Explore our projects
          </Link>
          <Link
            href="/process"
            className="px-6 py-3 rounded-full border border-[var(--hairline)] text-[var(--ink)] text-sm hover:border-[var(--ink)] transition-colors"
          >
            Our process
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--hairline)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                01
              </span>
              <h2 className="font-display text-2xl mt-4 mb-3 text-[var(--ink)]">
                Discovery
              </h2>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                We start from curiosity — mapping human needs, technology
                shifts, and the overlooked spaces where new value can be
                created.
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                02
              </span>
              <h2 className="font-display text-2xl mt-4 mb-3 text-[var(--ink)]">
                Design
              </h2>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                Ideas take shape through rapid, hands-on prototyping —
                iterating in public, with people, not just for them.
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                03
              </span>
              <h2 className="font-display text-2xl mt-4 mb-3 text-[var(--ink)]">
                Acts
              </h2>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                We ship. Forward-deployed and embedded, we turn validated
                ideas into real, working solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--hairline)]">
        <div className="container-page py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ink)]">
              A lab for what comes next
            </h2>
            <p className="mt-4 text-[var(--ink-soft)] max-w-xl leading-relaxed">
              From agentic infrastructure to human-centered learning, our
              initiatives explore the intersections of technology, design,
              and innovation.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm text-[var(--ink)] underline underline-offset-4 decoration-[var(--hairline)] hover:decoration-[var(--ink)] transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </section>
    </>
  );
}
