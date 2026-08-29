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
import { CATEGORIES, LEGAL_PAGES, NAVIGATION, SERVICES, SITE_SETTINGS } from './content'

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
        name: 'Boylar Admin',
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
