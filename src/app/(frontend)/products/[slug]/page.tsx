import { ArrowLeft, BookOpen, Download, ExternalLink, Github, PlayCircle } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CTA } from '@/components/sections/CTA'
import { PricingTiers } from '@/components/sections/PricingTiers'
import { Accordion } from '@/components/ui/Accordion'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { JsonLd } from '@/components/ui/JsonLd'
import { PlatformList, productTypeLabel, StatusBadge } from '@/components/ui/ProductBadges'
import { Reveal } from '@/components/ui/Reveal'
import { RichText } from '@/components/ui/RichText'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mediaAlt, mediaDimensions, mediaUrl } from '@/lib/media'
import { getProductBySlug, getProducts, staticParams } from '@/lib/payload'
import { schemaPrice } from '@/lib/pricing'
import { buildMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/utils'

export const revalidate = 3600

export function generateStaticParams() {
  return staticParams(async () => (await getProducts()).map((p) => ({ slug: p.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}

  return buildMetadata({
    seo: product.seo,
    fallbackTitle: `${product.title} — ${product.tagline}`,
    fallbackDescription: product.summary,
    path: `/products/${product.slug}`,
  })
}

/** External links, in the order a buyer is most likely to want them. */
const LINK_ORDER = [
  { key: 'demo', label: 'Live demo', icon: PlayCircle, primary: true },
  { key: 'website', label: 'Visit site', icon: ExternalLink, primary: false },
  { key: 'wordpressOrg', label: 'WordPress.org', icon: ExternalLink, primary: false },
  { key: 'appStore', label: 'App Store', icon: ExternalLink, primary: false },
  { key: 'playStore', label: 'Google Play', icon: ExternalLink, primary: false },
  { key: 'download', label: 'Download', icon: Download, primary: false },
  { key: 'docs', label: 'Documentation', icon: BookOpen, primary: false },
  { key: 'github', label: 'GitHub', icon: Github, primary: false },
] as const

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const logo = mediaUrl(product.logo, 'thumbnail')
  const cover = mediaUrl(product.coverImage, 'wide')
  const tiers = product.pricing?.tiers ?? []
  const faqs = product.faqs ?? []

  const links = LINK_ORDER.map((entry) => ({
    ...entry,
    href: product.links?.[entry.key],
  })).filter((entry): entry is typeof entry & { href: string } => Boolean(entry.href))

  const offers = tiers
    .map((tier) => {
      const price = schemaPrice(tier)
      if (price === null) return null
      return {
        '@type': 'Offer',
        name: tier.name,
        price,
        priceCurrency: product.pricing?.currency ?? 'USD',
      }
    })
    .filter(Boolean)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: product.title,
          description: product.summary,
          url: absoluteUrl(`/products/${product.slug}`),
          applicationCategory: 'BusinessApplication',
          ...(product.platforms && product.platforms.length > 0
            ? { operatingSystem: product.platforms.join(', ') }
            : {}),
          publisher: { '@type': 'Organization', name: 'boylar' },
          ...(offers.length > 0 ? { offers } : {}),
        }}
      />

      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
        />
        <div aria-hidden className="absolute inset-0 bg-glow opacity-60" />

        <Container size="wide" className="relative">
          <div className="flex flex-col gap-6 py-16 sm:py-20">
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" aria-hidden /> All products
            </Link>

            <div className="flex flex-wrap items-center gap-4">
              {logo ? (
                <Image
                  src={logo}
                  alt={mediaAlt(product.logo, product.title)}
                  width={64}
                  height={64}
                  className="size-16 rounded-2xl border border-line object-cover"
                />
              ) : null}
              <div className="flex flex-col gap-2">
                <p className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider text-accent uppercase">
                  {productTypeLabel(product.productType)}
                  <StatusBadge status={product.availability} />
                </p>
                <h1 className="text-display-lg leading-[1.05] font-semibold">{product.title}</h1>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted">{product.tagline}</p>

            <PlatformList platforms={product.platforms} />

            {links.length > 0 ? (
              <div className="flex flex-wrap gap-3 pt-2">
                {links.map((link) => (
                  <ButtonLink
                    key={link.key}
                    href={link.href}
                    variant={link.primary ? 'primary' : 'secondary'}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <link.icon className="size-4" aria-hidden /> {link.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {cover ? (
        <Container size="wide" className="relative -mt-8">
          <div className="relative aspect-16/9 overflow-hidden rounded-panel border border-line bg-elevated sm:aspect-3/1">
            <Image
              src={cover}
              alt={mediaAlt(product.coverImage, product.title)}
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
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="mb-8 text-lg leading-relaxed text-fg">{product.summary}</p>
              <RichText data={product.body} />
            </div>

            {product.specs && product.specs.length > 0 ? (
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <Card className="p-7">
                  <h2 className="mb-5 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                    Specifications
                  </h2>
                  <dl className="flex flex-col gap-3.5">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.id ?? spec.label}
                        className="flex justify-between gap-4 border-b border-line pb-3.5 last:border-0 last:pb-0"
                      >
                        <dt className="text-sm text-fg-subtle">{spec.label}</dt>
                        <dd className="text-right text-sm text-fg">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              </aside>
            ) : null}
          </div>
        </Container>
      </Section>

      {product.features && product.features.length > 0 ? (
        <Section className="border-y border-line bg-surface">
          <Container size="wide">
            <SectionHeading eyebrow="Features" title={`What ${product.title} does`} />
            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, i) => (
                <Reveal as="li" key={feature.id ?? feature.title} delay={i * 60}>
                  <Card className="h-full p-7">
                    <h3 className="mb-2 font-display text-base font-medium">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-fg-muted">{feature.description}</p>
                  </Card>
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {product.gallery && product.gallery.length > 0 ? (
        <Section>
          <Container size="wide">
            <SectionHeading eyebrow="Screenshots" title="A look inside" />
            <ul className="mt-12 grid gap-6 md:grid-cols-2">
              {product.gallery.map((entry) => {
                const url = mediaUrl(entry.image, 'wide')
                if (!url) return null
                const { width, height } = mediaDimensions(entry.image)

                return (
                  <li key={entry.id ?? url} className="flex flex-col gap-3">
                    <Image
                      src={url}
                      alt={mediaAlt(entry.image, entry.caption ?? product.title)}
                      width={width}
                      height={height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full rounded-card border border-line"
                    />
                    {entry.caption ? (
                      <p className="text-sm text-fg-subtle">{entry.caption}</p>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </Container>
        </Section>
      ) : null}

      {tiers.length > 0 ? (
        <Section id="pricing" className="border-y border-line bg-surface">
          <Container size="wide">
            <SectionHeading
              eyebrow="Pricing"
              title="Plans"
              description="No hidden tiers and no per-seat surprises. What is listed is what you pay."
              align="center"
              className="mb-12"
            />
            <PricingTiers pricing={product.pricing} />
          </Container>
        </Section>
      ) : null}

      {faqs.length > 0 ? (
        <Section>
          <Container size="wide">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <SectionHeading
                eyebrow="Questions"
                title={`About ${product.title}`}
                className="lg:sticky lg:top-28 lg:self-start"
              />
              <Accordion items={faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
            </div>
          </Container>
        </Section>
      ) : null}

      <CTA
        title={`Questions about ${product.title}?`}
        description="Ask us anything before you buy — including whether it is actually the right fit. We would rather tell you no than sell you the wrong thing."
        primaryLabel="Talk to us"
        primaryHref="/contact"
      />
    </>
  )
}
