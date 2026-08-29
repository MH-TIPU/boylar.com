import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageHeader } from '@/components/sections/PageHeader'
import { Container } from '@/components/ui/Container'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { getPageBySlug, getPayloadClient, staticParams } from '@/lib/payload'
import { buildMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const revalidate = 3600

export function generateStaticParams() {
  return staticParams(async () => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'pages',
      limit: 100,
      depth: 0,
      where: { _status: { equals: 'published' } },
    })
    return docs.map((page) => ({ slug: page.slug }))
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) return {}

  return buildMetadata({
    seo: page.seo,
    fallbackTitle: page.title,
    fallbackDescription: page.subtitle,
    path: `/${page.slug}`,
  })
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) notFound()

  return (
    <>
      <PageHeader title={page.title} description={page.subtitle} />

      <Section>
        <Container size="narrow">
          <p className="mb-10 font-mono text-xs tracking-wider text-fg-subtle">
            Last updated {formatDate(page.updatedAt)}
          </p>
          <RichText data={page.content} className="max-w-none" />
        </Container>
      </Section>
    </>
  )
}
