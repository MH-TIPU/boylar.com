'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export type AccordionItem = { question: string; answer: string }

/**
 * Native <button> + aria-expanded rather than <details>, so the open/close
 * transition can be animated and the state stays controllable.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-accent"
            >
              <span className="font-display text-base font-medium sm:text-lg">{item.question}</span>
              <ChevronDown
                aria-hidden
                className={cn(
                  'size-5 shrink-0 text-fg-subtle transition-transform duration-300',
                  isOpen && 'rotate-180 text-accent',
                )}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-500 ease-out-expo',
                isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl text-sm leading-relaxed text-fg-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
