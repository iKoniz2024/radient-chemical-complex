import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { Quote } from "lucide-react"
import Image from "next/image"

export function CeoMessageSection() {
  const { ceoMessage } = companyData

  return (
    <SectionWrapper>
      <Container>
        <div className="bg-primary text-primary-foreground shadow-xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch">
            
            {/* CEO Image */}
            <div className="lg:col-span-4 relative">
               <Image
                 src="/images/ceo.png"
                 alt={ceoMessage.name}
                 fill
                 className="object-cover object-top"
                 sizes="(max-width: 1024px) 100vw, 35vw"
                 priority
               />
               <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />
               <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, transparent 70%, var(--color-primary) 100%)" }} />
            </div>

            {/* Content */}
            <div className="lg:col-span-8 p-10 md:p-16 flex flex-col justify-center relative">
              <Quote className="absolute top-10 right-10 w-24 h-24 text-primary-foreground/5 rotate-180" />
              
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-secondary leading-snug">
                &quot;{ceoMessage.quote}&quot;
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
