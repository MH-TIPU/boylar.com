import { ArrowRight } from 'lucide-react'

import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function CTA({
  title = 'Tell us what is not working',
  description = 'A short call, a clear answer on whether we can help, and a written scope if we can. No pitch deck, no pressure.',
  primaryLabel = 'Start a project',
  primaryHref = '/quote',
}: {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
}) {
  return (
    <Section>
      <Container size="wide">
        <div className="relative overflow-hidden rounded-panel border border-line bg-surface px-7 py-16 text-center sm:px-14 sm:py-20">
          <div aria-hidden className="absolute inset-0 bg-glow opacity-70" />
          <div
            aria-hidden
            className="absolute inset-0 bg-grid [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]"
          />

          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-display-md leading-[1.1] font-semibold">
              {title}
            </h2>
            <p className="max-w-xl text-fg-muted">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel} <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="secondary">
                Just ask a question
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
