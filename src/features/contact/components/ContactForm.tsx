"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

  return (
    <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
      <h2 className="font-montserrat text-2xl font-bold mb-6">Send us a Message</h2>
      
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
          <Textarea id="message" required placeholder="How can we help you?" />
        </div>
        
        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto self-start mt-2">
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
        </Button>
      </form>
    </div>
  )
}
