import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { Target, Lightbulb } from "lucide-react"

export function MissionVisionSection() {
  return (
    <SectionWrapper className="bg-muted/30 border-y border-border/50">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="flex flex-col h-full bg-background rounded-2xl p-8 md:p-10 shadow-sm border border-border hover:border-primary/20 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="font-montserrat text-3xl font-bold text-primary">{companyData.mission.title}</h2>
            </div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {companyData.mission.description}
            </p>
            <ul className="space-y-4 mt-auto">
              {companyData.mission.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></div>
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="flex flex-col h-full bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary/20 text-secondary">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h2 className="font-montserrat text-3xl font-bold text-primary-foreground">{companyData.vision.title}</h2>
            </div>
            <p className="text-primary-foreground/80 mb-8 text-lg leading-relaxed">
              {companyData.vision.description}
            </p>
            <ul className="space-y-4 mt-auto">
              {companyData.vision.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></div>
                  <span className="text-primary-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </SectionWrapper>
  )
}
