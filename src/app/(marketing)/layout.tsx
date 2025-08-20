import { NavBar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}