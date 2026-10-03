import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { CONTACT, SERVICE_TAGS } from "@/lib/site-content";
import { Section, SectionLabel } from "./primitives";

const fieldClass =
  "w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  // Static site: the form composes an email. Swap for a form service later.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Company: ${data.get("company")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `New enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact" className="border-t border-border/60">
      <div ref={ref} className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h3 data-reveal className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05]">
            Let's Talk About <span className="text-primary">Your Business.</span>
          </h3>
          <p data-reveal className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Have a project in mind? Tell us what you're looking to achieve and let's explore how
            BoostSphere can help.
          </p>

          <ul data-reveal className="mt-10 space-y-5">
            <li className="flex items-center gap-4 text-sm">
              <MapPin aria-hidden className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">
                {CONTACT.company} — {CONTACT.location}
              </span>
            </li>
            <li className="flex items-center gap-4 text-sm">
              <Phone aria-hidden className="h-4 w-4 text-primary" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-4 text-sm">
              <Mail aria-hidden className="h-4 w-4 text-primary" />
              <a href={`mailto:${CONTACT.email}`} className="text-muted-foreground hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
          </ul>

          <ul data-reveal className="mt-10 flex gap-3">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                {/* TODO: replace "#" with the official profile URL */}
                <a
                  href={s.href}
                  className="inline-flex rounded-full border border-border px-5 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form data-reveal onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-9">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input required name="name" autoComplete="name" className={fieldClass} placeholder="Your name" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
              <input required type="email" name="email" autoComplete="email" className={fieldClass} placeholder="you@company.com" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+91" />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Company</span>
              <input name="company" autoComplete="organization" className={fieldClass} placeholder="Company name" />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                Service interested in
              </span>
              <select name="service" defaultValue={SERVICE_TAGS[0]} className={fieldClass}>
                {SERVICE_TAGS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                name="message"
                rows={4}
                className={fieldClass}
                placeholder="Tell us about your goals"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
          >
            Get a Free Consultation <span aria-hidden>→</span>
          </button>
          <p aria-live="polite" className="mt-4 min-h-5 text-xs text-muted-foreground">
            {sent ? "Your email client should now be open with your enquiry ready to send." : ""}
          </p>
        </form>
      </div>
    </Section>
  );
}