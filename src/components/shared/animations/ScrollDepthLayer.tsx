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
  
  // Track this specific element's scroll progress through the viewport
  // "start end" means start animating when the top of the element hits the bottom of the viewport
  // "end start" means stop animating when the bottom of the element hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Disable intense 3D on mobile for performance and usability
  const [isMobile, setIsMobile] = useState(true) // Default true for SSR safety
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile() // Run once on mount
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // --- Depth Transforms ---
  // Note: translateZ acts inversely to depth. Negative Z goes into the screen.
  
  // Background: Pushed far back, moves slower than scroll (parallax)
  const bgZ = useTransform(scrollYProgress, [0, 1], [-200, -400])
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 150])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4])
  
  // Middle: Natural scroll but with a subtle Z-shift as it crosses the viewport
  const midZ = useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, -50])
  
  // Foreground: Pulled forward, moves faster than scroll
  const fgZ = useTransform(scrollYProgress, [0, 1], [50, 200])
  const fgY = useTransform(scrollYProgress, [0, 1], [100, -150])
  
  // Card: Starts deep, pops to foreground in center, goes deep again
  const cardZ = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, -100])
  const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Hero: Special case for top section, just fades out and pushes back on scroll down
  const { scrollY } = useScroll()
  const heroZ = useTransform(scrollY, [0, 800], [0, -300])
  const heroY = useTransform(scrollY, [0, 800], [0, 200])
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0])

  // Select transforms based on depth prop
  // Fallback to simple transforms on mobile to ensure smoothness
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
