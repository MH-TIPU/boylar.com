/**
 * Seeds the real, production-ready content: services, site settings,
 * navigation, and legal page templates.
 *
 * Safe to re-run — every entry is matched by slug and updated in place.
 * Demo case studies live in `seed-demo.ts` and are deliberately separate so
 * placeholder work never reaches production.
 *
 *   pnpm seed
 */
import 'dotenv/config'

import { randomBytes } from 'crypto'
import config from '../../payload.config'
import { getPayload } from 'payload'

import type { Service } from '../../payload-types'
import sharp from 'sharp'

import { CATEGORIES, LEGAL_PAGES, NAVIGATION, SERVICES, SITE_SETTINGS } from './content'
import { POSTS, PROJECTS } from './editorial'

/**
 * Brand-coloured cover art, generated rather than stock. Swap any of these for
 * a real screenshot through the CMS — the filename is matched on re-seed, so
 * an uploaded replacement is not overwritten.
 */
async function coverImage(label: string) {
  const escaped = label.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  return sharp({ create: { width: 1600, height: 900, channels: 3, background: '#3C3489' } })
    .composite([
      {
        input: Buffer.from(
          `<svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                 <stop offset="0%" stop-color="#3C3489"/>
                 <stop offset="100%" stop-color="#7F77DD"/>
               </linearGradient>
             </defs>
             <rect width="1600" height="900" fill="url(#g)"/>
             <text x="120" y="480" font-family="Poppins, Helvetica, sans-serif"
                   font-size="76" font-weight="600" fill="#ffffff">${escaped}</text>
           </svg>`,
        ),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toBuffer()
}

async function main() {
  const payload = await getPayload({ config })

  // ── Admin user ───────────────────────────────────────────────────────────
  const { totalDocs: userCount } = await payload.count({ collection: 'users' })
  let generatedPassword: string | null = null

  if (userCount === 0) {
    generatedPassword = randomBytes(12).toString('base64url')
    await payload.create({
      collection: 'users',
      data: {
        name: 'Admin',
        email: SITE_SETTINGS.email,
        password: generatedPassword,
        role: 'admin',
      },
    })
    console.log('✓ Created admin user')
  } else {
    console.log('· Admin user already exists — skipped')
  }

  // ── Service categories ───────────────────────────────────────────────────
  const categoryIds = new Map<string, number>()

  for (const category of CATEGORIES) {
    const existing = await payload.find({
      collection: 'service-categories',
      where: { slug: { equals: category.slug } },
      limit: 1,
    })

    const doc = existing.docs[0]
      ? await payload.update({
          collection: 'service-categories',
          id: existing.docs[0].id,
          data: category,
        })
      : await payload.create({ collection: 'service-categories', data: category })

    categoryIds.set(category.slug, doc.id)
  }
  console.log(`✓ ${CATEGORIES.length} service categories`)

  // ── Services ─────────────────────────────────────────────────────────────
  for (const { categorySlug, ...service } of SERVICES) {
    const data = {
      ...service,
      // The seed data types `icon` as a plain string; the collection narrows
      // it to the SERVICE_ICONS union.
      icon: service.icon as Service['icon'],
      category: categoryIds.get(categorySlug) ?? null,
      deliverables: service.deliverables.map((item) => ({ item })),
      techStack: service.techStack.map((name) => ({ name })),
    }

    const existing = await payload.find({
      collection: 'services',
      where: { slug: { equals: service.slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({ collection: 'services', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'services', data })
    }
  }
  console.log(`✓ ${SERVICES.length} services`)

  // ── Legal pages ──────────────────────────────────────────────────────────
  for (const page of LEGAL_PAGES) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: page.slug } },
      limit: 1,
    })

    const data = { ...page, _status: 'published' as const }

    if (existing.docs[0]) {
      await payload.update({ collection: 'pages', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'pages', data })
    }
  }
  console.log(`✓ ${LEGAL_PAGES.length} legal pages`)

  // ── Case studies ─────────────────────────────────────────────────────────
  const serviceIds = new Map<string, number>()
  const { docs: allServices } = await payload.find({ collection: 'services', limit: 100 })
  for (const service of allServices) serviceIds.set(service.slug, service.id)

  for (const { slug, serviceSlugs, techStack, ...project } of PROJECTS) {
    const filename = `cover-${slug}.png`
    const existingMedia = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })

    const media =
      existingMedia.docs[0] ??
      (await payload.create({
        collection: 'media',
        data: { alt: `${project.client} cover` },
        file: {
          name: filename,
          data: await coverImage(project.client),
          mimetype: 'image/png',
          size: 0,
        },
      }))

    // ARK Power is a stub until the client confirms the brief — never publish it.
    const isDraft = slug === 'ark-power'
    const data = {
      ...project,
      slug,
      techStack: techStack.map((name) => ({ name })),
      coverImage: media.id,
      services: serviceSlugs.map((s) => serviceIds.get(s)).filter((id): id is number => !!id),
      _status: (isDraft ? 'draft' : 'published') as 'draft' | 'published',
    }

    const existing = await payload.find({
      collection: 'projects',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs[0]) {
      await payload.update({ collection: 'projects', id: existing.docs[0].id, data })
    } else {
      await payload.create({ collection: 'projects', data })
    }
  }
  console.log(`✓ ${PROJECTS.length} case studies`)

  // ── Articles ─────────────────────────────────────────────────────────────
  const { docs: admins } = await payload.find({
    collection: 'users',
    where: { role: { equals: 'admin' } },
    limit: 1,
  })

  for (const [i, { tags, ...post }] of POSTS.entries()) {
    const data = {
      ...post,
      tags: tags.map((tag) => ({ tag })),
      author: admins[0]?.id ?? null,
      // Spaced a week apart so the archive does not publish all at one instant.
      publishedAt: new Date(Date.now() - i * 7 * 86_400_000).toISOString(),
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
  console.log(`✓ ${POSTS.length} articles`)

  // ── Globals ──────────────────────────────────────────────────────────────
  await payload.updateGlobal({ slug: 'site-settings', data: SITE_SETTINGS })
  await payload.updateGlobal({ slug: 'navigation', data: NAVIGATION })
  console.log('✓ Site settings and navigation')

  if (generatedPassword) {
    console.log('\n──────────────────────────────────────────────')
    console.log('  Admin login — change this password on first sign-in')
    console.log(`  URL:      /admin`)
    console.log(`  Email:    ${SITE_SETTINGS.email}`)
    console.log(`  Password: ${generatedPassword}`)
    console.log('──────────────────────────────────────────────\n')
  }

  console.log('Seed complete.')
  process.exit(0)
}

main().catch((error) => {
  console.error('Seed failed:', error)
  process.exit(1)
})
