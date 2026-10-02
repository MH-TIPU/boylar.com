import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'

import { ContactForm } from '@/components/sections/ContactForm'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getSiteSettings } from '@/lib/payload'
import { telHref } from '@/lib/utils'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Get in touch with boylar about software, infrastructure, design, e-commerce, or managed IT support. We reply within one business day.',
  path: '/contact',
})

export default async function ContactPage() {
  const settings = await getSiteSettings()
  const address = settings.address
  const addressLine = [address?.line1, address?.line2, address?.city, address?.country]
    .filter(Boolean)
    .join(', ')

  const details = [
    settings.email ? { icon: Mail, label: 'Email', value: settings.email, href: `mailto:${settings.email}` } : null,
    settings.phone
      ? { icon: Phone, label: 'Phone', value: settings.phone, href: telHref(settings.phone) }
      : null,
    addressLine ? { icon: MapPin, label: 'Office', value: addressLine, href: null } : null,
    settings.businessHours ? { icon: Clock, label: 'Hours', value: settings.businessHours, href: null } : null,
  ].filter((item) => item !== null)

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what is not working"
        description="A short description of the problem is enough to start. We will tell you honestly whether we are the right people for it."
      />

      <Section>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
            <ContactForm />

            <aside className="flex flex-col gap-6">
              <Card className="flex flex-col gap-5 p-7">
                {details.map((detail) => (
                  <div key={detail.label} className="flex gap-4">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-elevated text-accent">
                      <detail.icon className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="mb-0.5 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm break-words text-fg transition-colors hover:text-accent"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-fg">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </Card>

              <Card className="flex flex-col gap-3 p-7">
                <h2 className="font-display text-base font-medium">Know what you need already?</h2>
                <p className="text-sm leading-relaxed text-fg-muted">
                  The quote form captures scope, budget, and timeline up front, which usually saves a
                  round of back-and-forth.
                </p>
                <Link
                  href="/quote"
                  className="text-sm font-medium text-accent hover:text-accent-hover"
                >
                  Request a quote instead →
                </Link>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
