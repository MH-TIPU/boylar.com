import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CTA } from '@/components/sections/CTA'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { mediaAlt, mediaUrl } from '@/lib/media'
import { getPostBySlug, getPosts, staticParams } from '@/lib/payload'
import { buildMetadata } from '@/lib/seo'
import { absoluteUrl, formatDate } from '@/lib/utils'
import type { User } from '@/payload-types'

export const revalidate = 900

export function generateStaticParams() {
  return staticParams(async () => (await getPosts()).map((post) => ({ slug: post.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return buildMetadata({
    seo: post.seo,
    fallbackTitle: post.title,
    fallbackDescription: post.excerpt,
    path: `/insights/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
  })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const cover = mediaUrl(post.coverImage, 'wide')
  const author = typeof post.author === 'object' ? (post.author as User) : null

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          url: absoluteUrl(`/insights/${post.slug}`),
          author: { '@type': author ? 'Person' : 'Organization', name: author?.name ?? 'boylar' },
          publisher: { '@type': 'Organization', name: 'boylar' },
        }}
      />

      <Section spacing="tight">
        <Container size="narrow">
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden /> All insights
          </Link>

          <article>
            <header className="mb-10 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider text-fg-subtle">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {author ? (
                  <>
                    <span aria-hidden className="size-1 rounded-full bg-fg-subtle/40" />
                    <span>{author.name}</span>
                  </>
                ) : null}
              </div>

              <h1 className="text-display-md leading-[1.1] font-semibold">{post.title}</h1>
              <p className="text-lg leading-relaxed text-fg-muted">{post.excerpt}</p>

              {post.tags && post.tags.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((entry) => (
                    <li
                      key={entry.id ?? entry.tag}
                      className="rounded-full border border-line bg-elevated px-3 py-1 font-mono text-xs text-fg-muted"
                    >
                      {entry.tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </header>

            {cover ? (
              <div className="relative mb-12 aspect-16/9 overflow-hidden rounded-panel border border-line bg-elevated">
                <Image
                  src={cover}
                  alt={mediaAlt(post.coverImage, post.title)}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            ) : null}

            <RichText data={post.content} className="max-w-none" />
          </article>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
