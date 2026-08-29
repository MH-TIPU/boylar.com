import { Accordion, type AccordionItem } from '@/components/ui/Accordion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

const DEFAULT_FAQS: AccordionItem[] = [
  {
    question: 'Do you take on projects outside Bangladesh?',
    answer:
      'Yes. We work with clients across time zones and structure overlap hours into the engagement so there is always a window for live discussion.',
  },
  {
    question: 'How do you price work?',
    answer:
      'Fixed price for well-defined scopes, time and materials for exploratory work, and monthly retainers for ongoing support. We tell you which model fits before quoting, and we do not bill discovery twice.',
  },
  {
    question: 'What if we only need one of your six services?',
    answer:
      'That is the common case. Nothing is bundled — you can engage us for a single mobile app or a single server rollout without buying anything else.',
  },
  {
    question: 'Who owns the code and design files?',
    answer:
      'You do, in full, on final payment. Source code lives in your repository, design files in your workspace, and infrastructure in your accounts. We do not hold anything hostage.',
  },
  {
    question: 'Can you take over a project another agency started?',
    answer:
      'Often, yes. We start with a paid audit of the existing code or infrastructure and give you an honest assessment — including when the right answer is to rebuild rather than inherit.',
  },
]

export function FAQ({
  items = DEFAULT_FAQS,
  eyebrow = 'Questions',
  title = 'The things people ask before signing',
}: {
  items?: AccordionItem[]
  eyebrow?: string
  title?: string
}) {
  if (items.length === 0) return null

  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow={eyebrow} title={title} className="lg:sticky lg:top-28 lg:self-start" />
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  )
}
