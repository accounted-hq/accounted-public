"use client"

import Link from "next/link"
import {useState} from "react"
import Image from "next/image"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {navigation, site} from "@/lib/site-config"
import Logo from "@/assets/logo.svg"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-transparent before:to-blue-500/5 before:pointer-events-none">
      <div className="container mx-auto max-w-7xl flex h-16 items-center px-4 relative">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <Image
              src={Logo}
              alt={`${site.name} Logo`}
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-6">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link href="/api">View API</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={site.repoUrl} target="_blank">
                Deploy self-hosted
              </Link>
            </Button>
            <Button asChild>
              <Link href={site.appUrl} target="_blank">
                Launch app
              </Link>
            </Button>
          </div>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={Logo}
                  alt={`${site.name} Logo`}
                  width={120}
                  height={28}
                  className="h-6 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/api" onClick={() => setIsOpen(false)}>
                    View API
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={site.repoUrl} target="_blank">
                    Deploy self-hosted
                  </Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link href={site.appUrl} target="_blank">
                    Launch app
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}