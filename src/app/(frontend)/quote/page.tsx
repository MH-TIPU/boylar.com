import type { Metadata } from 'next'

import { pageMetadata } from '@/lib/seo'

import { PageHeader } from '@/components/sections/PageHeader'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getServices } from '@/lib/payload'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'Request a Quote',
  description:
    'Tell us what you need across software, infrastructure, design, e-commerce, or managed IT, and we will come back with a written scope.',
  path: '/quote',
})

const STEPS = [
  'You send the form — scope, budget, and timeline as far as you know them.',
  'We reply within one business day, either with questions or a call invitation.',
  'You get a written scope with fixed deliverables and a price. No obligation to proceed.',
]

export default async function QuotePage() {
  const services = await getServices()

  return (
    <>
      <PageHeader
        eyebrow="Get a quote"
        title="Tell us the shape of the problem"
        description="This form takes about three minutes. The more you can tell us up front, the more precise our first response will be."
      />

      <Section>
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            <QuoteForm services={services} />

            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
              <div>
                <h2 className="mb-5 font-mono text-xs tracking-widest text-fg-subtle uppercase">
                  What happens next
                </h2>
                <ol className="flex flex-col gap-5">
                  {STEPS.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line bg-elevated font-mono text-xs text-accent">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-fg-muted">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="rounded-card border border-line bg-surface p-5 text-xs leading-relaxed text-fg-subtle">
                We do not share your details with anyone, and we will not add you to a mailing list
                from this form.
              </p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  )
}
