import { useReveal } from "@/hooks/use-reveal";
import { CtaLink, Section } from "./primitives";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[380px] w-[680px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[140px]"
      />
      <div ref={ref} className="relative text-center">
        <h2 data-reveal className="mx-auto max-w-4xl font-display text-[clamp(2.2rem,6.5vw,5rem)] font-bold leading-[1]">
          Let's Grow Your Business
        </h2>
        <p data-reveal className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Let's build a stronger digital presence, reach the right audience and create measurable
          growth for your business.
        </p>
        <div data-reveal className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaLink href="#contact">Let's Grow Your Brand</CtaLink>
          <CtaLink href="#contact" variant="ghost">
            Get a Free Consultation
          </CtaLink>
        </div>
      </div>
    </Section>
  );
}