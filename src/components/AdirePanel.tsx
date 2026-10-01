export default function AdirePanel() {
  // A repeating resist-dye motif (concentric diamonds + dots), styled as a
  // woven fabric strip. Original vector artwork in the site's own palette -
  // not a photograph, so there's no licensing question around using it.
  const tiles = Array.from({ length: 10 }, (_, i) => (
    <g key={i} transform={`translate(${i * 60}, 0)`}>
      <rect x="0" y="0" width="60" height="64" fill={i % 2 === 0 ? '#1e2a38' : '#27425e'} />
      <path
        d="M30 10 L46 32 L30 54 L14 32 Z"
        fill="none"
        stroke="#c68a2e"
        strokeWidth="1.4"
        opacity="0.85"
      />
      <circle cx="30" cy="32" r="4" fill="#c68a2e" opacity="0.9" />
      <circle cx="30" cy="12" r="1.6" fill="#f5efe2" opacity="0.6" />
      <circle cx="30" cy="52" r="1.6" fill="#f5efe2" opacity="0.6" />
    </g>
  ))

  return (
    <div style={{ overflow: 'hidden', lineHeight: 0 }} aria-hidden="true">
      <svg viewBox="0 0 600 64" width="100%" height="64" preserveAspectRatio="xMidYMid slice">
        {tiles}
      </svg>
    </div>
  )
}
