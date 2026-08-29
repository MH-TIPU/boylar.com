import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

/**
 * Purges the ISR cache for a path. Call from a CMS webhook or by hand after
 * publishing, so an edit appears immediately instead of at the next revalidate
 * window.
 *
 *   POST /api/revalidate  { "secret": "...", "path": "/services" }
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATION_SECRET

  if (!secret) {
    return NextResponse.json({ message: 'Revalidation is not configured.' }, { status: 501 })
  }

  let body: { secret?: string; path?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  if (body.secret !== secret) {
    return NextResponse.json({ message: 'Unauthorised.' }, { status: 401 })
  }

  const path = body.path || '/'
  if (!path.startsWith('/')) {
    return NextResponse.json({ message: 'Path must start with "/".' }, { status: 400 })
  }

  revalidatePath(path)
  return NextResponse.json({ revalidated: true, path })
}
