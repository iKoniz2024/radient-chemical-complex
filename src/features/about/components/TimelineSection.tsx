import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { timelineData } from "@/data/timeline"

export function TimelineSection() {
  return (
    <SectionWrapper className="bg-muted/30 border-t border-border">
      <Container>
        <AnimatedContainer animation="fade-up">
          <SectionTitle 
            title="Our Journey" 
            subtitle="From our inception to becoming a global leader in sustainable textile chemicals." 
          />
        </AnimatedContainer>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12">
            {timelineData.map((item, idx) => (
              <AnimatedContainer 
                key={idx} 
                animation="fade-up" 
                delay={idx * 0.15}
                className={`relative flex items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-md md:-translate-x-1/2 mt-0 md:mt-0 z-10">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                
                {/* Content Box */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="bg-background p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow relative group">
                    {/* Connecting Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-border transform rotate-45 ${idx % 2 === 0 ? '-left-2 border-b border-l' : '-right-2 border-t border-r'}`}></div>
                    
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-bold font-montserrat mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
