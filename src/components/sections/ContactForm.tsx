'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Field, Honeypot, Input, Textarea } from '@/components/ui/Field'
import { contactSchema, type ContactInput } from '@/lib/validation'

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) })

  async function onSubmit(values: ContactInput) {
    setServerMessage(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = (await res.json()) as { message?: string }

      if (!res.ok) {
        setServerMessage(data.message ?? 'Something went wrong. Please try again.')
        return
      }

      setSent(true)
      setServerMessage(data.message ?? null)
    } catch {
      setServerMessage('Network error. Please check your connection and try again.')
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-panel border border-success/30 bg-success/5 p-8">
        <span className="grid size-11 place-items-center rounded-full bg-success/15 text-success">
          <Check className="size-5" aria-hidden />
        </span>
        <h2 className="font-display text-xl font-medium">Message sent</h2>
        <p className="text-sm leading-relaxed text-fg-muted">{serverMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative flex flex-col gap-5">
      <Honeypot register={register('website')} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            invalid={Boolean(errors.name)}
            placeholder="Jane Rahman"
            {...register('name')}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={Boolean(errors.email)}
            placeholder="you@company.com"
            {...register('email')}
          />
        </Field>

        <Field label="Company" htmlFor="company" optional error={errors.company?.message}>
          <Input
            id="company"
            autoComplete="organization"
            placeholder="Company name"
            {...register('company')}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" optional error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" placeholder="+880…" {...register('phone')} />
        </Field>
      </div>

      <Field label="Subject" htmlFor="subject" optional error={errors.subject?.message}>
        <Input id="subject" placeholder="What is this about?" {...register('subject')} />
      </Field>

      <Field
        label="How can we help?"
        htmlFor="message"
        error={errors.message?.message}
        hint="The more specific you are about the problem, the more useful our first reply will be."
      >
        <Textarea
          id="message"
          invalid={Boolean(errors.message)}
          placeholder="Tell us what you are trying to do, what is in your way, and any deadline you are working to."
          {...register('message')}
        />
      </Field>

      {serverMessage ? (
        <p role="alert" className="text-sm text-danger">
          {serverMessage}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Sending
            </>
          ) : (
            <>
              Send message <Send className="size-4" aria-hidden />
            </>
          )}
        </Button>
        <p className="text-xs text-fg-subtle">We reply within one business day.</p>
      </div>
    </form>
  )
}
