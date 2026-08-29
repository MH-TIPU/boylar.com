import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { Process } from '@/components/sections/Process'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { getServices } from '@/lib/payload'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'IT Services',
  description:
    'Software development, IT infrastructure, design and branding, digital marketing, e-commerce and ERP, and managed IT support — delivered by one accountable team.',
  path: '/services',
})

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your technology needs, from one team"
        description="Six disciplines staffed in-house. Engage us for one of them or all of them — nothing here is bundled, and nothing is subcontracted out behind your back."
      />

      <ServicesGrid
        services={services}
        eyebrow="Capabilities"
        title="What we deliver"
        description="Each of these is a full practice with its own specialists, not a line item we outsource when asked."
      />

      <Process />
      <FAQ />
      <CTA />
    </>
  )
}
