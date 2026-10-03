import { useReveal } from "@/hooks/use-reveal";
import { OVERVIEW_STAGES } from "@/lib/site-content";
import { Section, SectionLabel } from "./primitives";

export function ServiceOverview() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section className="border-y border-border/60">
      <div ref={ref}>
        <SectionLabel>Quick Overview</SectionLabel>
        <h2 data-reveal className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05]">
          Our Digital Marketing Services
        </h2>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-px w-full bg-gradient-to-r from-primary/60 via-primary/30 to-transparent md:block"
          />
          {OVERVIEW_STAGES.map((stage, i) => (
            <li key={stage.title} data-reveal className="relative md:pr-6">
              <span
                aria-hidden
                className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)] md:static md:mb-8 md:block"
              />
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold leading-snug">
                {stage.title}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {stage.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}