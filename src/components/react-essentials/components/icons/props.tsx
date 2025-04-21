export default function Props() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 100">
      <defs>
        <linearGradient id="gradProps" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6B21A8" />
          <stop offset="100%" stop-color="#0EA5E9" />
        </linearGradient>
        <marker id="arrowMarker" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="url(#gradProps)" />
        </marker>
      </defs>

      <rect x="10" y="30" width="40" height="40" rx="8" ry="8" fill="url(#gradProps)" opacity="0.9" />

      <rect x="130" y="30" width="40" height="40" rx="8" ry="8" fill="url(#gradProps)" opacity="0.9" />

      <path
        d="M55 50 H125"
        stroke="url(#gradProps)"
        stroke-width="4"
        fill="none"
        marker-end="url(#arrowMarker)"
      />
    </svg>
  );
}
