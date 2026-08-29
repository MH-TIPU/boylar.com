import { cn } from '@/lib/utils'

const TYPE_LABELS: Record<string, string> = {
  'wordpress-plugin': 'WordPress plugin',
  'web-app': 'Web app',
  'mobile-app': 'Mobile app',
  'desktop-app': 'Desktop',
  solution: 'Solution',
}

const PLATFORM_LABELS: Record<string, string> = {
  web: 'Web',
  wordpress: 'WordPress',
  ios: 'iOS',
  android: 'Android',
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  'self-hosted': 'Self-hosted',
}

export function productTypeLabel(value?: string | null) {
  return TYPE_LABELS[value ?? ''] ?? 'Product'
}

export function platformLabel(value: string) {
  return PLATFORM_LABELS[value] ?? value
}

/** Live / Beta / Coming soon. Colour-coded, with the label carrying the meaning. */
export function StatusBadge({ status, className }: { status?: string | null; className?: string }) {
  if (!status || status === 'live') return null

  const isBeta = status === 'beta'

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.6875rem] tracking-wide uppercase',
        isBeta
          ? 'border-warning/40 bg-warning/10 text-warning'
          : 'border-line-strong bg-elevated text-fg-muted',
        className,
      )}
    >
      {isBeta ? 'Beta' : 'Coming soon'}
    </span>
  )
}

export function PlatformList({ platforms }: { platforms?: (string | null)[] | null }) {
  const items = (platforms ?? []).filter((p): p is string => Boolean(p))
  if (items.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((platform) => (
        <li
          key={platform}
          className="rounded-md border border-line bg-elevated px-2 py-0.5 font-mono text-[0.6875rem] text-fg-muted"
        >
          {platformLabel(platform)}
        </li>
      ))}
    </ul>
  )
}
