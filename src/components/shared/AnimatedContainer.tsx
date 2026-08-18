"use client"

import { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

export interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  animation?: 
    | "fade-up" 
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade-in" 
    | "slide-left" 
    | "slide-right" 
    | "slide-up"
    | "slide-down"
    | "zoom-in"
    | "scale-up" 
    | "blur-in" 
    | "3d-tilt-up" 
    | "stagger-container" 
    | "stagger-item" 
    | "clip-in-top" 
    | "clip-in-bottom" 
    | "clip-in-left" 
    | "clip-in-right" 
    | "clip-in-center"
  delay?: number
  duration?: number
  staggerChildren?: number
  staggerDelay?: number
  viewportAmount?: number | "some" | "all"
}

const variants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-down": {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-left": {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 }
  },
  "fade-right": {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-left": {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-right": {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 }
  },
  "slide-down": {
    hidden: { opacity: 0, y: -28 },
    visible: { opacity: 1, y: 0 }
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  "blur-in": {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  },
  "3d-tilt-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  "clip-in-top": {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  "clip-in-bottom": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  "clip-in-left": {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  "clip-in-right": {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  "clip-in-center": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  "stagger-container": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  },
  "stagger-item": {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }
}

export function AnimatedContainer({ 
  children, 
  className, 
  animation = "fade-up", 
  delay = 0,
  duration = 0.85,
  staggerChildren = 0.12,
  staggerDelay = 0,
  viewportAmount = 0.15
}: AnimatedContainerProps) {
  const isStaggerContainer = animation === "stagger-container"
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: "-40px" }}
      variants={variants[animation]}
      transition={
        isStaggerContainer
          ? { delayChildren: staggerDelay, staggerChildren: staggerChildren }
          : { 
              duration, 
              ease: [0.22, 1, 0.36, 1], 
              delay 
            }
      }
      className={className ? `transform-gpu ${className}` : "transform-gpu"}
    >
      {children}
    </motion.div>
  )
}
