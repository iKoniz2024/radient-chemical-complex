import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { categoriesData } from "@/data/categories"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ProductCategoriesSection() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle 
            title="Our Product Portfolio" 
            subtitle="Sustainable solutions for every stage of textile production."
            alignment="left"
            className="mb-0 text-primary-foreground [&>p]:text-primary-foreground/70 [&>h2]:text-primary-foreground"
          />
          <Button variant="outline" className="shrink-0 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary" asChild>
            <Link href="/products">View All Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group flex flex-col p-8 rounded-2xl bg-background/5 border border-primary-foreground/10 hover:bg-background/10 hover:border-primary-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-primary shrink-0">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-primary-foreground/70 leading-relaxed mb-6 flex-1">
                {category.description}
              </p>
              <div className="flex items-center text-sm font-medium text-secondary group-hover:text-primary-foreground transition-colors mt-auto">
                Explore Category <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
