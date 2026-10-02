import { ArrowRight } from 'lucide-react'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

import { HeroStack } from './HeroStack'

/**
 * Trust line under the hero. These duplicate the Stats section, so that
 * section is not rendered on the home page — only on About.
 */
const PROOF = [
  { value: '6', label: 'disciplines in-house' },
  { value: '2wk', label: 'sprint cycle' },
  { value: '0', label: 'work subcontracted' },
  { value: '100%', label: 'code ownership' },
]

export function Hero({ tagline }: { tagline?: string | null }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-aurora" />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(80%_70%_at_50%_0%,black,transparent)]"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-14 pt-16 pb-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-28 lg:pb-20">
          <div className="flex flex-col items-start gap-7">
            <p className="animate-in inline-flex items-center gap-2.5 rounded-full border border-line bg-elevated/60 py-1.5 pr-4 pl-3 font-mono text-xs tracking-wider text-fg-muted backdrop-blur-sm">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Available for new projects
            </p>

            <h1
              className="animate-in max-w-xl text-display-lg leading-[1.02] font-semibold text-balance"
              style={{ animationDelay: '80ms' }}
            >
              One IT partner for <span className="text-accent">everything</span> you build
            </h1>

            <p
              className="animate-in max-w-lg text-base leading-relaxed text-fg-muted sm:text-lg"
              style={{ animationDelay: '160ms' }}
            >
              {tagline ??
                'Software, infrastructure, design, and support — engineered by one team that stays accountable from first sprint to ongoing operations.'}
            </p>

            <div
              className="animate-in flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '240ms' }}
            >
              <ButtonLink href="/quote" size="lg">
                Start a project <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/work" size="lg" variant="secondary">
                See our work
              </ButtonLink>
            </div>
          </div>

          <div className="animate-in lg:pl-4" style={{ animationDelay: '200ms' }}>
            <HeroStack />
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line py-10 sm:grid-cols-4">
          {PROOF.map((item, i) => (
            <div
              key={item.label}
              className="animate-in flex flex-col-reverse gap-1"
              style={{ animationDelay: `${420 + i * 60}ms` }}
            >
              <dt className="text-sm text-fg-muted">{item.label}</dt>
              <dd className="font-display text-2xl leading-none font-semibold text-accent">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
