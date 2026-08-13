import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { companyData } from "@/data/company"

export function CompanyStorySection() {
  return (
    <SectionWrapper className="bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedContainer animation="slide-right">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary w-fit">
                Our Story
              </div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground leading-tight">
                A Catalyst for Change in the Global Textile Industry
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {companyData.about.description}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a leader in the textile auxiliary sector, we serve a wide range of industries, including Pretreatment, Dyeing, Finishing, Denim Washing, and PSF (Polyester Staple Fiber). 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our success is built on a foundation of cutting-edge research, global expertise, and a deep commitment to the communities we serve.
              </p>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-in" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {companyData.about.stats.map((stat, idx) => (
                <div key={idx} className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-500 group">
                  <span className="font-montserrat text-3xl md:text-4xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase mt-3 tracking-wider">{stat.label}</span>
                </div>
              ))}
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 flex flex-col items-center text-center hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-500 group col-span-2">
                <span className="font-montserrat text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {companyData.about.title}
                </span>
                <span className="text-sm font-medium text-muted-foreground uppercase mt-3 tracking-wider">
                  Since 2017
                </span>
              </div>
            </div>
          </AnimatedContainer>
          
        </div>
      </Container>
    </SectionWrapper>
  )
}
