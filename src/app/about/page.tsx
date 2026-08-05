import { PageHero } from "@/components/shared/PageHero"
import { CompanyStorySection } from "@/features/about/components/CompanyStorySection"
import { MissionVisionSection } from "@/components/shared/sections/MissionVisionSection"
import { CoreValuesSection } from "@/components/shared/sections/CoreValuesSection"
import { WhyChooseUsSection } from "@/components/shared/sections/WhyChooseUsSection"
import { TimelineSection } from "@/features/about/components/TimelineSection"
import { CeoMessageSection } from "@/components/shared/sections/CeoMessageSection"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history, mission, vision, and core values of Radiant Chemical Complex.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Radiant Chemical Complex" 
        description="Pioneering sustainable, high-efficiency textile auxiliary solutions for a greener, thriving global industry."
      />
      
      <CompanyStorySection />
      
      <AnimatedContainer animation="fade-up">
        <MissionVisionSection />
      </AnimatedContainer>
      
      <AnimatedContainer animation="fade-in">
        <CoreValuesSection />
      </AnimatedContainer>
      
      <TimelineSection />
      
      <AnimatedContainer animation="fade-up">
        <WhyChooseUsSection />
      </AnimatedContainer>
      
      <AnimatedContainer animation="scale-up">
        <CeoMessageSection />
      </AnimatedContainer>
    </>
  )
}
