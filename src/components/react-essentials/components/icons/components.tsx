export default function Components() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
      <defs>
        <linearGradient id="gradComponents" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6B21A8" />
          <stop offset="100%" stop-color="#0EA5E9" />
        </linearGradient>
      </defs>

      <rect x="20" y="50" width="90" height="50" rx="10" ry="10" fill="url(#gradComponents)" opacity="0.9" />

      <rect x="50" y="20" width="90" height="50" rx="10" ry="10" fill="url(#gradComponents)" opacity="0.9" />

      <rect
        x="20"
        y="50"
        width="90"
        height="50"
        rx="10"
        ry="10"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        opacity="0.8"
      />
      <rect
        x="50"
        y="20"
        width="90"
        height="50"
        rx="10"
        ry="10"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        opacity="0.8"
      />
    </svg>
  );
}
