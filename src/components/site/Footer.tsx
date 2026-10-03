import { CONTACT, NAV_LINKS } from "@/lib/site-content";
import logoAsset from "@/assets/logo.png";

const FOOTER_SERVICES = [
  "Digital Marketing",
  "Content Creation",
  "Web Development",
  "Branding",
  "UI/UX",
  "Social Media",
  "Ads Management",
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src={logoAsset}
              alt="BoostSphere Digital — Your B2B & D2C Growth Partner"
              loading="lazy"
              className="mb-6 h-32 w-auto object-contain rounded-full"
            />
            <p className="font-display text-[clamp(1.6rem,4vw,2.5rem)] font-bold leading-tight">
              BOOSTSPHERE <span className="text-primary">DIGITAL</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Your B2B & D2C Growth Partner
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {CONTACT.location}
              <br />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {CONTACT.phone}
              </a>
              <br />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </p>
          </div>

          <nav aria-label="Footer">
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Navigate
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Services</div>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© BoostSphere Digital. All Rights Reserved.</p>
          <ul className="flex gap-5">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-colors hover:text-primary">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}