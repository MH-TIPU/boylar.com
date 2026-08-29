import { JetBrains_Mono, Poppins } from 'next/font/google'

/**
 * Poppins is the brand typeface (see boylar-kit/BRAND-GUIDE.md). Loaded through
 * next/font so it is self-hosted at build time — no runtime request to Google,
 * and no layout shift from a late-arriving webface.
 *
 * The kit ships Medium/SemiBold/Bold as TTF; Regular is needed for body copy,
 * so the full family is pulled from Google Fonts (same SIL OFL licence).
 */
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

/** Used only for small monospace labels and metrics — not a brand typeface. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})
