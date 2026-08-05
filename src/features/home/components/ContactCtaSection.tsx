import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactCtaSection() {
  return (
    <SectionWrapper className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-secondary/10 -z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
      
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Ready to upgrade your textile production?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Partner with Radiant Chemical Complex for sustainable, efficient, and cost-effective auxiliary chemicals tailored to your exact needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
