const SYMBOLS: Record<string, string> = {
  USD: '$',
  BDT: '৳',
  EUR: '€',
  GBP: '£',
}

const PERIOD_LABELS: Record<string, string> = {
  month: '/mo',
  year: '/yr',
  once: '',
}

export function currencySymbol(currency?: string | null) {
  return SYMBOLS[currency ?? 'USD'] ?? '$'
}

/**
 * Renders a plan's price as display parts. Kept separate from the component so
 * the amount can be typeset larger than the symbol and period.
 */
export function formatTierPrice(
  tier: { priceType?: string | null; price?: number | null; period?: string | null },
  currency?: string | null,
) {
  if (tier.priceType === 'free') return { amount: 'Free', symbol: '', period: '' }
  if (tier.priceType === 'custom') return { amount: 'Custom', symbol: '', period: '' }

  const amount = typeof tier.price === 'number' ? tier.price.toLocaleString('en-US') : '—'

  return {
    symbol: currencySymbol(currency),
    amount,
    period: PERIOD_LABELS[tier.period ?? 'year'] ?? '',
  }
}

/** Numeric price for structured data. Free is 0; custom has no fixed price. */
export function schemaPrice(tier: { priceType?: string | null; price?: number | null }) {
  if (tier.priceType === 'free') return 0
  if (tier.priceType === 'fixed' && typeof tier.price === 'number') return tier.price
  return null
}
