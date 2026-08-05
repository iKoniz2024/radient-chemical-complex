import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* Placeholder for Logo */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold font-montserrat">
                RCC
              </div>
              <span className="font-montserrat font-bold text-lg text-primary hidden sm:inline-block">
                Radiant Chemical Complex
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-secondary text-foreground/80">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-secondary text-foreground/80">
              About
            </Link>
            <Link href="/products" className="transition-colors hover:text-secondary text-foreground/80">
              Products
            </Link>
            <Link href="/customization" className="transition-colors hover:text-secondary text-foreground/80">
              R&D
            </Link>
            <Link href="/sustainability" className="transition-colors hover:text-secondary text-foreground/80">
              Sustainability
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="default" className="hidden sm:flex" asChild>
              <Link href="/contact">Request Sample</Link>
            </Button>
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
