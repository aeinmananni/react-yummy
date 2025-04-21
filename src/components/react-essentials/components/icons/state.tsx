export default function State() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 100">
      <defs>
        <linearGradient id="gradState" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6B21A8" />
          <stop offset="100%" stop-color="#0EA5E9" />
        </linearGradient>
      </defs>

      <rect x="30" y="35" width="120" height="30" rx="15" ry="15" fill="url(#gradState)" opacity="0.9" />

      <circle cx="70" cy="50" r="12" fill="#fff" stroke="url(#gradState)" stroke-width="3" />

      <text
        x="100"
        y="53"
        font-size="14"
        font-family="Consolas, monospace"
        fill="url(#gradState)"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {'Set'}
      </text>
    </svg>
  );
}
