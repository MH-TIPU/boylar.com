import type { Metadata } from 'next'

import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { ProductsGrid } from '@/components/sections/ProductsGrid'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { getProducts } from '@/lib/payload'
import { pageMetadata } from '@/lib/seo'

export const revalidate = 3600

export const metadata: Metadata = pageMetadata({
  title: 'Products',
  description:
    'Software we build, sell, and support ourselves — WordPress plugins, web and mobile apps, and ready-made systems you can deploy without a bespoke build.',
  path: '/products',
})

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Software we own, not just software we build"
        description="Alongside client work we build and maintain our own products. You buy them directly, we support them directly, and the roadmap is ours — so a fix does not wait on anyone else's release cycle."
      />

      {products.length > 0 ? (
        <ProductsGrid products={products} showHeading={false} />
      ) : (
        <Section>
          <Container size="wide">
            <div className="rounded-panel border border-dashed border-line-strong p-14 text-center">
              <h2 className="mb-3 font-display text-xl font-medium">No products published yet</h2>
              <p className="mx-auto max-w-md text-sm text-fg-muted">
                Products are added through the CMS under Products. Publish one and it will appear
                here.
              </p>
            </div>
          </Container>
        </Section>
      )}

      <CTA
        title="Need something these do not cover?"
        description="If none of our products fit, we build custom. Tell us the problem and we will say honestly which route is cheaper for you."
      />
    </>
  )
}
