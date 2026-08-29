import type { MetadataRoute } from 'next'

import { getCareers, getPayloadClient, getPosts, getProjects, getServices } from '@/lib/payload'
import { absoluteUrl } from '@/lib/utils'

export const revalidate = 3600

const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/quote', priority: 0.8, changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  try {
    const payload = await getPayloadClient()

    const [services, projects, posts, careers, pages] = await Promise.all([
      getServices(),
      getProjects(),
      getPosts(),
      getCareers(),
      payload.find({
        collection: 'pages',
        limit: 100,
        depth: 0,
        where: { _status: { equals: 'published' } },
      }),
    ])

    const collections: Array<[Array<{ slug: string; updatedAt: string }>, string, number]> = [
      [services, '/services', 0.8],
      [projects, '/work', 0.8],
      [posts, '/insights', 0.6],
      [careers, '/careers', 0.5],
      [pages.docs, '', 0.3],
    ]

    for (const [docs, prefix, priority] of collections) {
      for (const doc of docs) {
        entries.push({
          url: absoluteUrl(`${prefix}/${doc.slug}`),
          lastModified: new Date(doc.updatedAt),
          changeFrequency: 'monthly',
          priority,
        })
      }
    }
  } catch (error) {
    // Built without a database — emit the static routes and let the next
    // revalidation pick up CMS content once Postgres is reachable.
    console.warn(
      '[sitemap] Database unavailable, emitting static routes only.',
      error instanceof Error ? error.message : error,
    )
  }

  return entries
}
