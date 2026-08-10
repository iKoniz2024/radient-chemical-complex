import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { customizationProcess } from "@/data/features"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "R&D Customization",
  description: "Custom R&D services and sample submission for product development.",
}

export default function CustomizationPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <div className="bg-primary text-primary-foreground py-20">
          <Container className="text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">R&D Customization</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Submit fabric samples and request custom formulations from our R&D team.</p>
          </Container>
        </div>
      </CinematicSection>

      <CinematicSection depth={1}>
        <SectionWrapper>
          <Container>
            <SectionTitle title="Customization Process" subtitle="How we develop tailored solutions" alignment="left" />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {customizationProcess.map((step, idx) => (
                <div key={idx} className="bg-background border border-border rounded-xl p-6">
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Submit Fabric Sample</Link>
              </Button>
            </div>
          </Container>
        </SectionWrapper>
      </CinematicSection>
    </>
  )
}
