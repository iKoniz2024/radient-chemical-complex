"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants, useScroll, useTransform } from "framer-motion"
import { useRef, useMemo, useState, useEffect } from "react"
import { Globe, Layers, Award, ChevronDown, Shield } from "lucide-react"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"
import { TextReveal, SplitText } from "@/components/shared/animations/TextReveal"
import { ScrambleText } from "@/components/shared/animations/ScrambleText"
import { CounterAnimation } from "@/components/shared/animations/CounterAnimation"

const heroImages = [
  { src: "/images/image1.jpeg", alt: "Chemical Production" },
  { src: "/images/image2.jpeg", alt: "Laboratory Research" },
  { src: "/images/image3.jpeg", alt: "Industrial Facility" },
  { src: "/images/image4.jpeg", alt: "Quality Testing" },
  { src: "/images/image5.jpeg", alt: "Textile Processing" },
]

const chemicalFormulas = [
  { text: "H₂O", scale: 0.8 },
  { text: "CH₄", scale: 1.0 },
  { text: "Na₂SO₄", scale: 1.2 },
  { text: "NaCl", scale: 0.9 },
  { text: "C₂H₅OH", scale: 1.1 },
  { text: "CO₂", scale: 0.8 },
  { text: "NH₃", scale: 0.7 },
  { text: "H₂SO₄", scale: 1.3 },
]

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function HomeHero() {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const particlePositions = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      x: seededRandom(i * 7 + 1) * 100,
      y: seededRandom(i * 13 + 3) * 100,
      duration: 8 + seededRandom(i * 11 + 5) * 12,
      delay: seededRandom(i * 17 + 7) * 5,
      size: 2 + seededRandom(i * 9 + 2) * 4,
      formulaIndex: i % chemicalFormulas.length,
      isFormula: seededRandom(i * 5 + 4) > 0.6,
    })),
    [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      } 
    },
  }

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ken Burns background slideshow - zoom in/out like video */}
      <motion.div className="hero-slideshow" style={{ opacity: videoOpacity }}>
        {heroImages.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="hero-slideshow-img"
          />
        ))}

        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 z-[10] bg-[#0A1930]/65" />
        <div className="absolute inset-0 z-[10] bg-gradient-to-t from-[#0A1930]/95 via-[#0A1930]/40 to-[#0A1930]/65" />

        {/* Interactive Floating Particles & Chemical Formulas */}
        <div className="absolute inset-0 z-[11] overflow-hidden pointer-events-none">
          {particlePositions.map((particle, i) => {
            const formula = chemicalFormulas[particle.formulaIndex]
            return (
              <motion.div
                key={i}
                className="absolute text-secondary/15 font-mono select-none"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  x: mousePos.x * (particle.size / 6),
                  y: mousePos.y * (particle.size / 6),
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              >
                {particle.isFormula ? (
                  <span style={{ fontSize: `${particle.size + 10}px` }}>{formula.text}</span>
                ) : (
                  <div
                    className="bg-secondary/40 rounded-full blur-[1px]"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <Container className="relative z-20 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            className="flex flex-col items-start gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: contentY }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse" />
              <ScrambleText delay={0.5} duration={1}>
                Global Textile Chemical Solutions
              </ScrambleText>
            </motion.div>

            <motion.div variants={itemVariants}>
              <TextReveal
                as="h1"
                className="font-montserrat text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl lg:text-6xl leading-tight"
                delay={0.3}
                speed="slow"
              >
                Solutions for a Sustainable Future
              </TextReveal>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SplitText
                tag="p"
                className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-7"
                delay={0.5}
              >
                We are a catalyst for change in the global textile industry, developing
                eco-friendly, high-efficiency, and cost-effective solutions that meet the
                demands of modern textile production.
              </SplitText>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
              <MagneticButton strength={0.2}>
                <Button size="lg" asChild className="shadow-[0_0_20px_rgba(217,155,34,0.4)] hover:shadow-[0_0_30px_rgba(217,155,34,0.6)] relative overflow-hidden group">
                  <Link href="/products">
                    <span className="relative z-10">Explore Products</span>
                    <motion.div
                      className="absolute inset-0 bg-secondary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-sm text-white border-white/20 hover:bg-white/10 hover:text-white hover:border-white/30"
                  asChild
                >
                  <Link href="/customization">Custom R&D Services</Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 mt-6 pt-6 border-t border-white/10 w-full"
            >
              {[
                { icon: Globe, value: "20+", label: "Countries Served" },
                { icon: Layers, value: "100+", label: "Product Variants" },
                { icon: Award, value: "15+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-secondary/15 backdrop-blur-sm shrink-0">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                  </div>
                  <div>
                    <CounterAnimation
                      value={stat.value}
                      className="font-montserrat text-xl sm:text-2xl font-bold text-white block"
                    />
                    <p className="text-xs sm:text-sm text-white/70 leading-tight">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive R&D Visualizer */}
          <motion.div
            className="hidden lg:flex relative items-center justify-center min-h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ y: contentY }}
          >
            {/* Glowing background blob */}
            <div className="absolute w-72 h-72 rounded-full bg-secondary/10 blur-[80px] animate-pulse pointer-events-none" />

            {/* Central chemistry orb */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer orbital ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-secondary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner orbital ring */}
              <motion.div
                className="absolute w-60 h-60 rounded-full border border-dashed border-white/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Core */}
              <motion.div
                className="absolute w-36 h-36 rounded-full bg-linear-to-br from-secondary/30 to-secondary/5 backdrop-blur-md border border-secondary/30 shadow-[0_0_40px_rgba(217,155,34,0.2)] flex flex-col items-center justify-center p-4 text-center z-10"
                whileHover={{ scale: 1.05, borderColor: "rgba(217,155,34,0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(217,155,34,0.3)]">
                  <Globe className="w-6 h-6 text-secondary animate-pulse" />
                </div>
                <span className="text-xs font-bold tracking-widest text-secondary uppercase">R&D CORE</span>
                <span className="text-xs text-white/70 mt-0.5">Radiant Lab</span>
              </motion.div>

              {/* Orbiting Card 1 - Top Left */}
              <motion.div
                className="absolute -top-0.5 -left-10 z-20"
                animate={{
                  y: [0, -12, 0],
                  x: [0, 6, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="p-4 rounded-2xl bg-primary/45 backdrop-blur-md border border-white/10 shadow-2xl max-w-[190px] group/item hover:border-secondary/50 hover:bg-primary/60 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all duration-300">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white font-montserrat">Eco-Friendly</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    Developing biodegradable, certified green chemicals for sustainable processing.
                  </p>
                </div>
              </motion.div>

              {/* Orbiting Card 2 - Top Right */}
              <motion.div
                className="absolute -top-0.5 -right-10 z-20"
                animate={{
                  y: [0, -12, 0],
                  x: [0, -6, 0]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.0
                }}
              >
                <div className="p-4 rounded-2xl bg-primary/45 backdrop-blur-md border border-white/10 shadow-2xl max-w-[190px] group/item hover:border-secondary/50 hover:bg-primary/60 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all duration-300">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white font-montserrat">Global Spec</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    Products meeting international standards (OEKO-TEX, GOTS, ZDHC).
                  </p>
                </div>
              </motion.div>

              {/* Orbiting Card 3 - Bottom Left */}
              <motion.div
                className="absolute -bottom-0.5 -left-10 z-20"
                animate={{
                  y: [0, 12, 0],
                  x: [0, 6, 0]
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="p-4 rounded-2xl bg-primary/45 backdrop-blur-md border border-white/10 shadow-2xl max-w-[190px] group/item hover:border-secondary/50 hover:bg-primary/60 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all duration-300">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white font-montserrat">Certified Quality</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    Strict compliance with ISO 9001 and international safety standards.
                  </p>
                </div>
              </motion.div>

              {/* Orbiting Card 4 - Bottom Right */}
              <motion.div
                className="absolute -bottom-0.5 -right-10 z-20"
                animate={{
                  y: [0, 12, 0],
                  x: [0, -6, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <div className="p-4 rounded-2xl bg-primary/45 backdrop-blur-md border border-white/10 shadow-2xl max-w-[190px] group/item hover:border-secondary/50 hover:bg-primary/60 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all duration-300">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white font-montserrat">Advanced R&D</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    Custom chemical recipes tailored exactly to your yarn or fabric quality spec.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/60" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  )
}