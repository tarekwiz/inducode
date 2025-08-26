import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Network } from "lucide-react"
import Link from "next/link"

export default function DistrictHeatingCooling() {
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
              Energy Distribution Systems
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">DISTRICT HEATING</span>
              <br />
              <span className="text-accent">& COOLING SYSTEMS</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A District Cooling/Heating system distributes energy in the form of chilled water, hot water or steam from
              a central source to high density developments through a network of pipes.
            </p>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
                Centralized Energy Distribution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The central source (energy centre) allows for the incorporation of high efficiency generation from
                fossil fuel and renewable sources. The thermal energy is provided from a central plant which eliminates
                the need for separate cooling/heating systems in individual buildings, homes and businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Heat exchangers are used at the point of consumption to transfer the energy at the required temperature
                often referred to as Heat Interface Unit (HIU). District energy networks have been used for many years
                throughout the world and in some European cities provide up to 80% of a city's heat requirement.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-accent/10 border-2 border-accent flex items-center justify-center">
                <Network className="h-32 w-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              District Heating & Cooling Benefits
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Energy Efficiency", description: "Centralized systems achieve higher efficiency rates" },
              { title: "Reduced Costs", description: "Lower operational and maintenance costs per unit" },
              { title: "Constant and Reliable", description: "Consistent energy supply with backup systems" },
              {
                title: "Maximum Work/Living Space",
                description: "No storage required locally, maximizing usable space",
              },
              { title: "Environmental Friendly", description: "Reduced carbon footprint through efficient generation" },
              { title: "Cost Effective", description: "Economies of scale reduce per-unit energy costs" },
              { title: "Improved Ratings", description: "Enhanced building energy performance ratings" },
              { title: "Continuous Supply", description: "24/7 chilled/hot water availability" },
              { title: "Centrally Controlled", description: "Increased reliability through centralized monitoring" },
              { title: "Low Maintenance", description: "Reduced maintenance requirements for end users" },
            ].map((benefit, index) => (
              <Card key={index} className="border-2 border-border hover:border-accent transition-colors bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center mx-auto mb-4">
                    <div className="w-2 h-2 bg-accent-foreground"></div>
                  </div>
                  <h3 className="font-bold text-foreground uppercase tracking-wide mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inducode Expertise */}
      <section className="py-20 bg-muted border-t-2 border-b-2 border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Inducode's District Energy Expertise
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              With the integration of the latest technology District Energy Systems from PEWO our German partner we
              deliver the most reliable and efficient energy solutions. PEWO's manufacturing and district energy
              experience combined with Inducode's engineering excellence delivers the highest quality projects.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-accent uppercase tracking-wide">Our Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Experience in CHP, Tri-generation, boilers and chiller, steam, biomass and renewable</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Clear demarcation within an overall project</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>In house expertise with latest designs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Proven supply chain</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-accent uppercase tracking-wide">Project Excellence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Experience in high rise developments and multi-building projects</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Complete billing and management system</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Flexible approach with decisive action</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent mr-3"></div>
                    <span>Dedicated project management ensuring on time delivery</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground uppercase tracking-wide">
              Ready to Implement District Energy?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contact our team to discuss how district heating and cooling systems can benefit your development project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent font-bold uppercase tracking-wide">
                <Link href="/#contact">Get Consultation</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-border hover:bg-muted font-bold uppercase tracking-wide bg-transparent"
              >
                <Link href="/">View All Technologies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
