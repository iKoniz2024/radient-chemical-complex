"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { companyData } from "@/data/company"
import { Factory, Calendar, Globe, FlaskConical, CheckCircle2, ShieldCheck, Award } from "lucide-react"
import { motion } from "framer-motion"
import { CounterAnimation } from "@/components/shared/animations/CounterAnimation"

export function CompanyStorySection() {
  const highlights = [
    {
      icon: Factory,
      value: "20,000+",
      unit: "Tons / Year",
      label: "Annual Production Output",
      desc: "Massive scale production capacity across automated synthesis lines."
    },
    {
      icon: Calendar,
      value: "2017",
      unit: "Established",
      label: "Founded & Innovating",
      desc: "Nearly a decade of relentless research in sustainable textile chemistry."
    },
    {
      icon: Globe,
      value: "Dual-Hub",
      unit: "Global Reach",
      label: "Bangladesh & China Facilities",
      desc: "Direct supply chain resilience and fast regional delivery networks."
    },
    {
      icon: FlaskConical,
      value: "80+",
      unit: "Formulations",
      label: "Proprietary Products",
      desc: "Tailored auxiliaries for Pretreatment, Dyeing, Finishing & Washing."
    }
  ]

  const certifications = [
    "ZDHC Level 3",
    "OEKO-TEX Standard 100",
    "GOTS Certified",
    "ISO 9001:2015",
    "bluesign®",
    "SGS Tested"
  ]

  return (
    <SectionWrapper className="bg-background overflow-hidden text-foreground py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <AnimatedContainer animation="slide-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary w-fit">
                <Award className="w-3.5 h-3.5" /> Our Heritage & Mission
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="slide-right" delay={0.1}>
              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-tight">
                A Catalyst for Change in the <span className="text-secondary">Global Textile</span> Industry
              </h2>
            </AnimatedContainer>

            <AnimatedContainer animation="slide-right" delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
                At <strong>Radiant Chemical Complex</strong>, we are more than just a supplier of textile auxiliary chemicals—we are pioneers in sustainable manufacturing. Since 2017, we have been formulating high-efficiency, cost-effective solutions that redefine modern textile processing.
              </p>
            </AnimatedContainer>

            <AnimatedContainer animation="slide-right" delay={0.3}>
              <div className="flex flex-col gap-3.5 pt-2">
                {[
                  "Eco-friendly formulations reducing water, energy, and effluent load",
                  "Comprehensive portfolio spanning Pretreatment, Dyeing, Finishing & Denim",
                  "Dedicated technical service and custom R&D shade/fabric matching"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Right Metrics Grid Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {highlights.map((item, idx) => (
                <AnimatedContainer key={idx} animation="fade-in" delay={idx * 0.1}>
                  <motion.div 
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                  >
                    {/* Top ambient glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors pointer-events-none" />

                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shadow-sm">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                        {item.unit}
                      </span>
                    </div>

                    <div>
                      <CounterAnimation
                        value={item.value}
                        className="font-montserrat text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight group-hover:text-secondary transition-colors duration-300 block"
                      />
                      <h4 className="text-sm font-bold text-foreground/90 mt-1 mb-2">
                        {item.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatedContainer>
              ))}
            </div>

            {/* Certifications Bar */}
            <AnimatedContainer animation="fade-in" delay={0.4}>
              <div className="bg-card border border-border/80 rounded-2xl p-5 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-secondary" /> Compliances & Global Standards
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-xl bg-muted text-foreground/80 border border-border text-xs font-semibold hover:border-secondary/40 hover:text-secondary transition-colors"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedContainer>
          </div>
          
        </div>
      </Container>
    </SectionWrapper>
  )
}
