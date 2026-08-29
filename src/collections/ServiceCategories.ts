import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'
import { slugField } from '@/fields/slug'

export const ServiceCategories: CollectionConfig = {
  slug: 'service-categories',
  labels: { singular: 'Service Category', plural: 'Service Categories' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug'],
    group: 'Services',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    slugField('name'),
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Shown on category filter chips and listing intros.' },
    },
  ],
}
