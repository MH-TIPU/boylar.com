import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/utils'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The CMS and its REST API should never appear in search results.
      disallow: ['/admin', '/api/', '/cms-api/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
