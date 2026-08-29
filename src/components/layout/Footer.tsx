import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import type { Navigation, SiteSetting } from '@/payload-types'

import { Logo } from './Logo'
import { NewsletterForm } from './NewsletterForm'

const SOCIAL_LABELS: Record<string, string> = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  x: 'X',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  dribbble: 'Dribbble',
  behance: 'Behance',
}

export function Footer({
  settings,
  navigation,
}: {
  settings: SiteSetting
  navigation: Navigation
}) {
  const year = new Date().getFullYear()
  const address = settings.address
  const addressLine = [address?.line1, address?.city, address?.country].filter(Boolean).join(', ')

  return (
    <footer className="border-t border-line bg-surface">
      <Container size="wide">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="boylar — home">
              <Logo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              {settings.description}
            </p>

            <ul className="flex flex-col gap-3 text-sm text-fg-muted">
              {settings.email ? (
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-accent" aria-hidden />
                  <a href={`mailto:${settings.email}`} className="hover:text-fg">
                    {settings.email}
                  </a>
                </li>
              ) : null}
              {settings.phone ? (
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-accent" aria-hidden />
                  <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="hover:text-fg">
                    {settings.phone}
                  </a>
                </li>
              ) : null}
              {addressLine ? (
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <span>{addressLine}</span>
                </li>
              ) : null}
            </ul>

            <div className="max-w-sm">
              <p className="mb-3 font-display text-sm font-medium">
                Occasional notes on building software well
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {(navigation.footer ?? []).map((column) => (
              <div key={column.id ?? column.heading}>
                <h2 className="mb-4 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                  {column.heading}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {(column.links ?? []).map((link) => (
                    <li key={link.id ?? link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-fg-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-line py-7 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-subtle">
            © {year} {settings.legalName || settings.siteName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {(settings.social ?? []).map((item) => (
              <li key={item.id ?? item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-fg-subtle transition-colors hover:text-accent"
                >
                  {SOCIAL_LABELS[item.platform] ?? item.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
