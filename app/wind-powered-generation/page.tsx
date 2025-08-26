import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Wind,
  Zap,
  Settings,
  Shield,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function WindPoweredGeneration() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
            >
              Wind Energy Solutions
            </Badge>
            <h1 className="text-3xl  lg:text-4xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">WIND POWERED</span>
              <br />
              <span className="text-accent">GENERATION (WPG)</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              In the current climate of rising energy prices and uncertain
              fossil fuel price stability, and with the increasing impact of
              'carbon taxes' or carbon trading schemes on-site WPG provides an
              attractive and economic alternative to imported grid electricity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
                  The Concept
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The concept is to use the natural wind resource at an
                  industrial facility to generate power for consumption on-site.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground uppercase tracking-wide">
                  The Inducode WPG Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inducode can offer a complete turnkey solution from the design
                  stage right through to commissioning.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent/10 border-2 border-accent flex items-center justify-center">
                <Wind className="h-32 w-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
              Our WPG Solutions Include
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">
                  Design & Install
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Complete design, installation, operation and maintenance of
                  on-site WPG systems
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">
                  Power Range
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  One or more turbines with power output range 300 kW – 2 MW
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Wind className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">
                  Height Range
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Turbine heights ranging from 40 – 80 meters for optimal wind
                  capture
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">
                  Full Service
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  EPC, BOT or PPA type contracts with decommissioning services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Contract Options
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-border bg-card p-6">
              <CardContent className="text-center space-y-4 p-0">
                <h3 className="text-xl font-bold text-accent uppercase tracking-wide">
                  EPC
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Engineering, Procurement, and Construction contracts for
                  complete project delivery
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card p-6">
              <CardContent className="text-center space-y-4 p-0">
                <h3 className="text-xl font-bold text-accent uppercase tracking-wide">
                  BOT
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build, Operate, Transfer agreements for long-term energy
                  solutions
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-card p-6">
              <CardContent className="text-center space-y-4 p-0">
                <h3 className="text-xl font-bold text-accent uppercase tracking-wide">
                  PPA
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Power Purchase Agreements for flexible energy procurement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Ready to Harness Wind Power?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact our wind energy experts to discuss your on-site wind power
              generation requirements and discover how WPG can reduce your
              energy costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                Get Wind Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">
                    I
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-wider">INDUCODE</h3>
                  <p className="text-xs uppercase tracking-widest opacity-80">
                    TECHNOLOGIES
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Leading provider of sustainable wind energy solutions for
                industrial facilities.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-wide">
                Contact Info
              </h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@inducode.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Sheridan, WY 82801, USA</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>
                    <Link
                      href="/"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      Home
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
                      href="/combined-heat-power"
                      className="hover:opacity-100 hover:text-accent transition-colors uppercase tracking-wide"
                    >
                      CHP Systems
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80 uppercase tracking-wide">
                Copyright 2025 Inducode Technologies LLC. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
