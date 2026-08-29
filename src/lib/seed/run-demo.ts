/**
 * Seeds PLACEHOLDER case studies, testimonials, articles, and job openings so
 * the design can be reviewed with realistic content.
 *
 * None of it is real. Remove it before launch:
 *   pnpm seed:demo:clear
 */
import 'dotenv/config'

import { getPayload } from 'payload'
import sharp from 'sharp'

import type { Project } from '../../payload-types'
import config from '../../payload.config'
import { DEMO_CAREERS, DEMO_POSTS, DEMO_PROJECTS, DEMO_TESTIMONIALS } from './demo'

/** Flat gradient stand-ins so image slots are filled during design review. */
async function placeholderImage(from: string, to: string) {
  return sharp({
    create: { width: 1600, height: 900, channels: 3, background: from },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                 <stop offset="0%" stop-color="${from}"/>
                 <stop offset="100%" stop-color="${to}"/>
               </linearGradient>
             </defs>
             <rect width="1600" height="900" fill="url(#g)"/>
           </svg>`,
        ),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toBuffer()
}

/** Brand purple only — the placeholders should not introduce off-palette colour. */
const GRADIENTS: Array<[string, string]> = [
  ['#0d0b1c', '#534ab7'],
  ['#12102b', '#7f77dd'],
  ['#0a0916', '#3c3489'],
]

async function main() {
  const payload = await getPayload({ config })

  const author = (await payload.find({ collection: 'users', limit: 1 })).docs[0]

  // ── Media ────────────────────────────────────────────────────────────────
  const mediaIds: number[] = []

  for (const [i, [from, to]] of GRADIENTS.entries()) {
    const filename = `demo-cover-${i + 1}.png`

    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })

    if (existing.docs[0]) {
      mediaIds.push(existing.docs[0].id)
      continue
    }

    const created = await payload.create({
      collection: 'media',
      data: { alt: 'Placeholder cover image' },
      file: {
        data: await placeholderImage(from, to),
        mimetype: 'image/png',
        name: filename,
        size: 0,
      },
    })
    mediaIds.push(created.id)
  }
  console.log(`✓ ${mediaIds.length} placeholder images`)

  // ── Case studies ─────────────────────────────────────────────────────────
  const services = await payload.find({ collection: 'services', limit: 10 })
  const serviceIds = services.docs.map((service) => service.id)

  for (const [i, project] of DEMO_PROJECTS.entries()) {
    const data = {
      ...project,
      coverImage: mediaIds[i % mediaIds.length]!,
      // Demo data types `industry` as a plain string; the collection narrows it.
      industry: project.industry as Project['industry'],
      techStack: project.techStack.map((name) => ({ name })),
      services: serviceIds.slice(i, i + 2),
      _status: 'published' as const,
    }

    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: project.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({ collection: 'projects', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'projects', data })
    }
  }
  console.log(`✓ ${DEMO_PROJECTS.length} placeholder case studies`)

  // ── Testimonials ─────────────────────────────────────────────────────────
  for (const testimonial of DEMO_TESTIMONIALS) {
    const existing = await payload.find({
      collection: 'testimonials',
      where: { name: { equals: testimonial.name } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'testimonials',
        id: existing.docs[0].id,
        data: testimonial,
      })
    } else {
      await payload.create({ collection: 'testimonials', data: testimonial })
    }
  }
  console.log(`✓ ${DEMO_TESTIMONIALS.length} placeholder testimonials`)

  // ── Articles ─────────────────────────────────────────────────────────────
  for (const [i, post] of DEMO_POSTS.entries()) {
    const data = {
      ...post,
      tags: post.tags.map((tag) => ({ tag })),
      coverImage: mediaIds[i % mediaIds.length]!,
      author: author?.id ?? null,
      publishedAt: new Date(Date.UTC(2026, 5 + i, 12)).toISOString(),
      _status: 'published' as const,
    }

    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: post.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({ collection: 'posts', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'posts', data })
    }
  }
  console.log(`✓ ${DEMO_POSTS.length} placeholder articles`)

  // ── Job openings ─────────────────────────────────────────────────────────
  for (const role of DEMO_CAREERS) {
    const data = {
      ...role,
      responsibilities: role.responsibilities.map((item) => ({ item })),
      requirements: role.requirements.map((item) => ({ item })),
      benefits: role.benefits.map((item) => ({ item })),
      applyEmail: 'careers@boylar.com',
      _status: 'published' as const,
    }

    const existing = await payload.find({
      collection: 'careers',
      where: { slug: { equals: role.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({ collection: 'careers', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'careers', data })
    }
  }
  console.log(`✓ ${DEMO_CAREERS.length} placeholder job openings`)

  console.log('\n⚠  This content is entirely invented. Run `pnpm seed:demo:clear` before launch.\n')
  process.exit(0)
}

main().catch((error) => {
  console.error('Demo seed failed:', error)
  process.exit(1)
})
