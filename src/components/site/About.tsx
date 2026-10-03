import { useReveal } from "@/hooks/use-reveal";
import { Section, SectionLabel } from "./primitives";

const ECOSYSTEM = [
  "Social media",
  "Content creation",
  "Paid advertising",
  "SEO",
  "Branding",
  "Websites",
];

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="about">
      <div ref={ref} className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionLabel>About BoostSphere</SectionLabel>
          <h2
            data-reveal
            className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05]"
          >
            Grow Your Business With <span className="text-primary">Digital Marketing</span>
          </h2>
          <p data-reveal className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            BoostSphere Digital is a result-driven digital marketing and creative company helping
            businesses build their online presence, generate leads and create memorable brands.
          </p>
          <p data-reveal className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            We combine strategy, creativity and performance — so every campaign is planned with
            intent, produced with craft and measured against real business outcomes.
          </p>
        </div>

        <div data-reveal className="relative">
          <div className="glass-panel rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Service ecosystem
            </p>
            <ul className="mt-6 divide-y divide-border">
              {ECOSYSTEM.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-center justify-between py-4 transition-colors hover:text-primary"
                >
                  <span className="font-display text-lg font-medium">{item}</span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden
            className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
          />
        </div>
      </div>
    </Section>
  );
}