import type { Field } from 'payload'

/** Lowercase, strip accents, collapse anything non-alphanumeric into hyphens. */
export const slugify = (input: string): string =>
  input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/**
 * URL slug that derives itself from `sourceField` when left blank, but never
 * overwrites a value an editor typed deliberately — changing a live slug
 * breaks inbound links and search rankings.
 */
export const slugField = (sourceField = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique: true,
  required: true,
  admin: {
    position: 'sidebar',
    description: 'Leave blank to generate from the title. Avoid changing it once the page is live.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data, operation }) => {
        if (typeof value === 'string' && value.length > 0) return slugify(value)

        const source = data?.[sourceField]
        if (operation === 'create' && typeof source === 'string') return slugify(source)

        return value
      },
    ],
  },
})
