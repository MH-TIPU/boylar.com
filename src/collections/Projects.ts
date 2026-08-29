import type { CollectionConfig } from 'payload'

import { authenticated, publishedOrAuthenticated } from '@/access'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'

export const INDUSTRIES = [
  'Finance & Fintech',
  'Healthcare',
  'Logistics & Supply Chain',
  'Retail & E-Commerce',
  'Education',
  'Government & NGO',
  'Manufacturing',
  'Real Estate',
  'Media & Entertainment',
] as const

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: { singular: 'Case Study', plural: 'Case Studies' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'client', 'industry', 'year', '_status'],
    group: 'Work',
  },
  access: {
    read: publishedOrAuthenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true },
  defaultSort: '-year',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'client',
              type: 'text',
              required: true,
              admin: { description: 'Only publish a client name you have permission to use.' },
            },
            {
              name: 'summary',
              type: 'textarea',
              required: true,
              maxLength: 320,
              admin: { description: 'The card blurb on the work index.' },
            },
            {
              name: 'coverImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'industry',
              type: 'select',
              options: INDUSTRIES.map((value) => ({ label: value, value })),
            },
            {
              name: 'services',
              type: 'relationship',
              relationTo: 'services',
              hasMany: true,
              admin: { description: 'Which of our services this project drew on.' },
            },
            {
              name: 'year',
              type: 'number',
              min: 2000,
              max: 2100,
              admin: { description: 'Year of delivery. Drives the default sort order.' },
            },
            {
              name: 'url',
              type: 'text',
              admin: { description: 'Live site or app store link, if public.' },
            },
          ],
        },
        {
          label: 'The Story',
          description: 'Challenge → Solution → Results is the structure buyers scan for.',
          fields: [
            { name: 'challenge', type: 'richText' },
            { name: 'solution', type: 'richText' },
            { name: 'results', type: 'richText' },
            {
              name: 'metrics',
              type: 'array',
              admin: { description: 'Hard numbers. These do more selling than any paragraph.' },
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  admin: { description: 'e.g. "3.2×" or "−41%"' },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: { description: 'e.g. "faster checkout"' },
                },
              ],
            },
            {
              name: 'techStack',
              type: 'array',
              label: 'Technologies',
              fields: [{ name: 'name', type: 'text', required: true }],
            },
            {
              name: 'gallery',
              type: 'array',
              fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
            },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
    slugField(),
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Show on the home page.' },
    },
  ],
}
