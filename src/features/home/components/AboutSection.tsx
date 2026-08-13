"use client"
import { Container } from "@/components/shared/Container"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { companyData } from "@/data/company"
import Image from "next/image"

export function AboutSection() {
  return (
    <SectionWrapper className="bg-primary text-primary-foreground overflow-hidden relative">
      {/* World Map Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/world-map.svg"
          alt="Global Network"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-primary/40 via-transparent to-primary/60" />
      </div>

      <Container className="relative z-10">
        {/* Title Section */}
        <div className="flex justify-end mb-8">
          <div className="bg-secondary/90 px-8 py-4 rounded-l-2xl">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
              {companyData.about.title}
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Stats */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              {companyData.about.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <span className="font-montserrat text-2xl md:text-3xl font-bold text-secondary block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Description */}
          <div className="flex flex-col gap-4">
            {companyData.about.description.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16 pt-8">
          <h3 className="font-montserrat text-xl md:text-2xl font-bold text-secondary mb-6">
            CERTIFICATIONS
          </h3>
          <div
            className="overflow-hidden py-4"
            style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
             <div className="w-full overflow-hidden">
              <div className="marquee flex items-center">
                {(() => {
                  const logos = [
                    "/images/catalog/logo1.png",
                    "/images/catalog/logo2.png",
                    "/images/catalog/logo3.png",
                    "/images/catalog/logo4.png",
                    "/images/catalog/logo5.jpg",
                    "/images/catalog/logo6.jpg",
                    "/images/catalog/logo7.png",
                    "/images/catalog/logo8.png",
                  ]
                  const loop = logos.concat(logos)
                  return loop.map((src, i) => (
                    <div key={`${i}-${src}`} className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-white rounded-md border border-border p-2 mx-3">
                      <Image src={src} alt={`Certificate ${i+1}`} width={72} height={72} className="object-contain" />
                    </div>
                  ))
                })()}
              </div>
            </div>

            <style jsx>{`
              .marquee{
                display:flex;
                gap:0.75rem;
                align-items:center;
                animation:marquee 18s linear infinite;
              }
              @keyframes marquee{
                0%{transform:translateX(0%)}
                100%{transform:translateX(-50%)}
              }
            `}</style>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}