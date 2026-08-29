/** Renders a JSON-LD structured-data block. Call once per schema type. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored by trusted staff, but escape `<` regardless so a
      // stray tag in copy cannot break out of the script element.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
