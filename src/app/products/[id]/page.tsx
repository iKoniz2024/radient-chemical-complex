import { notFound } from "next/navigation"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { productsData } from "@/data/products"
import { categoriesData } from "@/data/categories"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = productsData.find((p) => p.id === id)
  
  if (!product) {
    return { title: 'Product Not Found' }
  }
  
  return {
    title: product.name,
    description: product.properties.substring(0, 160) + '...',
  }
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = productsData.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const category = categoriesData.find((c) => c.id === product.categoryId)

  return (
    <>
      <div className="bg-primary text-primary-foreground py-16">
        <Container>
          <Link 
            href="/products" 
            className="inline-flex items-center text-sm font-medium text-primary-foreground/70 hover:text-secondary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                <category.icon className="w-4 h-4 mr-2" />
                {category.title}
              </span>
            )}
          </div>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold">{product.name}</h1>
        </Container>
      </div>

      <SectionWrapper>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
                <h2 className="font-montserrat text-2xl font-bold mb-6">Properties & Uses</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {product.properties}
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 border border-border rounded-2xl p-8">
                <h2 className="font-montserrat text-xl font-bold mb-4">Product Benefits</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["High Efficiency", "Eco-Friendly", "Cost-Effective", "Consistent Quality"].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 sticky top-24 shadow-lg">
                <h3 className="font-montserrat text-2xl font-bold mb-4">Request a Sample</h3>
                <p className="text-primary-foreground/80 mb-8">
                  Interested in testing {product.name} in your production facility? Request a free sample today.
                </p>
                <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Request Sample
                </Button>
                
                <hr className="border-primary-foreground/10 my-8" />
                
                <h4 className="font-semibold mb-2">Need a custom formulation?</h4>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  We can adjust properties to match your exact target effect.
                </p>
                <Button variant="outline" className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact R&D Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  )
}
