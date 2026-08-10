import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmartScrollButton } from '@/components/shared/SmartScrollButton'

export const metadata: Metadata = {
  title: {
    template: '%s | Radiant Chemical Complex',
    default: 'Radiant Chemical Complex | Sustainable Textile Solutions',
  },
  description: 'Global leader in sustainable textile auxiliary chemicals, developing eco-friendly, high-efficiency solutions for modern textile production.',
  openGraph: {
    title: 'Radiant Chemical Complex',
    description: 'Eco-friendly textile chemical solutions.',
    type: 'website',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

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
          <SmartScrollButton />
        </div>
      </body>
    </html>
  )
}
