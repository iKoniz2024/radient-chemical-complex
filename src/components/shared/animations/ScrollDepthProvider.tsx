"use client"

import { ReactNode } from "react"

export function ScrollDepthProvider({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative w-full min-h-screen preserve-3d overflow-x-hidden overflow-y-visible"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
    >
      {children}
    </div>
  )
}
