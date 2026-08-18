"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-secondary origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
      <motion.div
        className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-1 h-2 bg-secondary rounded-full"
          animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  )
}