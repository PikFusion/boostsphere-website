import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

export function CtaLink({
  href = "#contact",
  variant = "primary",
  className,
  children,
  ...rest
}: ComponentProps<"a"> & { variant?: "primary" | "ghost" }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:shadow-[0_18px_50px_-16px_var(--primary)] hover:brightness-110"
          : "border border-border text-foreground hover:border-primary hover:text-primary",
        className,
      )}
      {...rest}
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      data-reveal
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary"
    >
      <span className="h-px w-8 bg-primary" aria-hidden />
      {children}
    </span>
  );
}

export function Section({
  id,
  className,
  children,
  ...rest
}: ComponentProps<"section">) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32", className)}
      {...rest}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}