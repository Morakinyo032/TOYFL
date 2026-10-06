export function Logo() {
  const ticks = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2
    const x1 = 14 + 13.2 * Math.cos(angle)
    const y1 = 14 + 13.2 * Math.sin(angle)
    const x2 = 14 + 11.8 * Math.cos(angle)
    const y2 = 14 + 11.8 * Math.sin(angle)
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#27425e" strokeWidth="1" />
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.5rem 0' }}>
      <svg width="42" height="42" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {ticks}
        <circle cx="14" cy="14" r="10" stroke="#c68a2e" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="6" stroke="#c68a2e" strokeWidth="1.2" />
        <path d="M14 4V24M4 14H24" stroke="#f5efe2" strokeWidth="1.2" />
        <circle cx="14" cy="14" r="2" fill="#c68a2e" />
      </svg>
      <span
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#1e2a38',
          letterSpacing: '-0.01em',
        }}
      >
        SYLPT
      </span>
    </div>
  )
}
