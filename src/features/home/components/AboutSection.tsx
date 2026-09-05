"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Factory, Calendar, Globe, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CounterAnimation } from "@/components/shared/animations/CounterAnimation"

export function AboutSection() {
  const stats = [
    {
      icon: Factory,
      value: "20,000+",
      unit: "MT / Year",
      label: "Annual Production Output"
    },
    {
      icon: Calendar,
      value: "2017",
      unit: "Founded",
      label: "Decade of Innovation"
    },
    {
      icon: Globe,
      value: "Dual-Hub",
      unit: "Global Sites",
      label: "Bangladesh & China"
    }
  ]

  const certificates = [
    {
      name: "ZDHC Level 3",
      src: "/images/certificates/zdhc.png",
    },
    {
      name: "Global Organic Textile Standard (GOTS)",
      src: "/images/certificates/got.png",
    },
    {
      name: "OEKO-TEX ECO PASSPORT",
      src: "/images/certificates/exo.png",
    },
    {
      name: "EIM Jeanologia",
      src: "/images/certificates/em.png",
    },
    {
      name: "Screen Chemistry",
      src: "/images/certificates/sc.png",
    },
  ]

  return (
    <SectionWrapper className="bg-background text-foreground py-20 md:py-28 overflow-hidden relative border-b border-border/40">
      {/* Background Subtle Gradient Glow with Continuous Breathing Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.65, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-secondary/5 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <Container className="relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            <Sparkles className="w-3.5 h-3.5" /> About Radiant Chemical Complex
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            A Catalyst for Change in the <span className="text-secondary">Global Textile</span> Industry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Developing eco-friendly, high-efficiency, and cost-effective chemical auxiliaries that empower modern textile production while safeguarding our planet.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Visual Showcase & Highlight Badges (Enters from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-6 transform-gpu"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group aspect-4/3">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=60&w=900"
                alt="Radiant Chemical Research & Development"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D18]/90 via-[#060D18]/30 to-transparent" />

              {/* Floating Live Highlight Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-background/90 backdrop-blur-md border border-border/80 shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-primary shadow-md shrink-0">
                      <ShieldCheck className="w-6 h-6 text-[#0A1930]" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-foreground text-sm sm:text-base">Eco-Certified Formulations</h4>
                      <p className="text-xs text-muted-foreground">ZDHC Level 3, OEKO-TEX, GOTS &amp; EIM Compliant Chemistry</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-xl border border-secondary/30 shrink-0">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-ping" />
                    Live Standard
                  </span>
                </div>
              </div>
            </div>

            {/* 2 Key Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground font-montserrat">Zero Hazardous Discharge</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Strict ZDHC MRSL conformance</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/70 shadow-xs">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground font-montserrat">Effluent Reduction</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Low BOD/COD environmental load</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Key Metrics (Enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-8 transform-gpu"
          >
            <div className="flex flex-col gap-4 font-sans">
              <h3 className="font-montserrat text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                Pioneering the Future of Textile Processing Since 2017
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                As a trusted leader in the textile auxiliary sector, Radiant Chemical Complex provides specialized chemical solutions spanning <strong>Pretreatment, Dyeing, Finishing, Denim Washing,</strong> and <strong>PSF Fiber Processing</strong>.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                With dual manufacturing facilities in Bangladesh and China, we maintain rigorous batch repeatability, fast technical support, and global compliance standards trusted by tier-1 mills worldwide.
              </p>
            </div>

            {/* Integrated Sleek Horizontal Stat Bar */}
            <div className="rounded-2xl bg-card/80 backdrop-blur-xs border border-border/80 p-4 sm:p-5 shadow-xs">
              <div className="grid grid-cols-3 divide-x divide-border/70 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="px-2 sm:px-4 flex flex-col items-center justify-center">
                    <CounterAnimation
                      value={stat.value}
                      className="font-montserrat text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground tracking-tight block"
                    />
                    <span className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-wider mt-0.5">
                      {stat.unit}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 hidden sm:block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button & Trust Note */}
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20 group">
                <Link href="/about">
                  Explore Company Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-secondary" /> Certified ISO 9001 & ZDHC Level 3
              </span>
            </div>
          </motion.div>

        </div>

        {/* Certificates & Global Accreditations - Modern Unified Banner Bar */}
        <div className="mt-20 pt-10 border-t border-border/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                Global Compliance
              </span>
              <h3 className="text-2xl font-bold font-montserrat text-foreground">
                Certificates &amp; Accreditations
              </h3>
            </div>
            <span className="text-xs text-muted-foreground">
              Certified across premier global textile &amp; chemical standards
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full bg-[#050C16] border border-white/10 hover:border-secondary/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group transition-all duration-500"
          >
            {/* Subtle Golden Ambient Glow on Hover */}
            <div className="absolute inset-0 bg-radial from-secondary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center gap-6 sm:gap-8 lg:gap-10">
              {certificates.map((cert, i) => (
                <div
                  key={cert.name}
                  title={cert.name}
                  className="relative flex items-center justify-center h-28 sm:h-36 md:h-40 lg:h-44 group/logo"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={cert.src}
                      alt={cert.name}
                      fill
                      className="object-contain scale-110 sm:scale-115 group-hover/logo:scale-125 transition-transform duration-300 drop-shadow-md"
                      unoptimized
                    />
                  </div>
                  {/* Animated Glowing Vertical Divider between logos on desktop */}
                  {i < certificates.length - 1 && (
                    <motion.div
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scaleY: [0.85, 1.1, 0.85],
                        filter: [
                          "drop-shadow(0 0 2px rgba(217, 155, 34, 0.2))",
                          "drop-shadow(0 0 14px rgba(217, 155, 34, 0.95))",
                          "drop-shadow(0 0 2px rgba(217, 155, 34, 0.2))",
                        ],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.35,
                      }}
                      className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-[3.5px] h-24 sm:h-28 rounded-full bg-gradient-to-b from-transparent via-secondary to-transparent pointer-events-none"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </Container>
    </SectionWrapper>
  )
}