import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { APPROACH_STEPS } from "@/lib/site-content";
import { prefersReducedMotion } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { BusIcon } from "./BusIcon";
import { SectionLabel } from "./primitives";

const N = APPROACH_STEPS.length;

export function ApproachJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const busRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setActive(N - 1);
      setProgress(1);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const stage = stageRef.current;
      if (!track || !stage) return;

        const distance = () => (N - 1) * getStopWidth();

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: stage,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setProgress(self.progress);
              setActive(Math.round(self.progress * (N - 1)));
            },
          },
        });

        const bob = gsap.to(busRef.current, {
          y: -6,
          rotate: -0.6,
          duration: 1.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        return () => {
          bob.kill();
          tween.scrollTrigger?.kill();
          tween.kill();
        };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="approach" ref={sectionRef} className="relative scroll-mt-0">
      {/* ---------- Pinned horizontal journey (all viewports) ---------- */}
      <div
        ref={stageRef}
        className="relative block h-[100svh] overflow-hidden border-y border-border/60"
      >
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
        />

        <header className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 sm:pt-28">
          <SectionLabel>Our Approach</SectionLabel>
          <div className="mt-5 font-display text-[clamp(1.6rem,6vw,3.25rem)] font-bold leading-tight">
            How We Get <span className="text-primary">Results.</span>
          </div>
        </header>

        {/* road */}
        <div aria-hidden className="absolute inset-x-0 bottom-[18%] z-0">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="mt-8 h-px w-full [background:repeating-linear-gradient(90deg,color-mix(in_oklab,var(--foreground)_22%,transparent)_0_28px,transparent_28px_60px)]" />
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* moving track */}
        <div
          ref={trackRef}
          className="absolute bottom-[18%] left-0 z-10 flex items-end will-change-transform"
          style={
            {
              "--stop-w": "clamp(240px, 78vw, 560px)",
              paddingLeft: "calc(30vw - var(--stop-w) / 2)",
            } as React.CSSProperties
          }
        >
          {APPROACH_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative shrink-0 pb-24"
              style={{ width: "var(--stop-w)" }}
            >
              <div
                className={cn(
                  "mx-auto w-[min(360px,88%)] transition-all duration-500",
                  active === i ? "opacity-100" : "opacity-35 blur-[1px]",
                )}
              >
                <span
                  className={cn(
                    "font-display text-5xl font-bold leading-none transition-colors duration-500 sm:text-6xl",
                    active === i ? "text-primary text-glow" : "text-muted-foreground/40",
                  )}
                >
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {/* stop marker */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <span
                  className={cn(
                    "block h-3 w-3 rounded-full transition-all duration-500",
                    active >= i
                      ? "bg-primary shadow-[0_0_24px_var(--primary)]"
                      : "bg-muted-foreground/40",
                  )}
                />
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 top-3 h-10 w-px -translate-x-1/2 transition-colors duration-500",
                    active >= i ? "bg-primary/60" : "bg-border",
                  )}
                />
              </div>
            </div>
          ))}
        </div>

        {/* bus */}
        <div
          ref={busRef}
          className="absolute bottom-[calc(18%-4px)] left-[30vw] z-20 w-[clamp(96px,26vw,230px)] -translate-x-1/2 will-change-transform"
        >
          <BusIcon className="w-full drop-shadow-[0_14px_40px_color-mix(in_oklab,var(--primary)_45%,transparent)]" />
        </div>

        {/* progress */}
        <div className="absolute inset-x-0 bottom-8 z-20 mx-auto flex w-full max-w-7xl items-center gap-4 px-5 sm:px-8">
          <span className="font-mono text-xs text-primary">
            {APPROACH_STEPS[active]?.number}
          </span>
          <div className="h-px flex-1 bg-border">
            <div
              className="h-px bg-primary transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs text-muted-foreground">07</span>
        </div>
      </div>
    </section>
  );
}

function getStopWidth() {
  if (typeof window === "undefined") return 480;
  return Math.min(560, Math.max(240, window.innerWidth * 0.78));
}