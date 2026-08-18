import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/layout/Providers'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmartScrollButton } from '@/components/shared/SmartScrollButton'
import { ScrollProgress, ScrollIndicator } from '@/components/shared/animations/SmoothScroll'
import { CustomCursor } from '@/components/shared/animations/CustomCursor'

export const metadata: Metadata = {
  title: {
    template: '%s | Radiant Chemical Complex',
    default: 'Radiant Chemical Complex | Sustainable Textile Solutions',
  },
  description: 'Global leader in sustainable textile auxiliary chemicals, developing eco-friendly, high-efficiency solutions for modern textile production.',
  icons: {
    icon: '/images/logo2.png',
  },
  openGraph: {
    title: 'Radiant Chemical Complex',
    description: 'Eco-friendly textile chemical solutions.',
    type: 'website',
  },
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          plusJakartaSans.variable,
          outfit.variable
        )}
      >
        <Providers attribute="class" defaultTheme="light" enableSystem>
          <CustomCursor />
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <SmartScrollButton />
          </div>
          <ScrollIndicator />
        </Providers>
      </body>
    </html>
  )
}