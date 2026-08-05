import Link from "next/link"
import { cn } from "@/lib/utils"
import { categoriesData } from "@/data/categories"

export interface CategoryFilterProps {
  activeCategoryId?: string
}

export function CategoryFilter({ activeCategoryId }: CategoryFilterProps) {
  return (
    <div className="flex flex-col gap-2 bg-background border border-border rounded-xl p-4 sticky top-24">
      <h3 className="font-montserrat font-bold text-lg mb-2 px-3">Categories</h3>
      
      <Link 
        href="/products"
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted",
          !activeCategoryId ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-foreground"
        )}
      >
        All Products
      </Link>
      
      {categoriesData.map((category) => (
        <Link 
          key={category.id}
          href={`/products?category=${category.id}`}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted flex items-center gap-3",
            activeCategoryId === category.id ? "bg-primary text-primary-foreground hover:bg-primary/90" : "text-foreground"
          )}
        >
          <category.icon className="w-4 h-4" />
          {category.title}
        </Link>
      ))}
    </div>
  )
}
