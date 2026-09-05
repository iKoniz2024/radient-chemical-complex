"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { categoriesData } from "@/data/categories"
import { productsData } from "@/data/products"
import { getProductImageUrl } from "@/data/productImages"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"

// Extra bullet points for each category to make detail card rich and "live"
const categoryHighlights: Record<string, string[]> = {
  pretreatment: [
    "Reduces energy consumption by up to 30%",
    "Eco-friendly scouring & bio-polishing",
    "Highly efficient wetting & detergent action",
    "Prepares natural fibers for flawless dyeing"
  ],
  dyeing: [
    "Superior leveling agents for color uniformity",
    "Minimizes dye consumption & salt usage",
    "Excellent washing and rubbing fastness",
    "Optimized dye bath conditioning"
  ],
  finishing: [
    "Ultra-soft silicone softeners",
    "Imparts durable hydrophilic properties",
    "Antistatic and moisture-management agents",
    "Enhances drape & handle of fabrics"
  ],
  "denim-washing": [
    "High-performance enzyme washing",
    "Eco-friendly stone washing look",
    "Prevents back-staining during washes",
    "Consistent and premium wash finish"
  ],
  psf: [
    "Enhances synthetic fiber strength",
    "Anti-static spin finishes",
    "Thermal stability during processing",
    "Consistent draw ratios for high-speed line"
  ],
  others: [
    "Custom laboratory-developed formulations",
    "Waterproofing & flame retardant agents",
    "Specialized printing paste thickeners",
    "Problem-solving auxiliaries for production"
  ]
}

export function ProductCategoriesSection() {
  const [activeTab, setActiveTab] = useState(categoriesData[0].id)
  const [imgIndex, setImgIndex] = useState(0)

  const activeCategory = categoriesData.find((c) => c.id === activeTab) || categoriesData[0]

  // Filter products belonging to the active category
  const categoryProducts = productsData.filter((p) => p.categoryId === activeTab)

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setImgIndex(0)
  }

  // Automatic slideshow cycle matching exact number of products under this category
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % (categoryProducts.length || 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [activeTab, categoryProducts.length])

  const currentProduct = categoryProducts[imgIndex]
  const imageSrc = currentProduct ? getProductImageUrl(currentProduct.id, activeTab) : activeCategory.catalogPage

  return (
    <SectionWrapper
      className="relative text-white bg-cover bg-center bg-no-repeat bg-fixed [backface-visibility:hidden] [transform-style:preserve-3d] overflow-hidden bg-primary"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1920')` }}
    >
      {/* Light Overlay to let original image shine while keeping text sharp */}
      <div className="absolute inset-0 bg-[#0A1930]/35 pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            title="Our Product Portfolio"
            subtitle="Sustainable solutions for every stage of textile production."
            alignment="left"
            className="mb-0 text-white [&>p]:text-white/90 [&>h2]:text-white [&>h2]:drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [&>p]:drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          />
          <MagneticButton strength={0.1}>
            <Button variant="outline" className="shrink-0 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-white hover:text-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300" asChild>
              <Link href="/products">View All Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </MagneticButton>
        </div>

        {/* Tab Selection panel - inspired by exotexo.com filtering */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 border-b border-white/10 pb-6">
          {categoriesData.map((category) => {
            const isActive = category.id === activeTab
            return (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`relative flex items-center gap-3 px-5 py-3.5 rounded-xl font-montserrat font-bold text-sm transition-all duration-300 select-none cursor-pointer ${isActive ? "text-primary" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-secondary rounded-xl shadow-[0_0_20px_rgba(217,155,34,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">
                  <category.icon className="w-4 h-4" />
                </span>
                <span className="relative z-10">{category.title.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Detail Card with Split Layout & AnimatePresence */}
        <div className="min-h-[450px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.75 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform-gpu"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-primary shadow-[0_0_20px_rgba(217,155,34,0.4)]">
                    <activeCategory.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {activeCategory.title}
                  </h3>
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
                  {activeCategory.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {categoryHighlights[activeTab]?.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22, mass: 0.75, delay: 0.05 * index }}
                      className="flex items-start gap-2.5 transform-gpu"
                    >
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center mt-2">
                  <MagneticButton strength={0.15}>
                    <Button asChild className="shadow-[0_0_15px_rgba(217,155,34,0.3)] hover:shadow-[0_0_25px_rgba(217,155,34,0.5)]">
                      <Link href={`/products?category=${activeTab}`}>
                        Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: High-Res Image Slideshow with click controls & dots */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-auto overflow-hidden rounded-2xl group/img">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={`${activeTab}-${imgIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={imageSrc}
                      alt={currentProduct ? currentProduct.name : activeCategory.title}
                      fill
                      className="object-cover scale-100 group-hover/img:scale-105 transition-transform duration-700 filter brightness-90 group-hover/img:brightness-100"
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Product Name Overlay */}
                {currentProduct && (
                  <motion.div
                    key={currentProduct.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 z-20 bg-primary/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs font-bold text-secondary uppercase tracking-widest shadow-lg max-w-[85%]"
                  >
                    Product: {currentProduct.name}
                  </motion.div>
                )}

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs max-w-[85%] overflow-x-auto">
                  {categoryProducts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImgIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === imgIndex ? "bg-secondary w-5" : "bg-white/50 hover:bg-white"
                        }`}
                    />
                  ))}
                </div>

                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-primary/30 via-transparent to-primary/60 pointer-events-none z-10" />
                <div className="absolute inset-0 border-2 border-white/10 group-hover/img:border-secondary/30 transition-colors duration-500 rounded-2xl pointer-events-none z-10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </SectionWrapper>
  )
}
