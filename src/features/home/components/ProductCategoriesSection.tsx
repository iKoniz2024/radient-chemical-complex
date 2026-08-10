import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { categoriesData } from "@/data/categories"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TiltCard } from "@/components/shared/animations/TiltCard"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"

export function ProductCategoriesSection() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle 
            title="Our Product Portfolio" 
            subtitle="Sustainable solutions for every stage of textile production."
            alignment="left"
            className="mb-0 text-primary-foreground [&>p]:text-primary-foreground/70 [&>h2]:text-primary-foreground text-glow"
          />
          <MagneticButton strength={0.1}>
            <Button variant="outline" className="shrink-0 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-white hover:text-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300" asChild>
              <Link href="/products">View All Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </MagneticButton>
        </div>

        <AnimatedContainer animation="stagger-container" staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category) => (
            <AnimatedContainer key={category.id} animation="stagger-item" className="h-full">
              <TiltCard tiltAmount={12} scaleAmount={1.05} className="h-full">
                <Link
                  href={`/products?category=${category.id}`}
                  className="group flex flex-col h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/50 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(217,155,34,0.2)] transition-all duration-300 backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary text-primary shrink-0 shadow-[0_0_15px_rgba(217,155,34,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-montserrat text-xl font-bold group-hover:text-secondary transition-colors">{category.title}</h3>
                  </div>
                  <p className="text-primary-foreground/80 leading-relaxed mb-6 flex-1 relative z-10">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-secondary group-hover:text-white transition-colors mt-auto relative z-10">
                    Explore Category <ArrowRight className="ml-1 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </Link>
              </TiltCard>
            </AnimatedContainer>
          ))}
        </AnimatedContainer>
      </Container>
    </SectionWrapper>
  )
}
