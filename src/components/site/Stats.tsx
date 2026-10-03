import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion, useReveal } from "@/hooks/use-reveal";
import { Section, SectionLabel } from "./primitives";

/**
 * Metrics are intentionally placeholders — no figures have been supplied.
 * Replace `value` with a real number (and keep `suffix`) to enable the count-up.
 */
const METRICS: { label: string; value: number | null; suffix?: string }[] = [
  { label: "Brands Worked With", value: 35, suffix: "+" },
  { label: "Industries Covered", value: 15, suffix: "+" },
  { label: "Content Pieces Created", value: 200, suffix: "+" },
  { label: "Focused on Lead Generation", value: 100, suffix: "%" },
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string | undefined }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(prefersReducedMotion() ? value : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const obj = { n: 0 };
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(obj.n)),
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section className="py-20 md:py-24">
      <div ref={ref}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>By the numbers</SectionLabel>
            <div data-reveal className="mt-5 font-display text-[clamp(1.6rem,3.6vw,2.5rem)] font-bold">
              Growth we measure, <span className="text-primary">not guess.</span>
            </div>
          </div>
          <p data-reveal className="max-w-sm text-sm text-muted-foreground">
            A snapshot of our impact and the trust we've built across diverse industries.
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} data-reveal className="bg-background/55 p-7 backdrop-blur-sm sm:p-10">
              <dd className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-none text-primary">
                {m.value === null ? (
                  <span aria-label="Figure to be confirmed">—</span>
                ) : (
                  <CountUp value={m.value} suffix={m.suffix} />
                )}
              </dd>
              <dt className="mt-4 text-sm text-muted-foreground">{m.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}