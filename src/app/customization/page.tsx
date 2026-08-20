"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FlaskConical, 
  Send, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Droplet, 
  Flame, 
  Microscope,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  FileSpreadsheet,
  Check,
  Layers,
  Sparkle
} from "lucide-react"

export default function CustomizationPage() {
  const [activeTab, setActiveTab] = useState(0)

  const processSteps = [
    {
      step: "01",
      title: "Substrate & Target Analysis",
      subtitle: "Spectral Evaluation",
      desc: "We analyze untreated and target swatches under spectrophotometers to quantify shade depth, hand-feel shear stiffness, and fiber blend ratios.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
      specs: ["Spectrophotometer Color Delta E", "Weave Tension & GSM Check", "Fiber Blend (Cotton/Poly/Spandex)"]
    },
    {
      step: "02",
      title: "Molecular Recipe Synthesis",
      subtitle: "Custom Formulation",
      desc: "Our R&D synthesis chemists modify active solid percentages, ionic charge balance, and emulsifier matrices to engineer the exact chemical recipe.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
      specs: ["Bespoke Active Solids %", "Zero Harmful VOCs / Formaldehyde", "ZDHC MRSL Level 3 Qualified"]
    },
    {
      step: "03",
      title: "Fast Sample Dispatch",
      subtitle: "48-72h Turnaround",
      desc: "We package complimentary laboratory trial samples accompanied by a comprehensive Technical Data Sheet (TDS) and application recipe.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      specs: ["48-72h Express Courier Dispatch", "Complete TDS & Recipe Guide", "500ml / 1kg Trial Batches"]
    },
    {
      step: "04",
      title: "Bulk Reactor Scale-Up",
      subtitle: "Industrial Replication",
      desc: "Once validated on your factory padding or exhaust machines, we execute bulk synthesis with strict lot-to-lot consistency guarantees.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      specs: ["Automated Reactor Monitoring", "Certificate of Analysis (COA)", "100% Batch-to-Batch Repeatability"]
    }
  ]

  const capabilityTabs = [
    {
      id: "softeners",
      name: "Silicone & Organic Softeners",
      tag: "Hand-Feel & Drape",
      icon: Droplet,
      image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=1000",
      summary: "Custom hydrophilic, elastomeric micro-emulsions and cationic flake concentrates engineered for supreme inner softness, surface slip, and non-yellowing whites.",
      specTable: [
        { parameter: "Ionic Character", value: "Non-Ionic / Weak Cationic / Micro-Emulsion" },
        { parameter: "Active Solid Range", value: "20% - 80% (Customizable to target dosage)" },
        { parameter: "Application Method", value: "Padding Mangle / Exhaust Jet / Garment Wash" },
        { parameter: "Fabric Compatibility", value: "Cotton, CVC, Viscose, Modal, Polyester" },
        { parameter: "Ecological Benchmark", value: "ZDHC Level 3, OEKO-TEX Standard 100" }
      ]
    },
    {
      id: "enzymes",
      name: "Bio-Polishing & Washing Enzymes",
      tag: "Sustainable Surface Action",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
      summary: "High-concentration neutral and acid cellulases designed for ultra-clean pilling removal, denim abrasive contrast, and energy-saving low-temp bio-washing.",
      specTable: [
        { parameter: "Enzyme Activity Profile", value: "Neutral Cellulase / High-Activity Acid Powder" },
        { parameter: "Operating Temperature", value: "40°C - 55°C (Thermal energy reduction)" },
        { parameter: "Optimal pH Window", value: "pH 5.0 - 7.5 (Broad buffering stability)" },
        { parameter: "Target Effects", value: "Anti-Pilling Grade 4-5, Clean Surface, Soft Handle" },
        { parameter: "Environmental Benefit", value: "Up to 30% Lower Freshwater Consumption" }
      ]
    },
    {
      id: "fastness",
      name: "Dyeing Fastness Improvers",
      tag: "Color Fixation Chemistry",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=1000",
      summary: "Formaldehyde-free polycationic fixing agents and leveling auxiliaries that maximize rub-fastness, washing fastness, and perspiration resistance.",
      specTable: [
        { parameter: "Chemical Nature", value: "Formaldehyde-Free Polycationic Aqueous Solution" },
        { parameter: "Washing Fastness Rating", value: "ISO 105-C06: Improved by 1.0 to 1.5 Grades" },
        { parameter: "Rubbing Fastness Gain", value: "Dry 4.5 / Wet 3.5 - 4.0 on Deep Reactive Shades" },
        { parameter: "Shade Influence", value: "Zero Shade Change, Non-Affecting Tone Variance" },
        { parameter: "Compliance", value: "GOTS 6.0, ZDHC Level 3, Bluesign Approved" }
      ]
    },
    {
      id: "functional",
      name: "Functional Textile Finishes",
      tag: "High-Performance Surface",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000",
      summary: "Next-generation fluorine-free water repellents (PFC-Free DWR), moisture-wicking agents, and anti-static finishes for outerwear and activewear.",
      specTable: [
        { parameter: "Finish Types", value: "PFC-Free Repellent / Wicking / Anti-Static" },
        { parameter: "Durability Standard", value: "80+ Spray Rating after 20 Wash Cycles" },
        { parameter: "Touch & Breathability", value: "Zero Impact on Breathability & Hand-Feel" },
        { parameter: "Target Substrates", value: "Nylon, Polyester, Cotton Canvas, Softshell" },
        { parameter: "Safety Matrix", value: "Fluorine-Free, Heavy Metal Free, REACH" }
      ]
    }
  ]

  const sampleGuidelines = [
    {
      num: "01",
      title: "Untreated & Target Swatches",
      desc: "Provide two fabric cuts (approx. 10x10 cm): one untreated swatch from your current batch, and one reference sample showing your target effect or hand-feel."
    },
    {
      num: "02",
      title: "Current Reference Chemical (Optional)",
      desc: "If you are looking to replace an existing expensive imported chemical with a cost-effective local alternative, include a 100ml / 50g reference sample."
    },
    {
      num: "03",
      title: "Factory Processing Parameters",
      desc: "Specify your machinery type (Padding / Exhaust / Jet), liquor ratio, curing temperature, and target production volume for optimal formulation."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* 1. Hero Banner with Parallax Background & Slow Graceful Motion Reveals */}
      <div 
        className="relative py-24 md:py-32 text-white bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden border-b border-white/10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D18]/95 via-[#060D18]/55 to-transparent pointer-events-none" />

        {/* Ambient Subtle Pulsing Light in Hero */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none -z-0"
        />

        <Container className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4 backdrop-blur-md shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" /> Bespoke Chemical Formulation &amp; Matching
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
          >
            Custom <span className="text-secondary">R&amp;D &amp; Fabric</span> Matching
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            Send us your fabric substrate and desired finish. Our senior application chemists will formulate, synthesize, and validate bespoke auxiliary recipes with guaranteed batch repeatability.
          </motion.p>

          {/* 4 Live Capability Metric Badges with Slow Cascading Reveal */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-xs text-white font-semibold">
            {[
              { icon: FlaskConical, text: "48h Sample Synthesis" },
              { icon: CheckCircle2, text: "99.8% Effect Match" },
              { icon: ShieldCheck, text: "ZDHC MRSL Level 3" },
              { icon: Rocket, text: "Zero Machine Downtime" }
            ].map((badge, bIdx) => (
              <motion.span
                key={bIdx}
                initial={{ opacity: 0, scale: 0.85, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.45 + bIdx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, borderColor: "rgba(217,155,34,0.6)" }}
                className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5 cursor-default transition-colors"
              >
                <badge.icon className="w-3.5 h-3.5 text-secondary" /> {badge.text}
              </motion.span>
            ))}
          </div>

        </Container>
      </div>

      {/* 2. Editorial Photo-Driven 4-Step Process Showcase with Dark/Light Support */}
      <section className="py-20 md:py-28 bg-background border-b border-border/60 relative overflow-hidden">
        <Container className="relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 transform-gpu"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4 shadow-xs">
              <Microscope className="w-3.5 h-3.5" /> Structured Qualification Protocol
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              How We Engineer Your <span className="text-secondary">Custom Auxiliary</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
              From microscopic fiber analysis to multi-ton reactor production, our editorial protocol ensures absolute batch precision.
            </p>
          </motion.div>

          {/* 4 Editorial Visual Step Cards with Semantic Theme Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.95, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between bg-card rounded-3xl border border-border/80 shadow-xs hover:shadow-xl hover:border-secondary/50 transition-all duration-300 overflow-hidden group transform-gpu"
              >
                <div>
                  {/* Photo Header with Integrated Step Badge */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20 shadow-xs">
                      STEP {step.step}
                    </span>

                    <span className="absolute bottom-3 left-4 text-xs font-semibold text-secondary uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Step Narrative Body */}
                  <div className="p-6">
                    <h3 className="font-montserrat text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-300 mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans mb-5">
                      {step.desc}
                    </p>

                    {/* Step Specs List */}
                    <div className="space-y-2 pt-4 border-t border-border/60">
                      {step.specs.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                          <div className="w-4 h-4 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </Container>
      </section>

      {/* 3. Interactive Technical Specification Deck & TDS Matrix */}
      <section className="py-20 md:py-28 bg-card/40 border-b border-border/60 relative overflow-hidden">
        <Container className="relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 transform-gpu"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4 shadow-xs">
              <FileSpreadsheet className="w-3.5 h-3.5" /> Technical Data Sheet (TDS) Deck
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Formulation <span className="text-secondary">Capabilities &amp; Specs</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
              Select a chemistry family below to inspect synthesis profiles, fabric substrate compatibility, and testing benchmarks.
            </p>
          </motion.div>

          {/* Interactive Category Selector Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
            {capabilityTabs.map((tab, idx) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#0A1930] dark:bg-secondary text-white dark:text-[#0A1930] shadow-lg shadow-black/15 dark:shadow-secondary/20"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-border/70"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === idx ? "text-secondary dark:text-[#0A1930]" : "text-muted-foreground"}`} />
                {tab.name}
              </motion.button>
            ))}
          </div>

          {/* Active Category Technical Inspection Sheet Card with Smooth Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -20 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-border rounded-3xl p-8 sm:p-10 lg:p-12 shadow-md max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Left Column: Visual Card + Category Overview (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-border shadow-md group">
                    <Image
                      src={capabilityTabs[activeTab].image}
                      alt={capabilityTabs[activeTab].name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-secondary text-[#0A1930] text-xs font-bold uppercase tracking-wider shadow-xs">
                      {capabilityTabs[activeTab].tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-montserrat text-2xl font-bold text-foreground mb-2">
                      {capabilityTabs[activeTab].name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {capabilityTabs[activeTab].summary}
                    </p>
                  </div>
                </div>

                {/* Right Column: Structured Specification Sheet Table (7 cols) */}
                <div className="lg:col-span-7 bg-background/80 dark:bg-background/40 backdrop-blur-md rounded-2xl border border-border/80 p-4 sm:p-6 sm:p-7 shadow-xs overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5 font-mono shrink-0">
                      <FileSpreadsheet className="w-4 h-4" /> Lab Specification Sheet
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800 flex items-center gap-1 shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Standard Qualified
                    </span>
                  </div>

                  <div className="divide-y divide-border/50">
                    {capabilityTabs[activeTab].specTable.map((spec, sIdx) => (
                      <motion.div 
                        key={sIdx} 
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: sIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs sm:text-sm"
                      >
                        <span className="font-semibold text-muted-foreground sm:w-1/3">
                          {spec.parameter}
                        </span>
                        <span className="font-medium text-foreground sm:w-2/3 sm:text-right font-mono text-xs sm:text-sm">
                          {spec.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-muted-foreground">Need specific custom modification?</span>
                    <Button asChild size="sm" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-sm rounded-xl group shrink-0">
                      <Link href="/contact?type=customization">
                        Request Formulation <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </Container>
      </section>

      {/* 4. Editorial Sample Submission Guide & Lab Dispatch Console with Dark/Light Adaptation */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Sample Swatch Preparation Guide (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col gap-6 text-left transform-gpu"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary w-fit shadow-xs">
                <Send className="w-3.5 h-3.5" /> Sample Swatch Submission Guide
              </div>

              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                How to Dispatch Your <span className="text-secondary">Fabric Swatches</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
                To enable precise spectral and tactile recipe reproduction, our laboratory requires the following items along with your trial request:
              </p>

              {/* 3 Step Instruction Cards with Semantic Theme */}
              <div className="space-y-4 mt-2">
                {sampleGuidelines.map((guide, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-3xl bg-card border border-border/80 shadow-xs hover:shadow-md hover:border-secondary/50 transition-all duration-300 flex items-start gap-5 group"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-secondary/15 dark:bg-secondary/20 text-secondary flex items-center justify-center font-mono font-bold text-sm shrink-0 mt-0.5 shadow-xs group-hover:bg-secondary group-hover:text-[#0A1930] transition-colors duration-300">
                      {guide.num}
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-foreground text-base mb-1 group-hover:text-secondary transition-colors">
                        {guide.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                        {guide.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Executive Lab Hub Console (5 cols) in Brand Navy with Smooth Reveal */}
            <motion.div 
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 transform-gpu"
            >
              <div className="rounded-3xl bg-[#0A1930] dark:bg-card text-white dark:text-foreground border border-white/15 dark:border-secondary/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col gap-6 group">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-60 h-60 bg-secondary/20 rounded-full blur-3xl pointer-events-none" 
                />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-13 h-13 rounded-2xl bg-secondary flex items-center justify-center text-[#0A1930] font-bold shadow-md shrink-0">
                    <FlaskConical className="w-7 h-7 text-[#0A1930]" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl text-white dark:text-foreground">
                      R&amp;D Lab Dispatch Hub
                    </h3>
                    <p className="text-xs text-secondary font-semibold uppercase tracking-wider font-mono">
                      Priority Sample Intake
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 dark:text-muted-foreground leading-relaxed font-sans relative z-10">
                  Have your fabric swatches ready? Contact our chief textile chemist to generate an official laboratory tracking reference number and book express courier collection.
                </p>

                <div className="space-y-3.5 pt-3 border-t border-white/10 dark:border-border/60 text-xs text-slate-300 dark:text-muted-foreground relative z-10">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary shrink-0" />
                    <span>Direct Laboratory Hotline: <strong className="text-white dark:text-foreground font-mono">+880 1735-221962</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary shrink-0" />
                    <span>Technical Support: <strong className="text-white dark:text-foreground">info@radiantgroup-bd.com</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Laboratory Address: House 35, Road 09, Sector 16, Uttara, Dhaka-1230</span>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-xl shadow-secondary/25 text-xs sm:text-sm md:text-base h-auto py-3.5 sm:py-4 px-4 rounded-2xl group mt-2 relative z-10 leading-snug">
                  <Link href="/contact?type=customization" className="flex items-center justify-center text-center">
                    <span>Submit Fabric Sample Request</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

    </div>
  )
}
