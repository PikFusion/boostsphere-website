import { useReveal } from "@/hooks/use-reveal";
import { INDUSTRIES } from "@/lib/site-content";
import { Section, SectionLabel } from "./primitives";

export function Industries() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="industries" className="border-y border-border/60">
      <div ref={ref}>
        <SectionLabel>Industries</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <h2 data-reveal className="max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05]">
            Brands We've Worked With
          </h2>
          <p data-reveal className="max-w-sm text-sm text-muted-foreground">
            We create customised digital strategies based on the unique needs of each business.
          </p>
        </div>

        <ul className="mt-14 border-t border-border">
          {INDUSTRIES.map((industry, i) => (
            <li key={industry} data-reveal className="border-b border-border">
              <div className="group relative flex items-center gap-6 overflow-hidden px-1 py-6 sm:py-7">
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-primary/8 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.25rem,3vw,2rem)] font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
                  {industry}
                </span>
                <span
                  aria-hidden
                  className="ml-auto translate-x-4 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  →
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}