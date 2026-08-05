import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import Link from "next/link"

export function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-primary py-20 text-primary-foreground">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="49.8,7.5 62.3,14.8 62.3,29.2 49.8,36.4 37.3,29.2 37.3,14.8" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
              Global Textile Chemical Solutions
            </div>
            <h1 className="font-montserrat text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Solutions for a <span className="text-secondary">Sustainable</span> Future
            </h1>
            <p className="max-w-[42rem] text-lg leading-normal text-primary-foreground/80 sm:text-xl sm:leading-8">
              We are a catalyst for change in the global textile industry, developing eco-friendly, high-efficiency, and cost-effective solutions that meet the demands of modern textile production.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link href="/customization">Custom R&D Services</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
            {/* Visual placeholder for the lab/factory image from PDF */}
            <div className="relative h-[500px] w-full max-w-[500px] rounded-2xl border border-white/10 bg-primary-foreground/5 backdrop-blur-sm overflow-hidden flex items-center justify-center">
               <span className="text-primary-foreground/40 font-montserrat tracking-widest uppercase">High-Tech Laboratory</span>
               <div className="absolute bottom-6 left-6 right-6 bg-primary/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center justify-between">
                 <div>
                   <p className="text-sm text-primary-foreground/60">Annual Output</p>
                   <p className="font-montserrat font-bold text-xl text-secondary">20,000+ Tons</p>
                 </div>
                 <div className="h-10 w-px bg-white/20"></div>
                 <div>
                   <p className="text-sm text-primary-foreground/60">Facilities</p>
                   <p className="font-montserrat font-bold text-xl text-primary-foreground">Bangladesh & China</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
