import { PageHero } from "@/components/shared/PageHero"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, Database, Lock, Eye, CheckCircle2, ArrowRight, UserCheck, Server } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Privacy Policy | Radiant Chemical Complex',
  description: 'How Radiant Chemical Complex collects, protects, and handles personal and technical client data.',
}

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      number: "01",
      title: "Introduction & Commitment",
      icon: ShieldCheck,
      content: "Welcome to Radiant Chemical Complex. We respect your privacy and are committed to protecting your personal data, proprietary fabric recipes, and technical inquiry specifications. This privacy policy informs you how we safeguard your data when visiting our portal or requesting lab sample dispatch."
    },
    {
      id: "data-collection",
      number: "02",
      title: "Data We Collect",
      icon: Database,
      content: "We collect specific operational data necessary to fulfill technical sample requests, issue lab test certificates, and maintain commercial partnerships:",
      list: [
        "Identity & Corporate Data: Business name, designation, authorized representative name.",
        "Contact Data: Factory dispatch address, business email address, direct phone/WhatsApp number.",
        "Technical Process Data: Fabric substrate type (Cotton, Polyester, Blends), current washing machinery specs, target fastness rating.",
        "System & Portal Usage: IP address, browser type, cookies, and portal navigation activity."
      ]
    },
    {
      id: "data-usage",
      number: "03",
      title: "How We Use Your Data",
      icon: UserCheck,
      content: "Your data is strictly utilized to process chemical sample requests, dispatch custom lab formulations, send technical safety data sheets (MSDS), and communicate batch test results. We never sell, rent, or trade client data to third-party marketing brokers."
    },
    {
      id: "data-security",
      number: "04",
      title: "Data Security & Confidentiality",
      icon: Lock,
      content: "We implement enterprise-grade SSL/TLS encryption, restricted database access control, and strict non-disclosure protocols (NDA) for custom chemical formulations developed for specific textile mills."
    },
    {
      id: "your-rights",
      number: "05",
      title: "Your Rights & Transparency",
      icon: Eye,
      content: "Under international data protection regulations (GDPR / local privacy frameworks), you retain full rights to request access to stored contact records, request technical data deletion, or update authorized procurement personnel profiles."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CinematicSection depth={1.5}>
        <PageHero 
          badge="Data Protection & Governance"
          title="Privacy Policy" 
          description="How we collect, safeguard, and maintain absolute confidentiality of your technical and corporate data."
          backgroundImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1920"
        />
      </CinematicSection>
      
      <CinematicSection depth={1}>
        <section className="py-16 md:py-24 bg-background">
          <Container className="max-w-6xl mx-auto">

            {/* Quick Metadata Bar */}
            <div className="mb-12 p-6 rounded-3xl bg-card border border-border/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span>Data Protection Standard: <strong>Enterprise SSL & Encrypted Storage</strong></span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                NDA Protected
              </span>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Sticky Navigation Index */}
              <div className="lg:col-span-4 sticky top-28 hidden lg:block">
                <div className="p-6 rounded-3xl bg-card border border-border shadow-xs">
                  <h3 className="font-montserrat font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4 pb-3 border-b border-border/60">
                    Policy Index
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {sections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="flex items-center gap-3 p-3 rounded-2xl text-sm font-semibold text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-all duration-300 group"
                      >
                        <span className="w-6 h-6 rounded-lg bg-muted group-hover:bg-secondary group-hover:text-primary text-xs flex items-center justify-center font-bold transition-colors">
                          {sec.number}
                        </span>
                        <span className="line-clamp-1">{sec.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Right Column - Privacy Cards */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {sections.map((sec) => {
                  const Icon = sec.icon
                  return (
                    <article
                      key={sec.id}
                      id={sec.id}
                      className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-xs hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border/60">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-xs">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold tracking-widest text-secondary uppercase">Article {sec.number}</span>
                          <h2 className="font-montserrat text-xl sm:text-2xl font-bold text-foreground">
                            {sec.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-base text-muted-foreground leading-relaxed">
                        {sec.content}
                      </p>

                      {sec.list && (
                        <ul className="mt-6 flex flex-col gap-3">
                          {sec.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed bg-muted/50 p-3.5 rounded-2xl border border-border/40">
                              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  )
                })}

                {/* Bottom Security Support CTA Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-[#0A1930] to-[#060D18] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-montserrat text-xl font-bold mb-2">Need a Signed Non-Disclosure Agreement (NDA)?</h3>
                    <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                      For proprietary chemical recipe customization, our compliance officer can issue an official NDA prior to sample trials.
                    </p>
                  </div>
                  <Button size="lg" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg rounded-2xl shrink-0" asChild>
                    <Link href="/contact">
                      Request NDA
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

              </div>

            </div>

          </Container>
        </section>
      </CinematicSection>
    </div>
  )
}
