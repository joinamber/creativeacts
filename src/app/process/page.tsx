import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process — Creative Acts",
};

const STEPS = [
  {
    n: "01",
    title: "Discovery & Ideation",
    body: "We start by deeply understanding user needs and context, bringing together designers, engineers, and thought leaders to brainstorm bold ideas and identify opportunities for human-first innovation.",
  },
  {
    n: "02",
    title: "Rapid Prototyping & Experimentation",
    body: "Leveraging lean, iterative cycles, we quickly build prototypes and test ideas in real-world scenarios. This allows us to learn fast, validate concepts early, and pivot as needed.",
  },
  {
    n: "03",
    title: "Collaborative Refinement",
    body: "Through open workshops and public feedback, we refine our prototypes using continuous, interdisciplinary collaboration — fostering cross-domain creativity and transparency.",
  },
  {
    n: "04",
    title: "Practical Integration",
    body: "Once validated, ideas are scaled into robust solutions through agile methodologies, ensuring that each innovation is both cutting-edge and practical enough to address real challenges.",
  },
  {
    n: "05",
    title: "Continuous Learning",
    body: "Our process is an ongoing loop of discovery, prototyping, and refinement. By staying open to new insights and adapting quickly, our work always evolves to meet changing human needs.",
  },
];

export default function ProcessPage() {
  return (
    <section className="container-page pt-20 pb-28 md:pt-28">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-6">
        Our Process
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--ink)] max-w-2xl">
        Rapid iteration, creative exploration
      </h1>
      <p className="mt-6 text-[var(--ink-soft)] max-w-2xl leading-relaxed">
        We blend rapid iteration with creative exploration to build
        technology that truly serves people — agile and rigorous at once.
      </p>

      <div className="mt-16 space-y-14 max-w-3xl">
        {STEPS.map((s) => (
          <div key={s.n} className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr] gap-4">
            <span className="font-display text-2xl md:text-3xl text-[var(--accent-soft)]">
              {s.n}
            </span>
            <div className="border-l border-[var(--hairline)] pl-6 md:pl-10">
              <h2 className="font-display text-2xl text-[var(--ink)] mb-3">
                {s.title}
              </h2>
              <p className="text-sm md:text-base text-[var(--ink-soft)] leading-relaxed">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-[var(--hairline)]">
        <p className="text-sm text-[var(--ink-soft)]">
          Read more about the thinking behind our approach at{" "}
          <a
            href="https://www.coaltlab.com/process"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--ink)] underline underline-offset-4"
          >
            coaltlab.com/process
          </a>
          .
        </p>
      </div>
    </section>
  );
}
