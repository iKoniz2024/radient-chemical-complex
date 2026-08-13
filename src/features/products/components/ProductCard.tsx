"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Product } from "@/data/products"
import { categoriesData } from "@/data/categories"
import { TiltCard } from "@/components/shared/animations/TiltCard"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const category = categoriesData.find(c => c.id === product.categoryId)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <TiltCard tiltAmount={8} scaleAmount={1.03} className="h-full">
        <Link 
          href={`/products/${product.id}`}
          className="group flex flex-col h-full bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-[0_15px_30px_rgba(217,155,34,0.15)] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="mb-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-muted group-hover:bg-secondary/10 text-xs font-medium text-muted-foreground group-hover:text-secondary mb-3 transition-colors">
              {category?.title || "Product"}
            </span>
            <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1 relative z-10">
            {product.properties}
          </p>
          
          <div className="flex items-center text-sm font-semibold text-secondary mt-auto relative z-10">
            View Details 
            <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  )
}
