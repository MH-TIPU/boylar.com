import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import type { Service } from '@/payload-types'

export function ServicesGrid({
  services,
  eyebrow = 'What we do',
  title = 'Six disciplines, one accountable team',
  description = 'Most firms cover one of these and subcontract the rest. We staff all six, so the handoffs happen inside our building instead of between your vendors.',
}: {
  services: Service[]
  eyebrow?: string
  title?: string
  description?: string
}) {
  return (
    <Section>
      <Container size="wide">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 60}>
              <Card interactive className="h-full">
                <Link href={`/services/${service.slug}`} className="flex h-full flex-col gap-4 p-7">
                  <span className="grid size-11 place-items-center rounded-xl border border-line bg-elevated text-accent transition-colors duration-500 group-hover:border-accent/40 group-hover:bg-accent-soft">
                    <ServiceIcon name={service.icon} />
                  </span>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-medium">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-fg-muted">{service.summary}</p>
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-accent">
                    Explore
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
