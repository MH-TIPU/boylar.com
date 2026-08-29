import config from '@payload-config'
import { cache } from 'react'
import { getPayload } from 'payload'

/**
 * Payload's Local API talks to the database in-process — no HTTP hop, so
 * server components can query it directly. Wrapped in React `cache` so a
 * single render never issues the same query twice.
 */
export const getPayloadClient = cache(async () => getPayload({ config }))

export const getSiteSettings = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
})

export const getNavigation = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'navigation', depth: 0 })
})

export const getServices = cache(async ({ featuredOnly = false } = {}) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'services',
    limit: 50,
    sort: 'order',
    depth: 1,
    ...(featuredOnly ? { where: { featured: { equals: true } } } : {}),
  })
  return docs
})

export const getServiceBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
})

export const getProjects = cache(async ({ featuredOnly = false, limit = 50 } = {}) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    limit,
    sort: '-year',
    depth: 2,
    where: {
      _status: { equals: 'published' },
      ...(featuredOnly ? { featured: { equals: true } } : {}),
    },
  })
  return docs
})

export const getProjectBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
})

export const getTestimonials = cache(async ({ featuredOnly = false } = {}) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'testimonials',
    limit: 20,
    depth: 1,
    ...(featuredOnly ? { where: { featured: { equals: true } } } : {}),
  })
  return docs
})

export const getCareers = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'careers',
    limit: 50,
    depth: 0,
    where: { _status: { equals: 'published' } },
  })
  return docs
})

export const getCareerBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'careers',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
    depth: 1,
  })
  return docs[0] ?? null
})

export const getPosts = cache(async ({ limit = 50 } = {}) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    limit,
    sort: '-publishedAt',
    depth: 1,
    where: { _status: { equals: 'published' } },
  })
  return docs
})

export const getPostBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
})

export const getPageBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug }, _status: { equals: 'published' } },
    limit: 1,
    depth: 1,
  })
  return docs[0] ?? null
})

export const getAwards = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'awards', limit: 20, sort: '-year', depth: 1 })
  return docs
})

/**
 * Wraps a `generateStaticParams` body so a missing database does not fail the
 * build. Docker images are built without a running Postgres; the affected
 * routes simply render on first request and are cached from then on.
 */
export async function staticParams<T>(fn: () => Promise<T[]>): Promise<T[]> {
  try {
    return await fn()
  } catch (error) {
    console.warn(
      '[generateStaticParams] Database unavailable — falling back to on-demand rendering.',
      error instanceof Error ? error.message : error,
    )
    return []
  }
}
