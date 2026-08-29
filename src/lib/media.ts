import type { Media } from '@/payload-types'

type MaybeMedia = number | Media | null | undefined

/** Payload returns either a populated doc or a bare id depending on `depth`. */
export function isMedia(value: MaybeMedia): value is Media {
  return typeof value === 'object' && value !== null && 'url' in value
}

/**
 * Payload returns absolute URLs because `serverURL` is configured. next/image
 * rejects those unless the host is allow-listed, and allow-listing your own
 * origin is pointless — so strip it back to a same-origin path.
 */
function toRelative(url: string | null | undefined) {
  if (!url) return null
  if (url.startsWith('/')) return url

  try {
    const parsed = new URL(url)
    return `${parsed.pathname}${parsed.search}`
  } catch {
    return url
  }
}

export function mediaUrl(value: MaybeMedia, size?: keyof NonNullable<Media['sizes']>) {
  if (!isMedia(value)) return null
  if (size && value.sizes?.[size]?.url) return toRelative(value.sizes[size].url)
  return toRelative(value.url)
}

export function mediaAlt(value: MaybeMedia, fallback = '') {
  return isMedia(value) ? (value.alt ?? fallback) : fallback
}

export function mediaDimensions(value: MaybeMedia) {
  if (!isMedia(value)) return { width: 1200, height: 800 }
  return { width: value.width ?? 1200, height: value.height ?? 800 }
}
