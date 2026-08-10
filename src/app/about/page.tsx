import { PageHero } from "@/components/shared/PageHero"
import { CompanyStorySection } from "@/features/about/components/CompanyStorySection"
import { MissionVisionSection } from "@/components/shared/sections/MissionVisionSection"
import { CoreValuesSection } from "@/components/shared/sections/CoreValuesSection"
import { WhyChooseUsSection } from "@/components/shared/sections/WhyChooseUsSection"
import { TimelineSection } from "@/features/about/components/TimelineSection"
import { CeoMessageSection } from "@/components/shared/sections/CeoMessageSection"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history, mission, vision, and core values of Radiant Chemical Complex.',
}

export default function AboutPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <PageHero 
          title="About Radiant Chemical Complex" 
          description="Pioneering sustainable, high-efficiency textile auxiliary solutions for a greener, thriving global industry."
        />
      </CinematicSection>
      
      <CinematicSection depth={1}>
        <CompanyStorySection />
      </CinematicSection>
      
      <CinematicSection depth={1.2}>
        <MissionVisionSection />
      </CinematicSection>
      
      <CinematicSection depth={0.8}>
        <CoreValuesSection />
      </CinematicSection>
      
      <CinematicSection depth={1.1}>
        <TimelineSection />
      </CinematicSection>
      
      <CinematicSection depth={1}>
        <WhyChooseUsSection />
      </CinematicSection>
      
      <CinematicSection depth={1.3}>
        <CeoMessageSection />
      </CinematicSection>
    </>
  )
}
