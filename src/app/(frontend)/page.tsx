import Link from 'next/link'
import AdirePanel from '@/components/AdirePanel'
import { getPayloadClient } from '@/lib/getPayloadClient'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayloadClient()
  const content = await payload.findGlobal({ slug: 'homepage' })

  return (
    <>
      <section className="hero">
        <svg className="hero-texture" width="100%" height="100%" aria-hidden="true">
          <pattern id="adire-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.6" fill="#c68a2e" opacity="0.35" />
            <circle cx="17" cy="14" r="1.1" fill="#27425e" opacity="0.25" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#adire-dots)" />
        </svg>
        <div className="wrap hero-content" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <h1>{content.heroTitle}</h1>
          <p className="muted">{content.heroSubtitle}</p>
          <p className="muted" style={{ fontSize: '0.85rem' }}>
            {content.heroFullName}
          </p>
        </div>
      </section>

      <AdirePanel />

      <main className="wrap">
        <h2>{content.introHeading}</h2>
        <p>{content.introBody}</p>

        {/* Stats strip */}
        {(content.stats?.length ?? 0) > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0',
              margin: '1.5rem 0 2rem',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              overflow: 'hidden',
              background: 'var(--bg-card)',
            }}
          >
            {content.stats?.map((stat: any, i: number) => (
              <div
                key={stat.id || stat.label}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: '1.1rem 0.5rem',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--border)',
                }}
              >
                <div className="display" style={{ fontSize: '1.6rem', margin: 0, color: 'var(--indigo)' }}>
                  {stat.value}
                </div>
                <div className="muted" style={{ fontSize: '0.8rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {content.sections?.map((sec: any) => (
          <div className="card quiet" key={sec.id || sec.label}>
            <h2>{sec.label}</h2>
            <p className="muted">{sec.body}</p>
          </div>
        ))}

        {/* Scoring bands */}
        {(content.scoringBands?.length ?? 0) > 0 && (
          <>
            <h2>{content.scoringHeading}</h2>
            {content.scoringBands?.map((band: any) => (
              <div className="card quiet" key={band.id || band.bandName} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                <strong style={{ fontFamily: 'Fraunces, serif', color: 'var(--ochre)', minWidth: '4.5rem' }}>
                  {band.rangeLabel}
                </strong>
                <div>
                  <strong>{band.bandName}</strong>
                  <p className="muted" style={{ margin: '0.2rem 0 0' }}>
                    {band.description}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}

        {/* How to prepare */}
        {(content.tips?.length ?? 0) > 0 && (
          <>
            <h2>{content.tipsHeading}</h2>
            <div className="card quiet">
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {content.tips?.map((tip: any) => (
                  <li key={tip.id || tip.text} style={{ marginBottom: '0.5rem' }}>
                    {tip.text}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <h2>{content.notesHeading}</h2>
        <div className="card quiet">
          {content.notes?.map((note: any) => (
            <p key={note.id || note.text} style={{ marginTop: 0 }}>
              {note.text}
            </p>
          ))}
        </div>

        {/* FAQ */}
        {(content.faqs?.length ?? 0) > 0 && (
          <>
            <h2>{content.faqHeading}</h2>
            {content.faqs?.map((faq: any) => (
              <details key={faq.id || faq.question} className="card quiet" style={{ cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600 }}>{faq.question}</summary>
                <p className="muted" style={{ marginBottom: 0, marginTop: '0.6rem' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </>
        )}

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link className="btn" href="/awon-idanwo">
            {content.ctaText}
          </Link>
        </div>
      </main>
    </>
  )
}
