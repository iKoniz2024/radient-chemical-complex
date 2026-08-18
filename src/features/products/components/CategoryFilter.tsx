"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { categoriesData } from "@/data/categories"
import { productsData } from "@/data/products"
import { FlaskConical, ArrowRight, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface CategoryFilterProps {
  activeCategoryId?: string
}

export function CategoryFilter({ activeCategoryId }: CategoryFilterProps) {
  const totalProducts = productsData.length

  return (
    <div className="flex flex-col gap-6 sticky top-24">
      {/* Category Navigation List */}
      <div className="flex flex-col gap-1.5 bg-card border border-border rounded-3xl p-4 sm:p-5 shadow-xs w-full overflow-hidden">
        <div className="flex items-center justify-between px-2 py-2 mb-2 border-b border-border/60">
          <h3 className="font-montserrat font-extrabold text-base text-foreground flex items-center gap-2">
            <Layers className="w-4 h-4 text-secondary" /> Chemical Series
          </h3>
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
            {totalProducts} Total
          </span>
        </div>
        
        {/* All Products link */}
        <Link 
          href="/products"
          className={cn(
            "w-full px-3.5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center justify-between group overflow-hidden box-border",
            !activeCategoryId 
              ? "bg-secondary text-[#0A1930] shadow-md shadow-secondary/20 font-bold" 
              : "text-foreground hover:bg-muted"
          )}
        >
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <span className={cn(
              "w-2 h-2 rounded-full shrink-0 transition-all",
              !activeCategoryId ? "bg-[#0A1930]" : "bg-muted-foreground/40 group-hover:bg-secondary"
            )} />
            <span className="truncate">All Chemical Products</span>
          </div>

          <span className={cn(
            "text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ml-2",
            !activeCategoryId ? "bg-black/15 text-[#0A1930]" : "bg-muted text-muted-foreground group-hover:bg-background"
          )}>
            {totalProducts}
          </span>
        </Link>
        
        {/* Categories */}
        {categoriesData.map((category) => {
          const count = productsData.filter((p) => p.categoryId === category.id).length
          const isActive = activeCategoryId === category.id
          const Icon = category.icon

          return (
            <Link 
              key={category.id}
              href={`/products?category=${category.id}`}
              className={cn(
                "w-full px-3.5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center justify-between group overflow-hidden box-border",
                isActive 
                  ? "bg-secondary text-[#0A1930] shadow-md shadow-secondary/20 font-bold" 
                  : "text-foreground hover:bg-muted"
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                <div className={cn(
                  "w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                  isActive ? "bg-[#0A1930]/15 text-[#0A1930]" : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-primary"
                )}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="truncate">{category.title}</span>
              </div>

              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full font-bold shrink-0 ml-2",
                isActive ? "bg-black/15 text-[#0A1930]" : "bg-muted text-muted-foreground group-hover:bg-background"
              )}>
                {count}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Sidebar Custom Formulation R&D Box */}
      <div className="bg-[#0A1930] text-white rounded-3xl p-6 border border-white/10 shadow-xl relative overflow-hidden hidden lg:block">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />

        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-[#0A1930] mb-4 shadow-md">
          <FlaskConical className="w-5 h-5 text-[#0A1930]" />
        </div>

        <h4 className="font-montserrat font-bold text-base text-white mb-1.5">
          Custom Formulation?
        </h4>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Need a specific active concentration or viscosity? Our lab develops bespoke shade & softness matches.
        </p>

        <Button asChild size="sm" className="w-full bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-md text-xs py-4 rounded-xl">
          <Link href="/customization">
            Request Custom R&D <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
