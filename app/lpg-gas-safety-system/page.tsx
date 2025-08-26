import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Fuel, Shield, Settings, Gauge, AlertTriangle, Zap } from "lucide-react"
import Link from "next/link"

export default function LPGGasSafetySystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="w-fit bg-muted text-muted-foreground border-2 border-border font-bold uppercase tracking-wide mx-auto"
            >
              Gas Safety Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">LPG & GAS</span>
              <br />
              <span className="text-accent">SAFETY SYSTEMS</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Comprehensive LPG plant design and advanced gas safety detection systems to protect your people and
              facilities under the most demanding conditions.
            </p>
          </div>
        </div>
      </section>

      {/* LPG Overview Section */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
                Liquefied Petroleum Gas (LPG)
              </h2>
              <div className="w-24 h-1 bg-accent"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Liquefied Petroleum Gas (LPG) is a clean and safe fuel that has a range of properties closest to petrol.
                It is a by-product of petrol refining and natural gas production. Under slight pressure, LPG turns into
                liquid form and can then be stored in tanks. LPG is converted back to gas before being burned in the
                engine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In every LPG or GAS plant our experience lives in innovations and ongoing challenges that thrust us
                every day towards the future. We are in for a constant evolution, in line with our customers' highest
                expectations, in terms of quality and competitiveness.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent/10 border-2 border-accent flex items-center justify-center">
                <Fuel className="h-32 w-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LPG Plant Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">LPG Plant Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are the leader group in creating technologically advanced products and services for natural gas
              distribution and use, targeting our research on the coverage of all needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">LPG Plant Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  LPG/SNG/LNG Plant Design with comprehensive engineering solutions
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">Network Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  LPG: Air, and Steam Network Systems design and implementation
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">Testing & Commissioning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  LPG Plant Testing & Commissioning services with quality assurance
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide text-sm">Panel Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  LPG Panel Monitoring systems for safe and efficient operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gas Safety Systems */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">Gas Safety Systems</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              No matter how extreme or demanding the conditions, your people and facilities come first. That's why
              Inducode Technologies LLC is dedicated to offering the most comprehensive and advanced detection
              technologies available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide">Gas Safety Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive gas detection and safety systems designed to excel under the toughest conditions
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide">Gas Leak Detection</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Advanced gas leak detection systems to identify and alert of potential hazards immediately
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent uppercase tracking-wide">Ultrasonic Detection</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Ultra sonic leak detection technology for precise monitoring and early warning systems
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
              Ready to Enhance Your Gas Safety?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact our experts to discuss your LPG plant design and gas safety system requirements. We're here to
              help keep your people safe and operations running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                <Link href="/#contact" className="flex items-center">
                  Get Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
              >
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
