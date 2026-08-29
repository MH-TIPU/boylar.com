import { cn } from '@/lib/utils'

/**
 * Placeholder wordmark until a real logo is supplied. The mark is an abstract
 * "B" built from two stacked node shapes — reads as network/infrastructure.
 */
export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        role="img"
        aria-label="Boylar"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="boylar-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D4FF" />
            <stop offset="1" stopColor="#7B61FF" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#boylar-mark)" />
        <path
          d="M11 8.5h6.2a4.15 4.15 0 0 1 0 8.3H11V8.5Zm0 8.3h6.9a4.35 4.35 0 0 1 0 8.7H11v-8.7Z"
          fill="#04121A"
          fillOpacity="0.92"
        />
      </svg>
      {showWordmark ? (
        <span className="font-display text-lg font-semibold tracking-tight">Boylar</span>
      ) : null}
    </span>
  )
}
