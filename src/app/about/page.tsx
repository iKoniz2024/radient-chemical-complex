import { PageHero } from "@/components/shared/PageHero"
import { CompanyStorySection } from "@/features/about/components/CompanyStorySection"
import { MissionVisionSection } from "@/features/home/components/MissionVisionSection"
import { CoreValuesSection } from "@/features/home/components/CoreValuesSection"
import { WhyChooseUsSection } from "@/features/home/components/WhyChooseUsSection"
import { TimelineSection } from "@/features/about/components/TimelineSection"
import { CeoMessageSection } from "@/features/home/components/CeoMessageSection"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"

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
