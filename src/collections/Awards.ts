import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Awards: CollectionConfig = {
  slug: 'awards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'organization', 'year'],
    group: 'Company',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-year',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'organization', type: 'text' },
    { name: 'year', type: 'number', min: 1990, max: 2100 },
    { name: 'description', type: 'textarea' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'url', type: 'text' },
  ],
}
