import Link from 'next/link'

const SECTIONS = [
  {
    label: 'Kíkàwé',
    body: 'A ó ka àwọn ìwé kúkúrú, a ó sì béèrè ìbéèrè nípa ohun tí a kà.',
  },
  {
    label: 'Gbígbọ́',
    body: 'A ó fetí sí ìjíròrò tàbí ọ̀rọ̀ sísọ, a ó sì dáhùn àwọn ìbéèrè tí ó jọmọ.',
  },
  {
    label: 'Sísọ̀rọ̀',
    body: 'A ó fún ọ ní kókó kan, iwọ yóò sì sọ̀rọ̀ nípa rẹ̀ láàrin àkókò kan.',
  },
  {
    label: 'Kíkọ̀wé',
    body: 'A ó fún ọ ní kókó kan, iwọ yóò sì kọ̀wé nípa rẹ̀ láàrin àkókò kan.',
  },
]

const NOTES = [
  'Àpá kọ̀ọ̀kan ní àkókò tirẹ̀; nígbà tí àkókò bá parí, a óò gbé ọ lọ sí àpá tí ó tẹ̀lé e láìfọ̀rọ̀wérọ̀.',
  'O ò níláti ṣẹ̀dá àkọọ́lẹ̀ kankan kí o tó lè dán ìdánwò wò.',
  'Àwọn ìdáhùn Sísọ̀rọ̀ àti Kíkọ̀wé yóò nílò kí ẹnìkan ṣe àyẹ̀wò wọn fúnra wọn.',
]

export default function HomePage() {
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
            Ìdánwò kíkọ́ èdè Yorùbá tí a ṣe gẹ́gẹ́ bí ìlànà TOEFL, fún àwọn tí ń kọ́ èdè náà tàbí
            tí ó ti mọ̀ ọ́ dáadáa.
          </p>
        </div>
      </section>

      <main className="wrap">
        <h2>Kí ni ìdánwò yìí?</h2>
        <p>
          Ìdánwò yìí ń díwọ̀n bí ẹnikẹ́ni ṣe mọ èdè Yorùbá dáadáa, láti kíkàwé dé kíkọ̀wé. Ó ní àpá
          mẹ́rin tí ó yàtọ̀ síra, olúkúlùkù ń díwọ̀n ìmọ̀ tí ó yàtọ̀.
        </p>

        {SECTIONS.map((sec) => (
          <div className="card quiet" key={sec.label}>
            <h2>{sec.label}</h2>
            <p className="muted">{sec.body}</p>
          </div>
        ))}

        <h2>Kí ni o yẹ kí o mọ̀ kí o tó bẹ̀rẹ̀</h2>
        <div className="card quiet">
          {NOTES.map((note) => (
            <p key={note} style={{ marginTop: 0 }}>
              {note}
            </p>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link className="btn" href="/awon-idanwo">
            Wo Àwọn Ìdánwò
          </Link>
        </div>
      </main>
    </>
  )
}
