"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrambleTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  chars?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

export function ScrambleText({
  children,
  className,
  delay = 0,
  duration = 1.5,
  once = true,
  chars = defaultChars,
  as: Tag = "span",
}: ScrambleTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "0px" })
  const [displayText, setDisplayText] = useState(children)

  useEffect(() => {
    if (!isInView) return

    let timeout: NodeJS.Timeout
    let iteration = 0
    const targetText = children

    const scramble = () => {
      setDisplayText(
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index]
            }
            if (char === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iteration < targetText.length) {
        iteration += 1 / 3
        timeout = setTimeout(scramble, duration * 30)
      }
    }

    timeout = setTimeout(scramble, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, children, chars, delay, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Tag className={cn("font-mono", className)}>
        {displayText}
      </Tag>
    </motion.div>
  )
}

interface TypewriterProps {
  children: string
  className?: string
  delay?: number
  speed?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function Typewriter({
  children,
  className,
  delay = 0,
  speed = 50,
  once = true,
  as: Tag = "span",
}: TypewriterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "0px" })
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!isInView) return

    let timeout: NodeJS.Timeout
    let charIndex = 0

    const type = () => {
      if (charIndex < children.length) {
        setDisplayText(children.slice(0, charIndex + 1))
        charIndex++
        timeout = setTimeout(type, speed)
      } else {
        setTimeout(() => setShowCursor(false), 1000)
      }
    }

    timeout = setTimeout(type, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, children, delay, speed])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Tag className={cn(className)}>
        {displayText}
        {showCursor && (
          <span className="animate-pulse ml-0.5 text-secondary">|</span>
        )}
      </Tag>
    </motion.div>
  )
}