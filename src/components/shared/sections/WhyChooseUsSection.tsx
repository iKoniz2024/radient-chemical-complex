"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, Factory, FlaskConical, Leaf, ShieldCheck, ArrowRight, Activity, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CounterAnimation } from "@/components/shared/animations/CounterAnimation"

export function WhyChooseUsSection() {
  const capabilities = [
    {
      num: "01",
      title: "Global Compliance Matrix",
      badge: "Level 3 Audited",
      desc: "Zero-discharge certified chemistry under ZDHC MRSL Level 3, OEKO-TEX Standard 100, GOTS & ISO 9001:2015.",
      icon: ShieldCheck,
      stat: "100% Audit Ready"
    },
    {
      num: "02",
      title: "Dual-Hub Synthesis Scale",
      badge: "Massive Volume",
      desc: "Over 20,000 MT annual production capacity across automated reactor facilities in Bangladesh & China.",
      icon: Factory,
      stat: "20,000+ MT / Year"
    },
    {
      num: "03",
      title: "Molecular R&D Labs",
      badge: "Rapid Engineering",
      desc: "Advanced spectrophotometer fabric matching to formulate custom recipes and reverse-engineer target finishes.",
      icon: FlaskConical,
      stat: "48h Sample Dispatch"
    },
    {
      num: "04",
      title: "Low BOD/COD Chemistry",
      badge: "Green Synthesis",
      desc: "Pioneering bio-based auxiliary agents that slash freshwater usage and reduce thermal energy in finishing ranges.",
      icon: Leaf,
      stat: "Up to 30% Less Load"
    }
  ]

  return (
    <SectionWrapper className="relative overflow-hidden bg-background py-20 md:py-28 border-b border-border/40">
<motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <Container className="relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
<motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-6 text-left transform-gpu"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5" /> Industry Edge &amp; Leadership
            </div>

            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Why Leading Mills Choose <span className="text-secondary">Radiant</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
              We bridge breakthrough molecular engineering with high-capacity reactor execution, empowering your dyehouse with unmatched batch repeatability and verified environmental safety.
            </p>
<div className="p-6 sm:p-7 rounded-3xl bg-card border border-border/80 shadow-xs flex flex-col gap-3.5 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Synthesis Metrics
                </span>
                <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30">
                  Active
                </span>
              </div>

              {[
                { title: "Batch Consistency Rate", value: "99.8%" },
                { title: "Complimentary Sample Dispatch", value: "48 Hours" },
                { title: "Effluent BOD/COD Reduction", value: "Up to 30%" },
              ].map((bench, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-border/50 last:border-0 text-sm">
                  <span className="text-foreground/90 font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> {bench.title}
                  </span>
                  <CounterAnimation value={bench.value} className="font-montserrat font-bold text-secondary" />
                </div>
              ))}
            </div>

            <div>
              <Button asChild size="lg" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20 group text-base px-8 py-6 rounded-2xl">
                <Link href="/contact">
                  Consult With Our Chemists <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative group overflow-hidden transform-gpu"
              >
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-secondary/15 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-[#0A1930] transition-all duration-300 shadow-xs shrink-0">
                      <cap.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="font-montserrat text-xl font-bold text-foreground group-hover:text-secondary transition-colors duration-300 mb-2">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold">
                  <CounterAnimation value={cap.stat} className="text-secondary font-bold" />
                  <span className="text-muted-foreground flex items-center gap-1 group-hover:text-secondary transition-colors">
                    Verified <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </Container>
    </SectionWrapper>
  )
}
