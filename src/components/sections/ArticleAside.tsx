'use client'

import { useEffect, useState } from 'react'

import type { TocEntry } from '@/lib/toc'
import { cn, formatDate } from '@/lib/utils'

/**
 * Table of contents that highlights the section currently in view.
 *
 * Observes the rendered headings rather than computing scroll offsets, so it
 * stays correct as images load and reflow the page.
 */
function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(entries[0]?.id ?? null)

  useEffect(() => {
    if (entries.length === 0) return

    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null)

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (records) => {
        // Whichever tracked heading is visible and highest on screen wins.
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]?.target.id) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0 },
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [entries])

  if (entries.length === 0) return null

  return (
    <nav aria-label="On this page" className="flex flex-col gap-3">
      <h2 className="font-mono text-xs tracking-widest text-fg-subtle uppercase">On this page</h2>
      <ul className="flex flex-col border-l border-line">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              aria-current={activeId === entry.id ? 'location' : undefined}
              className={cn(
                '-ml-px block border-l py-1.5 text-sm leading-snug transition-colors',
                entry.level === 3 ? 'pl-7' : 'pl-4',
                activeId === entry.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-fg-muted hover:border-line-strong hover:text-fg',
              )}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * The article sidebar. Hidden below `lg`, where the contents list would just
 * push the article itself further down the page.
 */
export function ArticleAside({
  toc,
  authorName,
  publishedAt,
}: {
  toc: TocEntry[]
  authorName?: string | null
  publishedAt: string
}) {
  if (toc.length === 0 && !authorName) return null

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 flex flex-col gap-8">
        <TableOfContents entries={toc} />

        {authorName ? (
          <div className="flex flex-col gap-2 border-t border-line pt-6">
            <h2 className="font-mono text-xs tracking-widest text-fg-subtle uppercase">Written by</h2>
            <p className="text-sm text-fg">{authorName}</p>
            <time dateTime={publishedAt} className="text-xs text-fg-subtle">
              {formatDate(publishedAt)}
            </time>
          </div>
        ) : null}
      </div>
    </aside>
  )
}
