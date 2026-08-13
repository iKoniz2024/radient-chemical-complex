import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { categoriesData } from "@/data/categories"
import Image from "next/image"
import { AnimatedContainer } from "@/components/shared/AnimatedContainer"
import { FloatingElement } from "@/components/shared/animations/FloatingElement"
import { companyData } from "@/data/company"

export function Footer() {

  const { contact } = companyData
  return (
    <footer className="w-full border-t border-border bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      <Container className="relative z-10">
        <AnimatedContainer animation="stagger-container" staggerChildren={0.1} className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedContainer animation="stagger-item" className="flex flex-col items-center justify-center gap-4">
            <FloatingElement yOffset={5} duration={3}>
              <div className="bg-white rounded-full p-2 inline-flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Image
                  src="/images/logo.png"
                  alt="Radiant Chemical Complex"
                  width={120}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
            </FloatingElement>
            <p className="text-sm text-primary-foreground/70 max-w-xs text-center">
              Global leader in sustainable textile auxiliary chemicals. Solutions for a sustainable future.
            </p>
          </AnimatedContainer>
          
          <AnimatedContainer animation="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-montserrat font-semibold text-lg text-glow-secondary">Company</h3>
            <nav aria-label="Company Links" className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link href="/about" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">About Us</Link>
              <Link href="/sustainability" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Sustainability</Link>
              <Link href="/customization" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">R&D Customization</Link>
              <Link href="/contact" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Contact</Link>
              <Link href="/privacy" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Terms of Service</Link>
            </nav>
          </AnimatedContainer>

          <AnimatedContainer animation="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-montserrat font-semibold text-lg text-glow-secondary">Products</h3>
            <nav aria-label="Product Links" className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              {categoriesData.map((cat) => (
                <Link key={cat.id} href={`/products?category=${cat.id}`} className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">{cat.title}</Link>
              ))}
            </nav>
          </AnimatedContainer>

          <AnimatedContainer animation="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-montserrat font-semibold text-lg text-glow-secondary">Contact</h3>
            <address className="flex flex-col gap-2 text-sm text-primary-foreground/80 not-italic">
              <p>{contact.address}</p>
              <p className="mt-2 group hover:text-secondary transition-colors cursor-pointer"><span className="opacity-70 group-hover:opacity-100 transition-opacity">Phone:</span> {contact.phone}</p>
              <p className="group hover:text-secondary transition-colors cursor-pointer"><span className="opacity-70 group-hover:opacity-100 transition-opacity">Email:</span> {contact.email}</p>
            </address>
          </AnimatedContainer>
        </AnimatedContainer>
        
        <div className="flex flex-col items-center border-t border-primary-foreground/10 py-6 gap-2">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Radiant Chemical Complex. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
