import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Radiant Chemical Complex | Solutions for a Sustainable Future',
  description: 'Global leader in sustainable textile auxiliary chemicals. Eco-friendly solutions for pretreatment, dyeing, finishing, denim washing, and PSF industries.',
  keywords: ['textile chemicals', 'auxiliary chemicals', 'sustainable textiles', 'denim washing', 'eco-friendly dye', 'Radiant Chemical Complex'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          montserrat.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
