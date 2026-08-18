"use client"

import { useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  speed?: "slow" | "normal" | "fast"
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  once?: boolean
}

const speedMap = {
  slow: 0.05,
  normal: 0.03,
  fast: 0.02,
}

const charVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
  },
}

export function TextReveal({
  children,
  className,
  delay = 0,
  speed = "normal",
  as: Tag = "h2",
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "0px" })
  const words = children.split(" ")

  return (
    <Tag className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: speedMap[speed],
              delayChildren: delay,
            },
          },
        }}
        className="flex flex-wrap"
        style={{ perspective: 600 }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.25em]">
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                className="inline-block origin-bottom"
                variants={charVariants}
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    </Tag>
  )
}

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  once?: boolean
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function SplitText({
  children,
  className,
  delay = 0,
  once = true,
  tag: Tag = "p",
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-50px" })
  const words = children.split(" ")

  return (
    <Tag className={cn("overflow-hidden", className)}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: delay,
            },
          },
        }}
        className="block"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}