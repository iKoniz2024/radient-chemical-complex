"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { CategoryFilter } from "@/features/products/components/CategoryFilter"
import { ProductGrid } from "@/features/products/components/ProductGrid"
import { ProductCard } from "@/features/products/components/ProductCard"
import { productsData } from "@/data/products"
import { categoriesData } from "@/data/categories"
import { getProductImageUrl } from "@/data/productImages"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search, X, Sparkles, Filter, PackageOpen, Layers } from "lucide-react"

const catalogImageMap: Record<string, string> = {
  pretreatment: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1920",
  dyeing: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1920",
  finishing: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1920",
  "denim-washing": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=1920",
  psf: "https://images.unsplash.com/photo-1528255915607-9012fda0f838?auto=format&fit=crop&q=80&w=1920",
  others: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1920",
}

export default function ProductsContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category") ?? undefined
  const [searchQuery, setSearchQuery] = useState("")

  const selectedCategory = categoriesData.find((item) => item.id === category)

  // Real-time search and category filtering across all 80 products
  const searchedProducts = useMemo(() => {
    let list = productsData
    if (category) {
      list = list.filter((p) => p.categoryId === category)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.properties.toLowerCase().includes(q) ||
          p.categoryId.toLowerCase().includes(q)
      )
    }
    return list
  }, [category, searchQuery])

  const categoryGroups = useMemo(() => {
    return categoriesData
      .map((item) => {
        const catProducts = productsData
          .filter((p) => p.categoryId === item.id)
          .filter((p) => {
            if (!searchQuery.trim()) return true
            const q = searchQuery.toLowerCase().trim()
            return (
              p.name.toLowerCase().includes(q) ||
              p.properties.toLowerCase().includes(q)
            )
          })

        return {
          ...item,
          products: catProducts.slice(0, 6),
          totalCount: catProducts.length,
          hasMore: catProducts.length > 6,
        }
      })
      .filter((item) => (!category || item.id === category) && item.products.length > 0)
  }, [category, searchQuery])

  const bannerImage = category
    ? (catalogImageMap[category] ?? catalogImageMap.others)
    : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"

  return (
    <>
      {/* Hero Banner with Smooth Fixed Parallax and Live Search Bar */}
      <div 
        className="relative py-28 sm:py-32 md:py-36 min-h-[380px] flex items-center text-white bg-cover bg-center bg-no-repeat bg-fixed [backface-visibility:hidden] [transform-style:preserve-3d] overflow-hidden border-b border-white/10 bg-primary"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Soft bottom gradient to preserve original image vividness while ensuring crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D18]/70 via-[#060D18]/30 to-black/15 pointer-events-none z-0" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4 backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-secondary" /> Sustainable Textile Auxiliary Chemistry
          </div>

          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            {category ? selectedCategory?.title : "Chemical Product Portfolio"}
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {category 
              ? selectedCategory?.description ?? "Explore our comprehensive range of specialized auxiliary chemicals."
              : "Discover over 80+ specialized, eco-certified textile auxiliary formulations engineered for maximum efficiency and sustainable processing."
            }
          </p>

          {/* Integrated Search Box */}
          <div className="w-full max-w-xl relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by chemical name, property or application..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-background/90 backdrop-blur-xl border border-white/20 text-foreground placeholder:text-muted-foreground text-sm font-medium shadow-2xl focus:outline-hidden focus:ring-2 focus:ring-secondary transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 p-1 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Portfolio Stats Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-white font-semibold">
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
              80+ Formulations
            </span>
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
              6 Core Series
            </span>
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
              ZDHC & GOTS Level
            </span>
          </div>

        </Container>
      </div>

      {/* Main Catalog Content */}
      <SectionWrapper className="bg-background py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
            
            {/* Left Sidebar Category Filter */}
            <aside className="lg:col-span-1">
              <CategoryFilter activeCategoryId={category} />
            </aside>

            {/* Main Product Showcase (3 Cols) */}
            <main className="lg:col-span-3 flex flex-col gap-10">
              
              {/* Header Status Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/80">
                <div>
                  <h2 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {category ? selectedCategory?.title : searchQuery ? "Search Results" : "All Chemical Series"}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Showing <strong className="text-secondary font-bold">{searchedProducts.length}</strong> verified products
                    {searchQuery && <span> matching &ldquo;{searchQuery}&rdquo;</span>}
                    {category && selectedCategory && <span> in {selectedCategory.title}</span>}
                  </p>
                </div>

                {/* Reset filter button if searched or filtered */}
                {(category || searchQuery) && (
                  <div className="flex items-center gap-2">
                    {searchQuery && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSearchQuery("")}
                        className="rounded-xl text-xs"
                      >
                        <X className="w-3.5 h-3.5 mr-1" /> Clear Search
                      </Button>
                    )}
                    {category && (
                      <Button asChild variant="outline" size="sm" className="rounded-xl text-xs">
                        <Link href="/products">
                          <Filter className="w-3.5 h-3.5 mr-1" /> View All Series
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Display Logic */}
              {searchQuery ? (
                /* Search Results View */
                searchedProducts.length > 0 ? (
                  <ProductGrid>
                    {searchedProducts.map((product, idx) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={idx}
                        catalogImage={getProductImageUrl(product.id, product.categoryId)}
                      />
                    ))}
                  </ProductGrid>
                ) : (
                  <div className="text-center py-24 bg-card border border-border rounded-3xl p-8 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
                      <PackageOpen className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-montserrat text-xl font-bold text-foreground">No Products Found</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      No chemical auxiliary matched &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;softener&rdquo;, &ldquo;peroxide&rdquo;, &ldquo;enzyme&rdquo;, or &ldquo;silicone&rdquo;.
                    </p>
                    <Button onClick={() => setSearchQuery("")} className="bg-secondary text-[#0A1930] font-bold rounded-xl mt-2">
                      Reset Search Query
                    </Button>
                  </div>
                )
              ) : !category ? (
                /* All Products - Grouped by Category */
                <div className="flex flex-col gap-12">
                  {categoryGroups.map((group) => {
                    const Icon = group.icon
                    return (
                      <section
                        key={group.id}
                        className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8 shadow-xs hover:border-secondary/30 transition-colors"
                      >
                        {/* Group Header */}
                        <div className="mb-6 pb-4 border-b border-border/60 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-xs">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-foreground">
                                  {group.title}
                                </h3>
                                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full border border-secondary/20 shrink-0">
                                  {group.totalCount} Products
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-1">
                                {group.description}
                              </p>
                            </div>
                          </div>

                          {group.hasMore && (
                            <Button variant="outline" size="sm" asChild className="rounded-xl text-xs shrink-0 group">
                              <Link href={`/products?category=${group.id}`}>
                                View all {group.totalCount} products
                                <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                          )}
                        </div>

                        {/* Group Grid */}
                        <ProductGrid>
                          {group.products.map((product, idx) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              index={idx}
                              catalogImage={getProductImageUrl(product.id, product.categoryId)}
                            />
                          ))}
                        </ProductGrid>
                      </section>
                    )
                  })}
                </div>
              ) : (
                /* Specific Category View */
                searchedProducts.length > 0 ? (
                  <ProductGrid>
                    {searchedProducts.map((product, idx) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={idx}
                        catalogImage={getProductImageUrl(product.id, product.categoryId)}
                      />
                    ))}
                  </ProductGrid>
                ) : (
                  <div className="text-center py-20 bg-card border border-border rounded-3xl p-8">
                    <p className="text-muted-foreground text-lg">No products found in this category.</p>
                  </div>
                )
              )}

            </main>
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}