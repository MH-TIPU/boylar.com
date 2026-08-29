import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import {
  PlatformList,
  productTypeLabel,
  StatusBadge,
} from '@/components/ui/ProductBadges'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mediaAlt, mediaUrl } from '@/lib/media'
import { formatTierPrice } from '@/lib/pricing'
import type { Product } from '@/payload-types'

/** Cheapest concrete plan, used as the "from" price on cards. */
function fromPrice(product: Product) {
  const tiers = product.pricing?.tiers ?? []
  if (tiers.length === 0) return null

  if (tiers.some((t) => t.priceType === 'free')) return 'Free plan available'

  const paid = tiers
    .filter((t) => t.priceType === 'fixed' && typeof t.price === 'number')
    .sort((a, b) => (a.price ?? 0) - (b.price ?? 0))

  const cheapest = paid[0]
  if (!cheapest) return null

  const price = formatTierPrice(cheapest, product.pricing?.currency)
  return `From ${price.symbol}${price.amount}${price.period}`
}

export function ProductsGrid({
  products,
  eyebrow = 'Our products',
  title = 'Software we built and maintain ourselves',
  description = 'Not client work — our own products, sold and supported directly. Every one started as a problem we kept solving by hand.',
  showHeading = true,
}: {
  products: Product[]
  eyebrow?: string
  title?: string
  description?: string
  showHeading?: boolean
}) {
  if (products.length === 0) return null

  return (
    <Section>
      <Container size="wide">
        {showHeading ? (
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        ) : null}

        <ul className={showHeading ? 'mt-14 grid gap-5 md:grid-cols-2' : 'grid gap-5 md:grid-cols-2'}>
          {products.map((product, i) => {
            const logo = mediaUrl(product.logo, 'thumbnail')
            const price = fromPrice(product)

            return (
              <Reveal as="li" key={product.id} delay={i * 60}>
                <Card interactive className="h-full">
                  <Link href={`/products/${product.slug}`} className="flex h-full flex-col gap-4 p-7">
                    <div className="flex items-start gap-4">
                      {logo ? (
                        <Image
                          src={logo}
                          alt={mediaAlt(product.logo, product.title)}
                          width={48}
                          height={48}
                          className="size-12 shrink-0 rounded-xl border border-line object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="grid size-12 shrink-0 place-items-center rounded-xl border border-line bg-elevated font-display text-lg font-semibold text-accent"
                        >
                          {product.title.charAt(0)}
                        </span>
                      )}

                      <div className="flex min-w-0 flex-col gap-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-medium">{product.title}</h3>
                          <StatusBadge status={product.availability} />
                        </div>
                        <p className="font-mono text-xs tracking-wider text-accent uppercase">
                          {productTypeLabel(product.productType)}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-fg-muted">{product.summary}</p>

                    <PlatformList platforms={product.platforms} />

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                      <span className="text-sm text-fg">{price ?? 'Pricing on request'}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                        Details
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
      </Container>
    </Section>
  )
}
