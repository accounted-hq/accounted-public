import Link from "next/link"
import { site } from "@/lib/site-config"
import { generateMetadata, pageMetadata } from "@/lib/metadata"
import { Badge } from "@/components/ui/badge"

export const metadata = generateMetadata(pageMetadata.terms)

export default function TermsPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4">Legal</Badge>
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-lg text-muted-foreground">
                        Last updated: August 20, 2025
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <div>
                        <p className="text-lg text-muted-foreground mb-8">
                            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Accounted&rsquo;s hosted accounting platform services (&ldquo;Service&rdquo;) provided by Accounted (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using our Service, you agree to be bound by these Terms.
                        </p>
                    </div>

                    {/* Service Description */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Service Description</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">1.1 Platform Overview</h3>
                        <p className="mb-4">
                            Accounted provides an open-source, multi-tenant accounting platform designed for teams requiring security, auditability, and performance. Our Service includes:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Multi-tenant accounting infrastructure with strong isolation</li>
                            <li>Immutable journal entries with hash chaining for audit integrity</li>
                            <li>Period-based posting controls for financial compliance</li>
                            <li>Multi-currency support with automated revaluation</li>
                            <li>Comprehensive audit logging and data retention</li>
                            <li>RESTful API with idempotency guarantees</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">1.2 Service Availability</h3>
                        <p className="mb-4">
                            We provide both hosted cloud services at <Link href={site.appUrl} className="text-primary hover:underline" target="_blank">my.accounted.app</Link> and open-source software available for self-hosting through our <Link href={site.repoUrl} className="text-primary hover:underline" target="_blank">GitHub repository</Link>.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">1.3 Open Source Components</h3>
                        <p>
                            Our core accounting engine is open source and licensed under applicable open source licenses. These Terms apply specifically to our hosted Service, not to your use of the open source software components.
                        </p>
                    </section>

                    {/* User Obligations */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. User Obligations and Acceptable Use</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">2.1 Account Registration</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>You must provide accurate, current, and complete information during registration</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                            <li>You must notify us immediately of any unauthorized use of your account</li>
                            <li>You must be at least 18 years old or have legal capacity to enter into agreements</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">2.2 Acceptable Use</h3>
                        <p className="mb-4">
                            You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Use the Service for any illegal activities or to violate any applicable laws</li>
                            <li>Attempt to gain unauthorized access to our systems or other users&rsquo; data</li>
                            <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                            <li>Upload or transmit viruses, malware, or other harmful code</li>
                            <li>Use the Service to store or process data in violation of third-party rights</li>
                            <li>Reverse engineer, decompile, or attempt to extract source code from our Service</li>
                            <li>Use the Service to compete directly with Accounted or develop competing products</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">2.3 Data Accuracy and Compliance</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You are responsible for the accuracy and completeness of all financial data you input</li>
                            <li>You must comply with all applicable accounting standards and regulations in your jurisdiction</li>
                            <li>You acknowledge that the Service is a tool and does not constitute financial or legal advice</li>
                        </ul>
                    </section>

                    {/* Payment Terms */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">3.1 Subscription Plans</h3>
                        <p className="mb-4">
                            Our pricing plans are detailed on our <Link href="/pricing" className="text-primary hover:underline">Pricing page</Link>. By subscribing to a paid plan, you agree to pay all applicable fees.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">3.2 Payment Processing</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Fees are billed in advance on a monthly or annual basis as selected</li>
                            <li>All payments are processed in EUR unless otherwise specified</li>
                            <li>You authorize us to charge your designated payment method</li>
                            <li>Failed payments may result in suspension or termination of your account</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.3 Refunds and Cancellation</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>You may cancel your subscription at any time through your account settings</li>
                            <li>Cancellations take effect at the end of your current billing period</li>
                            <li>We do not provide refunds for partial months of service</li>
                            <li>Enterprise customers may have different terms as specified in separate agreements</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">3.4 Price Changes</h3>
                        <p>
                            We may modify our pricing with at least 30 days&rsquo; prior notice. Changes will take effect at your next billing cycle unless you cancel before then.
                        </p>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">4.1 Service Ownership</h3>
                        <p className="mb-4">
                            The Service, including its design, functionality, and proprietary features, is owned by Accounted and protected by intellectual property laws. These Terms do not transfer any ownership rights to you.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">4.2 Open Source Components</h3>
                        <p className="mb-4">
                            Our open source components are governed by their respective licenses (available in our GitHub repository). Your use of the hosted Service does not grant additional rights to the open source components beyond those licenses.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">4.3 Your Data</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>You retain ownership of all data you upload to or create through the Service</li>
                            <li>You grant us a limited license to process your data to provide the Service</li>
                            <li>We will not access your data except as necessary to provide the Service or as required by law</li>
                            <li>You are responsible for ensuring you have rights to all data you upload</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">4.4 Feedback</h3>
                        <p>
                            Any feedback, suggestions, or ideas you provide about the Service become our property and may be used without compensation or attribution.
                        </p>
                    </section>

                    {/* Data Processing */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Data Processing and Privacy</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">5.1 Data Processing</h3>
                        <p className="mb-4">
                            We process your personal data in accordance with our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and applicable data protection laws, including the General Data Protection Regulation (GDPR).
                        </p>

                        <h3 className="text-xl font-semibold mb-3">5.2 Data Location</h3>
                        <p className="mb-4">
                            Your data may be processed and stored in data centers located within the European Union and other jurisdictions where we or our service providers operate.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">5.3 Data Security</h3>
                        <p className="mb-4">
                            We implement appropriate technical and organizational measures to protect your data, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Encryption in transit and at rest</li>
                            <li>Multi-tenant isolation with role-based access controls</li>
                            <li>Regular security audits and monitoring</li>
                            <li>Incident response procedures</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">5.4 Data Retention</h3>
                        <p>
                            We retain your data for as long as your account is active and as required for legal and compliance purposes. Upon account termination, data may be retained for up to 90 days before deletion.
                        </p>
                    </section>

                    {/* Service Level */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Service Level and Availability</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">6.1 Service Targets</h3>
                        <p className="mb-4">We strive to maintain:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>99.9% uptime excluding planned maintenance</li>
                            <li>Sub-100ms P95 response times for API requests</li>
                            <li>Recovery time of less than 1 hour for major incidents</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">6.2 Maintenance</h3>
                        <p className="mb-4">
                            We may perform scheduled maintenance with reasonable advance notice. Emergency maintenance may be performed without prior notice.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">6.3 No Warranty</h3>
                        <p className="font-semibold">
                            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">7.1 Liability Limitations</h3>
                        <div className="font-semibold mb-4">
                            <p className="mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM</li>
                                <li>WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                                <li>THIS INCLUDES DAMAGES FOR LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-semibold mb-3">7.2 Exclusions</h3>
                        <p className="mb-4">
                            Some jurisdictions do not allow certain warranty disclaimers or liability limitations. In such cases, our liability is limited to the maximum extent permitted by law.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">7.3 Force Majeure</h3>
                        <p>
                            We are not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, pandemics, government actions, or infrastructure failures.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
                        <p className="mb-4">
                            You agree to indemnify and hold harmless Accounted, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including attorney fees) arising from:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your use of the Service</li>
                            <li>Your violation of these Terms</li>
                            <li>Your violation of any third-party rights</li>
                            <li>Your data or content uploaded to the Service</li>
                        </ul>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">9.1 Termination by You</h3>
                        <p className="mb-4">
                            You may terminate your account at any time through your account settings or by contacting us at <Link href={`mailto:${site.contactEmail}`} className="text-primary hover:underline">{site.contactEmail}</Link>.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">9.2 Termination by Us</h3>
                        <p className="mb-4">We may suspend or terminate your account if:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>You violate these Terms or our policies</li>
                            <li>Your account remains inactive for an extended period</li>
                            <li>We discontinue the Service (with reasonable notice)</li>
                            <li>Required by law or court order</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">9.3 Effect of Termination</h3>
                        <p className="mb-4">Upon termination:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Your access to the Service will cease</li>
                            <li>You may export your data within 30 days (subject to technical feasibility)</li>
                            <li>We may delete your data after the retention period</li>
                            <li>Accrued obligations and these Terms&rsquo; survival provisions remain in effect</li>
                        </ul>
                    </section>

                    {/* Modifications */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">10.1 Changes</h3>
                        <p className="mb-4">
                            We may modify these Terms at any time by posting updated Terms on our website. Material changes will be communicated via email or Service notification.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">10.2 Acceptance</h3>
                        <p className="mb-4">
                            Continued use of the Service after changes constitutes acceptance of the modified Terms. If you disagree with changes, you may terminate your account.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">10.3 Version Control</h3>
                        <p>
                            We will maintain prior versions of these Terms for reference. The effective date is shown at the top of this document.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">11. Governing Law and Dispute Resolution</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">11.1 Governing Law</h3>
                        <p className="mb-4">
                            These Terms are governed by Austrian law, without regard to conflict of law principles. The Vienna Convention on the International Sale of Goods does not apply.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">11.2 Jurisdiction</h3>
                        <p className="mb-4">For disputes arising under these Terms:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Austrian and EU residents: Austrian courts have jurisdiction</li>
                            <li>Non-EU residents: Disputes may be resolved in Austrian courts or through binding arbitration as we elect</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3">11.3 European Union Rights</h3>
                        <p>
                            If you are a consumer in the European Union, you retain rights under applicable consumer protection laws, and nothing in these Terms limits those rights.
                        </p>
                    </section>

                    {/* General Provisions */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">12. General Provisions</h2>
                        
                        <h3 className="text-xl font-semibold mb-3">12.1 Entire Agreement</h3>
                        <p className="mb-4">
                            These Terms, together with our Privacy Policy and any additional agreements, constitute the entire agreement between you and Accounted regarding the Service.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">12.2 Severability</h3>
                        <p className="mb-4">
                            If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">12.3 Waiver</h3>
                        <p className="mb-4">
                            Our failure to enforce any provision does not constitute a waiver of future enforcement of that provision or any other provision.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">12.4 Assignment</h3>
                        <p className="mb-4">
                            You may not assign these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">12.5 Notices</h3>
                        <p className="mb-4">
                            Notices to you will be sent to your registered email address. Notices to us should be sent to <Link href={`mailto:${site.contactEmail}`} className="text-primary hover:underline">{site.contactEmail}</Link>.
                        </p>

                        <h3 className="text-xl font-semibold mb-3">12.6 Language</h3>
                        <p>
                            These Terms are written in English. Any translations are provided for convenience only, and the English version controls in case of conflicts.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                        <p className="mb-4">
                            If you have questions about these Terms, please contact us:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Email</strong>: <Link href={`mailto:${site.contactEmail}`} className="text-primary hover:underline">{site.contactEmail}</Link></li>
                            <li><strong>Website</strong>: <Link href={site.baseUrl} className="text-primary hover:underline">{site.baseUrl}</Link></li>
                            <li><strong>GitHub</strong>: <Link href={site.repoUrl} className="text-primary hover:underline" target="_blank">{site.repoUrl}</Link></li>
                        </ul>
                    </section>

                    {/* Footer */}
                    <div className="border-t pt-8 mt-12 text-center text-muted-foreground">
                        <p><em>These Terms of Service are effective as of the date listed above and apply to all users of the Accounted Service.</em></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
