"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="border-b-2 border-border bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/inducode-logo-color.png"
              alt="Inducode Technologies LLC"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2 text-muted-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2">
                About Inducode
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/why-us"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Why Inducode
                </Link>
                <Link
                  href="/vision-and-mission"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Vision & Mission
                </Link>
                <Link
                  href="/culture-and-strategy"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Culture & Strategy
                </Link>
                <Link
                  href="/values"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Values
                </Link>
                <Link
                  href="/operating-principles"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Operating Principles
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2">
                Technologies & Solutions
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 min-w-80 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/combined-heat-power"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Combined Heat & Power (CHP)
                </Link>
                <Link
                  href="/tri-generation"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Tri-Generation
                </Link>
                <Link
                  href="/district-heating-cooling"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  District Heating & Cooling
                </Link>
                <Link
                  href="/waste-heat-to-power"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Waste Heat to Power
                </Link>
                <Link
                  href="/energy-transfer-stations"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Energy Transfer Stations
                </Link>
                <Link
                  href="/conventional-power-generation"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Conventional Power Generation
                </Link>
                <Link
                  href="/solar"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Solar
                </Link>
                <Link
                  href="/wind-powered-generation"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Wind Powered Generation (WPG)
                </Link>
                <Link
                  href="/frequency-converter-400hz"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  60Hz to 400Hz Frequency Converters
                </Link>
                <Link
                  href="/frequency-converter-50hz"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  60Hz to 50Hz Frequency Converters
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-card border-2 border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/feasibility-studies"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Feasibility Studies
                </Link>
                <Link
                  href="/proposal-and-design"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Proposal And Design
                </Link>
                <Link
                  href="/project-implementation"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Project Implementation
                </Link>
                <Link
                  href="/commissioning-solutions"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Commissioning Solutions
                </Link>
                <Link
                  href="/operation-and-maintenance"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Operation and Maintenance
                </Link>
                <Link
                  href="/project-finance"
                  className="block px-4 py-3 hover:bg-muted hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm text-muted-foreground"
                >
                  Project Finance
                </Link>
              </div>
            </div>

            <Link
              href="/engineering-capabilities"
              className="flex items-center text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm p-2"
            >
              Engineering Capabilities
            </Link>
          </div>

          {/* Desktop Get Started Button */}
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-border bg-card">
            <div className="py-4 space-y-4">
              {/* Technologies & Solutions Mobile Dropdown */}
              <div>
                <button
                  className="w-full px-4 py-3 text-left flex items-center justify-between text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide text-sm"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                >
                  Technologies & Solutions
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdownOpen && (
                  <div className="pl-4 space-y-2 bg-muted border-t border-border">
                    <div className="py-2 space-y-1">
                      <Link
                        href="/combined-heat-power"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Combined Heat & Power (CHP)
                      </Link>
                      <Link
                        href="/tri-generation"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tri-Generation
                      </Link>
                      <Link
                        href="/district-heating-cooling"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        District Heating & Cooling
                      </Link>
                      <Link
                        href="/waste-heat-to-power"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Waste Heat to Power
                      </Link>
                      <Link
                        href="/energy-transfer-stations"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Energy Transfer Stations
                      </Link>
                      <Link
                        href="/conventional-power-generation"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Conventional Power Generation
                      </Link>
                      <Link
                        href="/solar"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Solar
                      </Link>
                      <Link
                        href="/wind-powered-generation"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Wind Powered Generation (WPG)
                      </Link>
                      <Link
                        href="/fire-fighting-systems"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Fire Fighting Systems
                      </Link>
                      <Link
                        href="/lpg-gas-safety-system"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        LPG & GAS Safety System
                      </Link>
                      <Link
                        href="/thermo-and-heating-systems"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Thermo and Heating Systems
                      </Link>
                      <Link
                        href="/comfort-hvac-technologies"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Comfort & HVAC Technologies
                      </Link>
                      <Link
                        href="/low-medium-voltage-distribution"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Low & Medium Voltage Distribution
                      </Link>
                      <Link
                        href="/low-current-system"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Low Current System
                      </Link>
                      <Link
                        href="/energy-solutions"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Energy Solutions
                      </Link>
                      <Link
                        href="/frequency-converter-400hz"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        60Hz to 400Hz Converters
                      </Link>
                      <Link
                        href="/frequency-converter-50hz"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent hover:bg-background transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        60Hz to 50Hz Converters
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Engineering Capabilities Mobile */}
              <div className="px-4 py-3 border-t border-border">
                <Link
                  href="/engineering-capabilities"
                  className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors font-medium uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Engineering Capabilities
                </Link>
              </div>

              {/* Services Mobile */}
              <div className="px-4 py-3 border-t border-border">
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                  Services
                </p>
                <div className="space-y-1">
                  <Link
                    href="/feasibility-studies"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Feasibility Studies
                  </Link>
                  <Link
                    href="/proposal-and-design"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Proposal And Design
                  </Link>
                  <Link
                    href="/project-implementation"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Project Implementation
                  </Link>
                  <Link
                    href="/commissioning-solutions"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Commissioning Solutions
                  </Link>
                  <Link
                    href="/operation-and-maintenance"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Operation and Maintenance
                  </Link>
                  <Link
                    href="/project-finance"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Project Finance
                  </Link>
                </div>
              </div>

              {/* About Us Mobile */}
              <div className="px-4 py-3 border-t border-border">
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-3">
                  About Inducode
                </p>
                <div className="space-y-1">
                  <Link
                    href="/why-us"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Why Inducode
                  </Link>
                  <Link
                    href="/vision-and-mission"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/culture-and-strategy"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Culture & Strategy
                  </Link>
                  <Link
                    href="/values"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Values
                  </Link>
                  <Link
                    href="/operating-principles"
                    className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Operating Principles
                  </Link>
                </div>
              </div>

              {/* Mobile Get Started Button */}
              <div className="px-4 py-3 border-t border-border">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
