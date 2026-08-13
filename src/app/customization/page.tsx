import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { customizationProcess } from "@/data/features"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"
import { FloatingElement } from "@/components/shared/animations/FloatingElement"
import { PageHero } from "@/components/shared/PageHero"
import { Metadata } from "next"
import { FlaskConical, Send, FileCheck, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "R&D Customization",
  description: "Custom R&D services and sample submission for product development.",
}

const sampleSteps = [
  {
    icon: FlaskConical,
    title: "Send Your Fabric",
    description: "Provide two fabric samples — one untreated and one with your target effect — along with any reference chemical samples.",
  },
  {
    icon: FileCheck,
    title: "Lab Analysis",
    description: "Our R&D team analyzes fiber composition, target effect, and chemical compatibility to develop the optimal formulation.",
  },
  {
    icon: Send,
    title: "Sample Delivery",
    description: "We prepare and ship custom-developed samples for your testing and validation before mass production.",
  },
]

export default function CustomizationPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <PageHero
          title="R&D Customization"
          description="From lab to production — we develop tailored chemical formulations that match your exact specifications."
        />
      </CinematicSection>

      <CinematicSection depth={1}>
        <SectionWrapper className="bg-muted/30 border-b border-border/50">
          <Container>
            <SectionTitle
              title="How It Works"
              subtitle="Our proven 4-step process transforms your requirements into production-ready solutions"
              alignment="center"
            />

            <div className="relative mt-16 mb-12">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0" />

              <AnimatedContainer animation="stagger-container" staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {customizationProcess.map((process, idx) => (
                  <AnimatedContainer key={idx} animation="stagger-item" className="relative z-10 flex flex-col items-center text-center group">
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:border-secondary group-hover:shadow-[0_0_30px_rgba(217,155,34,0.4)] transition-all duration-500">
                      <process.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="font-montserrat text-sm font-bold text-secondary mb-2">{process.step}</div>
                    <h3 className="font-montserrat text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{process.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-55">
                      {process.description}
                    </p>
                  </AnimatedContainer>
                ))}
              </AnimatedContainer>
            </div>
          </Container>
        </SectionWrapper>
      </CinematicSection>

      <CinematicSection depth={0.8}>
        <SectionWrapper>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedContainer animation="slide-right">
                <div className="flex flex-col gap-6">
                  <SectionTitle
                    title="Submit a Sample"
                    subtitle="Ready to develop a custom formulation?"
                    alignment="left"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    Send us your fabric samples and our R&D team will develop a tailored solution that meets your exact specifications. We work closely with you through every stage — from initial analysis to final production.
                  </p>
                  <div className="flex flex-col gap-4 mt-2">
                    {sampleSteps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start group/step">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 shrink-0 group-hover/step:bg-secondary group-hover/step:border-secondary transition-all duration-300">
                          <step.icon className="w-5 h-5 text-secondary group-hover/step:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-montserrat font-bold text-foreground mb-1 group-hover/step:text-secondary transition-colors">{step.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedContainer>

              <AnimatedContainer animation="fade-in" delay={0.3}>
                <div className="bg-primary/5 border border-primary/10 rounded-3xl p-10 relative overflow-hidden">
                  <FloatingElement className="absolute -top-20 -right-20 z-0" duration={6} yOffset={15}>
                    <div className="w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
                  </FloatingElement>
                  <div className="relative z-10 flex flex-col gap-6">
                    <h3 className="font-montserrat text-2xl font-bold text-primary">Send Us Your Samples</h3>
                    <div className="bg-background border border-border rounded-2xl p-6 space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">What to include:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            Two fabric samples (untreated + target effect)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            Chemical sample for reference (if available)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            Processing parameters and requirements
                          </li>
                        </ul>
                      </div>
                    </div>
                    <MagneticButton strength={0.15} className="w-fit">
                      <Button size="lg" asChild className="shadow-[0_0_20px_rgba(217,155,34,0.3)] hover:shadow-[0_0_30px_rgba(217,155,34,0.5)] group">
                        <Link href="/contact" className="flex items-center gap-2">
                          Contact R&D Team
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </Container>
        </SectionWrapper>
      </CinematicSection>
    </>
  )
}
