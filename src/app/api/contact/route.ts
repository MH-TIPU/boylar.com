import { NextResponse } from 'next/server'

import { getPayloadClient, getSiteSettings } from '@/lib/payload'
import { clientIp, pruneRateLimits, rateLimit } from '@/lib/rate-limit'
import { contactSchema, quoteSchema } from '@/lib/validation'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  pruneRateLimits()

  const limit = rateLimit(`contact:${clientIp(request)}`, { limit: 5, windowMs: 10 * 60_000 })
  if (!limit.ok) {
    return NextResponse.json(
      { message: 'Too many submissions. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  const isQuote =
    typeof body === 'object' && body !== null && 'serviceInterest' in (body as object)
  const parsed = isQuote ? quoteSchema.safeParse(body) : contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: 'Please check the highlighted fields.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    )
  }

  // Honeypot filled — accept silently so the bot does not learn it was caught.
  if (parsed.data.website) {
    return NextResponse.json({ message: 'Thanks — we will be in touch.' })
  }

  const { website: _honeypot, ...data } = parsed.data

  try {
    const payload = await getPayloadClient()

    const submission = await payload.create({
      collection: 'contact-submissions',
      data: {
        ...data,
        source: isQuote ? 'quote' : 'contact',
        status: 'new',
      },
    })

    const settings = await getSiteSettings()
    const to = process.env.EMAIL_TO_ADDRESS || settings.email

    // Notify the team. A mail failure must not lose the enquiry, which is
    // already persisted above — so this is logged, not surfaced to the sender.
    if (to) {
      const lines = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : null,
        data.company ? `Company: ${data.company}` : null,
        'budget' in data && data.budget ? `Budget: ${data.budget}` : null,
        'timeline' in data && data.timeline ? `Timeline: ${data.timeline}` : null,
        '',
        data.message,
      ]
        .filter((line) => line !== null)
        .join('\n')

      await payload
        .sendEmail({
          to,
          replyTo: data.email,
          subject: `${isQuote ? 'Quote request' : 'Enquiry'} from ${data.name}${
            data.company ? ` (${data.company})` : ''
          }`,
          text: lines,
        })
        .catch((error: unknown) => {
          payload.logger.error({ err: error }, 'Contact notification email failed')
        })

      await payload
        .sendEmail({
          to: data.email,
          subject: `We received your message — ${settings.siteName}`,
          text: `Hi ${data.name},\n\nThanks for getting in touch. We have your message and someone will reply within one business day.\n\nFor reference, this is what you sent:\n\n${data.message}\n\n— ${settings.siteName}`,
        })
        .catch((error: unknown) => {
          payload.logger.error({ err: error }, 'Contact auto-reply email failed')
        })
    }

    return NextResponse.json({
      message: 'Thanks — we have your message and will reply within one business day.',
      id: submission.id,
    })
  } catch (error) {
    console.error('Contact submission failed:', error)
    return NextResponse.json(
      { message: 'Something went wrong on our end. Please email us directly.' },
      { status: 500 },
    )
  }
}
