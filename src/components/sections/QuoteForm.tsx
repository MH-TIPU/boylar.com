'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Field, Honeypot, Input, Select, Textarea } from '@/components/ui/Field'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { cn } from '@/lib/utils'
import { quoteSchema, type QuoteInput } from '@/lib/validation'
import type { Service } from '@/payload-types'

const BUDGETS = ['Under $5k', '$5k – $15k', '$15k – $50k', '$50k – $150k', '$150k+', 'Not sure yet']
const TIMELINES = ['ASAP', 'Within 1 month', '1–3 months', '3–6 months', 'Just exploring']

export function QuoteForm({ services }: { services: Service[] }) {
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { serviceInterest: [] },
  })

  async function onSubmit(values: QuoteInput) {
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
        <h2 className="font-display text-xl font-medium">Request received</h2>
        <p className="text-sm leading-relaxed text-fg-muted">{serverMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative flex flex-col gap-8">
      <Honeypot register={register('website')} />

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 text-sm font-medium">
          What do you need? <span className="text-fg-subtle">Select all that apply</span>
        </legend>

        <Controller
          control={control}
          name="serviceInterest"
          render={({ field }) => (
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => {
                const checked = field.value?.includes(service.id) ?? false

                return (
                  <label
                    key={service.id}
                    className={cn(
                      'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                      checked
                        ? 'border-accent/50 bg-accent-soft'
                        : 'border-line bg-elevated hover:border-line-strong',
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={(event) => {
                        const next = event.target.checked
                          ? [...(field.value ?? []), service.id]
                          : (field.value ?? []).filter((id) => id !== service.id)
                        field.onChange(next)
                      }}
                    />
                    <span
                      aria-hidden
                      className={cn(
                        'mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition-colors',
                        checked ? 'border-accent bg-accent text-accent-fg' : 'border-line-strong',
                      )}
                    >
                      {checked ? <Check className="size-3.5" /> : null}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <ServiceIcon name={service.icon} className="size-4 text-accent" />
                        {service.title}
                      </span>
                      <span className="text-xs leading-snug text-fg-subtle">{service.tagline}</span>
                    </span>
                  </label>
                )
              })}
            </div>
          )}
        />

        {errors.serviceInterest ? (
          <p role="alert" className="text-xs text-danger">
            {errors.serviceInterest.message}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget range" htmlFor="budget" optional>
          <Select id="budget" defaultValue="" {...register('budget')}>
            <option value="">Select a range</option>
            {BUDGETS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Timeline" htmlFor="timeline" optional>
          <Select id="timeline" defaultValue="" {...register('timeline')}>
            <option value="">Select a timeline</option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Your name" htmlFor="q-name" error={errors.name?.message}>
          <Input
            id="q-name"
            autoComplete="name"
            invalid={Boolean(errors.name)}
            {...register('name')}
          />
        </Field>

        <Field label="Email" htmlFor="q-email" error={errors.email?.message}>
          <Input
            id="q-email"
            type="email"
            autoComplete="email"
            invalid={Boolean(errors.email)}
            {...register('email')}
          />
        </Field>

        <Field label="Company" htmlFor="q-company" optional>
          <Input id="q-company" autoComplete="organization" {...register('company')} />
        </Field>

        <Field label="Phone" htmlFor="q-phone" optional>
          <Input id="q-phone" type="tel" autoComplete="tel" {...register('phone')} />
        </Field>
      </div>

      <Field
        label="Tell us about the project"
        htmlFor="q-message"
        error={errors.message?.message}
        hint="What are you trying to achieve, what exists today, and what does success look like?"
      >
        <Textarea id="q-message" invalid={Boolean(errors.message)} {...register('message')} />
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
              Request a quote <Send className="size-4" aria-hidden />
            </>
          )}
        </Button>
        <p className="text-xs text-fg-subtle">No obligation. We reply within one business day.</p>
      </div>
    </form>
  )
}
