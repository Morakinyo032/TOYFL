'use client'

import { useEffect, useMemo, useState } from 'react'

type Option = { textYoruba: string; isCorrect?: boolean }
type Item = {
  id: string
  kind: 'multiple_choice' | 'prompt'
  passageTextYoruba?: string
  questionTextYoruba?: string
  options?: Option[]
  audio?: { url: string } | string | null
  promptTextYoruba?: string
  promptTimeLimitMinutes?: number
}
type Section = {
  id: string
  type: 'reading' | 'listening' | 'speaking' | 'writing'
  internalName: string
  instructionsYoruba: string
  timeLimitMinutes: number
  items: Item[]
}

const SECTION_LABEL: Record<Section['type'], string> = {
  reading: 'Kíkàwé',
  listening: 'Gbígbọ́',
  speaking: 'Sísọ̀rọ̀',
  writing: 'Kíkọ̀wé',
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0')
  return `${m}:${s}`
}

export default function TestRunner({ test, sections }: { test: any; sections: Section[] }) {
  const [started, setStarted] = useState(false)
  const [sectionIdx, setSectionIdx] = useState(0)
  const [itemIdx, setItemIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({}) // itemId -> selected option index
  const [writingText, setWritingText] = useState<Record<string, string>>({})
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [finished, setFinished] = useState(false)

  const currentSection = sections[sectionIdx]
  const currentItem = currentSection?.items[itemIdx]

  useEffect(() => {
    if (started && currentSection) {
      setSecondsLeft(currentSection.timeLimitMinutes * 60)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdx, started])

  useEffect(() => {
    if (!started || finished) return
    if (secondsLeft <= 0) {
      goToNextSection()
      return
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft, started, finished])

  function goToNextItem() {
    if (!currentSection) return
    if (itemIdx < currentSection.items.length - 1) {
      setItemIdx(itemIdx + 1)
    } else {
      goToNextSection()
    }
  }

  function goToNextSection() {
    if (sectionIdx < sections.length - 1) {
      setSectionIdx(sectionIdx + 1)
      setItemIdx(0)
    } else {
      setFinished(true)
    }
  }

  const score = useMemo(() => {
    let total = 0
    let earned = 0
    sections.forEach((sec) => {
      sec.items.forEach((it) => {
        if (it.kind === 'multiple_choice' && it.options?.length) {
          total += 1
          const chosen = answers[it.id]
          if (chosen !== undefined && it.options[chosen]?.isCorrect) earned += 1
        }
      })
    })
    return { earned, total }
  }, [answers, sections])

  if (!sections.length) {
    return (
      <main className="wrap">
        <div className="card">
          <p>Kò sí apá kankan tí a ti fi kún ìdánwò yìí síbẹ̀.</p>
        </div>
      </main>
    )
  }

  if (!started) {
    return (
      <main className="wrap">
        <h1>{test.title}</h1>
        <div className="card">
          <p>
            Ìdánwò yìí ní apá {sections.length}: {sections.map((s) => SECTION_LABEL[s.type]).join(', ')}.
          </p>
          <p className="muted">Nígbà tí àkókò apá kan bá parí, a óò gbé ọ lọ sí apá tí ó tẹ̀lé e láìfọ̀rọ̀wérọ̀.</p>
          <button className="btn" onClick={() => setStarted(true)}>
            Bẹ̀rẹ̀
          </button>
        </div>
      </main>
    )
  }

  if (finished) {
    return (
      <main className="wrap">
        <h1>Ìdánwò Parí</h1>
        <div className="card">
          <p>O ti parí ìdánwò náà. A dúpẹ́ fún àkókò rẹ.</p>
          {score.total > 0 && (
            <p>
              Àmì tí o rí (Kíkàwé + Gbígbọ́): <strong>{score.earned}</strong> nínú <strong>{score.total}</strong>
            </p>
          )}
          <p className="muted">
            Àwọn ìdáhùn Sísọ̀rọ̀ àti Kíkọ̀wé nílò kí ẹnìkan wò wọ́n fúnra wọn kí a tó fún wọn ní àmì.
          </p>
        </div>
      </main>
    )
  }

  const progressPct = ((itemIdx + 1) / currentSection.items.length) * 100

  return (
    <main className="wrap">
      <h1>{SECTION_LABEL[currentSection.type]}</h1>
      <p className="muted">
        Ìbéèrè {itemIdx + 1} nínú {currentSection.items.length} · <span className="timer">{formatTime(secondsLeft)}</span> ku
      </p>
      <div className="progress">
        {sections.map((sec, i) => {
          const fillPct = i < sectionIdx ? 100 : i === sectionIdx ? progressPct : 0
          return (
            <div key={sec.id} title={SECTION_LABEL[sec.type]}>
              <span style={{ width: `${fillPct}%` }} />
            </div>
          )
        })}
      </div>

      <div className="card">
        <p className="muted">{currentSection.instructionsYoruba}</p>
      </div>

      {currentItem?.kind === 'multiple_choice' && (
        <div className="card">
          {currentItem.passageTextYoruba && <p>{currentItem.passageTextYoruba}</p>}
          {currentItem.audio && (
            <audio
              controls
              src={typeof currentItem.audio === 'string' ? currentItem.audio : currentItem.audio.url}
              style={{ width: '100%', marginBottom: '1rem' }}
            />
          )}
          <p>
            <strong>{currentItem.questionTextYoruba}</strong>
          </p>
          {currentItem.options?.map((opt, i) => (
            <button
              key={i}
              className={`option ${answers[currentItem.id] === i ? 'selected' : ''}`}
              onClick={() => setAnswers((a) => ({ ...a, [currentItem.id]: i }))}
            >
              {opt.textYoruba}
            </button>
          ))}
          <div style={{ marginTop: '1rem' }}>
            <button className="btn" onClick={goToNextItem}>
              Tẹ̀lé
            </button>
          </div>
        </div>
      )}

      {currentItem?.kind === 'prompt' && currentSection.type === 'writing' && (
        <div className="card">
          <p>{currentItem.promptTextYoruba}</p>
          <textarea
            rows={10}
            style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}
            value={writingText[currentItem.id] || ''}
            onChange={(e) => setWritingText((w) => ({ ...w, [currentItem.id]: e.target.value }))}
            placeholder="Kọ ìdáhùn rẹ níbí..."
          />
          <div style={{ marginTop: '1rem' }}>
            <button className="btn" onClick={goToNextItem}>
              Tẹ̀lé
            </button>
          </div>
        </div>
      )}

      {currentItem?.kind === 'prompt' && currentSection.type === 'speaking' && (
        <div className="card">
          <p>{currentItem.promptTextYoruba}</p>
          <p className="muted">Àkókò ìdáhùn: {currentItem.promptTimeLimitMinutes} ìṣẹ́jú.</p>
          <p className="muted">(Ìgbàsílẹ̀ ohùn yóò wà níbí nígbà tí a bá ṣàfikún àkọsílẹ̀ ẹni tí ń dán an wò.)</p>
          <div style={{ marginTop: '1rem' }}>
            <button className="btn" onClick={goToNextItem}>
              Tẹ̀lé
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
