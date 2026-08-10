"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is open
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
      <Container>
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
              <Image
                src="/logo.png"
                alt="Radiant Chemical Complex"
                width={350}
                height={90}
                className="h-20 md:h-24 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-4">
            <MagneticButton strength={0.15}>
              <Button variant="default" className="hidden lg:flex shadow-[0_0_15px_rgba(217,155,34,0.3)] hover:shadow-[0_0_25px_rgba(217,155,34,0.5)] transition-shadow duration-300" asChild>
                <Link href="/contact">Request Sample</Link>
              </Button>
            </MagneticButton>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden border-border bg-transparent text-foreground hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-[65px] left-0 right-0 h-[calc(100vh-65px)] bg-background/80 backdrop-blur-2xl border-t border-border/50 md:hidden z-40 overflow-y-auto"
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
