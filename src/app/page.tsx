import { HomeHero } from "@/features/home/components/HomeHero"
import { AboutSection } from "@/features/home/components/AboutSection"
import { MissionVisionSection } from "@/components/shared/sections/MissionVisionSection"
import { CoreValuesSection } from "@/components/shared/sections/CoreValuesSection"
import { ProductCategoriesSection } from "@/features/home/components/ProductCategoriesSection"
import { WhyChooseUsSection } from "@/components/shared/sections/WhyChooseUsSection"
import { CustomizationProcessSection } from "@/features/home/components/CustomizationProcessSection"
import { CeoMessageSection } from "@/components/shared/sections/CeoMessageSection"
import { ContactCtaSection } from "@/features/home/components/ContactCtaSection"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: 'Home | Radiant Chemical Complex',
  },
  description: 'Welcome to Radiant Chemical Complex. We are a catalyst for change in the global textile industry, offering high-efficiency solutions.',
}

export default function Home() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <HomeHero />
      </CinematicSection>

      <CinematicSection depth={1}>
        <AboutSection />
      </CinematicSection>

      <CinematicSection depth={1.2}>
        <MissionVisionSection />
      </CinematicSection>

      <CinematicSection depth={0.8}>
        <CoreValuesSection />
      </CinematicSection>

      <CinematicSection depth={1.3}>
        <ProductCategoriesSection />
      </CinematicSection>

      <CinematicSection depth={1}>
        <WhyChooseUsSection />
      </CinematicSection>

      <CinematicSection depth={1.1}>
        <CustomizationProcessSection />
      </CinematicSection>

      <CinematicSection depth={1.4}>
        <CeoMessageSection />
      </CinematicSection>

      <CinematicSection depth={1}>
        <ContactCtaSection />
      </CinematicSection>
    </>
  )
}
