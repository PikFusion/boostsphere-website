import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionLabel } from "./primitives";

const PILLARS = [
  { title: "Transparent work", copy: "You always know what is being done and why." },
  { title: "Honest communication", copy: "Clear updates, no jargon, no vanity reporting." },
  { title: "Measurable results", copy: "Performance judged on outcomes, not impressions alone." },
  { title: "Clear strategies", copy: "Every activity ladders up to a defined objective." },
  { title: "Consistent execution", copy: "Reliable delivery across content, campaigns and channels." },
  { title: "Long-term growth", copy: "Built for durable brand value, not short-lived spikes." },
];

export function WhyBoostSphere() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="why-us">
      <div ref={ref}>
        <SectionLabel>Why BoostSphere</SectionLabel>
        <h2 data-reveal className="mt-8 font-display text-[clamp(2.4rem,9vw,7rem)] font-bold leading-[0.95]">
          Why Choose BoostSphere?
        </h2>
        <p data-reveal className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We do not sell unrealistic promises. We work transparently, communicate honestly and
          focus on real performance that creates genuine value for your business.
        </p>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <li
              key={p.title}
              data-reveal
              className="group bg-background/55 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-surface/70"
            >
              <span
                aria-hidden
                className="block h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300 group-hover:w-8"
              />
              <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}