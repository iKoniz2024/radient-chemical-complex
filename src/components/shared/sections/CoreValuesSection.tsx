import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { companyData } from "@/data/company"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { TiltCard } from "@/components/shared/animations/TiltCard"

export function CoreValuesSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle 
          title="Our Core Values" 
          subtitle="The principles that guide our decisions, actions, and commitment to the global textile industry." 
        />
        
        <AnimatedContainer animation="stagger-container" staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {companyData.coreValues.map((value, idx) => (
              <AnimatedContainer key={idx} animation="stagger-item" className="h-full">
                <TiltCard tiltAmount={10} scaleAmount={1.02} className="h-full">
                  <div 
                    className="h-full group flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(217,155,34,0.15)] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden preserve-3d"
                  >
                    {/* Hexagon Background Accent */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-500"></div>
                    
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-secondary/20 group-hover:text-secondary group-hover:scale-110 transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_0_20px_rgba(217,155,34,0.3)]">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-montserrat text-xl font-semibold text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {value.description}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedContainer>
            ))}
          </AnimatedContainer>
      </Container>
    </SectionWrapper>
  )
}
