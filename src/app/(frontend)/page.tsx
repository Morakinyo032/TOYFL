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

        {content.sections?.map((sec: any) => (
          <div className="card quiet" key={sec.id || sec.label}>
            <h2>{sec.label}</h2>
            <p className="muted">{sec.body}</p>
          </div>
        ))}

        <h2>{content.notesHeading}</h2>
        <div className="card quiet">
          {content.notes?.map((note: any) => (
            <p key={note.id || note.text} style={{ marginTop: 0 }}>
              {note.text}
            </p>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link className="btn" href="/awon-idanwo">
            {content.ctaText}
          </Link>
        </div>
      </main>
    </>
  )
}
