import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { Quote } from "lucide-react"

export function CeoMessageSection() {
  const { ceoMessage } = companyData

  return (
    <SectionWrapper>
      <Container>
        <div className="bg-primary text-primary-foreground rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Placeholder */}
            <div className="lg:col-span-5 bg-muted relative min-h-[400px] flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
               {/* Decorative Circle from PDF Page 26 */}
               <div className="absolute -bottom-10 -left-10 w-40 h-40 border-[20px] border-secondary rounded-full opacity-20"></div>
               <span className="text-muted-foreground/80 font-montserrat tracking-widest uppercase relative z-20">CEO Portrait</span>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center relative">
              <Quote className="absolute top-10 right-10 w-24 h-24 text-primary-foreground/5 rotate-180" />
              
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-secondary leading-snug">
                "{ceoMessage.quote}"
              </h2>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
                {ceoMessage.content}
              </p>
              
              <div>
                <p className="font-montserrat text-xl font-bold">{ceoMessage.name}</p>
                <p className="text-secondary font-medium mt-1">{ceoMessage.title}</p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
