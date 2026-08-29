'use client'

import { useEffect } from 'react'

import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container size="narrow">
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <p className="font-mono text-sm tracking-widest text-danger">Error</p>
        <h1 className="text-display-md leading-tight font-semibold">Something went wrong</h1>
        <p className="max-w-md text-fg-muted">
          This page failed to load. Try again — if it keeps happening, please let us know.
        </p>
        {error.digest ? (
          <p className="font-mono text-xs text-fg-subtle">Reference: {error.digest}</p>
        ) : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={reset}>Try again</Button>
          <ButtonLink href="/contact" variant="secondary">
            Report the problem
          </ButtonLink>
        </div>
      </div>
    </Container>
  )
}
