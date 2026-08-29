import type { Metadata } from 'next'

import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { Hero } from '@/components/sections/Hero'
import { Process } from '@/components/sections/Process'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { JsonLd } from '@/components/ui/JsonLd'
import {
  getProducts,
  getProjects,
  getServices,
  getSiteSettings,
  getTestimonials,
} from '@/lib/payload'
import { absoluteUrl } from '@/lib/utils'

export const revalidate = 3600

export const metadata: Metadata = {
  alternates: { canonical: absoluteUrl('/') },
}

export default async function HomePage() {
  const [services, products, projects, testimonials, settings] = await Promise.all([
    getServices(),
    getProducts({ featuredOnly: true }),
    getProjects({ featuredOnly: true, limit: 4 }),
    getTestimonials({ featuredOnly: true }),
    getSiteSettings(),
  ])

  const address = settings.address
  const social = (settings.social ?? []).map((item) => item.url)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: settings.legalName || settings.siteName,
          alternateName: settings.siteName,
          description: settings.description,
          url: absoluteUrl('/'),
          email: settings.email,
          ...(settings.phone ? { telephone: settings.phone } : {}),
          ...(social.length > 0 ? { sameAs: social } : {}),
          ...(address?.city
            ? {
                address: {
                  '@type': 'PostalAddress',
                  ...(address.line1 ? { streetAddress: address.line1 } : {}),
                  addressLocality: address.city,
                  ...(address.postalCode ? { postalCode: address.postalCode } : {}),
                  ...(address.country ? { addressCountry: address.country } : {}),
                },
              }
            : {}),
          makesOffer: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.summary,
              url: absoluteUrl(`/services/${service.slug}`),
            },
          })),
        }}
      />

      <Hero tagline={settings.description} />
      <Stats />
      <ServicesGrid services={services} />
      <ProductsGrid products={products} />
      <FeaturedWork projects={projects} />
      <Process />
      <Testimonials testimonials={testimonials} />
      <FAQ />
      <CTA />
    </>
  )
}
