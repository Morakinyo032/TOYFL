import Link from 'next/link'
import { getPayloadClient } from '@/lib/getPayloadClient'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayloadClient()

  const { docs: tests } = await payload.find({
    collection: 'tests',
    where: { active: { equals: true } },
    sort: '-createdAt',
    limit: 20,
  })

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
          <h1>Ìdánwò Yorùbá</h1>
          <p className="muted">
            Yan ìdánwò tí o fẹ́ ṣe. Ìdánwò kọ̀ọ̀kan ní apá mẹ́rin: Kíkàwé, Gbígbọ́, Sísọ̀rọ̀, àti
            Kíkọ̀wé.
          </p>
        </div>
      </section>

      <main className="wrap">
        {tests.length === 0 && (
          <div className="card quiet">
            <p>Kò sí ìdánwò tí ó ti ṣetán lọ́wọ́lọ́wọ́. Jọ̀wọ́ padà wá lẹ́yìn-ọ̀-rẹyìn.</p>
          </div>
        )}

        {tests.map((test: any) => (
          <div className="card" key={test.id}>
            <h2>{test.title}</h2>
            {test.description && <p className="muted">{test.description}</p>}
            <Link className="btn" href={`/idanwo/${test.id}`}>
              Bẹ̀rẹ̀ Ìdánwò
            </Link>
          </div>
        ))}
      </main>
    </>
  )
}
