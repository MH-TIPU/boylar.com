import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArticleAside } from '@/components/sections/ArticleAside'
import { CTA } from '@/components/sections/CTA'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mediaAlt, mediaUrl } from '@/lib/media'
import { getPostBySlug, getPosts, staticParams } from '@/lib/payload'
import { buildMetadata } from '@/lib/seo'
import { buildToc, readingTime } from '@/lib/toc'
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
  const toc = buildToc(post.content)
  const minutes = readingTime(post.content)

  const related = (await getPosts({ limit: 4 })).filter((item) => item.id !== post.id).slice(0, 3)

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
          ...(cover ? { image: absoluteUrl(cover) } : {}),
        }}
      />

      {/* Title block spans the full container so the page does not open on a
          narrow column floating in empty space. */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
        />
        <div aria-hidden className="absolute inset-0 bg-glow opacity-50" />

        <Container size="wide" className="relative">
          <div className="flex flex-col gap-6 py-16 sm:py-20">
            <Link
              href="/insights"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" aria-hidden /> All insights
            </Link>

            <h1 className="max-w-4xl text-display-lg leading-[1.05] font-semibold">{post.title}</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs tracking-wider text-fg-subtle">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden className="size-1 rounded-full bg-fg-subtle/40" />
              <span>{minutes} min read</span>
              {author ? (
                <>
                  <span aria-hidden className="size-1 rounded-full bg-fg-subtle/40" />
                  <span>{author.name}</span>
                </>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {cover ? (
        <Container size="wide" className="relative -mt-8">
          <div className="relative aspect-16/9 overflow-hidden rounded-panel border border-line bg-elevated sm:aspect-3/1">
            <Image
              src={cover}
              alt={mediaAlt(post.coverImage, post.title)}
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
          {/*
            The prose column is capped at a comfortable reading measure; the
            sidebar occupies the space that would otherwise sit empty on wide
            screens. Below `lg` the aside drops away entirely.
          */}
          <div className="lg:grid lg:grid-cols-[minmax(0,40rem)_15rem] lg:justify-center lg:gap-16 xl:gap-24">
            {/* Centred and capped below `lg`, where the grid collapses and the column
                would otherwise stretch to the full container. */}
            <article className="mx-auto w-full min-w-0 max-w-[40rem] lg:mx-0 lg:max-w-none">
              <RichText data={post.content} anchors className="max-w-none text-lg" />

              {post.tags && post.tags.length > 0 ? (
                <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
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
            </article>

            <ArticleAside toc={toc} authorName={author?.name} publishedAt={post.publishedAt} />
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section className="border-t border-line bg-surface">
          <Container size="wide">
            <SectionHeading eyebrow="Keep reading" title="More from the team" />
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <Card interactive className="h-full">
                    <Link href={`/insights/${item.slug}`} className="flex h-full flex-col gap-3 p-7">
                      <time
                        dateTime={item.publishedAt}
                        className="font-mono text-xs tracking-wider text-fg-subtle"
                      >
                        {formatDate(item.publishedAt)}
                      </time>
                      <h3 className="font-display text-base leading-snug font-medium">
                        {item.title}
                      </h3>
                      <p className="line-clamp-3 text-sm leading-relaxed text-fg-muted">
                        {item.excerpt}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-accent">
                        Read
                        <ArrowUpRight
                          aria-hidden
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CTA />
    </>
  )
}
