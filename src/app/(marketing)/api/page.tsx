import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {AlertCircle, ExternalLink, Lock, RefreshCw} from "lucide-react"
import Link from "next/link"
import { generateMetadata, pageMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(pageMetadata.api)

const authExample = `curl -X POST "https://my.accounted.app/api/oauth/token" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=client_credentials" \\
  -d "client_id=your_client_id" \\
  -d "client_secret=your_client_secret" \\
  -d "scope=journals:read journals:write reports:read"`

const journalExample = `curl -X POST "https://my.accounted.app/api/journals" \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: $(uuidgen)" \\
  -d '{
    "reference": "INV-1001",
    "description": "Customer payment for invoice 1001",
    "lines": [
      {
        "account": "1100", 
        "debit": 500.00, 
        "credit": 0,
        "currency": "USD",
        "description": "Cash receipt"
      },
      {
        "account": "4000", 
        "debit": 0, 
        "credit": 500.00,
        "currency": "USD", 
        "description": "Revenue recognition"
      }
    ]
  }'`

const errorExamples = [
    {
        code: "VALIDATION_ERROR",
        message: "Request validation failed",
        example: `{
  "code": "VALIDATION_ERROR",
  "message": "Request validation failed",
  "details": {
    "field": "lines[0].debit",
    "error": "Must be a positive number"
  }
}`
    },
    {
        code: "IDEMPOTENCY_CONFLICT",
        message: "Idempotency key already used with different request",
        example: `{
  "code": "IDEMPOTENCY_CONFLICT",
  "message": "Idempotency key already used with different request",
  "details": {
    "idempotency_key": "550e8400-e29b-41d4-a716-446655440000",
    "original_request_id": "req_abc123"
  }
}`
    },
    {
        code: "PERIOD_CLOSED",
        message: "Cannot post to closed accounting period",
        example: `{
  "code": "PERIOD_CLOSED",
  "message": "Cannot post to closed accounting period",
  "details": {
    "period": "2024-01",
    "status": "closed",
    "closed_at": "2024-02-05T00:00:00Z"
  }
}`
    }
]

export default function APIPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4">API v1</Badge>
                    <h1 className="text-4xl font-bold mb-6">
                        API Documentation
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        OAuth-secured REST API with idempotency guarantees, consistent error handling,
                        and comprehensive accounting operations.
                    </p>
                </div>

                {/* Authentication Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="flex items-center mb-6">
                                <div
                                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                                    <Lock className="w-5 h-5 text-primary"/>
                                </div>
                                <h2 className="text-3xl font-bold">Authentication</h2>
                            </div>

                            <div className="prose prose-lg max-w-none mb-6">
                                <p className="text-muted-foreground mb-4">
                                    All API requests require OAuth 2.0 authentication using the client credentials flow.
                                    Obtain your API credentials from the dashboard after creating an account.
                                </p>

                                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold mb-2">Required Scopes</h4>
                                    <ul className="text-sm space-y-1">
                                        <li><code
                                            className="bg-background px-2 py-1 rounded text-xs">journals:read</code> -
                                            Read journal entries
                                        </li>
                                        <li><code
                                            className="bg-background px-2 py-1 rounded text-xs">journals:write</code> -
                                            Create and reverse journals
                                        </li>
                                        <li><code
                                            className="bg-background px-2 py-1 rounded text-xs">reports:read</code> -
                                            Access financial reports
                                        </li>
                                        <li><code
                                            className="bg-background px-2 py-1 rounded text-xs">accounts:read</code> -
                                            Read chart of accounts
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Button asChild>
                                <Link href="https://my.accounted.app/api-keys" target="_blank">
                                    Get API Keys
                                    <ExternalLink className="w-4 h-4 ml-2"/>
                                </Link>
                            </Button>
                        </div>

                        <div className="bg-muted/20 rounded-xl p-6">
                            <h4 className="font-semibold mb-4">Token Request</h4>
                            <pre className="text-sm overflow-x-auto bg-background border rounded p-4">
                <code>{authExample}</code>
              </pre>
                        </div>
                    </div>
                </section>

                {/* Idempotency Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="lg:order-2">
                            <div className="flex items-center mb-6">
                                <div
                                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                                    <RefreshCw className="w-5 h-5 text-primary"/>
                                </div>
                                <h2 className="text-3xl font-bold">Idempotency</h2>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    All POST and PUT requests support idempotency keys to ensure safe retries.
                                    Include an <code>Idempotency-Key</code> header with a unique UUID for each request.
                                </p>

                                <div className="bg-muted/30 rounded-lg p-4">
                                    <h4 className="font-semibold mb-2">Conflict Behavior</h4>
                                    <p className="text-sm text-muted-foreground">
                                        If the same idempotency key is used with different request data,
                                        the API returns a <code>409 Conflict</code> with details about the original
                                        request.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:order-1 bg-muted/20 rounded-xl p-6">
                            <h4 className="font-semibold mb-4">Journal Entry Example</h4>
                            <pre className="text-sm overflow-x-auto bg-background border rounded p-4">
                <code>{journalExample}</code>
              </pre>
                        </div>
                    </div>
                </section>

                {/* Endpoints Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Key Endpoints</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                method: "POST",
                                endpoint: "/api/journals",
                                description: "Create a new journal entry with multiple lines"
                            },
                            {
                                method: "GET",
                                endpoint: "/api/journals/:id",
                                description: "Retrieve a specific journal entry by ID"
                            },
                            {
                                method: "POST",
                                endpoint: "/api/journals/:id/reverse",
                                description: "Create a reversal entry for an existing journal"
                            },
                            {
                                method: "POST",
                                endpoint: "/api/import/bank",
                                description: "Import bank transactions with duplicate detection"
                            },
                            {
                                method: "GET",
                                endpoint: "/api/reports/trial-balance",
                                description: "Generate trial balance report for a period"
                            },
                            {
                                method: "GET",
                                endpoint: "/api/accounts",
                                description: "List chart of accounts with balances"
                            }
                        ].map((endpoint, index) => (
                            <div key={index} className="bg-background border rounded-xl p-6">
                                <div className="flex items-center mb-3">
                                    <Badge
                                        variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                                        className="mr-3 font-mono text-xs"
                                    >
                                        {endpoint.method}
                                    </Badge>
                                    <code className="text-sm font-mono">{endpoint.endpoint}</code>
                                </div>
                                <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Error Handling Section */}
                <section className="mb-16">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <div
                                className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center mr-4">
                                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400"/>
                            </div>
                            <h2 className="text-3xl font-bold">Error Schema</h2>
                        </div>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Consistent error format across all endpoints with detailed context for debugging.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {errorExamples.map((error, index) => (
                            <div key={index} className="bg-background border rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <code
                                        className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-3 py-1 rounded text-sm font-mono mr-3">
                                        {error.code}
                                    </code>
                                    <span className="text-sm text-muted-foreground">{error.message}</span>
                                </div>
                                <pre className="text-sm overflow-x-auto bg-muted/20 rounded p-4">
                  <code>{error.example}</code>
                </pre>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to integrate?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Start building with our API today. Full documentation and interactive examples available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button size="lg" asChild>
                            <Link href="https://my.accounted.app/signup" target="_blank">
                                Get API Access
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="https://docs.accounted.app" target="_blank">
                                Full Documentation
                                <ExternalLink className="w-4 h-4 ml-2"/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}