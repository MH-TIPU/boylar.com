import { slugify } from '@/fields/slug'

export type TocEntry = { id: string; text: string; level: 2 | 3 }

type LexicalNode = { type?: string; tag?: string; text?: string; children?: LexicalNode[] }

/** Concatenate the text of a node's descendants. */
function nodeText(node: LexicalNode): string {
  if (typeof node.text === 'string') return node.text
  return (node.children ?? []).map(nodeText).join('')
}

/**
 * Pull h2/h3 headings out of Lexical content to build a table of contents.
 * Ids are derived the same way the RichText renderer derives them, so the
 * anchors always match.
 */
export function buildToc(data: unknown): TocEntry[] {
  const root = (data as { root?: LexicalNode } | null)?.root
  if (!root?.children) return []

  const seen = new Map<string, number>()
  const entries: TocEntry[] = []

  for (const node of root.children) {
    if (node.type !== 'heading') continue
    if (node.tag !== 'h2' && node.tag !== 'h3') continue

    const text = nodeText(node).trim()
    if (!text) continue

    entries.push({ id: headingId(text, seen), text, level: node.tag === 'h2' ? 2 : 3 })
  }

  return entries
}

/**
 * Slug for a heading anchor. Repeated headings get a numeric suffix so two
 * sections with the same title do not collide.
 */
export function headingId(text: string, seen: Map<string, number>): string {
  const base = slugify(text) || 'section'
  const count = seen.get(base) ?? 0
  seen.set(base, count + 1)
  return count === 0 ? base : `${base}-${count + 1}`
}

/** Rough reading time. 220 wpm is a common average for online prose. */
export function readingTime(data: unknown): number {
  const root = (data as { root?: LexicalNode } | null)?.root
  if (!root) return 1
  const words = nodeText(root).trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}
