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
    <footer className="w-full border-t border-white/10 bg-[#070F1D] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      <Container className="max-w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <AnimatedContainer animation="stagger-container" staggerChildren={0.1} className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedContainer animation="stagger-item" className="flex flex-col items-center justify-center md:items-start gap-4">
            <FloatingElement yOffset={5} duration={3}>
              <div className="p-1 inline-flex items-center justify-center">
                <Image
                  src="/images/dark.png"
                  alt="Radiant Chemical Complex"
                  width={400}
                  height={140}
                  className="w-72 sm:w-80 md:w-96 h-auto object-contain"
                  priority
                />
              </div>
            </FloatingElement>
            <p className="text-sm text-slate-300 max-w-xs text-center md:text-left leading-relaxed">
              Global leader in sustainable textile auxiliary chemicals. Solutions for a sustainable future.
            </p>
          </AnimatedContainer>

          <AnimatedContainer animation="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-lg text-secondary">Company</h3>
            <nav aria-label="Company Links" className="flex flex-col gap-2.5 text-sm text-slate-300">
              <Link href="/about" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">About Us</Link>
              <Link href="/sustainability" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Sustainability</Link>
              <Link href="/customization" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">R&D Customization</Link>
              <Link href="/contact" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Contact</Link>
              <Link href="/privacy" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">Terms of Service</Link>
            </nav>
          </AnimatedContainer>

          <AnimatedContainer animation="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-lg text-secondary">Products</h3>
            <nav aria-label="Product Links" className="flex flex-col gap-2.5 text-sm text-slate-300">
              {categoriesData.map((cat) => (
                <Link key={cat.id} href={`/products?category=${cat.id}`} className="hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block w-fit">{cat.title}</Link>
              ))}
            </nav>
          </AnimatedContainer>

          <AnimatedContainer animation="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-montserrat font-bold text-lg text-secondary">Contact</h3>
            <address className="flex flex-col gap-2.5 text-sm text-slate-300 not-italic leading-relaxed">
              <p>{contact.address}</p>
              <p className="mt-2 group hover:text-secondary transition-colors cursor-pointer"><span className="text-slate-400 group-hover:text-secondary transition-colors">Phone:</span> {contact.phone}</p>
              <p className="group hover:text-secondary transition-colors cursor-pointer"><span className="text-slate-400 group-hover:text-secondary transition-colors">Email:</span> {contact.email}</p>
            </address>
          </AnimatedContainer>
        </AnimatedContainer>

        <div className="flex flex-col items-center border-t border-white/10 py-6 gap-2">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Radiant Chemical Complex. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
