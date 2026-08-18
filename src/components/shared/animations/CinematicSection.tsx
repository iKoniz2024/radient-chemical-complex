"use client"

import { ReactNode } from "react"

interface CinematicSectionProps {
  children: ReactNode
  className?: string
  depth?: number
}

export function CinematicSection({ children, className = "" }: CinematicSectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
