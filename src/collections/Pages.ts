import type { CollectionConfig } from 'payload'

import { authenticated, publishedOrAuthenticated } from '@/access'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'

/**
 * Free-form pages for legal and one-off content (privacy, terms, cookies).
 * The main marketing pages are purpose-built routes, not entries here.
 */
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt', '_status'],
    group: 'Content',
  },
  access: {
    read: publishedOrAuthenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'subtitle',
      type: 'text',
      admin: { description: 'Optional line under the page heading.' },
    },
    { name: 'content', type: 'richText', required: true },
    slugField(),
    seoField,
  ],
}
