import { cn } from '@/lib/utils'

export function Card({
  className,
  children,
  interactive = false,
}: {
  className?: string
  children: React.ReactNode
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-card border border-line bg-surface',
        interactive &&
          'group transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-line-strong hover:bg-elevated',
        className,
      )}
    >
      {children}
    </div>
  )
}
