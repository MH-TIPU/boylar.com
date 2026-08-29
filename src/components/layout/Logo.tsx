import Image from 'next/image'

import { cn } from '@/lib/utils'

/**
 * Brand assets from boylar-kit/. The guide requires the supplied files rather
 * than retyped text, so these render the SVGs directly and are never recoloured.
 *
 * `unoptimized` because SVGs gain nothing from the image optimizer, and routing
 * them through it would require relaxing the SVG policy for no benefit.
 *
 * Minimum sizes from the guide: horizontal lockup 90px wide, mark 16px.
 */

const LOCKUP_RATIO = 1201.75 / 428.05

export function Logo({
  className,
  height = 34,
  variant = 'white',
}: {
  className?: string
  height?: number
  /** `white` for dark backgrounds, `colour` for light ones. */
  variant?: 'white' | 'colour'
}) {
  const src =
    variant === 'white'
      ? '/brand/boylar-lockup-horizontal-white.svg'
      : '/brand/boylar-lockup-horizontal.svg'

  return (
    <Image
      src={src}
      alt="boylar"
      height={height}
      width={Math.round(height * LOCKUP_RATIO)}
      priority
      unoptimized
      className={cn('h-auto w-auto', className)}
      style={{ height, width: 'auto' }}
    />
  )
}

/** The mark on its own — for square contexts and tight spaces. */
export function LogoMark({
  className,
  size = 32,
  variant = 'white',
}: {
  className?: string
  size?: number
  variant?: 'white' | 'colour'
}) {
  return (
    <Image
      src={variant === 'white' ? '/brand/boylar-mark-white.svg' : '/brand/boylar-mark.svg'}
      alt="boylar"
      width={size}
      height={size}
      unoptimized
      className={cn('shrink-0', className)}
    />
  )
}
