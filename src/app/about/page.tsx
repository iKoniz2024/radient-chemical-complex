import { PageHero } from "@/components/shared/PageHero"
import { CompanyStorySection } from "@/features/about/components/CompanyStorySection"
import { TimelineSection } from "@/features/about/components/TimelineSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the history, mission, vision, and core values of Radiant Chemical Complex.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero 
        title="About Radiant Chemical Complex" 
        description="Pioneering sustainable, high-efficiency textile auxiliary solutions for a greener, thriving global industry."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="relative z-10">
        <CompanyStorySection />
        <TimelineSection />
      </div>
    </div>
  )
}
