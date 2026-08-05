import { companyData } from "@/data/company"
import { socialLinks } from "@/data/social"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactInfo() {
  const { contact } = companyData

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-montserrat text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether you need to request a sample, inquire about custom product development, or learn more about our sustainable practices, our team is ready to assist you.
        </p>
      </div>
      
      <div className="flex flex-col gap-6 bg-muted/30 p-8 rounded-2xl border border-border">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Corporate Office</h3>
            <p className="text-muted-foreground">{contact.address}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-muted-foreground">{contact.phone}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground">{contact.email}</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <a 
              key={idx} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
