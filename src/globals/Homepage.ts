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
      defaultValue: 'SYLPT ni Standard Yoruba Language Proficiency Test, orúkọ kíkún ìdánwò yìí.',
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
      name: 'stats',
      type: 'array',
      label: 'Stats strip (shown under the intro - e.g. section count, max score, time)',
      minRows: 1,
      maxRows: 6,
      defaultValue: [
        { value: '4', label: 'Àpá' },
        { value: '120', label: 'Àmì Gíga Jù' },
        { value: '~2', label: 'Wákàtí' },
      ],
      fields: [
        { name: 'value', type: 'text', required: true, label: 'Value (short, e.g. "4" or "~2")' },
        { name: 'label', type: 'text', required: true, label: 'Label under the value (Yoruba)' },
      ],
    },
    {
      name: 'scoringHeading',
      type: 'text',
      label: 'Scoring section heading (Yoruba)',
      defaultValue: 'Bí A Ṣe Ń Díwọ̀n Àmì',
    },
    {
      name: 'scoringBands',
      type: 'array',
      label: 'Score bands',
      minRows: 1,
      maxRows: 8,
      defaultValue: [
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
      ],
      fields: [
        { name: 'rangeLabel', type: 'text', required: true, label: 'Score range (e.g. "0–59")' },
        { name: 'bandName', type: 'text', required: true, label: 'Band name (Yoruba)' },
        { name: 'description', type: 'textarea', required: true, label: 'What this band means (Yoruba)' },
      ],
    },
    {
      name: 'tipsHeading',
      type: 'text',
      label: 'How-to-prepare heading (Yoruba)',
      defaultValue: 'Bí O Ṣe Lè Múra Sílẹ̀',
    },
    {
      name: 'tips',
      type: 'array',
      label: 'Preparation tips',
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        { text: 'Ka ìwé Yorùbá lójoojúmọ́, kí o sì kọ àwọn ọ̀rọ̀ tuntun sílẹ̀.' },
        { text: 'Fetí sí orin tàbí rédíò Yorùbá láti mọ bí a ṣe ń sọ̀rọ̀.' },
        { text: 'Dánwò sísọ̀rọ̀ Yorùbá pẹ̀lú ẹbí tàbí ọ̀rẹ́ tí ó mọ èdè náà.' },
        { text: 'Kọ àkọsílẹ̀ kúkúrú ní èdè Yorùbá lẹ́ẹ̀kan lọ́sẹ̀.' },
      ],
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      name: 'faqHeading',
      type: 'text',
      label: 'FAQ heading (Yoruba)',
      defaultValue: 'Àwọn Ìbéèrè Tí A Sábà Ń Béèrè',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ items',
      minRows: 1,
      maxRows: 15,
      defaultValue: [
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
      ],
      fields: [
        { name: 'question', type: 'text', required: true, label: 'Question (Yoruba)' },
        { name: 'answer', type: 'textarea', required: true, label: 'Answer (Yoruba)' },
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
