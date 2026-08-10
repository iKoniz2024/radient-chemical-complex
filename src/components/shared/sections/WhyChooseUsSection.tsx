import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { whyChooseUs } from "@/data/features"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"

export function WhyChooseUsSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle 
          title="Why Choose Radiant?" 
          subtitle="A foundation of cutting-edge research, global expertise, and deep commitment." 
        />
        
        <AnimatedContainer animation="stagger-container" staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyChooseUs.map((feature, idx) => (
            <AnimatedContainer key={idx} animation="stagger-item" className="flex flex-col items-center text-center gap-4 group">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 text-secondary mb-2 group-hover:bg-secondary group-hover:text-primary group-hover:-translate-y-2 shadow-[0_5px_15px_rgba(217,155,34,0.1)] group-hover:shadow-[0_15px_30px_rgba(217,155,34,0.3)] transition-all duration-300">
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="font-montserrat text-lg font-bold text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </AnimatedContainer>
          ))}
        </AnimatedContainer>
      </Container>
    </SectionWrapper>
  )
}
