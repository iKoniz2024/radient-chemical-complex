import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"
import { companyData } from "@/data/company"

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Our sustainability commitments and initiatives.",
}

export default function SustainabilityPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <div className="bg-primary text-primary-foreground py-20">
          <Container className="text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Sustainability</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">Our approach to sustainable production, safety, and environmental responsibility.</p>
          </Container>
        </div>
      </CinematicSection>

      <CinematicSection depth={1}>
        <SectionWrapper>
          <Container>
            <SectionTitle title="Our Commitments" subtitle="How we work toward a greener future" alignment="left" />

            <div className="prose prose-slate mt-6 max-w-none">
              <p>{companyData.mission.description}</p>
              <ul>
                <li>Reducing water and energy usage across production</li>
                <li>Developing eco-friendly formulations</li>
                <li>Lowering effluent load and improving waste handling</li>
              </ul>
            </div>
          </Container>
        </SectionWrapper>
      </CinematicSection>
    </>
  )
}
