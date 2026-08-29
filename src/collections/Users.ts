import type { CollectionConfig } from 'payload'

import { adminOnly, adminOnlyField, authenticated } from '@/access'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
    group: 'Administration',
  },
  access: {
    read: authenticated,
    create: adminOnly,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin — full access, manages users', value: 'admin' },
        { label: 'Editor — manages content only', value: 'editor' },
      ],
      access: {
        // Editors must not be able to promote themselves.
        update: adminOnlyField,
      },
    },
  ],
}
