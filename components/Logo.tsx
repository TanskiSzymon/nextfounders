export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="6"
        fill="#000000"
        stroke="rgba(255,255,255,0.14)"
      />
      <path
        d="M10 23 V9 L22 23 V9"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25.5" cy="23" r="1.8" fill="#00ffff" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="text-[15px] tracking-tight">
        <span className="font-medium text-white">next</span>
        <span className="text-ghost">founders</span>
      </span>
    </span>
  );
}
