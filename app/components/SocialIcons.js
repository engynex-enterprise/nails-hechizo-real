// Íconos de marca en SVG (lucide-react ya no incluye logos de redes sociales).

export function Instagram({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Facebook({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TikTok({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3c.3 2.2 1.6 3.6 3.7 3.8v2.6c-1.2.1-2.4-.2-3.6-.9v5.8c0 3.4-2.5 5.7-5.6 5.7-2.9 0-5.2-2.1-5.2-5 0-3 2.4-5.1 5.6-4.8v2.7c-.4-.1-.9-.2-1.3-.1-1.2.1-2 .9-1.9 2.1.1 1.2 1 2 2.2 1.9 1.3-.1 2-1 2-2.4V3z" />
    </svg>
  );
}
