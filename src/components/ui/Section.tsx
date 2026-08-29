import { cn } from '@/lib/utils'

/** Consistent vertical rhythm. Every page section goes through this. */
export function Section({
  className,
  children,
  id,
  spacing = 'default',
}: {
  className?: string
  children: React.ReactNode
  id?: string
  spacing?: 'default' | 'tight' | 'loose'
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        spacing === 'tight' && 'py-14 sm:py-20',
        spacing === 'default' && 'py-20 sm:py-28',
        spacing === 'loose' && 'py-24 sm:py-36',
        className,
      )}
    >
      {children}
    </section>
  )
}
