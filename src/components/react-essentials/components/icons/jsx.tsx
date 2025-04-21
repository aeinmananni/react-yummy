export default function Jsx() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
      <defs>
        <linearGradient id="gradJSX" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6B21A8" />
          <stop offset="100%" stop-color="#0EA5E9" />
        </linearGradient>
      </defs>

      <circle cx="75" cy="75" r="60" fill="url(#gradJSX)" opacity="0.1" />

      <text
        x="50%"
        y="55%"
        font-size="48"
        font-family="Consolas, monospace"
        fill="url(#gradJSX)"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {'< />'}
      </text>
    </svg>
  );
}
