import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { customizationProcess } from "@/data/features"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationProcess.map((process, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-secondary font-montserrat font-bold text-2xl border-4 border-background shadow-sm mb-6">
                  {process.step}
                </div>
                <h3 className="font-montserrat text-lg font-bold text-foreground mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-12 bg-background p-8 rounded-2xl border border-border shadow-sm max-w-3xl mx-auto">
          <h3 className="font-montserrat text-xl font-semibold text-primary">Need a specific target effect?</h3>
          <p className="text-muted-foreground mb-4">
            Send us two fabric samples (one untreated, one target effect) along with a chemical sample for reference.
          </p>
          <Button size="lg" asChild>
            <Link href="/customization">Submit Fabric Sample</Link>
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  )
}
