import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SERVICE_TAGS } from "@/lib/site-content";
import { prefersReducedMotion } from "@/hooks/use-reveal";
import { CtaLink } from "./primitives";

const HEADLINE = ["We Build Brands.", "Drive Growth", "Create Impact"];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-eyebrow]", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          "[data-hero-line]",
          { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.25",
        )
        .from("[data-hero-copy]", { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
        .from("[data-hero-tag]", { y: 14, opacity: 0, duration: 0.5, stagger: 0.05 }, "-=0.4")
        .from("[data-hero-cta]", { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.35");
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      <div aria-hidden className="grain-bg absolute inset-0" />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <p
          data-hero-eyebrow
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Your B2B & D2C Growth Partner
        </p>

        <h1 className="font-display text-[clamp(2.6rem,8.5vw,7rem)] font-bold leading-[0.95] text-shadow-hero">
          {HEADLINE.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span data-hero-line className="block">
                {i === 2 ? (

                  <>
                    Create <span className="text-primary text-glow">Impact</span>
                  </>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        <p data-hero-copy className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          BoostSphere is a digital marketing and creative Digital Company helping ambitious
          businesses build stronger brands, reach the right audience and turn digital attention
          into measurable growth.
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
          {SERVICE_TAGS.map((tag) => (
            <li
              key={tag}
              data-hero-tag
              className="rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <span data-hero-cta className="contents">
            <CtaLink href="#contact">Let's Grow Your Brand</CtaLink>
          </span>
          <span data-hero-cta className="contents">
            <CtaLink href="#contact" variant="ghost">
              Get a Free Consultation
            </CtaLink>
          </span>
        </div>
      </div>
    </section>
  );
}