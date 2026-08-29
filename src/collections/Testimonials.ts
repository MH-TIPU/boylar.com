import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '@/access'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'featured'],
    group: 'Work',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', admin: { description: 'e.g. "Head of Operations"' } },
    { name: 'company', type: 'text', required: true },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: { description: 'Publish only quotes you actually received and may attribute.' },
    },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
    { name: 'companyLogo', type: 'upload', relationTo: 'media' },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      admin: { description: 'Links the quote to its case study.' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],
}
