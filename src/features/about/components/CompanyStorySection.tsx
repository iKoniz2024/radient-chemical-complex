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
          
          <AnimatedContainer animation="fade-in" delay={0.2} className="relative perspective-1000">
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden bg-muted flex items-center justify-center border border-border shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:shadow-[0_25px_60px_rgba(217,155,34,0.15)] transition-all duration-700 preserve-3d">
              {/* Factory / Scale Image Placeholder */}
               <span className="text-muted-foreground/50 font-montserrat tracking-widest uppercase relative z-10 group-hover:scale-110 transition-transform duration-700">Production Facilities</span>
               
               {/* Stats Overlay */}
               <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border p-6 grid grid-cols-3 divide-x divide-border translate-z-20">
                  {companyData.about.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center px-2 group/stat">
                      <span className="font-montserrat text-xl md:text-2xl font-bold text-primary group-hover/stat:text-secondary group-hover/stat:scale-110 transition-all duration-300">{stat.value}</span>
                      <span className="text-xs font-medium text-muted-foreground uppercase mt-1">{stat.label}</span>
                    </div>
                  ))}
               </div>
            </div>
          </AnimatedContainer>
          
        </div>
      </Container>
    </SectionWrapper>
  )
}
