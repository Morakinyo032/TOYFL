import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/lib/getPayloadClient'
import TestRunner from '@/components/TestRunner'

export default async function TestPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params
  const payload = await getPayloadClient()

  const test = await payload.findByID({ collection: 'tests', id: testId }).catch(() => null)
  if (!test) return notFound()

  const { docs: sections } = await payload.find({
    collection: 'sections',
    where: { test: { equals: testId } },
    sort: 'order',
    limit: 20,
  })

  const sectionsWithItems = await Promise.all(
    sections.map(async (section: any) => {
      const { docs: items } = await payload.find({
        collection: 'items',
        where: { section: { equals: section.id } },
        sort: 'order',
        limit: 100,
        depth: 1, // resolve audio upload URLs
      })
      return { ...section, items }
    }),
  )

  return <TestRunner test={test} sections={sectionsWithItems} />
}
