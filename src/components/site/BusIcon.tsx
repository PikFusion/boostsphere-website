export function BusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 96"
      className={className}
      role="img"
      aria-label="Stylised BoostSphere bus travelling the growth route"
    >
      <defs>
        <linearGradient id="bs-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary-glow)" />
          <stop offset="100%" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      {/* body */}
      <path
        d="M14 20c0-7 5-12 12-12h140c14 0 26 6 34 16l14 17c3 4 5 9 5 14v13c0 6-5 11-11 11H22c-5 0-8-4-8-8V20z"
        fill="url(#bs-body)"
      />
      {/* window band */}
      <path
        d="M30 22h116c2 0 3 1 3 3v20c0 2-1 3-3 3H30c-2 0-3-1-3-3V25c0-2 1-3 3-3z"
        fill="oklch(0.14 0.005 150)"
        opacity="0.85"
      />
      <path
        d="M166 22h6c9 0 17 4 22 11l6 8c1 2 0 4-2 4h-32c-2 0-3-1-3-3V25c0-2 1-3 3-3z"
        fill="oklch(0.14 0.005 150)"
        opacity="0.85"
      />
      {/* stripe */}
      <rect x="14" y="58" width="205" height="5" fill="oklch(0.14 0.005 150)" opacity="0.6" />
      {/* wheels */}
      <circle cx="62" cy="80" r="13" fill="oklch(0.14 0.005 150)" />
      <circle cx="62" cy="80" r="5" fill="var(--primary)" />
      <circle cx="172" cy="80" r="13" fill="oklch(0.14 0.005 150)" />
      <circle cx="172" cy="80" r="5" fill="var(--primary)" />
      {/* headlight */}
      <rect x="205" y="48" width="12" height="6" rx="3" fill="oklch(0.99 0.02 110)" />
    </svg>
  );
}