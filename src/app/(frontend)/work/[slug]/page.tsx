import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { mediaAlt, mediaDimensions, mediaUrl } from '@/lib/media'
import { getProjectBySlug, getProjects, staticParams } from '@/lib/payload'
import { buildMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/utils'
import type { Service } from '@/payload-types'

export const revalidate = 3600

export function generateStaticParams() {
  return staticParams(async () =>
    (await getProjects()).map((project) => ({ slug: project.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}

  return buildMetadata({
    seo: project.seo,
    fallbackTitle: `${project.title} — ${project.client}`,
    fallbackDescription: project.summary,
    path: `/work/${project.slug}`,
    type: 'article',
  })
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const cover = mediaUrl(project.coverImage, 'wide')
  const services = (project.services ?? []).filter(
    (item): item is Service => typeof item === 'object',
  )

  const facts = [
    { label: 'Client', value: project.client },
    { label: 'Industry', value: project.industry },
    { label: 'Year', value: project.year ? String(project.year) : null },
  ].filter((fact) => Boolean(fact.value))

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          abstract: project.summary,
          url: absoluteUrl(`/work/${project.slug}`),
          creator: { '@type': 'Organization', name: 'boylar' },
        }}
      />

      <PageHeader eyebrow={project.client} title={project.title} description={project.summary}>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden /> All case studies
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover"
            >
              Visit live site <ExternalLink className="size-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </PageHeader>

      {cover ? (
        <Container size="wide" className="relative -mt-10">
          <div className="relative aspect-16/9 overflow-hidden rounded-panel border border-line bg-elevated">
            <Image
              src={cover}
              alt={mediaAlt(project.coverImage, project.title)}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </Container>
      ) : null}

      <Section>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
              <dl className="flex flex-col gap-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="mb-1 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-fg">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {services.length > 0 ? (
                <div>
                  <h2 className="mb-3 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    Services
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-sm text-accent hover:text-accent-hover"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.techStack && project.techStack.length > 0 ? (
                <div>
                  <h2 className="mb-3 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    Stack
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((entry) => (
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

            <div className="flex flex-col gap-12">
              {project.metrics && project.metrics.length > 0 ? (
                <dl className="grid grid-cols-2 gap-6 rounded-panel border border-line bg-surface p-8 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.id ?? metric.label} className="flex flex-col-reverse gap-1.5">
                      <dt className="text-xs leading-snug text-fg-subtle">{metric.label}</dt>
                      <dd className="font-display text-3xl font-semibold text-accent">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {project.challenge ? (
                <div>
                  <h2 className="mb-4 font-display text-2xl font-semibold">The challenge</h2>
                  <RichText data={project.challenge} />
                </div>
              ) : null}

              {project.solution ? (
                <div>
                  <h2 className="mb-4 font-display text-2xl font-semibold">What we built</h2>
                  <RichText data={project.solution} />
                </div>
              ) : null}

              {project.results ? (
                <div>
                  <h2 className="mb-4 font-display text-2xl font-semibold">The result</h2>
                  <RichText data={project.results} />
                </div>
              ) : null}

              {project.gallery && project.gallery.length > 0 ? (
                <ul className="flex flex-col gap-5">
                  {project.gallery.map((entry) => {
                    const url = mediaUrl(entry.image, 'wide')
                    if (!url) return null
                    const { width, height } = mediaDimensions(entry.image)

                    return (
                      <li key={entry.id ?? url}>
                        <Image
                          src={url}
                          alt={mediaAlt(entry.image, project.title)}
                          width={width}
                          height={height}
                          sizes="(max-width: 1024px) 100vw, 800px"
                          className="w-full rounded-card border border-line"
                        />
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <CTA title="Have a similar problem?" />
    </>
  )
}
