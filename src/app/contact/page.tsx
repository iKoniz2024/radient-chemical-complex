"use client"

import { Suspense } from "react"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { GoogleMap } from "@/components/shared/GoogleMap"
import { ContactForm } from "@/features/contact/components/ContactForm"
import { ContactInfo } from "@/features/contact/components/ContactInfo"
import { Sparkles, Clock, ShieldCheck, FlaskConical, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* 1. Hero Banner with Parallax Background */}
      <div 
        className="relative py-24 md:py-32 text-white bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden border-b border-white/10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D18]/95 via-[#060D18]/55 to-transparent pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-4 backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-secondary" /> Global Technical & Commercial Support
          </div>

          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Contact <span className="text-secondary">Radiant</span> Chemical
          </h1>

          <p className="text-base sm:text-lg text-white font-medium max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Have a technical inquiry, need a complimentary sample trial, or looking for custom auxiliary development? Our senior chemical engineers are ready to assist.
          </p>

          {/* 4 Quick Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-xs text-white font-semibold">
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-secondary" /> 2-Hour Response Time
            </span>
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-secondary" /> Free Sample Dispatch
            </span>
            <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" /> Direct Technical Hotline
            </span>
          </div>

        </Container>
      </div>

      {/* 2. Main Contact Grid */}
      <SectionWrapper className="bg-background py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            <div className="lg:col-span-7">
              <Suspense fallback={<div className="bg-card border border-border rounded-3xl p-8 shadow-sm">Loading inquiry portal...</div>}>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Google Map Location Hub */}
      <div className="w-full h-[450px] md:h-[500px] border-t border-border overflow-hidden">
        <GoogleMap
          lat={23.8691713}
          lng={90.3591579}
          title="Radiant Chemical Complex"
          className="w-full h-full"
        />
      </div>

    </div>
  )
}
