import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { customizationProcess } from "@/data/features"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"

export function CustomizationProcessSection() {
  return (
    <SectionWrapper className="bg-muted/50 border-y border-border">
      <Container>
        <SectionTitle 
          title="Customization Process" 
          subtitle="We research, match, and develop customized products for you." 
        />
        
        <div className="relative mt-16 mb-12">
          {/* Timeline Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0"></div>
          
          <AnimatedContainer animation="stagger-container" staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationProcess.map((process, idx) => (
              <AnimatedContainer key={idx} animation="stagger-item" className="relative z-10 flex flex-col items-center text-center group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-secondary font-montserrat font-bold text-2xl border-4 border-background shadow-[0_0_15px_rgba(217,155,34,0.3)] mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                  {process.step}
                </div>
                <h3 className="font-montserrat text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{process.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </AnimatedContainer>
            ))}
          </AnimatedContainer>
        </div>
        
        <AnimatedContainer animation="fade-up" delay={0.2}>
          <div className="flex flex-col items-center justify-center gap-4 text-center mt-12 bg-background/80 backdrop-blur-md p-8 rounded-3xl border border-border shadow-[0_10px_40px_rgba(0,0,0,0.08)] max-w-3xl mx-auto hover:shadow-[0_15px_50px_rgba(217,155,34,0.15)] hover:border-secondary/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
            <h3 className="font-montserrat text-xl font-bold text-primary relative z-10">Need a specific target effect?</h3>
            <p className="text-muted-foreground mb-4 relative z-10">
              Send us two fabric samples (one untreated, one target effect) along with a chemical sample for reference.
            </p>
            <MagneticButton strength={0.15} className="relative z-10">
              <Button size="lg" asChild className="shadow-[0_0_15px_rgba(217,155,34,0.3)]">
                <Link href="/customization">Submit Fabric Sample</Link>
              </Button>
            </MagneticButton>
          </div>
        </AnimatedContainer>
      </Container>
    </SectionWrapper>
  )
}
