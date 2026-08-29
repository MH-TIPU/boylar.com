import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '@/access'

/**
 * Replaces the old Laravel key/value `site_settings` table with typed fields,
 * so the frontend never has to guess at string keys.
 */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: { group: 'Configuration' },
  access: { read: anyone, update: authenticated },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Brand',
          fields: [
            { name: 'siteName', type: 'text', required: true, defaultValue: 'Boylar' },
            {
              name: 'tagline',
              type: 'text',
              required: true,
              defaultValue: 'Full-service IT partner',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              maxLength: 180,
              admin: { description: 'Default meta description for pages without their own.' },
            },
            { name: 'logo', type: 'upload', relationTo: 'media' },
            {
              name: 'logoDark',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Light-coloured mark for use on dark backgrounds.' },
            },
            { name: 'ogImage', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          label: 'Contact',
          fields: [
            { name: 'email', type: 'email', required: true, defaultValue: 'hello@boylar.com' },
            { name: 'supportEmail', type: 'email' },
            { name: 'phone', type: 'text' },
            { name: 'whatsapp', type: 'text' },
            {
              name: 'address',
              type: 'group',
              fields: [
                { name: 'line1', type: 'text' },
                { name: 'line2', type: 'text' },
                { name: 'city', type: 'text' },
                { name: 'postalCode', type: 'text' },
                { name: 'country', type: 'text' },
              ],
            },
            {
              name: 'legalName',
              type: 'text',
              admin: { description: 'Registered company name, used in the footer and JSON-LD.' },
            },
            { name: 'registrationNumber', type: 'text' },
            {
              name: 'businessHours',
              type: 'text',
              admin: { description: 'e.g. "Sun–Thu, 9:00–18:00 (GMT+6)"' },
            },
          ],
        },
        {
          label: 'Social',
          fields: [
            {
              name: 'social',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  options: [
                    'linkedin',
                    'github',
                    'x',
                    'facebook',
                    'instagram',
                    'youtube',
                    'dribbble',
                    'behance',
                  ].map((value) => ({ label: value, value })),
                },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Analytics',
          fields: [
            {
              name: 'googleAnalyticsId',
              type: 'text',
              admin: { description: 'e.g. G-XXXXXXXXXX. Leave blank to disable.' },
            },
            {
              name: 'googleSiteVerification',
              type: 'text',
              admin: { description: 'Search Console verification token.' },
            },
          ],
        },
      ],
    },
  ],
}
