import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
      />
      <Container size="narrow" className="relative">
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
          <p className="font-mono text-sm tracking-widest text-accent">404</p>
          <h1 className="text-display-md leading-tight font-semibold">
            That page does not exist
          </h1>
          <p className="max-w-md text-fg-muted">
            The link may be out of date, or the page may have moved. These are the useful places to
            go from here.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Browse services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
