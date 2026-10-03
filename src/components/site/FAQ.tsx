import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { FAQS } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Section, SectionLabel } from "./primitives";

export function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 data-reveal className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05]">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div data-reveal className="border-t border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.q}
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-180 text-primary" : "text-muted-foreground",
                      )}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
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