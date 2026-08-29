import { ArrowLeft, Briefcase, Clock, MapPin, Wallet } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PageHeader } from '@/components/sections/PageHeader'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { getCareerBySlug, getCareers, getSiteSettings, staticParams } from '@/lib/payload'
import { buildMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/utils'

export const revalidate = 900

export function generateStaticParams() {
  return staticParams(async () =>
    (await getCareers()).map((role) => ({ slug: role.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const role = await getCareerBySlug(slug)
  if (!role) return {}

  return buildMetadata({
    seo: role.seo,
    fallbackTitle: role.title,
    fallbackDescription: role.summary,
    path: `/careers/${role.slug}`,
  })
}

const LIST_SECTIONS = [
  { key: 'responsibilities', heading: 'What you will do' },
  { key: 'requirements', heading: 'What we are looking for' },
  { key: 'benefits', heading: 'What we offer' },
] as const

export default async function CareerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [role, settings] = await Promise.all([getCareerBySlug(slug), getSiteSettings()])
  if (!role) notFound()

  const applyTo = role.applyEmail || settings.email
  const facts = [
    { icon: MapPin, label: `${role.location} · ${role.workplace}` },
    { icon: Briefcase, label: role.employmentType },
    ...(role.level ? [{ icon: Clock, label: role.level }] : []),
    ...(role.salaryRange ? [{ icon: Wallet, label: role.salaryRange }] : []),
  ]

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: role.title,
          description: role.summary,
          employmentType: role.employmentType.toUpperCase().replace('-', '_'),
          hiringOrganization: { '@type': 'Organization', name: settings.siteName },
          jobLocation: {
            '@type': 'Place',
            address: { '@type': 'PostalAddress', addressLocality: role.location },
          },
          ...(role.deadline ? { validThrough: role.deadline } : {}),
          datePosted: role.createdAt,
        }}
      />

      <PageHeader eyebrow={role.department} title={role.title} description={role.summary}>
        <div className="mt-4">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden /> All openings
          </Link>
        </div>
      </PageHeader>

      <Section>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <div className="flex flex-col gap-10">
              <RichText data={role.description} />

              {LIST_SECTIONS.map(({ key, heading }) => {
                const items = role[key]
                if (!items || items.length === 0) return null

                return (
                  <div key={key}>
                    <h2 className="mb-4 font-display text-xl font-medium">{heading}</h2>
                    <ul className="flex flex-col gap-2.5">
                      {items.map((entry) => (
                        <li
                          key={entry.id ?? entry.item}
                          className="relative pl-6 text-sm leading-relaxed text-fg-muted"
                        >
                          <span
                            aria-hidden
                            className="absolute top-2 left-1 size-1.5 rounded-full bg-accent"
                          />
                          {entry.item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Card className="flex flex-col gap-6 p-7">
                <ul className="flex flex-col gap-3">
                  {facts.map((fact) => (
                    <li key={fact.label} className="flex items-center gap-3 text-sm text-fg-muted">
                      <fact.icon className="size-4 shrink-0 text-accent" aria-hidden />
                      <span className="capitalize">{fact.label}</span>
                    </li>
                  ))}
                </ul>

                {role.deadline ? (
                  <p className="border-t border-line pt-4 text-xs text-fg-subtle">
                    Applications close {formatDate(role.deadline)}
                  </p>
                ) : null}

                <ButtonLink
                  href={`mailto:${applyTo}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                  size="lg"
                  className="w-full"
                >
                  Apply for this role
                </ButtonLink>

                <p className="text-xs leading-relaxed text-fg-subtle">
                  Send a CV and, if you have one, something you have built. We read every
                  application.
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
