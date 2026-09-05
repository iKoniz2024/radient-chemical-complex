"use client"

import { companyData } from "@/data/company"
import { socialLinks } from "@/data/social"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactInfo() {
  const { contact } = companyData

  const contactItems = [
    {
      icon: MapPin,
      title: "Our Office",
      value: contact.address,
      link: undefined
    },
    {
      icon: Phone,
      title: "Call Us",
      value: contact.phone,
      link: `tel:${contact.phone.replace(/[^0-9+]/g, "")}`
    },
    {
      icon: Mail,
      title: "Email Us",
      value: contact.email,
      link: `mailto:${contact.email}`
    }
  ]

  return (
    <div className="flex flex-col gap-8">
<div>
        <h2 className="font-montserrat text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
          Get in <span className="text-secondary">Touch</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base">
          Have questions about our products, need a trial sample, or want to discuss custom formulations? We&apos;re here to help.
        </p>
      </div>
<div className="flex flex-col gap-4">
        {contactItems.map((item, idx) => {
          const Content = (
            <div className="p-5 rounded-2xl bg-card border border-border shadow-xs hover:border-secondary/50 hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shrink-0 mt-0.5">
                <item.icon className="w-5 h-5" />
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="font-montserrat font-bold text-base text-foreground group-hover:text-secondary transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.value}
                </p>
              </div>
            </div>
          )

          return item.link ? (
            <a key={idx} href={item.link} className="block">
              {Content}
            </a>
          ) : (
            <div key={idx}>
              {Content}
            </div>
          )
        })}
      </div>
<div className="pt-2 flex flex-col gap-3">
        <h4 className="font-montserrat font-bold text-xs text-muted-foreground uppercase tracking-wider">
          Follow Us
        </h4>
        <div className="flex items-center gap-3">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              aria-label="Social link"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-card border border-border text-muted-foreground hover:bg-secondary hover:text-[#0A1930] hover:border-secondary transition-all duration-300 shadow-xs"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
