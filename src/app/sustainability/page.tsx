import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, Droplets, Zap, ShieldCheck, Award, Recycle, CheckCircle2, ArrowRight, Factory } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sustainability & Green auxiliary Chemistry | Radiant Chemical Complex",
  description: "Explore our eco-friendly chemical auxiliary formulations, ZDHC Level 3 compliance, and zero-discharge environmental commitments.",
}

export default function SustainabilityPage() {
  const metrics = [
    { value: "100%", label: "ZDHC Level 3 Conformity", sub: "Gateway Verified" },
    { value: "45%", label: "Water Consumption Cut", sub: "Low-Temp Scouring" },
    { value: "0%", label: "Hazardous Chemical Discharge", sub: "REACH Compliant" },
    { value: "ISO 14001", label: "Environmental Standard", sub: "Audited Facility" },
  ]

  const commitments = [
    {
      icon: Droplets,
      title: "Water Conservation & Rapid Washing",
      desc: "Our bio-enzyme desizing and low-foaming leveling agents reduce washing cycle bath changes by up to 35%, conserving millions of liters of industrial water annually."
    },
    {
      icon: Zap,
      title: "Low-Temperature Processing",
      desc: "Formulated for energy-efficient scouring and bleaching at reduced thermal thresholds, lowering steam consumption and greenhouse gas emissions across textile dyeing lines."
    },
    {
      icon: ShieldCheck,
      title: "ZDHC Level 3 & OEKO-TEX Standard 100",
      desc: "100% of our textile auxiliary chemical formulations comply strictly with international Restricted Substances Lists (MRSL/RSL) to guarantee zero toxic residues."
    },
    {
      icon: Recycle,
      title: "Effluent Load Reduction (COD/BOD)",
      desc: "High-biodegradability wetting and sequestering agents significantly lower chemical oxygen demand (COD) in wastewater treatment plants (ETP)."
    },
    {
      icon: Factory,
      title: "Green Facility Operations",
      desc: "Our automated chemical synthesis reactors utilize closed-loop heat recovery systems and solar-supplemented energy to minimize industrial carbon footprint."
    },
    {
      icon: Award,
      title: "Global Eco Certification Support",
      desc: "We provide comprehensive chemical compliance documentation, TDS, and test certificates to help textile exporters meet EU & US brand compliance audits."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CinematicSection depth={1.5}>
        <PageHero
          badge="Green Auxiliary Chemistry"
          title="Sustainability & Eco Innovation"
          description="Pioneering eco-certified textile auxiliary formulations, ZDHC Level 3 compliance, and zero-discharge environmental responsibility."
          backgroundImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=60&w=1280"
        />
      </CinematicSection>

      {/* Sustainability Metrics Banner */}
      <section className="-mt-12 relative z-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-2xl backdrop-blur-md">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-3 sm:p-4 border-r last:border-r-0 border-border/60">
                <span className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-1">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-foreground line-clamp-1">{m.label}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{m.sub}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Commitments Grid */}
      <CinematicSection depth={1}>
        <SectionWrapper>
          <Container>
            <SectionTitle
              title="Our Environmental Commitments"
              subtitle="How our chemical technology protects ecosystems while elevating textile fabric performance"
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {commitments.map((c, idx) => {
                const Icon = c.icon
                return (
                  <article
                    key={idx}
                    className="p-8 rounded-3xl bg-card border border-border shadow-xs hover:shadow-2xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-montserrat text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-secondary transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-bold text-secondary">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified Green Protocol</span>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Bottom Sustainability Callout Card */}
            <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-linear-to-br from-[#0A1930] to-[#060D18] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-xs font-bold text-secondary uppercase tracking-widest mb-4">
                  <Leaf className="w-3.5 h-3.5" /> Eco Consultation
                </span>
                <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold mb-3">
                  Transition Your Dyeing Mill to ZDHC Level 3 Standards
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Request custom recipe trials or download our ZDHC Gateway compliance certificates for our full line of dyeing, pretreatment, and finishing auxiliaries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                <Button size="lg" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-xl rounded-2xl py-6 text-base" asChild>
                  <Link href="/contact">
                    Request Eco Audit Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

          </Container>
        </SectionWrapper>
      </CinematicSection>
    </div>
  )
}
