import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'

import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { mediaAlt, mediaUrl } from '@/lib/media'
import { getPosts } from '@/lib/payload'
import { formatDate } from '@/lib/utils'

export const revalidate = 900

export const metadata: Metadata = pageMetadata({
  title: 'Insights',
  description:
    'Practical notes on building, running, and securing business technology — written by the engineers doing the work.',
  path: '/insights',
})

export default async function InsightsPage() {
  const posts = await getPosts()

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Notes from the work"
        description="Practical writing on software, infrastructure, and the decisions that make technology cheap or expensive to live with. No thought leadership."
      />

      <Section>
        <Container size="wide">
          {posts.length === 0 ? (
            <div className="rounded-panel border border-dashed border-line-strong p-14 text-center">
              <h2 className="mb-3 font-display text-xl font-medium">No articles published yet</h2>
              <p className="mx-auto max-w-md text-sm text-fg-muted">
                Articles are written in the CMS. Publish one and it will appear here.
              </p>
            </div>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => {
                const cover = mediaUrl(post.coverImage, 'card')

                return (
                  <Reveal as="li" key={post.id} delay={i * 60}>
                    <Card interactive className="h-full">
                      <Link href={`/insights/${post.slug}`} className="flex h-full flex-col">
                        {cover ? (
                          <div className="relative aspect-16/9 overflow-hidden bg-elevated">
                            <Image
                              src={cover}
                              alt={mediaAlt(post.coverImage, post.title)}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                            />
                          </div>
                        ) : null}

                        <div className="flex flex-1 flex-col gap-3 p-7">
                          <time
                            dateTime={post.publishedAt}
                            className="font-mono text-xs tracking-wider text-fg-subtle"
                          >
                            {formatDate(post.publishedAt)}
                          </time>
                          <h2 className="font-display text-lg leading-snug font-medium">
                            {post.title}
                          </h2>
                          <p className="text-sm leading-relaxed text-fg-muted">{post.excerpt}</p>
                          <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-accent">
                            Read
                            <ArrowUpRight
                              aria-hidden
                              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </span>
                        </div>
                      </Link>
                    </Card>
                  </Reveal>
                )
              })}
            </ul>
          )}
        </Container>
      </Section>

      <CTA />
    </>
  )
}
