import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { CategoryFilter } from "@/features/products/components/CategoryFilter"
import { ProductGrid } from "@/features/products/components/ProductGrid"
import { ProductCard } from "@/features/products/components/ProductCard"
import { productsData } from "@/data/products"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Products Portfolio',
  description: 'Explore our comprehensive range of sustainable textile auxiliary chemicals including pretreatment, dyeing, finishing, and denim washing.',
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  const filteredProducts = category 
    ? productsData.filter(p => p.categoryId === category)
    : productsData

  return (
    <>
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
        <Container className="relative z-10 text-center">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Chemical Product Catalog</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our comprehensive range of sustainable textile auxiliary chemicals designed to optimize every stage of production.
          </p>
        </Container>
      </div>

      <SectionWrapper className="bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <CategoryFilter activeCategoryId={category} />
            </aside>
            
            <main className="lg:col-span-3">
              <div className="mb-8">
                <SectionTitle 
                  title={category ? "Filtered Results" : "All Products"} 
                  subtitle={`Showing ${filteredProducts.length} products`}
                  alignment="left"
                  className="mb-0"
                />
              </div>
              
              {filteredProducts.length > 0 ? (
                <ProductGrid>
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </ProductGrid>
              ) : (
                <div className="text-center py-20 bg-background border border-border rounded-xl">
                  <p className="text-muted-foreground text-lg">No products found in this category.</p>
                </div>
              )}
            </main>
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
