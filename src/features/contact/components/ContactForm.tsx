"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { MagneticButton } from "@/components/shared/animations/MagneticButton"

export function ContactForm() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type")
  const product = searchParams.get("product")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const getDefaultMessage = () => {
    if (type === "sample" && product) {
      return `I would like to request a sample of ${product} for testing in our production facility.`
    }
    if (type === "custom" && product) {
      return `I am interested in a custom formulation for ${product}. We need specific properties adjusted to match our target effect.`
    }
    return ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request for Frontend Only requirement
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const getFormTitle = () => {
    if (type === "sample" && product) {
      return `Request Sample: ${product}`
    }
    if (type === "custom" && product) {
      return `Custom Formulation: ${product}`
    }
    return "Send us a Message"
  }

  return (
    <div className="bg-background/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
      <h2 className="font-montserrat text-2xl font-bold mb-6">{getFormTitle()}</h2>
      
      {isSuccess ? (
        <div className="bg-green-500/10 border border-green-500/20 text-green-700 p-4 rounded-lg mb-6">
          Thank you for reaching out! We have received your message and will get back to you shortly.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-destructive">*</span></label>
            <Input id="name" required placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email Address <span className="text-destructive">*</span></label>
            <Input id="email" type="email" required placeholder="john@company.com" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-sm font-medium">Company Name</label>
          <Input id="company" placeholder="Your Textile Co." />
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium">Message <span className="text-destructive">*</span></label>
          <Textarea id="message" required placeholder="How can we help you?" defaultValue={getDefaultMessage()} />
        </div>
        
        <MagneticButton strength={0.1} className="w-full sm:w-auto self-start mt-2">
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
          </Button>
        </MagneticButton>
      </form>
    </div>
  )
}
