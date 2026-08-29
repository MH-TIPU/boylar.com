import type { CollectionConfig } from 'payload'

import { adminOnly, authenticated, createOnly } from '@/access'

export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'confirmedAt', 'unsubscribedAt', 'createdAt'],
    group: 'Inbox',
  },
  access: {
    read: authenticated,
    create: createOnly,
    update: authenticated,
    delete: adminOnly,
  },
  fields: [
    { name: 'email', type: 'email', required: true, unique: true, index: true },
    { name: 'name', type: 'text' },
    {
      name: 'confirmedAt',
      type: 'date',
      admin: { description: 'Set when the subscriber confirms via the opt-in email.' },
    },
    {
      name: 'unsubscribedAt',
      type: 'date',
      admin: { description: 'Set on unsubscribe. Suppress these when sending.' },
    },
  ],
  timestamps: true,
}
