import type { CollectionConfig } from 'payload'

export const Items: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'internalName',
    description:
      'A single question (Reading/Listening) or prompt (Speaking/Writing) belonging to a Section.',
    defaultColumns: ['internalName', 'section', 'kind', 'order'],
  },
  fields: [
    {
      name: 'internalName',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal label for finding this item in the admin, e.g. "Reading 1 - Q3". English is fine.',
      },
    },
    {
      name: 'section',
      type: 'relationship',
      relationTo: 'sections',
      required: true,
      hasMany: false,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 1,
    },
    {
      name: 'kind',
      type: 'select',
      required: true,
      defaultValue: 'multiple_choice',
      options: [
        { label: 'Multiple choice (Reading / Listening)', value: 'multiple_choice' },
        { label: 'Open prompt (Speaking / Writing)', value: 'prompt' },
      ],
      admin: {
        description: 'Pick the item type that matches the section this belongs to.',
      },
    },

    // --- Shared passage/context text (Reading passages, Listening transcripts, Writing stimulus) ---
    {
      name: 'passageTextYoruba',
      type: 'textarea',
      label: 'Passage / context text (Yoruba)',
      admin: {
        description:
          'Reading passage, or written context for a question. Leave blank for pure audio-only Listening items.',
        condition: (_, siblingData) => siblingData?.kind === 'multiple_choice',
      },
    },
    {
      name: 'audio',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Audio clip for Listening items. Leave blank for Reading items.',
        condition: (_, siblingData) => siblingData?.kind === 'multiple_choice',
      },
    },

    // --- Multiple choice question fields ---
    {
      name: 'questionTextYoruba',
      type: 'textarea',
      label: 'Question text (Yoruba)',
      admin: {
        condition: (_, siblingData) => siblingData?.kind === 'multiple_choice',
      },
    },
    {
      name: 'options',
      type: 'array',
      label: 'Answer options',
      minRows: 2,
      maxRows: 6,
      admin: {
        condition: (_, siblingData) => siblingData?.kind === 'multiple_choice',
      },
      fields: [
        {
          name: 'textYoruba',
          type: 'text',
          required: true,
          label: 'Option text (Yoruba)',
        },
        {
          name: 'isCorrect',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'points',
      type: 'number',
      defaultValue: 1,
      admin: {
        condition: (_, siblingData) => siblingData?.kind === 'multiple_choice',
      },
    },

    // --- Speaking / Writing prompt fields ---
    {
      name: 'promptTextYoruba',
      type: 'textarea',
      label: 'Prompt text (Yoruba)',
      admin: {
        condition: (_, siblingData) => siblingData?.kind === 'prompt',
      },
    },
    {
      name: 'promptTimeLimitMinutes',
      type: 'number',
      label: 'Response time limit (minutes)',
      defaultValue: 2,
      admin: {
        condition: (_, siblingData) => siblingData?.kind === 'prompt',
      },
    },
    {
      name: 'rubricNotes',
      type: 'textarea',
      label: 'Grading rubric notes (internal, English)',
      admin: {
        description: 'For whoever grades Speaking/Writing responses by hand. Not shown to test-takers.',
        condition: (_, siblingData) => siblingData?.kind === 'prompt',
      },
    },
  ],
}
