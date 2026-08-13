"use client"

import Link from "next/link"
import { Product } from "@/data/products"
import { categoriesData } from "@/data/categories"

interface ProductMarqueeProps {
  products: Product[]
  speed?: number
  direction?: "left" | "right"
}

export function ProductMarquee({ products, speed = 40, direction = "left" }: ProductMarqueeProps) {
  const duplicated = [...products, ...products, ...products]

  return (
    <div className="product-marquee relative overflow-hidden py-4">
      <div
        className={`flex gap-6 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ "--marquee-duration": `${products.length * speed}s` } as React.CSSProperties}
      >
        {duplicated.map((product, idx) => {
          const category = categoriesData.find((c) => c.id === product.categoryId)
          return (
            <Link
              key={`${product.id}-${idx}`}
              href={`/products/${product.id}`}
              className="group flex flex-col w-72 shrink-0 bg-background border border-border rounded-xl p-5 shadow-sm hover:shadow-[0_15px_30px_rgba(217,155,34,0.15)] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-3 relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-muted group-hover:bg-secondary/10 text-xs font-medium text-muted-foreground group-hover:text-secondary mb-2 transition-colors">
                  {category?.title || "Product"}
                </span>
                <h3 className="font-montserrat text-lg font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1 relative z-10">
                {product.properties}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
