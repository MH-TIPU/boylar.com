import { ArrowRight } from 'lucide-react'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const PILLARS = ['Software', 'Infrastructure', 'Design', 'E-Commerce', 'Managed IT']

export function Hero({ tagline }: { tagline?: string | null }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div aria-hidden className="absolute inset-0 bg-glow" />

      <Container size="wide" className="relative">
        <div className="flex flex-col items-center gap-8 py-24 text-center sm:py-32 lg:py-40">
          <p className="animate-in inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-4 py-1.5 font-mono text-xs tracking-wider text-fg-muted backdrop-blur-sm">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Available for new projects
          </p>

          <h1
            className="animate-in max-w-4xl text-display-xl leading-[0.95] font-semibold"
            style={{ animationDelay: '80ms' }}
          >
            One IT partner
            <br />
            for <span className="text-gradient">everything you build</span>
          </h1>

          <p
            className="animate-in max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
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

          <ul
            className="animate-in mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs tracking-wider text-fg-subtle uppercase"
            style={{ animationDelay: '320ms' }}
          >
            {PILLARS.map((pillar, i) => (
              <li key={pillar} className="flex items-center gap-3">
                {i > 0 ? <span aria-hidden className="size-1 rounded-full bg-fg-subtle/40" /> : null}
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
