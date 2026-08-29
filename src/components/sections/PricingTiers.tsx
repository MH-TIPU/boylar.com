import { Check } from 'lucide-react'

import { ButtonLink } from '@/components/ui/Button'
import { formatTierPrice } from '@/lib/pricing'
import { cn } from '@/lib/utils'
import type { Product } from '@/payload-types'

type Pricing = NonNullable<Product['pricing']>

export function PricingTiers({ pricing }: { pricing?: Pricing | null }) {
  const tiers = pricing?.tiers ?? []
  if (tiers.length === 0) return null

  return (
    <div className="flex flex-col gap-6">
      <ul
        className={cn(
          'grid gap-5',
          tiers.length === 2 && 'sm:grid-cols-2',
          tiers.length === 3 && 'md:grid-cols-3',
          tiers.length >= 4 && 'sm:grid-cols-2 xl:grid-cols-4',
        )}
      >
        {tiers.map((tier) => {
          const price = formatTierPrice(tier, pricing?.currency)

          return (
            <li key={tier.id ?? tier.name} className="flex">
              <div
                className={cn(
                  'flex w-full flex-col gap-5 rounded-card border p-7',
                  tier.highlighted
                    ? 'border-accent/50 bg-accent-soft'
                    : 'border-line bg-surface',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-medium">{tier.name}</h3>
                  {tier.badge ? (
                    <span className="rounded-full bg-accent-solid px-2.5 py-0.5 text-[0.6875rem] font-medium text-accent-fg">
                      {tier.badge}
                    </span>
                  ) : null}
                </div>

                <p className="flex items-baseline gap-1">
                  {price.symbol ? (
                    <span className="font-display text-xl text-fg-muted">{price.symbol}</span>
                  ) : null}
                  <span className="font-display text-3xl font-semibold">{price.amount}</span>
                  {price.period ? (
                    <span className="text-sm text-fg-subtle">{price.period}</span>
                  ) : null}
                </p>

                {tier.priceNote ? (
                  <p className="-mt-3 text-xs text-fg-subtle">{tier.priceNote}</p>
                ) : null}

                {tier.description ? (
                  <p className="text-sm leading-relaxed text-fg-muted">{tier.description}</p>
                ) : null}

                {tier.features && tier.features.length > 0 ? (
                  <ul className="flex flex-col gap-2.5 border-t border-line pt-5">
                    {tier.features.map((entry) => (
                      <li key={entry.id ?? entry.item} className="flex gap-2.5 text-sm text-fg-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {entry.item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ButtonLink
                  href={tier.ctaHref || '/quote'}
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="mt-auto w-full"
                  {...(tier.ctaHref?.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  {tier.ctaLabel || 'Get started'}
                </ButtonLink>
              </div>
            </li>
          )
        })}
      </ul>

      {pricing?.note ? <p className="text-xs text-fg-subtle">{pricing.note}</p> : null}
    </div>
  )
}
