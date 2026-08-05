import { HomeHero } from "@/features/home/components/HomeHero"
import { AboutSection } from "@/features/home/components/AboutSection"
import { MissionVisionSection } from "@/components/shared/sections/MissionVisionSection"
import { CoreValuesSection } from "@/components/shared/sections/CoreValuesSection"
import { ProductCategoriesSection } from "@/features/home/components/ProductCategoriesSection"
import { WhyChooseUsSection } from "@/components/shared/sections/WhyChooseUsSection"
import { CustomizationProcessSection } from "@/features/home/components/CustomizationProcessSection"
import { CeoMessageSection } from "@/components/shared/sections/CeoMessageSection"
import { ContactCtaSection } from "@/features/home/components/ContactCtaSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home | Sustainable Textile Chemicals',
  description: 'Welcome to Radiant Chemical Complex. We are a catalyst for change in the global textile industry, offering high-efficiency solutions.',
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ProductCategoriesSection />
      <WhyChooseUsSection />
      <CustomizationProcessSection />
      <CeoMessageSection />
      <ContactCtaSection />
    </>
  )
}
