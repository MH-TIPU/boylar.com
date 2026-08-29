import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: { group: 'Configuration' },
  access: { read: anyone, update: authenticated },
  fields: [
    {
      name: 'header',
      type: 'array',
      label: 'Header Links',
      admin: { description: 'Top navigation. Add children to turn an item into a dropdown.' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
        {
          name: 'children',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'array',
      label: 'Footer Columns',
      fields: [
        { name: 'heading', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'ctaLabel',
      type: 'text',
      defaultValue: 'Get a quote',
      admin: { description: 'Text on the header call-to-action button.' },
    },
    { name: 'ctaHref', type: 'text', defaultValue: '/quote' },
  ],
}
