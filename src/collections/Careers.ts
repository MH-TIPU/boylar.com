import type { CollectionConfig } from 'payload'

import { authenticated, publishedOrAuthenticated } from '@/access'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'

export const Careers: CollectionConfig = {
  slug: 'careers',
  labels: { singular: 'Job Opening', plural: 'Job Openings' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'department', 'location', 'employmentType', '_status'],
    group: 'Company',
  },
  access: {
    read: publishedOrAuthenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Role',
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'department',
              type: 'select',
              required: true,
              options: [
                'Engineering',
                'Design',
                'Infrastructure',
                'Marketing',
                'Sales',
                'Operations',
              ].map((value) => ({ label: value, value })),
            },
            {
              name: 'location',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "Dhaka, Bangladesh" or "Remote"' },
            },
            {
              name: 'workplace',
              type: 'select',
              required: true,
              defaultValue: 'on-site',
              options: [
                { label: 'On-site', value: 'on-site' },
                { label: 'Hybrid', value: 'hybrid' },
                { label: 'Remote', value: 'remote' },
              ],
            },
            {
              name: 'employmentType',
              type: 'select',
              required: true,
              defaultValue: 'full-time',
              options: [
                { label: 'Full-time', value: 'full-time' },
                { label: 'Part-time', value: 'part-time' },
                { label: 'Contract', value: 'contract' },
                { label: 'Internship', value: 'internship' },
              ],
            },
            {
              name: 'level',
              type: 'select',
              options: ['Intern', 'Junior', 'Mid-level', 'Senior', 'Lead'].map((value) => ({
                label: value,
                value,
              })),
            },
            {
              name: 'salaryRange',
              type: 'text',
              admin: {
                description:
                  'Optional but strongly recommended — listings with pay ranges get far more applicants.',
              },
            },
            {
              name: 'deadline',
              type: 'date',
              admin: { date: { pickerAppearance: 'dayOnly' } },
            },
            {
              name: 'applyEmail',
              type: 'email',
              admin: { description: 'Where applications for this role should be sent.' },
            },
          ],
        },
        {
          label: 'Description',
          fields: [
            { name: 'summary', type: 'textarea', required: true, maxLength: 320 },
            { name: 'description', type: 'richText' },
            {
              name: 'responsibilities',
              type: 'array',
              fields: [{ name: 'item', type: 'text', required: true }],
            },
            {
              name: 'requirements',
              type: 'array',
              fields: [{ name: 'item', type: 'text', required: true }],
            },
            {
              name: 'benefits',
              type: 'array',
              fields: [{ name: 'item', type: 'text', required: true }],
            },
          ],
        },
        { label: 'SEO', fields: [seoField] },
      ],
    },
    slugField(),
  ],
}
