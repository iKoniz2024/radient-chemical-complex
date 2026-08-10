import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { FloatingElement } from "@/components/shared/animations/FloatingElement"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"

export function ContactCtaSection() {
  return (
    <SectionWrapper className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-secondary/10 -z-10"></div>
      <FloatingElement duration={8} yOffset={25} className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 -z-10">
        <div className="w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl"></div>
      </FloatingElement>
      
      <Container>
        <AnimatedContainer animation="stagger-container" staggerChildren={0.2} className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <AnimatedContainer animation="stagger-item">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Ready to upgrade your textile production?
            </h2>
          </AnimatedContainer>
          <AnimatedContainer animation="stagger-item">
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Partner with Radiant Chemical Complex for sustainable, efficient, and cost-effective auxiliary chemicals tailored to your exact needs.
            </p>
          </AnimatedContainer>
          <AnimatedContainer animation="stagger-item" className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <MagneticButton strength={0.15}>
              <Button size="lg" asChild className="shadow-[0_0_20px_rgba(217,155,34,0.3)] hover:shadow-[0_0_30px_rgba(217,155,34,0.5)]">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.1}>
              <Button size="lg" variant="outline" className="bg-white/50 backdrop-blur-md" asChild>
                <Link href="/products">Browse Catalog</Link>
              </Button>
            </MagneticButton>
          </AnimatedContainer>
        </AnimatedContainer>
      </Container>
    </SectionWrapper>
  )
}
