"use client"

import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Download, FlaskConical, CheckCircle2, Phone, Mail } from "lucide-react"

export function ContactCtaSection() {
  return (
    <SectionWrapper className="py-16 md:py-24 relative overflow-hidden bg-background">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] bg-[#0A1930] text-white border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden transform-gpu"
        >
<div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />
<div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col gap-6 text-left transform-gpu"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary w-fit shadow-xs">
                <Sparkles className="w-3.5 h-3.5" /> Start Your Collaboration
              </div>

              <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Ready to Upgrade Your <span className="text-secondary">Textile Production</span>?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-sans">
                Partner with <strong>Radiant Chemical Complex</strong> for sustainable, high-efficiency, and cost-effective auxiliary chemicals engineered specifically for your factory machinery.
              </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                {[
                  "Free Lab Sample Trials",
                  "ZDHC & GOTS Compliant",
                  "48-Hour Express Dispatch"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
<motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex flex-col gap-4 transform-gpu"
            >
              <div className="p-5 sm:p-7 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col gap-4 shadow-xl">
<Button asChild size="lg" className="w-full bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-xl shadow-secondary/25 text-sm sm:text-base h-auto py-3.5 sm:py-4 rounded-xl group leading-snug">
                  <Link href="/contact" className="flex items-center justify-center text-center">
                    <span>Contact Our Chemists</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button asChild variant="outline" size="sm" className="w-full bg-white/5 border-white/20 text-white hover:bg-white hover:text-[#0A1930] h-auto py-3.5 rounded-xl text-xs font-semibold">
                    <Link href="/products" className="truncate">
                      <FlaskConical className="w-3.5 h-3.5 mr-1.5 text-secondary inline shrink-0" />
                      Browse 80+ Products
                    </Link>
                  </Button>

                  <a 
                    href="https://drive.google.com/file/d/15_5J839RMjIzvYUyk-bA9LQD3b0iX7e_/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" className="w-full bg-white/5 border-white/20 text-white hover:bg-white hover:text-[#0A1930] h-auto py-3.5 rounded-xl text-xs font-semibold">
                      <Download className="w-3.5 h-3.5 mr-1.5 text-secondary inline shrink-0" />
                      Download Catalog
                    </Button>
                  </a>
                </div>
<div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
                  <a href="tel:+8801735221962" className="flex items-center gap-1.5 hover:text-secondary transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5 text-secondary shrink-0" /> +880 1735-221962
                  </a>
                  <a href="mailto:info@radiantgroup-bd.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors truncate max-w-full">
                    <Mail className="w-3.5 h-3.5 text-secondary shrink-0" /> <span className="truncate">info@radiantgroup-bd.com</span>
                  </a>
                </div>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
