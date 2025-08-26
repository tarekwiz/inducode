import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Inducode Technologies - Sustainable Energy Solutions",
  description: "Leading provider of sustainable energy technologies and engineering solutions",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">
        <header className="border-b-2 border-border bg-card sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent border-2 border-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">I</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl text-foreground tracking-wider">INDUCODE</h1>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">TECHNOLOGIES</p>
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm">
                    Technologies & Solutions
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 w-64 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="relative group/nested">
                      <button className="w-full px-4 py-3 text-left hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm flex items-center justify-between">
                        Energy Technologies & Solutions
                        <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
                      </button>
                      <div className="absolute top-0 left-full w-56 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                        <Link
                          href="/combined-heat-power"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Combined Heat & Power (CHP)
                        </Link>
                        <Link
                          href="/tri-generation"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Tri-Generation
                        </Link>
                        <Link
                          href="/district-heating-cooling"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          District Heating & Cooling
                        </Link>
                        <Link
                          href="/waste-heat-to-power"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Waste Heat to Power
                        </Link>
                        <Link
                          href="/energy-transfer-stations"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Energy Transfer Stations
                        </Link>
                        <Link
                          href="/conventional-power-generation"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Conventional Power Generation
                        </Link>
                        <Link
                          href="/solar"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Solar
                        </Link>
                        <Link
                          href="/wind-powered-generation"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Wind Powered Generation (WPG)
                        </Link>
                        <Link
                          href="/fire-fighting-systems"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          Fire Fighting Systems
                        </Link>
                        <Link
                          href="/lpg-gas-safety-system"
                          className="block px-4 py-3 hover:bg-muted transition-colors font-medium uppercase tracking-wide text-sm"
                        >
                          LPG & GAS Safety System
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm">
                    Services
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/feasibility-studies" className="w-full uppercase tracking-wide text-sm font-medium">
                        Feasibility Studies
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/proposal-and-design" className="w-full uppercase tracking-wide text-sm font-medium">
                        Proposal And Design
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/project-implementation"
                        className="w-full uppercase tracking-wide text-sm font-medium"
                      >
                        Project Implementation
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/commissioning-solutions"
                        className="w-full uppercase tracking-wide text-sm font-medium"
                      >
                        Commissioning Solutions
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/operation-and-maintenance"
                        className="w-full uppercase tracking-wide text-sm font-medium"
                      >
                        Operation and Maintenance
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/project-finance" className="w-full uppercase tracking-wide text-sm font-medium">
                        Project Finance
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm">
                    About Us
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/why-us" className="w-full uppercase tracking-wide text-sm font-medium">
                        Why Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/vision-and-mission" className="w-full uppercase tracking-wide text-sm font-medium">
                        Vision and Mission
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/culture-and-strategy" className="w-full uppercase tracking-wide text-sm font-medium">
                        Culture and Strategy
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/values" className="w-full uppercase tracking-wide text-sm font-medium">
                        Values
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/operating-principles" className="w-full uppercase tracking-wide text-sm font-medium">
                        Operating Principles
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen bg-background">{children}</main>

        <footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">I</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
                    <p className="text-xs uppercase tracking-widest opacity-80">TECHNOLOGIES</p>
                  </div>
                </Link>
                <p className="text-sm opacity-80 leading-relaxed">
                  Inducode Technologies LLC is one of the world's most trusted providers of sustainable energy efficient
                  technologies for businesses.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wide">Services</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <Link
                      href="/feasibility-studies"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Feasibility Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/proposal-and-design"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Proposal And Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/project-implementation"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Project Implementation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/commissioning-solutions"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Commissioning Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/operation-and-maintenance"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Operation and Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/project-finance"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Project Finance
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wide">Technologies</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <Link
                      href="/combined-heat-power"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      CHP Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tri-generation"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Tri-Generation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solar"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Solar Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fire-fighting-systems"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Fire Fighting Systems
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wide">Contact Us</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <p>info@inducode.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>Houston, TX 77001, USA</p>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wide">
                Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
