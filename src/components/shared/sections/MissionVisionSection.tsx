import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { Target, Lightbulb } from "lucide-react"
import { TiltCard } from "@/components/shared/animations/TiltCard"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"

export function MissionVisionSection() {
  return (
    <SectionWrapper className="bg-muted/30 border-y border-border/50">
      <Container>
        <AnimatedContainer animation="stagger-container" staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <AnimatedContainer animation="slide-right" className="h-full">
            <TiltCard tiltAmount={8} scaleAmount={1.02} className="h-full">
              <div className="flex flex-col h-full bg-background rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-border hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 group">
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="font-montserrat text-3xl font-bold text-primary">{companyData.mission.title}</h2>
                </div>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed relative z-10">
                  {companyData.mission.description}
                </p>
                <ul className="space-y-4 mt-auto">
                  {companyData.mission.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_10px_rgba(217,155,34,0.5)]"></div>
                      <span className="text-foreground/80 group-hover/item:text-foreground transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </AnimatedContainer>

          {/* Vision Card */}
          <AnimatedContainer animation="slide-right" delay={0.2} className="h-full">
            <TiltCard tiltAmount={8} scaleAmount={1.02} className="h-full">
              <div className="flex flex-col h-full bg-primary text-primary-foreground rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(10,25,48,0.4)] border border-primary-foreground/10 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-50" />
                
                <div className="relative z-10 flex items-center gap-5 mb-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 text-secondary shadow-[0_0_20px_rgba(217,155,34,0.2)] group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h2 className="font-montserrat text-3xl font-bold text-primary-foreground text-glow">{companyData.vision.title}</h2>
                </div>
                <p className="text-primary-foreground/85 mb-8 text-lg leading-relaxed relative z-10">
                  {companyData.vision.description}
                </p>
                <ul className="space-y-4 mt-auto relative z-10">
                  {companyData.vision.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_10px_rgba(217,155,34,0.8)]"></div>
                      <span className="text-primary-foreground/90 group-hover/item:text-white transition-colors">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </AnimatedContainer>

        </AnimatedContainer>
      </Container>
    </SectionWrapper>
  )
}
