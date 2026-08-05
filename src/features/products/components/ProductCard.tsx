import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Product } from "@/data/products"
import { categoriesData } from "@/data/categories"

export interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categoriesData.find(c => c.id === product.categoryId)

  return (
    <Link 
      href={`/products/${product.id}`}
      className="group flex flex-col h-full bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground mb-3">
          {category?.title || "Product"}
        </span>
        <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
        {product.properties}
      </p>
      
      <div className="flex items-center text-sm font-semibold text-secondary mt-auto">
        View Details 
        <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
    </Link>
  )
}
