import { PageHero } from "@/components/shared/PageHero"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Container } from "@/components/shared/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Radiant Chemical Complex.',
}

export default function TermsPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <PageHero 
          title="Terms of Service" 
          description="The rules and guidelines that govern your use of our website and services."
          backgroundImage="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1920"
        />
      </CinematicSection>
      
      <CinematicSection depth={1}>
        <section className="py-16 md:py-24 bg-background">
          <Container className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">1. Agreement to Terms</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                By accessing our website and using our services, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">2. Use License</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Radiant Chemical Complex&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on Radiant Chemical Complex&apos;s website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">3. Disclaimer</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                The materials on Radiant Chemical Complex&apos;s website are provided on an &apos;as is&apos; basis. Radiant Chemical Complex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">4. Limitations</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                In no event shall Radiant Chemical Complex or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Radiant Chemical Complex&apos;s website, even if Radiant Chemical Complex or a Radiant Chemical Complex authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">5. Revisions and Errata</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                The materials appearing on Radiant Chemical Complex&apos;s website could include technical, typographical, or photographic errors. Radiant Chemical Complex does not warrant that any of the materials on its website are accurate, complete, or current. Radiant Chemical Complex may make changes to the materials contained on its website at any time without notice.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">6. Governing Law</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>
          </Container>
        </section>
      </CinematicSection>
    </>
  )
}
