import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import { cn } from '@/lib/utils'

/**
 * Renders Lexical content from the CMS. Typography is applied through a
 * `prose-*` style block below rather than the Tailwind typography plugin,
 * so the dark palette stays under our control.
 */
export function RichText({
  data,
  className,
}: {
  data?: SerializedEditorState | null
  className?: string
}) {
  if (!data) return null

  return (
    <div
      className={cn(
        'max-w-3xl',
        '[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold',
        '[&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-medium',
        '[&_h4]:mt-7 [&_h4]:mb-2 [&_h4]:font-display [&_h4]:text-lg [&_h4]:font-medium',
        '[&_p]:mb-5 [&_p]:leading-[1.75] [&_p]:text-fg-muted',
        '[&_ul]:mb-6 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2.5 [&_ul]:pl-0',
        '[&_ol]:mb-6 [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-2.5 [&_ol]:pl-5',
        '[&_li]:leading-relaxed [&_li]:text-fg-muted',
        // Bullets drawn as a pseudo-element so they can take the accent colour
        '[&_ul>li]:relative [&_ul>li]:pl-6',
        "[&_ul>li]:before:absolute [&_ul>li]:before:top-[0.6em] [&_ul>li]:before:left-1 [&_ul>li]:before:size-1.5 [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-accent [&_ul>li]:before:content-['']",
        '[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-accent-hover',
        '[&_strong]:font-semibold [&_strong]:text-fg',
        '[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:text-fg-muted [&_blockquote]:italic',
        '[&_code]:rounded [&_code]:bg-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-accent',
        '[&>*:first-child]:mt-0',
        className,
      )}
    >
      <PayloadRichText data={data} />
    </div>
  )
}
