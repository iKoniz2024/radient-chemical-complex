import { PageHero } from "@/components/shared/PageHero"
import { CinematicSection } from "@/components/shared/animations/CinematicSection"
import { Container } from "@/components/shared/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Radiant Chemical Complex.',
}

export default function PrivacyPage() {
  return (
    <>
      <CinematicSection depth={1.5}>
        <PageHero 
          title="Privacy Policy" 
          description="How we collect, use, and protect your data."
        />
      </CinematicSection>
      
      <CinematicSection depth={1}>
        <section className="py-16 md:py-24 bg-background">
          <Container className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-6">1. Introduction</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Welcome to Radiant Chemical Complex. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">2. Data We Collect</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">3. How We Use Your Data</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">4. Data Security</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-6 mt-10">5. Contact Us</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us using the details provided on our contact page.
              </p>
            </div>
          </Container>
        </section>
      </CinematicSection>
    </>
  )
}
