"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { ReactNode, useEffect } from "react"

export function Providers({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    const orig = console.error
    console.error = (...args: unknown[]) => {
      if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) return
      orig.apply(console, args)
    }
    return () => { console.error = orig }
  }, [])

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
