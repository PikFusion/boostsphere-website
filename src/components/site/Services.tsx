import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { SERVICES } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Section, SectionLabel } from "./primitives";

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(SERVICES[0]?.number ?? null);

  return (
    <Section id="services" className="border-y border-border/60">
      <div ref={ref}>
        <SectionLabel>Services</SectionLabel>
        <div
          data-reveal
          className="mt-6 max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.05]"
        >
          Everything Your Brand Needs to{" "}
          <span className="text-primary">Grow Digitally.</span>
        </div>

        <div className="mt-14 border-t border-border">
          {SERVICES.map((s) => {
            const open = active === s.number;
            return (
              <div key={s.number} data-reveal className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setActive(open ? null : s.number)}
                  aria-expanded={open}
                  className="group flex w-full items-start gap-5 py-7 text-left transition-colors hover:text-primary sm:items-center sm:gap-8"
                >
                  <span
                    className={cn(
                      "font-mono text-sm transition-colors",
                      open ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {s.number}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-[clamp(1.35rem,3.2vw,2.25rem)] font-semibold leading-tight">
                      {s.title}
                    </span>
                    <span className="mt-2 block max-w-xl text-sm text-muted-foreground">
                      {s.summary}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-lg transition-all duration-300 sm:mt-0",
                      open
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "group-hover:border-primary",
                    )}
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-wrap gap-2 pb-8 sm:pl-14">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border bg-surface/50 px-4 py-2 text-xs text-muted-foreground sm:text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}