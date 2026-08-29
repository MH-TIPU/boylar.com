import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Awards } from '@/collections/Awards'
import { Careers } from '@/collections/Careers'
import { ContactSubmissions } from '@/collections/ContactSubmissions'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Posts } from '@/collections/Posts'
import { Projects } from '@/collections/Projects'
import { ServiceCategories } from '@/collections/ServiceCategories'
import { Services } from '@/collections/Services'
import { Subscribers } from '@/collections/Subscribers'
import { Testimonials } from '@/collections/Testimonials'
import { Users } from '@/collections/Users'
import { Navigation } from '@/globals/Navigation'
import { SiteSettings } from '@/globals/SiteSettings'

const dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * With no SMTP host configured, Payload falls back to its built-in ethereal
 * transport and logs a preview URL — so local development never needs real
 * mail credentials.
 */
const email = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromName: process.env.EMAIL_FROM_NAME || 'boylar',
      defaultFromAddress: process.env.EMAIL_FROM_ADDRESS || 'noreply@boylar.com',
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    })
  : undefined

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  // Payload's REST API lives on its own prefix so its catch-all route does
  // not shadow the site's own /api endpoints.
  routes: {
    api: '/cms-api',
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' · boylar CMS',
    },
  },
  collections: [
    Services,
    ServiceCategories,
    Projects,
    Testimonials,
    Awards,
    Careers,
    Posts,
    Pages,
    ContactSubmissions,
    Subscribers,
    Media,
    Users,
  ],
  globals: [SiteSettings, Navigation],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  email,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  graphQL: {
    disable: true,
  },
})
