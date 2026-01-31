export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg width="600" height="120" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text
        x="300"
        y="70"
        textAnchor="middle"
        fill="#1A3C27"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="700"
        fontSize="72"
        letterSpacing="2"
      >
        Matcha Bar
      </text>
      <line x1="140" y1="85" x2="460" y2="85" stroke="#2E8B57" strokeWidth="4" />
    </svg>
  )
}
