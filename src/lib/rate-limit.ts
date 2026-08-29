type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

/**
 * Fixed-window limiter held in process memory. Adequate for a single-instance
 * deployment behind one reverse proxy; move to Redis if the app is ever run
 * with more than one replica, since each replica keeps its own counts.
 */
export function rateLimit(key: string, { limit = 5, windowMs = 60_000 } = {}) {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1, retryAfter: 0 }
  }

  bucket.count += 1

  if (bucket.count > limit) {
    return { ok: false, remaining: 0, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) }
  }

  return { ok: true, remaining: limit - bucket.count, retryAfter: 0 }
}

/** Opportunistic cleanup so the map cannot grow without bound. */
export function pruneRateLimits() {
  const now = Date.now()
  for (const [key, bucket] of buckets) {
    if (now > bucket.resetAt) buckets.delete(key)
  }
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown'
  return request.headers.get('x-real-ip') ?? 'unknown'
}
