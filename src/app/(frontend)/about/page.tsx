import { Handshake, Rocket, ScrollText, Wrench } from 'lucide-react'
import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { Process } from '@/components/sections/Process'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getAwards, getTestimonials } from '@/lib/payload'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'Boylar is a full-service IT firm covering software, infrastructure, design, and managed support — staffed in-house so nothing gets subcontracted behind your back.',
  path: '/about',
})

const VALUES = [
  {
    icon: Wrench,
    title: 'Build it to be maintained',
    description:
      'The measure of good engineering is how cheap the second year is, not how fast the first demo arrived. We write for the person who inherits it.',
  },
  {
    icon: Handshake,
    title: 'Say the inconvenient thing',
    description:
      'If a request will not work, if a deadline is unrealistic, or if you do not need what you asked us to quote — we say so before invoicing, not after.',
  },
  {
    icon: ScrollText,
    title: 'Leave nothing undocumented',
    description:
      'Code, networks, and credentials are handed over in a form your team can actually use. Nothing important lives only in one engineer’s head.',
  },
  {
    icon: Rocket,
    title: 'Ship in visible increments',
    description:
      'Two-week cycles with something working at the end of each. You should never wait months wondering what you are paying for.',
  },
]

export default async function AboutPage() {
  const [testimonials, awards] = await Promise.all([getTestimonials(), getAwards()])

  return (
    <>
      <PageHeader
        eyebrow="About Boylar"
        title="One team accountable for the whole stack"
        description="Most businesses end up with a developer, a hardware vendor, a designer, and an agency — none of whom talk to each other, all of whom blame the others when something breaks. We exist to be the single answer to that."
      />

      <Section>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-5">
              <SectionHeading eyebrow="Why we exist" title="The coordination problem" />
              <p className="leading-relaxed text-fg-muted">
                The expensive failures in business technology are rarely technical. They happen in
                the gaps — between the application and the server it runs on, between the design and
                what got built, between the vendor who installed it and the one now supporting it.
              </p>
              <p className="leading-relaxed text-fg-muted">
                Boylar covers all six disciplines in-house precisely so those gaps have an owner.
                When your storefront is slow, we do not need to arrange a call between three
                companies to find out whether it is the code, the database, or the network. It is
                one team, and the answer is our responsibility either way.
              </p>
              <p className="leading-relaxed text-fg-muted">
                That is the whole proposition. Everything else — the sprint cadence, the
                documentation, the SLA — is machinery in service of it.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={i * 70}>
                  <Card className="flex h-full flex-col gap-3 p-7">
                    <span className="grid size-10 place-items-center rounded-lg border border-line bg-elevated text-accent">
                      <value.icon className="size-4.5" aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-medium">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-fg-muted">{value.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Stats />
      <Process />

      {awards.length > 0 ? (
        <Section>
          <Container size="wide">
            <SectionHeading eyebrow="Recognition" title="Awards and accreditations" />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, i) => (
                <Reveal as="li" key={award.id} delay={i * 60}>
                  <Card className="flex h-full flex-col gap-2 p-7">
                    <p className="font-mono text-xs tracking-widest text-accent">{award.year}</p>
                    <h3 className="font-display text-base font-medium">{award.title}</h3>
                    {award.organization ? (
                      <p className="text-sm text-fg-subtle">{award.organization}</p>
                    ) : null}
                    {award.description ? (
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                        {award.description}
                      </p>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Testimonials testimonials={testimonials} />
      <CTA title="Work with a team that owns the whole problem" />
    </>
  )
}
