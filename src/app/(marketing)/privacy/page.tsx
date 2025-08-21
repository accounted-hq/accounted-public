import { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Accounted collects, uses, and protects your personal information. Our commitment to privacy and data protection.',
  openGraph: {
    title: 'Privacy Policy - Accounted',
    description: 'Learn how Accounted collects, uses, and protects your personal information. Our commitment to privacy and data protection.',
  },
}

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: August 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-8">
              At Accounted, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website and use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
              <li><strong>Account Information:</strong> Username, password, profile information</li>
              <li><strong>Communication Data:</strong> Messages sent through contact forms, support requests, feedback</li>
              <li><strong>Financial Data:</strong> Billing information, payment details (processed securely by third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website or use our services, we automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click-through rates, referral sources</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              <li><strong>Technical Data:</strong> Server logs, error reports, performance metrics</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
            <p className="mb-4">We use cookies and similar tracking technologies to enhance your experience:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-3">Service Provision</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our accounting platform</li>
              <li>Process transactions and manage billing</li>
              <li>Authenticate users and prevent unauthorized access</li>
              <li>Provide customer support and respond to inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Communications</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Send important updates about our services</li>
              <li>Respond to your questions and support requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Notify you of changes to our terms or policies</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our services</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> When you have given explicit consent to share your information</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after deletion</li>
              <li><strong>Financial Records:</strong> Retained for 7 years for tax and accounting purposes</li>
              <li><strong>Support Communications:</strong> Retained for 3 years for quality assurance</li>
              <li><strong>Analytics Data:</strong> Aggregated data may be retained indefinitely</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
            
            <h3 className="text-xl font-semibold mb-3">GDPR Rights (EU Residents)</h3>
            <p className="mb-4">If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR):</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Restriction:</strong> Request limitation of processing</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">CCPA Rights (California Residents)</h3>
            <p className="mb-4">If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Know:</strong> Right to know what personal information is collected</li>
              <li><strong>Delete:</strong> Right to request deletion of personal information</li>
              <li><strong>Opt-Out:</strong> Right to opt-out of the sale of personal information</li>
              <li><strong>Non-Discrimination:</strong> Right not to be discriminated against for exercising privacy rights</li>
            </ul>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational security measures to protect your data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
            <p className="mb-4">
              Your data may be transferred to and processed in countries other than your own. 
              We ensure adequate protection through:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions for certain countries</li>
              <li>Other appropriate safeguards as required by law</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="bg-muted/20 rounded-lg p-4 space-y-2">
              <p><strong>Email:</strong> <Link href={`mailto:privacy@accounted.app`} className="text-primary hover:underline">privacy@accounted.app</Link></p>
              <p><strong>General Contact:</strong> <Link href={`mailto:${site.contactEmail}`} className="text-primary hover:underline">{site.contactEmail}</Link></p>
              <p><strong>Data Protection Officer:</strong> <Link href="mailto:privacy@accounted.app" className="text-primary hover:underline">privacy@accounted.app</Link></p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the &ldquo;Last Updated&rdquo; date</li>
              <li>Sending you an email notification for material changes</li>
            </ul>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t text-center">
          <p className="text-muted-foreground mb-6">
            Questions about our privacy practices? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button asChild variant="outline">
              <Link href={`mailto:privacy@accounted.app`}>
                Contact Privacy Team
              </Link>
            </Button>
            <Button asChild>
              <Link href="/terms">
                View Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}