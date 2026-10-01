import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    description: 'All the text shown on the public homepage (the onboarding page before the exam list).',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      label: 'Hero title (Yoruba)',
      defaultValue: 'Ìdánwò Yorùbá',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      label: 'Hero subtitle (Yoruba)',
      defaultValue:
        'Ìdánwò kíkọ́ èdè Yorùbá tí a ṣe gẹ́gẹ́ bí ìlànà TOEFL, fún àwọn tí ń kọ́ èdè náà tàbí tí ó ti mọ̀ ọ́ dáadáa.',
    },
    {
      name: 'heroFullName',
      type: 'textarea',
      label: 'Hero full-name line (Yoruba, small text under the subtitle)',
      defaultValue: 'YPCE ni Yoruba Proficiency Certificate Examination, orúkọ kíkún ìdánwò yìí.',
    },
    {
      name: 'introHeading',
      type: 'text',
      label: '"What is this test?" heading (Yoruba)',
      defaultValue: 'Kí ni ìdánwò yìí?',
    },
    {
      name: 'introBody',
      type: 'textarea',
      label: '"What is this test?" body (Yoruba)',
      defaultValue:
        'Ìdánwò yìí ń díwọ̀n bí ẹnikẹ́ni ṣe mọ èdè Yorùbá dáadáa, láti kíkàwé dé kíkọ̀wé. Ó ní àpá mẹ́rin tí ó yàtọ̀ síra, olúkúlùkù ń díwọ̀n ìmọ̀ tí ó yàtọ̀.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'The four section cards',
      minRows: 1,
      maxRows: 8,
      defaultValue: [
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
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Section name (Yoruba)',
        },
        {
          name: 'body',
          type: 'textarea',
          required: true,
          label: 'What it involves (Yoruba)',
        },
      ],
    },
    {
      name: 'notesHeading',
      type: 'text',
      label: '"What you should know" heading (Yoruba)',
      defaultValue: 'Kí ni o yẹ kí o mọ̀ kí o tó bẹ̀rẹ̀',
    },
    {
      name: 'notes',
      type: 'array',
      label: 'Notes list',
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        {
          text: 'Àpá kọ̀ọ̀kan ní àkókò tirẹ̀; nígbà tí àkókò bá parí, a óò gbé ọ lọ sí àpá tí ó tẹ̀lé e láìfọ̀rọ̀wérọ̀.',
        },
        { text: 'O ò níláti ṣẹ̀dá àkọọ́lẹ̀ kankan kí o tó lè dán ìdánwò wò.' },
        {
          text: 'Àwọn ìdáhùn Sísọ̀rọ̀ àti Kíkọ̀wé yóò nílò kí ẹnìkan ṣe àyẹ̀wò wọn fúnra wọn.',
        },
      ],
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Button text linking to the exam list (Yoruba)',
      defaultValue: 'Wo Àwọn Ìdánwò',
    },
  ],
}
