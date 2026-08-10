"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  duration = 4,
  yOffset = 15,
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn("w-fit", className)}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  )
}
