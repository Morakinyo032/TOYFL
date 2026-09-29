import type { CollectionConfig } from 'payload'

export const Sections: CollectionConfig = {
  slug: 'sections',
  admin: {
    useAsTitle: 'internalName',
    description: 'A section (Reading, Listening, Speaking or Writing) that belongs to a Test.',
    defaultColumns: ['internalName', 'type', 'test', 'order'],
  },
  fields: [
    {
      name: 'internalName',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal label, e.g. "Reading - Set 1". English is fine here.',
      },
    },
    {
      name: 'test',
      type: 'relationship',
      relationTo: 'tests',
      required: true,
      hasMany: false,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Reading', value: 'reading' },
        { label: 'Listening', value: 'listening' },
        { label: 'Speaking', value: 'speaking' },
        { label: 'Writing', value: 'writing' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 1,
      admin: {
        description: 'Order this section appears in during the test (1, 2, 3, 4...).',
      },
    },
    {
      name: 'timeLimitMinutes',
      type: 'number',
      required: true,
      defaultValue: 30,
      admin: {
        description: 'Time allowed for this section, in minutes.',
      },
    },
    {
      name: 'instructionsYoruba',
      type: 'textarea',
      required: true,
      label: 'Instructions (Yoruba)',
      admin: {
        description: 'Instructions shown to the test-taker in Yoruba before/during this section.',
      },
    },
  ],
}
