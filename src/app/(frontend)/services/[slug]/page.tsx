import { Check } from 'lucide-react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { Accordion } from '@/components/ui/Accordion'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { getServiceBySlug, getServices, staticParams } from '@/lib/payload'
import { JsonLd } from '@/components/ui/JsonLd'
import { buildMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/utils'

export const revalidate = 3600

export function generateStaticParams() {
  return staticParams(async () =>
    (await getServices()).map((service) => ({ slug: service.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) return {}

  return buildMetadata({
    seo: service.seo,
    fallbackTitle: service.title,
    fallbackDescription: service.summary,
    path: `/services/${service.slug}`,
  })
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  if (!service) notFound()

  const faqs = service.faqs ?? []

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { '@type': 'Organization', name: 'Boylar' },
        }}
      />
      {faqs.length > 0 ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }}
        />
      ) : null}

      <PageHeader eyebrow="Service" title={service.title} description={service.tagline}>
        <span className="mt-2 grid size-12 place-items-center rounded-xl border border-line bg-elevated text-accent">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
      </PageHeader>

      <Section>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="mb-8 text-lg leading-relaxed text-fg">{service.summary}</p>
              <RichText data={service.body} />
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
              {service.deliverables && service.deliverables.length > 0 ? (
                <Card className="p-7">
                  <h2 className="mb-5 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    What you receive
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((entry) => (
                      <li key={entry.id ?? entry.item} className="flex gap-3 text-sm text-fg-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {entry.item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ) : null}

              {service.techStack && service.techStack.length > 0 ? (
                <div>
                  <h2 className="mb-4 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    Technologies
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {service.techStack.map((entry) => (
                      <li
                        key={entry.id ?? entry.name}
                        className="rounded-full border border-line bg-elevated px-3 py-1.5 font-mono text-xs text-fg-muted"
                      >
                        {entry.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </Section>

      {service.features && service.features.length > 0 ? (
        <Section className="border-y border-line bg-surface">
          <Container size="wide">
            <SectionHeading eyebrow="Included" title={`Inside ${service.title}`} />
            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {service.features.map((feature, i) => (
                <Reveal as="li" key={feature.id ?? feature.title} delay={i * 60}>
                  <Card className="h-full p-7">
                    <h3 className="mb-2 font-display text-base font-medium">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-fg-muted">{feature.description}</p>
                  </Card>
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {faqs.length > 0 ? (
        <Section>
          <Container size="wide">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <SectionHeading
                eyebrow="Questions"
                title={`About ${service.title.toLowerCase()}`}
                className="lg:sticky lg:top-28 lg:self-start"
              />
              <Accordion items={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
            </div>
          </Container>
        </Section>
      ) : null}

      <CTA
        title={`Need help with ${service.title.toLowerCase()}?`}
        description="Tell us the problem in a few sentences. We will tell you honestly whether this is the right service for it."
      />
    </>
  )
}
