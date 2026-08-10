"use client"

import { ReactNode } from "react"
import { motion, Variants } from "framer-motion"

export interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-right" | "scale-up" | "blur-in" | "3d-tilt-up" | "stagger-container" | "stagger-item" | "clip-in-top" | "clip-in-bottom" | "clip-in-left" | "clip-in-right" | "clip-in-center"
  delay?: number
  duration?: number
  staggerChildren?: number
  staggerDelay?: number
  viewportAmount?: number | "some" | "all"
}

const variants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 }
  },
  "3d-tilt-up": {
    hidden: { opacity: 0, y: 50, rotateX: -20, perspective: 1000 },
    visible: { opacity: 1, y: 0, rotateX: 0, perspective: 1000 }
  },
  "stagger-container": {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  },
  "stagger-item": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  "clip-in-top": {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)" }
  },
  "clip-in-bottom": {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    visible: { clipPath: "inset(0% 0 0 0)" }
  },
  "clip-in-left": {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0% 0 0)" }
  },
  "clip-in-right": {
    hidden: { clipPath: "inset(0 0 0 100%)" },
    visible: { clipPath: "inset(0 0 0 0%)" }
  },
  "clip-in-center": {
    hidden: { clipPath: "inset(50% 50% 50% 50%)" },
    visible: { clipPath: "inset(0% 0% 0% 0%)" }
  }
}

export function AnimatedContainer({ 
  children, 
  className, 
  animation = "fade-up", 
  delay = 0,
  duration = 0.6,
  staggerChildren = 0.1,
  staggerDelay = 0,
  viewportAmount = 0.1
}: AnimatedContainerProps) {
  const isStaggerContainer = animation === "stagger-container"
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: "-50px" }}
      variants={variants[animation]}
      transition={
        isStaggerContainer
          ? { delayChildren: staggerDelay, staggerChildren: staggerChildren }
          : { duration, ease: "easeOut", delay }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
