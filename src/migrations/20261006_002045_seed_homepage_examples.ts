import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'

// This is a data migration, not a schema change: it fills in example content
// for the stats/scoringBands/tips/faqs fields added in the previous migration.
// Those fields have `defaultValue` in src/globals/Homepage.ts, but Payload only
// applies defaultValue when a document is first *created* - it doesn't retroactively
// backfill existing documents when new fields are added to the schema. Since the
// `homepage` global document already existed in production before these fields
// were added, it needs this one-time seed. Uses payload.updateGlobal (a partial/
// merge update) rather than raw SQL, so anything already edited in the admin for
// other fields is left untouched.
export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const existing = await payload.findGlobal({ slug: 'homepage' })

  const dataToSeed: Record<string, unknown> = {}

  if (!existing.stats || existing.stats.length === 0) {
    dataToSeed.stats = [
      { value: '4', label: 'Àpá' },
      { value: '120', label: 'Àmì Gíga Jù' },
      { value: '~2', label: 'Wákàtí' },
    ]
  }

  if (!existing.scoringBands || existing.scoringBands.length === 0) {
    dataToSeed.scoringBands = [
      {
        rangeLabel: '0–59',
        bandName: 'Ìpele Ìbẹ̀rẹ̀',
        description: 'Ẹ ṣẹ̀ṣẹ̀ bẹ̀rẹ̀ sí kọ́ èdè Yorùbá.',
      },
      {
        rangeLabel: '60–89',
        bandName: 'Ìpele Àárín',
        description: 'Ẹ lè lo èdè Yorùbá fún ọ̀rọ̀ ojoojúmọ́.',
      },
      {
        rangeLabel: '90–109',
        bandName: 'Ìpele Gíga',
        description: 'Ẹ ní òye jíjìn nípa èdè Yorùbá.',
      },
      {
        rangeLabel: '110–120',
        bandName: 'Ìpele Amòye',
        description: 'Ẹ mọ èdè Yorùbá gẹ́gẹ́ bí ẹni tí ó ti mọ̀ ọ́ dáadáa láti ìgbà èwe.',
      },
    ]
  }

  if (!existing.tips || existing.tips.length === 0) {
    dataToSeed.tips = [
      { text: 'Ka ìwé Yorùbá lójoojúmọ́, kí o sì kọ àwọn ọ̀rọ̀ tuntun sílẹ̀.' },
      { text: 'Fetí sí orin tàbí rédíò Yorùbá láti mọ bí a ṣe ń sọ̀rọ̀.' },
      { text: 'Dánwò sísọ̀rọ̀ Yorùbá pẹ̀lú ẹbí tàbí ọ̀rẹ́ tí ó mọ èdè náà.' },
      { text: 'Kọ àkọsílẹ̀ kúkúrú ní èdè Yorùbá lẹ́ẹ̀kan lọ́sẹ̀.' },
    ]
  }

  if (!existing.faqs || existing.faqs.length === 0) {
    dataToSeed.faqs = [
      {
        question: 'Ṣé mo níláti san owó kí n tó dán ìdánwò yìí wò?',
        answer: 'Rárá, kò sí iye owó tí a ń gbà lọ́wọ́ ẹnikẹ́ni ní báyìí.',
      },
      {
        question: 'Ṣé mo níláti ṣẹ̀dá àkọọ́lẹ̀ kí n tó lè dán wò?',
        answer: 'Rárá, o lè bẹ̀rẹ̀ ìdánwò láìsí àkọọ́lẹ̀ kankan.',
      },
      {
        question: 'Báwo ni wọ́n ṣe ń yẹ àwọn ìdáhùn Sísọ̀rọ̀ àti Kíkọ̀wé?',
        answer: 'Ẹnìkan yóò ṣe àyẹ̀wò àwọn ìdáhùn wọ̀nyí fúnra wọn, kì í ṣe kọ̀mpútà.',
      },
      {
        question: 'Ṣé mo lè tún ìdánwò ṣe bí mo bá fẹ́?',
        answer: 'Lọ́wọ́lọ́wọ́, o lè tún un ṣe nígbàkigbà tí o bá fẹ́.',
      },
    ]
  }

  if (Object.keys(dataToSeed).length > 0) {
    await payload.updateGlobal({ slug: 'homepage', data: dataToSeed as any })
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  // Intentionally a no-op: reverting would delete content an admin may have
  // since edited by hand, which is not safe to assume is still the seed data.
}
