"use client"

import React from "react"
import { motion } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
        mass: 0.7,
      }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  )
}
