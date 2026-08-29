/**
 * Removes everything `pnpm seed:demo` created. Matches on the `demo-` slug
 * prefix, so real content added through the CMS is never touched.
 *
 *   pnpm seed:demo:clear
 */
import 'dotenv/config'

import { getPayload } from 'payload'

import config from '../../payload.config'
import { DEMO_TESTIMONIALS } from './demo'

async function main() {
  const payload = await getPayload({ config })

  for (const collection of ['projects', 'posts', 'careers'] as const) {
    const { docs } = await payload.delete({
      collection,
      where: { slug: { like: 'demo-' } },
    })
    console.log(`✓ Removed ${docs.length} from ${collection}`)
  }

  const { docs: testimonials } = await payload.delete({
    collection: 'testimonials',
    where: { name: { in: DEMO_TESTIMONIALS.map((t) => t.name) } },
  })
  console.log(`✓ Removed ${testimonials.length} testimonials`)

  const { docs: media } = await payload.delete({
    collection: 'media',
    where: { filename: { like: 'demo-cover-' } },
  })
  console.log(`✓ Removed ${media.length} placeholder images`)

  console.log('\nDemo content cleared.\n')
  process.exit(0)
}

main().catch((error) => {
  console.error('Clearing demo content failed:', error)
  process.exit(1)
})
