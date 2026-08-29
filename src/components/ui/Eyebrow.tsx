import { cn } from '@/lib/utils'

/** Small monospace label above a heading. Orients the reader in one glance. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase',
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  )
}
