export default function Wordmark({ withLabel = true }: { withLabel?: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="12" stroke="#c68a2e" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="7.5" stroke="#c68a2e" strokeWidth="1.3" />
        <path d="M14 2.5V25.5M2.5 14H25.5" stroke="#f5efe2" strokeWidth="1.3" />
        <circle cx="14" cy="14" r="2.3" fill="#c68a2e" />
      </svg>
      {withLabel && <span className="wordmark">Ìdánwò</span>}
    </span>
  )
}
