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
    <main className="wrap">
      <h1>Ìdánwò Yorùbá</h1>
      <p className="muted">
        Yan ìdánwò tí o fẹ́ ṣe. Ìdánwò kọ̀ọ̀kan ní apá mẹ́rin: Kíkàwé, Gbígbọ́, Sísọ̀rọ̀, àti Kíkọ̀wé.
      </p>

      {tests.length === 0 && (
        <div className="card">
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
  )
}
