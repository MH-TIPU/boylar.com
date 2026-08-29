import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const STEPS = [
  {
    title: 'Scope',
    description:
      'We map the actual problem before proposing a solution — current systems, constraints, and what success has to look like in numbers.',
  },
  {
    title: 'Architect',
    description:
      'Data models, network topology, or design system, depending on the work. You approve the shape before anyone starts building.',
  },
  {
    title: 'Build',
    description:
      'Two-week sprints with a working demo at the end of each. Direct access to the people writing the code, not a relay through account management.',
  },
  {
    title: 'Operate',
    description:
      'Deployment, monitoring, documentation, and handover. Take it in-house or keep us on support — both paths are fully prepared for.',
  },
]

export function Process() {
  return (
    <Section className="border-y border-line bg-surface">
      <Container size="wide">
        <SectionHeading
          eyebrow="How we work"
          title="Four steps, no mystery"
          description="The same delivery model whether we are writing software, racking servers, or rebuilding a brand."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-panel border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="bg-canvas">
              <div className="flex h-full flex-col gap-3 p-7">
                <span className="font-mono text-xs tracking-widest text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-fg-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
