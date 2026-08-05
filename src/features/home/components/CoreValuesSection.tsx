import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { companyData } from "@/data/company"

export function CoreValuesSection() {
  return (
    <SectionWrapper>
      <Container>
        <SectionTitle 
          title="Our Core Values" 
          subtitle="The principles that guide our decisions, actions, and commitment to the global textile industry." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {companyData.coreValues.map((value, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hexagon Background Accent */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
              
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
