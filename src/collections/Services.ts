import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'

/** Lucide icon names — keeps the frontend icon map and the CMS in sync. */
export const SERVICE_ICONS = [
  'code-2',
  'server',
  'palette',
  'megaphone',
  'shopping-cart',
  'shield-check',
  'cloud',
  'cpu',
  'database',
  'smartphone',
  'network',
  'bot',
] as const

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order', 'featured'],
    group: 'Services',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: 'order',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'tagline',
              type: 'text',
              required: true,
              maxLength: 120,
              admin: { description: 'One line under the title. Shown on cards and the hero.' },
            },
            {
              name: 'summary',
              type: 'textarea',
              required: true,
              maxLength: 320,
              admin: { description: 'The card blurb on the services grid and home page.' },
            },
            {
              name: 'icon',
              type: 'select',
              required: true,
              defaultValue: 'code-2',
              options: SERVICE_ICONS.map((value) => ({ label: value, value })),
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'service-categories',
            },
          ],
        },
        {
          label: 'Detail Page',
          fields: [
            {
              name: 'body',
              type: 'richText',
              admin: { description: 'The main narrative on the service detail page.' },
            },
            {
              name: 'features',
              type: 'array',
              labels: { singular: 'Feature', plural: 'Features' },
              admin: { description: 'What this service includes. 3–8 works best.' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
            },
            {
              name: 'deliverables',
              type: 'array',
              labels: { singular: 'Deliverable', plural: 'Deliverables' },
              admin: { description: 'Concrete artefacts the client receives.' },
              fields: [{ name: 'item', type: 'text', required: true }],
            },
            {
              name: 'techStack',
              type: 'array',
              label: 'Technologies',
              fields: [{ name: 'name', type: 'text', required: true }],
            },
            {
              name: 'faqs',
              type: 'array',
              label: 'FAQs',
              admin: { description: 'Rendered as an accordion and as FAQ structured data.' },
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
    slugField(),
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Highlight on the home page.' },
    },
  ],
}
