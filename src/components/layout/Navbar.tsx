"use client"

import { useState, useEffect } from "react"
import { useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  )
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const { theme, resolvedTheme, setTheme } = useTheme()
  const isDark = mounted ? (theme === "dark" || resolvedTheme === "dark") : false
  const logoSrc = isDark ? "/images/dark.png" : "/images/light.png"

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {

    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "R&D", href: "/customization" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500 ease-out border-b",
      isScrolled
        ? "bg-background/70 backdrop-blur-xl border-border/40 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-0"
        : "bg-background/0 border-transparent py-2"
    )}>
      <Container className="max-w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center" aria-label="Go to homepage">
              <Image
                key={logoSrc}
                src={logoSrc}
                alt="Radiant Chemical Complex"
                width={320}
                height={100}
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>
<nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <MagneticButton key={link.name} strength={0.1}>
                <Link
                  href={link.href}
                  className={cn(
                    "transition-all duration-300 hover:text-secondary relative group px-2 py-1",
                    pathname === link.href ? "text-secondary font-semibold" : "text-foreground/80"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-secondary origin-left transition-transform duration-300",
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              </MagneticButton>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <MagneticButton strength={0.15}>
              <Button variant="default" className="hidden lg:flex shadow-[0_0_15px_rgba(217,155,34,0.3)] hover:shadow-[0_0_25px_rgba(217,155,34,0.5)] transition-shadow duration-300" asChild>
                <Link href="/contact">Request Sample</Link>
              </Button>
            </MagneticButton>
{mounted && (
              <Button
                variant="outline"
                size="icon"
                className="border-border bg-transparent text-foreground hover:bg-muted"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
<Button
              variant="outline"
              size="icon"
              className="md:hidden border-border bg-transparent text-foreground hover:bg-muted"
              onClick={() => {
                if (!isMobileMenuOpen && typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>
<AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 md:top-20 h-[calc(100vh-64px)] bg-background/95 backdrop-blur-2xl border-t border-border md:hidden z-40 overflow-y-auto"
          >
            <Container className="py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-2xl font-montserrat font-bold py-2 border-b border-border/50",
                      pathname === link.href ? "text-secondary" : "text-foreground"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Button size="lg" className="w-full mt-4" asChild>
                <Link href="/contact">Request Sample</Link>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
