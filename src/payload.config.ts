import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'

import { Tests } from './collections/Tests'
import { Sections } from './collections/Sections'
import { Items } from './collections/Items'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    // Admin UI stays in English (Payload's default) - only the public
    // test-taking pages under src/app/(frontend) are in Yoruba.
  },
  collections: [Users, Tests, Sections, Items, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || process.env.DATABASE_URI || '',
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : undefined,
    },
  }),
  // Uncomment once you add @payloadcms/storage-vercel-blob and set BLOB_READ_WRITE_TOKEN,
  // so uploaded audio survives on Vercel's ephemeral filesystem:
  //
  // plugins: [
  //   vercelBlobStorage({
  //     collections: { media: true },
  //     token: process.env.BLOB_READ_WRITE_TOKEN || '',
  //   }),
  // ],
})
