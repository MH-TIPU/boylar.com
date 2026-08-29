import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mediaAlt, mediaUrl } from '@/lib/media'
import type { Project } from '@/payload-types'

export function FeaturedWork({
  projects,
  eyebrow = 'Selected work',
  title = 'Problems we were handed, and what we shipped',
  showAllLink = true,
  limit = 4,
}: {
  projects: Project[]
  eyebrow?: string
  title?: string
  /** Hidden on /work itself, where the link would point at the current page. */
  showAllLink?: boolean
  limit?: number
}) {
  if (projects.length === 0) return null

  return (
    <Section>
      <Container size="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} />
          {showAllLink ? (
            <ButtonLink href="/work" variant="secondary" size="sm">
              All case studies <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.slice(0, limit).map((project, i) => {
            const cover = mediaUrl(project.coverImage, 'wide')

            return (
              <Reveal as="li" key={project.id} delay={i * 70}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block overflow-hidden rounded-panel border border-line bg-surface transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-line-strong"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-elevated">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={mediaAlt(project.coverImage, project.title)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      />
                    ) : (
                      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
                    )}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-7">
                    <p className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider text-fg-subtle uppercase">
                      <span className="text-accent">{project.client}</span>
                      {project.industry ? (
                        <>
                          <span aria-hidden className="size-1 rounded-full bg-fg-subtle/40" />
                          {project.industry}
                        </>
                      ) : null}
                    </p>

                    <h3 className="flex items-start justify-between gap-4 font-display text-xl font-medium">
                      {project.title}
                      <ArrowUpRight
                        aria-hidden
                        className="mt-1 size-5 shrink-0 text-fg-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      />
                    </h3>

                    <p className="text-sm leading-relaxed text-fg-muted">{project.summary}</p>

                    {project.metrics && project.metrics.length > 0 ? (
                      <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-4">
                        {project.metrics.slice(0, 3).map((metric) => (
                          <div key={metric.id ?? metric.label}>
                            <dd className="font-display text-lg font-semibold text-accent">
                              {metric.value}
                            </dd>
                            <dt className="text-xs text-fg-subtle">{metric.label}</dt>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
