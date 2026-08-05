"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

export interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-right" | "scale-up"
  delay?: number
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }
}

export function AnimatedContainer({ 
  children, 
  className, 
  animation = "fade-up", 
  delay = 0 
}: AnimatedContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[animation]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
