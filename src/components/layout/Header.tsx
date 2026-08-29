'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

import { Logo } from './Logo'

export type NavLink = { label: string; href: string }

export function Header({
  links,
  ctaLabel,
  ctaHref,
}: {
  links: NavLink[]
  ctaLabel: string
  ctaHref: string
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll lock while the drawer is open. Closing on navigation is handled by
  // the links themselves, so no effect has to watch the pathname.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo',
        scrolled
          ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <Container size="wide">
        <div className="flex h-18 items-center justify-between gap-6 py-4">
          <Link href="/" aria-label="boylar — home">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition-colors',
                  isActive(link.href)
                    ? 'text-fg'
                    : 'text-fg-muted hover:bg-elevated hover:text-fg',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={ctaHref} size="sm" className="hidden sm:inline-flex">
              {ctaLabel}
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-10 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:text-fg lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden"
      >
        <Container size="wide">
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-xl px-4 py-3 text-base transition-colors',
                  isActive(link.href) ? 'bg-elevated text-fg' : 'text-fg-muted hover:text-fg',
                )}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href={ctaHref}
              size="lg"
              className="mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  )
}
