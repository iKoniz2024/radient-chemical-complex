import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { whyChooseUs } from "@/data/features"

export function WhyChooseUsSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle 
          title="Why Choose Radiant?" 
          subtitle="A foundation of cutting-edge research, global expertise, and deep commitment." 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyChooseUs.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 text-secondary mb-2">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
