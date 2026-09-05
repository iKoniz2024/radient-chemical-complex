import { PageHero } from "@/components/shared/PageHero"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Shield, Scale, AlertTriangle, RefreshCw, Gavel, CheckCircle2, ArrowRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Terms of Service | Radiant Chemical Complex',
  description: 'The legal framework, rules, and guidelines governing the use of Radiant Chemical Complex products and services.',
}

export default function TermsPage() {
  const sections = [
    {
      id: "agreement",
      number: "01",
      title: "Agreement to Terms",
      icon: FileText,
      content: "By accessing our website, purchasing chemical auxiliaries, or utilizing our technical consultation services, you agree to be bound by these Terms of Service and to comply with all applicable industrial safety laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
    },
    {
      id: "license",
      number: "02",
      title: "Use License & Proprietary Rights",
      icon: Shield,
      content: "Permission is granted to temporarily download technical data sheets (TDS), safety data sheets (MSDS/SDS), and product specification sheets on Radiant Chemical Complex's platform for commercial evaluation and regulatory compliance only. Under this license, you may not:",
      list: [
        "Modify, copy, or redistribute proprietary chemical formulation documentation;",
        "Use materials for unauthorized public display or commercial duplication without written consent;",
        "Attempt to reverse engineer, decompile, or analyze chemical compounds from proprietary technical sheets;",
        "Remove any copyright, trademark, or safety notation from technical documents;"
      ]
    },
    {
      id: "disclaimer",
      number: "03",
      title: "Technical Disclaimer & Product Application",
      icon: Scale,
      content: "The technical guidance, recipe recommendations, and product specification sheets provided by Radiant Chemical Complex are provided on an 'as-is' basis for professional textile processors. While we guarantee batch consistency and ISO standards, optimal performance depends on local water quality, fabric substrate, and process temperature control."
    },
    {
      id: "limitations",
      number: "04",
      title: "Limitations of Liability",
      icon: AlertTriangle,
      content: "In no event shall Radiant Chemical Complex, its chemical engineers, or supply partners be liable for indirect, incidental, or consequential damages (including process downtime, fabric shade deviation, or yield losses) arising out of uncalibrated application beyond recommended dosage specs."
    },
    {
      id: "revisions",
      number: "05",
      title: "Revisions & Technical Errata",
      icon: RefreshCw,
      content: "Technical documentation, environmental compliance indices, and safety data sheets appearing on our portal may be updated periodically to reflect evolving OEKO-TEX, GOTS, or ZDHC Level 3 regulatory standards without prior notice."
    },
    {
      id: "governing-law",
      number: "06",
      title: "Governing Law & Dispute Resolution",
      icon: Gavel,
      content: "These terms and conditions are governed by and construed in accordance with international commercial law and local jurisdiction courts where Radiant Chemical Complex operates."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CinematicSection depth={1.5}>
        <PageHero 
          badge="Legal & Compliance"
          title="Terms of Service" 
          description="The official rules, usage guidelines, and technical framework governing our products and digital services."
          backgroundImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1920"
        />
      </CinematicSection>
      
      <CinematicSection depth={1}>
        <section className="py-16 md:py-24 bg-background">
          <Container className="max-w-6xl mx-auto">
<div className="mb-12 p-6 rounded-3xl bg-card border border-border/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span>Effective Date: <strong>August 2026</strong> | ISO 9001 & ZDHC Level 3 Compliant</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                Version 2.4
              </span>
            </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
<div className="lg:col-span-4 sticky top-28 hidden lg:block">
                <div className="p-6 rounded-3xl bg-card border border-border shadow-xs">
                  <h3 className="font-montserrat font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4 pb-3 border-b border-border/60">
                    Table of Contents
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
                          <span className="text-xs font-bold tracking-widest text-secondary uppercase">Section {sec.number}</span>
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
<div className="p-8 sm:p-10 rounded-3xl bg-linear-to-br from-[#0A1930] to-[#060D18] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-montserrat text-xl font-bold mb-2">Have Legal or Compliance Questions?</h3>
                    <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                      Our legal and technical compliance team is available to assist with contract terms, lab certificates, or SDS inquiries.
                    </p>
                  </div>
                  <Button size="lg" className="bg-secondary text-[#0A1930] font-bold hover:bg-secondary/90 shadow-lg rounded-2xl shrink-0" asChild>
                    <Link href="/contact">
                      Contact Legal Team
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
