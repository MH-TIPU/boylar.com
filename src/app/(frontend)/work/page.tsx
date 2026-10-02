import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CTA } from '@/components/sections/CTA'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { PageHeader } from '@/components/sections/PageHeader'
import { Testimonials } from '@/components/sections/Testimonials'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getProjects, getTestimonials } from '@/lib/payload'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'Case Studies',
  description:
    'Selected client work across software, infrastructure, design, and e-commerce — with the problem, the approach, and the measured result.',
  path: '/work',
})

export default async function WorkPage() {
  const [projects, testimonials] = await Promise.all([getProjects(), getTestimonials()])

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Problems we were handed, and what we shipped"
        description="Each case study covers the situation we walked into, the decisions we made, and what changed as a result."
      />

      {projects.length > 0 ? (
        <FeaturedWork
          projects={projects}
          eyebrow={`${projects.length} case ${projects.length === 1 ? 'study' : 'studies'}`}
          title="Every engagement, in full"
          showAllLink={false}
          limit={50}
        />
      ) : (
        <Section>
          <Container size="wide">
            <div className="rounded-panel border border-dashed border-line-strong p-14 text-center">
              <h2 className="mb-3 font-display text-xl font-medium">No case studies published yet</h2>
              <p className="mx-auto max-w-md text-sm text-fg-muted">
                Case studies are added through the CMS. Publish one and it will appear here
                automatically.
              </p>
            </div>
          </Container>
        </Section>
      )}

      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  )
}
