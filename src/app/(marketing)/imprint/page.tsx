import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal information and company details for Accounted.',
}

export default function ImprintPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Legal</Badge>
          <h1 className="text-4xl font-bold mb-4">Imprint</h1>
          <p className="text-lg text-muted-foreground">
            Legal information and company details
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          {/* Company Details */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Company Details</h2>
            <div className="space-y-2">
              <p><strong>Legal Business Name:</strong> [Company Legal Name Ltd.]</p>
              <p><strong>Trading Name:</strong> Accounted</p>
              <p><strong>Legal Form:</strong> [Limited Company / LLC / GmbH]</p>
            </div>
          </section>

          {/* Registered Address */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Registered Address</h2>
            <div className="space-y-1">
              <p>[Street Address]</p>
              <p>[City, Postal Code]</p>
              <p>[Country]</p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-2">
              <p><strong>Email:</strong> legal@accounted.app</p>
              <p><strong>Phone:</strong> [+1 (555) 123-4567]</p>
              <p><strong>Website:</strong> https://accounted.app</p>
            </div>
          </section>

          {/* Registration Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Registration Information</h2>
            <div className="space-y-2">
              <p><strong>Company Registration Number:</strong> [12345678]</p>
              <p><strong>Registered in:</strong> [Country/State]</p>
              <p><strong>Registration Authority:</strong> [Companies House / Secretary of State / etc.]</p>
            </div>
          </section>

          {/* Tax Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Tax Information</h2>
            <div className="space-y-2">
              <p><strong>VAT Registration Number:</strong> [VAT123456789] <em>(if applicable)</em></p>
              <p><strong>Tax ID:</strong> [Tax ID Number]</p>
            </div>
          </section>

          {/* Responsible Person */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Responsible Person</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> [Full Name]</p>
              <p><strong>Position:</strong> [CEO / Managing Director]</p>
              <p><strong>Address:</strong> [Same as registered address or separate if different]</p>
            </div>
          </section>

          {/* Data Protection Officer */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Protection Officer</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> [DPO Name]</p>
              <p><strong>Email:</strong> privacy@accounted.app</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The information contained on this website is for general information purposes only. 
              While we endeavor to keep the information up to date and correct, we make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
              suitability, or availability of the website or the information, products, services, 
              or related graphics contained on the website.
            </p>
          </section>

          {/* Footer Note */}
          <div className="pt-8 border-t">
            <p className="text-sm text-muted-foreground italic text-center">
              This imprint is provided in accordance with legal requirements in various jurisdictions. 
              For specific legal questions, please contact us at legal@accounted.app.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}