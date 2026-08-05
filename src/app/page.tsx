import { HomeHero } from "@/features/home/components/HomeHero"
import { AboutSection } from "@/features/home/components/AboutSection"
import { MissionVisionSection } from "@/features/home/components/MissionVisionSection"
import { CoreValuesSection } from "@/features/home/components/CoreValuesSection"
import { ProductCategoriesSection } from "@/features/home/components/ProductCategoriesSection"
import { WhyChooseUsSection } from "@/features/home/components/WhyChooseUsSection"
import { CustomizationProcessSection } from "@/features/home/components/CustomizationProcessSection"
import { CeoMessageSection } from "@/features/home/components/CeoMessageSection"
import { ContactCtaSection } from "@/features/home/components/ContactCtaSection"

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
