import { cn } from '@/lib/utils'

const controlBase =
  'w-full rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-colors focus:border-accent/50 focus:outline-none disabled:opacity-60'

export function Field({
  label,
  htmlFor,
  error,
  hint,
  optional,
  children,
  className,
}: {
  label: string
  htmlFor: string
  error?: string
  hint?: string
  optional?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium">
        {label}
        {optional ? <span className="text-xs font-normal text-fg-subtle">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-danger">
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-fg-subtle">{hint}</p>
      ) : null}
    </div>
  )
}

export function Input({
  className,
  invalid,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      className={cn(controlBase, invalid && 'border-danger/60', className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
}

export function Textarea({
  className,
  invalid,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(controlBase, 'min-h-36 resize-y', invalid && 'border-danger/60', className)}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
}

export function Select({
  className,
  invalid,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <select
      className={cn(controlBase, 'appearance-none', invalid && 'border-danger/60', className)}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {children}
    </select>
  )
}

/** Off-screen input that only automated submitters will fill in. */
export function Honeypot({ register }: { register: React.InputHTMLAttributes<HTMLInputElement> }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" tabIndex={-1} autoComplete="off" {...register} />
    </div>
  )
}
