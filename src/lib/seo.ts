import type { Metadata } from 'next'

import { mediaUrl } from '@/lib/media'
import { absoluteUrl } from '@/lib/utils'
import type { Media } from '@/payload-types'

type SeoGroup = {
  title?: string | null
  description?: string | null
  image?: number | Media | null
  noIndex?: boolean | null
} | null

/**
 * Builds page metadata from a document's SEO overrides, falling back to the
 * document's own title and summary. Keeps every page consistent without
 * repeating the OpenGraph boilerplate a dozen times.
 */
export function buildMetadata({
  seo,
  fallbackTitle,
  fallbackDescription,
  path,
  type = 'website',
  publishedTime,
}: {
  seo?: SeoGroup
  fallbackTitle: string
  fallbackDescription?: string | null
  path: string
  type?: 'website' | 'article'
  publishedTime?: string | null
}): Metadata {
  const title = seo?.title || fallbackTitle
  const description = seo?.description || fallbackDescription || undefined
  const image = mediaUrl(seo?.image, 'og')
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type,
      title,
      description,
      url,
      ...(image ? { images: [{ url: absoluteUrl(image) }] } : {}),
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image ? { images: [absoluteUrl(image)] } : {}),
    },
  }
}

/**
 * Metadata for the hand-written pages (as opposed to CMS documents, which go
 * through `buildMetadata`). Exists mainly to make the canonical URL impossible
 * to forget.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}
