import { Suspense } from "react"
import { PageHero } from "@/components/shared/PageHero"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { GoogleMap } from "@/components/shared/GoogleMap"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { ContactInfo } from "@/features/contact/components/ContactInfo"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have a question or need a custom R&D solution? Reach out to the Radiant Chemical Complex team today.',
}

export default function ContactPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <PageHero 
          title="Contact Us" 
          description="Have a question or need a custom solution? Reach out to our team."
        />
      </CinematicSection>

      <CinematicSection depth={1}>
        <SectionWrapper className="bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <AnimatedContainer animation="slide-right" className="lg:col-span-5">
                <ContactInfo />
              </AnimatedContainer>

              <AnimatedContainer animation="fade-in" delay={0.2} className="lg:col-span-7">
                <Suspense fallback={<div className="bg-background border border-border rounded-2xl p-8 shadow-sm">Loading...</div>}>
                  <ContactForm />
                </Suspense>
              </AnimatedContainer>

            </div>
          </Container>
        </SectionWrapper>
      </CinematicSection>
      
      <CinematicSection depth={1.2}>
        <AnimatedContainer animation="fade-up" className="w-full h-100 md:h-125 border-t border-border overflow-hidden">
          <GoogleMap
            lat={23.8691713}
            lng={90.3591579}
            title="Radiant Chemical Complex"
            className="w-full h-full"
          />
        </AnimatedContainer>
      </CinematicSection>
    </>
  )
}
