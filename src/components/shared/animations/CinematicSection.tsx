"use client"

import { ReactNode, useRef, useEffect } from "react"

let targetScroll = 0
let currentScroll = 0
let rafId: ReturnType<typeof requestAnimationFrame> | null = null
const sections = new Map<HTMLElement, number>()

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function onScroll() {
  targetScroll = window.scrollY
}

function animate() {
  currentScroll = lerp(currentScroll, targetScroll, 0.15)

  const vh = window.innerHeight

  sections.forEach((depth, el) => {
    const rect = el.getBoundingClientRect()
    const sectionCenter = rect.top + rect.height / 2
    const normalized = (sectionCenter - vh / 2) / (vh / 2)

    if (normalized > -1.5 && normalized < 1.5) {
      const absDist = Math.abs(normalized)
      const ease = 1 - Math.min(absDist, 1)

      const z = -60 * depth * (1 - ease)
      const scale = 0.96 + 0.04 * ease
      const opacity = 0.5 + 0.5 * ease
      const y = normalized * -12

      el.style.transform = `translate3d(0,${y}px,${z}px) scale(${scale})`
      el.style.opacity = String(opacity)
    } else {
      el.style.transform = ""
      el.style.opacity = ""
    }
  })

  rafId = requestAnimationFrame(animate)
}

function startLoop() {
  if (sections.size === 1) {
    window.addEventListener("scroll", onScroll, false)
    rafId = requestAnimationFrame(animate)
  }
}

function stopLoop() {
  if (sections.size === 0 && rafId !== null) {
    window.removeEventListener("scroll", onScroll, false)
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

interface CinematicSectionProps {
  children: ReactNode
  className?: string
  depth?: number
}

export function CinematicSection({ children, className = "", depth = 1 }: CinematicSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    sections.set(el, depth)
    startLoop()

    return () => {
      sections.delete(el)
      el.style.transform = ""
      el.style.opacity = ""
      stopLoop()
    }
  }, [depth])

  return (
    <div ref={ref} className={className} style={{ willChange: "transform,opacity" }}>
      {children}
    </div>
  )
}
