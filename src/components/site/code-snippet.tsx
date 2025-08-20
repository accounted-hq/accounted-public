"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeExamples = {
  javascript: `const response = await fetch('/api/journals', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${token}\`,
    'Content-Type': 'application/json',
    'Idempotency-Key': crypto.randomUUID()
  },
  body: JSON.stringify({
    reference: 'INV-1001',
    lines: [
      { account: '4000', debit: 0, credit: 100, currency: 'EUR' },
      { account: '2000', debit: 100, credit: 0, currency: 'EUR' }
    ]
  })
});`,
  
  curl: `curl -X POST "https://accounted.app/api/journals" \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: $(uuidgen)" \\
  -d '{
    "reference": "INV-1001",
    "lines": [
      { "account": "4000", "debit": 0, "credit": 100, "currency": "EUR" },
      { "account": "2000", "debit": 100, "credit": 0, "currency": "EUR" }
    ]
  }'`
}

export function CodeSnippet() {
  const [activeTab, setActiveTab] = useState<'javascript' | 'curl'>('javascript')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Idempotent by design</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Safe retries with consistent results using idempotency keys.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-muted/50 rounded-t-xl border-x border-t p-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('javascript')}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    activeTab === 'javascript'
                      ? 'bg-background text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  JavaScript
                </button>
                <button
                  onClick={() => setActiveTab('curl')}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    activeTab === 'curl'
                      ? 'bg-background text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  cURL
                </button>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="text-muted-foreground hover:text-foreground"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
          
          <div className="bg-background border rounded-b-xl overflow-hidden">
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-foreground">{codeExamples[activeTab]}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}