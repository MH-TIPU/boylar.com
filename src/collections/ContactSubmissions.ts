import type { CollectionConfig } from 'payload'

import { adminOnly, authenticated, createOnly } from '@/access'

/**
 * Written by the public contact and quote forms via the Payload Local API.
 * Nobody can read or edit these except signed-in staff — they contain
 * personal data supplied by prospects.
 */
export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: { singular: 'Enquiry', plural: 'Enquiries' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'serviceInterest', 'status', 'createdAt'],
    group: 'Inbox',
  },
  access: {
    read: authenticated,
    create: createOnly,
    update: authenticated,
    delete: adminOnly,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'company', type: 'text' },
    { name: 'subject', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    {
      name: 'serviceInterest',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'budget',
      type: 'select',
      options: [
        'Under $5k',
        '$5k – $15k',
        '$15k – $50k',
        '$50k – $150k',
        '$150k+',
        'Not sure yet',
      ].map((value) => ({ label: value, value })),
    },
    {
      name: 'timeline',
      type: 'select',
      options: ['ASAP', 'Within 1 month', '1–3 months', '3–6 months', 'Just exploring'].map(
        (value) => ({ label: value, value }),
      ),
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'contact',
      options: [
        { label: 'Contact form', value: 'contact' },
        { label: 'Quote request', value: 'quote' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Won', value: 'won' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: { position: 'sidebar', description: 'Never shown to the sender.' },
    },
  ],
  timestamps: true,
}
