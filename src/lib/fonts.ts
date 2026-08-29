import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'

/**
 * Self-hosted by next/font at build time — no requests to Google at runtime,
 * and no layout shift from a late-arriving webfont.
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})
