import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { companyData } from "@/data/company"

export function AboutSection() {
  return (
    <SectionWrapper className="bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-8">
            <SectionTitle title={companyData.about.title} alignment="left" className="mb-0" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {companyData.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              {companyData.about.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-montserrat text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center border border-border">
            {/* Map/Global Network Image Placeholder from PDF page 3 */}
             <span className="text-muted-foreground/50 font-montserrat tracking-widest uppercase">Global Network Map</span>
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
