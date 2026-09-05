"use client"

import { ReactNode, useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export type DepthLevel = "background" | "middle" | "foreground" | "card" | "hero"

interface ScrollDepthLayerProps {
  children: ReactNode
  depth?: DepthLevel
  className?: string
}

export function ScrollDepthLayer({ children, depth = "middle", className }: ScrollDepthLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  

  const bgZ = useTransform(scrollYProgress, [0, 1], [-200, -400])
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 150])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4])
  

  const midZ = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, -50])
  

  const fgZ = useTransform(scrollYProgress, [0, 1], [50, 200])
  const fgY = useTransform(scrollYProgress, [0, 1], [100, -150])
  

  const cardZ = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, -100])
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const { scrollY } = useScroll()
  const heroZ = useTransform(scrollY, [0, 800], [0, -300])
  const heroY = useTransform(scrollY, [0, 800], [0, 200])
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0])

  const transforms = {
    background: { 
      z: isMobile ? 0 : bgZ, 
      y: isMobile ? 0 : bgY, 
      opacity: bgOpacity 
    },
    middle: { 
      z: isMobile ? 0 : midZ 
    },
    foreground: { 
      z: isMobile ? 0 : fgZ, 
      y: isMobile ? 0 : fgY 
    },
    card: { 
      z: isMobile ? 0 : cardZ, 
      scale: isMobile ? 1 : cardScale, 
      opacity: cardOpacity 
    },
    hero: { 
      z: isMobile ? 0 : heroZ, 
      y: isMobile ? 0 : heroY, 
      opacity: heroOpacity 
    }
  }

  const selectedTransforms = transforms[depth]

  return (
    <motion.div
      ref={ref}
      style={{
        ...selectedTransforms,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
