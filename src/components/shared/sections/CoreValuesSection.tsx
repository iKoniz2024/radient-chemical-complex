"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { motion } from "framer-motion"
import { Sparkles, ArrowUpRight, Leaf, ShieldCheck, Lightbulb, Handshake, TrendingUp, Users, CheckCircle2 } from "lucide-react"

export function CoreValuesSection() {
  const values = companyData.coreValues

  return (
    <SectionWrapper className="relative overflow-hidden bg-background py-20 md:py-28 border-b border-border/40">
      {/* Ambient Subtle Background Glow with Continuous Breathing Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <Container className="relative z-10">
        
        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-ping" />
            <Sparkles className="w-3.5 h-3.5" /> Culture &amp; Principles
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Our <span className="text-secondary">Core Values</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            The foundation guiding our molecular research, sustainable operations, and trusted partnerships across the global textile chemical ecosystem.
          </p>
        </motion.div>
        
        {/* Modern Unified Bento Grid with Slow Graceful Cascade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Tile 1: Hero Featured Tile (2 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/10 border border-secondary/30 p-8 sm:p-10 shadow-md relative overflow-hidden group transform-gpu flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors pointer-events-none" />
            
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-[#0A1930] shadow-md">
                  <Leaf className="w-7 h-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-xs font-bold text-secondary uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-secondary" /> Sustainable Zero Discharge Benchmark
                </span>
              </div>

              <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-3 group-hover:text-secondary transition-colors">
                {values[1].title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-sans">
                {values[1].description} We formulate low-BOD/COD auxiliaries ensuring complete zero-discharge compliance with ZDHC Level 3, OEKO-TEX, and bluesign® protocols.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center gap-5 text-xs font-semibold text-foreground/90">
              <span className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-secondary" /> Biodegradable Raw Materials
              </span>
              <span className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-secondary" /> Lower Water &amp; Energy Consumption
              </span>
            </div>
          </motion.div>

          {/* Bento Tile 2: Integrity & Transparency */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-card border border-border/80 p-8 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group transform-gpu flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-[#0A1930] transition-all duration-300 shadow-xs shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {values[3].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {values[3].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-secondary font-semibold uppercase tracking-wider">
              <span>Full Audit Trail</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Bento Tile 3: Collaborative Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-card border border-border/80 p-8 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group transform-gpu flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-[#0A1930] transition-all duration-300 shadow-xs shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {values[4].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {values[4].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-secondary font-semibold uppercase tracking-wider">
              <span>Proprietary Synthesis</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Bento Tile 4: Customer Centricity */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-card border border-border/80 p-8 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group transform-gpu flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-[#0A1930] transition-all duration-300 shadow-xs shrink-0">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {values[5].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {values[5].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-secondary font-semibold uppercase tracking-wider">
              <span>Tailored Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Bento Tile 5: Economic Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-card border border-border/80 p-8 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group transform-gpu flex flex-col justify-between"
          >
            <div>
              <div className="w-13 h-13 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-[#0A1930] transition-all duration-300 shadow-xs shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {values[2].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {values[2].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-secondary font-semibold uppercase tracking-wider">
              <span>Cost &amp; Yield Efficiency</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Bento Tile 6: Full Width Bottom Tile (Community Empowerment) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="md:col-span-2 lg:col-span-3 rounded-3xl bg-muted/40 border border-border/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden group transform-gpu"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-[#0A1930] transition-all duration-300">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-montserrat text-lg sm:text-xl font-bold text-foreground">
                  {values[0].title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 max-w-2xl leading-relaxed">
                  {values[0].description}
                </p>
              </div>
            </div>

            <span className="shrink-0 text-xs font-bold text-secondary bg-secondary/10 px-4 py-2 rounded-xl border border-secondary/20 uppercase tracking-widest">
              Ethical Social Impact
            </span>
          </motion.div>

        </div>

      </Container>
    </SectionWrapper>
  )
}
