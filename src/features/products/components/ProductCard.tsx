"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Droplet, Layers } from "lucide-react"
import { Product } from "@/data/products"
import { categoriesData } from "@/data/categories"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export interface ProductCardProps {
  product: Product
  index?: number
  catalogImage?: string
}

export function ProductCard({ product, index = 0, catalogImage }: ProductCardProps) {
  const category = categoriesData.find((c) => c.id === product.categoryId)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  const isFlake = product.name.toLowerCase().includes("flake")
  const isPowder = product.name.toLowerCase().includes("powder") || product.properties.toLowerCase().includes("powder")
  const physicalForm = isFlake ? "Flakes" : isPowder ? "Powder" : "Liquid"

  return (
    <motion.div
      ref={ref}
      className="h-full transform-gpu"
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <Link 
        href={`/products/${product.id}`}
        className="group/card flex flex-col justify-between h-full bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-2xl hover:border-secondary/50 transition-all duration-500 relative overflow-hidden"
      >
        {/* Background Image Reveal on Mouse Hover (Desktop) & Always Visible (Mobile) */}
        {catalogImage && (
          <div className="absolute inset-0 z-0 opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
            <Image
              src={catalogImage}
              alt={product.name}
              fill
              className="object-cover scale-105 md:scale-100 md:group-hover/card:scale-110 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay for high text contrast in both themes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D18]/95 via-[#060D18]/85 to-[#060D18]/70" />
          </div>
        )}

        {/* Ambient subtle corner glow on hover */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary/10 to-transparent opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none z-[1]" />

        {/* Top Row: Category & Physical State Badges */}
        <div className="relative z-10 flex items-center justify-between gap-2 mb-5">
          <span className="px-3 py-1 rounded-full bg-secondary/20 md:bg-muted md:group-hover/card:bg-secondary/20 text-xs font-bold text-secondary md:text-muted-foreground md:group-hover/card:text-secondary transition-colors duration-300 border border-secondary/30 md:border-border md:group-hover/card:border-secondary/30">
            {category?.title || "Product"}
          </span>

          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 md:bg-muted/80 md:group-hover/card:bg-black/50 text-xs font-semibold text-white md:text-muted-foreground md:group-hover/card:text-white transition-colors duration-300">
            {physicalForm === "Liquid" ? (
              <Droplet className="w-3 h-3 text-cyan-400 md:text-cyan-500 md:group-hover/card:text-cyan-400" />
            ) : (
              <Layers className="w-3 h-3 text-secondary" />
            )}
            {physicalForm}
          </span>
        </div>

        {/* Content Body: Product Name & Properties */}
        <div className="relative z-10 flex flex-col flex-1">
          <h3 className="font-montserrat text-xl font-bold text-white md:text-foreground md:group-hover/card:text-white transition-colors duration-300 line-clamp-2 leading-snug mb-3">
            {product.name}
          </h3>

          <p className="text-sm text-slate-200 md:text-muted-foreground md:group-hover/card:text-slate-200 leading-relaxed line-clamp-3 mb-6 flex-1 transition-colors duration-300">
            {product.properties}
          </p>
        </div>

        {/* Bottom Row: Action with Animated Arrow */}
        <div className="relative z-10 pt-4 border-t border-white/15 md:border-border/60 md:group-hover/card:border-white/15 flex items-center justify-between text-sm font-bold text-secondary mt-auto transition-colors duration-300">
          <span className="text-secondary">View Specifications</span>
          <div className="w-7 h-7 rounded-full bg-secondary text-primary md:bg-secondary/15 md:text-secondary md:group-hover/card:bg-secondary md:group-hover/card:text-primary flex items-center justify-center transition-all duration-300">
            <ArrowRight className="w-3.5 h-3.5 md:group-hover/card:translate-x-0.5 transition-transform" />
          </div>
        </div>

      </Link>
    </motion.div>
  )
}
