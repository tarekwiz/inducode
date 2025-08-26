import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sun, Zap, Thermometer, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function SolarPage() {
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
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
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
              Solar Energy Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">SOLAR</span>
              <br />
              <span className="text-accent">ENERGY TECHNOLOGIES</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive solar energy solutions from photovoltaic systems to concentrated solar power and thermal
              heating applications.
            </p>
          </div>
        </div>
      </section>

      {/* Solar Technologies Section */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">
              Solar Technologies
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* PV Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
              <div className="border-b-2 border-border flex justify-center p-8">
                <Sun className="size-20 group-hover:text-accent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
                  Photovoltaic Solar Systems
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Photovoltaic Solar Systems involve PV cells which capture the sun's energy and directly generate
                  electricity using the 'Photo-electric Effect'.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">500 kWe to 10 MWe Solutions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Direct Electricity Generation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Photo-electric Effect Technology</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CSP Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
              <div className="border-b-2 border-border flex justify-center p-8">
                <Zap className="size-20 group-hover:text-accent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
                  Concentrated Solar Power (CSP)
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Concentrated Solar Power (CSP) technology stores the energy from solar radiation in a working fluid in
                  the form of heat. This heat can then be used to run conventional power generation cycles.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Power Tower Systems</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Parabolic Trough Systems</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Dish Sterling Systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solar Heating Section */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-border hover:border-accent bg-card p-0">
              <div className="border-b-2 border-border flex justify-center p-8">
                <Thermometer className="size-20 group-hover:text-accent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
                  Solar Heating Solutions
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The Solar Hot Water system is now a mature technology. The benefits of choosing to install a solar hot
                  water system are significant when viewed through a long-term perspective.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Solar Thermal Collectors</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Thermal Storage Tank</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span className="text-muted-foreground">Solar Controller & Protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-wide">Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solar heating solutions for various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Residential Complexes", "Hotels", "Hospitals", "Industrial Facilities"].map((application, index) => (
              <Card key={index} className="border-2 border-border hover:border-accent transition-colors bg-card">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-foreground uppercase tracking-wide">{application}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted border-t-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">Get Solar Quote</h2>
            <p className="text-lg text-muted-foreground">
              Ready to harness solar energy for your project? Contact our solar experts today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-border hover:bg-background font-bold uppercase tracking-wide bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">info@inducode.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
