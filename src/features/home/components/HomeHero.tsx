"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { useState, useEffect } from "react"
import { Award, Globe, Layers } from "lucide-react"
import { TiltCard } from "@/components/shared/animations/TiltCard"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"
import { FloatingElement } from "@/components/shared/animations/FloatingElement"

const catalogPages = [
  { src: "/catalog/page1.png", label: "Page 1", top: "5%", left: "10%", rotate: -12, width: 180, zIndex: 1 },
  { src: "/catalog/page2.png", label: "Page 2", top: "0%", left: "35%", rotate: 8, width: 170, zIndex: 3 },
  { src: "/catalog/page3.png", label: "Page 3", top: "15%", left: "60%", rotate: -5, width: 190, zIndex: 2 },
  { src: "/catalog/page4.png", label: "Page 4", top: "45%", left: "5%", rotate: 6, width: 175, zIndex: 4 },
  { src: "/catalog/page5.png", label: "Page 5", top: "50%", left: "32%", rotate: -8, width: 185, zIndex: 5 },
  { src: "/catalog/page6.png", label: "Page 6", top: "40%", left: "58%", rotate: 10, width: 195, zIndex: 2 },
]

export function HomeHero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 + i * 0.12, ease: "easeOut" },
    }),
  }

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-primary py-16 text-primary-foreground">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="49.8,7.5 62.3,14.8 62.3,29.2 49.8,36.4 37.3,29.2 37.3,14.8" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-4 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="flex flex-col items-start gap-5"
            variants={containerVariants}
            initial="hidden"
            animate={scrolled ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
              Global Textile Chemical Solutions
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-montserrat text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
              Solutions for a <span className="text-secondary">Sustainable</span> Future
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg sm:leading-7">
              We are a catalyst for change in the global textile industry, developing eco-friendly, high-efficiency, and cost-effective solutions that meet the demands of modern textile production.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
              <MagneticButton strength={0.2}>
                <Button size="lg" asChild className="shadow-[0_0_20px_rgba(217,155,34,0.4)] hover:shadow-[0_0_30px_rgba(217,155,34,0.6)]">
                  <Link href="/products">Explore Products</Link>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm text-primary-foreground border-white/20 hover:bg-white/10 hover:text-primary-foreground hover:border-white/30" asChild>
                  <Link href="/customization">Custom R&D Services</Link>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-montserrat text-2xl font-bold text-primary-foreground">20+</p>
                  <p className="text-xs text-primary-foreground/60">Countries Served</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15">
                  <Layers className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-montserrat text-2xl font-bold text-primary-foreground">100+</p>
                  <p className="text-xs text-primary-foreground/60">Product Variants</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-montserrat text-2xl font-bold text-primary-foreground">15+</p>
                  <p className="text-xs text-primary-foreground/60">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Catalog Mosaic */}
          <div className="hidden lg:flex items-center justify-center relative h-137.5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={scrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl"
            />

            <div className="relative w-full h-full perspective-1000">
              {catalogPages.map((page, i) => (
                <motion.div
                  key={page.src}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={scrolled ? "visible" : "hidden"}
                  style={{
                    position: "absolute",
                    top: page.top,
                    left: page.left,
                    width: page.width,
                    zIndex: page.zIndex,
                  }}
                  className="group cursor-pointer preserve-3d"
                >
                  <FloatingElement duration={5 + i} yOffset={10} delay={i * 0.2} className="w-full h-full">
                    <TiltCard tiltAmount={15} scaleAmount={1.1} className="w-full h-full">
                      <motion.div
                        animate={{ rotate: page.rotate }}
                        className="relative aspect-3/4 rounded-xl bg-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.25)] backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-300 group-hover:shadow-[0_25px_50px_rgba(217,155,34,0.25)] group-hover:border-secondary/50"
                      >
                        <Image
                          src={page.src}
                          alt={page.label}
                          fill
                          className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-secondary/40 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl mix-blend-overlay" />
                      </motion.div>
                    </TiltCard>
                  </FloatingElement>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
