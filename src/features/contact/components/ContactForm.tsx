"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactForm() {
  const searchParams = useSearchParams()
  const urlType = searchParams.get("type")
  const product = searchParams.get("product")

  const getDefaultMessage = () => {
    if (urlType === "sample" && product) {
      return `I would like to request a trial sample of ${product}.`
    }
    if ((urlType === "custom" || urlType === "customization") && product) {
      return `I am interested in a custom formulation for ${product}.`
    }
    return ""
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: getDefaultMessage(),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email. Please try again.")
      }

      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred."
      setErrorMessage(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
<div className="mb-6">
        <h3 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-1.5">
          {product ? `Inquire: ${product}` : "Send a Message"}
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      {isSuccess ? (
        <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-montserrat font-bold text-xl text-foreground">Message Sent!</h4>
          <p className="text-sm text-muted-foreground max-w-sm">
            Thank you for reaching out. We have received your message and sent it directly to info@radiantgroup-bd.com.
          </p>
          <Button 
            onClick={() => setIsSuccess(false)}
            variant="outline" 
            size="sm" 
            className="rounded-xl mt-2 text-xs cursor-pointer"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex items-start gap-3 text-destructive text-xs leading-relaxed animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <strong>Error sending message:</strong> {errorMessage}
              </div>
            </div>
          )}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-foreground">
                Your Name <span className="text-secondary">*</span>
              </label>
              <Input 
                id="name" 
                required 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="h-11 rounded-xl bg-background border-border text-sm focus:border-secondary shadow-xs"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground">
                Email Address <span className="text-secondary">*</span>
              </label>
              <Input 
                id="email" 
                type="email" 
                required 
                placeholder="john@company.com" 
                value={formData.email}
                onChange={handleChange}
                className="h-11 rounded-xl bg-background border-border text-sm focus:border-secondary shadow-xs"
              />
            </div>
          </div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-foreground">
                Company Name
              </label>
              <Input 
                id="company" 
                placeholder="Your Mill / Factory Name" 
                value={formData.company}
                onChange={handleChange}
                className="h-11 rounded-xl bg-background border-border text-sm focus:border-secondary shadow-xs"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-foreground">
                Phone Number
              </label>
              <Input 
                id="phone" 
                placeholder="+880 1XXXXXXXXX" 
                value={formData.phone}
                onChange={handleChange}
                className="h-11 rounded-xl bg-background border-border text-sm focus:border-secondary shadow-xs"
              />
            </div>
          </div>
<div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-foreground">
              Message <span className="text-secondary">*</span>
            </label>
            <Textarea 
              id="message" 
              required 
              rows={4}
              placeholder="How can we help you?" 
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl bg-background border-border text-sm focus:border-secondary shadow-xs resize-none"
            />
          </div>
<Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg shadow-secondary/20 text-sm py-5 rounded-xl group transition-all mt-1 cursor-pointer"
          >
            {isSubmitting ? (
              "Sending Message..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            )}
          </Button>

        </form>
      )}

    </div>
  )
}
