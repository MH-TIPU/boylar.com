import type { CollectionConfig } from 'payload'

import { authenticated, publishedOrAuthenticated } from '@/access'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'

export const PRODUCT_TYPES = [
  { label: 'WordPress plugin', value: 'wordpress-plugin' },
  { label: 'Web app / SaaS', value: 'web-app' },
  { label: 'Mobile app', value: 'mobile-app' },
  { label: 'Desktop / on-premise', value: 'desktop-app' },
  { label: 'Ready-made solution', value: 'solution' },
] as const

export const PLATFORMS = [
  { label: 'Web', value: 'web' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'iOS', value: 'ios' },
  { label: 'Android', value: 'android' },
  { label: 'Windows', value: 'windows' },
  { label: 'macOS', value: 'macos' },
  { label: 'Linux', value: 'linux' },
  { label: 'Self-hosted', value: 'self-hosted' },
] as const

/**
 * Our own software, as distinct from client work in `projects`. Buyers judge a
 * product on what it does, what it runs on, and what it costs — so those three
 * are first-class here rather than buried in prose.
 */
export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'productType', 'availability', 'featured', '_status'],
    group: 'Products',
  },
  access: {
    read: publishedOrAuthenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true },
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
              admin: { description: 'One line under the name. What it does, in plain words.' },
            },
            {
              name: 'summary',
              type: 'textarea',
              required: true,
              maxLength: 320,
              admin: { description: 'The card blurb on the products index and home page.' },
            },
            {
              name: 'productType',
              type: 'select',
              required: true,
              options: [...PRODUCT_TYPES],
            },
            {
              name: 'platforms',
              type: 'select',
              hasMany: true,
              options: [...PLATFORMS],
              admin: { description: 'Shown as badges. Leave empty if not meaningful.' },
            },
            {
              // Not `status` — that collides with the `_status` enum Payload
              // generates for drafts on this same collection.
              name: 'availability',
              type: 'select',
              required: true,
              defaultValue: 'live',
              options: [
                { label: 'Live', value: 'live' },
                { label: 'Beta', value: 'beta' },
                { label: 'Coming soon', value: 'coming-soon' },
              ],
            },
            { name: 'logo', type: 'upload', relationTo: 'media' },
            {
              name: 'coverImage',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Screenshot or hero image for the product page.' },
            },
          ],
        },
        {
          label: 'Details',
          fields: [
            { name: 'body', type: 'richText' },
            {
              name: 'features',
              type: 'array',
              admin: { description: 'What it does. 3–8 works best.' },
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
              ],
            },
            {
              name: 'specs',
              type: 'array',
              label: 'Specifications',
              admin: {
                description:
                  'Label/value pairs — version, PHP requirement, minimum OS, licence. Rendered as a table.',
              },
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'value', type: 'text', required: true },
              ],
            },
            {
              name: 'gallery',
              type: 'array',
              fields: [
                { name: 'image', type: 'upload', relationTo: 'media', required: true },
                { name: 'caption', type: 'text' },
              ],
            },
            {
              name: 'faqs',
              type: 'array',
              label: 'FAQs',
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Pricing',
          description: 'Leave the tiers empty to show an enquiry call to action instead.',
          fields: [
            {
              name: 'pricing',
              type: 'group',
              fields: [
                {
                  name: 'currency',
                  type: 'select',
                  defaultValue: 'USD',
                  options: [
                    { label: 'US Dollar ($)', value: 'USD' },
                    { label: 'Bangladeshi Taka (৳)', value: 'BDT' },
                    { label: 'Euro (€)', value: 'EUR' },
                    { label: 'Pound Sterling (£)', value: 'GBP' },
                  ],
                },
                {
                  name: 'tiers',
                  type: 'array',
                  maxRows: 4,
                  labels: { singular: 'Plan', plural: 'Plans' },
                  fields: [
                    { name: 'name', type: 'text', required: true },
                    {
                      name: 'priceType',
                      type: 'select',
                      required: true,
                      defaultValue: 'fixed',
                      options: [
                        { label: 'Fixed price', value: 'fixed' },
                        { label: 'Free', value: 'free' },
                        { label: 'Custom — contact us', value: 'custom' },
                      ],
                    },
                    {
                      name: 'price',
                      type: 'number',
                      min: 0,
                      admin: {
                        description: 'Number only — the currency symbol is added automatically.',
                        condition: (_, siblingData) => siblingData?.priceType === 'fixed',
                      },
                    },
                    {
                      name: 'period',
                      type: 'select',
                      defaultValue: 'year',
                      options: [
                        { label: 'per month', value: 'month' },
                        { label: 'per year', value: 'year' },
                        { label: 'one-time', value: 'once' },
                      ],
                      admin: {
                        condition: (_, siblingData) => siblingData?.priceType === 'fixed',
                      },
                    },
                    {
                      name: 'priceNote',
                      type: 'text',
                      admin: { description: 'e.g. "per site" or "up to 10 users"' },
                    },
                    { name: 'description', type: 'textarea', maxLength: 200 },
                    {
                      name: 'features',
                      type: 'array',
                      fields: [{ name: 'item', type: 'text', required: true }],
                    },
                    {
                      name: 'highlighted',
                      type: 'checkbox',
                      defaultValue: false,
                      admin: { description: 'Emphasise this plan. Use on at most one.' },
                    },
                    { name: 'badge', type: 'text', admin: { description: 'e.g. "Most popular"' } },
                    { name: 'ctaLabel', type: 'text', defaultValue: 'Get started' },
                    {
                      name: 'ctaHref',
                      type: 'text',
                      admin: { description: 'Leave blank to link to the quote form.' },
                    },
                  ],
                },
                {
                  name: 'note',
                  type: 'text',
                  admin: { description: 'Shown under the plans — VAT, refund policy, and so on.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Links',
          fields: [
            {
              name: 'links',
              type: 'group',
              fields: [
                { name: 'website', type: 'text' },
                { name: 'demo', type: 'text', label: 'Live demo' },
                { name: 'docs', type: 'text', label: 'Documentation' },
                { name: 'wordpressOrg', type: 'text', label: 'WordPress.org listing' },
                { name: 'appStore', type: 'text', label: 'App Store' },
                { name: 'playStore', type: 'text', label: 'Google Play' },
                { name: 'download', type: 'text' },
                { name: 'github', type: 'text' },
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
      admin: { position: 'sidebar', description: 'Show on the home page.' },
    },
  ],
}
