import { Container } from "@/components/shared/Container"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { FloatingElement } from "@/components/shared/animations/FloatingElement"

export interface PageHeroProps {
  title: string
  description?: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
      
      {/* Decorative Elements */}
      <FloatingElement className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 z-0" duration={6} yOffset={20}>
        <div className="w-100 h-100 bg-secondary/20 rounded-full blur-3xl"></div>
      </FloatingElement>
      <FloatingElement className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 z-0" duration={8} yOffset={15} delay={1}>
        <div className="w-75 h-75 bg-accent/20 rounded-full blur-3xl"></div>
      </FloatingElement>
      
      <Container className="relative z-10">
        <AnimatedContainer animation="stagger-container" staggerChildren={0.15}>
          <AnimatedContainer animation="stagger-item">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">{title}</h1>
          </AnimatedContainer>
          {description && (
            <AnimatedContainer animation="stagger-item">
              <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                {description}
              </p>
            </AnimatedContainer>
          )}
        </AnimatedContainer>
      </Container>
    </div>
  )
}

