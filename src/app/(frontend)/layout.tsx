import type { Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header, type NavLink } from '@/components/layout/Header'
import { inter, jetbrainsMono, spaceGrotesk } from '@/lib/fonts'
import { getNavigation, getSiteSettings } from '@/lib/payload'
import { absoluteUrl } from '@/lib/utils'

import '@/styles/globals.css'

/** Used before the CMS globals have been filled in. */
const FALLBACK_NAV: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  const name = settings.siteName || 'Boylar'
  const tagline = settings.tagline || 'Full-service IT partner'

  return {
    metadataBase: new URL(absoluteUrl()),
    title: {
      default: `${name} — ${tagline}`,
      template: `%s · ${name}`,
    },
    description: settings.description,
    applicationName: name,
    openGraph: {
      type: 'website',
      siteName: name,
      title: `${name} — ${tagline}`,
      description: settings.description,
      url: absoluteUrl(),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} — ${tagline}`,
      description: settings.description,
    },
    robots: { index: true, follow: true },
    ...(settings.googleSiteVerification
      ? { verification: { google: settings.googleSiteVerification } }
      : {}),
  }
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const [settings, navigation] = await Promise.all([getSiteSettings(), getNavigation()])

  const links: NavLink[] =
    navigation.header && navigation.header.length > 0
      ? navigation.header.map((item) => ({ label: item.label, href: item.href }))
      : FALLBACK_NAV

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-fg"
        >
          Skip to content
        </a>

        <Header
          links={links}
          ctaLabel={navigation.ctaLabel || 'Get a quote'}
          ctaHref={navigation.ctaHref || '/quote'}
        />

        <main id="main" className="pt-18">
          {children}
        </main>

        <Footer settings={settings} navigation={navigation} />
      </body>
    </html>
  )
}
