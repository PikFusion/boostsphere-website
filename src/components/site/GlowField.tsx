const ORBS = [
  { className: "left-[-8%] top-[-8%] h-[34vw] w-[34vw] bg-primary/70", blur: 80, pulse: "7s", pd: "0s" },
  { className: "right-[-6%] top-[4%] h-[28vw] w-[28vw] bg-primary-glow/60", blur: 70, pulse: "9s", pd: "-2s" },
  { className: "left-[18%] top-[24%] h-[22vw] w-[22vw] bg-primary/65", blur: 60, pulse: "6s", pd: "-3s" },
  { className: "right-[18%] top-[36%] h-[26vw] w-[26vw] bg-primary-glow/55", blur: 75, pulse: "8s", pd: "-5s" },
  { className: "left-[-6%] top-[50%] h-[30vw] w-[30vw] bg-primary/65", blur: 80, pulse: "10s", pd: "-1s" },
  { className: "right-[2%] top-[62%] h-[24vw] w-[24vw] bg-primary/60", blur: 65, pulse: "7.5s", pd: "-4s" },
  { className: "left-[34%] top-[70%] h-[20vw] w-[20vw] bg-primary-glow/55", blur: 60, pulse: "6.5s", pd: "-6s" },
  { className: "left-[52%] top-[10%] h-[18vw] w-[18vw] bg-primary-glow/50", blur: 55, pulse: "8.5s", pd: "-7s" },
  { className: "right-[36%] top-[86%] h-[18vw] w-[18vw] bg-primary/55", blur: 55, pulse: "9.5s", pd: "-2.5s" },
];

/** Ambient lime glow orbs drifting and pulsing behind the whole page. */
export function GlowField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      {ORBS.map((o, i) => (
        <span
          key={i}
          className={`absolute rounded-full orb-pulse ${o.className}`}
          style={{
            filter: `blur(${o.blur}px)`,
            animationDuration: o.pulse,
            animationDelay: o.pd,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,color-mix(in_oklab,var(--background)_45%,transparent),color-mix(in_oklab,var(--background)_20%,transparent)_80%)]" />
    </div>
  );
}