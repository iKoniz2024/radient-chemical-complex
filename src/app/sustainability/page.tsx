import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"
import { companyData } from "@/data/company"

import { PageHero } from "@/components/shared/PageHero"

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Our sustainability commitments and initiatives.",
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Sustainability"
        description="Our approach to sustainable production, safety, and environmental responsibility."
        backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1920"
      />

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
    </div>
  )
}
