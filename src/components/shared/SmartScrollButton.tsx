"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, ArrowDown } from "lucide-react"

const SCROLL_THRESHOLD = 80

export function SmartScrollButton() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isProgrammaticScroll = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (!isProgrammaticScroll.current) {
        setIsVisible(scrollY > SCROLL_THRESHOLD)
      }

      const isAtBottom = scrollY + windowHeight >= documentHeight - 100

      if (isAtBottom) {
        setScrollDirection("up")
      } else {
        setScrollDirection("down")
      }

      setIsScrolling(true)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1500)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

  const scrollToTarget = useCallback(() => {
    const windowHeight = window.innerHeight
    const scrollY = window.scrollY

    isProgrammaticScroll.current = true

    if (scrollDirection === "down") {
      const sections = document.querySelectorAll("section, [data-section]")
      let nextSection = null

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top > 100) {
          nextSection = section
          break
        }
      }

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      } else {
        window.scrollTo({ top: scrollY + windowHeight * 0.8, behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 1000)
  }, [scrollDirection])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="smart-scroll-button"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed right-4 bottom-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:right-6 z-50"
        >
          <motion.button
            onClick={scrollToTarget}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: isScrolling ? 0.6 : 1 }}
            transition={{ duration: 0.2 }}
            aria-label={scrollDirection === "down" ? "Scroll down" : "Scroll to top"}
            className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer
              bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              hover:bg-white/20 hover:border-secondary/50 hover:shadow-[0_8px_40px_rgba(217,155,34,0.3)]
              focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-transparent
              transition-all duration-300"
            style={{
              perspective: "1000px",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/10 to-transparent opacity-50" />
            <div className="absolute inset-px rounded-full bg-linear-to-br from-primary/80 to-primary/95" />
            <div className="absolute inset-0 rounded-full bg-linear-to-t from-transparent via-white/5 to-white/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={scrollDirection}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative z-10"
              >
                {scrollDirection === "down" ? (
                  <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-secondary drop-shadow-[0_0_8px_rgba(217,155,34,0.5)]" />
                ) : (
                  <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-secondary drop-shadow-[0_0_8px_rgba(217,155,34,0.5)]" />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 rounded-full border border-white/10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
