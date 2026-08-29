/**
 * Minimal builders for Payload's Lexical rich-text JSON. Hand-writing the full
 * node shape in every seed entry would bury the actual copy.
 */

/** The shape Payload's generated types expect for every Lexical node. */
type LexicalNode = {
  [k: string]: unknown
  type: string
  version: number
}

const text = (value: string, format = 0): LexicalNode => ({
  type: 'text',
  text: value,
  format,
  detail: 0,
  mode: 'normal',
  style: '',
  version: 1,
})

const container = (
  type: string,
  children: LexicalNode[],
  extra: Record<string, unknown> = {},
): LexicalNode => ({
  type,
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children,
  ...extra,
})

export const p = (value: string) => container('paragraph', [text(value)], { textFormat: 0 })

export const h = (level: 2 | 3 | 4, value: string) =>
  container('heading', [text(value)], { tag: `h${level}` })

export const ul = (items: string[]) =>
  container(
    'list',
    items.map((item, i) => container('listitem', [text(item)], { value: i + 1 })),
    { listType: 'bullet', start: 1, tag: 'ul' },
  )

/** Wrap blocks into the root document Payload expects. */
export const rt = (...blocks: LexicalNode[]) => ({
  root: container('root', blocks) as LexicalNode & {
    type: string
    children: LexicalNode[]
    direction: 'ltr' | 'rtl' | null
    format: '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
    indent: number
    version: number
  },
})
