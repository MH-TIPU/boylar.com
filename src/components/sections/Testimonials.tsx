import { Quote } from 'lucide-react'
import Image from 'next/image'

import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { mediaAlt, mediaUrl } from '@/lib/media'
import type { Testimonial } from '@/payload-types'

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null

  return (
    <Section className="border-y border-line bg-surface">
      <Container size="wide">
        <SectionHeading
          eyebrow="Clients"
          title="What it is like to work with us"
          align="center"
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((item, i) => {
            const avatar = mediaUrl(item.avatar, 'thumbnail')

            return (
              <Reveal as="li" key={item.id} delay={i * 70}>
                <Card className="flex h-full flex-col gap-5 p-7">
                  <Quote className="size-6 text-accent/50" aria-hidden />
                  <blockquote className="flex-1 text-sm leading-relaxed text-fg-muted">
                    {item.quote}
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                    {avatar ? (
                      <Image
                        src={avatar}
                        alt={mediaAlt(item.avatar, item.name)}
                        width={40}
                        height={40}
                        className="size-10 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="grid size-10 shrink-0 place-items-center rounded-full border border-line bg-elevated font-display text-sm text-accent"
                      >
                        {item.name.charAt(0)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{item.name}</p>
                      <p className="truncate text-xs text-fg-subtle">
                        {[item.role, item.company].filter(Boolean).join(', ')}
                      </p>
                    </div>
                  </figcaption>
                </Card>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
