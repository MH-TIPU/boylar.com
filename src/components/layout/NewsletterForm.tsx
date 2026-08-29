'use client'

import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { useState } from 'react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { message?: string }

      if (!res.ok) {
        setState('error')
        setMessage(data.message ?? 'Something went wrong. Please try again.')
        return
      }

      setState('done')
      setMessage(data.message ?? 'Thanks — you are on the list.')
      setEmail('')
    } catch {
      setState('error')
      setMessage('Network error. Please try again.')
    }
  }

  if (state === 'done') {
    return (
      <p className="flex items-center gap-2 text-sm text-success">
        <Check className="size-4" aria-hidden /> {message}
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-11 min-w-0 flex-1 rounded-full border border-line bg-elevated px-4 text-sm text-fg placeholder:text-fg-subtle focus:border-accent/50 focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          aria-label="Subscribe"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-fg transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {state === 'loading' ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <ArrowRight className="size-4" aria-hidden />
          )}
        </button>
      </div>
      {state === 'error' ? (
        <p role="alert" className="text-xs text-danger">
          {message}
        </p>
      ) : null}
    </form>
  )
}
