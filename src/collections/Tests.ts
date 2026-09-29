import type { CollectionConfig } from 'payload'

export const Tests: CollectionConfig = {
  slug: 'tests',
  admin: {
    useAsTitle: 'title',
    description: 'A full exam made up of Reading, Listening, Speaking and Writing sections.',
    defaultColumns: ['title', 'active', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal name for this test (e.g. "Yoruba Proficiency Test - Set 1"). English is fine here.',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Only active tests should be shown/served on the public site.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional internal notes about this test set.',
      },
    },
    {
      name: 'totalScore',
      type: 'number',
      defaultValue: 120,
      admin: {
        description: 'Max possible total score across all sections (TOEFL default: 120).',
      },
    },
  ],
}
