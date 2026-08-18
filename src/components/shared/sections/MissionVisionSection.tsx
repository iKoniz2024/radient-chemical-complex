"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import { Target, Compass, CheckCircle2, Sparkles } from "lucide-react"
import { motion, Variants } from "framer-motion"

export function MissionVisionSection() {
  const cards = [
    {
      type: "mission",
      badge: "Our Mission",
      title: companyData.mission.title,
      icon: Target,
      tagline: "Purpose-Driven Manufacturing",
      description: companyData.mission.description,
      points: [
        {
          title: "Cutting-Edge Chemical Synthesis",
          desc: "Driving industry standards through advanced research and molecular engineering."
        },
        {
          title: "Process & Efficiency Optimization",
          desc: "Fostering continuous improvements to lower water, energy, and cycle time."
        },
        {
          title: "Socially Responsible Formulations",
          desc: "Empowering mills with compliant, non-hazardous, and certified chemistry."
        },
        {
          title: "Global Sustainability Benchmarks",
          desc: "Contributing directly to worldwide zero-discharge and eco goals."
        }
      ]
    },
    {
      type: "vision",
      badge: "Our Vision",
      title: companyData.vision.title,
      icon: Compass,
      tagline: "Shaping the Global Horizon",
      description: companyData.vision.description,
      points: [
        {
          title: "Elevating Textile Processing",
          desc: "Unlocking unprecedented levels of yield, fabric hand-feel, and color brilliance."
        },
        {
          title: "Planetary Preservation",
          desc: "Minimizing ecological footprint with biodegradable, bio-based auxiliary agents."
        },
        {
          title: "Inclusive Community Growth",
          desc: "Creating thriving local and international ecosystems through skilled employment."
        },
        {
          title: "Ethical Leadership Standard",
          desc: "Setting the global benchmark for transparent, trustworthy chemical partnerships."
        }
      ]
    }
  ]

  const pointsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (customIdx: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: customIdx * 0.1 + 0.2
      }
    })
  }

  const pointItemVariants: Variants = {
    hidden: { opacity: 0, x: -12, y: 4 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <SectionWrapper className="bg-muted/30 border-y border-border/60 py-20 md:py-28 overflow-hidden relative">
      {/* Lightweight Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 transform-gpu"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Strategic Foundations
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Guided by Purpose, Driven by <span className="text-secondary">Innovation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our mission and vision define how we formulate sustainable solutions, partner with textile leaders, and shape the future of global chemistry.
          </p>
        </motion.div>

        {/* 2-Card Grid with Crisp Scale & Points Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -5 }}
              className="h-full flex flex-col justify-between bg-card border border-border/80 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden group transform-gpu"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors pointer-events-none" />

              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      animate={{ y: [-2.5, 2.5, -2.5] }}
                      transition={{ repeat: Infinity, duration: 4 + idx * 0.8, ease: "easeInOut" }}
                      className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shadow-sm shrink-0"
                    >
                      <card.icon className="w-7 h-7" />
                    </motion.div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary block">
                        {card.badge}
                      </span>
                      <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mt-0.5">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                    {card.tagline}
                  </span>
                </div>

                {/* Lead Description Box */}
                <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-muted/40 border border-border/50 border-l-4 border-l-secondary">
                  <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Strategic Pillars (Cascading Key Points) */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Strategic Commitments
                  </span>
                  <motion.div 
                    variants={pointsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    custom={idx}
                    className="grid grid-cols-1 gap-3.5"
                  >
                    {card.points.map((point, pIdx) => (
                      <motion.div 
                        key={pIdx}
                        variants={pointItemVariants}
                        className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-background/60 border border-border/40 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-200"
                      >
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground leading-snug">
                            {point.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {point.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-secondary" /> Radiant Chemical Complex
                </span>
                <span className="font-semibold text-secondary">Standard of Excellence</span>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </SectionWrapper>
  )
}