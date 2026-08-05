import { PageHero } from "@/components/shared/PageHero"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { ContactInfo } from "@/features/contact/components/ContactInfo"

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us" 
        description="Have a question or need a custom solution? Reach out to our team."
      />

      <SectionWrapper className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <AnimatedContainer animation="slide-right" className="lg:col-span-5">
              <ContactInfo />
            </AnimatedContainer>

            <AnimatedContainer animation="fade-in" delay={0.2} className="lg:col-span-7">
              <ContactForm />
            </AnimatedContainer>

          </div>
        </Container>
      </SectionWrapper>
      
      {/* Google Map Placeholder */}
      <AnimatedContainer animation="fade-up" className="w-full h-[400px] md:h-[500px] bg-muted relative flex items-center justify-center border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
        <span className="text-muted-foreground/60 font-montserrat font-semibold tracking-widest uppercase relative z-20">
          Interactive Google Map
        </span>
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-foreground"></div>
          ))}
        </div>
      </AnimatedContainer>
    </>
  )
}
