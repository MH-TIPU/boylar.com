import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string | null
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden className="absolute inset-0 bg-glow opacity-60" />

      <Container size="wide" className="relative">
        <div className="flex max-w-3xl flex-col gap-5 py-20 sm:py-28">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-display-lg leading-[1.05] font-semibold">{title}</h1>
          {description ? (
            <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  )
}
