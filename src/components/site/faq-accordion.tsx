"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What's the difference between hosted and self-hosted?",
        answer: "Our hosted cloud version handles all infrastructure, updates, and monitoring for you. Self-hosted gives you complete control over your deployment but requires you to manage infrastructure, updates, and backups yourself. Both versions have identical core features."
    },
    {
        question: "Can I migrate from self-hosted to hosted later?",
        answer: "Yes, we provide migration tools and support to help you move from self-hosted to our cloud service. Your data structure remains the same, making migration straightforward."
    },
    {
        question: "What about data security and compliance?",
        answer: "We implement enterprise-grade security with encryption at rest and in transit, SOC 2 compliance, and comprehensive audit logging. Self-hosted deployments give you complete control over security configurations to meet your specific compliance requirements."
    },
    {
        question: "How does the API rate limiting work?",
        answer: "Rate limits vary by plan: Starter allows 1000 requests/hour, Pro allows 10,000 requests/hour, and Enterprise has custom limits. All plans include burst allowances and graceful degradation."
    },
    {
        question: "What currencies are supported?",
        answer: "We support 150+ currencies with automatic exchange rate updates. You can set different base currencies per tenant and handle multi-currency transactions with automated revaluation."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, all paid plans include a 14-day free trial with full access to features. No credit card required to start your trial."
    },
    {
        question: "What kind of support do you provide?",
        answer: "Starter includes email support during business hours. Pro gets priority support with extended hours. Enterprise includes 24/7 support with dedicated account management and custom SLAs."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel anytime. Your service continues until the end of your billing period, and you can export all your data before cancellation."
    },
    {
        question: "How does tenant billing work?",
        answer: "You're billed based on active tenants and transaction volume. Inactive tenants (no transactions for 30+ days) don't count toward your limit. We provide detailed usage dashboards to track consumption."
    },
    {
        question: "What happens if I exceed my plan limits?",
        answer: "We'll notify you before you hit limits and help you upgrade. If you temporarily exceed limits, service continues with additional usage billed at standard overage rates."
    }
]

export function FAQAccordion() {
    return (
        <section className="py-16">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
                    <p className="text-xl text-muted-foreground">
                        Have a question we haven&apos;t answered? Contact us at{" "}
                        <a
                            href="mailto:support@accounted.app"
                            className="text-primary hover:underline"
                        >
                            support@accounted.app
                        </a>
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}