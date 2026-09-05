

import { Metadata } from "next"
import { Suspense } from "react"
import ProductsContent from "@/features/products/components/ProductsContent"

export const metadata: Metadata = {
  title: "Products Portfolio",
  description:
    "Explore our comprehensive range of sustainable textile auxiliary chemicals including pretreatment, dyeing, finishing, and denim washing.",
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex items-center justify-center">
          Loading products...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  )
}