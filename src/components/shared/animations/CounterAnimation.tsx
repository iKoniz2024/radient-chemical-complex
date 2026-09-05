"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { useInView, motion, animate } from "framer-motion"

export interface CounterAnimationProps {
  value: string
  duration?: number
  delay?: number
  className?: string
}

export function CounterAnimation({
  value,
  duration = 3.0,
  delay = 0.2,
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const isInView = useInView(ref, { once: true, amount: 0.4, margin: "0px 0px -50px 0px" })

  const parsed = useMemo(() => {
    const match = value.match(/^(.*?)([\d,.]+)(.*)$/)
    if (!match) return null

    const prefix = match[1] || ""
    const rawNumStr = match[2] || ""
    const suffix = match[3] || ""

    const hasComma = rawNumStr.includes(",")
    const cleanNumStr = rawNumStr.replace(/,/g, "")
    const targetNum = parseFloat(cleanNumStr)

    if (isNaN(targetNum)) return null

    const decimalParts = cleanNumStr.split(".")
    const decimals = decimalParts.length > 1 ? decimalParts[1].length : 0

    return { prefix, targetNum, suffix, hasComma, decimals }
  }, [value])

  const initialZeroFormatted = useMemo(() => {
    if (!parsed) return value
    const zeroStr = (0).toFixed(parsed.decimals)
    return `${parsed.prefix}${zeroStr}${parsed.suffix}`
  }, [parsed, value])

  const [displayValue, setDisplayValue] = useState(initialZeroFormatted)

  useEffect(() => {
    if (!parsed || !isInView) return

    const { prefix, targetNum, suffix, hasComma, decimals } = parsed

    const timer = setTimeout(() => {
      const controls = animate(0, targetNum, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          let numFormatted = latest.toFixed(decimals)
          if (hasComma) {
            const parts = numFormatted.split(".")
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            numFormatted = parts.join(".")
          }
          setDisplayValue(`${prefix}${numFormatted}${suffix}`)
        },
      })
      return () => controls.stop()
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, parsed, duration, delay])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  )
}
