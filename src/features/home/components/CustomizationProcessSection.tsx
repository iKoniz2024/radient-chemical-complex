"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { FlaskConical, Send, Rocket, Cog, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"

export function CustomizationProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Molecular R&D Synthesis",
      desc: "Formulating bespoke molecular recipes to match your target effect, fiber composition, and cost targets.",
      icon: FlaskConical,
      tag: "Stage 01 • R&D",
      benefit: "Target Effect Match"
    },
    {
      step: "02",
      title: "Complimentary Lab Trial",
      desc: "Fast dispatch of testing samples for rigorous validation on your mill machinery.",
      icon: Send,
      tag: "Stage 02 • Trial",
      benefit: "48h Sample Dispatch"
    },
    {
      step: "03",
      title: "Pilot & Batch Scaling",
      desc: "Seamless scale-up from pilot trials to multi-ton synthesis across automated reactor batches.",
      icon: Rocket,
      tag: "Stage 03 • Synthesis",
      benefit: "Strict Repeatability"
    },
    {
      step: "04",
      title: "Mill Integration & Support",
      desc: "On-site and remote technical support ensuring smooth continuous dyeing and finishing runs.",
      icon: Cog,
      tag: "Stage 04 • Execution",
      benefit: "Zero Production Lag"
    }
  ]

  return (
    <SectionWrapper className="bg-muted/30 border-y border-border/60 py-20 md:py-28 overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Tailored Molecular Engineering
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Our 4-Step <span className="text-secondary">Customization</span> Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            From molecular R&D to bulk industrial execution — we engineer customized auxiliary chemicals designed specifically for your factory machinery.
          </p>
        </motion.div>

        {/* Connected Industrial Flow Pipeline */}
        <div className="relative">
          
          {/* Continuous Glowing Progress Track (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2.5px] bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20 z-0 pointer-events-none" />

          {/* 4 Pipeline Step Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center transform-gpu group"
              >
                {/* Illuminated Step Node Marker */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-card border-2 border-secondary/60 flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary group-hover:text-[#0A1930] group-hover:border-secondary transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-secondary text-[#0A1930] text-xs font-extrabold shadow-xs">
                    {item.step}
                  </span>
                </div>

                {/* Pipeline Step Card */}
                <div className="w-full h-full flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 text-left relative overflow-hidden group-hover:-translate-y-1">
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                      {item.tag}
                    </span>

                    <h3 className="font-montserrat text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-300 mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" /> {item.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
        
        {/* Bottom Interactive Sample Submission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl bg-[#0A1930] text-white border border-white/15 p-8 md:p-10 shadow-2xl relative overflow-hidden group transform-gpu"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-[#0A1930] shadow-lg shrink-0 mt-1">
                <FlaskConical className="w-7 h-7 text-[#0A1930]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-montserrat text-2xl font-bold text-white">
                  Need a Specific Target Effect?
                </h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl font-sans">
                  Send us two fabric swatches (one untreated, one target finish) along with your reference chemical. Our R&D chemists will engineer the exact formula.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Button asChild size="lg" className="w-full md:w-auto bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/25 text-base px-8 py-6 rounded-2xl group">
                <Link href="/customization">
                  Submit Fabric Sample <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

      </Container>
    </SectionWrapper>
  )
}
