import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { CtaLink } from "./primitives";
import logo from "@/assets/logo.png";
import { log } from "console";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-b border-border" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#home" className="flex items-center gap-2.5">
          <div className="h-15 w-15 rounded-full p-2 flex items-center justify-center drop-shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
            <img
              src={logo}
              alt="BoostSphere Digital logo"
              className="h-full w-full object-contain rounded-full"
              width={36}
              height={36}
            />
          </div>
          <span className="text-base font-bold tracking-tight" style={{ fontFamily: 'Garet, sans-serif' }}>
            BoostSphere <span className="text-primary">Digital</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <CtaLink className="hidden px-5 py-2.5 text-xs md:inline-flex">
            Let's Grow Your Brand
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="glass-panel max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border px-5 pb-8 pt-4 xl:hidden"
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((l) => (
            <li key={l.href} className="border-b border-border/60">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-lg font-medium transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <CtaLink className="mt-6 w-full" onClick={() => setOpen(false)}>
          Let's Grow Your Brand
        </CtaLink>
      </div>
    </header>
  );
}