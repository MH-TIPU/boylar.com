import { NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { clientIp, pruneRateLimits, rateLimit } from '@/lib/rate-limit'
import { subscribeSchema } from '@/lib/validation'

export const runtime = 'nodejs'

const SUCCESS = 'Thanks — you are on the list.'

export async function POST(request: Request) {
  pruneRateLimits()

  const limit = rateLimit(`subscribe:${clientIp(request)}`, { limit: 5, windowMs: 10 * 60_000 })
  if (!limit.ok) {
    return NextResponse.json(
      { message: 'Too many attempts. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = subscribeSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? 'Please enter a valid email address.' },
      { status: 422 },
    )
  }

  if (parsed.data.website) {
    return NextResponse.json({ message: SUCCESS })
  }

  const email = parsed.data.email.toLowerCase()

  try {
    const payload = await getPayloadClient()

    const existing = await payload.find({
      collection: 'subscribers',
      where: { email: { equals: email } },
      limit: 1,
    })

    // Already subscribed — respond identically so the endpoint cannot be used
    // to test whether an address is on the list.
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'subscribers',
        data: { email, name: parsed.data.name },
      })
    }

    return NextResponse.json({ message: SUCCESS })
  } catch (error) {
    console.error('Subscribe failed:', error)
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
