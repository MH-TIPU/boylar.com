import type { Field } from 'payload'

/**
 * Per-document SEO overrides. All optional — the page falls back to the
 * document title/excerpt and the site-wide defaults in SiteSettings.
 */
export const seoField: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  admin: {
    description: 'Optional. Falls back to the page title and site defaults when empty.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      maxLength: 70,
      admin: { description: 'Browser tab and search result headline. Aim for under 60 characters.' },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 180,
      admin: { description: 'Search result snippet. Aim for 140–160 characters.' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Social share image. 1200×630 recommended.' },
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Hide this page from search engines.' },
    },
  ],
}
