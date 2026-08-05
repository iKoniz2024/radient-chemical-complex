import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { categoriesData } from "@/data/categories"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold font-montserrat">
                RCC
              </div>
              <span className="font-montserrat font-bold text-lg text-primary-foreground">
                Radiant Chemical Complex
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Global leader in sustainable textile auxiliary chemicals. Solutions for a sustainable future.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-semibold text-lg">Company</h3>
            <nav aria-label="Company Links" className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
              <Link href="/sustainability" className="hover:text-secondary transition-colors">Sustainability</Link>
              <Link href="/customization" className="hover:text-secondary transition-colors">R&D Customization</Link>
              <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-semibold text-lg">Products</h3>
            <nav aria-label="Product Links" className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              {categoriesData.map((cat) => (
                <Link key={cat.id} href={`/products?category=${cat.id}`} className="hover:text-secondary transition-colors">{cat.title}</Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat font-semibold text-lg">Contact</h3>
            <address className="flex flex-col gap-2 text-sm text-primary-foreground/80 not-italic">
              <p>House 19, Road 4/A, Diabari</p>
              <p>Sector 15, Uttara, Dhaka-1230</p>
              <p className="mt-2">Phone: +880 1911-288839</p>
              <p>Email: info@radiantgroup-bd.com</p>
            </address>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between border-t border-primary-foreground/10 py-6 md:flex-row gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Radiant Chemical Complex. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-primary-foreground/60">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
