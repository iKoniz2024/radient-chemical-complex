"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { Quote, Sparkles, ShieldCheck, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Typewriter } from "@/components/shared/animations/ScrambleText"

export function CeoMessageSection() {
  const { ceoMessage } = companyData

  return (
    <SectionWrapper className="py-20 md:py-28 overflow-hidden bg-background">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl sm:rounded-[36px] bg-[#0A1930] text-white border border-white/15 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
<div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />
<Quote className="absolute top-6 right-8 w-32 h-32 text-white/5 rotate-180 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<motion.div 
              initial={{ opacity: 0, x: -55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col items-center justify-center w-full transform-gpu"
            >
              <div className="w-full max-w-[400px] rounded-3xl bg-gradient-to-b from-white/12 to-white/5 p-3.5 sm:p-4 border border-secondary/40 shadow-2xl group">
<div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                  <Image
                    src="/images/ceo-photo.jpeg"
                    alt={ceoMessage.name}
                    fill
                    className="object-cover scale-[1.48] origin-[center_36%] group-hover:scale-[1.54] transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                    unoptimized
                  />
                </div>
<div className="pt-4 pb-2 px-2 text-center">
                  <h3 className="font-montserrat font-bold text-white text-xl sm:text-2xl tracking-tight">
                    {ceoMessage.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest mt-1">
                    {ceoMessage.title}
                  </p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Radiant Chemical Complex
                  </p>
                </div>
              </div>
            </motion.div>
<motion.div 
              initial={{ opacity: 0, x: 55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="lg:col-span-7 flex flex-col gap-6 text-left transform-gpu"
            >
<div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary w-fit shadow-xs">
                <Sparkles className="w-3.5 h-3.5" /> Leadership & Vision
              </div>
<h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary leading-snug tracking-tight">
                &ldquo;{ceoMessage.quote}&rdquo;
              </h2>
<div className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans min-h-[110px]">
                <Typewriter speed={16} delay={0.3}>
                  {ceoMessage.content}
                </Typewriter>
              </div>
<div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  Sustainable Chemistry
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  <Award className="w-4 h-4 text-secondary" />
                  Zero Toxic Discharge
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  Industry Leadership
                </div>
              </div>

            </motion.div>

          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
