import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'

import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { getCareers, getSiteSettings } from '@/lib/payload'

export const revalidate = 900

export const metadata: Metadata = pageMetadata({
  title: 'Careers',
  description:
    'Open roles at Boylar across engineering, design, infrastructure, and operations.',
  path: '/careers',
})

const TYPE_LABELS: Record<string, string> = {
  'full-time': 'Full-time',
  'part-time': 'Part-time',
  contract: 'Contract',
  internship: 'Internship',
}

export default async function CareersPage() {
  const [careers, settings] = await Promise.all([getCareers(), getSiteSettings()])

  const byDepartment = careers.reduce<Record<string, typeof careers>>((acc, role) => {
    const key = role.department
    acc[key] = [...(acc[key] ?? []), role]
    return acc
  }, {})

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Work on systems that matter to the people using them"
        description="We hire people who care about the second year of a codebase, not just the launch. Direct client contact, no layers of account management, and the time to do the work properly."
      />

      <Section>
        <Container size="wide">
          {careers.length === 0 ? (
            <div className="rounded-panel border border-dashed border-line-strong p-14 text-center">
              <h2 className="mb-3 font-display text-xl font-medium">No open roles right now</h2>
              <p className="mx-auto mb-6 max-w-md text-sm text-fg-muted">
                We keep good applications on file. If you think you would be a fit, send us your
                work and we will get in touch when something opens.
              </p>
              <a
                href={`mailto:${settings.email}?subject=Speculative application`}
                className="text-sm font-medium text-accent hover:text-accent-hover"
              >
                {settings.email}
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-14">
              {Object.entries(byDepartment).map(([department, roles]) => (
                <div key={department}>
                  <h2 className="mb-6 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    {department} · {roles.length}
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {roles.map((role, i) => (
                      <Reveal as="li" key={role.id} delay={i * 50}>
                        <Card interactive>
                          <Link
                            href={`/careers/${role.slug}`}
                            className="flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="flex flex-col gap-2">
                              <h3 className="font-display text-lg font-medium">{role.title}</h3>
                              <p className="max-w-xl text-sm leading-relaxed text-fg-muted">
                                {role.summary}
                              </p>
                              <ul className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-fg-subtle">
                                <li className="flex items-center gap-1.5">
                                  <MapPin className="size-3.5" aria-hidden /> {role.location}
                                </li>
                                <li className="flex items-center gap-1.5">
                                  <Briefcase className="size-3.5" aria-hidden />
                                  {TYPE_LABELS[role.employmentType] ?? role.employmentType}
                                </li>
                                {role.salaryRange ? <li>{role.salaryRange}</li> : null}
                              </ul>
                            </div>
                            <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent">
                              View role
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
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTA
        title="Not a role, but still interested?"
        description="If our work looks like the kind of thing you want to be doing, send us something you have built."
        primaryLabel="Get in touch"
        primaryHref="/contact"
      />
    </>
  )
}
