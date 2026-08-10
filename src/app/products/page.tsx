import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { CategoryFilter } from "@/features/products/components/CategoryFilter"
import { ProductGrid } from "@/features/products/components/ProductGrid"
import { ProductCard } from "@/features/products/components/ProductCard"
import { productsData } from "@/data/products"
import { categoriesData } from "@/data/categories"
import { Button } from "@/components/ui/button"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    ? productsData.filter((p) => p.categoryId === category)
    : productsData

  const selectedCategory = categoriesData.find((item) => item.id === category)

  const categoryGroups = categoriesData
    .map((item) => {
      const categoryProducts = productsData.filter((product) => product.categoryId === item.id)

      return {
        ...item,
        products: categoryProducts.slice(0, 6),
        hasMore: categoryProducts.length > 6,
      }
    })
    .filter((item) => !category || item.id === category)

  return (
    <>
      <CinematicSection depth={1.5}>
        <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
          <Container className="relative z-10 text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Chemical Product Catalog</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our comprehensive range of sustainable textile auxiliary chemicals designed to optimize every stage of production.
            </p>
          </Container>
        </div>
      </CinematicSection>

      <CinematicSection depth={1}>
        <SectionWrapper className="bg-muted/30">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <aside className="lg:col-span-1">
                <CategoryFilter activeCategoryId={category} />
              </aside>

              <main className="lg:col-span-3">
                <div className="mb-8">
                  <SectionTitle
                    title={category ? (selectedCategory?.title ?? "Filtered Results") : "All Products"}
                    subtitle={category
                      ? `Showing ${filteredProducts.length} products in ${selectedCategory?.title ?? "this category"}`
                      : "Browse products by category with a quick preview of each collection"}
                    alignment="left"
                    className="mb-0"
                  />
                </div>

                {!category ? (
                  <div className="space-y-8">
                    {categoryGroups.map((group) => (
                      <section key={group.id} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                          <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{group.title}</p>
                            <p className="text-sm text-muted-foreground">{group.description}</p>
                          </div>

                          {group.hasMore ? (
                            <Button variant="outline" asChild>
                              <Link href={`/products?category=${group.id}`}>
                                View all products <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          ) : null}
                        </div>

                        <ProductGrid>
                          {group.products.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                          ))}
                        </ProductGrid>
                      </section>
                    ))}
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <ProductGrid>
                    {filteredProducts.map((product, idx) => (
                      <ProductCard key={product.id} product={product} index={idx} />
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
      </CinematicSection>
    </>
  )
}
