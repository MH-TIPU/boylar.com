import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

const STATS = [
  { value: '6', label: 'Service disciplines under one roof' },
  { value: '2wk', label: 'Sprint cycle with a working demo' },
  { value: '<1hr', label: 'Critical incident response target' },
  { value: '100%', label: 'Source code and IP handed to you' },
]

export function Stats() {
  return (
    <Section spacing="tight" className="border-y border-line bg-surface">
      <Container size="wide">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              {/* Reversed visually so the number reads first without breaking dt/dd order */}
              <div className="flex flex-col-reverse gap-2">
                <dt className="text-sm leading-snug text-fg-muted">{stat.label}</dt>
                <dd className="font-display text-display-sm leading-none font-semibold text-accent">
                  {stat.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </Section>
  )
}
