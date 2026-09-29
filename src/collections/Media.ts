import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['audio/*', 'image/*'],
  },
  admin: {
    description: 'Audio clips (Listening section) and any images used in test items.',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description: 'Short internal description, e.g. "Listening 1 - market conversation".',
      },
    },
  ],
}
